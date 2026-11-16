import React from 'react';
import { UserProfile } from '../types';
import { Crown, ShieldAlert, Volume2, Moon, Sun, Type } from 'lucide-react';
import { sound } from '../utils/audio';

interface HeaderProps {
  profile: UserProfile;
  onOpenPassport: () => void;
  onOpenRescuePass: () => void;
  onToggleTheme: () => void;
  onToggleFontScale?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  profile,
  onOpenPassport,
  onOpenRescuePass,
  onToggleTheme,
  onToggleFontScale,
}) => {
  const isDark = profile.theme === 'dark';

  const handlePlayBell = () => {
    sound.playTibetanBowl();
  };

  return (
    <header className="sticky top-0 z-30 bg-white/85 dark:bg-[#0B111E]/90 backdrop-blur-xl border-b border-slate-200/80 dark:border-slate-800/80 px-3.5 py-2.5 transition-all duration-300 shadow-sm dark:shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
      <div className="max-w-md mx-auto flex items-center justify-between">
        {/* Brand identity: Crown Emblem & Title */}
        <div
          onClick={onOpenPassport}
          className="flex items-center gap-2.5 cursor-pointer group select-none"
        >
          {profile.avatarUrl ? (
            <img
              src={profile.avatarUrl}
              alt="Avatar"
              className="w-9 h-9 rounded-2xl object-cover border border-amber-400/80 dark:border-amber-400 shadow-sm group-hover:scale-105 transition-transform"
            />
          ) : (
            <div className="w-9 h-9 rounded-2xl bg-gradient-to-tr from-emerald-600 via-amber-500 to-rose-600 p-0.5 shadow-sm group-hover:scale-105 transition-transform">
              <div className="w-full h-full rounded-[14px] bg-white dark:bg-[#121826] flex items-center justify-center">
                <Crown className="w-4 h-4 text-amber-500 dark:text-amber-300" />
              </div>
            </div>
          )}
          <div>
            <div className="flex items-center gap-1.5">
              <h1 className="font-serif font-black tracking-widest text-xs sm:text-sm text-slate-900 dark:text-amber-100 leading-none">
                ROYAL PASSPORT
              </h1>
              <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-300/40 dark:border-emerald-500/30">
                स्वराज्य
              </span>
            </div>
            <p className="text-[10px] text-slate-500 dark:text-slate-400 font-hindi font-medium">
              राजाई स्वराज्य पासपोर्ट • संगमयुग
            </p>
          </div>
        </div>

        {/* Action icons & controls */}
        <div className="flex items-center gap-1.5">
          {/* Aesthetic Light vs Dark Toggle Pill */}
          <button
            onClick={() => {
              sound.playSoftClick();
              onToggleTheme();
            }}
            title={isDark ? "स्विच करें लाइट मोड (Day / Serene)" : "स्विच करें डार्क मोड (Night / Celestial)"}
            className="flex items-center gap-1.5 py-1 px-2.5 rounded-full bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700/80 text-slate-700 dark:text-amber-200 border border-slate-200 dark:border-slate-700 text-xs font-serif font-semibold transition-all transform active:scale-95 shadow-2xs"
          >
            {isDark ? (
              <>
                <Moon className="w-3.5 h-3.5 text-amber-300 fill-amber-300/30" />
                <span className="text-[10px] hidden sm:inline text-amber-200">Night</span>
              </>
            ) : (
              <>
                <Sun className="w-3.5 h-3.5 text-amber-500 fill-amber-400/40" />
                <span className="text-[10px] hidden sm:inline text-slate-700">Day</span>
              </>
            )}
          </button>

          {/* Quick Rescue Pass Shield button */}
          <button
            onClick={onOpenRescuePass}
            title="Rajai Rescue Pass (तत्काल सहायता)"
            className="px-2.5 py-1 bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white rounded-full text-[11px] font-hindi font-bold shadow-xs shadow-rose-500/20 flex items-center gap-1 transition-all transform active:scale-95"
          >
            <ShieldAlert className="w-3.5 h-3.5 text-rose-100 animate-pulse" />
            <span>रेस्क्यू</span>
          </button>

          {/* Audio Chime Bell */}
          <button
            onClick={handlePlayBell}
            title="Mindfulness Bowl Sound (शांति नाद)"
            className="p-1.5 rounded-full text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-amber-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <Volume2 className="w-4 h-4" />
          </button>

          {/* Font Scale toggle */}
          {onToggleFontScale && (
            <button
              onClick={onToggleFontScale}
              title="अक्षर आकार (Font Size)"
              className="p-1.5 rounded-full text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-amber-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <Type className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
