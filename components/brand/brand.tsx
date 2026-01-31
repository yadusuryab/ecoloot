import React from "react";
import { Inter, Luxurious_Script } from 'next/font/google';
import Image from "next/image";

// Configure Inter font
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

// Configure Luxurious Script font
const luxuriousScript = Luxurious_Script({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-luxurious-script',
})

interface BrandProps {
  small?: boolean;
  className?: string;
  cal?: boolean;
}

const Brand: React.FC<BrandProps> = ({ small = false, className = "", cal = false }) => {
  if (cal) {
    // Use Luxurious Script font
    return (
      <div className={`${className} w-fit`}>
            <Image src={'/ecoloot-nobg.png'} alt="Ecoloot" width={32} height={32} />

      </div>
    );
  }

  // Use Inter font (default)
  return (
    <div className={className}>
    <div className="flex items-center justify-center">
    <Image src={'/ecoloot-nobg.png'} alt="Ecoloot" width={32} height={32} />
      <h2 
        className={`uppercase font-bold ${small ? 'text-2xl' : 'text-md'} tracking-tight `}
      >
        {process.env.NEXT_PUBLIC_APP_NAME || "THE NORTH SIDE"}
      </h2>
    </div>
    </div>
  );
};

export default Brand;