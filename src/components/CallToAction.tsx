"use client";

import React, { useRef, useEffect } from "react";
import { ArrowRight, Phone, Sparkles } from "lucide-react";

/* ── Particle Mesh Background Canvas for CTA (Matches Hero Aesthetic) ── */
function CtaParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particleCount = 42;
    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
      alpha: number;
      isCyan: boolean;
    }

    const particles: Particle[] = Array.from({ length: particleCount }, (_, idx) => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      r: Math.random() * 2 + 1.2,
      alpha: Math.random() * 0.45 + 0.25,
      isCyan: idx % 3 === 0,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw and move particles
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.isCyan
          ? `rgba(56, 189, 248, ${p.alpha})`
          : `rgba(212, 175, 55, ${p.alpha})`;
        ctx.fill();
      }

      // Connect nearby particles with glowing lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            const lineAlpha = (1 - dist / 130) * 0.22;
            ctx.strokeStyle =
              particles[i].isCyan || particles[j].isCyan
                ? `rgba(56, 189, 248, ${lineAlpha})`
                : `rgba(212, 175, 55, ${lineAlpha})`;
            ctx.lineWidth = 0.9;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
}

interface CallToActionProps {
  type: 1 | 2;
}

export function CallToAction({ type }: CallToActionProps) {
  if (type === 1) {
    const roles = [
      "AI Web Developer",
      "Frontend Developer",
      "Full Stack Developer",
      "AI Automation Developer",
      "WordPress Developer",
    ];

    return (
      <section className="w-full py-10 sm:py-14 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative group">
          {/* Ambient subtle glow behind card */}
          <div className="absolute -inset-1.5 bg-gradient-to-r from-[#D4AF37]/20 via-[#38BDF8]/15 to-[#D4AF37]/20 rounded-[36px] blur-2xl opacity-60 group-hover:opacity-85 transition duration-700 pointer-events-none" />

          {/* Dark Luxury Glassmorphism card container */}
          <div
            className="relative rounded-[28px] sm:rounded-[36px] px-6 py-12 sm:px-14 sm:py-14 shadow-[0_25px_60px_rgba(0,0,0,0.7)] flex flex-col items-center text-center overflow-hidden reveal-scale"
            style={{
              background: "linear-gradient(135deg, rgba(10, 22, 40, 0.95) 0%, rgba(5, 12, 26, 0.98) 50%, rgba(13, 30, 53, 0.95) 100%)",
              border: "1.5px solid rgba(212, 175, 55, 0.35)",
              boxShadow: "0 25px 60px rgba(0, 0, 0, 0.8), 0 0 40px rgba(212, 175, 55, 0.12)",
              backdropFilter: "blur(16px)",
            }}
          >
            {/* Top golden accent light bar */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 sm:w-72 h-[3px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent rounded-full shadow-[0_0_18px_rgba(212,175,55,0.9)] z-10" />

            {/* Subtle Hero-Style Particle Mesh Background Canvas */}
            <div className="absolute inset-0 pointer-events-none opacity-30 z-0">
              <CtaParticleCanvas />
            </div>

            {/* Very light subtle orbital rings (Hero style) */}
            <div
              className="absolute -right-24 -top-24 w-[380px] h-[380px] rounded-full border border-dashed pointer-events-none opacity-20 animate-spin-slow"
              style={{ borderColor: "#D4AF37", animationDuration: "60s" }}
            />
            <div
              className="absolute -left-20 -bottom-20 w-[320px] h-[320px] rounded-full border border-dashed pointer-events-none opacity-15"
              style={{ borderColor: "#38BDF8" }}
            />

            {/* Background radial glow */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] pointer-events-none opacity-20 z-0"
              style={{
                background: "radial-gradient(ellipse at top, rgba(212,175,55,0.4) 0%, transparent 70%)",
              }}
            />

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 mb-5 sm:mb-6 shadow-sm reveal-down relative z-10">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse shrink-0" />
              <span className="text-[11px] sm:text-xs font-bold tracking-wider text-[#D4AF37] uppercase font-mono">
                FOR HIRING MANAGERS &amp; RECRUITERS
              </span>
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 max-w-3xl leading-tight reveal-down delay-100 relative z-10">
              Looking For The Next{" "}
              <span className="gold-shimmer">Opportunity.</span>
            </h2>

            {/* Paragraph Description */}
            <p className="text-white text-sm sm:text-base md:text-[17px] leading-relaxed max-w-3xl mx-auto mb-8 font-normal reveal-up delay-150 relative z-10">
              Currently open to full-time roles and high-impact engineering opportunities where I can contribute my practical web development, AI integration, and problem-solving skills as part of a high-performing engineering team.
            </p>

            {/* Tags / Pills — Single line */}
            <div className="flex flex-wrap lg:flex-nowrap justify-center items-center gap-2 sm:gap-2.5 md:gap-3 max-w-5xl mx-auto mb-9 reveal-up delay-200 relative z-10">
              {roles.map((role) => (
                <span
                  key={role}
                  className="px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-full text-slate-200 text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-300 hover:border-[#D4AF37] hover:text-[#D4AF37] hover:scale-105 cursor-default select-none shadow-sm"
                  style={{
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.14)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  {role}
                </span>
              ))}
            </div>

            {/* Action Button */}
            <a href="#contact" className="inline-block reveal-up delay-250 relative z-10">
              <button className="my-button-2 gap-2 shadow-lg shadow-[#D4AF37]/25 hover:shadow-[#D4AF37]/50 hover:scale-105 cursor-pointer">
                Let&apos;s Work Together
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      className="w-full py-12 sm:py-16 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #050c1a 0%, #0a1628 50%, #050c1a 100%)",
        borderTop: "1px solid rgba(212,175,55,0.25)",
        borderBottom: "1px solid rgba(212,175,55,0.25)",
        boxShadow: "0 0 50px rgba(0,0,0,0.8), inset 0 0 60px rgba(212,175,55,0.05)",
      }}
    >
      {/* 1. Animated Constellation Particle Mesh Canvas (Hero Style) */}
      <CtaParticleCanvas />

      {/* 2. Top & Bottom subtle golden shimmer edge lines */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-[1px] pointer-events-none"
        style={{
          background: "linear-gradient(90deg, transparent 0%, rgba(212, 175, 55, 0.8) 50%, transparent 100%)",
        }}
      />
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-[1px] pointer-events-none"
        style={{
          background: "linear-gradient(90deg, transparent 0%, rgba(56, 189, 248, 0.5) 50%, transparent 100%)",
        }}
      />

      {/* 3. Hero-style Ambient Radial Glows */}
      <div
        className="absolute top-1/2 left-[10%] -translate-y-1/2 w-[450px] h-[350px] rounded-full pointer-events-none opacity-25"
        style={{
          background: "radial-gradient(circle, rgba(212,175,55,0.3) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute top-1/2 right-[10%] -translate-y-1/2 w-[450px] h-[350px] rounded-full pointer-events-none opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(56,189,248,0.3) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* 4. Decorative Dashed Celestial Rings (Hero Style) */}
      <div
        className="absolute -right-20 top-1/2 -translate-y-1/2 w-[340px] h-[340px] rounded-full border-[1.5px] border-dashed pointer-events-none animate-spin-slow opacity-25"
        style={{
          borderColor: "rgba(212, 175, 55, 0.5)",
          boxShadow: "0 0 20px rgba(212, 175, 55, 0.1)",
          animationDuration: "50s",
        }}
      />
      <div
        className="absolute -left-20 top-1/2 -translate-y-1/2 w-[280px] h-[280px] rounded-full border-[1.5px] border-dashed pointer-events-none opacity-20"
        style={{
          borderColor: "rgba(56, 189, 248, 0.4)",
          boxShadow: "0 0 15px rgba(56, 189, 248, 0.08)",
        }}
      />

      {/* 5. Foreground Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
        <div className="max-w-3xl text-center lg:text-left reveal-left">
          <div className="flex items-center justify-center lg:justify-start gap-2 mb-2.5 reveal-down">
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] font-mono">
              Ready to Collaborate?
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-snug tracking-tight reveal-down delay-100">
            Let&apos;s Talk About{" "}
            <span className="gold-shimmer">Your Next Project</span>{" "}
            &amp; Build Something Extraordinary Together.
          </h3>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-5 shrink-0 reveal-right delay-150">
          <a href="#contact">
            <button className="my-button-2 gap-2 shadow-lg shadow-[#D4AF37]/25 hover:shadow-[#D4AF37]/50 hover:scale-105 cursor-pointer">
              Get Started
              <ArrowRight className="w-4 h-4" />
            </button>
          </a>

          <a
            href="https://wa.me/923120186784"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 font-bold text-sm text-slate-300 hover:text-[#D4AF37] transition-all hover:scale-105 cursor-pointer px-3 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-[#D4AF37]/40"
          >
            <Phone className="w-4 h-4 text-[#22C55E]" />
            WhatsApp Me
          </a>
        </div>
      </div>
    </section>
  );
}
