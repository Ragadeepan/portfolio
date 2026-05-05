import type { Metadata } from "next";
import CaseStudyLayout from "@/components/CaseStudyLayout";
import { GrowlanzerImage } from "@/components/ProjectImages";

export const metadata: Metadata = {
  title: "Growlanzer — Case Study | Ragadeepan R",
  description: "Freelancer marketplace built with Next.js, Firebase, real-time chat, and admin approval workflows.",
};

const sections = [
  {
    title: "The Problem",
    content:
      "Existing freelancer platforms were either too expensive for small businesses or too complex to set up. Clients needed a streamlined way to find and hire vetted freelancers, while freelancers needed a fair platform with transparent approval and project workflows. There was no lightweight solution tailored for the Indian market.",
  },
  {
    title: "The Solution",
    content:
      "Growlanzer is a full-stack freelancer marketplace — live at growlanzer.com — with Firebase-powered authentication, real-time chat, profile-based freelancer discovery, and an end-to-end project workflow from posting to delivery. Built with Next.js and TypeScript for a fast, type-safe production experience.",
  },
  {
    title: "Key Features",
    content: [
      "Firebase Authentication with email/password and Google OAuth",
      "Real-time chat between clients and freelancers using Firestore listeners",
      "Freelancer profile system with skills, portfolio, and availability status",
      "Project posting and application workflow with status tracking",
      "Admin panel for freelancer verification and project moderation",
      "Responsive UI built entirely with Tailwind CSS — mobile-first",
      "Deployed and live at growlanzer.com with Vercel CI/CD",
    ],
  },
  {
    title: "Tech Stack",
    content: [
      "Next.js (App Router) — hybrid rendering for fast public pages and dynamic authenticated routes",
      "React — component-driven UI with custom hooks for Firebase real-time subscriptions",
      "TypeScript — end-to-end type safety across all data models and API contracts",
      "Tailwind CSS — utility-first responsive UI with consistent design tokens",
      "Firebase Firestore — real-time database for chat, profiles, and project state",
      "Firebase Auth — multi-provider authentication with session management",
    ],
  },
  {
    title: "Engineering Challenges",
    content: [
      "Structuring Firestore data for efficient real-time chat without excessive read costs",
      "Implementing role-based access control (admin/client/freelancer) with Firestore security rules",
      "Optimistic UI for chat messages so the UX feels instant despite async writes",
      "Managing Firebase listener lifecycles in React without stale closures or memory leaks",
      "Deploying with Vercel and configuring environment-based Firebase project switching",
    ],
  },
  {
    title: "Results & Improvements",
    content: [
      "Successfully deployed and live at growlanzer.com — real users onboarded",
      "End-to-end project flow from registration to project completion working in production",
      "Planned: Razorpay payment integration for milestone-based freelancer payouts",
      "Planned: AI-powered freelancer-project matching using skill embedding similarity",
      "Planned: Review and rating system with fraud detection signals",
      "Planned: Mobile app companion for on-the-go project management",
    ],
  },
];

export default function GrowlanzerPage() {
  return (
    <CaseStudyLayout
      title="Growlanzer"
      tagline="Live freelancer marketplace built and deployed with Next.js and Firebase."
      badge="🚀 Live · growlanzer.com"
      tech={["Next.js", "React", "TypeScript", "Tailwind CSS", "Firebase"]}
      sections={sections}
      accentColor="indigo"
      imageSlot={<GrowlanzerImage />}
    />
  );
}
