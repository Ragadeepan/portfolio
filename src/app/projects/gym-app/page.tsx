import type { Metadata } from "next";
import CaseStudyLayout from "@/components/CaseStudyLayout";
import { GymAppImage } from "@/components/ProjectImages";

export const metadata: Metadata = {
  title: "Gym Management App — Case Study | Ragadeepan R",
  description: "Full-stack gym management system with member tracking and Firebase real-time database.",
};

const sections = [
  {
    title: "The Problem",
    content:
      "Small and medium gym owners were managing memberships through spreadsheets, WhatsApp reminders, and paper receipts. Tracking who had active memberships, who needed renewal reminders, and monitoring attendance was time-consuming and error-prone — leading to lost revenue and a poor member experience.",
  },
  {
    title: "The Solution",
    content:
      "A complete gym management web application that centralizes member management, attendance tracking, subscription lifecycle, and workout scheduling. Firebase's real-time database means staff see live updates across devices — no refreshing, no sync delays.",
  },
  {
    title: "Key Features",
    content: [
      "Member directory with profile photos, contact info, and subscription details",
      "Real-time attendance tracking with check-in/check-out timestamps",
      "Subscription lifecycle management: plan selection, renewals, expiry alerts",
      "Automated renewal reminders for members expiring in 7 days",
      "Workout schedule and class timetable management",
      "Revenue dashboard with MTD earnings, pending payments, and plan distribution",
      "Role-based access: admin vs. staff vs. member views",
      "Firebase Authentication for secure multi-device login",
    ],
  },
  {
    title: "Tech Stack",
    content: [
      "Next.js (App Router) — SSR for fast initial load, client components for real-time interactions",
      "React — component-driven UI with custom hooks for Firebase data subscriptions",
      "TypeScript — full type safety for member records, subscription models, and event payloads",
      "Firebase Firestore — real-time database for instant cross-device synchronization",
      "Firebase Auth — email/password authentication with role-based access control",
      "Tailwind CSS — responsive, mobile-first UI without custom CSS overhead",
    ],
  },
  {
    title: "Engineering Challenges",
    content: [
      "Designing Firestore data model that scales without excessive read costs as member count grows",
      "Real-time subscription listener cleanup to prevent memory leaks across component unmounts",
      "Building optimistic UI updates so check-ins feel instant even with async Firestore writes",
      "Implementing renewal date calculations correctly across different plan durations (monthly/quarterly/annual)",
      "Handling concurrent writes (two staff checking in different members simultaneously) without collisions",
    ],
  },
  {
    title: "Results & Improvements",
    content: [
      "Manual tracking time reduced by ~80% compared to spreadsheet-based systems",
      "Renewal revenue improved by surfacing upcoming expirations proactively",
      "Planned: SMS/WhatsApp notifications for renewal reminders via Twilio",
      "Planned: QR code-based self check-in for members using mobile phones",
      "Planned: Razorpay/Stripe integration for online membership payments",
      "Planned: Analytics dashboard with member retention and churn metrics",
    ],
  },
];

export default function GymAppPage() {
  return (
    <CaseStudyLayout
      title="Gym Management App"
      tagline="Full-stack gym system with real-time Firebase and member lifecycle management."
      badge="SaaS · Next.js · Firebase"
      tech={["Next.js", "React", "TypeScript", "Firebase"]}
      sections={sections}
      accentColor="indigo"
      imageSlot={<GymAppImage />}
    />
  );
}
