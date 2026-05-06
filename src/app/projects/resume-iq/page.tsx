import type { Metadata } from "next";
import CaseStudyLayout from "@/components/CaseStudyLayout";
import { ResumeIQImage } from "@/components/ProjectImages";

export const metadata: Metadata = {
  title: "Resume IQ — Case Study | Ragadeepan R",
  description: "AI-powered resume analysis platform with ATS scoring, skill gap detection, and GPT-4 improvement suggestions.",
};

const sections = [
  {
    title: "The Problem",
    content:
      "Most candidates don't know why their resumes get rejected by Applicant Tracking Systems. ATS bots filter out 75% of resumes before a human ever reads them — due to missing keywords, wrong formatting, or weak metrics. Candidates keep submitting the same resume and getting no callbacks, with no actionable feedback to improve.",
  },
  {
    title: "The Solution",
    content:
      "Resume IQ is an AI-powered platform that evaluates a resume against any job description in seconds. It scores ATS compatibility, identifies exact keyword gaps, grades formatting, and uses GPT-4 to generate prioritized, actionable rewrite suggestions — turning rejection into a clear improvement plan.",
  },
  {
    title: "Key Features",
    content: [
      "ATS Score engine — composite score from keyword density, format, sections, and verb strength",
      "Job-description skill gap detection — compares resume skills vs. required skills",
      "GPT-4 powered suggestion engine — high/medium/low impact improvements with rewrites",
      "Resume rewriting assistant — one-click AI rewrites for weak bullet points",
      "Analytics dashboard — track ATS score improvements across resume versions",
      "Keyword heatmap — visual overlay showing matched and missing keywords",
      "Multiple format support — PDF and DOCX parsing",
    ],
  },
  {
    title: "Tech Stack",
    content: [
      "Next.js (App Router) — SSR for fast initial load, API routes for AI processing",
      "Node.js — resume parsing pipeline, PDF/DOCX text extraction",
      "OpenAI API (GPT-4 Turbo) — structured JSON suggestions via function calling",
      "PostgreSQL — versioned resume storage, score history, user sessions",
      "Prompt Engineering — chain-of-thought prompts for consistent, structured AI output",
    ],
  },
  {
    title: "Engineering Challenges",
    content: [
      "Extracting clean, structured text from PDF/DOCX while preserving section context",
      "Designing GPT-4 prompts that return consistent JSON (not free-form text) every time",
      "Building an ATS scoring algorithm that correlates with real recruiter ATS systems",
      "Streaming GPT-4 responses to the UI for perceived speed with long suggestions",
      "Preventing prompt injection when users embed malicious text inside their resume",
    ],
  },
  {
    title: "Results & Improvements",
    content: [
      "ATS score improvement average: +22 points after applying top 3 suggestions",
      "Keyword gap detection accuracy: ~91% match vs. manual recruiter analysis",
      "Planned: LinkedIn job scraping to auto-fill job description for analysis",
      "Planned: Resume builder with AI-assisted section writing from scratch",
      "Planned: Interview prep module — generate likely questions from resume content",
      "Planned: Multi-language support for global job markets",
    ],
  },
];

export default function ResumeIQPage() {
  return (
    <CaseStudyLayout
      title="Resume IQ"
      tagline="AI-powered ATS resume analyzer with GPT-4 skill gap detection and improvement engine."
      badge="🤖 AI · ATS · OpenAI"
      tech={["Next.js", "Node.js", "OpenAI API", "PostgreSQL"]}
      sections={sections}
      accentColor="indigo"
      imageSlot={<ResumeIQImage />}
      liveUrl="https://resume-iq-client-seven.vercel.app"
    />
  );
}
