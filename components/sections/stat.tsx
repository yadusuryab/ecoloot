import { StatItem } from '@/types';
import VideoThumbnail from './videothumbnail';

const stats: StatItem[] = [
  { value: '10 лет', label: 'на рынке' },
  { value: '500+', label: 'выполненных проектов' },
  { value: '99%', label: 'довольных клиентов' },
];

export default function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 text-white">
          Превращаем офисы в комфортные зоны для работы
        </h2>
        
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Video Thumbnail */}
          <div className="lg:w-1/2">
            <VideoThumbnail />
          </div>
          
          {/* Stats */}
          <div className="lg:w-1/2 grid grid-cols-1 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="glass-effect rounded-2xl p-8 text-center lg:text-left hover:transform hover:scale-105 transition-all duration-300 smooth-shadow"
              >
                <div className="text-4xl lg:text-5xl font-bold text-emerald-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-xl text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}