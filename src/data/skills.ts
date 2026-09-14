export interface SkillCategory {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  skills: {
    name: string;
    level: string;
    note: string;
  }[];
  stat: string;
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "web-dev",
    number: "01",
    title: "Web Development",
    tagline: "Semantic markup, modern styles & reactive JavaScript",
    description:
      "The bedrock of everything I build. I believe deep mastery of native web standards—semantic HTML5, modern responsive CSS layouts, and modern ES6+ JavaScript—is non-negotiable for building fast, accessible web experiences.",
    skills: [
      { name: "HTML5", level: "Advanced", note: "Semantic structure, accessibility & SEO hygiene" },
      { name: "CSS3 / Modern CSS", level: "Advanced", note: "Flexbox, CSS Grid, custom properties & fluid scaling" },
      { name: "JavaScript (ES6+)", level: "Advanced", note: "DOM manipulation, asynchronous workflows, APIs & events" },
      { name: "Responsive Design", level: "Advanced", note: "Mobile-first layouts, breakpoints & fluid typography" },
    ],
    stat: "4 Coded Websites Built",
  },
  {
    id: "wordpress",
    number: "02",
    title: "WordPress Development",
    tagline: "Bespoke Elementor page building & CMS architecture",
    description:
      "Translating brand identities and commercial objectives into high-converting, user-friendly WordPress ecosystems. From bespoke Elementor page structures to theme tuning and performance optimization.",
    skills: [
      { name: "WordPress CMS", level: "Proficient", note: "Site architecture, content models & template hierarchies" },
      { name: "Elementor & Elementor Pro", level: "Proficient", note: "Custom container layouts, dynamic content & styling" },
      { name: "PHP Theme Tweaks", level: "Working", note: "Functions.php hooks, asset deferral & clean markup" },
      { name: "Site Optimization", level: "Proficient", note: "Asset minification, caching setup & responsive tuning" },
    ],
    stat: "2 Elementor Websites Shipped",
  },
  {
    id: "ai-automation",
    number: "03",
    title: "AI & Automation",
    tagline: "OpenAI integration, prompt engineering & autonomous workflows",
    description:
      "Where modern engineering meets intelligent capability. Currently building AI automation solutions that connect OpenAI language models with web interfaces to synthesize information and execute workflows automatically.",
    skills: [
      { name: "AI Web Development", level: "Active Focus", note: "Integrating LLM capabilities directly into web apps" },
      { name: "OpenAI API", level: "Active Focus", note: "Model configuration, prompt chaining & structured JSON" },
      { name: "AI Automation", level: "Active Focus", note: "Autonomous pipelines & webhook data orchestration" },
      { name: "Prompt Engineering", level: "Proficient", note: "System persona design, few-shot examples & output guarding" },
    ],
    stat: "Active Focus Area",
  },
  {
    id: "tools-backend",
    number: "04",
    title: "Core Stack & Backend",
    tagline: "Python, Flask, version control & API engineering",
    description:
      "The engineering engine that powers dynamic applications. Utilizing Python and Flask for lightweight backend microservices, paired with disciplined Git version control workflows.",
    skills: [
      { name: "Python", level: "Proficient", note: "Scripting, data handling & AI backend services" },
      { name: "Flask", level: "Proficient", note: "RESTful endpoints, request handling & model wrapping" },
      { name: "Git & GitHub", level: "Proficient", note: "Branch management, clean commit history & deployment" },
      { name: "REST APIs & JSON", level: "Proficient", note: "Client-server communication & contract modeling" },
    ],
    stat: "Full Stack Tooling",
  },
];

export interface JourneyMilestone {
  phase: string;
  stepNumber: string;
  title: string;
  period: string;
  summary: string;
  achievement: string;
  technologies: string[];
}

export const JOURNEY_MILESTONES: JourneyMilestone[] = [
  {
    phase: "The Foundation",
    stepNumber: "01",
    title: "HTML5 & Semantic Markup",
    period: "Month 1",
    summary:
      "Began my engineering journey focusing relentlessly on web fundamentals: semantic HTML, document hierarchy, web accessibility standards, and clean structural architecture.",
    achievement: "Mastered semantic structuring and accessible web document layouts.",
    technologies: ["HTML5", "Semantic Elements", "Web Accessibility", "SEO Basics"],
  },
  {
    phase: "The Visual Layer",
    stepNumber: "02",
    title: "CSS3, Flexbox & Responsive Layouts",
    period: "Month 1 - 2",
    summary:
      "Dove deep into modern CSS architecture: mastering modern Flexbox, CSS Grid systems, fluid responsive typography, media queries, and micro-interactions.",
    achievement: "Crafted fully responsive mobile-first layouts without relying on heavy frameworks.",
    technologies: ["CSS3", "Flexbox", "CSS Grid", "Animations", "Media Queries"],
  },
  {
    phase: "Logic & Dynamics",
    stepNumber: "03",
    title: "JavaScript & 4 Coded Websites",
    period: "Month 2",
    summary:
      "Expanded into modern JavaScript (ES6+): mastering the DOM, event handling, asynchronous fetching, and state management. Engineered 4 complete websites from scratch through pure coding.",
    achievement: "Built and launched 4 independent coded websites demonstrating complete core web literacy.",
    technologies: ["JavaScript ES6+", "DOM Manipulation", "Async/Await", "Fetch API"],
  },
  {
    phase: "CMS & Client Velocity",
    stepNumber: "04",
    title: "WordPress & Elementor Mastery",
    period: "Month 3",
    summary:
      "Progressed to industry-standard CMS development. Mastered WordPress site building and Elementor Pro to deliver fast, editable, and commercially viable websites for real-world use cases.",
    achievement: "Built and successfully deployed 2 bespoke production websites using Elementor.",
    technologies: ["WordPress", "Elementor Pro", "Custom PHP Tweaks", "Responsive CMS"],
  },
  {
    phase: "The Accelerated Leap",
    stepNumber: "05",
    title: "4-Month Intensive Web Internship",
    period: "Month 1 - 4",
    summary:
      "Completed a rigorous 4-month web development internship. Progressed from basic concepts to advanced web development, handling real project constraints, deadlines, and technical problem-solving.",
    achievement: "Transformed from beginner coder into an adaptable, confident creative developer.",
    technologies: ["Agile Workflow", "Code Reviews", "Cross-Browser QA", "Client Delivery"],
  },
  {
    phase: "The Frontier",
    stepNumber: "06",
    title: "AI Web Development & OpenAI Automation",
    period: "Current Focus",
    summary:
      "Currently advancing into modern AI-driven web development. Engineering intelligent automation websites that integrate the OpenAI API, Python Flask backends, and autonomous agent workflows.",
    achievement: "Building production-ready AI automation pipelines that think, move, and solve real problems.",
    technologies: ["OpenAI API", "AI Automation", "Python", "Flask", "Next.js"],
  },
];
