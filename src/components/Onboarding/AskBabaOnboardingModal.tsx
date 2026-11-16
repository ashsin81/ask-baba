import React, { useState } from 'react';
import { UserProfile, Language, ExperienceLevel } from '../../types';
import { Sparkles, ArrowRight, CheckCircle2, Sun, Heart, Moon, Shield } from 'lucide-react';
import { sound } from '../../utils/audio';
import confetti from 'canvas-confetti';
import { getTranslation } from '../../utils/translations';

interface AskBabaOnboardingModalProps {
  initialProfile: UserProfile;
  currentLanguage: Language;
  onSelectLanguage: (lang: Language) => void;
  onComplete: (profile: UserProfile) => void;
  onClose?: () => void;
}

export const AskBabaOnboardingModal: React.FC<AskBabaOnboardingModalProps> = ({
  initialProfile,
  currentLanguage,
  onSelectLanguage,
  onComplete,
  onClose
}) => {
  const [step, setStep] = useState<number>(1);
  const [name, setName] = useState<string>(initialProfile.name || '');
  const [experienceLevel, setExperienceLevel] = useState<ExperienceLevel>(initialProfile.experienceLevel || 'seeker');
  const [selectedGoals, setSelectedGoals] = useState<string[]>(
    initialProfile.selectedGoals?.length
      ? initialProfile.selectedGoals
      : ['Experience inner peace', 'Learn Rajyoga meditation', 'Understand soul consciousness']
  );
  const [routineMeditation, setRoutineMeditation] = useState<string>('Daily');
  const [routineAmritvela, setRoutineAmritvela] = useState<boolean>(true);
  const [routineMurli, setRoutineMurli] = useState<boolean>(true);
  const [routineReminders, setRoutineReminders] = useState<boolean>(true);

  const t = getTranslation(currentLanguage);

  const availableGoals = [
    { id: 'g1', titleEn: 'Experience inner peace', titleHi: 'आंतरिक शांति का अनुभव', titlePa: 'ਅੰਦਰੂਨੀ ਸ਼ਾਂਤੀ ਦਾ ਅਨੁਭਵ' },
    { id: 'g2', titleEn: 'Learn Rajyoga meditation', titleHi: 'राजयोग ध्यान सीखना', titlePa: 'ਰਾਜਯੋਗ ਧਿਆਨ ਸਿੱਖਣਾ' },
    { id: 'g3', titleEn: 'Understand soul consciousness', titleHi: 'आत्म-अभिमानी स्थिति समझना', titlePa: 'ਆਤਮਿਕ ਸਥਿਤੀ ਨੂੰ ਸਮਝਣਾ' },
    { id: 'g4', titleEn: 'Strengthen connection with Supreme Soul', titleHi: 'शिवबाबा से गहरा संबंध जोड़ना', titlePa: 'ਸ਼ਿਵਬਾਬਾ ਨਾਲ ਗੂੜ੍ਹਾ ਸਬੰਧ ਜੋੜਨਾ' },
    { id: 'g5', titleEn: 'Improve concentration & calm thoughts', titleHi: 'एकाग्रता बढ़ाना व व्यर्थ रोकना', titlePa: 'ਇਕਾਗਰਤਾ ਵਧਾਉਣਾ ਤੇ ਵਿਅਰਥ ਰੋਕਣਾ' },
    { id: 'g6', titleEn: 'Transform negative sanskars', titleHi: 'पुराने संस्कारों का परिवर्तन', titlePa: 'ਪੁਰਾਣੇ ਸੁਭਾਅ ਦਾ ਪਰਿਵਰਤਨ' },
    { id: 'g7', titleEn: 'Build daily spiritual discipline', titleHi: 'दैनिक आध्यात्मिक नियम बनाना', titlePa: 'ਰੋਜ਼ਾਨਾ ਰੂਹਾਨੀ ਨੇਮ ਬਣਾਉਣਾ' },
    { id: 'g8', titleEn: 'Improve relationships with good wishes', titleHi: 'शुभभावना से संबंध मधुर बनाना', titlePa: 'ਸ਼ੁਭ ਭਾਵਨਾ ਨਾਲ ਸਬੰਧ ਮਿੱਠੇ ਬਣਾਉਣਾ' },
    { id: 'g9', titleEn: 'Understand deep BK knowledge', titleHi: 'ब्रह्माकुमारीज़ ईश्वरीय ज्ञान समझना', titlePa: 'ਬ੍ਰਹਮਾਕੁਮਾਰੀਜ਼ ਰੂਹਾਨੀ ਗਿਆਨ ਸਮਝਣਾ' }
  ];

  const toggleGoal = (goalText: string) => {
    sound.playSoftClick();
    setSelectedGoals((prev) =>
      prev.includes(goalText) ? prev.filter((g) => g !== goalText) : [...prev, goalText]
    );
  };

  const handleFinish = () => {
    sound.playTibetanBowl();
    confetti({
      particleCount: 70,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#711D35', '#B68A45', '#F5C6CE', '#FFD700']
    });

    const updated: UserProfile = {
      ...initialProfile,
      name: name.trim() || 'Devoted Soul',
      language: currentLanguage,
      experienceLevel,
      selectedGoals,
      onboarded: true
    };
    onComplete(updated);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md p-4 animate-fadeIn">
      <div className="bg-[#F8EEE4] dark:bg-[#1E192F] text-[#302B2B] dark:text-white rounded-3xl max-w-md w-full p-6 border border-[#DFC896] dark:border-[#453C66] shadow-2xl relative max-h-[92vh] overflow-y-auto">
        {/* Step indicator header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-[#711D35] text-amber-300 flex items-center justify-center font-bold text-xs">
              {step}/6
            </div>
            <span className="text-xs font-bold text-[#B68A45] uppercase tracking-wider">
              {step === 1 && 'Welcome'}
              {step === 2 && 'Identity & Language'}
              {step === 3 && 'Experience'}
              {step === 4 && 'Spiritual Goals'}
              {step === 5 && 'Daily Routine'}
              {step === 6 && 'Your Sanctuary'}
            </span>
          </div>

          {/* Quick Language switch buttons */}
          <div className="flex items-center bg-white/60 dark:bg-[#27223B] p-0.5 rounded-full border border-[#D9B8A5]">
            {(['en', 'hi', 'pa'] as const).map((lang) => (
              <button
                key={lang}
                onClick={() => {
                  sound.playSoftClick();
                  onSelectLanguage(lang);
                }}
                className={`px-2 py-0.5 rounded-full text-[10px] font-bold transition-all ${
                  currentLanguage === lang
                    ? 'bg-[#711D35] text-white shadow-xs'
                    : 'text-[#6B6363] dark:text-white/60'
                }`}
              >
                {lang === 'en' ? 'EN' : lang === 'hi' ? 'हिन्दी' : 'ਪੰਜਾਬੀ'}
              </button>
            ))}
          </div>
        </div>

        {/* Screen 1 — Welcome */}
        {step === 1 && (
          <div className="space-y-4 text-center py-4">
            <div className="relative w-20 h-20 mx-auto rounded-3xl bg-gradient-to-tr from-[#711D35] via-[#8A2C3F] to-[#B68A45] p-1 shadow-lg">
              <div className="w-full h-full rounded-[20px] bg-[#F8EEE4] dark:bg-[#27223B] flex items-center justify-center relative overflow-hidden">
                <div className="w-4 h-4 rounded-full bg-white shadow-[0_0_12px_#FFF,0_0_20px_#F59E0B] animate-pulse absolute top-3" />
                <Sun className="w-9 h-9 text-[#B68A45] translate-y-2" />
              </div>
            </div>

            <h2 className="text-2xl font-black font-serif text-[#711D35] dark:text-amber-200">
              {t.onboarding.welcomeTitle}
            </h2>
            <p className="text-xs font-serif italic text-[#B68A45] font-bold">
              Track · Reflect · Transform
            </p>
            <p className="text-xs text-[#6B6363] dark:text-white/70 leading-relaxed px-4">
              "{t.onboarding.welcomeSubtitle}"
            </p>

            <button
              onClick={() => {
                sound.playSoftClick();
                setStep(2);
              }}
              className="w-full mt-4 py-3 rounded-2xl bg-gradient-to-r from-[#711D35] to-[#8A2C3F] text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 active:scale-95 transition"
            >
              {t.onboarding.beginBtn} <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Screen 2 — Personal Details & Language */}
        {step === 2 && (
          <div className="space-y-4 py-2">
            <h3 className="text-lg font-bold font-serif text-[#711D35] dark:text-amber-200">
              {t.onboarding.nameLabel}
            </h3>
            <p className="text-xs text-[#6B6363] dark:text-white/70">
              Enter your name so Ask Baba can address you with warmth and respect.
            </p>

            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Himanshu, Rahul, Shanti..."
              className="w-full p-3.5 rounded-2xl bg-white dark:bg-[#27223B] border border-[#DFC896] dark:border-[#453C66] text-sm text-[#302B2B] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#711D35]"
            />

            <div>
              <label className="text-xs font-bold text-[#B68A45] block mb-2">
                {t.onboarding.languageSelect}
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'en' as const, label: 'English', sub: 'Latin' },
                  { id: 'hi' as const, label: 'हिन्दी', sub: 'Devanagari' },
                  { id: 'pa' as const, label: 'ਪੰਜਾਬੀ', sub: 'Gurmukhi' }
                ].map((l) => (
                  <button
                    key={l.id}
                    onClick={() => {
                      sound.playSoftClick();
                      onSelectLanguage(l.id);
                    }}
                    className={`p-3 rounded-2xl border text-center transition ${
                      currentLanguage === l.id
                        ? 'bg-[#711D35] text-white border-[#711D35] font-bold shadow-sm'
                        : 'bg-white dark:bg-[#27223B] border-[#DFC896]/60 dark:border-[#453C66] text-[#302B2B] dark:text-white'
                    }`}
                  >
                    <div className="text-xs font-bold">{l.label}</div>
                    <div className="text-[10px] opacity-75">{l.sub}</div>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex gap-2 pt-2">
              <button
                onClick={() => setStep(1)}
                className="px-4 py-3 rounded-2xl bg-white dark:bg-[#27223B] border border-[#DFC896] text-xs font-bold"
              >
                Back
              </button>
              <button
                onClick={() => {
                  sound.playSoftClick();
                  setStep(3);
                }}
                className="flex-1 py-3 rounded-2xl bg-[#711D35] text-white font-bold text-xs shadow-md"
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {/* Screen 3 — Spiritual Experience */}
        {step === 3 && (
          <div className="space-y-4 py-2">
            <h3 className="text-lg font-bold font-serif text-[#711D35] dark:text-amber-200">
              {t.onboarding.experienceTitle}
            </h3>
            <p className="text-xs text-[#6B6363] dark:text-white/70">
              This tunes explanation depth and terminology while keeping philosophy identical.
            </p>

            <div className="space-y-2.5">
              {[
                { id: 'beginner' as const, title: 'Beginner', desc: 'New to meditation, curious about peace and soul awareness.' },
                { id: 'seeker' as const, title: 'Exploring spirituality', desc: 'Exploring deeper truths of soul, supreme soul, and karma.' },
                { id: 'practitioner' as const, title: 'Regular practitioner', desc: 'Active meditation routine, practicing stillness and self-observation.' },
                { id: 'bk_student' as const, title: 'BK student', desc: 'Regular Murli study, Amritvela practice, Rajyoga student.' }
              ].map((lvl) => (
                <div
                  key={lvl.id}
                  onClick={() => {
                    sound.playSoftClick();
                    setExperienceLevel(lvl.id);
                  }}
                  className={`p-3.5 rounded-2xl border cursor-pointer transition select-none flex items-start gap-3 ${
                    experienceLevel === lvl.id
                      ? 'bg-white dark:bg-[#27223B] border-[#711D35] ring-2 ring-[#711D35]/30'
                      : 'bg-white/60 dark:bg-[#1E192F]/60 border-[#DFC896]/40 opacity-80'
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-full border mt-0.5 flex items-center justify-center flex-shrink-0 ${
                      experienceLevel === lvl.id ? 'border-[#711D35] bg-[#711D35] text-white' : 'border-slate-400'
                    }`}
                  >
                    {experienceLevel === lvl.id && <div className="w-2 h-2 rounded-full bg-white" />}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#302B2B] dark:text-white">{lvl.title}</h4>
                    <p className="text-[11px] text-[#6B6363] dark:text-white/60 mt-0.5">{lvl.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-2 pt-2">
              <button
                onClick={() => setStep(2)}
                className="px-4 py-3 rounded-2xl bg-white dark:bg-[#27223B] border border-[#DFC896] text-xs font-bold"
              >
                Back
              </button>
              <button
                onClick={() => {
                  sound.playSoftClick();
                  setStep(4);
                }}
                className="flex-1 py-3 rounded-2xl bg-[#711D35] text-white font-bold text-xs shadow-md"
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {/* Screen 4 — Goals */}
        {step === 4 && (
          <div className="space-y-4 py-2">
            <h3 className="text-lg font-bold font-serif text-[#711D35] dark:text-amber-200">
              {t.onboarding.goalsTitle}
            </h3>
            <p className="text-xs text-[#6B6363] dark:text-white/70">
              Choose the spiritual practices and qualities you wish to focus on:
            </p>

            <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
              {availableGoals.map((g) => {
                const label = currentLanguage === 'pa' ? g.titlePa : currentLanguage === 'hi' ? g.titleHi : g.titleEn;
                const isSelected = selectedGoals.includes(g.titleEn) || selectedGoals.includes(label);

                return (
                  <div
                    key={g.id}
                    onClick={() => toggleGoal(g.titleEn)}
                    className={`p-3 rounded-2xl border cursor-pointer transition select-none flex items-center justify-between text-xs font-medium ${
                      isSelected
                        ? 'bg-[#FAF4EB] dark:bg-[#27223B] border-[#711D35] text-[#711D35] dark:text-amber-200 font-bold'
                        : 'bg-white/60 dark:bg-[#1E192F]/60 border-[#DFC896]/40 text-[#302B2B] dark:text-white'
                    }`}
                  >
                    <span>{label}</span>
                    <CheckCircle2
                      className={`w-4 h-4 ${isSelected ? 'text-[#711D35] dark:text-amber-300' : 'text-slate-300 dark:text-white/20'}`}
                    />
                  </div>
                );
              })}
            </div>

            <div className="flex gap-2 pt-2">
              <button
                onClick={() => setStep(3)}
                className="px-4 py-3 rounded-2xl bg-white dark:bg-[#27223B] border border-[#DFC896] text-xs font-bold"
              >
                Back
              </button>
              <button
                onClick={() => {
                  sound.playSoftClick();
                  setStep(5);
                }}
                className="flex-1 py-3 rounded-2xl bg-[#711D35] text-white font-bold text-xs shadow-md"
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {/* Screen 5 — Current Routine */}
        {step === 5 && (
          <div className="space-y-4 py-2">
            <h3 className="text-lg font-bold font-serif text-[#711D35] dark:text-amber-200">
              {t.onboarding.routineTitle}
            </h3>
            <p className="text-xs text-[#6B6363] dark:text-white/70">
              Customize your initial spiritual practices (can be modified anytime):
            </p>

            <div className="space-y-3">
              <div className="p-3.5 rounded-2xl bg-white dark:bg-[#27223B] border border-[#DFC896]/60 dark:border-[#453C66] flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-[#302B2B] dark:text-white">Amritvela (3:30 AM)</h4>
                  <p className="text-[11px] text-[#6B6363] dark:text-white/60">Connect in nectar hours</p>
                </div>
                <input
                  type="checkbox"
                  checked={routineAmritvela}
                  onChange={(e) => setRoutineAmritvela(e.target.checked)}
                  className="w-5 h-5 accent-[#711D35]"
                />
              </div>

              <div className="p-3.5 rounded-2xl bg-white dark:bg-[#27223B] border border-[#DFC896]/60 dark:border-[#453C66] flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-[#302B2B] dark:text-white">Murli Study</h4>
                  <p className="text-[11px] text-[#6B6363] dark:text-white/60">Daily spiritual wisdom</p>
                </div>
                <input
                  type="checkbox"
                  checked={routineMurli}
                  onChange={(e) => setRoutineMurli(e.target.checked)}
                  className="w-5 h-5 accent-[#711D35]"
                />
              </div>

              <div className="p-3.5 rounded-2xl bg-white dark:bg-[#27223B] border border-[#DFC896]/60 dark:border-[#453C66] flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-[#302B2B] dark:text-white">Traffic Control Pauses</h4>
                  <p className="text-[11px] text-[#6B6363] dark:text-white/60">Gentle mindful reminders</p>
                </div>
                <input
                  type="checkbox"
                  checked={routineReminders}
                  onChange={(e) => setRoutineReminders(e.target.checked)}
                  className="w-5 h-5 accent-[#711D35]"
                />
              </div>
            </div>

            <div className="flex gap-2 pt-2">
              <button
                onClick={() => setStep(4)}
                className="px-4 py-3 rounded-2xl bg-white dark:bg-[#27223B] border border-[#DFC896] text-xs font-bold"
              >
                Back
              </button>
              <button
                onClick={() => {
                  sound.playSoftClick();
                  setStep(6);
                }}
                className="flex-1 py-3 rounded-2xl bg-[#711D35] text-white font-bold text-xs shadow-md"
              >
                Generate Dashboard
              </button>
            </div>
          </div>
        )}

        {/* Screen 6 — Dashboard Ready */}
        {step === 6 && (
          <div className="space-y-4 py-2 text-center">
            <div className="w-16 h-16 rounded-3xl bg-amber-100 dark:bg-amber-950/60 border border-amber-300 mx-auto flex items-center justify-center text-amber-500">
              <Sparkles className="w-8 h-8 animate-spin-slow" />
            </div>

            <h3 className="text-xl font-black font-serif text-[#711D35] dark:text-amber-200">
              Om Shanti, {name || 'Divine Soul'}!
            </h3>
            <p className="text-xs text-[#6B6363] dark:text-white/70 leading-relaxed px-2">
              Your personalized sanctuary is established. Track your daily practices, reflect upon your thoughts, and experience spiritual transformation every single day.
            </p>

            <div className="bg-white/80 dark:bg-[#27223B] p-4 rounded-2xl border border-[#DFC896]/40 text-left text-xs space-y-1.5">
              <div className="font-bold text-[#711D35] dark:text-amber-300">
                ⭐ {selectedGoals.length} Spiritual Focus Areas Configured
              </div>
              <div className="text-[#6B6363] dark:text-white/60">
                Language: {currentLanguage === 'en' ? 'English' : currentLanguage === 'hi' ? 'हिन्दी' : 'ਪੰਜਾਬੀ'}
              </div>
              <div className="text-[#6B6363] dark:text-white/60">
                Experience Level: {experienceLevel}
              </div>
            </div>

            <button
              onClick={handleFinish}
              className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-[#711D35] to-[#8A2C3F] text-white font-bold text-sm shadow-xl active:scale-95 transition"
            >
              {t.onboarding.finishBtn}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
