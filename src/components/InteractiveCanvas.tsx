"use client";

import React, { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  label?: string;
  isAI?: boolean;
  pulsePhase: number;
}

export const InteractiveCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 700);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 480);

    const mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      radius: 160,
    };

    const tokens = [
      { text: "OpenAI GPT-4o", isAI: true },
      { text: "Next.js 16", isAI: false },
      { text: "Python / Flask", isAI: false },
      { text: "Agent Workflow", isAI: true },
      { text: "WordPress / Elementor", isAI: false },
      { text: "Prompt Chaining", isAI: true },
      { text: "DOM & CSS3", isAI: false },
      { text: "Autonomous Pipeline", isAI: true },
      { text: "REST Webhooks", isAI: false },
      { text: "Structured JSON", isAI: true },
    ];

    const nodeCount = Math.min(Math.floor(width / 22), 42);
    const nodes: Node[] = [];

    for (let i = 0; i < nodeCount; i++) {
      const token = tokens[i % tokens.length];
      const isAI = token.isAI;
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.55,
        vy: (Math.random() - 0.5) * 0.55,
        radius: isAI ? 4 : 3,
        baseRadius: isAI ? 4 : 3,
        label: i < tokens.length ? token.text : undefined,
        isAI: isAI,
        pulsePhase: Math.random() * Math.PI * 2,
      });
    }

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.targetX = width / 2;
      mouse.targetY = height / 2;
    };

    window.addEventListener("resize", handleResize);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    let time = 0;

    const render = () => {
      time += 0.02;
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      ctx.clearRect(0, 0, width, height);

      // Subtle atmospheric radial glow at mouse position
      const gradient = ctx.createRadialGradient(
        mouse.x,
        mouse.y,
        0,
        mouse.x,
        mouse.y,
        mouse.radius * 1.5
      );
      gradient.addColorStop(0, "rgba(225, 59, 34, 0.08)");
      gradient.addColorStop(0.5, "rgba(59, 130, 246, 0.04)");
      gradient.addColorStop(1, "transparent");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Draw vector lines between nodes
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 125) {
            const alpha = (1 - dist / 125) * 0.35;
            const isAIConnected = nodes[i].isAI || nodes[j].isAI;

            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = isAIConnected
              ? `rgba(225, 59, 34, ${alpha})`
              : `rgba(255, 255, 255, ${alpha * 0.6})`;
            ctx.lineWidth = isAIConnected ? 0.85 : 0.5;
            ctx.stroke();
          }
        }
      }

      // Draw and update each node
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 10 || node.x > width - 10) node.vx *= -1;
        if (node.y < 10 || node.y > height - 10) node.vy *= -1;

        // Interaction with mouse
        const dx = mouse.x - node.x;
        const dy = mouse.y - node.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius) {
          const force = (1 - dist / mouse.radius) * 1.6;
          node.x -= (dx / dist) * force;
          node.y -= (dy / dist) * force;
        }

        const pulse = Math.sin(time + node.pulsePhase) * 0.5 + 0.5;
        const currentRadius = node.baseRadius + pulse * 1.2;

        // Glow ring
        if (node.isAI || dist < mouse.radius) {
          ctx.beginPath();
          ctx.arc(node.x, node.y, currentRadius * 2.8, 0, Math.PI * 2);
          ctx.fillStyle = node.isAI
            ? `rgba(225, 59, 34, ${0.1 + pulse * 0.15})`
            : "rgba(255, 255, 255, 0.08)";
          ctx.fill();
        }

        // Core dot
        ctx.beginPath();
        ctx.arc(node.x, node.y, currentRadius, 0, Math.PI * 2);
        ctx.fillStyle = node.isAI
          ? "#FF5722"
          : dist < mouse.radius
          ? "#FFFFFF"
          : "rgba(255, 255, 255, 0.6)";
        ctx.fill();

        // Technical Label
        if (node.label) {
          ctx.font = `${node.isAI ? "bold " : ""}10px monospace`;
          ctx.fillStyle = node.isAI
            ? dist < mouse.radius
              ? "#FF6B4A"
              : "rgba(255, 87, 34, 0.85)"
            : dist < mouse.radius
            ? "#FFFFFF"
            : "rgba(161, 161, 170, 0.65)";
          ctx.fillText(node.label, node.x + 8, node.y + 3);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="relative w-full h-full min-h-[380px] lg:min-h-[460px] rounded-2xl border border-white/10 bg-[#0E0E12]/80 backdrop-blur-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
      {/* Sleek Terminal Header */}
      <div className="absolute top-0 left-0 right-0 px-4 py-3 border-b border-white/5 bg-white/[0.02] flex items-center justify-between text-[11px] font-mono z-10">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/80"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/80"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]/80"></span>
          </div>
          <span className="text-[#A1A1AA] ml-2">sehar-neural-console.ts</span>
        </div>
        <div className="flex items-center gap-2 text-[#71717A]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse"></span>
          <span>OPENAI ENGINE: LIVE</span>
        </div>
      </div>

      <canvas ref={canvasRef} className="w-full h-full cursor-crosshair block pt-10" />

      {/* Floating Bottom Telemetry */}
      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[10px] font-mono text-[#71717A] pointer-events-none">
        <span>KINETIC INTERACTION: ACTIVE</span>
        <span>LATENCY: 12ms · 60FPS</span>
      </div>
    </div>
  );
};
