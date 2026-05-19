// ─────────────────────────────────────────────────────────────────────────────
// useYouTubePlayers — manages two YouTube IFrame players for Stoic XR training
//
// Creates side-by-side YouTube players with:
//  - Skip intro: videos start at 10s to avoid channel branding
//  - No loop: videos play once (can restart manually)
//  - Mute control: only the active stage's video has audio
//  - Playback sync: both videos load and start together
// ─────────────────────────────────────────────────────────────────────────────

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    YT: typeof YT;
    onYouTubeIframeAPIReady: () => void;
  }
}

interface YT {
  Player: new (
    elementId: string,
    options: {
      videoId: string;
      playerVars?: Record<string, unknown>;
      events?: {
        onReady?: (event: { target: Player }) => void;
        onStateChange?: (event: { target: Player; data: number }) => void;
      };
    }
  ) => Player;
  PlayerState: {
    ENDED: number;
    PLAYING: number;
    PAUSED: number;
    BUFFERING: number;
    CUED: number;
  };
}

interface Player {
  playVideo(): void;
  pauseVideo(): void;
  mute(): void;
  unMute(): void;
  setVolume(volume: number): void;
  seekTo(seconds: number, allowSeekAhead: boolean): void;
  getPlayerState(): number;
  destroy(): void;
}

const START_TIME = 10; // Skip first 10 seconds of each video

export function useYouTubePlayers({
  calmId,
  disruptId,
  stage,
}: {
  calmId: string;
  disruptId: string;
  stage: "baseline" | "disruption" | "recovery" | string;
}) {
  const calmPlayerRef = useRef<Player | null>(null);
  const disruptPlayerRef = useRef<Player | null>(null);
  const apiLoadedRef = useRef(false);
  const previousStageRef = useRef(stage);

  // Load YouTube IFrame API
  useEffect(() => {
    if (apiLoadedRef.current) return;

    // Check if API already loaded
    if (window.YT && window.YT.Player) {
      apiLoadedRef.current = true;
      return;
    }

    // Load API script
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = () => {
      apiLoadedRef.current = true;
    };

    return () => {
      window.onYouTubeIframeAPIReady = () => {};
    };
  }, []);

  // Initialize players when API is ready
  useEffect(() => {
    if (!apiLoadedRef.current || !window.YT?.Player) return;

    const initPlayers = () => {
      // Calm player
      if (!calmPlayerRef.current) {
        const calmEl = document.getElementById("stoic-player-calm");
        if (calmEl && calmEl.children.length === 0) {
          calmPlayerRef.current = new window.YT.Player("stoic-player-calm", {
            videoId: calmId,
            playerVars: {
              autoplay: 1,
              mute: 0,
              controls: 0,
              rel: 0,
              modestbranding: 1,
              playsinline: 1,
              start: START_TIME,
              loop: 0,
              fs: 1,
              enablejsapi: 1,
            },
            events: {
              onReady: (event) => {
                event.target.seekTo(START_TIME, true);
                event.target.playVideo();
                event.target.unMute();
                event.target.setVolume(80);
              },
            },
          });
        }
      }

      // Disruption player
      if (!disruptPlayerRef.current) {
        const disruptEl = document.getElementById("stoic-player-disruption");
        if (disruptEl && disruptEl.children.length === 0) {
          disruptPlayerRef.current = new window.YT.Player("stoic-player-disruption", {
            videoId: disruptId,
            playerVars: {
              autoplay: 1,
              mute: 1,
              controls: 0,
              rel: 0,
              modestbranding: 1,
              playsinline: 1,
              start: START_TIME,
              loop: 0,
              fs: 1,
              enablejsapi: 1,
            },
            events: {
              onReady: (event) => {
                event.target.seekTo(START_TIME, true);
                event.target.playVideo();
                event.target.mute();
              },
            },
          });
        }
      }
    };

    // Wait a tick for DOM to be ready
    const timer = setTimeout(initPlayers, 100);
    return () => clearTimeout(timer);
  }, [calmId, disruptId]);

  // Control audio based on stage
  useEffect(() => {
    if (!calmPlayerRef.current || !disruptPlayerRef.current) return;
    if (previousStageRef.current === stage) return;

    previousStageRef.current = stage;

    try {
      if (stage === "baseline" || stage === "recovery") {
        // During baseline/recovery: calm video has audio
        calmPlayerRef.current.unMute();
        calmPlayerRef.current.setVolume(80);
        disruptPlayerRef.current.mute();
      } else if (stage === "disruption") {
        // During disruption: disruptive video has audio
        calmPlayerRef.current.mute();
        disruptPlayerRef.current.unMute();
        disruptPlayerRef.current.setVolume(80);
      }
    } catch (err) {
      console.warn("YouTube player audio control error:", err);
    }
  }, [stage]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      try {
        calmPlayerRef.current?.destroy();
        disruptPlayerRef.current?.destroy();
      } catch (err) {
        console.warn("YouTube player cleanup error:", err);
      }
      calmPlayerRef.current = null;
      disruptPlayerRef.current = null;
    };
  }, [calmId, disruptId]);
}
