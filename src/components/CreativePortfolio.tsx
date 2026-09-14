"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { PROJECTS, Project } from "@/data/projects";
import { ExternalLink, Layers, ArrowUpRight, Sparkles } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { ProjectModal } from "@/components/ProjectModal";

const CATEGORY_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  "AI & Automation": {
    bg: "rgba(16, 185, 129, 0.15)",
    text: "#34D399",
    border: "rgba(16, 185, 129, 0.35)",
  },
  WordPress: {
    bg: "rgba(33, 117, 155, 0.18)",
    text: "#38BDF8",
    border: "rgba(56, 189, 248, 0.35)",
  },
  "Full Stack Web": {
    bg: "rgba(99, 102, 241, 0.18)",
    text: "#A5B4FC",
    border: "rgba(99, 102, 241, 0.35)",
  },
};

interface StackCardProps {
  project: Project;
  index: number;
  total: number;
  progress: MotionValue<number>;
  onSelect: (p: Project) => void;
}

function StackCard({
  project,
  index,
  total,
  progress,
  onSelect,
}: StackCardProps) {
  // Stacking scale and brightness transform calculations
  const range: [number, number] = [index * (1 / total), 1];
  const targetScale = Math.max(0.85, 1 - (total - index - 1) * 0.035);

  const scale = useTransform(progress, range, [1, targetScale]);
  const brightness = useTransform(progress, range, [1, 0.72]);

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Stepped sticky top offset: compact on mobile (56px for navbar + 10px per stacked tab), 85 + index * 26 on desktop
  const topOffset = isMobile ? 56 + index * 10 : 85 + index * 26;

  const catStyle = CATEGORY_COLORS[project.category] || {
    bg: "rgba(212, 175, 55, 0.15)",
    text: "#D4AF37",
    border: "rgba(212, 175, 55, 0.35)",
  };

  const isLast = index === total - 1;

  return (
    <div
      className={`flex items-start justify-center sticky ${
        isLast
          ? "min-h-0 pb-4"
          : "min-h-[500px] min-[360px]:min-h-[540px] sm:min-h-[min(85vh,720px)] mb-6 sm:mb-12"
      }`}
      style={{
        top: `${topOffset}px`,
        zIndex: index + 1,
      }}
    >
      <motion.div
        style={{
          scale,
          filter: useTransform(brightness, (b) => `brightness(${b})`),
          transformOrigin: "top center",
        }}
        className="w-full rounded-3xl transition-shadow duration-300"
      >
        <div
          className="w-full rounded-3xl overflow-hidden transition-all duration-300"
          style={{
            background:
              "linear-gradient(145deg, rgba(13, 28, 51, 0.98) 0%, rgba(7, 16, 32, 0.99) 100%)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(212, 175, 55, 0.28)",
            boxShadow:
              "0 -15px 40px -5px rgba(0, 0, 0, 0.85), 0 30px 70px -10px rgba(0, 0, 0, 0.95), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
          }}
        >
          {/* Top glowing accent bar */}
          <div
            className="h-1.5 w-full"
            style={{
              background: `linear-gradient(90deg, transparent 0%, ${catStyle.text} 50%, transparent 100%)`,
              opacity: 0.85,
            }}
          />

          {/* Card Interior Grid */}
          <div className="p-3.5 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-8 lg:gap-10 items-center">
            {/* Left Column: Details */}
            <div className="lg:col-span-7 space-y-3 sm:space-y-4 lg:space-y-5">
              {/* Top Row: Index + Category + Year */}
              <div className="flex flex-wrap items-center justify-between gap-2.5 sm:gap-3">
                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="font-mono text-xs font-bold text-[#D4AF37] tracking-wider whitespace-nowrap">
                    CASE STUDY // 0{index + 1}
                  </span>
                  <span
                    className="px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-[11px] font-bold tracking-wide flex items-center gap-1.5 whitespace-nowrap"
                    style={{
                      backgroundColor: catStyle.bg,
                      color: catStyle.text,
                      border: `1px solid ${catStyle.border}`,
                    }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: catStyle.text }}
                    />
                    {project.category}
                  </span>
                </div>

                <span className="text-xs font-mono text-[#94A3B8] px-2.5 py-0.5 rounded bg-white/[0.04] border border-white/10 whitespace-nowrap">
                  {project.year}
                </span>
              </div>

              {/* Title */}
              <h3
                onClick={() => onSelect(project)}
                className="text-xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight hover:text-[#D4AF37] transition-colors cursor-pointer"
              >
                {project.title}
              </h3>

              {/* Tagline */}
              <p className="text-xs sm:text-sm font-semibold text-[#38BDF8] tracking-wide">
                {project.tagline}
              </p>

              {/* Description */}
              <p className="text-xs sm:text-sm text-white leading-relaxed line-clamp-2 sm:line-clamp-3 lg:line-clamp-none">
                {project.description}
              </p>

              {/* Impact Metric */}
              {project.stats && (
                <div
                  className="inline-flex items-center gap-3 px-4 py-2 rounded-xl"
                  style={{
                    background: "rgba(10, 22, 40, 0.7)",
                    border: "1px solid rgba(212, 175, 55, 0.25)",
                  }}
                >
                  <span className="text-base sm:text-xl font-black text-[#D4AF37]">
                    {project.stats.value}
                  </span>
                  <span className="text-xs text-[#94A3B8] font-medium">
                    {project.stats.label}
                  </span>
                </div>
              )}

              {/* Tech Pills */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {project.technologies.slice(0, 5).map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg text-[11px] font-mono text-[#CBD5E1]"
                    style={{
                      background: "rgba(15, 33, 61, 0.6)",
                      border: "1px solid rgba(56, 189, 248, 0.15)",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-white/10">
                <button
                  onClick={() => onSelect(project)}
                  className="px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 transition-all duration-300 cursor-pointer shadow-lg hover:scale-105"
                  style={{
                    background: "linear-gradient(135deg, #D4AF37, #F0C842)",
                    color: "#050c1a",
                    boxShadow: "0 0 15px rgba(212, 175, 55, 0.35)",
                  }}
                >
                  <Sparkles className="w-4 h-4" />
                  Explore Case Study
                </button>

                {project.liveUrl && project.liveUrl !== "#" && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm flex items-center gap-1.5 text-white hover:text-[#38BDF8] transition-colors"
                    style={{
                      background: "rgba(15, 33, 61, 0.6)",
                      border: "1px solid rgba(255, 255, 255, 0.12)",
                    }}
                  >
                    <span>Live Site</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl text-[#94A3B8] hover:text-white transition-colors"
                    style={{
                      background: "rgba(15, 33, 61, 0.6)",
                      border: "1px solid rgba(255, 255, 255, 0.12)",
                    }}
                    aria-label="GitHub Repository"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>

            {/* Right Column: Visual Frame */}
            <div className="lg:col-span-5 order-first lg:order-last">
              <div
                onClick={() => onSelect(project)}
                className="group/frame relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:scale-[1.02]"
                style={{
                  background: "#071326",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.7)",
                }}
              >
                {/* Browser Window Bar */}
                <div className="px-4 py-2.5 border-b border-white/10 bg-[#050c1a] flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]/80" />
                  </div>
                  <span className="text-[10px] font-mono text-[#64748B] truncate max-w-[180px]">
                    sehar.dev/projects/{project.id}
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#64748B] group-hover/frame:text-[#D4AF37] transition-colors" />
                </div>

                {/* Cover Image */}
                <div className="relative h-44 sm:h-56 lg:h-72 w-full overflow-hidden bg-[#0a1628]">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 450px"
                      className="object-cover object-top transition-transform duration-700 group-hover/frame:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center">
                      <Layers className="w-12 h-12 text-[#D4AF37] mb-2 opacity-80" />
                      <h4 className="text-lg font-bold text-white">{project.title}</h4>
                      <p className="text-xs text-[#94A3B8] mt-1">{project.role}</p>
                    </div>
                  )}

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050c1a] via-transparent to-transparent opacity-0 group-hover/frame:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                    <span className="px-4 py-1.5 rounded-full text-xs font-bold text-white bg-[#D4AF37]/90 text-[#050c1a] shadow-lg flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      Click to Inspect
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function CreativePortfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const portfolioProjects = PROJECTS.filter((p) => p.id !== "cognita-ai");

  return (
    <section
      id="portfolio"
      className="w-full py-10 sm:py-14 relative"
      style={{
        background: "linear-gradient(180deg, #050c1a 0%, #0a1628 50%, #050c1a 100%)",
      }}
    >
      {/* Background ambient glow circles isolated in an overflow-hidden wrapper so they don't break sticky inheritance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full opacity-15 blur-[120px]"
          style={{ background: "radial-gradient(circle, #D4AF37 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-1/4 right-0 sm:right-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full opacity-15 blur-[120px]"
          style={{ background: "radial-gradient(circle, #38BDF8 0%, transparent 70%)" }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-3 reveal-down">
            <div
              className="h-px w-10"
              style={{ background: "linear-gradient(to right, transparent, #D4AF37)" }}
            />
            <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
              Featured Work
            </span>
            <div
              className="h-px w-10"
              style={{ background: "linear-gradient(to left, transparent, #D4AF37)" }}
            />
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight reveal-down delay-100">
            Creative <span className="gold-shimmer">Portfolio</span>
          </h2>

          <p className="max-w-2xl mx-auto text-sm sm:text-base text-white font-normal mt-3 leading-relaxed reveal-down delay-150">
            Scroll down through each stacked project case study to explore modern AI automation,
            bespoke CMS engineering, and high-performance full-stack web platforms.
          </p>

          <div className="custom-line mt-6 reveal-scale delay-200" />
        </div>

        {/* ─── STACK CARDS ANIMATED DECK CONTAINER ─── */}
        <div ref={containerRef} className="relative pb-6 sm:pb-8 mt-10 sm:mt-14">
          {portfolioProjects.map((project, index) => (
            <StackCard
              key={project.id}
              project={project}
              index={index}
              total={portfolioProjects.length}
              progress={scrollYProgress}
              onSelect={(p) => setSelectedProject(p)}
            />
          ))}
        </div>
      </div>

      {/* Project Case Study Deep-Dive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
export default CreativePortfolio;
