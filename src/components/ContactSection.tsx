"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageCircle } from "lucide-react";
import { LinkedinIcon, GithubIcon } from "@/components/Icons";
import confetti from "canvas-confetti";

export function ContactSection() {

  const [formData, setFormData] = useState({
    name: "", email: "", subject: "", message: "", agreed: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setErrorMsg("Please fill in all required fields.");
      return;
    }
    if (!formData.agreed) {
      setErrorMsg("Please agree to the terms and conditions.");
      return;
    }

    setErrorMsg("");
    setSending(true);

    try {
      const whatsappText = `Hello Sehar,\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Subject:* ${formData.subject}\n\n*Message:*\n${formData.message}`;
      const whatsappUrl = `https://wa.me/923120186784?text=${encodeURIComponent(whatsappText)}`;

      // Automatically open WhatsApp chat in new tab with filled message
      if (typeof window !== "undefined") {
        window.open(whatsappUrl, "_blank");
      }

      setSubmitted(true);
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#D4AF37", "#F0C842", "#ffffff", "#A8860A"],
      });
    } catch {
      setSubmitted(true);
    } finally {
      setSending(false);
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "sehariftikhar187@gmail.com",
      href: "mailto:sehariftikhar187@gmail.com",
      color: "#D4AF37",
    },
    {
      icon: Phone,
      label: "WhatsApp & Call",
      value: "+92 312 0186784",
      href: "https://wa.me/923120186784",
      color: "#22C55E",
    },
    {
      icon: LinkedinIcon,
      label: "LinkedIn",
      value: "Sehar Iftikhar",
      href: "https://www.linkedin.com/in/sehar-iftikhar-1b07b0380/",
      color: "#0077B5",
    },
    {
      icon: GithubIcon,
      label: "GitHub",
      value: "sehariftikhar22",
      href: "https://github.com/sehariftikhar22",
      color: "#94A3B8",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Burewala, Punjab, Pakistan",
      href: "https://maps.google.com/?q=Burewala,+Punjab,+Pakistan",
      color: "#F59E0B",
    },
  ];

  return (
    <section
      id="contact"
      className="w-full py-10 sm:py-14 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #050c1a 0%, #0a1628 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-12">
        {/* Heading */}
        <div className="text-center mb-4">
          <div className="flex items-center justify-center gap-3 mb-3 reveal-down">
            <div className="h-px w-10" style={{ background: "linear-gradient(to right, transparent, #D4AF37)" }} />
            <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">Get In Touch</span>
            <div className="h-px w-10" style={{ background: "linear-gradient(to left, transparent, #D4AF37)" }} />
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight reveal-down delay-100">
            Contact{" "}
            <span className="gold-shimmer">With Me</span>
          </h2>
          <p className="text-sm sm:text-base text-white mt-2 reveal-down delay-150">
            Ready to build something great together? Let&apos;s talk!
          </p>
        </div>

        <div className="custom-line mb-8 sm:mb-10 reveal-scale delay-200" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Contact methods */}
          <div className="lg:col-span-5 reveal-left">
            <h3 className="text-xl font-bold text-white mb-6">
              Reach Out Directly
            </h3>

            <div className="space-y-3">
              {contactMethods.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-4 rounded-xl group transition-all duration-300 hover:-translate-y-0.5"
                    style={{
                      background: "rgba(10,22,40,0.7)",
                      border: "1px solid rgba(212,175,55,0.15)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = `${item.color}50`;
                      (e.currentTarget as HTMLElement).style.boxShadow = `0 0 20px ${item.color}15`;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(212,175,55,0.15)";
                      (e.currentTarget as HTMLElement).style.boxShadow = "none";
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: `${item.color}18`, border: `1px solid ${item.color}30` }}
                      >
                        <Icon className="w-4 h-4" style={{ color: item.color }} />
                      </div>
                      <span className="font-semibold text-sm text-white">{item.label}</span>
                    </div>

                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs sm:text-sm font-semibold text-[#D4AF37] hover:underline transition-colors truncate max-w-[180px]"
                    >
                      {item.value}
                    </a>
                  </div>
                );
              })}
            </div>

            {/* Quick tip */}
            <div
              className="mt-8 p-4 rounded-xl"
              style={{
                background: "rgba(212,175,55,0.06)",
                border: "1px solid rgba(212,175,55,0.2)",
              }}
            >
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                ⚡ <strong className="text-[#D4AF37]">Quick response guaranteed</strong> — I typically
                reply within 2-4 hours during business hours (PKT). For urgent projects,
                WhatsApp is fastest!
              </p>
            </div>
          </div>

          {/* Right: Message Form */}
          <div
            className="lg:col-span-7 p-7 sm:p-9 rounded-[22px] reveal-right"
            style={{
              background: "rgba(10,22,40,0.8)",
              border: "1px solid rgba(212,175,55,0.2)",
              backdropFilter: "blur(20px)",
              boxShadow: "0 0 40px rgba(0,0,0,0.4)",
            }}
          >
            <h3 className="text-2xl sm:text-3xl font-black text-white mb-6">
              Send a <span className="gold-shimmer">Message!</span>
            </h3>

            {submitted ? (
              <div
                className="p-8 text-center rounded-2xl"
                style={{ background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.3)" }}
              >
                <CheckCircle2 className="w-14 h-14 text-[#10B981] mx-auto mb-3" />
                <h4 className="text-xl font-bold text-white mb-2">Message Ready &amp; Sent! 🎉</h4>
                <p className="text-sm text-[#94A3B8] leading-relaxed mb-6">
                  Thank you, <strong className="text-white">{formData.name}</strong>! Your message is ready.
                  If your chat didn&apos;t open automatically, use the buttons below to reach me instantly:
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
                  <a
                    href={`https://wa.me/923120186784?text=${encodeURIComponent(
                      `Hello Sehar,\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Subject:* ${formData.subject}\n\n*Message:*\n${formData.message}`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#22C55E] text-white font-bold text-xs shadow-lg hover:brightness-110 transition-all cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Open in WhatsApp</span>
                  </a>

                  <a
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=sehariftikhar187@gmail.com&su=${encodeURIComponent(
                      `[Portfolio Contact] ${formData.subject}`
                    )}&body=${encodeURIComponent(
                      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#D4AF37] text-[#050c1a] font-bold text-xs shadow-lg hover:brightness-110 transition-all cursor-pointer"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Open in Gmail</span>
                  </a>
                </div>

                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", subject: "", message: "", agreed: false });
                  }}
                  className="text-xs text-[#94A3B8] hover:text-white underline cursor-pointer transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {errorMsg && (
                  <div
                    className="p-3 text-xs font-bold rounded-xl"
                    style={{ background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.3)", color: "#F87171" }}
                  >
                    {errorMsg}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#94A3B8] uppercase mb-2 tracking-wider">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name..."
                      required
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#94A3B8] uppercase mb-2 tracking-wider">
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email Address..."
                      required
                      className="form-input"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#94A3B8] uppercase mb-2 tracking-wider">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject..."
                    required
                    className="form-input"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#94A3B8] uppercase mb-2 tracking-wider">
                    Your Message
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    required
                    style={{ resize: "none" }}
                    className="form-input"
                  />
                </div>

                <div className="flex items-center gap-2.5 pt-1">
                  <input
                    type="checkbox"
                    id="terms"
                    name="agreed"
                    checked={formData.agreed}
                    onChange={handleChange}
                    required
                    className="w-4 h-4 cursor-pointer rounded accent-[#D4AF37]"
                  />
                  <label htmlFor="terms" className="text-xs text-[#94A3B8] cursor-pointer select-none">
                    I agree to the terms and conditions
                  </label>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={sending}
                    className="my-button-3 w-full sm:w-auto gap-2"
                  >
                    <Send className="w-4 h-4" />
                    {sending ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
