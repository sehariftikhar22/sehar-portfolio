"use client";

import React from "react";
import Image from "next/image";
import { Download, MessageCircle, Zap, Trophy, Users, FolderOpen } from "lucide-react";

export function AboutSection() {

  const coreCompetencies = [
    "WordPress",
    "Elementor Pro",
    "Web Developer",
    "Responsive UI",
  ];

  return (
    <section
      id="about"
      className="w-full py-10 sm:py-14"
      style={{ background: "linear-gradient(180deg, #050c1a 0%, #0a1628 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20">

          {/* ── Left: Suhad-Style Multi-Image Collage ── */}
          <div className="w-full lg:w-5/12 flex justify-center reveal-left">
            <div className="relative w-full max-w-[460px] pb-16 pt-4 px-2 sm:px-4">
              {/* Background ambient glow */}
              <div
                className="absolute inset-0 rounded-full pointer-events-none opacity-40 blur-3xl -z-10"
                style={{
                  background: "radial-gradient(circle, rgba(212,175,55,0.2) 0%, rgba(6,182,212,0.1) 60%, transparent 75%)",
                }}
              />

              {/* Floating Top Badge — Suhad Style */}
              <div
                className="absolute -top-3 sm:-top-2 right-1 sm:right-3 z-30 rounded-2xl px-5 py-3 shadow-2xl transition-transform hover:scale-105 animate-float"
                style={{
                  background: "linear-gradient(135deg, #7F1D1D 0%, #450A0A 100%)",
                  border: "1.5px solid rgba(239, 68, 68, 0.4)",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.6), 0 0 20px rgba(239, 68, 68, 0.25)",
                }}
              >
                <p className="text-2xl sm:text-3xl font-black text-white leading-none">
                  14+
                </p>
                <p className="text-[11px] font-semibold tracking-wide text-red-100/90 mt-1">
                  Finished Projects
                </p>
              </div>

              {/* Main Photo Card (Suhad Style with rounded pill corners) */}
              <div
                className="relative w-full h-[320px] sm:h-[370px] rounded-[32px] overflow-hidden group shadow-2xl"
                style={{
                  border: "2px solid rgba(212,175,55,0.35)",
                  boxShadow: "0 20px 45px rgba(0,0,0,0.7), 0 0 35px rgba(212,175,55,0.12)",
                }}
              >
                <Image
                  src="/about-collage-main.jpg"
                  alt="Modern AI Engineering Workspace"
                  fill
                  sizes="(max-width: 768px) 100vw, 460px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: "linear-gradient(to top, rgba(5,12,26,0.55) 0%, transparent 50%)",
                  }}
                />
              </div>

              {/* Bottom-Left Overlapping Photo Card */}
              <div
                className="absolute -bottom-4 sm:-bottom-6 -left-2 sm:-left-4 w-[160px] sm:w-[195px] h-[160px] sm:h-[195px] rounded-[24px] overflow-hidden z-20 group shadow-2xl"
                style={{
                  border: "4px solid #0a1628",
                  boxShadow: "0 20px 35px rgba(0,0,0,0.8), 0 0 25px rgba(212,175,55,0.15)",
                }}
              >
                <Image
                  src="/about-collage-sub1.jpg"
                  alt="Hands-on Web Development"
                  fill
                  sizes="195px"
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    border: "1.5px solid rgba(212,175,55,0.4)",
                    borderRadius: "20px",
                  }}
                />
              </div>

              {/* Bottom-Right Overlapping Photo Card */}
              <div
                className="absolute -bottom-2 sm:-bottom-4 right-0 sm:right-2 w-[180px] sm:w-[220px] h-[140px] sm:h-[170px] rounded-[24px] overflow-hidden z-20 group shadow-2xl"
                style={{
                  border: "4px solid #0a1628",
                  boxShadow: "0 20px 35px rgba(0,0,0,0.8), 0 0 25px rgba(6,182,212,0.15)",
                }}
              >
                <Image
                  src="/about-collage-sub2.jpg"
                  alt="Software Architecture Discussion"
                  fill
                  sizes="220px"
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    border: "1.5px solid rgba(6,182,212,0.4)",
                    borderRadius: "20px",
                  }}
                />
              </div>
            </div>
          </div>

          {/* ── Right: Content ── */}
          <div className="w-full lg:w-7/12 reveal-right">
            {/* Section label */}
            <div className="flex items-center gap-3 mb-4 reveal-down">
              <div className="h-px w-10" style={{ background: "linear-gradient(to right, #D4AF37, transparent)" }} />
              <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
                About Me
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-white mb-6 leading-tight reveal-down delay-100">
              Passionate Developer &amp;{" "}
              <span className="gold-shimmer">AI Enthusiast</span>
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-white leading-relaxed font-normal">
              <p>
                I am{" "}
                <span className="font-black text-[#D4AF37]">Sehar Iftikhar</span>, an{" "}
                <strong className="font-extrabold text-white">AI Web Developer</strong>,{" "}
                <strong className="font-extrabold text-white">WordPress Developer</strong>,
                and Full Stack Engineer based in Pakistan.
              </p>

              <p>
                Recently graduated with an <strong className="font-black text-white">IT degree</strong> and trained through a hands-on{" "}
                <strong className="font-extrabold text-white">AI Web Developer internship</strong> at{" "}
                <strong className="font-black text-[#D4AF37]">Hywiz Technology</strong>, Burewala.
              </p>

              <p>
                Proficient in{" "}
                <strong className="font-extrabold text-white">React, Next.js, TypeScript, Python,
                OpenAI API</strong>, and <strong className="font-extrabold text-white">WordPress + Elementor Pro</strong> — I
                build modern responsive websites, AI-powered web applications, and intelligent automation systems.
              </p>
            </div>

            {/* Core Competencies Badges */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <div className="flex flex-wrap gap-2.5 sm:gap-3">
                {coreCompetencies.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-mono font-semibold tracking-wide text-white transition-all duration-200 hover:text-[#D4AF37] hover:border-[#D4AF37] hover:scale-105 select-none shadow-md inline-flex items-center gap-2"
                    style={{
                      background: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid rgba(255, 255, 255, 0.18)",
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#contact" className="my-button-3 gap-2">
                <MessageCircle className="w-4 h-4" />
                Let&apos;s Talk
              </a>
              <a
                href="/sehar-iftikhar-cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Sehar_Iftikhar_CV.pdf"
                className="my-button-4 gap-2 cursor-pointer"
                onClick={() => {
                  if (typeof window !== "undefined") {
                    window.open("/sehar-iftikhar-cv.pdf", "_blank");
                  }
                }}
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
