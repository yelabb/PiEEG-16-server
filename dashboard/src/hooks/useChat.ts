// ─────────────────────────────────────────────────────────────────────────────
// useChat — vendor-agnostic LLM chat via raw fetch + SSE streaming.
//
// Works with any OpenAI-compatible endpoint:
//   OpenAI, Anthropic (via /v1), Ollama, LM Studio, Groq, Together, etc.
//
// "Eco mode" (no key): echoes the current EEG context snapshot so the user
// can see exactly what the AI would receive — useful for debugging prompts.
// ─────────────────────────────────────────────────────────────────────────────

import { useState, useRef, useCallback } from "react";
import type { EEGData } from "../types";
import { SAMPLE_RATE } from "../types";
import { FftEngine, FREQUENCY_BANDS } from "../lib/fftEngine";
import { buildVideoContext, type VideoContextData } from "./useVideoContext";

// ── Types ────────────────────────────────────────────────────────────────

export interface ChatMessage {
  role: "system" | "user" | "assistant";
  content: string;
}

export interface ChatConfig {
  endpoint: string;
  apiKey: string;
  model: string;
}

export interface UseChatReturn {
  messages: ChatMessage[];
  streaming: boolean;
  error: string | null;
  config: ChatConfig;
  setConfig: (c: ChatConfig) => void;
  send: (text: string) => void;
  clear: () => void;
}

// ── Helpers ──────────────────────────────────────────────────────────────

const FFT_N = 256;
const fft = new FftEngine(FFT_N, SAMPLE_RATE);

function buildEEGContext(eegData: EEGData): string {
  const { buffers, writeIndex, samplesInBuffer, bufferSize } = eegData;
  const wi = writeIndex.current;
  const count = samplesInBuffer.current;
  if (count < FFT_N) return "EEG: insufficient data (buffering).";

  const lines: string[] = ["## Live EEG Snapshot"];
  const allBands: Record<string, number[]> = {};
  for (const b of FREQUENCY_BANDS) allBands[b.name] = [];

  let activeCh = 0;
  const nCh = eegData.numChannels;
  for (let ch = 0; ch < nCh; ch++) {
    const result = fft.analyseRing(buffers.current[ch], wi, count);
    if (!result) continue;
    activeCh++;

    const bp = result.bandPowers;
    for (const b of FREQUENCY_BANDS) {
      allBands[b.name].push(bp[b.name] ?? 0);
    }

    // Per-channel one-liner
    const dom = result.dominantFrequency.toFixed(1);
    const tot = result.totalPower.toFixed(1);
    lines.push(`Ch${ch + 1}: peak ${dom} Hz, power ${tot} µV²`);
  }

  // Average band powers across channels
  if (activeCh > 0) {
    lines.push("\n### Average Band Powers (µV²)");
    for (const b of FREQUENCY_BANDS) {
      const arr = allBands[b.name];
      const avg = arr.reduce((a, v) => a + v, 0) / activeCh;
      lines.push(`${b.label}: ${avg.toFixed(2)}`);
    }
  }

  lines.push(`\nChannels: ${activeCh}/${nCh} active, ${SAMPLE_RATE} Hz sample rate`);
  return lines.join("\n");
}

const SYSTEM_PROMPT =
  `You are an EEG research assistant embedded in the PiEEG dashboard. ` +
  `You can see a live snapshot of the user's EEG spectral data (band powers, ` +
  `dominant frequencies) and a webcam-based video context (blinks, head ` +
  `movement, jaw activity). Use video context to identify likely artifact ` +
  `sources in the EEG data — for example, blinks cause frontal spikes ` +
  `(Fp1/Fp2), head movement causes broadband artifacts, and jaw clenching ` +
  `causes high-frequency EMG on temporal channels (T7/T8). Answer questions ` +
  `about the data, suggest interpretations, and help with EEG analysis. ` +
  `Be concise. Remember: this is a research tool, not a medical device.`;

// ── Hook ─────────────────────────────────────────────────────────────────

const DEFAULT_CONFIG: ChatConfig = {
  endpoint: "https://api.openai.com/v1/chat/completions",
  apiKey: "",
  model: "gpt-4o-mini",
};

const CONFIG_KEY = "pieeg-chat-config";

function loadConfig(): ChatConfig {
  try {
    const raw = localStorage.getItem(CONFIG_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      return { ...DEFAULT_CONFIG, ...parsed };
    }
  } catch { /* ignore */ }
  return { ...DEFAULT_CONFIG };
}

function saveConfig(c: ChatConfig) {
  // Never persist the API key to localStorage for security
  const toSave = { endpoint: c.endpoint, model: c.model };
  localStorage.setItem(CONFIG_KEY, JSON.stringify(toSave));
}

