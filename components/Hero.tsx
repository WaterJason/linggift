import React from 'react';
import { MessageCircle } from 'lucide-react';

interface HeroProps {
    onCreateClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCreateClick }) => {
  return (
    <section className="relative px-4 sm:px-6 lg:px-8 pt-12 pb-24">
      {/* Text Content */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-serif text-black mb-6 tracking-tight">
          Linghua Custom Jewelry
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-10 font-serif">
          Timeless designs, crafted by us, customized by you. Maintain our classic styles while personalizing metals and gemstones using AI.
        </p>
        <button 
            onClick={onCreateClick}
            className="inline-flex items-center gap-2 bg-zinc-800 text-white px-8 py-4 rounded-full hover:bg-black transition-colors text-sm font-medium shadow-lg hover:scale-105 transform duration-200"
        >
          <MessageCircle size={18} />
          Start Your Custom Design
        </button>
      </div>

      {/* Masonry Grid Images */}
      <div className="grid grid-cols-1 md:grid-cols-3 h-[80vh] md:h-[600px] w-full max-w-[1800px] mx-auto gap-0 overflow-hidden rounded-xl">
        <div className="relative h-full w-full group overflow-hidden">
            <img 
                src="https://picsum.photos/seed/linghua_hero1/600/800" 
                alt="Gold Ring" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
        </div>
        <div className="relative h-full w-full group overflow-hidden">
            <img 
                src="https://picsum.photos/seed/linghua_hero2/600/800" 
                alt="Diamond Necklace" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
        </div>
        <div className="relative h-full w-full bg-gray-100 grid grid-rows-2">
             <div className="relative overflow-hidden group h-full">
                <img 
                    src="https://picsum.photos/seed/linghua_hero3/600/400" 
                    alt="Workshop" 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
             </div>
             <div className="relative overflow-hidden group h-full">
                <img 
                    src="https://picsum.photos/seed/linghua_hero4/600/400" 
                    alt="Earrings" 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
             </div>
        </div>
      </div>
      
      {/* Bottom fade row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-0 mt-0 max-w-[1800px] mx-auto h-48 overflow-hidden rounded-b-xl opacity-90">
         <img src="https://picsum.photos/seed/linghua_hero5/400/300" className="w-full h-full object-cover" />
         <img src="https://picsum.photos/seed/linghua_hero6/400/300" className="w-full h-full object-cover" />
         <img src="https://picsum.photos/seed/linghua_hero7/400/300" className="w-full h-full object-cover" />
         <img src="https://picsum.photos/seed/linghua_hero8/400/300" className="w-full h-full object-cover" />
      </div>
    </section>
  );
};

export default Hero;