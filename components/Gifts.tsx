import React from 'react';
import { Gift } from 'lucide-react';
import { PageView } from '../App';

interface GiftsProps {
    onCreateClick?: () => void;
    onNavClick?: (page: PageView) => void;
}

const Gifts: React.FC<GiftsProps> = ({ onCreateClick, onNavClick }) => {
  return (
    <div className="animate-in fade-in duration-500">
       <div className="bg-zinc-900 text-white py-24 px-6 text-center relative overflow-hidden">
            <div className="relative z-10">
                <span className="inline-block p-3 bg-white/10 rounded-full mb-6 backdrop-blur-sm">
                    <Gift size={32} />
                </span>
                <h1 className="text-5xl md:text-7xl font-serif mb-6">The Art of Gifting</h1>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto font-serif mb-8">
                    Create a gift that tells their story. Nothing says "I know you" like a piece designed specifically for them.
                </p>
                <button 
                    onClick={onCreateClick}
                    className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors"
                >
                    Design a Custom Gift
                </button>
            </div>
            {/* Background Texture */}
            <img src="https://picsum.photos/seed/gift_bg/1600/900" className="absolute inset-0 w-full h-full object-cover opacity-20" alt="" />
       </div>

       <div className="max-w-[1600px] mx-auto px-6 py-24">
           {/* Gift Categories */}
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
               <div 
                    onClick={() => onNavClick?.('COLLECTIONS')}
                    className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center cursor-pointer hover:shadow-md transition-shadow"
                >
                   <img src="https://picsum.photos/seed/gift_anniversary/400/400" className="w-32 h-32 rounded-full object-cover mb-6" alt="Anniversary" />
                   <h3 className="text-2xl font-serif mb-2">Anniversary</h3>
                   <p className="text-gray-500 mb-6">Mark the milestone with gemstones that match your years together.</p>
                   <span className="text-sm font-medium underline">Shop Anniversary</span>
               </div>
               <div 
                    onClick={() => onNavClick?.('COLLECTIONS')}
                    className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center cursor-pointer hover:shadow-md transition-shadow"
                >
                   <img src="https://picsum.photos/seed/gift_birthday/400/400" className="w-32 h-32 rounded-full object-cover mb-6" alt="Birthday" />
                   <h3 className="text-2xl font-serif mb-2">Birthday</h3>
                   <p className="text-gray-500 mb-6">Birthstone jewelry, reimagined with a modern twist.</p>
                   <span className="text-sm font-medium underline">Shop Birthday</span>
               </div>
               <div 
                    onClick={() => onNavClick?.('COLLECTIONS')}
                    className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center cursor-pointer hover:shadow-md transition-shadow"
                >
                   <img src="https://picsum.photos/seed/gift_justbecause/400/400" className="w-32 h-32 rounded-full object-cover mb-6" alt="Just Because" />
                   <h3 className="text-2xl font-serif mb-2">Just Because</h3>
                   <p className="text-gray-500 mb-6">Small luxuries to show you care, any day of the year.</p>
                   <span className="text-sm font-medium underline">Shop Gifts Under $500</span>
               </div>
           </div>

            {/* Gift Card Section */}
           <div className="bg-beige-200 rounded-2xl p-8 md:p-16 flex flex-col md:flex-row items-center gap-12">
               <div className="flex-1 space-y-6">
                   <h2 className="text-4xl font-serif">Not sure what they'd like?</h2>
                   <p className="text-lg text-gray-700">
                       Give the gift of creativity. The Linghua Digital Gift Card allows your loved one to 
                       experience our AI design studio and create their own dream piece.
                   </p>
                   <div className="flex gap-4">
                       <button className="bg-black text-white px-6 py-3 rounded-full hover:opacity-80 transition-opacity">Buy Gift Card</button>
                   </div>
               </div>
               <div className="flex-1 relative">
                   <div className="bg-white p-8 rounded-xl shadow-xl rotate-3 transform max-w-md mx-auto">
                       <div className="flex justify-between items-start mb-12">
                           <span className="font-serif font-bold text-2xl">Linghua</span>
                           <span className="text-xs bg-black text-white px-2 py-1 rounded">GIFT CARD</span>
                       </div>
                       <div className="text-right">
                           <div className="text-sm text-gray-400">Value</div>
                           <div className="text-3xl font-mono">$500.00</div>
                       </div>
                   </div>
               </div>
           </div>
       </div>
    </div>
  );
};

export default Gifts;