import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import GlassmorphismCard from '@/components/environment/glassmorphism-card';
import TimelineScrubber from '@/components/environment/timeline-scrubber';

// Lazy load heavy 3D components
const EarthModel = dynamic(() => import('@/components/environment/earth-model'), {

  loading: () => <div className="w-full h-[80vh] bg-gradient-to-b from-gray-900 to-black" />
});

export default function Landing() {
  const deforestationData = [
    { year: 1990, loss: 7.5, region: 'Amazon', co2: 350 },
    { year: 2000, loss: 9.2, region: 'Indonesia', co2: 370 },
    { year: 2010, loss: 11.3, region: 'Congo Basin', co2: 390 },
    { year: 2020, loss: 12.9, region: 'Amazon', co2: 415 },
    { year: 2030, loss: 14.5, region: 'SE Asia', co2: 450 },
    { year: 2040, loss: 16.2, region: 'Multiple', co2: 490 },
    { year: 2050, loss: 18.1, region: 'Global', co2: 530 },
    { year: 2080, loss: 22.4, region: 'Critical', co2: 620 },
  ];

  const hotspots = [
    { name: 'Amazon Rainforest', loss: '17%', intensity: 'high', coordinates: [ -60, -10 ] },
    { name: 'Borneo Forests', loss: '30%', intensity: 'medium', coordinates: [ 115, 0 ] },
    { name: 'Congo Basin', loss: '12%', intensity: 'medium', coordinates: [ 25, 0 ] },
    { name: 'Siberian Taiga', loss: '8%', intensity: 'low', coordinates: [ 100, 60 ] },
  ];

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Atmospheric background glow */}
      {/* <AtmosphericGlow /> */}
      
      {/* Main Earth Scene */}
      <div className="relative h-screen">
        <Suspense fallback={<div className="w-full h-full bg-gradient-to-br from-gray-900 via-blue-900/20 to-black" />}>
          <EarthModel />
        </Suspense>
        
        {/* Sunlight gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-blue-500/5" />
        
        {/* Hero content overlay */}
        <div className="absolute inset-0 z-10">
          <div className="container mx-auto px-6 pt-24">
            {/* Main headline */}
            <div className="max-w-4xl">
              <h1 className="text-7xl font-light tracking-tight text-white mb-6">
                <span className="font-thin">Our Planet</span>
                <span className="block text-6xl font-light bg-gradient-to-r from-orange-200 to-cyan-200 bg-clip-text text-transparent">
                  In Critical Balance
                </span>
              </h1>
              <p className="text-xl text-gray-300 font-light max-w-2xl leading-relaxed">
                Witness the transformation of Earth&apos;s forests from 1990 to 2080.
                Each glowing point tells a story of loss, resilience, and hope.
              </p>
            </div>

            {/* Stats overlay grid */}
            {/* <StatsOverlay data={deforestationData[3]} /> */}
          </div>
        </div>
      </div>

      {/* Floating info cards */}
      <div className="container mx-auto px-6 relative z-20 -mt-40">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <GlassmorphismCard title="Forest Loss" value="12.9M ha" change="+15%" year="2020" 
            description="Annual deforestation rate" trend="up" />
          
          <GlassmorphismCard title="CO₂ Levels" value="415 ppm" change="+2.5%" year="2020"
            description="Atmospheric concentration" trend="up" />
          
          <GlassmorphismCard title="Biodiversity" value="-68%" change="-12%" year="2020"
            description="Species population decline" trend="down" />
        </div>
      </div>

      {/* Hotspots section */}
      <div className="container mx-auto px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-light text-white mb-12 tracking-wide">
            Critical Hotspots
            <span className="block text-lg font-normal text-gray-400 mt-2">
              Real-time monitoring of forest fire and deforestation activity
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hotspots.map((hotspot, index) => (
              <div 
                key={index}
                className="glass-panel group hover:scale-[1.02] transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-medium text-white">{hotspot.name}</h3>
                    <div className={`w-3 h-3 rounded-full ${hotspot.intensity === 'high' ? 'bg-red-500 animate-pulse' : hotspot.intensity === 'medium' ? 'bg-orange-500' : 'bg-yellow-500'}`} />
                  </div>
                  <div className="text-3xl font-light text-white mb-2">{hotspot.loss}</div>
                  <div className="text-gray-400 text-sm">Lost since 1990</div>
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <div className="text-xs text-gray-500 uppercase tracking-wider">Status</div>
                    <div className="text-amber-500 font-medium">Active fires detected</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline scrubber */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-t from-black/90 via-black/70 to-transparent pt-12">
        <div className="container mx-auto px-6">
          <TimelineScrubber 
            years={[1990, 2000, 2010, 2020, 2030, 2040, 2050, 2080]}
            currentYear={2020}
            onYearChange={(year:any) => console.log('Year changed:', year)}
          />
          
          <div className="flex justify-between items-center py-4 text-gray-400 text-sm">
            <div className="flex items-center space-x-8">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-red-500 rounded-full mr-2 animate-pulse" />
                <span>Active forest fires</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-orange-400 rounded-full mr-2" />
                <span>Deforestation alerts</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-400 rounded-full mr-2" />
                <span>Protected areas</span>
              </div>
            </div>
            
            <div className="text-right">
              <div className="text-xs text-gray-500 mb-1">Interactive visualization</div>
              <div className="text-white font-light">Drag timeline to explore different years</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 z-30">
        <div className="flex flex-col items-center text-gray-400">
          <div className="text-sm mb-2 tracking-widest">EXPLORE</div>
          <div className="w-px h-12 bg-gradient-to-b from-cyan-500/50 to-transparent" />
        </div>
      </div>

      {/* Ambient UI elements */}
      <div className="fixed top-6 right-6 z-40">
        <button className="glass-button px-6 py-3 rounded-full text-white font-light tracking-wide hover:bg-white/10 transition-colors">
          <span className="flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Live Data Feed
          </span>
        </button>
      </div>
    </div>
  );
}