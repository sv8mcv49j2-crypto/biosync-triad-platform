import React from 'react';
import { Zap, ChevronRight, UserCircle } from 'lucide-react';

interface HeaderProps {
  onNavigate: (view: any) => void;
  currentView: string;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, currentView }) => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div 
          className="flex items-center gap-2 cursor-pointer" 
          onClick={() => onNavigate('landing')}
        >
          <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
            <Zap className="text-white" size={20} />
          </div>
          <span className="text-xl font-bold tracking-tight">BioSync Triad</span>
        </div>
        <nav className="flex gap-6 text-sm font-medium text-gray-600 items-center">
          <button 
            onClick={() => onNavigate('technology')}
            className={`hover:text-purple-600 hidden md:block ${currentView === 'technology' ? 'text-purple-600' : ''}`}
          >
            Technology
          </button>
          <button 
            onClick={() => onNavigate('solutions')}
            className={`hover:text-purple-600 hidden md:block ${currentView === 'solutions' ? 'text-purple-600' : ''}`}
          >
            Solutions
          </button>
          <button 
            onClick={() => onNavigate('learn-more')}
            className={`hover:text-purple-600 hidden md:block ${currentView === 'learn-more' ? 'text-purple-600' : ''}`}
          >
            Learn More
          </button>
          <button 
            onClick={() => onNavigate('provider')}
            className="text-gray-600 hover:text-purple-600 font-medium flex items-center gap-1.5"
          >
            <UserCircle size={18} />
            Provider Portal
          </button>
          <button 
            onClick={() => onNavigate('signup')}
            className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-2"
          >
            Get Started
            <ChevronRight size={16} />
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
