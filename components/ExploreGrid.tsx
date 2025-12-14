import React, { useState } from 'react';
import { EXPLORE_FILTERS, EXPLORE_PRODUCTS } from '../constants';
import { Heart, ArrowRight } from 'lucide-react';

const ExploreGrid: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('New Arrivals');

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 pb-32">
      <div className="max-w-[1600px] mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif mb-8">Discover Linghua</h2>
        
        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-12">
            {EXPLORE_FILTERS.map(filter => (
                <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`px-5 py-2 rounded-full text-sm transition-colors ${
                        activeFilter === filter 
                        ? 'bg-black text-white' 
                        : 'bg-transparent text-gray-600 hover:bg-gray-100'
                    }`}
                >
                    {filter}
                </button>
            ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {EXPLORE_PRODUCTS.map(product => (
                <div key={product.id} className="group cursor-pointer">
                    <div className="relative aspect-square rounded-lg overflow-hidden bg-white mb-4">
                        <img 
                            src={product.image} 
                            alt={product.title} 
                            className="w-full h-full object-cover mix-blend-multiply p-4 group-hover:scale-105 transition-transform duration-500"
                        />
                        <button className="absolute top-3 right-3 flex items-center gap-1 bg-white/50 backdrop-blur-md px-2 py-1 rounded-full text-xs">
                             <Heart size={14} /> {product.likes}
                        </button>
                        <button className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                            View
                        </button>
                        {/* Hover Arrow Overlay */}
                         <div className="absolute top-1/2 right-4 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <ArrowRight size={24} className="text-gray-400" />
                        </div>
                    </div>

                    <div className="space-y-1">
                        <h3 className="text-sm font-medium leading-tight">{product.title}</h3>
                         <div className="flex items-center gap-2">
                             <div className="text-xs text-gray-500 flex flex-col">
                                <span className="text-black leading-none">{product.artist}</span>
                             </div>
                             <div className="ml-auto text-sm font-medium">
                                 {typeof product.price === 'number' ? `$${product.price}` : `from $${product.price}`}
                             </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreGrid;