"use client";

import React, { useEffect } from "react";
import {
  GraduationCap,
  Briefcase,
  Code2,
  Layout,
  Sparkles,
} from "lucide-react";

interface Milestone {
  id: string;
  milestoneNumber: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  icon: React.ReactNode;
}

const MILESTONES: Milestone[] = [
  {
    id: "milestone-01",
    milestoneNumber: "Milestone 01",
    category: "Academic Completion",
    title: "BS Information Technology",
    subtitle: "University of Agriculture (2022–2026)",
    description:
      "Completed BS Information Technology from University of Agriculture (2022–2026) with core emphasis on software architecture, web development, data structures, and modern computing.",
    tags: ["Software Engineering", "Algorithms", "Data Structures"],
    icon: <GraduationCap className="w-4 h-4 sm:w-6 sm:h-6 text-[#38BDF8]" />,
  },
  {
    id: "milestone-02",
    milestoneNumber: "Milestone 02",
    category: "Professional Immersion",
    title: "AI Web Developer Internship",
    subtitle: "Hywiz Technology, Burewala",
    description:
      "Completed an intensive hands-on development internship. Gained practical experience building production web interfaces, integrating backend APIs, and deploying machine learning features under mentorship.",
    tags: [
      "Production Experience",
      "Code Reviews",
      "Team Collaboration",
      "Agile Delivery",
    ],
    icon: <Briefcase className="w-4 h-4 sm:w-6 sm:h-6 text-[#38BDF8]" />,
  },
  {
    id: "milestone-03",
    milestoneNumber: "Milestone 03",
    category: "Core Web Stack",
    title: "Frontend Mastery & 4 Production Web Projects",
    subtitle: "HTML5 / CSS3 / JavaScript (ES6+)",
    description:
      "Built four complete website projects from scratch, focusing on semantic layout, fluid typography, CSS Grid, async JavaScript, and interactive canvas components (such as CodePulse).",
    tags: [
      "Modern HTML/CSS",
      "ES6+ JavaScript",
      "Responsive Design",
      "4 Build Projects",
    ],
    icon: <Code2 className="w-4 h-4 sm:w-6 sm:h-6 text-[#38BDF8]" />,
  },
  {
    id: "milestone-04",
    milestoneNumber: "Milestone 04",
    category: "CMS Solutions",
    title: "WordPress & Elementor Platform Builds",
    subtitle: "2 Client-Ready WordPress Projects",
    description:
      "Engineered two custom WordPress client sites using Elementor Pro, writing tailored CSS overrides and optimizing Core Web Vitals to provide self-managed client solutions without code bloat.",
    tags: [
      "WordPress CMS",
      "Elementor Pro",
      "Responsive Tuning",
      "Client Handoff",
    ],
    icon: <Layout className="w-4 h-4 sm:w-6 sm:h-6 text-[#38BDF8]" />,
  },
  {
    id: "milestone-05",
    milestoneNumber: "Milestone 05",
    category: "Current Specialization",
    title: "AI Web Development & Workflow Automation",
    subtitle: "Python / Flask / OpenAI / ML Heuristics",
    description:
      "Architecting full-stack AI platforms (WebGuard AI, AI Automation Agency), incorporating OpenAI endpoints, custom classification pipelines, and autonomous workflow nodes.",
    tags: [
      "Fast / Lean ML",
      "OpenAI APIs",
      "Backend Microservices",
      "Continuous Growth",
    ],
    icon: <Sparkles className="w-4 h-4 sm:w-6 sm:h-6 text-[#38BDF8]" />,
  },
];

