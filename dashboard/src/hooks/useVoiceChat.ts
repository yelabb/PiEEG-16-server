/**
 * WebRTC voice chat hook.
 *
 * Uses the relay WebSocket for signaling (offer/answer/ICE) and creates
 * peer-to-peer audio connections between viewers. Fully mesh topology —
 * each viewer connects to every other viewer directly.
 */

import { useEffect, useRef, useState, useCallback } from "react";
import type { ViewerInfo } from "../types";

const ICE_SERVERS: RTCIceServer[] = [
  { urls: "stun:stun.l.google.com:19302" },
  { urls: "stun:stun1.l.google.com:19302" },
];

interface PeerState {
  pc: RTCPeerConnection;
  audio: HTMLAudioElement;
}

export interface UseVoiceChatReturn {
  /** Whether the mic is active and transmitting. */
  speaking: boolean;
  /** Toggle mic on/off. */
  toggleMic: () => void;
  /** IDs of viewers currently transmitting audio. */
  activeSpeakers: string[];
  /** Whether voice is supported in this browser. */
  supported: boolean;
}

export function useVoiceChat(
  viewerId: string | null,
  viewers: ViewerInfo[],
  sendSignal: (to: string, data: unknown) => void,
  onSignal: React.MutableRefObject<((from: string, data: unknown) => void) | null>,
): UseVoiceChatReturn {
  const [speaking, setSpeaking] = useState(false);
  const [activeSpeakers, setActiveSpeakers] = useState<string[]>([]);
  const peers = useRef(new Map<string, PeerState>());
  const streamRef = useRef<MediaStream | null>(null);
  const supported = typeof navigator.mediaDevices?.getUserMedia === "function";

  // Create a peer connection to a specific viewer
  const createPeer = useCallback(
    (targetId: string, initiator: boolean) => {
      if (peers.current.has(targetId)) return;

      const pc = new RTCPeerConnection({ iceServers: ICE_SERVERS });
      const audio = new Audio();
      audio.autoplay = true;

      // Add local tracks if we have a stream
      if (streamRef.current) {
        for (const track of streamRef.current.getTracks()) {
          pc.addTrack(track, streamRef.current);
        }
      }

      // Receive remote audio
      pc.ontrack = (ev) => {
        audio.srcObject = ev.streams[0] ?? new MediaStream([ev.track]);
        setActiveSpeakers((prev) =>
          prev.includes(targetId) ? prev : [...prev, targetId],
        );
      };

      pc.onicecandidate = (ev) => {
        if (ev.candidate) {
          sendSignal(targetId, { type: "ice", candidate: ev.candidate });
        }
      };

      pc.onconnectionstatechange = () => {
        if (pc.connectionState === "disconnected" || pc.connectionState === "failed") {
          removePeer(targetId);
        }
      };

      peers.current.set(targetId, { pc, audio });

      if (initiator) {
        pc.createOffer()
          .then((offer) => pc.setLocalDescription(offer))
          .then(() => {
            sendSignal(targetId, { type: "offer", sdp: pc.localDescription });
          })
          .catch(() => removePeer(targetId));
      }
    },
    [sendSignal],
  );

  const removePeer = useCallback((id: string) => {
    const peer = peers.current.get(id);
    if (peer) {
      peer.pc.close();
      peer.audio.srcObject = null;
      peers.current.delete(id);
      setActiveSpeakers((prev) => prev.filter((s) => s !== id));
    }
  }, []);

  // Handle incoming signals
  useEffect(() => {
    onSignal.current = async (from: string, data: unknown) => {
      const signal = data as { type: string; sdp?: RTCSessionDescription; candidate?: RTCIceCandidate };

      if (signal.type === "offer") {
        createPeer(from, false);
        const peer = peers.current.get(from);
        if (!peer) return;
        await peer.pc.setRemoteDescription(new RTCSessionDescription(signal.sdp!));
        const answer = await peer.pc.createAnswer();
        await peer.pc.setLocalDescription(answer);
        sendSignal(from, { type: "answer", sdp: peer.pc.localDescription });
      } else if (signal.type === "answer") {
        const peer = peers.current.get(from);
        if (peer) await peer.pc.setRemoteDescription(new RTCSessionDescription(signal.sdp!));
      } else if (signal.type === "ice") {
        const peer = peers.current.get(from);
        if (peer && signal.candidate) {
          await peer.pc.addIceCandidate(new RTCIceCandidate(signal.candidate)).catch(() => {});
        }
      }
    };
    return () => {
      onSignal.current = null;
    };
  }, [createPeer, sendSignal, onSignal]);

  // Toggle mic
  const toggleMic = useCallback(async () => {
    if (speaking) {
      // Stop mic
      streamRef.current?.getTracks().forEach((t) => t.stop());
      streamRef.current = null;
      setSpeaking(false);
      // Remove all peers
      for (const [id] of peers.current) removePeer(id);
      return;
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;
      setSpeaking(true);

      // Connect to all current viewers
      for (const v of viewers) {
        if (v.id !== viewerId) {
          createPeer(v.id, true);
        }
      }
    } catch {
      // Permission denied or not available
    }
  }, [speaking, viewers, viewerId, createPeer, removePeer]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      streamRef.current?.getTracks().forEach((t) => t.stop());
      for (const [, peer] of peers.current) {
        peer.pc.close();
        peer.audio.srcObject = null;
      }
      peers.current.clear();
    };
  }, []);

  return { speaking, toggleMic, activeSpeakers, supported };
}
