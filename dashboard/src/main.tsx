import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import SessionLobby from "./components/SessionLobby";
import "./index.css";

if (import.meta.env.VITE_SERVER_URL) {
  document.title = "PiEEG Demo";
}

function Root() {
  const [wsUrl, setWsUrl] = useState<string | null>(null);

  if (!wsUrl) return <SessionLobby onConnect={setWsUrl} />;
  return <App wsUrl={wsUrl} />;
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
