import React from 'react';
import { Home, Moon, Circle, Music } from 'lucide-react';

export type SleekNavTab = 'day' | 'night' | 'ai' | 'music';

interface SleekBottomNavProps {
  activeTab: SleekNavTab;
  onSelectTab: (tab: SleekNavTab) => void;
}

export const SleekBottomNav: React.FC<SleekBottomNavProps> = ({
  activeTab,
  onSelectTab
}) => {
  const navItems: { id: SleekNavTab; icon: React.FC<{ className?: string }> }[] = [
    { id: 'day', icon: Home },
    { id: 'night', icon: Moon },
    { id: 'ai', icon: Circle },
    { id: 'music', icon: Music }
  ];

  return (
    <div className="fixed bottom-4 left-0 right-0 max-w-sm mx-auto px-5 z-40">
      <nav className="w-full bg-[#0B111E]/95 backdrop-blur-xl border border-white/10 rounded-full py-3 px-6 shadow-2xl flex items-center justify-around">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          const Icon = item.icon;

          return (
            <button
              key={item.id}
              onClick={() => onSelectTab(item.id)}
              aria-label={item.id}
              className="flex flex-col items-center justify-center relative p-2 group transition transform active:scale-90"
            >
              <Icon
                className={`w-6 h-6 transition-colors duration-200 ${
                  isActive
                    ? 'text-white stroke-[2.2]'
                    : 'text-slate-400 hover:text-slate-200 stroke-[1.8]'
                }`}
              />

              {/* Glowing Yellow/Gold Indicator Dot beneath active item (Exact mockup!) */}
              {isActive && (
                <span className="w-1.5 h-1.5 rounded-full bg-[#F6C90E] shadow-[0_0_8px_#F6C90E] absolute -bottom-1 transition-all duration-300" />
              )}
            </button>
          );
        })}
      </nav>
    </div>
  );
};
