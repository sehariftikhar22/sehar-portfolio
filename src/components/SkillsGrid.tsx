"use client";

import React, { useState, useEffect, useRef } from "react";

interface SkillItem {
  id: string;
  name: string;
  percentage: number;
  description: string;
  icon: React.ReactNode;
}

/* Scroll-triggered progress bar */
function ProgressBar({ percentage }: { percentage: number }) {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          setTimeout(() => setWidth(percentage), 200);
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [percentage]);

  return (
    <div ref={ref} className="w-full pt-2">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-[10px] font-bold text-[#4A6080] uppercase tracking-wider">Proficiency</span>
        <span className="text-xs font-black text-[#D4AF37]">{percentage}%</span>
      </div>
      <div className="skill-progress-bar-bg">
        <div
          className="skill-progress-bar-fill"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}

function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale").forEach((el) =>
      observer.observe(el)
    );
    return () => observer.disconnect();
  }, []);
}

export function SkillsGrid() {
  useScrollReveal();

  const skills: SkillItem[] = [
    {
      id: "html-css",
      name: "HTML5 & Modern CSS",
      percentage: 95,
      description: "Expert in semantic, accessible, and responsive web designs ensuring cross-browser precision and pixel-perfect layouts.",
      icon: (
        <svg className="w-11 h-11" viewBox="0 0 24 24" fill="none">
          <path d="M4 3L5.5 19.5L12 21.5L18.5 19.5L20 3H4Z" fill="#E44D26" />
          <path d="M12 4.5V19.8L17.2 18.2L18.4 4.5H12Z" fill="#F16529" />
          <path d="M12 8.5H8.2L8.5 11.5H12V8.5ZM12 14.5L10.2 14L10 12.8H8.5L8.9 15.5L12 16.4V14.5Z" fill="#EBEBEB" />
          <path d="M12 8.5V11.5H15.5L15.2 14.5L12 15.4V17.3L15.9 16.2L16.4 11.5H12V8.5Z" fill="#FFFFFF" />
        </svg>
      ),
    },
    {
      id: "js-ts",
      name: "JavaScript & TypeScript",
      percentage: 90,
      description: "Bringing web interfaces to life with modern ES6+ JavaScript and strictly typed TypeScript for reliable, scalable code.",
      icon: (
        <svg className="w-11 h-11" viewBox="0 0 48 48">
          <rect width="48" height="48" rx="8" fill="#F7DF1E" />
          <path d="M29.5 33C30.2 34.1 31 35.2 32.5 35.2C33.8 35.2 34.5 34.5 34.5 33.6C34.5 32.5 33.8 32.1 32.3 31.5L31.5 31.1C29.2 30.1 27.6 28.9 27.6 26.3C27.6 23.9 29.4 22 32.3 22C34.4 22 35.8 22.7 36.9 24.6L34.4 26.2C33.8 25.2 33.2 24.8 32.3 24.8C31.4 24.8 30.8 25.4 30.8 26.2C30.8 27.2 31.4 27.6 32.8 28.2L33.6 28.5C36.3 29.7 37.9 30.9 37.9 33.6C37.9 36.5 35.6 38 32.5 38C29.5 38 27.8 36.5 26.8 34.6L29.5 33ZM18 33C18.5 33.9 19.3 34.6 20.4 34.6C21.5 34.6 22.1 34.2 22.1 32.6V22H25.4V33.1C25.4 36.5 23.4 38 20.6 38C18 38 16.2 36.3 15.4 34.6L18 33Z" fill="#000000" />
        </svg>
      ),
    },
    {
      id: "wordpress",
      name: "WordPress & Elementor",
      percentage: 90,
      description: "Custom WordPress CMS architectures, Elementor Pro templates, PHP hooks, and speed-optimized client deliveries.",
      icon: (
        <svg className="w-11 h-11" viewBox="0 0 48 48">
          <circle cx="24" cy="24" r="20" fill="#21759B" />
          <path d="M8 24C8 30.3 11.7 35.8 17 38.4L9.4 17.5C8.5 19.5 8 21.7 8 24ZM34.8 23.2C34.8 21.2 33.7 19.8 33.1 18.7C32.3 17.4 31.5 16.3 31.5 15C31.5 13.5 33 12.1 34.6 12.1C32 9.6 28.2 8 24 8C18.6 8 13.8 10.7 10.9 14.7L16.8 32.5L20.3 22L17.7 14.8H21.9L24.3 22.4L26.7 14.8H30.9L36.8 32.4L38 28C38 25.5 34.8 24.7 34.8 23.2ZM24.3 25.4L19.5 39.4C21 39.8 22.5 40 24 40C25.9 40 27.6 39.7 29.3 39.1L24.3 25.4ZM38 16.3L33.1 30.4C36.8 27.4 39.1 22.7 39.1 17.5C39.1 16.1 38.6 14.8 38 16.3Z" fill="#FFFFFF" />
        </svg>
      ),
    },
    {
      id: "ai",
      name: "AI Automation & OpenAI",
      percentage: 88,
      description: "Autonomous agent workflows, OpenAI API integration, structured JSON schemas, and intelligent prompt chaining.",
      icon: (
        <svg className="w-11 h-11" viewBox="0 0 48 48">
          <circle cx="24" cy="24" r="20" fill="#10A37F" />
          <path d="M34 22C33.7 18.6 31 16 27.6 16C27.1 16 26.6 16.1 26.1 16.3C25.4 14.4 23.5 13 21.3 13C18.2 13 15.6 15.3 15.1 18.3C13.2 19.3 12 21.4 12 23.8C12 26.4 13.5 28.7 15.8 29.6C16 32.8 18.7 35.3 22 35.3C22.6 35.3 23.2 35.2 23.8 35C24.6 36.8 26.5 38 28.7 38C31.8 38 34.4 35.7 34.9 32.7C36.8 31.7 38 29.6 38 27.2C38 24.6 36.4 22.4 34 22ZM24 30L20 26L21.4 24.6L24 27.2L30.6 20.6L32 22L24 30Z" fill="#FFFFFF" />
        </svg>
      ),
    },
    {
      id: "php",
      name: "PHP & Backend",
      percentage: 85,
      description: "Server-side scripting, custom WordPress hooks, theme functions.php tweaks, secure API integration, and dynamic data processing.",
      icon: (
        <svg className="w-11 h-11" viewBox="0 0 48 48">
          <rect width="48" height="48" rx="10" fill="#1E293B" />
          <path
            d="M24 10C13.5 10 5 16.3 5 24C5 31.7 13.5 38 24 38C34.5 38 43 31.7 43 24C43 16.3 34.5 10 24 10Z"
            fill="#777BB4"
          />
          <text
            x="24"
            y="29"
            textAnchor="middle"
            fill="#FFFFFF"
            fontSize="15"
            fontWeight="900"
            fontFamily="monospace"
            letterSpacing="0.5"
          >
            php
          </text>
        </svg>
      ),
    },
    {
      id: "python",
      name: "Python & Flask",
      percentage: 85,
      description: "Lightweight backend microservices with Python and Flask, integrating external APIs, data parsing, and AI services.",
      icon: (
        <svg className="w-11 h-11" viewBox="0 0 48 48">
          <rect width="48" height="48" rx="8" fill="#1E293B" />
          <path d="M23.6 10C17.4 10 17.8 12.7 17.8 12.7L17.8 15.5H23.9V16.4H15.5C12.5 16.4 10 18.5 10 22.3C10 26.1 12.1 26.6 12.1 26.6H14.5V23.7C14.5 20.3 17.4 20.3 17.4 20.3H23.8C26.7 20.3 26.7 17.5 26.7 17.5V13.8C26.7 11.2 24.2 10 23.6 10ZM21.7 11.7C22.4 11.7 23 12.3 23 13C23 13.7 22.4 14.3 21.7 14.3C21 14.3 20.4 13.7 20.4 13C20.4 12.3 21 11.7 21.7 11.7Z" fill="#38BDF8" />
          <path d="M24.4 38C30.6 38 30.2 35.3 30.2 35.3L30.2 32.5H24.1V31.6H32.5C35.5 31.6 38 29.5 38 25.7C38 21.9 35.9 21.4 35.9 21.4H33.5V24.3C33.5 27.7 30.6 27.7 30.6 27.7H24.2C21.3 27.7 21.3 30.5 21.3 30.5V34.2C21.3 36.8 23.8 38 24.4 38ZM26.3 36.3C25.6 36.3 25 35.7 25 35C25 34.3 25.6 33.7 26.3 33.7C27 33.7 27.6 34.3 27.6 35C27.6 35.7 27 36.3 26.3 36.3Z" fill="#FACC15" />
        </svg>
      ),
    },
    {
      id: "sql",
      name: "SQL & Relational DBs",
      percentage: 85,
      description: "Optimizing relational schemas, queries, normalization, and referential integrity with MySQL and PostgreSQL engines.",
      icon: (
        <svg className="w-11 h-11" viewBox="0 0 48 48">
          <circle cx="24" cy="24" r="20" fill="#00758F" />
          <path d="M24 14C17.4 14 12 16.7 12 20V28C12 31.3 17.4 34 24 34C30.6 34 36 31.3 36 28V20C36 16.7 30.6 14 24 14ZM24 17C29 17 33 18.8 33 20C33 21.2 29 23 24 23C19 23 15 21.2 15 20C15 18.8 19 17 24 17ZM24 31C19.5 31 15.6 29.5 15 27.6V24.5C17.1 26 20.4 27 24 27C27.6 27 30.9 26 33 24.5V27.6C32.4 29.5 28.5 31 24 31Z" fill="#F29111" />
        </svg>
      ),
    },
    {
      id: "git",
      name: "Git & Version Control",
      percentage: 92,
      description: "Disciplined Git workflows, branch strategies, collaborative PR reviews, and continuous deployment pipelines.",
      icon: (
        <svg className="w-11 h-11" viewBox="0 0 48 48">
          <rect width="48" height="48" rx="8" fill="#F05032" />
          <path d="M24 11L11 24L24 37L37 24L24 11ZM24 17C25.7 17 27 18.3 27 20C27 21.3 26.2 22.4 25 22.8V25.2C26.2 25.6 27 26.7 27 28C27 29.7 25.7 31 24 31C22.3 31 21 29.7 21 28C21 26.7 21.8 25.6 23 25.2V22.8C21.8 22.4 21 21.3 21 20C21 18.3 22.3 17 24 17Z" fill="#FFFFFF" />
        </svg>
      ),
    },
    {
      id: "tools",
      name: "VS Code & Dev Tools",
      percentage: 95,
      description: "Maximizing velocity using VS Code, modern AI dev tools, browser DevTools, package managers, and automated workflows.",
      icon: (
        <svg className="w-11 h-11" viewBox="0 0 48 48">
          <rect width="48" height="48" rx="8" fill="#007ACC" />
          <path d="M37 14.5L29 21.5L20 14L11 19V29L20 34L29 26.5L37 33.5V14.5ZM29 24L22 19.5L29 15V24ZM29 29V33L22 28.5L29 29ZM14 26.5V21.5L18 24L14 26.5Z" fill="#FFFFFF" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="skills"
      className="w-full py-10 sm:py-14 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #050c1a 0%, #0a1628 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-12">
        {/* Heading */}
        <div className="text-center mb-4">
          <div className="flex items-center justify-center gap-3 mb-3 reveal-down">
            <div className="h-px w-10" style={{ background: "linear-gradient(to right, transparent, #D4AF37)" }} />
            <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">My Expertise</span>
            <div className="h-px w-10" style={{ background: "linear-gradient(to left, transparent, #D4AF37)" }} />
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight reveal-down delay-100">
            Skills{" "}
            <span className="gold-shimmer">Showcase</span>
          </h2>
          <p className="text-sm sm:text-base text-white font-medium mt-2 reveal-down delay-150">
            Transforming Ideas with Dynamic Expertise
          </p>
        </div>

        <div className="custom-line mb-14" />

        {/* 12 skill cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-items-center stagger">
          {skills.map((skill) => (
            <div key={skill.id} className="skill-card-2 reveal-scale group w-full">
              <div className="skill-card-2-inner">
                {/* Icon */}
                <div className="flex justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-center mb-2 tracking-tight text-[#D4AF37]">
                  {skill.name}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-white text-center leading-relaxed mb-4 flex-1">
                  {skill.description}
                </p>

                {/* Gold progress bar — scroll triggered */}
                <ProgressBar percentage={skill.percentage} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
