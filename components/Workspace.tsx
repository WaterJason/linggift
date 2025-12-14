import React, { useEffect, useState, useRef } from 'react';
import { 
    Heart, Grid2X2, Home, MessageSquare, Plus, Paperclip, 
    Loader2, Send, LayoutGrid, Key
} from 'lucide-react';
import { GoogleGenAI, Type, Schema } from '@google/genai';
import { GeneratedResult } from '../types';

interface WorkspaceProps {
    prompt: string;
    category: string;
    onClose: () => void;
}

interface ChatMessage {
    role: 'user' | 'model';
    text: string;
}

type MobileTab = 'chat' | 'designs';

const Workspace: React.FC<WorkspaceProps> = ({ prompt: initialPrompt, category, onClose }) => {
  const [results, setResults] = useState<GeneratedResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [generatingImages, setGeneratingImages] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("Initializing studio...");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [chatInput, setChatInput] = useState('');
  const [mobileTab, setMobileTab] = useState<MobileTab>('chat');
  const [needsApiKey, setNeedsApiKey] = useState(false);
  
  const hasFetchedRef = useRef(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Check API Key on mount
  useEffect(() => {
      checkApiKey();
  }, []);

  const checkApiKey = async () => {
      if ((window as any).aistudio) {
          const hasKey = await (window as any).aistudio.hasSelectedApiKey();
          setNeedsApiKey(!hasKey);
          if (hasKey && !hasFetchedRef.current) {
              hasFetchedRef.current = true;
              generateDesigns(initialPrompt || `Classic ${category} in Gold`);
          }
      } else {
          // Fallback if not running in the specific AI Studio environment, assume env var exists
          if (!hasFetchedRef.current) {
             hasFetchedRef.current = true;
             generateDesigns(initialPrompt || `Classic ${category} in Gold`);
          }
      }
  };

  const handleConnectApi = async () => {
      if ((window as any).aistudio) {
          try {
            await (window as any).aistudio.openSelectKey();
            // Race condition mitigation: assume success if no error thrown
            setNeedsApiKey(false);
            if (!hasFetchedRef.current) {
                hasFetchedRef.current = true;
                generateDesigns(initialPrompt || `Classic ${category} in Gold`);
            }
          } catch (e) {
              console.error("API Key selection failed", e);
          }
      }
  };

  // Switch to design tab automatically when results arrive if on mobile
  useEffect(() => {
      if (!loading && results.length > 0 && window.innerWidth < 1024) {
          setMobileTab('designs');
      }
  }, [loading, results]);

  // Initialize chat
  useEffect(() => {
     if (messages.length === 0) {
         setMessages([
             { 
                 role: 'model', 
                 text: `Welcome to the Linghua Design Studio. I'm utilizing Gemini Pro to craft your visualization. I've received your request for: "${initialPrompt}". Generating your concepts now...` 
             }
         ]);
     }
  }, []);

  // Auto-scroll chat
  useEffect(() => {
    if (scrollRef.current) {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const generateDesigns = async (currentPrompt: string, isRefinement = false) => {
    try {
        setLoading(true);
        // Create new instance to ensure we get the latest key if it was just selected
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        
        setLoadingMessage(isRefinement ? "Refining design concepts..." : `Analyzing geometry and materials...`);

        // STEP 1: Generate Metadata & Prompts using Flash
        const productSchema: Schema = {
            type: Type.ARRAY,
            items: {
                type: Type.OBJECT,
                properties: {
                    title: { type: Type.STRING, description: "Elegant name of the piece" },
                    price: { type: Type.NUMBER, description: "Price in USD" },
                    imagePrompt: { type: Type.STRING, description: "A highly detailed, photorealistic prompt for an AI image generator. Describe the jewelry piece, specific materials (e.g. '18k Rose Gold', 'Pigeon Blood Ruby'), lighting (studio, softbox), and angle (macro, 45 degree). Background must be pure white or light beige." },
                    rating: { type: Type.NUMBER, description: "Rating 4.5 to 5" },
                    deliveryDate: { type: Type.STRING, description: "Delivery date string" },
                    variantCount: { type: Type.INTEGER, description: "0" }
                },
                required: ["title", "price", "imagePrompt", "rating", "deliveryDate", "variantCount"]
            }
        };

        const systemCtx = `You are the Lead Designer for 'Linghua', a luxury jewelry brand.
        
        TASK:
        Generate 3 distinct design variations based on the user's request.
        
        USER REQUEST:
        "${currentPrompt}"
        
        RULES:
        1. **Brand Aesthetic**: Minimalist, elegant, timeless.
        2. **Materials**: Strictly adhere to the requested metals (Gold, Silver, Platinum, Rose Gold) and gemstones.
        3. **Prompt Engineering**: The 'imagePrompt' you generate must be optimized for a high-end image generation model. Focus on texture, light reflection, and clarity.
        `;

        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            config: {
                systemInstruction: "You are a jewelry manufacturing assistant. Output JSON.",
                responseMimeType: 'application/json',
                responseSchema: productSchema
            },
            contents: systemCtx
        });

        const text = response.text;
        if (!text) throw new Error("No data returned");

        const data = JSON.parse(text);
        
        // Initialize results with placeholders
        const initialResults: GeneratedResult[] = data.map((item: any, index: number) => ({
            ...item,
            makerName: 'Linghua',
            id: `gen-${Date.now()}-${index}`,
            image: '', // Empty initially
            makerLogo: `https://picsum.photos/seed/linghua_logo/50/50`
        }));
        
        setResults(initialResults);
        setLoading(false); // Text phase done
        setGeneratingImages(true); // Image phase starts
        setLoadingMessage("Rendering high-fidelity visualizations...");

        // STEP 2: Generate Images
        const updatedResults = [...initialResults];
        
        // We generate images one by one or in parallel batches to be nice to the API
        for (let i = 0; i < updatedResults.length; i++) {
            try {
                const item = updatedResults[i];
                // Use the metadata's specific prompt
                const imagePrompt = (data[i] as any).imagePrompt;
                let base64Image = null;

                try {
                     // Try Premium Model first
                    const imgResponse = await ai.models.generateContent({
                        model: 'gemini-3-pro-image-preview',
                        contents: {
                            parts: [{ text: imagePrompt }]
                        },
                        config: {
                            imageConfig: {
                                aspectRatio: "1:1",
                                imageSize: "1K"
                            }
                        }
                    });

                    if (imgResponse.candidates?.[0]?.content?.parts) {
                        for (const part of imgResponse.candidates[0].content.parts) {
                            if (part.inlineData) {
                                base64Image = part.inlineData.data;
                                break;
                            }
                        }
                    }

                } catch (premiumError) {
                    console.warn(`Premium generation failed for item ${i} (likely permission/quota), falling back to Flash.`, premiumError);
                    
                    // Fallback to Flash Image
                    // Note: Flash Image does NOT support imageSize, only aspectRatio
                    const fallbackResponse = await ai.models.generateContent({
                        model: 'gemini-2.5-flash-image',
                        contents: {
                            parts: [{ text: imagePrompt }]
                        },
                        config: {
                            imageConfig: {
                                aspectRatio: "1:1"
                            }
                        }
                    });

                    if (fallbackResponse.candidates?.[0]?.content?.parts) {
                        for (const part of fallbackResponse.candidates[0].content.parts) {
                            if (part.inlineData) {
                                base64Image = part.inlineData.data;
                                break;
                            }
                        }
                    }
                }

                if (base64Image) {
                    updatedResults[i].image = `data:image/png;base64,${base64Image}`;
                    setResults([...updatedResults]); // Update state to show image as it arrives
                } else {
                    throw new Error("No image data returned from generation");
                }

            } catch (imgError) {
                console.error(`Failed to generate image for item ${i}`, imgError);
                // Fallback to a placeholder if generation fails
                updatedResults[i].image = `https://picsum.photos/seed/fallback_${i}/500/500`;
                setResults([...updatedResults]);
            }
        }

    } catch (error) {
        console.error("Failed to generate designs", error);
    } finally {
        setLoading(false);
        setGeneratingImages(false);
    }
  };

  const handleSendMessage = async () => {
      if (!chatInput.trim()) return;
      
      const userMsg = chatInput;
      setChatInput('');
      setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
      
      // Trigger refinement
      await generateDesigns(userMsg, true);
      
      setMessages(prev => [...prev, { role: 'model', text: "I've drafted new designs reflecting your feedback. The high-resolution renders are processing now." }]);
  };

  if (needsApiKey) {
      return (
          <div className="fixed inset-0 z-[100] bg-beige-50 flex flex-col items-center justify-center p-6 text-center">
              <div className="bg-white p-12 rounded-3xl shadow-xl max-w-md w-full">
                  <div className="w-16 h-16 bg-arcade-yellow rounded-full flex items-center justify-center mx-auto mb-6">
                      <Key className="w-8 h-8 text-black" />
                  </div>
                  <h2 className="text-3xl font-serif mb-4">Unlock Design Studio</h2>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                      To use the advanced <strong>Gemini 3.0 Pro</strong> image generation features for jewelry rendering, please connect your API key.
                  </p>
                  
                  <div className="space-y-4">
                      <button 
                        onClick={handleConnectApi}
                        className="w-full bg-black text-white py-4 rounded-full font-medium hover:scale-[1.02] transition-transform shadow-lg flex items-center justify-center gap-2"
                      >
                          Connect Google AI Key
                      </button>
                      <button 
                        onClick={onClose}
                        className="text-sm text-gray-500 hover:text-black underline"
                      >
                          Return to Home
                      </button>
                  </div>
                  <p className="mt-8 text-xs text-gray-400">
                      <a href="https://ai.google.dev/gemini-api/docs/billing" target="_blank" rel="noreferrer" className="underline hover:text-black">
                        View Billing Documentation
                      </a>
                  </p>
              </div>
          </div>
      );
  }

  return (
    <div className="min-h-screen bg-beige-50 flex flex-col font-sans">
        {/* Workspace Header */}
        <header className="h-16 bg-white border-b border-gray-100 flex items-center justify-between px-4 sm:px-6 z-20">
             <div className="flex items-center gap-4">
                 <button className="p-2 hover:bg-gray-100 rounded-lg hidden sm:block">
                    <Grid2X2 size={20} />
                 </button>
                 <a href="#" className="text-xl sm:text-2xl font-bold tracking-tight font-serif" onClick={(e) => { e.preventDefault(); onClose(); }}>Linghua Studio</a>
                 
                 {/* Mobile Tab Switcher */}
                 <div className="flex lg:hidden bg-gray-100 p-1 rounded-lg ml-2">
                     <button 
                        onClick={() => setMobileTab('chat')}
                        className={`p-1.5 rounded-md transition-all ${mobileTab === 'chat' ? 'bg-white shadow-sm text-black' : 'text-gray-500'}`}
                     >
                         <MessageSquare size={16} />
                     </button>
                     <button 
                        onClick={() => setMobileTab('designs')}
                        className={`p-1.5 rounded-md transition-all ${mobileTab === 'designs' ? 'bg-white shadow-sm text-black' : 'text-gray-500'}`}
                     >
                         <LayoutGrid size={16} />
                     </button>
                 </div>
             </div>
             
             <div className="flex items-center gap-2 sm:gap-4">
                <button className="p-2 hover:bg-gray-100 rounded-full text-gray-600"><Heart size={20} /></button>
                <button className="w-8 h-8 rounded-full bg-emerald-700 text-white flex items-center justify-center text-xs font-medium">梁</button>
             </div>
        </header>

        <div className="flex-1 flex overflow-hidden relative">
            {/* Sidebar Navigation (Desktop) */}
            <aside className="w-16 bg-white border-r border-gray-100 flex flex-col items-center py-6 gap-6 z-10 hidden sm:flex">
                <button className="p-3 rounded-xl hover:bg-gray-100 text-gray-500 hover:text-black transition-colors" onClick={onClose}>
                    <Home size={22} />
                </button>
                <button className="p-3 rounded-xl hover:bg-gray-100 text-gray-500 hover:text-black transition-colors">
                    <Plus size={22} />
                </button>
                <button className="p-3 rounded-xl bg-gray-100 text-black shadow-inner transition-colors">
                    <MessageSquare size={22} />
                </button>
            </aside>

            {/* Chat Panel */}
            <div className={`
                w-full lg:w-[400px] bg-white border-r border-gray-100 flex flex-col z-10 shadow-sm
                ${mobileTab === 'chat' ? 'flex' : 'hidden lg:flex'}
            `}>
                <div className="p-4 sm:p-6 border-b border-gray-50 flex justify-between items-center">
                    <div>
                        <h2 className="font-bold text-lg font-serif">Linghua Assistant</h2>
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                             <span>Powered by Gemini 3.0</span>
                             <span className="bg-black text-white px-1 py-0.5 text-[9px] rounded font-bold">PRO</span>
                        </div>
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 bg-white" ref={scrollRef}>
                     {/* System Context Header */}
                     <div className="flex gap-4 mb-8">
                         <div className="w-8 h-8 rounded-full bg-emerald-700 text-white flex-shrink-0 flex items-center justify-center text-xs">梁</div>
                         <div className="space-y-1">
                             <div className="text-xs text-gray-400">{category} <span className="w-5 h-5 inline-flex items-center justify-center rounded-full bg-emerald-700 text-white text-[10px] ml-2">梁</span></div>
                         </div>
                     </div>

                     {/* Messages */}
                     {messages.map((msg, idx) => (
                         <div key={idx} className={`flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                             <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center ${msg.role === 'model' ? 'bg-gradient-to-tr from-indigo-500 to-purple-500' : 'bg-gray-200'}`}>
                                 {msg.role === 'user' ? null : <span className="text-[10px] font-bold text-white">AI</span>}
                             </div>
                             <div className={`space-y-2 max-w-[80%] ${msg.role === 'user' ? 'bg-gray-100 p-3 rounded-2xl rounded-tr-sm text-sm' : 'text-sm text-gray-800 leading-relaxed'}`}>
                                 <p>{msg.text}</p>
                             </div>
                         </div>
                     ))}
                     
                     {(loading || generatingImages) && (
                         <div className="flex gap-4">
                             <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center">
                                <Loader2 className="w-4 h-4 text-white animate-spin" />
                             </div>
                             <div className="text-xs text-gray-400 mt-2">{loadingMessage}</div>
                         </div>
                     )}
                </div>

                {/* Chat Input */}
                <div className="p-4 sm:p-6 pt-2 bg-white border-t border-gray-100 sm:border-t-0">
                    <div className="relative">
                        <input 
                            type="text" 
                            value={chatInput}
                            onChange={(e) => setChatInput(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                            placeholder="Describe changes (e.g. 'Add a Sapphire')" 
                            disabled={loading || generatingImages}
                            className="w-full pl-4 pr-24 py-4 bg-white border border-gray-200 rounded-2xl shadow-sm focus:ring-2 focus:ring-black/5 outline-none text-sm sm:text-base disabled:bg-gray-50 disabled:text-gray-400"
                        />
                         <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
                            <button className="p-2 text-gray-400 hover:text-black transition-colors" disabled={loading || generatingImages}>
                                <Paperclip size={18} />
                            </button>
                             <button 
                                onClick={handleSendMessage}
                                disabled={!chatInput.trim() || loading || generatingImages}
                                className="bg-indigo-50 p-2 rounded-lg text-indigo-600 hover:bg-indigo-100 disabled:opacity-50 transition-colors"
                             >
                                <Send size={18} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Results Grid */}
            <div className={`
                flex-1 overflow-y-auto bg-beige-50 p-4 sm:p-8
                ${mobileTab === 'designs' ? 'block' : 'hidden lg:block'}
            `}>
                 {loading && results.length === 0 ? (
                    <div className="h-full flex flex-col items-center justify-center text-gray-400">
                        <Loader2 className="w-10 h-10 animate-spin mb-4 text-arcade-black" />
                        <p className="font-serif text-xl text-gray-600 animate-pulse">{loadingMessage}</p>
                    </div>
                 ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 gap-6 animate-in fade-in duration-500 pb-24 lg:pb-0">
                        {results.map(item => (
                            <div key={item.id} className="bg-transparent flex flex-col group">
                                {/* Image Card */}
                                <div className="relative aspect-square bg-[#e8e6e1] rounded-lg overflow-hidden mb-3 shadow-sm transition-all hover:shadow-md border border-white">
                                    {item.image ? (
                                        <img src={item.image} alt={item.title} className="w-full h-full object-cover animate-in fade-in duration-1000" />
                                    ) : (
                                        <div className="w-full h-full flex flex-col items-center justify-center bg-gray-100">
                                            <Loader2 className="w-8 h-8 text-gray-300 animate-spin mb-2" />
                                            <span className="text-xs text-gray-400 font-medium">Rendering...</span>
                                        </div>
                                    )}
                                    
                                    <button className="absolute top-4 right-4 w-8 h-8 bg-white/60 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors text-gray-600 hover:text-red-500">
                                        <Heart size={16} />
                                    </button>
                                </div>

                                {/* Info */}
                                <div className="flex justify-between items-start px-1">
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <h3 className="font-medium text-gray-900 truncate max-w-[180px]">{item.title}</h3>
                                        </div>
                                        <div className="text-xs text-gray-500 mb-2">Ships by {item.deliveryDate}</div>
                                        <div className="flex items-center gap-2">
                                            <div className="flex flex-col">
                                                <span className="text-[10px] text-gray-400 leading-none">Maker</span>
                                                <span className="text-xs font-medium text-gray-900 flex items-center gap-1">
                                                    {item.makerName} {item.rating > 0 && `★ ${item.rating}`}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-right font-medium text-gray-900">
                                        ${item.price}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                 )}
            </div>
        </div>
    </div>
  );
};

export default Workspace;