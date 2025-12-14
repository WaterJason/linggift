import React from 'react';
import { ArrowRight } from 'lucide-react';
import { MAKERS } from '../constants';

const MakersGrid: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-beige-50">
      <div className="max-w-[1600px] mx-auto flex items-center gap-4 mb-12">
        <h2 className="text-4xl md:text-5xl font-serif">Create with Trusted Makers</h2>
        <button className="p-2 rounded-full bg-beige-200 hover:bg-beige-300 transition-colors">
            <ArrowRight size={20} />
        </button>
      </div>

      <div className="max-w-[1800px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-1">
        {MAKERS.map((maker) => (
            <div key={maker.id} className="relative aspect-[3/4] group overflow-hidden cursor-pointer">
                <img 
                    src={maker.image} 
                    alt={maker.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <span className="text-white font-serif text-lg">{maker.name}</span>
                </div>
                <div className="absolute bottom-4 left-4 text-white font-medium text-sm drop-shadow-md group-hover:opacity-0 transition-opacity duration-300">
                    {maker.name}
                </div>
            </div>
        ))}
      </div>
    </section>
  );
};

export default MakersGrid;
