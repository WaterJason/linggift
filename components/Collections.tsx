import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

interface CollectionsProps {
    onCreateClick?: () => void;
}

const Collections: React.FC<CollectionsProps> = ({ onCreateClick }) => {
  const collections = [
    {
      title: "The Signature Series",
      desc: "Our timeless core collection featuring Linghua's iconic gold silhouettes and classic diamond settings.",
      img: "https://picsum.photos/seed/collection_sig/800/600",
      items: ["Classic Band", "Solitaire Ring", "Pendant Chain"]
    },
    {
      title: "Bridal & Engagement",
      desc: "Celebrate love with ethically sourced gemstones and customizable settings designed to last forever.",
      img: "https://picsum.photos/seed/collection_bridal/800/600",
      items: ["Engagement Rings", "Wedding Bands", "Bridal Sets"]
    },
    {
      title: "Modern Heritage",
      desc: "A fusion of traditional craftsmanship and contemporary aesthetics, perfect for daily wear.",
      img: "https://picsum.photos/seed/collection_modern/800/600",
      items: ["Geometric Hoops", "Stacking Rings", "Layered Necklaces"]
    }
  ];

  return (
    <div className="animate-in fade-in duration-500">
      {/* Header */}
      <div className="bg-white py-24 px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-serif mb-6">Our Collections</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto font-serif">
          Discover our curated series, each designed to be the perfect canvas for your personalization.
        </p>
      </div>

      {/* Collections List */}
      <div className="max-w-[1600px] mx-auto px-6 pb-24 space-y-24">
        {collections.map((col, idx) => (
            <div key={idx} className={`flex flex-col md:flex-row gap-12 items-center ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className="flex-1 w-full aspect-[4/3] relative group overflow-hidden rounded-xl">
                    <img src={col.img} alt={col.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                </div>
                <div className="flex-1 space-y-6">
                    <h2 className="text-4xl font-serif">{col.title}</h2>
                    <p className="text-gray-600 text-lg leading-relaxed">{col.desc}</p>
                    
                    <div className="flex flex-wrap gap-3 mb-6">
                        {col.items.map(item => (
                            <span key={item} className="px-4 py-2 bg-beige-200 rounded-full text-sm">{item}</span>
                        ))}
                    </div>

                    <button 
                        onClick={onCreateClick}
                        className="inline-flex items-center gap-2 text-black border-b border-black pb-1 hover:opacity-70 transition-opacity font-medium"
                    >
                        <Sparkles size={16} /> Customize this collection
                    </button>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Collections;