"""
Tests for the webhook store — rule CRUD, persistence, HTTP relay.
"""

import asyncio
import json
import time
from pathlib import Path
from unittest.mock import MagicMock, patch

import pytest

from pieeg_server.webhooks import WebhookStore, WebhookRule, SERVICE_TYPES


# ── Fixtures ───────────────────────────────────────────────────────────────

@pytest.fixture
def tmp_rules(tmp_path):
    return tmp_path / "webhooks.json"


@pytest.fixture
def store(tmp_rules):
    return WebhookStore(rules_path=tmp_rules)


# ── WebhookRule unit tests ─────────────────────────────────────────────────

class TestWebhookRule:
    def test_default_id_generated(self):
        r = WebhookRule(name="test")
        assert r.id
        assert len(r.id) == 8

    def test_roundtrip_dict(self):
        r = WebhookRule(name="Alpha Alert", trigger_type="band_power_above",
                        params={"band": "alpha", "threshold": 10},
                        url="https://example.com/hook", cooldown=5)
        d = r.to_dict()
        assert d["name"] == "Alpha Alert"
        assert d["trigger_type"] == "band_power_above"
        r2 = WebhookRule.from_dict(d)
        assert r2.id == r.id
        assert r2.name == r.name
        assert r2.params == r.params
        assert r2.url == r.url

    def test_from_dict_ignores_unknown_keys(self):
        d = {"name": "test", "unknown_field": True}
        r = WebhookRule.from_dict(d)
        assert r.name == "test"


# ── Rule CRUD ──────────────────────────────────────────────────────────────

class TestRuleCRUD:
    def test_create_and_list(self, store):
        result = store.create_rule({
            "name": "Test1",
            "trigger_type": "band_power_above",
            "params": {"band": "alpha", "threshold": 15},
            "url": "https://example.com",
            "cooldown": 10,
        })
        assert result["name"] == "Test1"
        assert result["id"]
        rules = store.list_rules()
        assert len(rules) == 1
        assert rules[0]["id"] == result["id"]

    def test_update(self, store):
        r = store.create_rule({"name": "Rule1", "url": "https://a.com"})
        updated = store.update_rule(r["id"], {"name": "Updated"})
        assert updated["name"] == "Updated"
        assert updated["url"] == "https://a.com"

    def test_update_nonexistent(self, store):
        assert store.update_rule("nope", {"name": "x"}) is None

    def test_delete(self, store):
        r = store.create_rule({"name": "ToDelete"})
        assert store.delete_rule(r["id"]) is True
        assert len(store.list_rules()) == 0

    def test_delete_nonexistent(self, store):
        assert store.delete_rule("nope") is False

    def test_get_rule(self, store):
        r = store.create_rule({"name": "Find me"})
        found = store.get_rule(r["id"])
        assert found["name"] == "Find me"

    def test_get_rule_nonexistent(self, store):
        assert store.get_rule("nope") is None


# ── Persistence ────────────────────────────────────────────────────────────

class TestPersistence:
    def test_save_and_reload(self, tmp_rules):
        s1 = WebhookStore(rules_path=tmp_rules)
        s1.create_rule({"name": "Persistent", "url": "https://a.com"})
        assert tmp_rules.exists()

        s2 = WebhookStore(rules_path=tmp_rules)
        rules = s2.list_rules()
        assert len(rules) == 1
        assert rules[0]["name"] == "Persistent"

    def test_corrupt_file_fallback(self, tmp_rules):
        tmp_rules.write_text("NOT JSON")
        s = WebhookStore(rules_path=tmp_rules)
        assert len(s.list_rules()) == 0


# ── HTTP relay ─────────────────────────────────────────────────────────────

class TestHTTPRelay:
    @patch("pieeg_server.webhooks.urlopen")
    def test_send_http_post(self, mock_urlopen, store):
        mock_resp = MagicMock()
        mock_resp.status = 200
        mock_resp.__enter__ = MagicMock(return_value=mock_resp)
        mock_resp.__exit__ = MagicMock(return_value=False)
        mock_urlopen.return_value = mock_resp

        rule = WebhookRule(name="Test", url="https://example.com/hook",
                           trigger_type="band_power_above",
                           params={"threshold": 10})
        store._send_http(rule, 15.0)
        mock_urlopen.assert_called_once()
        req = mock_urlopen.call_args[0][0]
        assert req.full_url == "https://example.com/hook"
        assert req.method == "POST"

    @patch("pieeg_server.webhooks.urlopen")
    def test_send_http_with_auth_header(self, mock_urlopen, store):
        mock_resp = MagicMock()
        mock_resp.status = 200
        mock_resp.__enter__ = MagicMock(return_value=mock_resp)
        mock_resp.__exit__ = MagicMock(return_value=False)
        mock_urlopen.return_value = mock_resp

        rule = WebhookRule(name="Auth", url="https://example.com/hook",
                           headers={"Authorization": "Bearer tok123"},
                           params={})
        store._send_http(rule, 5.0)
        req = mock_urlopen.call_args[0][0]
        assert req.get_header("Authorization") == "Bearer tok123"

    @patch("pieeg_server.webhooks.urlopen", side_effect=Exception("timeout"))
    def test_send_http_handles_failure(self, mock_urlopen, store):
        rule = WebhookRule(name="Test", url="https://fail.com",
                           trigger_type="band_power_above", params={})
        # Should not raise
        store._send_http(rule, 10.0)


# ── fire_rule with cooldown ───────────────────────────────────────────────

