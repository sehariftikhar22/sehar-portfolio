"use client";

import React, { useState, useEffect } from "react";
import {
  LinkedinIcon,
  GithubIcon,
  WhatsAppIcon,
} from "@/components/Icons";
import {
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  ArrowUp,
  Sparkles,
} from "lucide-react";

export function Footer() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTopBtn(window.scrollY > 350);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Skills", href: "#skills" },
    { name: "Journey", href: "#journey" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  const specializations = [
    "Full Stack Web Apps",
    "Next.js & TypeScript",
    "WordPress & Elementor Pro",
    "AI Agents & Automation",
  ];

  const socialLinks = [
    {
      icon: LinkedinIcon,
      href: "https://www.linkedin.com/in/sehar-iftikhar-1b07b0380/",
      label: "LinkedIn",
    },
    {
      icon: GithubIcon,
      href: "https://github.com/sehariftikhar22",
      label: "GitHub",
    },
    {
      icon: WhatsAppIcon,
      href: "https://wa.me/923120186784",
      label: "WhatsApp",
    },
  ];

  return (
    <footer
      className="w-full relative pt-16 pb-10 text-white overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #07101f 0%, #030814 100%)",
        borderTop: "1px solid rgba(212, 175, 55, 0.22)",
        boxShadow: "0 -10px 40px rgba(0, 0, 0, 0.6)",
      }}
    >
      {/* Top subtle gold ambient glow line */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(212, 175, 55, 0.7) 50%, transparent 100%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-12 relative z-10">
        {/* 4 Equal-Width Balanced Columns Grid with Smooth Staggered Reveal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 pb-12 border-b border-white/10 items-start reveal-up stagger">
          
          {/* Column 1: Brand & About (Equal 25%) */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-[#050c1a] font-black text-lg shadow-lg"
                style={{
                  background: "linear-gradient(135deg, #D4AF37, #F0C842)",
                  boxShadow: "0 0 16px rgba(212,175,55,0.4)",
                }}
              >
                S
              </div>
              <div>
                <h3 className="font-extrabold text-lg tracking-tight text-white leading-tight">
                  SEHAR IFTIKHAR
                </h3>
                <span className="text-[10px] font-bold tracking-widest text-[#D4AF37] uppercase block">
                  AI &amp; Full Stack Developer
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-white leading-relaxed font-normal">
              Building scalable web applications, responsive WordPress architectures, and
              intelligent AI automation pipelines.
            </p>

            {/* Social Icons */}
            <div className="pt-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#94A3B8] block mb-2">
                Follow Me
              </span>
              <div className="flex items-center gap-2">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-white hover:text-[#050c1a] transition-all duration-300 hover:scale-110"
                    style={{
                      background: "rgba(13, 27, 49, 0.8)",
                      border: "1px solid rgba(212, 175, 55, 0.25)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background =
                        "linear-gradient(135deg, #D4AF37, #F0C842)";
                      e.currentTarget.style.boxShadow = "0 0 14px rgba(212, 175, 55, 0.6)";
                      e.currentTarget.style.borderColor = "#F0C842";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "rgba(13, 27, 49, 0.8)";
                      e.currentTarget.style.boxShadow = "none";
                      e.currentTarget.style.borderColor = "rgba(212, 175, 55, 0.25)";
                    }}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links (Equal 25%) */}
          <div className="space-y-3.5">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
                Quick Navigation
              </h4>
            </div>

            <ul className="space-y-2 text-xs sm:text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="inline-flex items-center gap-2 py-0.5 text-white hover:text-[#D4AF37] hover:translate-x-1.5 transition-all font-medium group"
                  >
                    <span className="text-xs text-[#D4AF37] opacity-60 group-hover:opacity-100 transition-opacity">
                      ›
                    </span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Specializations (Equal 25%) */}
          <div className="space-y-3.5">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
                Specializations
              </h4>
            </div>

            <ul className="space-y-2.5 text-xs sm:text-sm text-white font-medium">
              {specializations.map((spec) => (
                <li key={spec} className="flex items-center gap-2 text-[#CBD5E1]">
                  <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                  <span className="hover:text-white transition-colors">{spec}</span>
                </li>
              ))}
            </ul>

            <div className="pt-3">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-medium text-[11px]">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Available for New Roles</span>
              </div>
            </div>
          </div>

          {/* Column 4: Contact Details (Equal 25%) */}
          <div className="space-y-3.5">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
                Get In Touch
              </h4>
            </div>

            <ul className="space-y-3 text-xs sm:text-sm">
              {/* WhatsApp */}
              <li>
                <a
                  href="https://wa.me/923120186784"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-2.5 group text-white hover:text-[#D4AF37] transition-colors"
                >
                  <div className="w-7 h-7 rounded-lg bg-[#22C55E]/15 border border-[#22C55E]/30 flex items-center justify-center text-[#22C55E] shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-wider text-[#94A3B8] block">
                      WhatsApp
                    </span>
                    <span className="font-semibold text-white group-hover:text-[#D4AF37] transition-colors">
                      +92 312 0186784
                    </span>
                  </div>
                </a>
              </li>

              {/* Direct Call */}
              <li>
                <a
                  href="tel:+923120186784"
                  className="flex items-start gap-2.5 group text-white hover:text-[#D4AF37] transition-colors"
                >
                  <div className="w-7 h-7 rounded-lg bg-[#38BDF8]/15 border border-[#38BDF8]/30 flex items-center justify-center text-[#38BDF8] shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                    <Phone className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-wider text-[#94A3B8] block">
                      Direct Call
                    </span>
                    <span className="font-semibold text-white group-hover:text-[#D4AF37] transition-colors">
                      +92 312 0186784
                    </span>
                  </div>
                </a>
              </li>

              {/* Email */}
              <li>
                <a
                  href="mailto:sehariftikhar187@gmail.com"
                  className="flex items-start gap-2.5 group text-white hover:text-[#D4AF37] transition-colors"
                >
                  <div className="w-7 h-7 rounded-lg bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                    <Mail className="w-3.5 h-3.5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] uppercase font-mono tracking-wider text-[#94A3B8] block">
                      Email
                    </span>
                    <span className="font-semibold text-white group-hover:text-[#D4AF37] transition-colors break-all">
                      sehariftikhar187@gmail.com
                    </span>
                  </div>
                </a>
              </li>

              {/* Location */}
              <li>
                <div className="flex items-start gap-2.5 text-white">
                  <div className="w-7 h-7 rounded-lg bg-[#F59E0B]/15 border border-[#F59E0B]/30 flex items-center justify-center text-[#F59E0B] shrink-0 mt-0.5">
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-wider text-[#94A3B8] block">
                      Location
                    </span>
                    <span className="font-semibold text-white">
                      Burewala, Punjab, Pakistan
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-2.5 sm:gap-3 text-xs text-[#CBD5E1] reveal-up delay-200">
          <div className="order-2 sm:order-1 text-center sm:text-left text-[11px] sm:text-xs">
            &copy; {new Date().getFullYear()}{" "}
            <span className="font-bold text-[#D4AF37]">Sehar Iftikhar</span>. All rights reserved.
          </div>
          <div className="order-1 sm:order-2 text-center sm:text-right text-[10px] sm:text-xs max-w-full">
            Built with <span className="text-[#D4AF37]">✦</span> HTML, CSS, JS, OpenAI, Antigravity &amp; WordPress
          </div>
        </div>
      </div>

      {/* Scroll to Top Floating Button */}
      {showTopBtn && (
        <button
          id="scrollToTopBtn"
          onClick={scrollToTop}
          aria-label="Scroll to Top"
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 p-2.5 sm:p-3 rounded-full text-[#050c1a] font-bold shadow-2xl transition-all duration-300 hover:scale-110 cursor-pointer"
          style={{
            background: "linear-gradient(135deg, #D4AF37, #F0C842)",
            boxShadow: "0 8px 25px rgba(212, 175, 55, 0.5)",
          }}
        >
          <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      )}
    </footer>
  );
}

export default Footer;
