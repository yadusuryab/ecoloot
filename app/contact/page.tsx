"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { IconBrandInstagram, IconMail, IconPhone } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";

// ── Contact channels ──────────────────────────────────────────────────────────
const CHANNELS = [
  {
    icon: (
    <IconMail/>
    ),
    label: "Email",
    value: process.env.NEXT_PUBLIC_EMAIL,
    href: `mailto:${process.env.NEXT_PUBLIC_EMAIL}`,
    hint: "We reply within 24 hours",
  },
  {
    icon: (
     <IconPhone/>
    ),
    label: "Phone / WhatsApp",
    value:'+91 98461 97088',
    href: 'https://wa.me/919846197088',
    hint: "Mon – Sat, 9 am – 8 pm IST",
  },
  {
    icon: (
     <IconBrandInstagram/>
    ),
    label: "Instagram",
    value: "@eco.loot",
    href:'https://instagram.com/eco.loot',
    hint: "DM us anytime",
  },
];

type FormState = "idle" | "sending" | "sent" | "error";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<FormState>("idle");
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    
    setStatus("sending");
    
    try {
      // Get WhatsApp number from environment variable
      const whatsappNumber = process.env.NEXT_PUBLIC_PHONE;
      
      if (!whatsappNumber) {
        throw new Error("WhatsApp number not configured");
      }
      
      // Format the message
      const message = `*New Contact Form Submission*%0a%0a*Name:* ${form.name}%0a*Email:* ${form.email}%0a*Message:* ${form.message}`;
      
      // Create WhatsApp URL (remove any non-numeric characters from phone number)
      const cleanNumber = whatsappNumber.replace(/\D/g, '');
      const whatsappUrl = `https://wa.me/${cleanNumber}?text=${message}`;
      
      // Open WhatsApp in a new tab
      window.open(whatsappUrl, '_blank');
      
      // Optional: Also simulate API call or track submission
      await new Promise((r) => setTimeout(r, 500));
      
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
      
      // Reset status after 3 seconds
      setTimeout(() => setStatus("idle"), 3000);
      
    } catch (error) {
      console.error("Error:", error);
      setStatus("error");
      
      // Reset error status after 3 seconds
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  const inputBase = `w-full bg-transparent text-sm font-light leading-relaxed
     outline-none resize-none
    transition-colors duration-200`;

  const fieldWrapper = (name: string) =>
    `relative border rounded-xl px-4 py-3.5 transition-all duration-250
    ${focused === name
      ? "ring-2 ring-primary"
      : "ring-none"}`;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&family=DM+Sans:wght@300;400;500&display=swap');



        .glass {
          background: rgba(255,255,255,0.03);
          border: 1px solid var(--border);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }

        .gradient-line {
          height: 1px;
          background: linear-gradient(to right, transparent, rgba(20,184,154,0.3), transparent);
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fadeUp 0.65s cubic-bezier(0.16,1,0.3,1) both; }
        .d1 { animation-delay: 0.05s; }
        .d2 { animation-delay: 0.13s; }
        .d3 { animation-delay: 0.22s; }
        .d4 { animation-delay: 0.32s; }

        .channel-card {
          transition: border-color 0.25s ease, background 0.25s ease, transform 0.25s ease;
        }
        .channel-card:hover {
          border-color: rgba(20,184,154,0.3);
          background: rgba(20,184,154,0.04);
          transform: translateY(-2px);
        }

        .submit-btn {
          background: linear-gradient(135deg, #0d6e5e 0%, #14b89a 100%);
          transition: opacity 0.2s, transform 0.2s, box-shadow 0.2s;
        }
        .submit-btn:hover:not(:disabled) {
          opacity: 0.88;
          transform: translateY(-1px);
          box-shadow: 0 8px 24px rgba(20,184,154,0.25);
        }
        .submit-btn:disabled { opacity: 0.4; cursor: not-allowed; }

        .teal-dot {
          display: inline-block;
          width: 6px; height: 6px;
          border-radius: 50%;
          background: var(--teal-light);
          box-shadow: 0 0 8px rgba(20,184,154,0.6);
        }
      `}</style>

      <div >
        <div className="max-w-5xl mx-auto px-5 sm:px-8 py-16 md:py-24">

          {/* ── Header ── */}
          <div className="mb-14 md:mb-20">
            <div className="fade-up d1 flex items-center gap-3 mb-5">
              <span className="text-[10px] tracking-[0.3em] uppercase font-mono">
                Get in touch
              </span>
            </div>
            <h1 className="fade-up d2 serif text-2xl font-bold
              leading-[0.92] tracking-tight ">
              We'd love to<br /><em className="text-primary">hear from you.</em>
            </h1>
            <p className="fade-up d3 mt-5 text-muted-foreground text-sm md:text-base font-light
              leading-relaxed max-w-sm">
              Questions, order support, or just want to say hi — we're quick to reply.
            </p>
          </div>


          {/* ── Two-column layout ── */}
          <div className="grid md:grid-cols-[1fr_1.1fr] gap-10 md:gap-16 items-start">

            {/* LEFT — contact channels ── */}
            <div className="fade-up d3 space-y-3">
              <p className="text-[10px] tracking-[0.25em] uppercase font-mono  mb-6">
                Reach us directly
              </p>

              {CHANNELS.map((ch) => (
                <Link
                  key={ch.label}
                  href={ch.href || ''}
                target="_blank"
                  rel="noopener noreferrer"
                  className="channel-card ring-1 ring-primary/20  flex  justify-between items-start gap-4 p-5 rounded-2xl no-underline block"
                >
                  <div className="flex gap-2">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0
                     bg-primary/10 text-primary 
                   ">
                    {ch.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs tracking-[0.18em]  uppercase font-mono mb-0.5">
                      {ch.label}
                    </p>
                    <p className="text-sm text-primary font-bold text-wrap max-w-[200px]">{ch.value}</p>
                    <p className="text-[11.5px] text-muted-foreground mt-0.5 font-light">{ch.hint}</p>
                  </div>
                  </div>
                 
                 <ArrowRight className="text-primary"/>
                </Link>
              ))}

              {/* Business hours */}
          
            </div>

            {/* RIGHT — message form ── */}
       
          </div>
        </div>
      </div>
    </>
  );
}