export function useChat(eegData: EEGData, videoData?: VideoContextData): UseChatReturn {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [streaming, setStreaming] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [config, setConfigState] = useState<ChatConfig>(loadConfig);
  const abortRef = useRef<AbortController | null>(null);

  const setConfig = useCallback((c: ChatConfig) => {
    setConfigState(c);
    saveConfig(c);
  }, []);

  const clear = useCallback(() => {
    if (abortRef.current) abortRef.current.abort();
    setMessages([]);
    setError(null);
    setStreaming(false);
  }, []);

  const send = useCallback(
    (text: string) => {
      if (!text.trim() || streaming) return;

      const eegCtx = buildEEGContext(eegData);
      const vidCtx = videoData ? buildVideoContext(videoData) : "";
      const fullCtx = vidCtx ? `${eegCtx}\n\n${vidCtx}` : eegCtx;
      const userMsg: ChatMessage = { role: "user", content: text.trim() };

      setMessages((prev) => [...prev, userMsg]);
      setError(null);

      // ── Eco mode: no API key → show context snapshot ──────────────
      if (!config.apiKey) {
        const ecoReply: ChatMessage = {
          role: "assistant",
          content:
            `**Eco mode** — no API key configured. Here's what the AI would see:\n\n` +
            `---\n**System prompt:**\n${SYSTEM_PROMPT}\n\n` +
            `**EEG context:**\n${eegCtx}\n\n` +
            (vidCtx ? `**Video context:**\n${vidCtx}\n\n` : "") +
            `**Your message:**\n${text.trim()}\n---\n\n` +
            `Add your API key & endpoint in ⚙ Settings to enable AI responses.`,
        };
        setMessages((prev) => [...prev, ecoReply]);
        return;
      }

      // ── Streaming fetch ──────────────────────────────────────────
      const controller = new AbortController();
      abortRef.current = controller;
      setStreaming(true);

      const isAnthropic = config.endpoint.includes("anthropic.com");

      const conversationHistory: ChatMessage[] = [
        ...messages.slice(-20),
        userMsg,
      ];

      (async () => {
        try {
          let headers: Record<string, string>;
          let body: string;

          if (isAnthropic) {
            // ── Anthropic Messages API ──────────────────────────────
            headers = {
              "Content-Type": "application/json",
              "x-api-key": config.apiKey,
              "anthropic-version": "2023-06-01",
              "anthropic-dangerous-direct-browser-access": "true",
            };
            body = JSON.stringify({
              model: config.model,
              max_tokens: 4096,
              system: `${SYSTEM_PROMPT}\n\n${fullCtx}`,
              messages: conversationHistory.filter((m) => m.role !== "system"),
              stream: true,
            });
          } else {
            // ── OpenAI-compatible endpoint ──────────────────────────
            headers = { "Content-Type": "application/json" };
            if (config.apiKey) {
              headers["Authorization"] = `Bearer ${config.apiKey}`;
            }
            const apiMessages: ChatMessage[] = [
              { role: "system", content: `${SYSTEM_PROMPT}\n\n${fullCtx}` },
              ...conversationHistory,
            ];
            body = JSON.stringify({
              model: config.model,
              messages: apiMessages,
              stream: true,
            });
          }

          const res = await fetch(config.endpoint, {
            method: "POST",
            headers,
            body,
            signal: controller.signal,
          });

          if (!res.ok) {
            const body = await res.text();
            throw new Error(`${res.status}: ${body.slice(0, 200)}`);
          }

          const reader = res.body?.getReader();
          if (!reader) throw new Error("No response body");

          const decoder = new TextDecoder();
          let partial = "";
          let assistantText = "";

          // Push placeholder assistant message
          setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

          while (true) {
            const { done, value } = await reader.read();
            if (done) break;

            partial += decoder.decode(value, { stream: true });
            const lines = partial.split("\n");
            partial = lines.pop() ?? "";

            for (const line of lines) {
              const trimmed = line.trim();
              if (!trimmed.startsWith("data: ")) continue;
              const payload = trimmed.slice(6);
              if (payload === "[DONE]") break;

              try {
                const chunk = JSON.parse(payload);
                // OpenAI format: choices[0].delta.content
                // Anthropic format: type "content_block_delta", delta.text
                const delta =
                  chunk.choices?.[0]?.delta?.content ??
                  (chunk.type === "content_block_delta" ? chunk.delta?.text : undefined);
                if (delta) {
                  assistantText += delta;
                  const text = assistantText; // capture for closure
                  setMessages((prev) => {
                    const copy = [...prev];
                    copy[copy.length - 1] = { role: "assistant", content: text };
                    return copy;
                  });
                }
              } catch {
                // skip malformed SSE chunks
              }
            }
          }
        } catch (err: unknown) {
          if ((err as Error).name === "AbortError") return;
          setError((err as Error).message);
        } finally {
          setStreaming(false);
          abortRef.current = null;
        }
      })();
    },
    [config, eegData, videoData, messages, streaming]
  );

  return { messages, streaming, error, config, setConfig, send, clear };
}
