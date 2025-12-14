import React from 'react';
import { Search, Heart, ShoppingBag } from 'lucide-react';
import { PageView } from '../App';

interface HeaderProps {
  onCreateClick?: () => void;
  onNavClick?: (page: PageView) => void;
  onLogoClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onCreateClick, onNavClick, onLogoClick }) => {
  return (
    <header className="sticky top-0 z-50 bg-beige-100/90 backdrop-blur-sm border-b border-transparent transition-all duration-300">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-8">
            <a href="#" onClick={(e) => { e.preventDefault(); onLogoClick?.(); }} className="text-3xl font-serif font-bold tracking-tight">Linghua</a>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-6 ml-8 text-sm font-medium text-gray-600">
                <button onClick={() => onNavClick?.('COLLECTIONS')} className="hover:text-black transition-colors">Collections</button>
                <button onClick={() => onNavClick?.('STORY')} className="hover:text-black transition-colors">Our Story</button>
                <button onClick={() => onNavClick?.('GIFTS')} className="hover:text-black transition-colors">Gifts</button>
            </div>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-xl mx-4 hidden sm:block">
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-11 pr-32 py-2.5 rounded-full bg-white border-0 shadow-[0_2px_8px_rgba(0,0,0,0.04)] ring-1 ring-inset ring-gray-200 focus:ring-2 focus:ring-inset focus:ring-black/10 sm:text-sm sm:leading-6 transition-shadow"
              placeholder="Search Linghua..."
            />
            <div className="absolute inset-y-0 right-1 flex items-center gap-2">
                <span className="text-gray-300">or</span>
                <button 
                    onClick={onCreateClick}
                    className="bg-arcade-yellow text-black font-medium text-xs px-4 py-1.5 rounded-full hover:brightness-95 transition-all flex items-center gap-1"
                >
                    <span className="text-[10px] transform rotate-45">✦</span> Design
                </button>
            </div>
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2 sm:gap-4">
          <button className="p-2 text-gray-600 hover:text-black hover:bg-black/5 rounded-full transition-colors">
            <Heart size={20} />
          </button>
          <button className="p-2 text-gray-600 hover:text-black hover:bg-black/5 rounded-full transition-colors">
            <ShoppingBag size={20} />
          </button>
          <button className="p-1 rounded-full bg-emerald-700 text-white hover:opacity-90 transition-opacity">
            <div className="w-8 h-8 flex items-center justify-center font-medium text-xs">
              <span className="transform -rotate-12">梁</span>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;