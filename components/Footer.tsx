import React from 'react';
import { Instagram, Twitter, MessageCircle } from 'lucide-react';
import { PageView } from '../App';

interface FooterProps {
    onNavClick?: (page: PageView) => void;
    onCreateClick?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onNavClick, onCreateClick }) => {
  return (
    <footer className="bg-arcade-black text-white pt-24 pb-12">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        
        {/* Top Section */}
        <div className="flex flex-col items-center text-center mb-24">
            <h1 className="text-[15vw] leading-none font-serif tracking-tighter mb-8 cursor-pointer" onClick={() => onNavClick?.('HOME')}>Linghua</h1>
            <p className="max-w-2xl text-lg md:text-xl text-gray-300 font-serif leading-relaxed mb-8">
                Timeless jewelry, reimagined by you.
            </p>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-white/10 pt-16 mb-20">
            <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider mb-6 text-gray-400">About Linghua</h3>
                <ul className="space-y-3 text-sm text-gray-300">
                    <li><button onClick={() => onNavClick?.('STORY')} className="hover:text-white text-left">Our Story</button></li>
                    <li><button onClick={() => onNavClick?.('STORY')} className="hover:text-white text-left">Philosophy</button></li>
                </ul>
            </div>
            <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider mb-6 text-gray-400">Customer Care</h3>
                <ul className="space-y-3 text-sm text-gray-300">
                    <li><button className="hover:text-white text-left">Contact Us</button></li>
                    <li><button className="hover:text-white text-left">FAQ</button></li>
                </ul>
            </div>
            <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider mb-6 text-gray-400">Collections</h3>
                <ul className="space-y-3 text-sm text-gray-300">
                    <li><button onClick={() => onNavClick?.('COLLECTIONS')} className="hover:text-white text-left">Signature Series</button></li>
                    <li><button onClick={() => onNavClick?.('COLLECTIONS')} className="hover:text-white text-left">Bridal</button></li>
                    <li><button onClick={() => onNavClick?.('COLLECTIONS')} className="hover:text-white text-left">Modern Heritage</button></li>
                </ul>
            </div>
            <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider mb-6 text-gray-400">Services</h3>
                <ul className="space-y-3 text-sm text-gray-300">
                    <li><button onClick={onCreateClick} className="hover:text-white text-left">Custom Design</button></li>
                    <li><button onClick={() => onNavClick?.('GIFTS')} className="hover:text-white text-left">Gift Cards</button></li>
                </ul>
            </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center space-y-6">
            <div className="flex space-x-6">
                <button className="text-gray-400 hover:text-white"><Instagram size={20} /></button>
                <button className="text-gray-400 hover:text-white"><span className="text-xl font-bold">X</span></button>
                <button className="text-gray-400 hover:text-white"><MessageCircle size={20} /></button>
            </div>

            <div className="text-center text-xs text-gray-500 space-y-2">
                <p>©2025 Linghua Jewelry Inc.</p>
                <div className="space-x-4">
                    <button className="hover:text-gray-300">Privacy Policy</button>
                    <button className="hover:text-gray-300">Terms of Service</button>
                </div>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
