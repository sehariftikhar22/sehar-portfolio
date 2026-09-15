"use client";

import React, { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isText, setIsText] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);

  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    // Only activate custom cursor on devices that support hover / fine pointers (desktop/laptop)
    if (typeof window === "undefined") return;
    const isTouchDevice =
      window.matchMedia("(pointer: coarse)").matches ||
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0;

    if (isTouchDevice) {
      return;
    }

    setMounted(true);
    document.body.classList.add("custom-cursor-active");

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };

      if (!isVisible) {
        setIsVisible(true);
      }

      // Check what element the mouse is currently hovering
      const target = e.target as HTMLElement | null;
      if (target) {
        const isInteractive = Boolean(
          target.closest(
            'a, button, [role="button"], input[type="submit"], input[type="button"], label, select, summary, .cursor-pointer, [data-cursor-hover]'
          )
        );

        const isTextInput = Boolean(
          target.closest('input[type="text"], input[type="email"], input[type="search"], textarea')
        );

        setIsHovered(isInteractive);
        setIsText(isTextInput);
      }
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.body.addEventListener("mouseleave", onMouseLeave);
    document.body.addEventListener("mouseenter", onMouseEnter);

    // High performance 120fps animation loop using requestAnimationFrame
    const animate = () => {
      // Ring follows mouse position with smooth spring lerp
      const factor = 0.18;
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * factor;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * factor;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0)`;
      }

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }

      rafId.current = requestAnimationFrame(animate);
    };

    rafId.current = requestAnimationFrame(animate);

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.body.removeEventListener("mouseleave", onMouseLeave);
      document.body.removeEventListener("mouseenter", onMouseEnter);
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [isVisible]);

  if (!mounted) return null;

  return (
    <div
      className={`fixed inset-0 pointer-events-none z-[99999] transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      aria-hidden="true"
    >
      {/* Precision Inner Gold Dot */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 -ml-[4px] -mt-[4px] pointer-events-none rounded-full transition-transform duration-75 will-change-transform ${
          isText
            ? "w-[2px] h-4 -ml-[1px] -mt-2 bg-[#F0C842] shadow-[0_0_8px_#D4AF37]"
            : isHovered
            ? "w-2.5 h-2.5 -ml-[5px] -mt-[5px] bg-[#F0C842] shadow-[0_0_12px_#F0C842] scale-125"
            : "w-2 h-2 bg-[#D4AF37] shadow-[0_0_8px_rgba(212,175,55,0.8)]"
        }`}
      />

      {/* Luxury Trailing Gold Ring */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 rounded-full pointer-events-none transition-all duration-200 ease-out will-change-transform flex items-center justify-center ${
          isText
            ? "w-7 h-7 -ml-[14px] -mt-[14px] border border-[#D4AF37]/40 bg-[#D4AF37]/5 backdrop-blur-[1px] opacity-40 scale-75"
            : isClicking
            ? "w-8 h-8 -ml-4 -mt-4 border-2 border-[#F0C842] bg-[#D4AF37]/30 shadow-[0_0_20px_rgba(240,200,66,0.6)] scale-90"
            : isHovered
            ? "w-14 h-14 -ml-7 -mt-7 border border-[#F0C842] bg-[#D4AF37]/15 shadow-[0_0_25px_rgba(212,175,55,0.4)] backdrop-blur-[2px] scale-110"
            : "w-9 h-9 -ml-[18px] -mt-[18px] border border-[#D4AF37]/60 shadow-[0_0_14px_rgba(212,175,55,0.25)] bg-transparent"
        }`}
      >
        {/* Subtle dynamic pulse ping when hovering interactive links */}
        {isHovered && !isClicking && (
          <span className="w-full h-full rounded-full border border-[#D4AF37]/40 animate-ping opacity-30 pointer-events-none" />
        )}
      </div>
    </div>
  );
}

export default CustomCursor;
