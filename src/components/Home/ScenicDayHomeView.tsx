import React from 'react';
import { Sparkles, MessageCircle, BarChart2, BookOpen, ChevronRight, User } from 'lucide-react';
import { UserProfile, TodayPurusharth } from '../../types';
import { ScenicLandscapeArt } from '../Common/ScenicLandscapeArt';
import { StatusBar } from '../Common/StatusBar';
import { sound } from '../../utils/audio';

interface ScenicDayHomeViewProps {
  profile: UserProfile;
  todayPurusharth: TodayPurusharth;
  onOpenMeditate: () => void;
  onOpenAskBaba: () => void;
  onOpenTrack: () => void;
  onOpenDiscover: () => void;
  onOpenProfile: () => void;
}

export const ScenicDayHomeView: React.FC<ScenicDayHomeViewProps> = ({
  profile,
  todayPurusharth,
  onOpenMeditate,
  onOpenAskBaba,
  onOpenTrack,
  onOpenDiscover,
  onOpenProfile
}) => {
  const currentDateFormatted = new Date().toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).toLowerCase();

  return (
    <div className="min-h-screen bg-[#0C1222] text-white pb-28 select-none">
      {/* Top Phone Status Bar */}
      <StatusBar dark />

      {/* Header (Exact Mockup: "Welcome, Megan / 23 december, 2020") */}
      <header className="px-6 pt-2 pb-4 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-white">
            Welcome, {profile.name || 'Megan'}
          </h1>
          <p className="text-xs text-slate-400 capitalize mt-0.5">
            {currentDateFormatted}
          </p>
        </div>

        <button
          onClick={onOpenProfile}
          aria-label="Profile"
          className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 transition flex items-center justify-center text-white border border-white/10"
        >
          <User className="w-5 h-5" />
        </button>
      </header>

      {/* Main Scenic Landscape Artwork with Floating Clouds and Activity Card */}
      <div className="px-5 mb-6">
        <ScenicLandscapeArt
          mode="day"
          activityTime="8:00 p.m."
          activityTitle={todayPurusharth.theme || 'Meditation and relaxation'}
          onActivityClick={onOpenMeditate}
        />
      </div>

      {/* Bottom Half: "What do you need today?" (Exact Mockup!) */}
      <div className="px-6 space-y-4">
        <h2 className="text-lg font-bold text-white tracking-tight">
          What do you need today?
        </h2>

        {/* Primary Card: Meditation Zen (Exact Mockup card design!) */}
        <div
          onClick={() => {
            sound.playBell();
            onOpenMeditate();
          }}
          className="w-full bg-[#182033] hover:bg-[#1E293B] p-4 rounded-3xl border border-white/10 shadow-lg cursor-pointer active:scale-[0.99] transition flex items-center justify-between group"
        >
          <div className="flex items-center gap-4">
            {/* Yogi Padmasana Icon in Rounded Square */}
            <div className="w-14 h-14 rounded-2xl bg-white/10 text-white flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition">
              <svg viewBox="0 0 24 24" className="w-7 h-7 stroke-current fill-none stroke-[1.8]">
                {/* Yogi outline */}
                <circle cx="12" cy="6" r="3" />
                <path d="M12 9 C8 9 5 13 5 18 L19 18 C19 13 16 9 12 9 Z" />
                <path d="M7 18 L4 19 L4 21 L8 21" />
                <path d="M17 18 L20 19 L20 21 L16 21" />
              </svg>
            </div>

            <div>
              <h3 className="text-base font-bold text-white">
                Meditation Zen
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Recommend in the morning
              </p>
            </div>
          </div>

          <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-400 group-hover:text-white transition">
            <ChevronRight className="w-4 h-4" />
          </div>
        </div>

        {/* Quick Spiritual Action Cards */}
        <div className="grid grid-cols-2 gap-3 pt-1">
          {/* Ask Baba AI */}
          <div
            onClick={() => {
              sound.playChime();
              onOpenAskBaba();
            }}
            className="bg-[#182033] hover:bg-[#1E293B] p-4 rounded-3xl border border-white/10 shadow cursor-pointer active:scale-[0.98] transition space-y-2 group"
          >
            <div className="w-10 h-10 rounded-2xl bg-amber-400/20 text-amber-300 flex items-center justify-center">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white group-hover:text-amber-300 transition">
                Ask Baba AI
              </h4>
              <p className="text-[11px] text-slate-400 line-clamp-1">
                Find spiritual clarity
              </p>
            </div>
          </div>

          {/* Track Sanskars */}
          <div
            onClick={() => {
              sound.playChime();
              onOpenTrack();
            }}
            className="bg-[#182033] hover:bg-[#1E293B] p-4 rounded-3xl border border-white/10 shadow cursor-pointer active:scale-[0.98] transition space-y-2 group"
          >
            <div className="w-10 h-10 rounded-2xl bg-emerald-400/20 text-emerald-300 flex items-center justify-center">
              <BarChart2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white group-hover:text-emerald-300 transition">
                Track Sanskars
              </h4>
              <p className="text-[11px] text-slate-400 line-clamp-1">
                Peace over reaction
              </p>
            </div>
          </div>
        </div>

        {/* Today's Sankalp Pill */}
        <div
          onClick={onOpenDiscover}
          className="bg-[#141B2D] p-3.5 rounded-2xl border border-white/10 flex items-center justify-between cursor-pointer active:scale-[0.99] transition text-xs"
        >
          <div className="flex items-center gap-2.5">
            <Sparkles className="w-4 h-4 text-amber-400 flex-shrink-0" />
            <span className="text-slate-300 line-clamp-1">
              "{todayPurusharth.sankalp || 'I am a peaceful soul.'}"
            </span>
          </div>
          <span className="text-amber-300 font-bold text-[11px] flex-shrink-0">
            Read Murli &gt;
          </span>
        </div>
      </div>
    </div>
  );
};
