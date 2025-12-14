import React from 'react';
import { CATEGORIES } from '../constants';
import { Sparkles, ArrowRight } from 'lucide-react';

interface CategoryRowProps {
    onCreateClick?: () => void;
}

const CategoryRow: React.FC<CategoryRowProps> = ({ onCreateClick }) => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl md:text-5xl font-serif mb-12 max-w-[1600px] mx-auto">Shop by Category</h2>
      
      <div className="max-w-[1800px] mx-auto overflow-x-auto no-scrollbar pb-8">
        <div className="flex gap-6 min-w-max px-4">
            {CATEGORIES.map((cat) => (
                <div key={cat.id} className="group relative w-[280px] flex-shrink-0 cursor-pointer" onClick={onCreateClick}>
                    <div className="aspect-square bg-white rounded-lg overflow-hidden mb-4 relative">
                        <img 
                            src={cat.image} 
                            alt={cat.title}
                            className="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
                        />
                    </div>
                    
                    <div className="text-center">
                        <h3 className="font-bold text-lg mb-1">{cat.title}</h3>
                        <p className="text-xs text-gray-500 italic font-serif mb-4">{cat.subtitle}</p>
                        <button className="bg-beige-200/50 hover:bg-beige-200 text-black px-6 py-2 rounded-full text-sm font-medium transition-colors inline-flex items-center gap-1">
                           <Sparkles size={12} fill="black" /> Customize
                        </button>
                    </div>
                </div>
            ))}
             <div className="flex items-center justify-center w-32">
                <button className="p-4 rounded-full border border-gray-300 hover:border-black transition-colors" onClick={onCreateClick}>
                    <ArrowRight />
                </button>
            </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryRow;
