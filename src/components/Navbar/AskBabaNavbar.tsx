import React from 'react';
import { Home, BarChart2, Sparkles, Compass, User } from 'lucide-react';
import { AskBabaTab, Language } from '../../types';
import { getTranslation } from '../../utils/translations';
import { sound } from '../../utils/audio';

interface AskBabaNavbarProps {
  activeTab: AskBabaTab;
  onSelectTab: (tab: AskBabaTab) => void;
  language: Language;
  dark?: boolean;
}

export const AskBabaNavbar: React.FC<AskBabaNavbarProps> = ({
  activeTab,
  onSelectTab,
  language,
  dark = false
}) => {
  const t = getTranslation(language);

  const tabs: { id: AskBabaTab; label: string; icon: React.FC<{ className?: string }> }[] = [
    { id: 'home', label: t.nav.home, icon: Home },
    { id: 'journey', label: t.nav.journey, icon: BarChart2 },
    { id: 'meditate', label: t.nav.meditate, icon: Sparkles },
    { id: 'discover', label: t.nav.discover, icon: Compass },
    { id: 'you', label: t.nav.you, icon: User }
  ];

  return (
    <nav
      className={`w-full max-w-md mx-auto fixed bottom-0 left-0 right-0 z-30 transition-colors duration-300 ${
        dark
          ? 'bg-[#1E192F]/95 border-t border-[#453C66]/50 backdrop-blur-lg text-white'
          : 'bg-[#F8EEE4]/95 border-t border-[#E8DCCF] backdrop-blur-lg text-[#302B2B]'
      } shadow-[0_-4px_20px_rgba(0,0,0,0.06)]`}
    >
      <div className="flex items-center justify-around px-2 py-2">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          const Icon = tab.icon;

          return (
            <button
              key={tab.id}
              onClick={() => {
                sound.playSoftClick();
                onSelectTab(tab.id);
              }}
              className="flex flex-col items-center justify-center flex-1 py-1 relative group transition-transform active:scale-95"
            >
              {/* Active glow dot */}
              {isActive && (
                <div
                  className={`w-1.5 h-1.5 rounded-full absolute -top-1 ${
                    dark ? 'bg-amber-400' : 'bg-[#711D35]'
                  } shadow-sm animate-pulse`}
                />
              )}

              <div
                className={`p-1.5 rounded-xl transition-all duration-200 ${
                  isActive
                    ? dark
                      ? 'text-amber-400 bg-amber-400/10 font-bold scale-105'
                      : 'text-[#711D35] bg-[#711D35]/10 font-bold scale-105'
                    : dark
                    ? 'text-white/50 hover:text-white/80'
                    : 'text-[#6B6363] hover:text-[#302B2B]'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'stroke-[2.4]' : 'stroke-[1.8]'}`} />
              </div>

              <span
                className={`text-[10.5px] tracking-tight transition-colors duration-200 ${
                  isActive
                    ? dark
                      ? 'text-amber-300 font-bold'
                      : 'text-[#711D35] font-bold'
                    : dark
                    ? 'text-white/50'
                    : 'text-[#6B6363]'
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
