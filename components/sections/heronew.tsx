"use client"

import Link from "next/link"
import { buttonVariants } from "../ui/button"
import RotatingEarth from "../21st/rotating-earth"

export default function HeroContent() {
  return (
    <main className="absolute bottom-8 left-8 z-20 max-w-lg">
      {/* <RotatingEarth/> */}
      <div className="text-left">
        <div
          className="inline-flex items-center px-3 py-1 rounded-md  backdrop-blur-xl mb-4 relative"
          style={{
            filter: "url(#glass-effect)",
          }}
        >
          <div className="absolute top-0 left-1 right-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full" />
          <span className="text-white/90 text-xs font-semibold relative z-10">DISCOVER OUR ECO PRODUCTS</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl md:leading-16 tracking-tight font-light text-white mb-4">
  <span className="font-medium font-serif italic instrument">Rethink</span> the way we live.
  <br />
  <span className="font-light tracking-tight text-white">
  
  </span>
</h1>

<p className="text-xs font-light text-white/70 mb-4 leading-relaxed">
Designed in harmony with nature.
</p>

        {/* Buttons */}
        <div className="flex items-center gap-4 flex-wrap">
        <Link href={'/products'}className={buttonVariants({ variant: "default" })}>View Products</Link>
        </div>
      </div>
    </main>
  )
}
