"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";

/* ─── Project data with REAL screenshots from images folder ─── */
const SHOWCASE_PROJECTS = [
  {
    id: 1,
    name: "Sony Precision Keyboard",
    tagline: "Interactive 3D Exploded Hardware Architecture",
    image: "/images/sony-keyboard.png",
    year: "2026",
    type: "Hardware 3D · Canvas + React",
  },
  {
    id: 2,
    name: "Audira Modern Harmony",
    tagline: "Precision Sound · Masterpiece in Acoustic Engineering",
    image: "/images/modern-harmony-audira.jpg",
    year: "2026",
    type: "3D Audio · Modern Harmony",
  },
  {
    id: 3,
    name: "Aetheris LeadOS AI",
    tagline: "Autonomous Workforce Engine & Scouty Lead Hunter",
    image: "/images/aetheris-leados.jpg",
    year: "2026",
    type: "AI Workforce · Autonomous Swarm",
  },
  {
    id: 4,
    name: "Sony WH-1000XM6 Audio",
    tagline: "Flagship 3D Acoustic Engineering & Scroll Experience",
    image: "/images/sony-wh1000xm6.png",
    year: "2026",
    type: "3D Hardware · Sony Experience",
  },
  {
    id: 5,
    name: "Aigenix AI Agency",
    tagline: "We Build AI Agents That Work While You Grow",
    image: "/images/aigenix-ai.png",
    year: "2026",
    type: "AI Agency · Autonomous Agents",
  },
  {
    id: 6,
    name: "Cognita.ai Swarm",
    tagline: "Scale Your Business With Autonomous AI Agents",
    image: "/images/cognita-circle-ai.png",
    year: "2026",
    type: "AI Swarm · Realtime Voice & Chat",
  },
  {
    id: 7,
    name: "REDSUN AI Platform",
    tagline: "Intelligent Solutions Powered by AI",
    image: "/images/redsun-ai.png",
    year: "2026",
    type: "AI SaaS · GSAP Planet Horizon",
  },
  {
    id: 8,
    name: "Nexora AI Agency",
    tagline: "Automate the Work. Amplify the Business",
    image: "/images/nexora-ai.png",
    year: "2026",
    type: "AI Automation · 3D Cyber Bot",
  },
  {
    id: 9,
    name: "ROBOLABS Robotics",
    tagline: "The Future Is Intelligent — Humanoid Robotics",
    image: "/images/robolabs-ai.png",
    year: "2026",
    type: "Robotics Platform · Spline 3D",
  },
];

