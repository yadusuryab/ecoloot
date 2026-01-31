'use client';

import { useState } from 'react';

interface TimelineScrubberProps {
  years: number[];
  currentYear: number;
  onYearChange: (year: number) => void;
}

export default function TimelineScrubber({ years, currentYear, onYearChange }: TimelineScrubberProps) {
  const [selectedYear, setSelectedYear] = useState(currentYear);

  const handleYearClick = (year: number) => {
    setSelectedYear(year);
    onYearChange(year);
  };

  return (
    <div className="py-8">
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 right-0 top-1/2 h-px bg-gray-700/50 transform -translate-y-1/2" />
        
        {/* Years */}
        <div className="relative flex justify-between">
          {years.map((year) => (
            <div key={year} className="flex flex-col items-center">
              <button
                onClick={() => handleYearClick(year)}
                className={`relative w-4 h-4 rounded-full mb-2 transition-all duration-300 ${
                  selectedYear === year 
                    ? 'bg-cyan-500 shadow-cyan-glow scale-125' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
              <div className={`text-sm transition-colors ${
                selectedYear === year ? 'text-white font-medium' : 'text-gray-500'
              }`}>
                {year}
              </div>
              {selectedYear === year && (
                <div className="absolute -top-8 bg-black/80 px-3 py-1 rounded-lg text-cyan-300 text-sm whitespace-nowrap">
                  {year === 2080 ? 'Projection' : 'Historical'}
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Current indicator */}
        <div 
          className="absolute top-1/2 h-1 bg-gradient-to-r from-cyan-500/50 to-transparent rounded-full"
          style={{ 
            left: `${((selectedYear - years[0]) / (years[years.length - 1] - years[0])) * 100}%`,
            width: '20%'
          }}
        />
      </div>
    </div>
  );
}