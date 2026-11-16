import React from 'react';
import { Sparkles, ArrowRight, Shield, Crown } from 'lucide-react';
import { sound } from '../../utils/audio';

interface WelcomeViewProps {
  onBegin: () => void;
  onContinue: () => void;
}

export const WelcomeView: React.FC<WelcomeViewProps> = ({ onBegin, onContinue }) => {
  return (
    <div className="relative min-h-[90vh] flex flex-col justify-between items-center text-center px-4 py-8 max-w-md mx-auto">
      {/* Top Banner Tag */}
      <div className="space-y-2 pt-2 animate-fade-in">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-amber-500/15 border border-emerald-200 dark:border-amber-400/30 text-emerald-800 dark:text-amber-300 text-[11px] font-serif tracking-widest uppercase font-semibold">
          <Sparkles className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400 animate-pulse" />
          <span>FROM SELF TO HIGHER SELF</span>
        </div>
        <p className="text-[12px] text-slate-500 dark:text-amber-200/60 font-serif tracking-wider uppercase">
          THE ROYAL PASSPORT • EN / हि
        </p>
      </div>

      {/* Royal Emblem Hero */}
      <div className="my-6 relative flex flex-col items-center justify-center">
        {/* Radiant glow ring */}
        <div className="absolute w-56 h-56 rounded-full bg-gradient-to-tr from-emerald-400/20 via-amber-400/20 to-teal-400/20 dark:from-amber-500/20 dark:via-rose-500/20 dark:to-purple-600/20 blur-2xl animate-pulse" />
        
        {/* Emblem outer circle */}
        <div className="relative w-44 h-44 rounded-full p-1 bg-gradient-to-b from-amber-400 via-emerald-600 to-teal-800 dark:from-amber-300 dark:via-amber-600 dark:to-rose-900 shadow-md dark:shadow-[0_0_40px_rgba(245,158,11,0.35)] flex items-center justify-center">
          <div className="w-full h-full rounded-full bg-white dark:bg-[#121826] p-4 flex flex-col items-center justify-center border border-amber-300/40 dark:border-amber-400/40 text-center">
            <Crown className="w-10 h-10 text-amber-500 dark:text-amber-300 drop-shadow-sm" />
            <span className="font-serif font-black tracking-widest text-[11px] text-slate-900 dark:text-amber-200 mt-1">
              SWARAJYA
            </span>
            <span className="text-[9px] text-emerald-700 dark:text-amber-400/80 font-mono tracking-wider font-semibold">
              108 SANSKAR
            </span>
          </div>
        </div>
      </div>

      {/* Main Titles */}
      <div className="space-y-3 px-2">
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 dark:text-amber-100 tracking-tight leading-tight">
          The Royal<br />Passport
        </h1>
        <h2 className="text-2xl font-bold font-hindi text-emerald-700 dark:text-amber-400">
          राजाई स्वराज्य पासपोर्ट
        </h2>
        <p className="text-base font-hindi text-slate-700 dark:text-amber-100/90 font-medium">
          हर पल अपनी मंज़िल की याद।
        </p>
        <p className="text-xs text-slate-500 dark:text-amber-300/70 max-w-xs mx-auto leading-relaxed italic">
          "Sovereignty begins with one conscious choice."
        </p>
      </div>

      {/* Action Buttons */}
      <div className="w-full space-y-3 pt-6">
        <button
          onClick={() => {
            sound.playTibetanBowl();
            onBegin();
          }}
          className="w-full py-4 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-700 dark:bg-gradient-to-r dark:from-amber-500 dark:via-amber-600 dark:to-rose-600 text-white dark:text-slate-950 font-bold font-serif tracking-wide shadow-md shadow-emerald-600/25 dark:shadow-amber-500/30 active:scale-[0.98] transition-all flex items-center justify-center gap-2 group"
        >
          <span className="text-base">Begin my journey</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>

        <button
          onClick={() => {
            sound.playSoftClick();
            onContinue();
          }}
          className="w-full py-3 text-xs text-slate-500 dark:text-amber-300/90 hover:text-slate-800 dark:hover:text-amber-100 transition-colors font-medium"
        >
          Already have a passport? <span className="underline font-semibold text-emerald-700 dark:text-amber-300">Continue</span>
        </button>

        <p className="text-[10px] text-slate-400 dark:text-slate-500 tracking-tight pt-2">
          A tool for self-mastery. Not a legal document.
        </p>
      </div>
    </div>
  );
};
