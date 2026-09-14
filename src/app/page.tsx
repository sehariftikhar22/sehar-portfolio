"use client";

import React from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { CallToAction } from "@/components/CallToAction";
import { SkillsGrid } from "@/components/SkillsGrid";
import { JourneyTimeline } from "@/components/JourneyTimeline";
import { CreativePortfolio } from "@/components/CreativePortfolio";
import { ProjectShowcase } from "@/components/ProjectShowcase";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#050c1a] text-[#EDF2F7] relative w-full max-w-full overflow-x-clip">
      {/* 1. Dual Nav Header */}
      <Header />

      {/* 2. Main Page Content */}
      <main id="main" className="flex-1 w-full max-w-full">
        {/* Hero Section with Ocean Waves & Typewriter */}
        <Hero />

        {/* About Section */}
        <AboutSection />

        {/* Services Section with Floating Glow Circle Cards */}
        <ServicesSection />

        {/* Call To Action 1: Digital Excellence */}
        <CallToAction type={1} />

        {/* Skills Showcase with Rainbow Border Cards & Progress Bars */}
        <SkillsGrid />

        {/* My Journey Progression Timeline */}
        <JourneyTimeline />

        {/* Creative Portfolio — Interactive Stack Cards */}
        <CreativePortfolio />

        {/* All Projects — Laptop Mockup Infinite Auto-Scroll */}
        <ProjectShowcase />

        {/* Call To Action 2: Skyrocket Presence & Direct Contact */}
        <CallToAction type={2} />

        {/* Contact Section & Validated Message Form */}
        <ContactSection />
      </main>

      {/* 3. Luxury Dark 3-Column Footer with Scroll to Top */}
      <Footer />
    </div>
  );
}
