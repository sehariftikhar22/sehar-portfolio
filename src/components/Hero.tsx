"use client";

import React, { useState, useEffect, useRef } from "react";
import { Download, Briefcase, Sparkles } from "lucide-react";

/* ── Particle Mesh Background Canvas (Suhad-Style) ── */
function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particleCount = 55;
    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
      alpha: number;
    }
    const particles: Particle[] = Array.from({ length: particleCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 2 + 1,
      alpha: Math.random() * 0.4 + 0.2,
    }));

    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212, 175, 55, ${p.alpha})`;
        ctx.fill();
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 125) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(212, 175, 55, ${0.14 * (1 - dist / 125)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="particle-canvas"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}

/* ── 3D Tech Constellation Sphere (Inspired by Suhad Tech Solutions Hero) ── */
interface TechItem {
  name: string;
  symbol: string;
  color: string;
  bg: string;
  border: string;
  size: number;
  phi: number;   // Polar angle (0 to PI)
  theta: number; // Azimuthal angle (0 to 2*PI)
}

const TECH_NODES: TechItem[] = [
  { name: "React", symbol: "⚛️", color: "#61DAFB", bg: "#0d1b2a", border: "#61DAFB", size: 48, phi: 0.85, theta: 0.3 },
  { name: "Next.js", symbol: "▲", color: "#FFFFFF", bg: "#000000", border: "#E2E8F0", size: 46, phi: 1.45, theta: 1.4 },
  { name: "TypeScript", symbol: "TS", color: "#38BDF8", bg: "#081d33", border: "#38BDF8", size: 44, phi: 2.15, theta: 2.5 },
  { name: "OpenAI", symbol: "🤖", color: "#34D399", bg: "#06221b", border: "#34D399", size: 50, phi: 1.25, theta: 3.6 },
  { name: "Python", symbol: "🐍", color: "#FBBF24", bg: "#1f1d0a", border: "#FBBF24", size: 46, phi: 2.35, theta: 4.6 },
  { name: "WordPress", symbol: "W", color: "#38BDF8", bg: "#0a2233", border: "#38BDF8", size: 44, phi: 0.95, theta: 5.4 },
  { name: "Tailwind", symbol: "🎨", color: "#38BDF8", bg: "#061e2f", border: "#38BDF8", size: 40, phi: 2.65, theta: 0.8 },
  { name: "Node.js", symbol: "🟢", color: "#4ADE80", bg: "#0a2416", border: "#4ADE80", size: 42, phi: 0.55, theta: 2.8 },
  { name: "JavaScript", symbol: "JS", color: "#FACC15", bg: "#2a2204", border: "#FACC15", size: 42, phi: 1.85, theta: 0.2 },
  { name: "GSAP", symbol: "⚡", color: "#86EFAC", bg: "#122a16", border: "#86EFAC", size: 40, phi: 2.75, theta: 3.2 },
  { name: "Git", symbol: "🔀", color: "#FB923C", bg: "#28150c", border: "#FB923C", size: 38, phi: 0.45, theta: 4.7 },
  { name: "PHP", symbol: "PHP", color: "#A5B4FC", bg: "#1e1e38", border: "#818CF8", size: 44, phi: 1.65, theta: 4.3 },
];

// Additional geodesic mesh vertices to create the dense connected polyhedron
const MESH_POINTS = [
  { phi: 0.35, theta: 1.8 },
  { phi: 0.75, theta: 3.8 },
  { phi: 1.15, theta: 2.3 },
  { phi: 1.65, theta: 3.1 },
  { phi: 1.95, theta: 1.1 },
  { phi: 2.25, theta: 3.9 },
  { phi: 2.55, theta: 2.0 },
  { phi: 2.85, theta: 5.1 },
  { phi: 0.65, theta: 0.9 },
  { phi: 1.35, theta: 5.0 },
];

function TechConstellationSphere() {
  const [mounted, setMounted] = useState(false);
  const [rotY, setRotY] = useState(0);
  const [rotX, setRotX] = useState(0.18);
  const containerRef = useRef<HTMLDivElement>(null);
  const targetSpeedY = useRef(0.006);

  useEffect(() => {
    setMounted(true);
    let animId: number;
    let currentRotY = 0;

    const loop = () => {
      currentRotY += targetSpeedY.current;
      setRotY(currentRotY);
      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;
    setRotX(ny * 0.5);
    targetSpeedY.current = nx * 0.02 + 0.005;
  };

  const handleMouseLeave = () => {
    targetSpeedY.current = 0.006;
    setRotX(0.18);
  };

  // 3D Sphere geometry calculations
  const cx = 300;
  const cy = 300;
  const R = 210;
  const perspective = 620;

  // Project Tech Nodes
  const projectedNodes = TECH_NODES.map((node, index) => {
    // Spherical to 3D Cartesian
    const x0 = R * Math.sin(node.phi) * Math.cos(node.theta + rotY);
    const y0 = R * Math.cos(node.phi);
    const z0 = R * Math.sin(node.phi) * Math.sin(node.theta + rotY);

    // Rotate on X axis
    const y1 = y0 * Math.cos(rotX) - z0 * Math.sin(rotX);
    const z1 = y0 * Math.sin(rotX) + z0 * Math.cos(rotX);

    // Perspective projection
    const scale = perspective / (perspective + z1);
    const px = cx + x0 * scale;
    const py = cy + y1 * scale;
    const isFront = z1 > -20;
    const depthOpacity = Math.max(0.35, (z1 + R) / (2 * R));

    return {
      ...node,
      index,
      px,
      py,
      pz: z1,
      scale,
      isFront,
      depthOpacity,
    };
  });

  // Project Mesh Vertices
  const projectedMesh = MESH_POINTS.map((pt, index) => {
    const x0 = R * Math.sin(pt.phi) * Math.cos(pt.theta + rotY);
    const y0 = R * Math.cos(pt.phi);
    const z0 = R * Math.sin(pt.phi) * Math.sin(pt.theta + rotY);

    const y1 = y0 * Math.cos(rotX) - z0 * Math.sin(rotX);
    const z1 = y0 * Math.sin(rotX) + z0 * Math.cos(rotX);

    const scale = perspective / (perspective + z1);
    return {
      index: index + 100,
      px: cx + x0 * scale,
      py: cy + y1 * scale,
      pz: z1,
      scale,
      depthOpacity: Math.max(0.2, (z1 + R) / (2 * R)),
    };
  });

  // Combine all 3D points for edge connections
  const all3DPoints = [
    ...projectedNodes.map((p) => ({ px: p.px, py: p.py, pz: p.pz, id: p.name })),
    ...projectedMesh.map((p) => ({ px: p.px, py: p.py, pz: p.pz, id: `mesh-${p.index}` })),
  ];

  // Calculate lines between nearby points in 3D
  const lines: {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    opacity: number;
    stroke: string;
    width: number;
  }[] = [];

  const maxDist = R * 1.05;
  for (let i = 0; i < all3DPoints.length; i++) {
    for (let j = i + 1; j < all3DPoints.length; j++) {
      const dx = all3DPoints[i].px - all3DPoints[j].px;
      const dy = all3DPoints[i].py - all3DPoints[j].py;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < maxDist) {
        const avgZ = (all3DPoints[i].pz + all3DPoints[j].pz) / 2;
        const depth = (avgZ + R) / (2 * R);
        // Richer, darker, prominent opacity
        const alpha = Math.max(0.38, (1 - dist / maxDist) * Math.max(depth, 0.45) * 0.98);

        // Prominent dark gold and rich cyan network lines
        const isGold = i % 2 === 0 || j % 2 === 0;
        const strokeColor = depth > 0.45
          ? (isGold ? "rgba(212, 175, 55, 0.95)" : "rgba(56, 189, 248, 0.9)")
          : (isGold ? "rgba(180, 140, 20, 0.75)" : "rgba(30, 140, 200, 0.7)");

        lines.push({
          x1: all3DPoints[i].px,
          y1: all3DPoints[i].py,
          x2: all3DPoints[j].px,
          y2: all3DPoints[j].py,
          opacity: alpha,
          stroke: strokeColor,
          width: depth > 0.5 ? 2.0 : 1.3,
        });
      }
    }
  }

  // Sort nodes so background nodes render behind foreground nodes
  const sortedNodes = [...projectedNodes].sort((a, b) => a.pz - b.pz);

  if (!mounted) {
    return (
      <div className="relative w-full max-w-[560px] lg:max-w-[620px] xl:max-w-[660px] aspect-square flex items-center justify-center select-none -mt-2 lg:-mt-6">
        <div
          className="absolute inset-4 rounded-full pointer-events-none opacity-40 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(212,175,55,0.2) 0%, rgba(6,182,212,0.1) 50%, transparent 75%)",
          }}
        />
        <div
          className="w-[92%] h-[92%] rounded-full border-[1.5px] border-dashed animate-spin-slow opacity-60"
          style={{ borderColor: "rgba(212, 175, 55, 0.7)", animationDuration: "40s" }}
        />
      </div>
    );
  }

  return (
    <div
      suppressHydrationWarning
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[300px] min-[380px]:max-w-[420px] sm:max-w-[560px] lg:max-w-[620px] xl:max-w-[660px] aspect-square flex items-center justify-center select-none"
    >
      {/* Background Radial Glow Blooming */}
      <div
        className="absolute inset-4 rounded-full pointer-events-none opacity-50 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(212,175,55,0.22) 0%, rgba(6,182,212,0.12) 50%, transparent 75%)",
        }}
      />

      {/* Outer Dashed Orbital Rings (Suhad style) — slightly more prominent & crisp */}
      <div
        className="absolute w-[92%] h-[92%] rounded-full border-[1.5px] border-dashed pointer-events-none animate-spin-slow opacity-55"
        style={{
          borderColor: "rgba(212, 175, 55, 0.75)",
          boxShadow: "0 0 14px rgba(212, 175, 55, 0.15)",
          animationDuration: "45s",
        }}
      />
      <div
        className="absolute w-[76%] h-[76%] rounded-full border-[1.5px] border-dashed pointer-events-none opacity-50"
        style={{
          borderColor: "rgba(56, 189, 248, 0.7)",
          boxShadow: "0 0 12px rgba(56, 189, 248, 0.12)",
          animationDuration: "30s",
        }}
      />

      {/* Floating Status Pill 1: Top Right */}
      <div
        className="absolute top-1 sm:top-2 right-1 sm:right-3 z-30 flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full backdrop-blur-md shadow-2xl transition-transform hover:scale-105 max-w-[85%]"
        style={{
          background: "rgba(10, 22, 40, 0.92)",
          border: "1.5px solid rgba(212, 175, 55, 0.55)",
          boxShadow: "0 0 20px rgba(212, 175, 55, 0.25)",
        }}
      >
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
        <span className="text-[10px] sm:text-[11px] font-mono font-bold text-white tracking-wide truncate">
          AI &amp; Full Stack Solutions
        </span>
      </div>

      {/* Floating Status Pill 2: Bottom Left */}
      <div
        className="absolute bottom-1 sm:bottom-3 left-1 sm:left-3 z-30 flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full backdrop-blur-md shadow-2xl transition-transform hover:scale-105 max-w-[85%]"
        style={{
          background: "rgba(10, 22, 40, 0.92)",
          border: "1.5px solid rgba(6, 182, 212, 0.45)",
          boxShadow: "0 0 20px rgba(6, 182, 212, 0.2)",
        }}
      >
        <Sparkles className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
        <span className="text-[10px] sm:text-[11px] font-mono font-bold text-cyan-300 tracking-wide truncate">
          14+ Verified Projects
        </span>
      </div>

      {/* ── 3D SVG Constellation Sphere ── */}
      <svg
        suppressHydrationWarning
        viewBox="0 0 600 600"
        className="w-full h-full relative z-10 overflow-hidden"
        style={{ filter: "drop-shadow(0 15px 35px rgba(0,0,0,0.6))" }}
      >
        <defs>
          <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#F0C842" stopOpacity="1" />
            <stop offset="60%" stopColor="#D4AF37" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#8A6D05" stopOpacity="0.8" />
          </radialGradient>
          <filter id="glowFilter" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Constellation Connecting Network Lines */}
        <g className="constellation-lines">
          {lines.map((line, idx) => (
            <line
              key={idx}
              x1={line.x1}
              y1={line.y1}
              x2={line.x2}
              y2={line.y2}
              stroke={line.stroke}
              strokeWidth={line.width}
              strokeOpacity={line.opacity}
              strokeLinecap="round"
            />
          ))}
        </g>

        {/* Small Golden Star Vertices */}
        <g className="mesh-vertices">
          {projectedMesh.map((pt, idx) => (
            <circle
              key={idx}
              cx={pt.px}
              cy={pt.py}
              r={2.5 * pt.scale}
              fill="#D4AF37"
              fillOpacity={pt.depthOpacity}
            />
          ))}
        </g>

        {/* Central Core Nucleus (Monogram) */}
        <g transform={`translate(${cx}, ${cy})`}>
          <circle r="36" fill="url(#centerGlow)" filter="url(#glowFilter)" />
          <circle r="42" fill="none" stroke="rgba(212,175,55,0.4)" strokeWidth="1.5" strokeDasharray="4 4" />
          <text
            y="-2"
            textAnchor="middle"
            dominantBaseline="middle"
            fill="#050c1a"
            fontSize="18"
            fontWeight="900"
            fontFamily="monospace"
          >
            SI
          </text>
          <text
            y="14"
            textAnchor="middle"
            dominantBaseline="middle"
            fill="#050c1a"
            fontSize="8"
            fontWeight="800"
            letterSpacing="2"
            fontFamily="monospace"
          >
            ENGINEER
          </text>
        </g>

        {/* 3D Projected Technology Badges */}
        <g className="tech-badges">
          {sortedNodes.map((node) => {
            const currentR = (node.size / 2) * node.scale;

            return (
              <g
                key={node.name}
                transform={`translate(${node.px}, ${node.py})`}
                opacity={node.depthOpacity}
                className="cursor-pointer transition-transform duration-200 hover:scale-125"
              >
                {/* Outer glowing halo */}
                <circle
                  r={currentR + 3}
                  fill="none"
                  stroke={node.border}
                  strokeWidth={node.isFront ? 1.8 : 1}
                  strokeOpacity={node.isFront ? 0.8 : 0.3}
                  filter={node.isFront ? "url(#glowFilter)" : undefined}
                />

                {/* Badge circular background */}
                <circle
                  r={currentR}
                  fill={node.bg}
                  stroke={node.border}
                  strokeWidth={node.isFront ? 1.8 : 1.2}
                />

                {/* Symbol / Icon */}
                <text
                  textAnchor="middle"
                  dominantBaseline="middle"
                  y={node.scale > 0.85 ? "-4" : "0"}
                  fontSize={
                    node.symbol === "PHP"
                      ? 12 * node.scale
                      : node.symbol.length <= 2
                      ? 15 * node.scale
                      : 19 * node.scale
                  }
                  fontWeight="bold"
                  fill={node.color}
                  fontFamily="sans-serif"
                >
                  {node.symbol}
                </text>

                {/* Label (prominent & readable) */}
                {node.scale > 0.75 && (
                  <text
                    textAnchor="middle"
                    dominantBaseline="middle"
                    y={13 * node.scale}
                    fontSize={Math.max(9, 10 * node.scale)}
                    fontWeight="800"
                    fill="#FFFFFF"
                    fontFamily="monospace"
                    style={{ textShadow: "0 1px 4px rgba(0,0,0,0.9)" }}
                  >
                    {node.name}
                  </text>
                )}
              </g>
            );
          })}
        </g>
      </svg>
    </div>
  );
}

/* ── Animated Counter ── */
function AnimatedCounter({ target, suffix = "+" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const duration = 1800;
          const step = Math.ceil(target / (duration / 16));
          const timer = setInterval(() => {
            start = Math.min(start + step, target);
            setCount(start);
            if (start >= target) clearInterval(timer);
          }, 16);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

/* ── Main Hero Component ── */
export function Hero() {
  const roles = [
    "SEHAR IFTIKHAR",
    "AI WEB DEVELOPER",
    "WORDPRESS DEVELOPER",
    "FULL STACK DEVELOPER",
    "AI AUTOMATION ENGINEER",
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("SEHAR IFTIKHAR");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = roles[currentRoleIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && currentText === fullText) {
      // Pause at full text (longer for name, slightly shorter for roles)
      const pauseDuration = currentRoleIndex === 0 ? 2500 : 1800;
      timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
    } else if (isDeleting && currentText === "") {
      // Finished deleting current phrase, switch to next
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      // Typing or deleting characters
      const speed = isDeleting ? 35 : 75;
      timeout = setTimeout(() => {
        setCurrentText(
          isDeleting
            ? fullText.substring(0, currentText.length - 1)
            : fullText.substring(0, currentText.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentRoleIndex]);

  const stats = [
    { value: 2,  suffix: "+",  label: "Years Experience" },
    { value: 14, suffix: "+",  label: "Projects Delivered" },
    { value: 100, suffix: "%", label: "Client Satisfaction" },
  ];

  return (
    <section
      id="home"
      className="relative w-full pt-20 sm:pt-24 lg:pt-24 pb-8 sm:pb-12 overflow-hidden flex flex-col justify-center"
      style={{
        minHeight: "min(100vh, 860px)",
        background: "linear-gradient(135deg, #050c1a 0%, #0a1628 50%, #050c1a 100%)",
      }}
    >
      {/* Particle mesh canvas */}
      <ParticleCanvas />

      {/* Subtle radial glow behind hero */}
      <div
        className="absolute top-1/2 right-0 sm:right-[15%] -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] rounded-full pointer-events-none overflow-hidden"
        style={{ background: "radial-gradient(circle, rgba(212,175,55,0.08) 0%, transparent 70%)", zIndex: 1 }}
      />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-12 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-8">

          {/* ── Left Column: Intro & Bio ── */}
          <div className="w-full lg:w-7/12 flex flex-col justify-center reveal-left">
            {/* Text Content */}
            <div className="flex-1 w-full max-w-full">
              {/* Open to hire badge */}
              <div className="hire-badge mb-4 sm:mb-5 inline-flex items-center max-w-full text-[10px] min-[380px]:text-xs reveal-down delay-100 px-3 py-1.5">
                <span className="hire-dot shrink-0 mr-1.5" />
                <span className="truncate min-[360px]:whitespace-normal">AI WEB DEVELOPER · WORDPRESS DEVELOPER</span>
              </div>

              <p
                className="text-sm sm:text-base md:text-lg font-semibold tracking-widest mb-2 uppercase reveal-down delay-150"
                style={{ color: "rgba(212,175,55,0.7)" }}
              >
                Hi There 👋
              </p>

              <h1 className="text-xl min-[360px]:text-2xl sm:text-3xl md:text-4xl lg:text-[34px] xl:text-[44px] 2xl:text-5xl font-black tracking-tight mb-5 sm:mb-6 text-white leading-tight min-h-[40px] sm:min-h-[52px] lg:min-h-[60px] flex flex-wrap items-center reveal-down delay-200">
                <span className="shrink-0">I&apos;M&nbsp;</span>
                <span className="gold-shimmer break-words">{currentText}</span>
                <span className="cursor-blink ml-1 text-[#D4AF37] shrink-0">|</span>
              </h1>

              <p className="text-xs sm:text-sm md:text-base text-white leading-relaxed mb-6 sm:mb-8 max-w-xl font-normal reveal-up delay-250">
                Recently graduated and trained through a hands-on{" "}
                <strong className="font-semibold text-white">AI Web Developer internship</strong> at{" "}
                <strong className="font-bold text-[#D4AF37]">Hywiz Technology</strong>, Burewala. I build
                modern responsive websites,{" "}
                <strong className="font-semibold text-white">AI-powered web applications</strong>, and intelligent
                automation systems.
              </p>

              {/* CTA Buttons - 2 in 1 Row */}
              <div className="flex flex-row items-center gap-2 sm:gap-4 mb-6 sm:mb-8 reveal-up delay-300 w-full sm:w-auto">
                <a
                  href="#portfolio"
                  className="flex-1 sm:flex-initial my-button-2 !py-2.5 sm:!py-3 !px-2.5 sm:!px-6 !text-[11px] min-[360px]:!text-xs sm:!text-sm font-bold gap-1 sm:gap-2 shadow-lg shadow-[#D4AF37]/20 hover:shadow-[#D4AF37]/40 cursor-pointer justify-center text-center h-11 sm:h-auto whitespace-nowrap"
                >
                  <Briefcase className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                  <span>View My Work</span>
                </a>
                <a
                  href="/sehar-iftikhar-cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Sehar_Iftikhar_CV.pdf"
                  className="flex-1 sm:flex-initial my-button-4 !py-2.5 sm:!py-3 !px-2.5 sm:!px-6 !text-[11px] min-[360px]:!text-xs sm:!text-sm font-bold gap-1 sm:gap-2 cursor-pointer hover:border-[#D4AF37] justify-center text-center h-11 sm:h-auto whitespace-nowrap"
                  onClick={() => {
                    if (typeof window !== "undefined") {
                      window.open("/sehar-iftikhar-cv.pdf", "_blank");
                    }
                  }}
                >
                  <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                  <span>Download CV</span>
                </a>
              </div>

              {/* Credentials Section under buttons */}
              <div className="pt-4 sm:pt-6 border-t border-white/10 flex flex-col min-[460px]:grid min-[460px]:grid-cols-3 gap-2 sm:gap-4 max-w-xl reveal-up delay-350">
                <div className="flex items-center justify-between min-[460px]:flex-col min-[460px]:items-start py-1 min-[460px]:py-0 border-b min-[460px]:border-b-0 border-white/5">
                  <span className="text-[9.5px] sm:text-[10px] md:text-xs font-mono uppercase tracking-widest text-[#D4AF37]/80 mb-0 min-[460px]:mb-1 shrink-0">
                    BACKGROUND
                  </span>
                  <span className="text-xs sm:text-sm md:text-base font-bold text-white tracking-tight whitespace-nowrap">
                    IT Graduate
                  </span>
                </div>
                <div className="flex items-center justify-between min-[460px]:flex-col min-[460px]:items-start py-1 min-[460px]:py-0 border-b min-[460px]:border-b-0 min-[460px]:border-l border-white/5 min-[460px]:border-white/10 min-[460px]:pl-3 sm:pl-4">
                  <span className="text-[9.5px] sm:text-[10px] md:text-xs font-mono uppercase tracking-widest text-[#D4AF37]/80 mb-0 min-[460px]:mb-1 shrink-0">
                    INTERNSHIP
                  </span>
                  <span className="text-xs sm:text-sm md:text-base font-bold text-white tracking-tight whitespace-nowrap">
                    Hywiz Technology
                  </span>
                </div>
                <div className="flex items-center justify-between min-[460px]:flex-col min-[460px]:items-start py-1 min-[460px]:py-0 min-[460px]:border-l border-white/10 min-[460px]:pl-3 sm:pl-4">
                  <span className="text-[9.5px] sm:text-[10px] md:text-xs font-mono uppercase tracking-widest text-[#D4AF37]/80 mb-0 min-[460px]:mb-1 shrink-0">
                    PRIMARY FOCUS
                  </span>
                  <span className="text-xs sm:text-sm md:text-base font-bold text-white tracking-tight whitespace-nowrap">
                    Web &amp; AI Integration
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ── Right Column: 3D Tech Constellation Sphere (Suhad Style) ── */}
          <div className="w-full lg:w-5/12 flex justify-center items-center mt-8 sm:mt-10 lg:mt-3 xl:mt-4 reveal-right delay-200">
            <TechConstellationSphere />
          </div>
        </div>

        {/* Scroll cue */}
        <div className="mt-6 sm:mt-8 lg:mt-8 flex justify-center reveal-fade delay-300">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-[#4A6080] hover:text-[#D4AF37] transition-colors group"
          >
            <span className="text-xs font-semibold tracking-widest uppercase">Scroll Down</span>
            <div className="w-5 h-8 rounded-full border-2 border-[#4A6080] group-hover:border-[#D4AF37] flex items-start justify-center p-1 transition-colors">
              <div className="w-1 h-2 rounded-full bg-[#D4AF37] animate-bounce" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
