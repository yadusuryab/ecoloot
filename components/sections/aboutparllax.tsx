"use client";
import React from "react";
import { cn } from "@/lib/utils";
import Lenis from "@studio-freight/lenis";
import { ZoomParallax } from "../21st/zoomparllax";

export default function AboutUs() {
  React.useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const images = [
    {
      src: "./p1.png",
      alt: "Modern architecture building",
    },
    {
      src: "./p2.png",
      alt: "Urban cityscape at sunset",
    },
    {
      src: "./p3.png",
      alt: "Abstract geometric pattern",
    },
    {
      src: "./p4.png",
      alt: "Mountain landscape",
    },
    {
      src: "./p5.png",
      alt: "Minimalist design elements",
    },
    {
      src: "./p6.png",
      alt: "Ocean waves and beach",
    },
    {
      src: "./p7.png",
      alt: "Forest trees and sunlight",
    },
  ];

  return (
    <main className="min-h-screen w-full bg-secondary text-primary-foreground">
      <div className="relative flex h-[50vh] items-center justify-center">
        {/* Radial spotlight */}
        <div
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute -top-1/2 left-1/2  -translate-x-1/2 rounded-full",
            "bg-[radial-gradient(ellipse_at_center,--theme(--color-foreground/.1),transparent_50%)]",
            "blur-[30px]"
          )}
        />
        <div className="grid p-2">
          <h1 className="text-center md:text-3xl text-2xl font-serif text-secondary-foreground italic tracking-tighter font-bold">
            Choose the Smarter, Greener Way{" "}
          </h1>
          <p className="text-center italic font-serif mt-3 text-muted-foreground md:text-xl text-md">
            Make the switch to{" "}
            <span className="font ">eco-friendly choices</span>{" "}
            that reduce waste, save energy, and{" "}
            <span className="font-medium">create a better future</span> — for
            you and the planet.
          </p>
        </div>
      </div>
      <ZoomParallax images={images} />
    </main>
  );
}