/* ─── Realistic Silver MacBook Mockup (Apple Style) ─── */
function RealisticMacbook({ image, name }: { image: string; name: string }) {
  return (
    <div className="relative select-none w-[220px] sm:w-[290px] md:w-[330px] lg:w-[360px] flex-shrink-0">
      {/* ── Laptop Screen Lid ── */}
      <div
        className="relative rounded-t-[12px] sm:rounded-t-[15px] overflow-hidden transition-all duration-300"
        style={{
          background: "linear-gradient(180deg, #E2E8F0 0%, #CBD5E1 60%, #94A3B8 100%)",
          padding: "5px 5px 0 5px",
          boxShadow: "0 -2px 10px rgba(255, 255, 255, 0.08), 0 8px 25px rgba(0, 0, 0, 0.45)",
          border: "1px solid rgba(255, 255, 255, 0.4)",
          borderBottom: "none",
        }}
      >
        {/* Inner Black Glass Bezel */}
        <div
          className="relative rounded-t-[8px] sm:rounded-t-[10px] overflow-hidden"
          style={{
            background: "#0a0c10",
            padding: "6px 6px 8px 6px",
            border: "1px solid rgba(0, 0, 0, 0.9)",
          }}
        >
          {/* Top Center FaceTime Camera Dot */}
          <div className="flex items-center justify-center pb-1">
            <div className="w-1.5 h-1.5 rounded-full bg-[#181B22] border border-white/15 flex items-center justify-center shadow-inner">
              <div className="w-0.5 h-0.5 rounded-full bg-[#38BDF8]/60" />
            </div>
          </div>

          {/* Screen Display Area (16:9 Widescreen Ratio) */}
          <div
            className="relative overflow-hidden rounded-[3px] bg-[#050B14] shadow-inner"
            style={{ aspectRatio: "16/9" }}
          >
            <Image
              src={image}
              alt={name}
              fill
              sizes="(max-width: 640px) 220px, (max-width: 768px) 290px, (max-width: 1024px) 330px, 360px"
              className="object-contain w-full h-full bg-[#050B14] transition-transform duration-500"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />

            {/* Realistic Glass Reflection Sheen */}
            <div
              className="absolute inset-0 pointer-events-none z-10 opacity-70 group-hover:opacity-40 transition-opacity duration-500"
              style={{
                background:
                  "linear-gradient(120deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.03) 35%, transparent 55%, rgba(255,255,255,0.02) 100%)",
              }}
            />

            {/* Inner Border Vignette */}
            <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_12px_rgba(0,0,0,0.4)]" />
          </div>
        </div>
      </div>

      {/* ── Recessed Hinge Bar ── */}
      <div
        className="w-[28%] h-[3.5px] sm:h-[4px] mx-auto rounded-b-[2px] relative z-10"
        style={{
          background: "linear-gradient(180deg, #11141a 0%, #1e222d 100%)",
          borderLeft: "1px solid rgba(255,255,255,0.08)",
          borderRight: "1px solid rgba(255,255,255,0.08)",
        }}
      />

      {/* ── Silver Aluminum Lower Chassis / Base (Flared slightly wider) ── */}
      <div className="relative -mx-[2.5%] sm:-mx-[3%]">
        <div
          className="relative h-[11px] sm:h-[13px] rounded-b-[7px] sm:rounded-b-[9px] flex items-start justify-center shadow-md overflow-hidden"
          style={{
            background: "linear-gradient(180deg, #E2E8F0 0%, #CBD5E1 30%, #94A3B8 75%, #64748B 100%)",
            border: "1px solid rgba(255, 255, 255, 0.7)",
            borderTop: "1px solid #FFFFFF",
            boxShadow:
              "inset 0 1px 0 rgba(255,255,255,0.9), 0 3px 8px rgba(0,0,0,0.22)",
          }}
        >
          {/* Front Opening Thumb Cutout Notch */}
          <div
            className="w-12 sm:w-16 h-[3px] sm:h-[3.5px] mx-auto rounded-b-[4px] shadow-inner"
            style={{
              background: "linear-gradient(180deg, #64748B 0%, #475569 100%)",
              boxShadow: "inset 0 1px 2px rgba(0,0,0,0.4)",
            }}
          />
        </div>

        {/* Chassis Bottom Lip Line */}
        <div
          className="w-[94%] h-[2px] mx-auto rounded-b-full opacity-60"
          style={{ background: "linear-gradient(to right, transparent, #334155, transparent)" }}
        />
      </div>

      {/* ── Realistic Surface Contact Shadow / Reflection ── */}
      <div
        className="mx-auto w-[90%] h-[11px] sm:h-[14px] -mt-1 rounded-[100%] pointer-events-none transition-all duration-500 group-hover:scale-x-105 group-hover:opacity-80"
        style={{
          background: "radial-gradient(ellipse at center, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.2) 55%, transparent 75%)",
          filter: "blur(4px)",
        }}
      />
    </div>
  );
}

