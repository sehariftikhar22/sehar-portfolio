"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Project } from "../data/projects";
import { X, Copy, Check, ExternalLink, Terminal, Cpu, ArrowUpRight, Sparkles } from "lucide-react";
import { useSound } from "./SoundController";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const { playTick, playSuccess } = useSound();
  const [copied, setCopied] = useState(false);

  if (!project) return null;

  const handleCopyCode = () => {
    if (project.codeSnippet) {
      navigator.clipboard.writeText(project.codeSnippet.code);
      setCopied(true);
      playSuccess();
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#0E0E12] border border-white/15 rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.8)] overflow-y-auto flex flex-col text-[#F4F4F5]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0E0E12]/95 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold text-[#FF5722] flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              CASE STUDY // {project.id.toUpperCase()}
            </span>
            <span className="text-xs font-mono text-[#71717A] hidden sm:inline">
              {project.category} · {project.year}
            </span>
          </div>

          <button
            onClick={() => {
              playTick();
              onClose();
            }}
            className="p-2 rounded-full border border-white/10 hover:border-white/30 hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-4 h-4 text-white" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 md:p-10 space-y-10">
          {/* Project Screenshot Banner */}
          {project.image && (
            <div className="relative w-full h-56 sm:h-72 md:h-80 rounded-xl overflow-hidden border border-white/15 shadow-2xl bg-[#080c14]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 850px"
                className="object-cover object-top"
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to top, rgba(14,14,18,0.7) 0%, transparent 60%)",
                }}
              />
            </div>
          )}

          {/* Title & Tagline */}
          <div className="space-y-4">
            <div className="inline-block px-3 py-1 text-xs font-mono uppercase tracking-wider bg-white/[0.06] border border-white/10 rounded-full text-[#FF6B4A]">
              Role: {project.role}
            </div>
            <h3 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-white">
              {project.title}
            </h3>
            <p className="text-base sm:text-lg text-[#A1A1AA] leading-relaxed">
              {project.tagline}
            </p>
          </div>

          {/* Quick Metrics & Context Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-5 rounded-xl border border-white/10 bg-white/[0.02]">
            <div>
              <div className="text-[11px] font-mono uppercase text-[#71717A]">Key Impact</div>
              <div className="font-display text-2xl font-bold text-[#FF5722] mt-0.5">
                {project.stats.value}
              </div>
              <div className="text-xs text-[#A1A1AA]">{project.stats.label}</div>
            </div>

            <div>
              <div className="text-[11px] font-mono uppercase text-[#71717A]">Project Scope</div>
              <div className="font-display text-lg font-bold text-white mt-0.5">
                {project.clientOrContext}
              </div>
              <div className="text-xs text-[#A1A1AA]">Year: {project.year}</div>
            </div>

            <div>
              <div className="text-[11px] font-mono uppercase text-[#71717A]">Core Domain</div>
              <div className="font-display text-lg font-bold text-white mt-0.5">
                {project.category}
              </div>
              <div className="text-xs text-[#A1A1AA]">Production Standard</div>
            </div>
          </div>

          {/* Detailed Narrative */}
          <div className="space-y-4">
            <h4 className="font-display text-xl font-bold uppercase text-white border-b border-white/10 pb-2">
              Architectural Overview
            </h4>
            <p className="text-[#A1A1AA] text-sm sm:text-base leading-relaxed">
              {project.longDescription}
            </p>
          </div>

          {/* Technical Highlights */}
          <div className="space-y-4">
            <h4 className="font-display text-xl font-bold uppercase text-white border-b border-white/10 pb-2">
              Engineering Solutions & Highlights
            </h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
              {project.highlights.map((highlight, idx) => (
                <li
                  key={idx}
                  className="p-3.5 rounded-xl border border-white/10 bg-white/[0.02] text-xs sm:text-sm text-[#D4D4D8] flex items-start gap-3"
                >
                  <span className="font-mono font-bold text-[#FF5722] mt-0.5">
                    0{idx + 1}
                  </span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack Pills */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#71717A]">
              Technologies & Tooling
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-mono rounded-full border border-white/10 bg-white/[0.04] text-white"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Code Showcase Snippet */}
          {project.codeSnippet && (
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono text-[#A1A1AA]">
                  <Terminal className="w-4 h-4 text-[#FF5722]" />
                  <span>{project.codeSnippet.filename}</span>
                </div>
                <button
                  onClick={handleCopyCode}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono text-[#A1A1AA] hover:text-white bg-white/[0.04] border border-white/10 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-green-400" />
                      <span className="text-green-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Snippet</span>
                    </>
                  )}
                </button>
              </div>

              <div className="p-4 bg-[#09090B] text-[#D4D4D8] font-mono text-xs rounded-xl overflow-x-auto leading-relaxed border border-white/10 shadow-inner">
                <pre>{project.codeSnippet.code}</pre>
              </div>
            </div>
          )}

          {/* Footer Actions */}
          <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs font-mono text-[#71717A]">
              SEHAR IFTIKHAR // TECHNICAL ARCHIVE
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  playTick();
                  onClose();
                }}
                className="px-5 py-2 text-xs font-mono uppercase tracking-wider rounded-full border border-white/15 hover:border-white/40 text-white transition-colors"
              >
                Close Dossier
              </button>

              <a
                href="#contact"
                onClick={() => {
                  playTick();
                  onClose();
                }}
                className="px-5 py-2 text-xs font-mono uppercase tracking-wider bg-[#E13B22] hover:bg-[#FF5722] text-white rounded-full transition-colors flex items-center gap-1.5 shadow-[0_0_20px_rgba(225,59,34,0.4)]"
              >
                <span>Discuss Similar Project</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
