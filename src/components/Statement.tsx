"use client";

import React from "react";
import { ArrowRight, Layers, Compass, Sparkles, CheckCircle2 } from "lucide-react";
import { useSound } from "./SoundController";

export const Statement: React.FC = () => {
  const { playTick } = useSound();

  return (
    <section id="about" className="py-24 md:py-36 border-b border-white/5 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-[#E13B22]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Marker */}
        <div className="flex items-center justify-between pb-6 mb-12 border-b border-white/10 text-xs font-mono text-[#71717A]">
          <div className="flex items-center gap-2">
            <span className="text-[#FF5722] font-bold">02</span>
            <span>/</span>
            <span>PHILOSOPHY & INTERNSHIP EVOLUTION</span>
          </div>
          <span className="hidden sm:inline">120-DAY ACCELERATED TRAJECTORY</span>
        </div>

        {/* Large Editorial Statement */}
        <div className="max-w-5xl mb-16">
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl leading-[1.12] tracking-tight text-white uppercase">
            From writing my first lines of code to building{" "}
            <span className="text-gradient-accent">intelligent digital experiences.</span>
          </h2>
        </div>

        {/* 2-Column Split: Story & Progression Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 pt-8 border-t border-white/10">
          {/* Left: Authentic Narrative */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-md space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-white/10">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#E13B22] to-[#FF6B4A] flex items-center justify-center font-bold text-white shadow-lg">
                  SI
                </div>
                <div>
                  <div className="font-display font-bold text-sm text-white">Sehar Iftikhar</div>
                  <div className="text-[11px] font-mono text-[#A1A1AA]">Full Stack & AI Developer</div>
                </div>
              </div>

              <p className="text-[#A1A1AA] text-sm sm:text-base leading-relaxed">
                My career in technology is driven by hands-on execution. During my intensive
                4-month web development internship, I progressed systematically from core browser
                mechanics to complex modern software systems.
              </p>

              <p className="text-[#A1A1AA] text-sm sm:text-base leading-relaxed">
                I began by handcoding 4 complete websites from scratch with pure HTML, modern CSS,
                and modern JavaScript, mastering how the browser renders and manages state. Soon after,
                I stepped into client-facing CMS architecture, designing and deploying 2 production websites
                using WordPress and Elementor Pro.
              </p>

              <p className="text-[#A1A1AA] text-sm sm:text-base leading-relaxed">
                Today, I am actively engineering AI automation websites powered by OpenAI models and
                Python/Flask backends—turning static pages into intelligent applications that solve
                real problems automatically.
              </p>
            </div>

            <div className="pt-2">
              <a
                href="#journey"
                onClick={playTick}
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#FF5722] hover:text-[#FF6B4A] transition-colors group"
              >
                <span>View Complete Timeline Breakdown</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right: 3 Progression Pillars */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Pillar 1 */}
            <div className="p-6 sm:p-8 rounded-2xl glass-card glass-card-hover relative group">
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <div className="text-xs font-mono text-[#71717A] uppercase tracking-wider">
                    STAGE 01 // FOUNDATIONS
                  </div>
                  <h3 className="font-display text-xl font-bold text-white">
                    Core Web Standards & 4 Coded Websites
                  </h3>
                  <p className="text-sm text-[#A1A1AA] leading-relaxed pt-1">
                    Mastered semantic HTML5, modern CSS Grid/Flexbox layouts, and vanilla JavaScript (ES6+).
                    Engineered 4 complete websites from scratch with zero framework bloat to gain deep
                    DOM intuition and performance discipline.
                  </p>
                </div>
                <div className="p-3 bg-white/[0.04] border border-white/10 rounded-xl text-[#FF5722]">
                  <Layers className="w-5 h-5" />
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-white/5 flex flex-wrap gap-2 text-xs font-mono text-[#71717A]">
                <span className="text-white">HTML5</span> · <span>CSS3 Grid</span> ·{" "}
                <span>JavaScript ES6+</span> · <span>Semantic SEO</span>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="p-6 sm:p-8 rounded-2xl glass-card glass-card-hover relative group">
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <div className="text-xs font-mono text-[#71717A] uppercase tracking-wider">
                    STAGE 02 // CMS SCALE
                  </div>
                  <h3 className="font-display text-xl font-bold text-white">
                    WordPress & 2 Elementor Production Deployments
                  </h3>
                  <p className="text-sm text-[#A1A1AA] leading-relaxed pt-1">
                    Expanded into client CMS engineering. Mastered WordPress architecture, bespoke
                    Elementor Pro page layouts, mobile responsiveness, custom PHP functions, and performance
                    caching to deliver 2 production-ready websites.
                  </p>
                </div>
                <div className="p-3 bg-white/[0.04] border border-white/10 rounded-xl text-[#3B82F6]">
                  <Compass className="w-5 h-5" />
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-white/5 flex flex-wrap gap-2 text-xs font-mono text-[#71717A]">
                <span className="text-white">WordPress</span> · <span>Elementor Pro</span> ·{" "}
                <span>PHP Hooks</span> · <span>Performance Optimization</span>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="p-6 sm:p-8 rounded-2xl glass-card glass-card-hover relative group border-[#E13B22]/30 shadow-[0_0_30px_rgba(225,59,34,0.1)]">
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <div className="text-xs font-mono text-[#FF5722] font-semibold uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    STAGE 03 // ACTIVE AI FOCUS
                  </div>
                  <h3 className="font-display text-xl font-bold text-white">
                    AI Web Development & OpenAI Automation
                  </h3>
                  <p className="text-sm text-[#A1A1AA] leading-relaxed pt-1">
                    Currently building intelligent automation platforms that pair the OpenAI API with
                    Python/Flask backend microservices and modern responsive frontends. Constructing
                    autonomous pipelines that process data and execute complex tasks seamlessly.
                  </p>
                </div>
                <div className="p-3 bg-[#E13B22]/20 border border-[#E13B22]/40 rounded-xl text-[#FF6B4A]">
                  <Sparkles className="w-5 h-5" />
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-white/10 flex flex-wrap gap-2 text-xs font-mono text-[#A1A1AA]">
                <span className="text-[#FF5722] font-medium">OpenAI API</span> ·{" "}
                <span>AI Automation</span> · <span>Python & Flask</span> ·{" "}
                <span>Prompt Chaining</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
