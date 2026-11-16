import React, { useState } from 'react';
import { FigmaCheckpoint } from '../../data/figmaPassportData';
import { X, Sparkles, Check, Crown, HelpCircle, ArrowRight, CheckCircle2 } from 'lucide-react';
import { sound } from '../../utils/audio';

interface CheckpointDetailModalProps {
  checkpoint: FigmaCheckpoint;
  isOpen: boolean;
  onClose: () => void;
  onUnlockStamp: (stampId: string) => void;
  isStampUnlocked?: boolean;
}

export const CheckpointDetailModal: React.FC<CheckpointDetailModalProps> = ({
  checkpoint,
  isOpen,
  onClose,
  onUnlockStamp,
  isStampUnlocked = false,
}) => {
  const [selectedActionIndex, setSelectedActionIndex] = useState<number | null>(null);
  const [hasSavedAction, setHasSavedAction] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleCompleteAbhyas = () => {
    sound.playTibetanBowl();
    sound.playChime();
    setHasSavedAction(true);
    onUnlockStamp(checkpoint.stampId);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/60 dark:bg-black/80 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-md my-auto bg-white dark:bg-[#131C2E] border border-slate-200 dark:border-slate-800 rounded-3xl p-5 shadow-2xl text-slate-900 dark:text-slate-100 space-y-4 max-h-[90vh] overflow-y-auto transition-colors">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono tracking-widest px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold">
              {String(checkpoint.number).padStart(2, '0')} / 20
            </span>
            <span className="text-xs font-serif uppercase tracking-wider text-slate-500 dark:text-slate-400 font-medium">
              {checkpoint.category}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Title */}
        <div className="space-y-0.5">
          <h2 className="text-xl sm:text-2xl font-bold font-hindi text-slate-900 dark:text-amber-100">
            {checkpoint.nameHi}
          </h2>
          <p className="text-xs font-serif text-slate-500 dark:text-slate-400">
            {checkpoint.nameEn}
          </p>
        </div>

        {/* 01 स्थिति (Situation) */}
        <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 space-y-1.5">
          <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400 font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            01 स्थिति (SITUATION)
          </div>
          <p className="text-sm font-hindi text-slate-800 dark:text-slate-200 font-medium leading-relaxed">
            {checkpoint.situation}
          </p>
        </div>

        {/* 02 बाबा की दिशा (Baba's Spiritual Direction) */}
        <div className="p-3.5 rounded-2xl bg-amber-50/80 dark:bg-amber-950/40 border border-amber-200/80 dark:border-amber-400/30 space-y-1.5">
          <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-amber-700 dark:text-amber-400 font-bold">
            <Crown className="w-3.5 h-3.5" />
            02 बाबा की दिशा (BABA'S DIRECTION)
          </div>
          <p className="text-sm font-hindi text-amber-900 dark:text-amber-100 font-semibold leading-relaxed">
            "{checkpoint.babaDirection}"
          </p>
        </div>

        {/* 03 राजाई अभ्यास (Royal Practice Steps) */}
        <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 space-y-2">
          <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-emerald-700 dark:text-amber-400 font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            03 राजाई अभ्यास (RAJAI PRACTICE)
          </div>
          <div className="space-y-1.5">
            {checkpoint.abhyas.map((step, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs font-hindi text-slate-700 dark:text-slate-300">
                <span className="text-emerald-600 dark:text-amber-400 font-bold mt-0.5">•</span>
                <span className="leading-snug">{step}</span>
              </div>
            ))}
          </div>
        </div>

        {/* मेरी श्रेष्ठ क्रिया (Selectable Elevated Actions) */}
        {checkpoint.bestActions.length > 0 && (
          <div className="space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400 font-bold block">
              मेरी श्रेष्ठ क्रिया (CHOOSE YOUR ACTION)
            </span>
            <div className="space-y-1.5">
              {checkpoint.bestActions.map((action, idx) => {
                const isSelected = selectedActionIndex === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      sound.playSoftClick();
                      setSelectedActionIndex(idx);
                    }}
                    className={`w-full p-2.5 rounded-xl text-left text-xs font-hindi transition-all flex items-center justify-between ${
                      isSelected
                        ? 'bg-emerald-50 dark:bg-amber-400/15 border border-emerald-400 dark:border-amber-400 text-emerald-900 dark:text-amber-100 font-bold shadow-xs'
                        : 'bg-slate-50 dark:bg-slate-900/60 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-100 dark:border-slate-800 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    <span>{action}</span>
                    {isSelected && <Check className="w-4 h-4 text-emerald-600 dark:text-amber-400 shrink-0 ml-2" />}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* बाबा से पूछें… (Inner Inquiry) */}
        <div className="p-3 rounded-2xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-500/30 space-y-1">
          <div className="flex items-center gap-1 text-[10px] font-mono text-purple-700 dark:text-purple-300 font-bold uppercase">
            <HelpCircle className="w-3 h-3" />
            बाबा से पूछें…
          </div>
          <p className="text-xs font-hindi text-purple-900 dark:text-purple-200 italic font-medium">
            "{checkpoint.askBaba}"
          </p>
        </div>

        {/* Action Button: Add Stamp */}
        <div className="pt-2 space-y-2">
          <button
            onClick={handleCompleteAbhyas}
            disabled={hasSavedAction || isStampUnlocked}
            className={`w-full py-3.5 px-4 rounded-2xl font-bold font-serif text-sm tracking-wide shadow-md transition-all flex items-center justify-center gap-2 ${
              hasSavedAction || isStampUnlocked
                ? 'bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-500/50 text-emerald-800 dark:text-emerald-200 cursor-default'
                : 'bg-emerald-600 hover:bg-emerald-700 dark:bg-gradient-to-r dark:from-amber-500 dark:via-amber-600 dark:to-rose-600 text-white dark:text-slate-950 shadow-emerald-600/20 active:scale-[0.98]'
            }`}
          >
            {hasSavedAction || isStampUnlocked ? (
              <>
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>अभ्यास पूर्ण · Stamp Unlocked!</span>
              </>
            ) : (
              <>
                <span>मैंने अभ्यास किया · Add stamp</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>

          <p className="text-center text-[10px] text-slate-400 dark:text-slate-500 italic">
            {checkpoint.stampCultivate}
          </p>
        </div>

      </div>
    </div>
  );
};
