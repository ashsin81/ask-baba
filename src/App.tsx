import React, { useState, useEffect } from 'react';
import { UserProfile, TodayPurusharth, DailyPracticeCheckItem, Language } from './types';
import { storage } from './utils/storage';
import { TODAY_PURUSHARTH_DATA, INITIAL_DAILY_PRACTICES } from './data/askBabaData';

// Scenic Views matching the uploaded design
import { ScenicDayHomeView } from './components/Home/ScenicDayHomeView';
import { ScenicNightHomeView } from './components/Home/ScenicNightHomeView';
import { SleekBottomNav, SleekNavTab } from './components/Navbar/SleekBottomNav';

// Full Feature Overlays
import { AskBabaMeditateView } from './components/Meditate/AskBabaMeditateView';
import { AskBabaAIView } from './components/Chat/AskBabaAIView';
import { AskBabaTrackView } from './components/Track/AskBabaTrackView';
import { AskBabaReflectionView } from './components/Reflection/AskBabaReflectionView';
import { AskBabaDiscoverView } from './components/Discover/AskBabaDiscoverView';
import { AskBabaProfileView } from './components/Profile/AskBabaProfileView';

import { Smartphone, Sparkles, Columns } from 'lucide-react';
import { sound } from './utils/audio';

export const App: React.FC = () => {
  // Navigation: 'day' | 'night' | 'ai' | 'music'
  const [activeTab, setActiveTab] = useState<SleekNavTab>('day');

  // Modals / Secondary Views
  const [showTrack, setShowTrack] = useState<boolean>(false);
  const [showReflection, setShowReflection] = useState<boolean>(false);
  const [showDiscover, setShowDiscover] = useState<boolean>(false);
  const [showProfile, setShowProfile] = useState<boolean>(false);

  // Desktop side-by-side view toggle (matches the uploaded mockup photo showing both Day & Night side-by-side!)
  const [isDualMockupView, setIsDualMockupView] = useState<boolean>(false);

  // User Profile
  const [profile, setProfile] = useState<UserProfile>(() => storage.getProfile());

  // Today's Purusharth
  const [todayPurusharth, setTodayPurusharth] = useState<TodayPurusharth>(TODAY_PURUSHARTH_DATA);

  // Daily practices list
  const [dailyPractices, setDailyPractices] = useState<DailyPracticeCheckItem[]>(() => {
    try {
      const stored = localStorage.getItem('ask_baba_daily_practices');
      return stored ? JSON.parse(stored) : INITIAL_DAILY_PRACTICES;
    } catch {
      return INITIAL_DAILY_PRACTICES;
    }
  });

  // Sync profile to storage
  useEffect(() => {
    storage.setProfile(profile);
  }, [profile]);

  const handleSelectTab = (tab: SleekNavTab) => {
    sound.playChime();
    setShowTrack(false);
    setShowReflection(false);
    setShowDiscover(false);
    setShowProfile(false);
    setActiveTab(tab);
  };

  const handleUpdateProfile = (updated: Partial<UserProfile>) => {
    setProfile((prev) => ({ ...prev, ...updated }));
  };

  const handleResetData = () => {
    localStorage.clear();
    setDailyPractices(INITIAL_DAILY_PRACTICES);
    alert('Ask Baba local data has been reset.');
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#CAD7ED] via-[#D5E1F4] to-[#BCCDE5] text-slate-800 flex flex-col items-center justify-center relative overflow-x-hidden selection:bg-sky-200">
      {/* Soft Ambient Sparkles on Desktop Canvas (Exact Mockup Presentation!) */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none">
        <Sparkles className="absolute top-12 left-16 w-8 h-8 text-white/70 animate-pulse" />
        <Sparkles className="absolute bottom-24 right-20 w-10 h-10 text-white/60 animate-pulse" />
        <Sparkles className="absolute top-1/3 right-12 w-6 h-6 text-white/50" />
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-white/20 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Desktop Mode Switcher Bar */}
      <div className="hidden lg:flex fixed top-4 right-6 z-50 items-center gap-2 bg-white/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/50 shadow-sm text-xs font-semibold">
        <span className="text-slate-500">Preview:</span>
        <button
          onClick={() => setIsDualMockupView(false)}
          className={`px-3 py-1 rounded-full flex items-center gap-1.5 transition ${
            !isDualMockupView ? 'bg-[#0F172A] text-white shadow' : 'text-slate-700 hover:bg-black/5'
          }`}
        >
          <Smartphone className="w-3.5 h-3.5" /> Interactive Single
        </button>
        <button
          onClick={() => setIsDualMockupView(true)}
          className={`px-3 py-1 rounded-full flex items-center gap-1.5 transition ${
            isDualMockupView ? 'bg-[#0F172A] text-white shadow' : 'text-slate-700 hover:bg-black/5'
          }`}
        >
          <Columns className="w-3.5 h-3.5" /> Side-by-Side (Day & Night)
        </button>
      </div>

      {/* Main Container */}
      {isDualMockupView ? (
        /* Dual Mockup Side-by-Side Presentation (Replicates the exact photo!) */
        <div className="w-full max-w-5xl mx-auto px-4 py-8 flex items-center justify-center gap-8 animate-fadeIn">
          {/* Day Screen (Welcome, Megan) */}
          <div className="w-full max-w-[380px] rounded-[44px] shadow-[0_25px_60px_-15px_rgba(15,23,42,0.4)] border-[8px] border-[#0F172A] overflow-hidden bg-[#0C1222] relative">
            <ScenicDayHomeView
              profile={profile}
              todayPurusharth={todayPurusharth}
              onOpenMeditate={() => {
                setIsDualMockupView(false);
                setActiveTab('music');
              }}
              onOpenAskBaba={() => {
                setIsDualMockupView(false);
                setActiveTab('ai');
              }}
              onOpenTrack={() => {
                setIsDualMockupView(false);
                setShowTrack(true);
              }}
              onOpenDiscover={() => {
                setIsDualMockupView(false);
                setShowDiscover(true);
              }}
              onOpenProfile={() => {
                setIsDualMockupView(false);
                setShowProfile(true);
              }}
            />
            {/* Embedded Bottom Nav on Day Screen */}
            <div className="absolute bottom-4 left-0 right-0 px-5 z-20">
              <nav className="w-full bg-[#0B111E]/95 backdrop-blur-xl border border-white/10 rounded-full py-2.5 px-6 shadow-2xl flex items-center justify-around text-slate-400">
                <div className="flex flex-col items-center relative text-white">
                  <span className="w-5 h-5 font-bold">⌂</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F6C90E] shadow-[0_0_8px_#F6C90E] absolute -bottom-1" />
                </div>
                <div className="opacity-70">☽</div>
                <div className="opacity-70">○</div>
                <div className="opacity-70">♫</div>
              </nav>
            </div>
          </div>

          {/* Night Screen (Good Night) */}
          <div className="w-full max-w-[380px] rounded-[44px] shadow-[0_25px_60px_-15px_rgba(15,23,42,0.4)] border-[8px] border-[#0F172A] overflow-hidden bg-[#0B0F1C] relative">
            <ScenicNightHomeView
              profile={profile}
              todayPurusharth={todayPurusharth}
              onOpenMeditate={() => {
                setIsDualMockupView(false);
                setActiveTab('music');
              }}
              onOpenReflection={() => {
                setIsDualMockupView(false);
                setShowReflection(true);
              }}
            />
            {/* Embedded Bottom Nav on Night Screen */}
            <div className="absolute bottom-4 left-0 right-0 px-5 z-20">
              <nav className="w-full bg-[#0B111E]/95 backdrop-blur-xl border border-white/10 rounded-full py-2.5 px-6 shadow-2xl flex items-center justify-around text-slate-400">
                <div className="opacity-70">⌂</div>
                <div className="flex flex-col items-center relative text-white">
                  <span className="w-5 h-5 font-bold">☽</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F6C90E] shadow-[0_0_8px_#F6C90E] absolute -bottom-1" />
                </div>
                <div className="opacity-70">○</div>
                <div className="opacity-70">♫</div>
              </nav>
            </div>
          </div>
        </div>
      ) : (
        /* Interactive Single Phone View */
        <div className="w-full max-w-md my-0 sm:my-6 sm:rounded-[44px] shadow-[0_25px_60px_-15px_rgba(15,23,42,0.45)] sm:border-[8px] sm:border-[#0F172A] overflow-hidden bg-[#0C1222] min-h-screen sm:min-h-[820px] relative">
          {/* Overlays */}
          {showTrack ? (
            <AskBabaTrackView
              onBack={() => setShowTrack(false)}
              onOpenReflection={() => {
                setShowTrack(false);
                setShowReflection(true);
              }}
            />
          ) : showReflection ? (
            <AskBabaReflectionView
              onBack={() => setShowReflection(false)}
            />
          ) : showDiscover ? (
            <AskBabaDiscoverView
              onBack={() => setShowDiscover(false)}
              onOpenMeditation={() => {
                setShowDiscover(false);
                setActiveTab('music');
              }}
            />
          ) : showProfile ? (
            <AskBabaProfileView
              profile={profile}
              onUpdateProfile={handleUpdateProfile}
              onResetData={handleResetData}
            />
          ) : activeTab === 'day' ? (
            <ScenicDayHomeView
              profile={profile}
              todayPurusharth={todayPurusharth}
              onOpenMeditate={() => setActiveTab('music')}
              onOpenAskBaba={() => setActiveTab('ai')}
              onOpenTrack={() => setShowTrack(true)}
              onOpenDiscover={() => setShowDiscover(true)}
              onOpenProfile={() => setShowProfile(true)}
            />
          ) : activeTab === 'night' ? (
            <ScenicNightHomeView
              profile={profile}
              todayPurusharth={todayPurusharth}
              onOpenMeditate={() => setActiveTab('music')}
              onOpenReflection={() => setShowReflection(true)}
            />
          ) : activeTab === 'ai' ? (
            <AskBabaAIView
              onBack={() => setActiveTab('day')}
              onSetSankalp={(newSankalp) => {
                setTodayPurusharth((prev) => ({ ...prev, sankalp: newSankalp }));
              }}
              onSaveToJournal={() => {
                setActiveTab('day');
                setShowReflection(true);
              }}
            />
          ) : (
            <AskBabaMeditateView
              onBack={() => setActiveTab('day')}
            />
          )}

          {/* Sleek Floating Bottom Capsule Navigation (Shown on main tabs) */}
          {!showTrack && !showReflection && !showDiscover && !showProfile && activeTab !== 'ai' && (
            <SleekBottomNav
              activeTab={activeTab}
              onSelectTab={handleSelectTab}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default App;
