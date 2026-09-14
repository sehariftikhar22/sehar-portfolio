"use client";

import React, { useState, useEffect } from "react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Scrollspy
      const sections = ["home", "about", "services", "skills", "journey", "portfolio", "contact"];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160 && rect.bottom >= 160) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home",      href: "#home",      id: "home" },
    { name: "About",     href: "#about",     id: "about" },
    { name: "Services",  href: "#services",  id: "services" },
    { name: "Skills",    href: "#skills",    id: "skills" },
    { name: "Journey",   href: "#journey",   id: "journey" },
    { name: "Portfolio", href: "#portfolio", id: "portfolio" },
    { name: "Contact",   href: "#contact",   id: "contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">

      {/* ── Main navigation bar ── */}
      <nav
        className="w-full transition-all duration-300"
        style={{
          background: isScrolled
            ? "rgba(5, 12, 26, 0.97)"
            : "rgba(5, 12, 26, 0.85)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(212, 175, 55, 0.15)",
          boxShadow: isScrolled ? "0 4px 30px rgba(0,0,0,0.5)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-3.5 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5 group">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center text-[#050c1a] font-black text-lg shadow-md group-hover:scale-105 transition-transform"
              style={{
                background: "linear-gradient(135deg, #D4AF37, #F0C842)",
                boxShadow: "0 0 16px rgba(212,175,55,0.4)",
              }}
            >
              S
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-extrabold text-base tracking-tight text-white group-hover:text-[#D4AF37] transition-colors">
                SEHAR IFTIKHAR
              </span>
              <span className="text-[9px] font-bold tracking-widest text-[#D4AF37] uppercase mt-0.5">
                Official Portfolio
              </span>
            </div>
          </a>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`relative py-1 text-sm lg:text-[15px] font-semibold tracking-wide transition-all duration-200 ${
                    isActive ? "text-[#D4AF37]" : "text-white hover:text-[#D4AF37]"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-0 w-full h-[2px] rounded-full"
                      style={{ background: "linear-gradient(to right, #D4AF37, #F0C842)" }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Right CTA */}
          <div className="hidden lg:block">
            <a href="mailto:sehariftikhar187@gmail.com">
              <button className="my-button-1 text-sm">
                Let&apos;s Connect ✦
              </button>
            </a>
          </div>

          {/* Mobile / Tablet Hamburger */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`toggle2 ${mobileMenuOpen ? "active" : ""}`}
              aria-label="Toggle Navigation Menu"
            >
              <div className="bars" />
              <div className="bars" />
              <div className="bars" />
            </button>
          </div>
        </div>

        {/* Mobile / Tablet Dropdown */}
        {mobileMenuOpen && (
          <div
            className="lg:hidden px-6 py-5 flex flex-col space-y-4"
            style={{
              background: "rgba(5, 12, 26, 0.98)",
              borderTop: "1px solid rgba(212, 175, 55, 0.15)",
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-base font-semibold py-1 transition-colors ${
                  activeSection === link.id ? "text-[#D4AF37]" : "text-white"
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="mailto:sehariftikhar187@gmail.com"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full block"
              >
                <button className="my-button-1 w-full">Let&apos;s Connect ✦</button>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
