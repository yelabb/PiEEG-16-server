import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import SessionLobby from "./components/SessionLobby";
import ShareView from "./components/ShareView";
import "./index.css";

const RELAY_PATH_RE = /^\/live\/([0-9a-f-]{36})$/i;

function Root() {
  const [wsUrl, setWsUrl] = useState<string | null>(null);

  // Check for /live/{relayId} viewer route
  const relayMatch = location.pathname.match(RELAY_PATH_RE);
  if (relayMatch) {
    return <ShareView relayId={relayMatch[1]} />;
  }

  if (!wsUrl) return <SessionLobby onConnect={setWsUrl} />;
  return <App wsUrl={wsUrl} onDisconnect={() => setWsUrl(null)} />;
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
