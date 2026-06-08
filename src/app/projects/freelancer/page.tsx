import type { Metadata } from "next";
import CaseStudyLayout from "@/components/CaseStudyLayout";
import { FreelancerImage } from "@/components/ProjectImages";

export const metadata: Metadata = {
  title: "Freelancer — Case Study | Ragadeepan R",
  description: "Full-stack freelancer marketplace connecting clients and freelancers with admin-controlled workflows.",
};

const sections = [
  {
    title: "The Problem",
    content:
      "Clients needed a simple way to hire verified freelancers without managing scattered chats, proposals, payments, and delivery updates across different tools. Freelancers needed a transparent workflow where proposals, milestones, and approvals were handled in one place.",
  },
  {
    title: "The Solution",
    content:
      "Freelancer is a full-stack marketplace connecting clients and freelancers with an admin-controlled workflow. It supports job posting, proposal ranking, project management, escrow-style payments, milestone tracking, and secure delivery from one responsive web app.",
  },
  {
    title: "Key Features",
    content: [
      "Firebase Authentication with email/password and Google OAuth",
      "Job posting flow for clients with clear project requirements and budget details",
      "Proposal system with top 3 ranking to surface the strongest freelancer applications",
      "Freelancer profile system with skills, portfolio, and availability status",
      "Project management dashboard for active work, delivery status, and updates",
      "Escrow-style payment workflow with milestone tracking",
      "Admin panel for freelancer verification, moderation, and workflow control",
      "Responsive UI built entirely with Tailwind CSS — mobile-first",
      "Deployed and live at freelancer-99659.web.app with Firebase Hosting",
    ],
  },
  {
    title: "Tech Stack",
    content: [
      "React — component-driven UI with custom hooks for Firebase real-time subscriptions",
      "TypeScript — end-to-end type safety across all data models and API contracts",
      "Tailwind CSS — utility-first responsive UI with consistent design tokens",
      "Firebase Firestore — database for users, proposals, profiles, milestones, and project state",
      "Firebase Auth — multi-provider authentication with session management",
      "Firebase Hosting — deployed production build at freelancer-99659.web.app",
    ],
  },
  {
    title: "Engineering Challenges",
    content: [
      "Implementing role-based access control (admin/client/freelancer) with Firestore security rules",
      "Designing proposal ranking so clients can compare freelancers quickly without losing detail",
      "Modeling milestone and payment states clearly across client, freelancer, and admin views",
      "Keeping project status changes consistent across dashboards after async Firestore writes",
      "Managing Firebase listener lifecycles in React without stale closures or memory leaks",
      "Deploying with Firebase Hosting and configuring environment-based Firebase project switching",
    ],
  },
  {
    title: "Results & Improvements",
    content: [
      "Successfully deployed and live at freelancer-99659.web.app",
      "End-to-end marketplace flow from registration to proposal, project tracking, and delivery",
      "Planned: Razorpay payment integration for milestone-based freelancer payouts",
      "Planned: AI-powered freelancer-project matching using skill embedding similarity",
      "Planned: Review and rating system with fraud detection signals",
      "Planned: Mobile app companion for on-the-go project management",
    ],
  },
];

export default function FreelancerPage() {
  return (
    <CaseStudyLayout
      title="Freelancer"
      tagline="Full-stack freelancer marketplace with ranked proposals, milestones, and admin-controlled workflows."
      badge="Live · Marketplace · Firebase"
      tech={["React", "TypeScript", "Tailwind CSS", "Firebase"]}
      sections={sections}
      accentColor="indigo"
      imageSlot={<FreelancerImage />}
      liveUrl="https://freelancer-99659.web.app"
      codeUrl="https://github.com/Ragadeepan/freelancer"
    />
  );
}
