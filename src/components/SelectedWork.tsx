"use client";

import React, { useState } from "react";
import { PROJECTS, Project } from "../data/projects";
import { ProjectModal } from "./ProjectModal";
import { useSound } from "./SoundController";
import { ArrowUpRight, Sparkles, Terminal, Code2, Globe, Cpu, CheckCircle } from "lucide-react";

export const SelectedWork: React.FC = () => {
  const { playTick, playSwoosh } = useSound();
  const [activeCategory, setActiveCategory] = useState<string>("ALL");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ["ALL", "AI & Automation", "WordPress", "Full Stack Web"];

  const filteredProjects =
    activeCategory === "ALL"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  const renderProjectVisual = (project: Project) => {
    switch (project.id) {
      case "nexus-ai":
        return (
          <div className="w-full h-full min-h-[300px] sm:min-h-[380px] bg-[#0A0A0D] rounded-xl border border-white/10 p-5 font-mono text-xs flex flex-col justify-between relative overflow-hidden group-hover:border-[#E13B22]/50 transition-all shadow-[0_15px_35px_rgba(0,0,0,0.5)]">
            {/* Window titlebar */}
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#E13B22] animate-pulse"></span>
                <span className="text-[#A1A1AA]">nexus-agent-pipeline.ts</span>
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] bg-[#E13B22]/20 text-[#FF6B4A] border border-[#E13B22]/30">
                GPT-4o STREAMING
              </span>
            </div>

            {/* Simulated Live Stream */}
            <div className="py-4 space-y-2.5 text-[11px] leading-relaxed">
              <div className="text-[#34D399] flex items-center gap-2">
                <span>❯</span>
                <span>INGEST: Client Structured Payload</span>
              </div>
              <div className="text-[#FBBF24] flex items-center gap-2">
                <span>❯</span>
                <span>OPENAI: Synthesizing strict JSON schema...</span>
              </div>
              <div className="p-3 bg-white/[0.03] border border-white/5 rounded-lg text-[#F4F4F5] text-[10px]">
                <code>
                  {`{ "agent": "orchestrator", "intent": "workflow_dispatch", "status": "200_OK", "tokens": 842 }`}
                </code>
              </div>
              <div className="text-[#FF6B4A] flex items-center gap-2">
                <span>❯</span>
                <span>DISPATCH: Webhook sent to CRM & Slack</span>
              </div>
            </div>

            {/* Bottom Status Bar */}
            <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[10px] text-[#71717A]">
              <span>RESPONSE TIME: 340ms</span>
              <span className="text-white font-medium">AUTONOMOUS WORKFLOW</span>
            </div>
          </div>
        );

      case "aura-living":
        return (
          <div className="w-full h-full min-h-[300px] sm:min-h-[380px] bg-[#121217] rounded-xl border border-white/10 p-5 flex flex-col justify-between relative overflow-hidden group-hover:border-[#3B82F6]/50 transition-all shadow-[0_15px_35px_rgba(0,0,0,0.5)]">
            <div className="flex items-center justify-between border-b border-white/10 pb-3 text-xs font-mono">
              <span className="text-white font-semibold">AURA LIVING // THEME</span>
              <span className="px-2 py-0.5 rounded text-[10px] bg-green-500/20 text-green-400 border border-green-500/30">
                PAGESPEED 97/100
              </span>
            </div>

            <div className="py-6 space-y-4">
              <div className="text-2xl font-serif italic text-white tracking-wide">
                Artisanal Living Spaces
              </div>
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-lg bg-white/[0.03] border border-white/5 space-y-1">
                  <div className="text-[10px] font-mono text-[#71717A]">CONTAINER 01</div>
                  <div className="text-xs font-semibold text-white">Ceramic Sculptures</div>
                </div>
                <div className="p-3 rounded-lg bg-white/[0.03] border border-white/5 space-y-1">
                  <div className="text-[10px] font-mono text-[#71717A]">PHP HOOK</div>
                  <div className="text-xs font-semibold text-white">Linen Textures</div>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-[#71717A]">
              <span>LOAD TIME: 1.18s</span>
              <span className="text-white">ELEMENTOR PRO ARCHITECTURE</span>
            </div>
          </div>
        );

      case "vanguard-journal":
        return (
          <div className="w-full h-full min-h-[300px] sm:min-h-[380px] bg-[#0E0E14] rounded-xl border border-white/10 p-5 flex flex-col justify-between relative overflow-hidden group-hover:border-white/30 transition-all shadow-[0_15px_35px_rgba(0,0,0,0.5)]">
            <div className="flex items-center justify-between border-b border-white/10 pb-3 text-xs font-mono">
              <span className="text-white font-bold">VANGUARD JOURNAL</span>
              <span className="px-2 py-0.5 rounded text-[10px] bg-white/[0.08] text-white border border-white/20">
                LIGHTHOUSE 100
              </span>
            </div>

            <div className="py-5 space-y-3">
              <div className="text-[10px] font-mono text-[#71717A]">
                PURE WEB ENGINEERING // ZERO FRAMEWORK BLOAT
              </div>
              <div className="font-display font-bold text-xl uppercase text-white tracking-tight leading-snug">
                Modern Editorial Typography in Digital Interfaces
              </div>
              <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden mt-3">
                <div className="h-full w-3/4 bg-[#E13B22]"></div>
              </div>
              <div className="text-[10px] font-mono text-[#71717A] text-right">
                READING_PROGRESS: 75%
              </div>
            </div>

            <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-[#71717A]">
              <span>PURE HTML5 · CSS3 · ES6+</span>
              <span className="text-white">WCAG AAA ACCESSIBLE</span>
            </div>
          </div>
        );

      case "cognitive-studio":
        return (
          <div className="w-full h-full min-h-[300px] sm:min-h-[380px] bg-[#110E0E] rounded-xl border border-white/10 p-5 font-mono text-xs flex flex-col justify-between relative overflow-hidden group-hover:border-[#FF5722]/50 transition-all shadow-[0_15px_35px_rgba(0,0,0,0.5)]">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-[#FF5722] font-semibold">FLASK API // MODEL_SERVICE</span>
              <span className="text-[10px] text-[#A1A1AA] bg-white/[0.04] px-2 py-0.5 rounded">
                REST / JSON
              </span>
            </div>

            <div className="py-4 space-y-2.5">
              <div className="flex items-center justify-between text-[10px] text-[#71717A]">
                <span>TEMPERATURE: 0.72</span>
                <span>MODEL: GPT-4o</span>
              </div>
              <div className="p-3 bg-white/[0.02] border border-white/5 rounded text-[11px] text-[#D4D4D8]">
                &quot;Synthesizing technical architecture summary for distributed agent network...&quot;
              </div>
              <div className="text-[10px] text-green-400">
                ✓ 200 OK — Generated in 1.1s (4.2x faster workflow)
              </div>
            </div>

            <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[10px] text-[#71717A]">
              <span>PYTHON + FLASK + OPENAI</span>
              <span className="text-white font-medium">ACTIVE PIPELINE</span>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="work" className="py-24 md:py-36 border-b border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 mb-16 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#FF5722] mb-3">
              <span className="font-bold">03</span>
              <span>/</span>
              <span>SELECTED PORTFOLIO</span>
            </div>
            <h2 className="font-display font-extrabold text-4xl sm:text-6xl uppercase tracking-tight text-white">
              Featured Work.
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  playTick();
                  playSwoosh();
                }}
                className={`px-4 py-2 text-xs font-mono uppercase tracking-wider rounded-full transition-all border ${
                  activeCategory === cat
                    ? "bg-[#E13B22] text-white border-[#E13B22] shadow-[0_0_20px_rgba(225,59,34,0.4)]"
                    : "bg-white/[0.03] text-[#A1A1AA] border-white/10 hover:border-white/20 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards List */}
        <div className="space-y-12 sm:space-y-16">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="p-6 sm:p-10 rounded-2xl glass-card border border-white/10 hover:border-white/20 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center group"
            >
              {/* Left Column: Metadata & Narrative */}
              <div className="lg:col-span-6 space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-[#71717A]">
                    <span className="font-bold text-[#FF5722]">
                      PROJECT // 0{index + 1}
                    </span>
                    <span className="uppercase text-[#A1A1AA]">
                      {project.visualTheme.badgeText}
                    </span>
                  </div>

                  <h3
                    onClick={() => {
                      setSelectedProject(project);
                      playTick();
                    }}
                    className="font-display font-extrabold text-2xl sm:text-4xl uppercase tracking-tight text-white group-hover:text-[#FF6B4A] transition-colors cursor-pointer"
                  >
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm font-mono text-[#71717A]">
                    {project.tagline}
                  </p>
                </div>

                <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-mono rounded-full border border-white/10 bg-white/[0.03] text-[#D4D4D8]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Impact & Action */}
                <div className="pt-6 border-t border-white/10 flex items-center justify-between gap-4">
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-2xl font-bold text-[#FF5722]">
                      {project.stats.value}
                    </span>
                    <span className="text-xs font-mono text-[#71717A]">
                      {project.stats.label}
                    </span>
                  </div>

                  <button
                    onClick={() => {
                      setSelectedProject(project);
                      playTick();
                      playSwoosh();
                    }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-mono uppercase tracking-widest rounded-full bg-white/[0.06] hover:bg-[#E13B22] text-white transition-all group/btn border border-white/10 hover:border-transparent hover:shadow-[0_0_20px_rgba(225,59,34,0.4)]"
                  >
                    <span>Examine Dossier</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Right Column: Visual Preview */}
              <div
                onClick={() => {
                  setSelectedProject(project);
                  playTick();
                }}
                className="lg:col-span-6 cursor-pointer"
              >
                {renderProjectVisual(project)}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