export function JourneyTimeline() {
  return (
    <section
      id="journey"
      className="w-full py-10 sm:py-14 relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0a1628 0%, #050c1a 100%)",
      }}
    >
      {/* Subtle background glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none opacity-20 blur-[130px]"
        style={{
          background:
            "radial-gradient(circle, rgba(56,189,248,0.25) 0%, rgba(37,99,235,0.1) 70%, transparent 100%)",
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#38BDF8]/10 border border-[#38BDF8]/25 text-[#38BDF8] text-xs font-bold uppercase tracking-widest mb-4 reveal-down">
            Progression
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight reveal-down delay-100">
            My <span className="gold-shimmer">Journey</span>
          </h2>

          <p className="max-w-2xl mx-auto text-sm sm:text-base text-white font-normal mt-3 leading-relaxed reveal-down delay-150">
            An honest, rapid progression from foundational academic computer
            science to production web development, internship immersion, and AI
            integration.
          </p>

          <div className="custom-line mt-6 reveal-scale delay-200" />
        </div>

        {/* Timeline Container */}
        <div className="relative mt-8 sm:mt-12">
          {/* Vertical Connecting Line */}
          <div
            className="absolute left-4 min-[380px]:left-5 sm:left-8 top-6 sm:top-8 bottom-6 sm:bottom-8 w-[2px] -translate-x-1/2 pointer-events-none"
            style={{
              background:
                "linear-gradient(180deg, #38BDF8 0%, #2563EB 50%, #D4AF37 100%)",
            }}
          />

          {/* Milestone Items */}
          <div className="space-y-6 sm:space-y-12">
            {MILESTONES.map((item, index) => (
              <div
                key={item.id}
                className="relative flex items-start gap-2.5 min-[380px]:gap-4 sm:gap-8 reveal-up"
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                {/* Timeline Circle Node */}
                <div className="relative z-10 shrink-0 mt-1 sm:mt-0">
                  <div
                    className="w-8 h-8 min-[380px]:w-10 min-[380px]:h-10 sm:w-16 sm:h-16 rounded-full flex items-center justify-center transition-all duration-300 shadow-[0_0_22px_rgba(56,189,248,0.3)] group-hover:scale-110"
                    style={{
                      background: "linear-gradient(135deg, #071326 0%, #0d1e35 100%)",
                      border: "2px solid #38BDF8",
                    }}
                  >
                    {item.icon}
                  </div>
                </div>

                {/* Milestone Card */}
                <div
                  className="flex-1 min-w-0 rounded-xl sm:rounded-3xl p-3.5 min-[380px]:p-5 sm:p-8 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                  style={{
                    background: "rgba(13, 30, 53, 0.75)",
                    backdropFilter: "blur(16px)",
                    WebkitBackdropFilter: "blur(16px)",
                    border: "1px solid rgba(56, 189, 248, 0.18)",
                    boxShadow:
                      "0 10px 30px -10px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(56, 189, 248, 0.45)";
                    e.currentTarget.style.boxShadow =
                      "0 15px 35px -5px rgba(56, 189, 248, 0.12), inset 0 1px 0 rgba(255,255,255,0.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(56, 189, 248, 0.18)";
                    e.currentTarget.style.boxShadow =
                      "0 10px 30px -10px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)";
                  }}
                >
                  {/* Top Bar: Milestone Badge + Category */}
                  <div className="flex items-center justify-between gap-2 mb-2 sm:mb-3">
                    <span className="inline-flex items-center px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-xs font-bold tracking-wide text-[#38BDF8] bg-[#38BDF8]/10 border border-[#38BDF8]/25 shrink-0">
                      {item.milestoneNumber}
                    </span>
                    <span className="text-[9px] min-[360px]:text-[10px] sm:text-xs font-mono tracking-wider text-[#94A3B8] uppercase truncate text-right">
                      {item.category}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-sm min-[360px]:text-base sm:text-2xl font-bold text-white tracking-tight leading-snug mb-1 break-words">
                    {item.title}
                  </h3>
                  <div className="text-[11px] min-[360px]:text-xs sm:text-sm font-semibold text-[#38BDF8] mb-2 sm:mb-3.5 leading-snug">
                    {item.subtitle}
                  </div>

                  {/* Description */}
                  <p className="text-[11px] min-[360px]:text-xs sm:text-sm text-slate-300 leading-relaxed mb-3 sm:mb-5 font-normal">
                    {item.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-2 sm:pt-2.5 border-t border-white/10">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 min-[360px]:px-2.5 sm:px-3 sm:py-1 rounded-md sm:rounded-lg text-[9.5px] min-[360px]:text-[10.5px] sm:text-xs font-medium text-[#94A3B8] transition-colors hover:text-white"
                        style={{
                          background: "rgba(15, 33, 61, 0.7)",
                          border: "1px solid rgba(56, 189, 248, 0.15)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default JourneyTimeline;