/* ─── Single project card with refined proportions ─── */
function ProjectLaptopCard({ project }: { project: (typeof SHOWCASE_PROJECTS)[0] }) {
  return (
    <div
      className="flex flex-col items-center group cursor-pointer px-3 sm:px-4 select-none"
      style={{ flexShrink: 0 }}
    >
      {/* Laptop Mockup with smooth floating hover */}
      <div className="transition-all duration-500 transform group-hover:-translate-y-2.5">
        <RealisticMacbook image={project.image} name={project.name} />
      </div>

      {/* Project Label & Details Below Laptop */}
      <div className="mt-3 sm:mt-5 text-center max-w-[220px] sm:max-w-[320px]">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 mb-1 group-hover:border-[#D4AF37]/40 transition-colors">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
          <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-[#94A3B8] group-hover:text-[#D4AF37] transition-colors">
            {project.type}
          </span>
        </div>
        <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-[#D4AF37] transition-colors duration-300 leading-snug">
          {project.name}
        </h4>
        <p className="text-[11px] sm:text-xs text-[#94A3B8] font-normal mt-0.5 line-clamp-1">
          {project.tagline}
        </p>
      </div>
    </div>
  );
}

/* ─── Main Component ─── */
export function ProjectShowcase() {
  const trackRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number>(0);
  const posRef = useRef<number>(0);
  const isPaused = useRef(false);
  const speed = 0.85; // px per frame — smooth & slightly faster

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const animate = () => {
      if (!isPaused.current) {
        posRef.current += speed;
        // Reset when scrolled half (duplicated list)
        const halfWidth = track.scrollWidth / 2;
        if (posRef.current >= halfWidth) {
          posRef.current = 0;
        }
        track.style.transform = `translateX(-${posRef.current}px)`;
      }
      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  // Duplicate list for seamless infinite loop
  const allProjects = [...SHOWCASE_PROJECTS, ...SHOWCASE_PROJECTS];

  return (
    <section
      id="portfolio"
      className="w-full py-10 sm:py-14 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0a1628 0%, #050c1a 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mb-10">
        {/* Heading */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-3 reveal-down">
            <div className="h-px w-10" style={{ background: "linear-gradient(to right, transparent, #D4AF37)" }} />
            <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
              All Projects
            </span>
            <div className="h-px w-10" style={{ background: "linear-gradient(to left, transparent, #D4AF37)" }} />
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight reveal-down delay-100">
            My <span className="gold-shimmer">Work Showcase</span>
          </h2>
          <p className="text-sm sm:text-base text-white mt-2 reveal-down delay-150">
            Curated Real Projects — Hover to pause, auto-scrolling showcase
          </p>
        </div>

        <div className="custom-line mt-6 reveal-scale delay-200" />
      </div>

      {/* Laptop Carousel — infinite auto-scroll */}
      <div className="relative w-full reveal-up delay-150">
        {/* Left fade mask */}
        <div
          className="absolute left-0 top-0 bottom-0 z-20 pointer-events-none w-6 sm:w-16 md:w-28 lg:w-[180px]"
          style={{
            background: "linear-gradient(to right, #050c1a 10%, transparent 100%)",
          }}
        />

        {/* Right fade mask */}
        <div
          className="absolute right-0 top-0 bottom-0 z-20 pointer-events-none w-6 sm:w-16 md:w-28 lg:w-[180px]"
          style={{
            background: "linear-gradient(to left, #050c1a 10%, transparent 100%)",
          }}
        />

        {/* Scrolling track */}
        <div
          className="w-full overflow-hidden py-4"
          onMouseEnter={() => { isPaused.current = true; }}
          onMouseLeave={() => { isPaused.current = false; }}
          style={{ cursor: "grab" }}
        >
          <div
            ref={trackRef}
            className="flex items-end gap-5 sm:gap-12 lg:gap-16 will-change-transform px-4 sm:px-6"
            style={{ width: "max-content" }}
          >
            {allProjects.map((project, idx) => (
              <ProjectLaptopCard key={`${project.id}-${idx}`} project={project} />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom note */}
      <div className="text-center mt-10">
        <p className="text-xs text-[#4A6080] font-semibold">
          🖱️ Hover to pause • Auto-scrolling showcase of real projects
        </p>
      </div>
    </section>
  );
}
