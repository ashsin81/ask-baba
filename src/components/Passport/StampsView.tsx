import React, { useState } from 'react';
import { FIGMA_STAMPS, FigmaStamp } from '../../data/figmaPassportData';
import { Award, Sparkles, CheckCircle2, Lock, HelpCircle, X, ArrowRight } from 'lucide-react';
import { sound } from '../../utils/audio';

interface StampsViewProps {
  unlockedStampIds: string[];
  onUnlockStamp: (stampId: string) => void;
}

export const StampsView: React.FC<StampsViewProps> = ({
  unlockedStampIds,
  onUnlockStamp,
}) => {
  const [selectedStamp, setSelectedStamp] = useState<FigmaStamp | null>(null);

  const handleActivateStamp = (stamp: FigmaStamp) => {
    sound.playTibetanBowl();
    sound.playChime();
    onUnlockStamp(stamp.id);
  };

  return (
    <div className="space-y-4 pb-20 max-w-md mx-auto">
      {/* Header */}
      <div className="pt-1 space-y-1">
        <span className="text-[10px] uppercase font-serif tracking-[0.25em] text-emerald-700 dark:text-amber-400 font-bold block">
          ROYAL STAMP COLLECTION
        </span>
        <h1 className="text-2xl sm:text-3xl font-hindi font-bold text-slate-900 dark:text-amber-100 tracking-tight">
          जीए हुए संस्कार
        </h1>
        <p className="text-xs font-serif text-slate-500 dark:text-slate-400 italic">
          "A stamp means 'I lived it', not 'I read it'."
        </p>
      </div>

      {/* Progress Card */}
      <div className="p-4.5 rounded-3xl bg-emerald-50/80 dark:bg-[#131C2E] border border-emerald-200/60 dark:border-slate-800 flex items-center justify-between shadow-xs">
        <div className="space-y-0.5">
          <div className="text-xs font-serif font-bold text-slate-900 dark:text-slate-100">
            Your collection begins here
          </div>
          <p className="text-[11px] font-hindi text-slate-600 dark:text-slate-400">
            Practise a quality, then add your stamp.
          </p>
        </div>
        <div className="text-right">
          <div className="text-2xl font-mono font-bold text-emerald-700 dark:text-amber-400">
            {unlockedStampIds.length} / {FIGMA_STAMPS.length}
          </div>
          <div className="text-[9px] font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider">
            ACTIVATED
          </div>
        </div>
      </div>

      {/* Grid of 13 Stamps */}
      <div className="grid grid-cols-2 gap-3">
        {FIGMA_STAMPS.map((stamp) => {
          const isUnlocked = unlockedStampIds.includes(stamp.id);

          return (
            <div
              key={stamp.id}
              onClick={() => {
                sound.playSoftClick();
                setSelectedStamp(stamp);
              }}
              className={`cursor-pointer rounded-3xl p-4 transition-all relative overflow-hidden border flex flex-col justify-between min-h-[145px] ${
                isUnlocked
                  ? 'bg-white dark:bg-[#1A253D] border-emerald-400 dark:border-amber-400 shadow-xs hover:shadow-md'
                  : 'bg-white/60 dark:bg-[#131C2E]/60 border-slate-100 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 opacity-80'
              }`}
            >
              {/* Top Row: Quality Number & Lock/Active Badge */}
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono tracking-widest text-slate-400 dark:text-slate-500 font-bold">
                  {stamp.number}
                </span>
                {isUnlocked ? (
                  <span className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-500/40 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </span>
                ) : (
                  <span className="w-5 h-5 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400">
                    <Lock className="w-3 h-3" />
                  </span>
                )}
              </div>

              {/* Ornate Stamp Center Seal */}
              <div className="my-2 text-center">
                <div className="text-2xl mb-1 filter drop-shadow-sm">
                  {stamp.icon}
                </div>
                <h3 className="text-base font-bold font-hindi text-slate-900 dark:text-slate-100">
                  {stamp.nameHi}
                </h3>
                <span className="text-[10px] font-serif text-slate-400 dark:text-slate-500 block">
                  {stamp.nameEn}
                </span>
              </div>

              {/* Bottom Status text */}
              <div className="text-center pt-1.5 border-t border-slate-100 dark:border-slate-800/80">
                <span className={`text-[10px] font-hindi ${
                  isUnlocked ? 'text-emerald-700 dark:text-emerald-300 font-semibold' : 'text-slate-400 dark:text-slate-500'
                }`}>
                  {isUnlocked ? 'संस्कार सक्रिय ✓' : 'Practise to activate'}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Baba se poochhein query */}
      <div className="p-3.5 rounded-3xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-500/30 space-y-1">
        <div className="flex items-center gap-1.5 text-[10px] font-mono text-purple-700 dark:text-purple-300 font-bold uppercase">
          <HelpCircle className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
          बाबा से पूछें…
        </div>
        <p className="text-xs font-hindi text-purple-900 dark:text-purple-200 italic font-medium leading-relaxed">
          "बाबा, इनमें से कौन-सा संस्कार मुझे और पक्का करना है?"
        </p>
      </div>

      {/* Detail Modal for Selected Stamp */}
      {selectedStamp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/60 dark:bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-sm bg-white dark:bg-[#131C2E] border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-2xl text-center space-y-4">
            <button
              onClick={() => setSelectedStamp(null)}
              className="absolute top-4 right-4 p-1 rounded-full text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Stamp Seal Graphic */}
            <div className="w-20 h-20 mx-auto rounded-full bg-emerald-100 dark:bg-amber-400/20 border border-emerald-300 dark:border-amber-400/40 flex items-center justify-center shadow-inner">
              <span className="text-3xl">{selectedStamp.icon}</span>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-mono text-emerald-700 dark:text-amber-400 font-bold tracking-widest block uppercase">
                {selectedStamp.code}
              </span>
              <h2 className="text-2xl font-bold font-hindi text-slate-900 dark:text-amber-100">
                {selectedStamp.nameHi} ({selectedStamp.nameEn})
              </h2>
              <p className="text-xs font-hindi text-slate-600 dark:text-slate-300">
                {selectedStamp.description}
              </p>
            </div>

            {/* Affirmation Box */}
            <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 text-xs font-hindi text-slate-800 dark:text-slate-200 font-medium leading-relaxed">
              "{selectedStamp.affirmation}"
            </div>

            {/* Button */}
            {unlockedStampIds.includes(selectedStamp.id) ? (
              <div className="py-3 px-4 rounded-2xl bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-500/40 text-emerald-800 dark:text-emerald-200 text-xs font-serif font-bold flex items-center justify-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>संस्कार सील सक्रिय है (Activated)</span>
              </div>
            ) : (
              <button
                onClick={() => {
                  handleActivateStamp(selectedStamp);
                  setSelectedStamp(null);
                }}
                className="w-full py-3.5 px-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 dark:bg-gradient-to-r dark:from-amber-500 dark:via-amber-600 dark:to-rose-600 text-white dark:text-slate-950 font-bold font-serif shadow-md shadow-emerald-600/20 dark:shadow-amber-500/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
              >
                <span>जीकर संस्कार सक्रिय करें (Activate Stamp)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
