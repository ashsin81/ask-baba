import React, { useState } from 'react';
import { X, ShieldAlert, Sparkles, HelpCircle, ArrowRight, CheckCircle2 } from 'lucide-react';
import { sound } from '../../utils/audio';

interface RescuePassModalProps {
  isOpen: boolean;
  onClose: () => void;
  onComplete?: () => void;
}

export const RescuePassModal: React.FC<RescuePassModalProps> = ({
  isOpen,
  onClose,
  onComplete,
}) => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [hasCompleted, setHasCompleted] = useState<boolean>(false);

  if (!isOpen) return null;

  const steps = [
    { num: '01', title: 'रुको।', desc: 'तुरंत प्रतिक्रिया मत दो। 3 गहरी सांसें लो।' },
    { num: '02', title: 'द्रष्टा बनकर देखो।', desc: 'परिस्थिति बाहर है, तुम अंदर के साक्षी हो।' },
    { num: '03', title: 'मेरी राजाई स्थिति क्या करेगी?', desc: 'क्रोध नहीं, शांति। अशांति नहीं, स्वराज्य।' },
    { num: '04', title: 'एक श्रेष्ठ कर्म।', desc: 'यदि बोलना आवश्यक हो तो मधुरता, निर्मानता से बोलो।' },
    { num: '05', title: 'व्यर्थ छोड़ो। आगे बढ़ो।', desc: 'बीती सो बीती, मन को तुरंत हल्का करो।' },
  ];

  const handleFinish = () => {
    sound.playTibetanBowl();
    sound.playChime();
    setHasCompleted(true);
    if (onComplete) onComplete();
    setTimeout(() => {
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/60 dark:bg-black/80 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-md my-auto bg-white dark:bg-[#131C2E] border border-rose-200 dark:border-rose-900/60 rounded-3xl p-5 shadow-2xl text-slate-900 dark:text-slate-100 space-y-4 max-h-[92vh] overflow-y-auto transition-colors">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-rose-100 dark:border-rose-900/40 pb-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-2xl bg-rose-50 dark:bg-rose-950/60 flex items-center justify-center text-rose-600 dark:text-rose-400">
              <ShieldAlert className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] font-mono tracking-widest text-rose-600 dark:text-rose-400 font-bold block uppercase">
                RAJAI RESCUE PASS
              </span>
              <span className="text-xs font-serif text-slate-500 dark:text-slate-400">
                जब परिस्थिति बहुत तीव्र हो
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Hero Alert Box */}
        <div className="text-center p-4 rounded-3xl bg-gradient-to-b from-rose-50 to-orange-50 dark:from-rose-950/50 dark:to-black/40 border border-rose-200 dark:border-rose-800/40 space-y-2">
          <h2 className="text-2xl font-bold font-hindi text-rose-900 dark:text-rose-100">
            पहले एक पल रुकें।
          </h2>
          <span className="text-[10px] font-mono tracking-widest text-rose-700 dark:text-amber-400 font-bold uppercase block">
            PAUSE • REMEMBER • RESPOND
          </span>
          <p className="text-base font-hindi text-slate-900 dark:text-amber-200 font-semibold">
            "मैं आत्मा हूँ। बाबा मेरे साथी हैं।"
          </p>
          <p className="text-xs font-serif text-slate-600 dark:text-rose-200/70 italic">
            "You do not have to react right now."
          </p>
        </div>

        {/* 5 Rescue Steps */}
        <div className="space-y-2">
          {steps.map((st, idx) => {
            const stepNum = idx + 1;
            const isCurrent = activeStep === stepNum;
            const isDone = activeStep > stepNum || hasCompleted;

            return (
              <div
                key={st.num}
                onClick={() => {
                  sound.playSoftClick();
                  setActiveStep(stepNum);
                }}
                className={`cursor-pointer p-3 rounded-2xl border transition-all flex items-start gap-3 ${
                  isCurrent
                    ? 'bg-rose-50 dark:bg-rose-950/40 border-rose-300 dark:border-rose-500/60 shadow-xs'
                    : isDone
                    ? 'bg-emerald-50/60 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800/40'
                    : 'bg-slate-50 dark:bg-slate-900/40 border-slate-100 dark:border-slate-800/60 opacity-80'
                }`}
              >
                <div className={`w-7 h-7 rounded-xl flex items-center justify-center font-mono text-xs font-bold shrink-0 ${
                  isDone
                    ? 'bg-emerald-100 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300'
                    : isCurrent
                    ? 'bg-rose-500 text-white font-bold'
                    : 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                }`}>
                  {isDone ? '✓' : st.num}
                </div>
                <div className="space-y-0.5">
                  <div className="text-sm font-bold font-hindi text-slate-900 dark:text-slate-100">
                    {st.title}
                  </div>
                  <div className="text-xs font-hindi text-slate-600 dark:text-slate-300">
                    {st.desc}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Baba se poochhein query */}
        <div className="p-3.5 rounded-2xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-500/30 space-y-1">
          <div className="flex items-center gap-1.5 text-[10px] font-mono text-purple-700 dark:text-purple-300 font-bold uppercase">
            <HelpCircle className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
            बाबा से पूछें…
          </div>
          <p className="text-xs font-hindi text-purple-900 dark:text-purple-200 italic font-medium">
            "बाबा, इस समय मेरा श्रेष्ठ कर्म क्या है?"
          </p>
        </div>

        {/* Action Button */}
        <div className="pt-1">
          <button
            onClick={handleFinish}
            disabled={hasCompleted}
            className={`w-full py-4 px-6 rounded-2xl font-bold font-serif text-sm tracking-wide shadow-md transition-all flex items-center justify-center gap-2 ${
              hasCompleted
                ? 'bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-500/50 text-emerald-800 dark:text-emerald-200'
                : 'bg-rose-600 hover:bg-rose-700 text-white shadow-rose-600/25 active:scale-[0.98]'
            }`}
          >
            {hasCompleted ? (
              <>
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>स्वराज्य सुरक्षित है!</span>
              </>
            ) : (
              <>
                <span>मैंने प्रतिक्रिया नहीं, स्वराज्य चुना</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </div>

      </div>
    </div>
  );
};
