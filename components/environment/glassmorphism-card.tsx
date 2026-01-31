interface GlassmorphismCardProps {
    title: string;
    value: string;
    change: string;
    year: string;
    description: string;
    trend: 'up' | 'down';
  }
  
  export default function GlassmorphismCard({ 
    title, value, change, year, description, trend 
  }: GlassmorphismCardProps) {
    return (
      <div className="glass-panel backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl">
        <div className="flex justify-between items-start mb-4">
          <div>
            <div className="text-gray-400 text-sm font-light mb-1">{title}</div>
            <div className="text-3xl font-light text-white">{value}</div>
          </div>
          <div className={`px-3 py-1 rounded-full ${trend === 'up' ? 'bg-red-500/20 text-red-300' : 'bg-green-500/20 text-green-300'}`}>
            {change}
          </div>
          
        </div>
        <div className="text-gray-400 text-sm mb-2">{description}</div>
        <div className="flex justify-between items-center text-xs text-gray-500">
          <span>Year: {year}</span>
          <span>Source: NASA EarthData</span>
        </div>
      </div>
    );
  }