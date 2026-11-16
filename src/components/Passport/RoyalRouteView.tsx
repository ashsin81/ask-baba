import React, { useState } from 'react';
import { ROYAL_ROUTE_STEPS, RoyalRouteStep } from '../../data/figmaPassportData';
import { Crown, Sparkles, ChevronRight, CheckCircle2, ArrowRight } from 'lucide-react';
import { sound } from '../../utils/audio';

interface RoyalRouteViewProps {
  onOpenCheckpoint: (checkpointId: string) => void;
}

export const RoyalRouteView: React.FC<RoyalRouteViewProps> = ({ onOpenCheckpoint }) => {
  const [selectedStep, setSelectedStep] = useState<RoyalRouteStep | null>(ROYAL_ROUTE_STEPS[0]);

  return (
    <div className="space-y-5 pb-20 max-w-md mx-auto">
      {/* Header */}
      <div className="pt-1 space-y-1">
        <span className="text-[10px] uppercase font-serif tracking-[0.25em] text-emerald-700 dark:text-amber-400 font-bold block">
          THE ROYAL ROUTE
        </span>
        <h1 className="text-2xl sm:text-3xl font-hindi font-bold text-slate-900 dark:text-amber-100 tracking-tight">
          छह आंतरिक प्रदेश
        </h1>
        <p className="text-xs font-serif text-slate-500 dark:text-slate-400 italic">
          "Not six countries. Six states of being."
        </p>
      </div>

      {/* Sequential Route Timeline */}
      <div className="space-y-3">
        {ROYAL_ROUTE_STEPS.map((step, idx) => {
          const isSelected = selectedStep?.step === step.step;

          return (
            <div
              key={step.step}
              onClick={() => {
                sound.playSoftClick();
                setSelectedStep(step);
              }}
              className={`cursor-pointer rounded-3xl p-4.5 transition-all border ${
                isSelected
                  ? 'bg-emerald-50/80 dark:bg-[#1A253D] border-emerald-400 dark:border-amber-400 shadow-md scale-[1.01]'
                  : 'bg-white dark:bg-[#131C2E] border-slate-100 dark:border-slate-800 hover:border-emerald-200 dark:hover:border-slate-700 shadow-xs'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10px] font-mono tracking-widest px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold">
                  {step.step}
                </span>
                <span className="text-xs font-serif text-slate-400 dark:text-slate-500 font-medium">
                  {step.nameEn}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold font-hindi text-slate-900 dark:text-slate-100">
                    {step.nameHi}
                  </h3>
                  <p className="text-xs font-hindi text-slate-600 dark:text-slate-300">
                    {step.tagline}
                  </p>
                </div>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                  isSelected
                    ? 'bg-emerald-600 text-white dark:bg-amber-400 dark:text-slate-950 font-bold shadow-xs'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                }`}>
                  →
                </div>
              </div>

              {isSelected && (
                <div className="mt-3 pt-3 border-t border-slate-200/60 dark:border-slate-700/60 text-xs font-hindi text-slate-700 dark:text-slate-300 leading-relaxed animate-fade-in">
                  <p>{step.description}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Bottom Action Button */}
      <div className="pt-2">
        <button
          onClick={() => {
            sound.playTibetanBowl();
            onOpenCheckpoint('cp-16'); // Source connection / आत्म-स्मृति
          }}
          className="w-full py-4 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-700 dark:bg-gradient-to-r dark:from-amber-500 dark:via-amber-600 dark:to-rose-600 text-white dark:text-slate-950 font-bold font-serif shadow-md shadow-emerald-600/20 dark:shadow-amber-500/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
        >
          <span>Begin with आत्म-स्मृति</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
