import React from 'react';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';
import { REVIEWS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex justify-between items-center mb-12">
             <h2 className="text-4xl md:text-5xl font-serif">Recently created</h2>
             <div className="flex gap-2">
                 <button className="p-3 rounded-full border border-gray-200 hover:border-black transition-colors"><ArrowLeft size={18} /></button>
                 <button className="p-3 rounded-full bg-arcade-yellow hover:brightness-95 transition-colors"><ArrowRight size={18} /></button>
             </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REVIEWS.map(review => (
                <div key={review.id} className="flex flex-col">
                    <div className="relative aspect-square rounded-xl overflow-hidden mb-6 bg-gray-100 group">
                        <img 
                            src={review.productImage} 
                            alt="Reviewed Product" 
                            className="w-full h-full object-cover"
                        />
                        {/* Carousel dots simulated */}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1.5">
                            <div className="w-2 h-2 rounded-full bg-white"></div>
                            <div className="w-2 h-2 rounded-full bg-white/50"></div>
                            <div className="w-2 h-2 rounded-full bg-white/50"></div>
                        </div>
                    </div>
                    
                    <div className="space-y-3">
                        <p className="text-sm font-medium">{review.title}</p>
                        <div className="flex text-black text-xs gap-0.5">
                            {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" stroke="none" />)}
                        </div>
                        <blockquote className="font-serif text-lg leading-snug">"{review.text}"</blockquote>
                        <div className="flex items-center gap-2 mt-2">
                             <img src={review.avatar} alt={review.userName} className="w-6 h-6 rounded-full" />
                             <div className="text-xs text-gray-600">
                                <span className="font-medium text-black">{review.userName}</span> ({review.userType})
                             </div>
                        </div>
                        <a href="#" className="text-xs underline text-gray-500 hover:text-black">More reviews</a>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
