import React from 'react';
import { Heart } from 'lucide-react';
import { FEATURED_PRODUCTS } from '../constants';
import { PageView } from '../App';

interface FeaturedCollectionProps {
    onNavClick?: (page: PageView) => void;
}

const FeaturedCollection: React.FC<FeaturedCollectionProps> = ({ onNavClick }) => {
  return (
    <section className="py-12">
        {/* Banner Image */}
      <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
        <img 
            src="https://picsum.photos/seed/linghua_main/1600/900" 
            alt="Linghua Workshop" 
            className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-8 md:p-16">
            <p className="text-white/80 text-sm md:text-base mb-2 uppercase tracking-wide">The Signature Collection</p>
            <h2 className="text-white text-4xl md:text-6xl font-serif mb-8">Modern Heirlooms</h2>
            <button 
                onClick={() => onNavClick?.('COLLECTIONS')}
                className="bg-white text-black px-8 py-3 rounded-full font-medium self-start hover:bg-gray-100 transition-colors"
            >
                Explore the Collection
            </button>
        </div>
      </div>

      {/* Product Grid */}
      <div className="max-w-[1600px] mx-auto px-4 py-16">
         <div className="text-center mb-12">
             <h3 className="text-3xl font-serif">Featured Designs</h3>
         </div>
         <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-12">
            {FEATURED_PRODUCTS.map(product => (
                <div key={product.id} className="group">
                    <div className="relative aspect-square bg-gray-50 rounded-lg mb-4 overflow-hidden">
                        <img 
                            src={product.image} 
                            alt={product.title} 
                            className="w-full h-full object-contain p-8 group-hover:scale-105 transition-transform duration-500 mix-blend-multiply" 
                        />
                        <button className="absolute top-3 right-3 text-gray-400 hover:text-red-500 flex items-center gap-1 text-xs">
                             <Heart size={16} /> {product.likes}
                        </button>
                    </div>
                    <h3 className="text-sm font-medium mb-1 truncate">{product.title}</h3>
                    <div className="flex items-center gap-2 mb-2">
                         <div className="text-xs text-gray-500">
                            <span className="block text-gray-400 text-[10px]">Collection</span>
                            <span className="text-black">{product.artist}</span>
                         </div>
                    </div>
                    <div className="text-sm font-medium">${product.price}</div>
                </div>
            ))}
         </div>
      </div>
      
      {/* Brand Story Section */}
      <div className="max-w-[1600px] mx-auto px-4 mt-16 mb-24">
          <div className="bg-white p-8 md:p-16 rounded-2xl flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1">
                  <h2 className="text-3xl md:text-4xl font-serif mb-6">The Art of Linghua</h2>
                  <p className="text-gray-600 leading-relaxed mb-6 font-serif text-lg">
                      At Linghua, we believe that jewelry should be as unique as the person wearing it. Our philosophy blends traditional craftsmanship with modern technology, allowing you to reimagine our classic silhouettes with your own personal touch of color and material.
                  </p>
                  <button 
                    onClick={() => onNavClick?.('STORY')}
                    className="text-black border-b border-black pb-1 hover:opacity-70 transition-opacity"
                  >
                      Read our story
                  </button>
              </div>
              <div className="flex-1 w-full aspect-video rounded-xl overflow-hidden">
                   <img src="https://picsum.photos/seed/linghua_story/800/600" className="w-full h-full object-cover" alt="Craftsmanship" />
              </div>
          </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;