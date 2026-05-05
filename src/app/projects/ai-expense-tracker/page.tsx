import type { Metadata } from "next";
import CaseStudyLayout from "@/components/CaseStudyLayout";
import { AIExpenseTrackerImage } from "@/components/ProjectImages";

export const metadata: Metadata = {
  title: "AI Expense Tracker — Case Study | Ragadeepan R",
  description: "Chatbot-powered expense tracking system with OpenAI-based auto-categorization.",
};

const sections = [
  {
    title: "The Problem",
    content:
      "Manual expense tracking apps require users to remember categories, fill in multiple fields, and maintain the discipline to log every transaction. Most people stop using them within weeks. The friction between 'I spent money' and 'I recorded it correctly' was too high.",
  },
  {
    title: "The Solution",
    content:
      "A conversational expense tracker that lets users log expenses in plain language — 'spent ₹450 on lunch' — and handles all the categorization, storage, and analysis automatically. The OpenAI API interprets intent, extracts amounts, and assigns categories without the user making any explicit choices.",
  },
  {
    title: "Key Features",
    content: [
      "Natural language expense input: 'add ₹320 Swiggy dinner' parsed automatically",
      "OpenAI-powered automatic categorization across 12+ spending categories",
      "Intelligent spending insights: weekly comparisons, overspend alerts, savings suggestions",
      "Conversational query interface: 'how much did I spend on food this month?'",
      "Monthly and weekly spending reports with visual breakdown",
      "Transaction history with search and filter by category or date",
      "Budget goal setting with progress tracking",
    ],
  },
  {
    title: "Tech Stack",
    content: [
      "Python — core application logic, chatbot conversation flow, data processing",
      "OpenAI API (GPT-4o) — intent parsing, expense categorization, and insight generation",
      "Prompt Engineering — structured prompts ensuring consistent JSON output from the model",
      "SQLite — local storage for expense records and user preferences",
      "Rich CLI — terminal UI with formatted tables and colored output",
    ],
  },
  {
    title: "Engineering Challenges",
    content: [
      "Writing prompts that reliably extract structured data (amount, category, date) from freeform text",
      "Handling ambiguous inputs: 'coffee 50' vs '50 for coffee' both need to work correctly",
      "Preventing hallucinations in the categorization step with strict output schemas",
      "Maintaining conversation context so users can say 'change that to food' without re-specifying",
      "Cost optimization: batching and caching common categorization results to reduce API calls",
    ],
  },
  {
    title: "Results & Improvements",
    content: [
      "Average categorization accuracy of 94%+ across 12 categories in real testing",
      "Logging time reduced from ~60 seconds (manual app) to under 5 seconds (chat input)",
      "Planned: web/mobile interface with real-time sync via Firebase",
      "Planned: bank statement import and automatic reconciliation",
      "Planned: multi-user support with shared household expense tracking",
      "Planned: WhatsApp/Telegram bot integration for frictionless mobile logging",
    ],
  },
];

export default function AIExpenseTrackerPage() {
  return (
    <CaseStudyLayout
      title="AI Expense Tracker"
      tagline="Natural language expense logging with OpenAI auto-categorization."
      badge="AI · Python · OpenAI"
      tech={["Python", "OpenAI API", "Prompt Engineering", "SQLite"]}
      sections={sections}
      accentColor="cyan"
      imageSlot={<AIExpenseTrackerImage />}
    />
  );
}
