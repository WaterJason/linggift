import React, { useState, useRef } from 'react';
import { X, MessageCircle, ChevronLeft, ChevronRight, Image as ImageIcon, Sparkles, Camera, Plus, Check } from 'lucide-react';
import { CREATE_OPTS, DESIGN_STYLES } from '../constants';

interface CreateFlowProps {
  isOpen: boolean;
  onClose: () => void;
  onComplete: (prompt: string, category: string) => void;
}

type CreateStep = 'CATEGORY' | 'DESIGN';

const CreateFlow: React.FC<CreateFlowProps> = ({ isOpen, onClose, onComplete }) => {
  const [step, setStep] = useState<CreateStep>('CATEGORY');
  // Hardcoded to Jewelry
  const selectedCategory = 'Jewelry';
  const [selectedSubCategory, setSelectedSubCategory] = useState<string | null>(null);
  const [prompt, setPrompt] = useState('');
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);
  
  const stylesScrollRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  const handleSubCategorySelect = (name: string) => {
    setSelectedSubCategory(name);
    setStep('DESIGN');
  };

  const handleConciergeClick = () => {
    setSelectedSubCategory('Custom Piece');
    setStep('DESIGN');
  }

  const handleBack = () => {
    if (step === 'DESIGN') {
      setStep('CATEGORY');
      setSelectedSubCategory(null);
      setSelectedMaterials([]);
      setPrompt('');
    }
  };
  
  const handleMaterialClick = (materialName: string) => {
      // Toggle selection
      let newMaterials;
      if (selectedMaterials.includes(materialName)) {
        newMaterials = selectedMaterials.filter(s => s !== materialName);
      } else {
        // Allow multiple colors? Let's say yes, like "Gold and Emerald"
        newMaterials = [...selectedMaterials, materialName];
      }
      setSelectedMaterials(newMaterials);
      
      // Update prompt: "Classic [Item] in [Color/Material]"
      const materialsText = newMaterials.length > 0 ? `${newMaterials.join(' and ')}` : '';
      
      if (materialsText) {
          setPrompt(`Classic ${selectedSubCategory || 'Jewelry'} in ${materialsText}`);
      } else {
          setPrompt(`Classic ${selectedSubCategory || 'Jewelry'}`);
      }
  };

  const scrollStyles = (direction: 'left' | 'right') => {
      if (stylesScrollRef.current) {
          const scrollAmount = 300;
          stylesScrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
      }
  }

  // Content for Step 1: Category Selection (Now just Jewelry Subcategories)
  const renderCategorySelection = () => (
    <div className="w-full max-w-4xl mx-auto px-6 py-12 flex flex-col items-center animate-in fade-in zoom-in-95 duration-200">
        <h2 className="text-4xl md:text-5xl font-serif mb-6 text-center">Design your Jewelry</h2>
        <p className="text-gray-500 mb-10 text-center">Select a classic piece to customize:</p>
        
        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-3xl">
            {CREATE_OPTS.map(opt => (
                <div 
                    key={opt.id} 
                    className="flex flex-col items-center group cursor-pointer"
                    onClick={() => handleSubCategorySelect(opt.name)}
                >
                    <div className="aspect-square w-full rounded-2xl overflow-hidden mb-4 relative shadow-sm group-hover:shadow-md transition-shadow bg-gray-50">
                        <img src={opt.image} alt={opt.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <span className="text-lg font-medium group-hover:text-black transition-colors">{opt.name}</span>
                </div>
            ))}
        </div>

        {/* Floating Concierge Button */}
        <div className="mt-16">
             <button 
                onClick={handleConciergeClick}
                className="bg-zinc-700 text-white px-6 py-3 rounded-full flex items-center gap-3 hover:bg-black transition-colors shadow-lg"
            >
                <MessageCircle size={20} />
                <span>or chat with our jewelry expert</span>
             </button>
        </div>
    </div>
  );

  // Content for Step 2: Design Input (Color Selection)
  const renderDesignInput = () => (
      <div className="w-full h-full flex flex-col animate-in slide-in-from-right-10 duration-300">
        {/* Step Header */}
        <div className="flex items-center justify-between px-8 py-6">
            <button onClick={handleBack} className="flex items-center gap-1 text-sm font-medium bg-gray-100 px-4 py-2 rounded-full hover:bg-gray-200 transition-colors">
                <ChevronLeft size={16} /> Back
            </button>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <X size={24} />
            </button>
        </div>

        <div className="flex-1 overflow-y-auto no-scrollbar">
            <div className="max-w-5xl mx-auto px-6 pb-24">
                <div className="text-center mb-10">
                    <h2 className="text-4xl md:text-5xl font-serif mb-3">Customize your {selectedSubCategory}</h2>
                    <p className="text-gray-500">Select materials and colors to update the classic look.</p>
                </div>

                {/* Style/Material Selector */}
                <div className="mb-10">
                    <p className="mb-4 text-gray-700 font-medium text-center">Choose Palette:</p>
                    <div className="relative group max-w-4xl mx-auto">
                         <button 
                            onClick={() => scrollStyles('left')}
                            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                            <ChevronLeft size={16} />
                        </button>
                        <div 
                            ref={stylesScrollRef}
                            className="flex gap-4 overflow-x-auto no-scrollbar py-2 px-1 snap-x justify-start md:justify-center"
                        >
                            {DESIGN_STYLES.map(style => {
                                const isSelected = selectedMaterials.includes(style.name);
                                return (
                                    <div 
                                        key={style.id} 
                                        className="flex flex-col items-center gap-2 min-w-[100px] cursor-pointer snap-start transition-all"
                                        onClick={() => handleMaterialClick(style.name)}
                                    >
                                        <div className={`w-20 h-20 rounded-full overflow-hidden bg-gray-100 relative transition-all ${isSelected ? 'ring-4 ring-arcade-black scale-105' : 'hover:opacity-80'}`}>
                                            <img src={style.image} alt={style.name} className="w-full h-full object-cover" />
                                            {isSelected && (
                                                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                                                    <div className="bg-black text-white rounded-full p-1">
                                                        <Check size={14} />
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                        <span className={`text-xs text-center font-medium leading-tight max-w-[100px] ${isSelected ? 'text-black font-bold' : 'text-gray-600'}`}>{style.name}</span>
                                    </div>
                                )
                            })}
                        </div>
                         <button 
                            onClick={() => scrollStyles('right')}
                            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                            <ChevronRight size={16} />
                        </button>
                    </div>
                </div>
            </div>
        </div>

        {/* Bottom Input Area */}
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-white via-white to-transparent">
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 p-2">
                <textarea 
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Describe the colors and materials you want..."
                    className="w-full resize-none p-4 outline-none text-lg font-serif placeholder:text-gray-300 min-h-[60px]"
                />
                <div className="flex justify-between items-center px-2 pb-2">
                    <button className="p-2 hover:bg-gray-100 rounded-lg text-gray-400 hover:text-black transition-colors">
                        <ImageIcon size={24} />
                    </button>
                    <button 
                        onClick={() => onComplete(prompt, selectedSubCategory || 'Jewelry')}
                        className="bg-arcade-yellow text-black px-8 py-2.5 rounded-full font-medium flex items-center gap-2 hover:brightness-95 transition-all shadow-sm"
                    >
                        <span className="text-lg">✦</span> Create
                    </button>
                </div>
            </div>
        </div>
      </div>
  );

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-white/95 backdrop-blur-sm" onClick={onClose} />
      
      {/* Modal Content */}
      <div className="relative w-full h-full md:w-[95vw] md:h-[90vh] bg-white md:rounded-3xl md:shadow-2xl overflow-hidden flex flex-col">
          {step === 'CATEGORY' ? (
              <>
                 <button onClick={onClose} className="absolute top-6 right-6 p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors z-10">
                    <X size={24} />
                </button>
                <div className="flex-1 overflow-y-auto no-scrollbar flex items-center justify-center">
                     {renderCategorySelection()}
                </div>
              </>
          ) : (
             renderDesignInput()
          )}
      </div>
    </div>
  );
};

export default CreateFlow;
