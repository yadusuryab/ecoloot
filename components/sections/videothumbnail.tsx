export default function VideoThumbnail() {
    return (
      <div className="relative group cursor-pointer">
        <div className="w-full h-64 lg:h-80 bg-gradient-to-br from-gray-900 to-emerald-900 rounded-2xl overflow-hidden smooth-shadow">
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          
          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <div className="w-0 h-0 border-l-[12px] border-l-emerald-600 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
            </div>
          </div>
          
          {/* Video Preview Content */}
          <div className="absolute bottom-6 left-6">
            <h3 className="text-white text-xl font-semibold mb-2">Наш процесс работы</h3>
            <p className="text-gray-300">Узнайте, как мы создаем зеленые офисы</p>
          </div>
        </div>
      </div>
    );
  }