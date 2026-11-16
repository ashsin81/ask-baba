import React from 'react';
import { UserProfile, Language } from '../types';
import { Moon, Sun, Sparkles, Volume2, Bell } from 'lucide-react';
import { sound } from '../utils/audio';

interface HeaderProps {
  profile: UserProfile;
  currentLanguage: Language;
  onSelectLanguage: (lang: Language) => void;
  onOpenAskBaba: () => void;
  onToggleTheme: () => void;
  onOpenNotifications?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  profile,
  currentLanguage,
  onSelectLanguage,
  onOpenAskBaba,
  onToggleTheme,
  onOpenNotifications
}) => {
  const isDark = profile.theme === 'dark' || profile.theme === 'midnight';

  const handlePlayBell = () => {
    sound.playTibetanBowl();
  };

  return (
    <header className="sticky top-0 z-40 bg-[#F8EEE4]/90 dark:bg-[#1E192F]/95 backdrop-blur-md border-b border-[#E8DCCF] dark:border-[#453C66]/50 px-3.5 py-2.5 transition-colors duration-300 shadow-sm">
      <div className="max-w-md mx-auto flex items-center justify-between gap-2">
        {/* Brand identity: Luminous Soul Point above Minimal Lotus */}
        <div
          onClick={onOpenAskBaba}
          className="flex items-center gap-2.5 cursor-pointer group select-none shrink-0"
          title="Ask Baba — Track · Reflect · Transform"
        >
          <div className="relative w-9 h-9 rounded-2xl bg-gradient-to-tr from-[#711D35] via-[#8A2C3F] to-[#B68A45] p-0.5 shadow-sm group-hover:scale-105 transition-transform">
            <div className="w-full h-full rounded-[14px] bg-[#F8EEE4] dark:bg-[#27223B] flex items-center justify-center relative overflow-hidden">
              {/* Soul Point of Light with glow */}
              <div className="absolute top-1.5 w-2 h-2 rounded-full bg-white shadow-[0_0_8px_#FFF,0_0_12px_#F59E0B] animate-pulse" />
              {/* Minimal Lotus base SVG */}
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 text-[#B68A45] fill-current translate-y-1"
              >
                <path d="M12 5.5c-1 3-3 4.5-5 5.5 2 .5 4 0 5-1.5 1 1.5 3 2 5 1.5-2-1-4-2.5-5-5.5zm-6 6.5c-2.5 1-4 3.5-4 6 2.5 0 5-1.5 6-3.5-1-.5-1.5-1.5-2-2.5zm12 0c-.5 1-1 2-2 2.5 1 2 3.5 3.5 6 3.5 0-2.5-1.5-5-4-6zm-6 2c-1.8 1.5-3.5 2-6 2 2 2 4.5 2.5 6 1 1.5 1.5 4 1 6-1-2.5 0-4.2-.5-6-2z" />
              </svg>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-1.5">
              <h1 className="font-serif font-black tracking-wider text-sm sm:text-base text-[#711D35] dark:text-[#E8DCCF] leading-none">
                ASK BABA
              </h1>
              <span className="text-[9px] font-bold px-1.5 py-0.2 rounded-full bg-[#711D35]/10 dark:bg-amber-400/20 text-[#711D35] dark:text-amber-300 border border-[#711D35]/20 dark:border-amber-400/30">
                1.0
              </span>
            </div>
            <p className="text-[9.5px] text-[#6B6363] dark:text-white/60 font-medium tracking-tight">
              Track · Reflect · Transform
            </p>
          </div>
        </div>

        {/* Action Bar: Language Switcher Buttons + Audio Chime + Theme Mode */}
        <div className="flex items-center gap-1.5">
          {/* Quick Language Switcher: EN | हिन्दी | ਪੰਜਾਬੀ */}
          <div className="flex items-center bg-white/70 dark:bg-[#27223B]/80 p-0.5 rounded-full border border-[#D9B8A5]/60 dark:border-[#453C66] shadow-xs">
            <button
              onClick={() => {
                sound.playSoftClick();
                onSelectLanguage('en');
              }}
              title="Switch to English"
              className={`px-2 py-0.5 rounded-full text-[10px] font-medium transition-all ${
                currentLanguage === 'en'
                  ? 'bg-[#711D35] text-white shadow-xs font-bold'
                  : 'text-[#6B6363] dark:text-white/70 hover:text-[#302B2B] dark:hover:text-white'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => {
                sound.playSoftClick();
                onSelectLanguage('hi');
              }}
              title="हिन्दी में बदलें (Switch to Hindi)"
              className={`px-2 py-0.5 rounded-full text-[10px] font-hindi transition-all ${
                currentLanguage === 'hi'
                  ? 'bg-[#711D35] text-white shadow-xs font-bold'
                  : 'text-[#6B6363] dark:text-white/70 hover:text-[#302B2B] dark:hover:text-white'
              }`}
            >
              हिन्दी
            </button>
            <button
              onClick={() => {
                sound.playSoftClick();
                onSelectLanguage('pa');
              }}
              title="ਪੰਜਾਬੀ ਵਿੱਚ ਬਦਲੋ (Switch to Punjabi)"
              className={`px-2 py-0.5 rounded-full text-[10px] transition-all ${
                currentLanguage === 'pa'
                  ? 'bg-[#711D35] text-white shadow-xs font-bold'
                  : 'text-[#6B6363] dark:text-white/70 hover:text-[#302B2B] dark:hover:text-white'
              }`}
            >
              ਪੰਜਾਬੀ
            </button>
          </div>

          {/* Audio Chime Bell */}
          <button
            onClick={handlePlayBell}
            title="Mindfulness Bell (शांति नाद / ਸ਼ਾਂਤੀ ਨਾਦ)"
            className="p-1.5 rounded-full text-[#711D35] dark:text-amber-300 hover:bg-[#711D35]/10 dark:hover:bg-amber-400/10 transition-colors"
          >
            <Volume2 className="w-4 h-4" />
          </button>

          {/* Theme Mode Toggle (Ivory Day vs Midnight Meditation) */}
          <button
            onClick={() => {
              sound.playSoftClick();
              onToggleTheme();
            }}
            title={isDark ? "Day Mode (Ivory)" : "Meditation Night Mode (Midnight)"}
            className="p-1.5 rounded-full text-[#711D35] dark:text-amber-300 hover:bg-[#711D35]/10 dark:hover:bg-amber-400/10 transition-colors"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </header>
  );
};
