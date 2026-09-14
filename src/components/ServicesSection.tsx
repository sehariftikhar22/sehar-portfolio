"use client";

import React from "react";
import { Globe, Code2, Layout, Bot, Palette, Zap, ArrowRight } from "lucide-react";

export function ServicesSection() {

  const services = [
    {
      title: "Website Development",
      icon: Globe,
      description:
        "Bespoke web solutions designed to maximize your online visibility. From dynamic Next.js apps to custom SPAs — I create digital experiences that convert visitors into clients.",
    },
    {
      title: "Application Development",
      icon: Code2,
      description:
        "Full stack application development from architecture to deployment. Scalable, secure, and user-centric solutions built with React, Next.js, Node.js, and TypeScript.",
    },
    {
      title: "WordPress & Elementor",
      icon: Layout,
      description:
        "Custom WordPress & Elementor Pro websites with lightning-fast page loads, bespoke PHP hooks, responsive tuning, and intuitive CMS control for non-technical clients.",
    },
    {
      title: "AI Automation & LLMs",
      icon: Bot,
      description:
        "Intelligent OpenAI agent pipelines, automated business workflows, structured JSON responses, and webhook integrations that eliminate manual latency and supercharge productivity.",
    },
    {
      title: "Canva To Web & WordPress",
      icon: Palette,
      description:
        "Pixel-perfect conversion of your Canva templates, brand kits, and UI graphics into fully responsive, semantic, and high-performance websites and WordPress pages.",
    },
    {
      title: "Antigravity & AI Optimization",
      icon: Zap,
      description:
        "Smart AI model tuning and Antigravity workflow management. Optimize token usage, slash API credit costs, and build high-efficiency autonomous agent pipelines with intelligent orchestration.",
    },
  ];

  return (
    <section
      id="services"
      className="w-full py-10 sm:py-14 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0a1628 0%, #050c1a 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-12">
        {/* Section heading */}
        <div className="text-center mb-4">
          <div className="flex items-center justify-center gap-3 mb-3 reveal-down">
            <div className="h-px w-10" style={{ background: "linear-gradient(to right, transparent, #D4AF37)" }} />
            <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">What I Offer</span>
            <div className="h-px w-10" style={{ background: "linear-gradient(to left, transparent, #D4AF37)" }} />
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight reveal-down delay-100">
            Services{" "}
            <span className="gold-shimmer">I&apos;m Offering</span>
          </h2>
          <p className="text-sm sm:text-base text-white font-medium mt-2 reveal-down delay-150">
            Premium Digital Services for Your Success
          </p>
        </div>

        <div className="custom-line mb-14 reveal-scale delay-200" />

        {/* 6 cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center stagger">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="services-card-wrapper reveal-scale group">
                {/* Floating glow orb */}
                <div className="services-circle" />

                {/* Card */}
                <div className="services-card-inner">
                  {/* Dashed spinning ring icon — Suhad style */}
                  <div className="dashed-icon-ring mb-5">
                    <div className="dashed-icon-ring-inner">
                      <Icon className="w-6 h-6 text-[#050c1a]" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold mb-3 tracking-tight text-[#D4AF37]">
                    {service.title}
                  </h3>

                  <p className="text-sm text-white leading-relaxed text-center mb-6 flex-1">
                    {service.description}
                  </p>

                  <a href="#contact" className="mt-auto">
                    <button className="my-button-5">
                      Inquire Now
                      <ArrowRight className="w-3.5 h-3.5 ml-1.5 inline group-hover:translate-x-1 transition-transform" />
                    </button>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
