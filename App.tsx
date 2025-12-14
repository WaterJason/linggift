import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import CategoryRow from './components/CategoryRow';
import FeaturedCollection from './components/FeaturedCollection';
import Testimonials from './components/Testimonials';
import ExploreGrid from './components/ExploreGrid';
import CreateFlow from './components/CreateFlow';
import Workspace from './components/Workspace';
import Collections from './components/Collections';
import OurStory from './components/OurStory';
import Gifts from './components/Gifts';

export type PageView = 'HOME' | 'WORKSPACE' | 'COLLECTIONS' | 'STORY' | 'GIFTS';

function App() {
  const [view, setView] = useState<PageView>('HOME');
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [workspaceData, setWorkspaceData] = useState({ prompt: '', category: '' });

  const handleCreateOpen = () => {
    setIsCreateOpen(true);
  };

  const handleCreateClose = () => {
    setIsCreateOpen(false);
  };

  const handleCreateComplete = (prompt: string, category: string) => {
      setWorkspaceData({ prompt, category });
      setIsCreateOpen(false);
      setView('WORKSPACE');
      window.scrollTo(0, 0);
  };

  const handleExitWorkspace = () => {
      setView('HOME');
      window.scrollTo(0, 0);
  };

  const handleNavClick = (page: PageView) => {
      setView(page);
      window.scrollTo(0, 0);
  };

  if (view === 'WORKSPACE') {
      return (
          <Workspace 
             prompt={workspaceData.prompt} 
             category={workspaceData.category} 
             onClose={handleExitWorkspace}
          />
      );
  }

  return (
    <div className="min-h-screen font-sans bg-beige-100 text-arcade-black selection:bg-arcade-yellow selection:text-black">
      <Header 
        onCreateClick={handleCreateOpen} 
        onNavClick={handleNavClick}
        onLogoClick={() => handleNavClick('HOME')}
      />
      
      <main>
        {view === 'HOME' && (
            <>
                <Hero onCreateClick={handleCreateOpen} />
                <HowItWorks />
                <CategoryRow onCreateClick={handleCreateOpen} />
                <FeaturedCollection onNavClick={handleNavClick} />
                <Testimonials />
                <ExploreGrid />
            </>
        )}
        
        {view === 'COLLECTIONS' && <Collections onCreateClick={handleCreateOpen} />}
        {view === 'STORY' && <OurStory />}
        {view === 'GIFTS' && <Gifts onCreateClick={handleCreateOpen} onNavClick={handleNavClick} />}
      </main>

      <Footer onNavClick={handleNavClick} onCreateClick={handleCreateOpen} />
      
      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-40">
          <button 
              onClick={handleCreateOpen}
              className="w-12 h-12 bg-indigo-900 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-105 transition-transform"
          >
              <span className="text-xl">✨</span>
          </button>
      </div>

      <CreateFlow 
        isOpen={isCreateOpen} 
        onClose={handleCreateClose} 
        onComplete={handleCreateComplete} 
      />
    </div>
  );
}

export default App;