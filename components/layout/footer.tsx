"use client";

import * as React from "react";
import { site } from "@/lib/site-config";
import Link from "next/link";
import { Instagram } from "lucide-react";
import { Button } from "../ui/button";
import { getAllCategories } from "@/lib/vehicleQueries";
import Brand from "../brand/brand";

function Footer() {
  const currentYear = new Date().getFullYear();
  const [categories, setCategories] = React.useState<any[]>([]);

  // Fetch categories on component mount
  React.useEffect(() => {
    const fetchCategories = async () => {
      try {
        const fetchedCategories = await getAllCategories();
        setCategories(fetchedCategories || []);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    
    fetchCategories();
  }, []);

  // Get first 5 categories or default ones if none available
  const displayCategories = categories.slice(0, 5).map(category => ({
    label: category.name?.toUpperCase() || "CATEGORY",
    href: `/products?category=${category.slug?.current || 'category'}`
  }));

  // Fallback categories if none are fetched
  const fallbackCategories = [
    { label: "T-SHIRTS", href: "/products?category=t-shirts" },
    { label: "HOODIES", href: "/products?category=hoodies" },
    { label: "PANTS", href: "/products?category=pants" },
    { label: "JACKETS", href: "/products?category=jackets" },
    { label: "ACCESSORIES", href: "/products?category=accessories" }
  ];

  const finalCategories = displayCategories.length > 0 ? displayCategories : fallbackCategories;

  // Link declarations - organize all links here
  const footerLinks = {
  
    company: [
      { label: "ABOUT US", href: "/about" }
    ],
    shopByCategory: finalCategories,
    legal: [
      { label: "PRIVACY POLICY", href: "/privacy-policy" },
      { label: "TERMS & CONDITIONS", href: "/terms-conditions" },
      { label: "COOKIES", href: "/cookies" }
    ],
    social: [
      { label: "INSTAGRAM", href: process.env.NEXT_PUBLIC_INSTA || "https://instagram.com/eco.loot" },
      { label: "WHATSAPP", href: process.env.NEXT_PUBLIC_WHATSAPP || "https://wa.me/919846197088" },
      // { label: "LINKEDIN", href: process.env.NEXT_PUBLIC_LINKEDIN || "#" },
      // { label: "TIKTOK", href: process.env.NEXT_PUBLIC_TIKTOK || "#" },
      // { label: "PINTEREST", href: process.env.NEXT_PUBLIC_PINTEREST || "#" }
    ]
  };

  return (
    <footer className="bg-[#f5f5f5] text-black border-t border-gray-200 rounded-t-4xl ">
      {/* Marquee Bar */}
      {/* <div className="bg-black text-white py-3 overflow-hidden">
        <div className="marquee-container">
          <div className="marquee-content animate-marquee whitespace-nowrap">
            <span className="font-montserrat font-bold text-sm uppercase tracking-widest mx-8">
              LATEST STREETWEAR COLLECTIONS
            </span>
            <span className="font-montserrat font-bold text-sm uppercase tracking-widest mx-8">
            LATEST STREETWEAR COLLECTIONS
            </span>
            <span className="font-montserrat font-bold text-sm uppercase tracking-widest mx-8">
            LATEST STREETWEAR COLLECTIONS
            </span>
           
          </div>
        </div>
      </div> */}

      {/* Logo Section */}
      <div className="border-b border-gray-200">
        <div className="container mx-auto px-4 py-12 text-center">
          <Link href="/">
            {/* <h2 className="font-playfair text-primary italic text-4xl md:text-5xl font-bold tracking-wide hover:opacity-80 transition-opacity">
              THE NORTH SIDE
            </h2> */}
            <Brand cal={true}/>
          </Link>
        </div>
      </div>

      {/* Main Footer Content */}
    
      {/* Social Links Bar */}
      <div className="bg-primary text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
            <span className="font-montserrat font-medium text-xs uppercase tracking-widest">
              CONNECT
            </span>
            {footerLinks.social.map((platform) => (
              <Link
                key={platform.label}
                href={platform.href}
                className="font-montserrat text-xs uppercase tracking-widest hover:text-gray-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                {platform.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center">
            <p className="font-montserrat text-xs text-gray-600 uppercase tracking-wide">
              © {currentYear} {site.name}. All rights reserved.
            </p>
            {/* <nav className="flex gap-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="font-montserrat text-xs text-gray-600 uppercase tracking-wide hover:text-black transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav> */}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        .marquee-container {
          overflow: hidden;
          white-space: nowrap;
          position: relative;
        }
        .marquee-content {
          display: inline-flex;
          animation: marquee 20s linear infinite;
        }
        .marquee-content:hover {
          animation-play-state: paused;
        }
      `}</style>
    </footer>
  );
}

export { Footer };