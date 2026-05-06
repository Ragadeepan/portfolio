import type { Metadata } from "next";
import CaseStudyLayout from "@/components/CaseStudyLayout";
import { MeetingAppImage } from "@/components/ProjectImages";

export const metadata: Metadata = {
  title: "Real-Time Meeting App — Case Study | Ragadeepan R",
  description: "Lightweight WebRTC video conferencing app with real-time multi-participant sessions and Firebase room management.",
};

const sections = [
  {
    title: "The Problem",
    content:
      "Existing video conferencing tools (Zoom, Meet) are bloated, require account creation, and impose bandwidth overhead that makes them slow on weak connections. Developers and small teams needed a lightweight, browser-native video platform they could spin up instantly — no installs, no accounts, just a link.",
  },
  {
    title: "The Solution",
    content:
      "A fast, plugin-free video conferencing app built on WebRTC — the browser's native peer-to-peer video protocol. Users create or join a room via a shareable link, and the session starts in under 3 seconds. Firebase Realtime DB handles signaling and room state so there's no dedicated server needed for connection setup.",
  },
  {
    title: "Key Features",
    content: [
      "WebRTC peer-to-peer video and audio — no media server, no relay cost for small rooms",
      "Firebase Realtime DB for WebRTC signaling (offer/answer/ICE candidate exchange)",
      "Shareable room links — join without sign-up",
      "Per-participant mic and camera toggle with live status indicators",
      "Active speaker detection — highlighted video tile for the current speaker",
      "Screen sharing support via browser getDisplayMedia API",
      "In-meeting chat with message history for the session duration",
      "Responsive layout — adapts from 2-participant to full grid for larger sessions",
    ],
  },
  {
    title: "Tech Stack",
    content: [
      "React — component-driven UI with hooks for MediaStream and peer connection lifecycle",
      "WebRTC (RTCPeerConnection) — native browser P2P video/audio without plugins",
      "Firebase Realtime DB — low-latency signaling channel for SDP and ICE exchange",
      "Firebase Auth (anonymous) — lightweight session identity without forced sign-up",
      "CSS Grid — dynamic participant tile layout that reflows as people join/leave",
    ],
  },
  {
    title: "Engineering Challenges",
    content: [
      "Managing WebRTC connection lifecycle across React renders without stale closure issues",
      "Handling the full ICE candidate trickle process reliably across different network types (NAT, firewall)",
      "Correctly tearing down peer connections and releasing MediaStream tracks on component unmount",
      "Building an active speaker algorithm using the WebRTC Audio Level API",
      "Graceful degradation when WebRTC is blocked — fallback messaging with TURN server guidance",
    ],
  },
  {
    title: "Results & Improvements",
    content: [
      "Sub-3-second connection time for same-region peers on good network",
      "Stable P2P connection across Chrome, Firefox, and Safari (latest versions)",
      "Planned: TURN server integration (Coturn) for users behind strict NAT/firewalls",
      "Planned: Recording support via MediaRecorder API with Firebase Storage upload",
      "Planned: Virtual backgrounds using TensorFlow.js body segmentation",
      "Planned: Breakout rooms for larger sessions with group management",
    ],
  },
];

export default function MeetingAppPage() {
  return (
    <CaseStudyLayout
      title="Real-Time Meeting App"
      tagline="Browser-native WebRTC video conferencing — no plugins, no accounts, just a link."
      badge="📹 WebRTC · Real-Time · Firebase"
      tech={["React", "WebRTC", "Firebase"]}
      sections={sections}
      accentColor="indigo"
      imageSlot={<MeetingAppImage />}
    />
  );
}
