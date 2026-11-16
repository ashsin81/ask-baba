import React, { useState } from 'react';
import {
  Sparkles,
  ShieldAlert,
  ArrowRight,
  Crown,
  Heart,
  ChevronRight,
  Flame,
  Wind,
  ShieldCheck,
  BookOpen,
  Compass,
  FileCheck2,
  Luggage,
  HelpCircle,
  Repeat,
  Sun,
  Moon
} from 'lucide-react';
import { sound } from '../../utils/audio';

interface TodayViewProps {
  onOpenCheckpoint: (checkpointId: string) => void;
  onOpenRescuePass: () => void;
  onOpenRoyalRoute: () => void;
  onOpenVisa: () => void;
  onOpenBaggage: () => void;
  onOpenDeclaration: () => void;
  onOpenHowToPractise: () => void;
  onOpenChooseNewRoute: () => void;
  onOpenAbout: () => void;
}

export const TodayView: React.FC<TodayViewProps> = ({
  onOpenCheckpoint,
  onOpenRescuePass,
  onOpenRoyalRoute,
  onOpenVisa,
  onOpenBaggage,
  onOpenDeclaration,
  onOpenHowToPractise,
  onOpenChooseNewRoute,
  onOpenAbout,
}) => {
  const [isRemembering, setIsRemembering] = useState<boolean>(false);
  const [rememberSeconds, setRememberSeconds] = useState<number>(0);

  const handleStartRemember = () => {
    sound.playTibetanBowl();
    setIsRemembering(true);
    setRememberSeconds(10);
    const interval = setInterval(() => {
      setRememberSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setIsRemembering(false);
          sound.playChime();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const todayDateStr = new Intl.DateTimeFormat('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(new Date());

  return (
    <div className="space-y-5 pb-20 max-w-md mx-auto">
      {/* Top Banner Tagline - Clean and Serene like Sample 1 */}
      <div className="pt-1 space-y-1">
        <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-medium">
          <span className="font-serif tracking-wider uppercase text-[10px] text-emerald-700 dark:text-amber-400 font-bold">
            PAUSE • REMEMBER • CHOOSE
          </span>
          <span className="text-[11px] font-mono">{todayDateStr}</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 dark:text-amber-100 tracking-tight">
          Your journey within
        </h1>
        <p className="text-xs font-hindi text-slate-600 dark:text-slate-300">
          आज एक श्रेष्ठ कर्म • A conscious step towards sovereignty
        </p>
      </div>

      {/* Hero Card: Today’s Remembrance (Inspired by Sample 1's Nature/Night Hero Card) */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-800 via-teal-900 to-slate-900 dark:from-[#172238] dark:via-[#111929] dark:to-[#0A0F1D] text-white p-6 shadow-md dark:shadow-[0_12px_35px_rgba(0,0,0,0.6)] border border-emerald-700/30 dark:border-slate-800">
        {/* Subtle ethereal graphic circles inspired by Sample 1 */}
        <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-emerald-400/20 dark:bg-amber-400/10 blur-2xl pointer-events-none" />
        <div className="absolute -bottom-8 -left-8 w-40 h-40 rounded-full bg-amber-400/15 dark:bg-rose-500/10 blur-xl pointer-events-none" />

        <div className="relative z-10 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono tracking-widest text-emerald-200 dark:text-amber-300 font-bold uppercase flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              TODAY'S REMEMBRANCE
            </span>
            <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-white/15 backdrop-blur-md text-white border border-white/20 font-hindi font-medium">
              आत्म-स्मृति
            </span>
          </div>

          <div className="py-1">
            <h2 className="text-2xl sm:text-3xl font-hindi font-bold text-white leading-snug drop-shadow-sm">
              मैं आत्मा हूँ।<br />
              <span className="text-emerald-300 dark:text-amber-300">मैं शांति स्वरूप हूँ।</span>
            </h2>
            <p className="text-xs font-serif italic text-emerald-100/80 dark:text-slate-300 mt-2">
              "I am a soul. Peace is my nature."
            </p>
          </div>

          <button
            onClick={handleStartRemember}
            disabled={isRemembering}
            className={`w-full py-3 px-4 rounded-2xl flex items-center justify-between transition-all font-medium ${
              isRemembering
                ? 'bg-amber-400 text-slate-950 font-bold animate-pulse'
                : 'bg-white/20 hover:bg-white/30 backdrop-blur-md text-white border border-white/30 active:scale-[0.98]'
            }`}
          >
            <span className="text-xs font-hindi">
              {isRemembering ? `अनुभव करें... (${rememberSeconds}s)` : 'Take a moment to remember (10s)'}
            </span>
            <ArrowRight className={`w-4 h-4 ${isRemembering ? 'animate-bounce' : ''}`} />
          </button>
        </div>
      </div>

      {/* Card 2: WHAT DO YOU NEED RIGHT NOW? (Category Cards like Sample 1 & 2) */}
      <div className="space-y-2.5">
        <div className="flex items-center justify-between px-1">
          <span className="text-xs font-serif font-bold text-slate-800 dark:text-slate-200 tracking-wide">
            What do you need right now?
          </span>
          <span className="text-[11px] text-slate-500 dark:text-slate-400 font-hindi">अभी क्या स्थिति है?</span>
        </div>

        <div className="grid grid-cols-3 gap-2.5">
          <button
            onClick={() => onOpenCheckpoint('cp-01')}
            className="p-3.5 rounded-3xl bg-white dark:bg-[#131C2E] border border-slate-100 dark:border-slate-800 hover:border-rose-300 dark:hover:border-rose-500/50 text-center active:scale-95 transition-all shadow-xs hover:shadow-md group"
          >
            <div className="w-10 h-10 mx-auto mb-2 rounded-2xl bg-rose-50 dark:bg-rose-950/50 flex items-center justify-center text-rose-600 dark:text-rose-400 group-hover:scale-110 transition-transform">
              <Flame className="w-5 h-5 fill-rose-500/20" />
            </div>
            <div className="text-sm font-bold font-hindi text-slate-900 dark:text-slate-100">क्रोध</div>
            <div className="text-[10px] text-slate-500 dark:text-slate-400 font-serif">Anger Border</div>
          </button>

          <button
            onClick={() => onOpenCheckpoint('cp-02')}
            className="p-3.5 rounded-3xl bg-white dark:bg-[#131C2E] border border-slate-100 dark:border-slate-800 hover:border-sky-300 dark:hover:border-sky-500/50 text-center active:scale-95 transition-all shadow-xs hover:shadow-md group"
          >
            <div className="w-10 h-10 mx-auto mb-2 rounded-2xl bg-sky-50 dark:bg-sky-950/50 flex items-center justify-center text-sky-600 dark:text-sky-400 group-hover:scale-110 transition-transform">
              <Wind className="w-5 h-5" />
            </div>
            <div className="text-sm font-bold font-hindi text-slate-900 dark:text-slate-100">मन भारी</div>
            <div className="text-[10px] text-slate-500 dark:text-slate-400 font-serif">Mind Border</div>
          </button>

          <button
            onClick={() => onOpenCheckpoint('cp-10')}
            className="p-3.5 rounded-3xl bg-white dark:bg-[#131C2E] border border-slate-100 dark:border-slate-800 hover:border-purple-300 dark:hover:border-purple-500/50 text-center active:scale-95 transition-all shadow-xs hover:shadow-md group"
          >
            <div className="w-10 h-10 mx-auto mb-2 rounded-2xl bg-purple-50 dark:bg-purple-950/50 flex items-center justify-center text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="text-sm font-bold font-hindi text-slate-900 dark:text-slate-100">चिंता</div>
            <div className="text-[10px] text-slate-500 dark:text-slate-400 font-serif">Courage Gate</div>
          </button>
        </div>
      </div>

      {/* Card 3: Quick Rescue Pass */}
      <div
        onClick={onOpenRescuePass}
        className="cursor-pointer rounded-3xl bg-gradient-to-r from-rose-50 to-orange-50 dark:from-rose-950/40 dark:to-orange-950/30 border border-rose-200/80 dark:border-rose-900/60 p-4 shadow-xs hover:shadow-md transition-all active:scale-[0.99] group flex items-center justify-between"
      >
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
            <span className="text-sm font-serif font-bold text-rose-900 dark:text-rose-200">
              Pause before you react
            </span>
          </div>
          <p className="text-xs font-hindi text-rose-800/80 dark:text-rose-300/80">
            तीव्र परिस्थिति में राजाई मार्ग • Rajai Rescue Pass
          </p>
        </div>
        <div className="w-10 h-10 rounded-2xl bg-rose-100 dark:bg-rose-900/50 border border-rose-300/40 flex items-center justify-center text-rose-600 dark:text-rose-400 group-hover:scale-110 transition-transform">
          <ShieldAlert className="w-5 h-5" />
        </div>
      </div>

      {/* Card 4: Your Royal Route */}
      <div className="rounded-3xl bg-white dark:bg-[#131C2E] border border-slate-100 dark:border-slate-800 p-4.5 space-y-3 shadow-xs">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Crown className="w-4 h-4 text-emerald-600 dark:text-amber-400" />
            <span className="text-sm font-serif font-bold text-slate-900 dark:text-slate-100">
              Your royal route
            </span>
          </div>
          <button
            onClick={onOpenRoyalRoute}
            className="text-xs text-emerald-700 dark:text-amber-400 hover:underline font-semibold"
          >
            View all (6) →
          </button>
        </div>

        <div
          onClick={onOpenRoyalRoute}
          className="cursor-pointer p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 hover:bg-emerald-50/50 dark:hover:bg-slate-800 transition-all flex items-center justify-between border border-slate-100 dark:border-slate-700/60"
        >
          <div>
            <span className="text-[10px] font-mono text-emerald-700 dark:text-amber-400 font-bold block">
              STEP 01 / 06
            </span>
            <div className="text-sm font-bold font-hindi text-slate-900 dark:text-slate-100">
              Awakening · आत्म-स्मृति
            </div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400">
              Begin by remembering who you are
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-slate-400 dark:text-slate-500" />
        </div>
      </div>

      {/* Card 5: Royal Toolkit Navigation Grid */}
      <div className="space-y-2">
        <span className="text-xs font-serif font-bold text-slate-800 dark:text-slate-200 tracking-wide block px-1">
          Royal Passport Tools
        </span>
        <div className="grid grid-cols-2 gap-2.5">
          <button
            onClick={onOpenVisa}
            className="p-3.5 rounded-3xl bg-white dark:bg-[#131C2E] border border-slate-100 dark:border-slate-800 hover:border-emerald-300 dark:hover:border-emerald-500/40 text-left transition-all shadow-xs hover:shadow-md group flex items-start gap-3"
          >
            <div className="p-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400">
              <FileCheck2 className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900 dark:text-slate-100 font-hindi">Spiritual Visa</div>
              <div className="text-[10px] text-slate-500 dark:text-slate-400">स्वयं को देखने की अनुमति</div>
            </div>
          </button>

          <button
            onClick={onOpenBaggage}
            className="p-3.5 rounded-3xl bg-white dark:bg-[#131C2E] border border-slate-100 dark:border-slate-800 hover:border-amber-300 dark:hover:border-amber-500/40 text-left transition-all shadow-xs hover:shadow-md group flex items-start gap-3"
          >
            <div className="p-2 rounded-xl bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400">
              <Luggage className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900 dark:text-slate-100 font-hindi">Baggage Declaration</div>
              <div className="text-[10px] text-slate-500 dark:text-slate-400">अंदर का सामान पहचानें</div>
            </div>
          </button>

          <button
            onClick={onOpenDeclaration}
            className="p-3.5 rounded-3xl bg-white dark:bg-[#131C2E] border border-slate-100 dark:border-slate-800 hover:border-rose-300 dark:hover:border-rose-500/40 text-left transition-all shadow-xs hover:shadow-md group flex items-start gap-3"
          >
            <div className="p-2 rounded-xl bg-rose-50 dark:bg-rose-950/50 text-rose-600 dark:text-rose-400">
              <Crown className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900 dark:text-slate-100 font-hindi">Swarajya Oath</div>
              <div className="text-[10px] text-slate-500 dark:text-slate-400">स्वराज्य घोषणा-पत्र</div>
            </div>
          </button>

          <button
            onClick={onOpenChooseNewRoute}
            className="p-3.5 rounded-3xl bg-white dark:bg-[#131C2E] border border-slate-100 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-500/40 text-left transition-all shadow-xs hover:shadow-md group flex items-start gap-3"
          >
            <div className="p-2 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400">
              <Repeat className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900 dark:text-slate-100 font-hindi">Choose New Route</div>
              <div className="text-[10px] text-slate-500 dark:text-slate-400">पुराना मार्ग → राजाई मार्ग</div>
            </div>
          </button>

          <button
            onClick={onOpenHowToPractise}
            className="p-3.5 rounded-3xl bg-white dark:bg-[#131C2E] border border-slate-100 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-500/40 text-left transition-all shadow-xs hover:shadow-md group flex items-start gap-3"
          >
            <div className="p-2 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900 dark:text-slate-100 font-hindi">How to Practise</div>
              <div className="text-[10px] text-slate-500 dark:text-slate-400">7 व्यावहारिक कदम</div>
            </div>
          </button>

          <button
            onClick={onOpenAbout}
            className="p-3.5 rounded-3xl bg-white dark:bg-[#131C2E] border border-slate-100 dark:border-slate-800 hover:border-teal-300 dark:hover:border-teal-500/40 text-left transition-all shadow-xs hover:shadow-md group flex items-start gap-3"
          >
            <div className="p-2 rounded-xl bg-teal-50 dark:bg-teal-950/50 text-teal-600 dark:text-teal-400">
              <HelpCircle className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900 dark:text-slate-100 font-hindi">About Journey</div>
              <div className="text-[10px] text-slate-500 dark:text-slate-400">स्वयं से स्वयं की यात्रा</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
