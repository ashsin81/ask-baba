import React, { useState } from 'react';
import {
  Menu,
  Bell,
  Sun,
  ChevronRight,
  CheckCircle2,
  Circle,
  Sparkles,
  BarChart2,
  Compass,
  Lightbulb,
  Heart,
  Volume2
} from 'lucide-react';
import { UserProfile, TodayPurusharth, DailyPracticeCheckItem } from '../../types';
import { StatusBar } from '../Common/StatusBar';
import { sound } from '../../utils/audio';
import { tts } from '../../utils/tts';

interface AskBabaHomeViewProps {
  profile: UserProfile;
  todayPurusharth: TodayPurusharth;
  dailyPractices: DailyPracticeCheckItem[];
  onTogglePractice: (id: string) => void;
  onOpenMeditate: () => void;
  onOpenTrack: () => void;
  onOpenAskBaba: () => void;
  onOpenExplore: () => void;
  onOpenProfile: () => void;
  onOpenNotifications: () => void;
}

export const AskBabaHomeView: React.FC<AskBabaHomeViewProps> = ({
  profile,
  todayPurusharth,
  dailyPractices,
  onTogglePractice,
  onOpenMeditate,
  onOpenTrack,
  onOpenAskBaba,
  onOpenExplore,
  onOpenProfile,
  onOpenNotifications
}) => {
  const [showPurusharthModal, setShowPurusharthModal] = useState(false);
  const [isSpeakingSankalp, setIsSpeakingSankalp] = useState(false);

  // Time of day dynamic greeting
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour >= 3 && hour < 12) return 'Good Morning';
    if (hour >= 12 && hour < 17) return 'Good Afternoon';
    if (hour >= 17 && hour < 21) return 'Good Evening';
    return 'Peaceful Night';
  };

  // Calculate completion percentage based on current user practices
  const completedCount = dailyPractices.filter((p) => p.completed).length;
  const progressPercent = dailyPractices.length
    ? Math.round((completedCount / dailyPractices.length) * 100)
    : 78;

  const handleReadSankalp = () => {
    sound.playBell();
    setIsSpeakingSankalp(true);
    tts.speak(
      `${todayPurusharth.theme}. ${todayPurusharth.thought}. संकल्प: ${todayPurusharth.sankalp}`,
      profile.language,
      0.9
    );
    setTimeout(() => setIsSpeakingSankalp(false), 5000);
  };

  return (
    <div className="min-h-screen bg-[#F8EEE4] text-[#302B2B] pb-28">
      {/* Top Phone Status Bar */}
      <StatusBar />

      {/* Main Home Header */}
      <header className="px-5 pt-2 pb-4 flex items-center justify-between relative">
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenProfile}
            aria-label="Open menu"
            className="w-10 h-10 rounded-xl bg-white/70 border border-[#E4D3C0] flex items-center justify-center text-[#711D35] hover:bg-white active:scale-95 transition shadow-sm"
          >
            <Menu className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-xl font-bold font-serif text-[#711D35] flex items-center gap-1.5">
              {getGreeting()}, {profile.name || 'Himanshu'}! <span className="text-amber-500">✨</span>
            </h1>
            <p className="text-xs text-[#8E8686] flex items-center gap-1 font-medium">
              Stay connected with your Higher Self <span className="text-amber-500">✨</span>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Madhuban Artistic Stamp Illustration */}
          <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#EED5BC] to-[#FCEEE2] border border-[#DFC896]/40 p-1 flex items-center justify-center shadow-inner overflow-hidden">
            <svg viewBox="0 0 100 100" className="w-full h-full opacity-90 drop-shadow-sm">
              <circle cx="50" cy="50" r="48" fill="#FBF3EA" />
              {/* Sun rising over Madhuban peace dome */}
              <circle cx="50" cy="36" r="14" fill="#F6AD55" opacity="0.6" />
              <path d="M10 80 Q50 60 90 80 L90 90 L10 90 Z" fill="#B68A45" opacity="0.5" />
              <path d="M25 80 Q50 48 75 80 Z" fill="#711D35" opacity="0.85" />
              <circle cx="50" cy="46" r="4" fill="#FFF" />
              {/* Golden Kalash spire */}
              <line x1="50" y1="46" x2="50" y2="30" stroke="#B68A45" strokeWidth="3" />
            </svg>
          </div>

          <button
            onClick={onOpenNotifications}
            aria-label="Notifications"
            className="w-10 h-10 rounded-xl bg-white/70 border border-[#E4D3C0] flex items-center justify-center text-[#711D35] hover:bg-white active:scale-95 transition shadow-sm relative"
          >
            <Bell className="w-5 h-5" />
            <span className="w-2 h-2 rounded-full bg-[#E53E3E] absolute top-2 right-2 ring-2 ring-white animate-pulse" />
          </button>
        </div>
      </header>

      {/* Main Content Sections */}
      <main className="px-5 space-y-5">
        {/* 1. Today's Purusharth Banner Card */}
        <div
          onClick={() => setShowPurusharthModal(true)}
          className="w-full rounded-2xl bg-gradient-to-r from-[#711D35] via-[#5C1428] to-[#400B1B] text-white p-4 shadow-md shadow-[#711D35]/15 border border-[#B68A45]/30 cursor-pointer active:scale-[0.99] transition relative overflow-hidden group"
        >
          {/* Subtle golden corner light */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/10 rounded-full blur-2xl pointer-events-none" />

          <div className="flex items-center justify-between gap-3 relative z-10">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-amber-500/20 border border-amber-300/30 flex items-center justify-center flex-shrink-0 text-amber-300 shadow-inner">
                <Sun className="w-6 h-6 animate-spin-slow" />
              </div>
              <div>
                <span className="text-[11px] font-semibold tracking-wider text-amber-200/90 uppercase block">
                  Today's Purusharth
                </span>
                <p className="text-sm font-medium text-white/95 leading-snug line-clamp-2">
                  {todayPurusharth.theme}: {todayPurusharth.explanation}
                </p>
              </div>
            </div>
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-amber-200 group-hover:translate-x-0.5 transition flex-shrink-0">
              <ChevronRight className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* 2. Daily Quick Action Buttons (Exact mockup icons and circular pills) */}
        <section aria-label="Quick Actions" className="grid grid-cols-4 gap-3">
          {/* Meditate */}
          <button
            onClick={onOpenMeditate}
            className="flex flex-col items-center gap-1.5 group active:scale-95 transition"
          >
            <div className="w-14 h-14 rounded-full bg-[#FCE8ED] border border-[#F5C6CE] flex items-center justify-center text-[#C53030] shadow-sm group-hover:shadow-md transition">
              <Sparkles className="w-6 h-6" />
            </div>
            <span className="text-xs font-semibold text-[#302B2B]">Meditate</span>
          </button>

          {/* Track */}
          <button
            onClick={onOpenTrack}
            className="flex flex-col items-center gap-1.5 group active:scale-95 transition"
          >
            <div className="w-14 h-14 rounded-full bg-[#FEF3C7] border border-[#FDE68A] flex items-center justify-center text-[#D97706] shadow-sm group-hover:shadow-md transition">
              <BarChart2 className="w-6 h-6" />
            </div>
            <span className="text-xs font-semibold text-[#302B2B]">Track</span>
          </button>

          {/* Ask Baba */}
          <button
            onClick={onOpenAskBaba}
            className="flex flex-col items-center gap-1.5 group active:scale-95 transition"
          >
            <div className="w-14 h-14 rounded-full bg-[#FEF9C3] border border-[#FEF08A] flex items-center justify-center text-[#CA8A04] shadow-sm group-hover:shadow-md transition relative">
              <Lightbulb className="w-6 h-6" />
              <span className="w-2 h-2 rounded-full bg-amber-400 absolute top-2 right-2 animate-ping" />
            </div>
            <span className="text-xs font-semibold text-[#711D35] font-bold">Ask Baba</span>
          </button>

          {/* Explore */}
          <button
            onClick={onOpenExplore}
            className="flex flex-col items-center gap-1.5 group active:scale-95 transition"
          >
            <div className="w-14 h-14 rounded-full bg-[#E0E7FF] border border-[#C7D2FE] flex items-center justify-center text-[#4F46E5] shadow-sm group-hover:shadow-md transition">
              <Compass className="w-6 h-6" />
            </div>
            <span className="text-xs font-semibold text-[#302B2B]">Explore</span>
          </button>
        </section>

        {/* 3. Your Progress Card (Exact mockup layout with Circular Ring + Checklist) */}
        <section className="bg-white/90 rounded-2xl p-4 border border-[#DFC896]/30 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm font-bold text-[#302B2B]">Your Progress</h2>
            <button
              onClick={onOpenTrack}
              className="text-xs font-semibold text-[#711D35] hover:underline flex items-center gap-0.5"
            >
              View Details <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="flex items-center gap-5">
            {/* SVG Circular Progress Gauge */}
            <div className="relative w-24 h-24 flex items-center justify-center flex-shrink-0">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                {/* Background circle */}
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="#EFE2D3"
                  strokeWidth="9"
                />
                {/* Active progress circle */}
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="#38A169"
                  strokeWidth="9"
                  strokeDasharray="251.2"
                  strokeDashoffset={251.2 - (251.2 * progressPercent) / 100}
                  strokeLinecap="round"
                  className="transition-all duration-700 ease-out"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-2xl font-bold font-serif text-[#302B2B]">
                  {progressPercent}%
                </span>
              </div>
            </div>

            {/* Checklist of core routine practices */}
            <div className="flex-1 space-y-2.5">
              {dailyPractices.slice(0, 3).map((item) => (
                <div
                  key={item.id}
                  onClick={() => onTogglePractice(item.id)}
                  className="flex items-center gap-2.5 cursor-pointer group"
                >
                  {item.completed ? (
                    <CheckCircle2 className="w-4 h-4 text-[#38A169] flex-shrink-0" />
                  ) : (
                    <Circle className="w-4 h-4 text-[#C5A866] flex-shrink-0 group-hover:text-[#711D35]" />
                  )}
                  <span
                    className={`text-xs font-medium transition ${
                      item.completed ? 'text-[#302B2B]' : 'text-[#8E8686]'
                    }`}
                  >
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Inspirational Quote Banner */}
        <div className="bg-[#FAF4EB] rounded-2xl py-3.5 px-4 text-center border border-[#DFC896]/40 shadow-inner relative overflow-hidden">
          <div className="text-xs italic font-serif text-[#711D35] font-medium tracking-wide">
            "Be the light in your own life"
          </div>
          <div className="w-8 h-0.5 bg-[#B68A45]/40 mx-auto mt-1 rounded-full" />
        </div>

        {/* 5. Today's Sankalp Pill with Audio Reader */}
        <div className="bg-white/80 rounded-2xl p-4 border border-[#DFC896]/30 shadow-sm flex items-start gap-3 justify-between">
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#711D35]/10 text-[#711D35] flex items-center justify-center flex-shrink-0 mt-0.5">
              <Heart className="w-5 h-5 text-[#711D35]" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#B68A45]">
                Today's Sankalp
              </span>
              <p className="text-xs font-semibold text-[#302B2B] mt-0.5">
                "{todayPurusharth.sankalp}"
              </p>
            </div>
          </div>
          <button
            onClick={handleReadSankalp}
            aria-label="Listen to Sankalp"
            className="w-8 h-8 rounded-full bg-amber-50 border border-amber-200 text-[#B68A45] hover:bg-amber-100 flex items-center justify-center flex-shrink-0"
          >
            <Volume2 className={`w-4 h-4 ${isSpeakingSankalp ? 'animate-bounce text-[#711D35]' : ''}`} />
          </button>
        </div>

        {/* 6. Quick Meditation Launcher Card */}
        <div
          onClick={onOpenMeditate}
          className="rounded-2xl bg-gradient-to-r from-[#27223B] to-[#1E192F] text-white p-4 border border-[#453C66]/60 shadow-md cursor-pointer active:scale-[0.99] transition flex items-center justify-between"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-400/20 border border-amber-300/40 flex items-center justify-center text-amber-300">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xs font-bold text-amber-200 uppercase tracking-wider">
                Rajyoga Studio
              </h3>
              <p className="text-sm font-semibold text-white">
                Enter silence with Supreme Soul
              </p>
            </div>
          </div>
          <span className="px-3 py-1 rounded-full bg-amber-400/20 text-amber-200 text-xs font-bold border border-amber-400/30">
            Start
          </span>
        </div>
      </main>

      {/* Modal: Today's Full Purusharth Detail (PRD Section 4.2) */}
      {showPurusharthModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fadeIn">
          <div className="bg-[#F8EEE4] rounded-3xl max-w-sm w-full p-6 border border-[#DFC896] shadow-2xl relative">
            <div className="w-12 h-1 bg-[#B68A45]/30 rounded-full mx-auto mb-4" />

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#711D35] text-amber-300 flex items-center justify-center">
                <Sun className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#B68A45]">
                  Daily Purusharth
                </span>
                <h3 className="text-lg font-bold font-serif text-[#711D35]">
                  {todayPurusharth.theme}
                </h3>
              </div>
            </div>

            <div className="space-y-4 text-xs text-[#302B2B]">
              <div className="bg-white/80 p-3.5 rounded-2xl border border-[#DFC896]/30">
                <h4 className="font-bold text-[#711D35] mb-1">Thought for Today:</h4>
                <p className="italic">"{todayPurusharth.thought}"</p>
              </div>

              <div className="bg-white/80 p-3.5 rounded-2xl border border-[#DFC896]/30">
                <h4 className="font-bold text-[#711D35] mb-1">Practical Exercise:</h4>
                <p>{todayPurusharth.practice}</p>
              </div>

              <div className="bg-[#FAF4EB] p-3.5 rounded-2xl border border-[#B68A45]/40">
                <h4 className="font-bold text-[#B68A45] mb-1">Sankalp (Affirmation):</h4>
                <p className="font-medium text-[#711D35]">"{todayPurusharth.sankalp}"</p>
              </div>

              {todayPurusharth.murliReference && (
                <p className="text-[10px] text-[#8E8686] italic text-right">
                  Source: {todayPurusharth.murliReference}
                </p>
              )}
            </div>

            <div className="mt-5 flex gap-2">
              <button
                onClick={() => {
                  handleReadSankalp();
                  setShowPurusharthModal(false);
                }}
                className="flex-1 py-2.5 rounded-xl bg-[#711D35] text-white font-bold text-xs shadow-md active:scale-95 transition"
              >
                Accept & Practice
              </button>
              <button
                onClick={() => setShowPurusharthModal(false)}
                className="px-4 py-2.5 rounded-xl bg-white border border-[#DFC896] text-[#711D35] font-semibold text-xs"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
