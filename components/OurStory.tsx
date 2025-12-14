import React from 'react';

const OurStory: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500">
      {/* Hero */}
      <div className="relative h-[70vh] w-full overflow-hidden">
        <img 
            src="https://picsum.photos/seed/story_hero/1600/900" 
            alt="Linghua Workshop" 
            className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
             <h1 className="text-white text-6xl md:text-8xl font-serif tracking-tight">The Linghua Story</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-24 space-y-24">
          {/* Section 1 */}
          <section className="text-center">
              <span className="text-emerald-800 font-bold tracking-widest uppercase text-sm mb-4 block">Our Philosophy</span>
              <h2 className="text-4xl md:text-5xl font-serif mb-8">Craftsmanship in the Age of AI</h2>
              <p className="text-xl text-gray-600 leading-relaxed font-serif">
                  "Linghua" (精华) represents the essence of beauty. We founded this brand on a simple yet radical idea: 
                  that the timeless art of jewelry making could be enhanced, not replaced, by technology. 
                  We use Artificial Intelligence to empower you, the wearer, to become the designer, ensuring that every 
                  piece we craft is as unique as your own fingerprint.
              </p>
          </section>

          {/* Image Split */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <img src="https://picsum.photos/seed/story_craft/600/800" alt="Handcrafting" className="w-full h-full object-cover rounded-lg" />
              <img src="https://picsum.photos/seed/story_tech/600/800" alt="Digital Design" className="w-full h-full object-cover rounded-lg" />
          </div>

          {/* Section 2 */}
          <section>
              <h2 className="text-3xl md:text-4xl font-serif mb-6">From Screen to Stone</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                  While our design process begins with cutting-edge generative AI, our manufacturing process remains 
                  deeply rooted in tradition. Once you finalize your design in our digital studio, it is passed to our 
                  master jewelers. 
              </p>
              <p className="text-gray-700 leading-relaxed">
                  We use only 18k recycled gold and ethically sourced gemstones. Every prong is tightened by hand, 
                  every surface polished to perfection. This hybrid approach allows us to offer bespoke customization 
                  at a speed and quality previously impossible in the world of fine jewelry.
              </p>
          </section>

          {/* Values */}
          <section className="bg-beige-200 p-12 rounded-2xl">
              <h3 className="text-2xl font-serif mb-8 text-center">Our Core Values</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  <div>
                      <div className="text-4xl mb-4">🌿</div>
                      <h4 className="font-bold mb-2">Sustainability</h4>
                      <p className="text-sm text-gray-600">Recycled metals and conflict-free stones.</p>
                  </div>
                  <div>
                      <div className="text-4xl mb-4">🎨</div>
                      <h4 className="font-bold mb-2">Individuality</h4>
                      <p className="text-sm text-gray-600">No two pieces are ever exactly alike.</p>
                  </div>
                  <div>
                      <div className="text-4xl mb-4">⏳</div>
                      <h4 className="font-bold mb-2">Longevity</h4>
                      <p className="text-sm text-gray-600">Heirlooms designed to last generations.</p>
                  </div>
              </div>
          </section>
      </div>
    </div>
  );
};

export default OurStory;