class TestFireRule:
    @pytest.mark.asyncio
    @patch("pieeg_server.webhooks.urlopen")
    async def test_fire_rule_success(self, mock_urlopen, store):
        mock_resp = MagicMock()
        mock_resp.status = 200
        mock_resp.__enter__ = MagicMock(return_value=mock_resp)
        mock_resp.__exit__ = MagicMock(return_value=False)
        mock_urlopen.return_value = mock_resp

        r = store.create_rule({"name": "Fire", "url": "https://a.com", "cooldown": 0.1})
        result = await store.fire_rule(r["id"], 42.0)
        assert result["ok"] is True

    @pytest.mark.asyncio
    async def test_fire_rule_not_found(self, store):
        result = await store.fire_rule("nonexistent", 0)
        assert result["ok"] is False
        assert result["error"] == "rule_not_found"

    @pytest.mark.asyncio
    @patch("pieeg_server.webhooks.urlopen")
    async def test_fire_rule_cooldown(self, mock_urlopen, store):
        mock_resp = MagicMock()
        mock_resp.status = 200
        mock_resp.__enter__ = MagicMock(return_value=mock_resp)
        mock_resp.__exit__ = MagicMock(return_value=False)
        mock_urlopen.return_value = mock_resp

        r = store.create_rule({"name": "CD", "url": "https://a.com", "cooldown": 60})
        result1 = await store.fire_rule(r["id"], 1.0)
        assert result1["ok"] is True
        result2 = await store.fire_rule(r["id"], 2.0)
        assert result2["ok"] is False
        assert result2["error"] == "cooldown"

    @pytest.mark.asyncio
    async def test_fire_rule_no_url(self, store):
        r = store.create_rule({"name": "NoURL", "url": ""})
        result = await store.fire_rule(r["id"], 1.0)
        assert result["ok"] is False
        assert result["error"] == "no_url"


# ── Service types ──────────────────────────────────────────────────────────

class TestServiceTypes:
    def test_service_field_default(self):
        r = WebhookRule(name="test")
        assert r.service == "generic"

    def test_service_field_roundtrip(self):
        r = WebhookRule(name="ifttt rule", service="ifttt")
        d = r.to_dict()
        assert d["service"] == "ifttt"
        r2 = WebhookRule.from_dict(d)
        assert r2.service == "ifttt"

    def test_invalid_service_defaults_to_generic(self):
        r = WebhookRule(name="bad", service="unknown_service")
        assert r.service == "generic"

    def test_create_rule_with_service(self, store):
        r = store.create_rule({
            "name": "Zapier",
            "service": "zapier",
            "url": "https://hooks.zapier.com/hooks/catch/123/abc/",
        })
        assert r["service"] == "zapier"

    def test_update_rule_service(self, store):
        r = store.create_rule({"name": "Rule", "url": "https://a.com"})
        updated = store.update_rule(r["id"], {"service": "ifttt"})
        assert updated["service"] == "ifttt"


# ── Payload formatting ────────────────────────────────────────────────────

class TestPayloadFormatting:
    def test_generic_payload(self, store):
        rule = WebhookRule(name="Test", service="generic",
                           trigger_type="band_power_above",
                           params={"threshold": 10, "channel": 0})
        payload = store._build_payload(rule, 15.0)
        assert payload["event"] == "band_power_above"
        assert payload["value"] == 15.0
        assert payload["threshold"] == 10
        assert "value1" not in payload

    def test_ifttt_payload(self, store):
        rule = WebhookRule(name="IFTTT Test", service="ifttt",
                           trigger_type="band_power_above",
                           params={"threshold": 10})
        payload = store._build_payload(rule, 12.5)
        assert payload["value1"] == "12.5"
        assert payload["value2"] == "band_power_above"
        assert "value3" in payload
        # value3 should be valid JSON
        import json
        parsed = json.loads(payload["value3"])
        assert parsed["value"] == 12.5

    def test_zapier_payload(self, store):
        rule = WebhookRule(name="Zapier Test", service="zapier",
                           trigger_type="band_ratio_above",
                           params={"threshold": 1.5, "numerator": "alpha",
                                   "denominator": "theta", "channel": 2})
        payload = store._build_payload(rule, 2.1)
        assert payload["event"] == "band_ratio_above"
        assert payload["value"] == 2.1
        assert payload["source"] == "pieeg"
        assert payload["band"] == ""
        assert payload["numerator"] == "alpha"
        assert payload["denominator"] == "theta"

    @patch("pieeg_server.webhooks.urlopen")
    def test_ifttt_http_sends_value_keys(self, mock_urlopen, store):
        mock_resp = MagicMock()
        mock_resp.status = 200
        mock_resp.__enter__ = MagicMock(return_value=mock_resp)
        mock_resp.__exit__ = MagicMock(return_value=False)
        mock_urlopen.return_value = mock_resp

        rule = WebhookRule(
            name="IFTTT", service="ifttt",
            url="https://maker.ifttt.com/trigger/test/json/with/key/abc123",
            trigger_type="amplitude_above",
            params={"threshold": 100},
        )
        store._send_http(rule, 150.0)
        req = mock_urlopen.call_args[0][0]
        body = json.loads(req.data.decode())
        assert "value1" in body
        assert "value2" in body
        assert "value3" in body


# ── Cleanup ────────────────────────────────────────────────────────────────

class TestCleanup:
    def test_stop(self, store):
        store.stop()  # should not raise
