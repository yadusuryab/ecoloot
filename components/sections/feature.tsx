// components/EcoFeatureSection.tsx
import Image from 'next/image';

export default function FeatureSection() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-emerald-900 via-green-900 to-teal-900 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Headline */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-light text-white mb-4 tracking-tight">
            Developing an Interactive & Visually
            <span className="block text-emerald-200 font-normal">Appealing Eco-Website</span>
          </h1>
          <p className="text-green-100 text-lg max-w-2xl mx-auto">
            A premium case study showcasing nature-inspired design and sustainable digital experiences
          </p>
        </div>

        {/* Split Panel Image Grid */}
        <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-16 shadow-2xl shadow-black/20">
          <div className="grid grid-cols-4 gap-2 mb-8 rounded-xl overflow-hidden">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="relative h-80 rounded-lg overflow-hidden group">
                <Image
                  src="/api/placeholder/800/1200"
                  alt="Green iguana on a branch"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            ))}
          </div>

          {/* Objective & Task Blocks */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-emerald-300 font-semibold text-sm uppercase tracking-wider">
                Objective
              </h3>
              <p className="text-white text-lg leading-relaxed">
                Create an immersive digital experience that showcases environmental conservation 
                through cutting-edge web design. The platform needed to engage users while 
                maintaining premium aesthetics and seamless functionality.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-emerald-300 font-semibold text-sm uppercase tracking-wider">
                Task
              </h3>
              <p className="text-white text-lg leading-relaxed">
                Develop a responsive website that combines ecological storytelling with 
                modern UI/UX principles. Implement interactive elements that educate and 
                inspire users about wildlife preservation and sustainable practices.
              </p>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Nature Photo */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/30">
            <div className="relative h-96 lg:h-[500px]">
              <Image
                src="/api/placeholder/800/600"
                alt="Snail on a plant in natural habitat"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 to-transparent" />
            </div>
          </div>

          {/* Process Steps */}
          <div className="relative">
            <div className="space-y-8">
              {[
                {
                  step: "01",
                  title: "Research & Analysis",
                  description: "Comprehensive study of ecological data and user behavior patterns"
                },
                {
                  step: "02",
                  title: "Planning & Concept Development",
                  description: "Structuring information architecture and sustainable design principles"
                },
                {
                  step: "03",
                  title: "Design Development",
                  description: "Creating visual systems that reflect natural ecosystems and biodiversity"
                },
                {
                  step: "04",
                  title: "Prototyping",
                  description: "Building interactive prototypes for user testing and feedback"
                }
              ].map((item, index) => (
                <div key={index} className="flex gap-6 group cursor-pointer">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center group-hover:bg-emerald-500/30 transition-colors">
                      <span className="text-emerald-300 font-mono text-sm">{item.step}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white text-xl font-medium mb-2">{item.title}</h3>
                    <p className="text-green-100 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Wildlife Image */}
            <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-2xl overflow-hidden shadow-xl shadow-black/30">
              <Image
                src="/api/placeholder/200/200"
                alt="Deer in natural habitat"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}