import React from 'react';
import { Home, BarChart2, Sparkles, Compass, User } from 'lucide-react';
import { AskBabaTab } from '../../types';

interface AskBabaNavbarProps {
  activeTab: AskBabaTab;
  onSelectTab: (tab: AskBabaTab) => void;
  dark?: boolean;
}

export const AskBabaNavbar: React.FC<AskBabaNavbarProps> = ({
  activeTab,
  onSelectTab,
  dark = false
}) => {
  const tabs: { id: AskBabaTab; label: string; icon: React.FC<{ className?: string }> }[] = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'journey', label: 'Journey', icon: BarChart2 },
    { id: 'meditate', label: 'Meditate', icon: Sparkles },
    { id: 'discover', label: 'Discover', icon: Compass },
    { id: 'you', label: 'You', icon: User }
  ];

  return (
    <nav
      className={`w-full max-w-md mx-auto fixed bottom-0 left-0 right-0 z-40 transition-colors duration-300 ${
        dark
          ? 'bg-[#1E192F]/95 border-t border-[#453C66]/40 backdrop-blur-lg text-white'
          : 'bg-[#FDFCFA]/95 border-t border-[#E8DCCF] backdrop-blur-lg text-[#302B2B]'
      } shadow-[0_-4px_20px_rgba(0,0,0,0.06)]`}
    >
      <div className="flex items-center justify-around px-2 py-2">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          const Icon = tab.icon;

          return (
            <button
              key={tab.id}
              onClick={() => onSelectTab(tab.id)}
              className="flex flex-col items-center justify-center flex-1 py-1 relative group transition-transform active:scale-95"
            >
              {/* Active glow dot */}
              {isActive && (
                <div
                  className={`w-1 h-1 rounded-full absolute -top-1.5 ${
                    dark ? 'bg-amber-400' : 'bg-[#711D35]'
                  } shadow-sm animate-pulse`}
                />
              )}

              <div
                className={`p-1.5 rounded-xl transition-all duration-200 ${
                  isActive
                    ? dark
                      ? 'text-amber-400 bg-amber-400/10'
                      : 'text-[#711D35] bg-[#711D35]/10 font-bold scale-105'
                    : dark
                    ? 'text-white/50 hover:text-white/80'
                    : 'text-[#8E8686] hover:text-[#302B2B]'
                }`}
              >
                <Icon className="w-5 h-5" />
              </div>

              <span
                className={`text-[11px] tracking-tight transition-colors duration-200 ${
                  isActive
                    ? dark
                      ? 'text-amber-300 font-semibold'
                      : 'text-[#711D35] font-bold'
                    : dark
                    ? 'text-white/50'
                    : 'text-[#8E8686]'
                }`}
              >
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
