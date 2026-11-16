import React, { useState, useEffect } from 'react';
import { UserProfile, AskBabaTab, Language, DailyPracticeCheckItem, TodayPurusharth } from './types';
import { storage } from './utils/storage';
import { Header } from './components/Header';
import { AskBabaNavbar } from './components/Navbar/AskBabaNavbar';
import { AskBabaHomeView } from './components/Home/AskBabaHomeView';
import { AskBabaJourneyView } from './components/Journey/AskBabaJourneyView';
import { AskBabaMeditateView } from './components/Meditate/AskBabaMeditateView';
import { AskBabaDiscoverView } from './components/Discover/AskBabaDiscoverView';
import { AskBabaProfileView } from './components/Profile/AskBabaProfileView';
import { AskBabaAIView } from './components/Chat/AskBabaAIView';
import { AskBabaReflectionView } from './components/Reflection/AskBabaReflectionView';
import { AskBabaTrackView } from './components/Track/AskBabaTrackView';
import { AskBabaOnboardingModal } from './components/Onboarding/AskBabaOnboardingModal';
import { TODAY_PURUSHARTH_DATA, INITIAL_DAILY_PRACTICES } from './data/askBabaData';
import { Sparkles, Bell, CheckCircle2, X } from 'lucide-react';
import { sound } from './utils/audio';
import { getTranslation } from './utils/translations';
import confetti from 'canvas-confetti';

export const App: React.FC = () => {
  // User profile with theme & language preference
  const [profile, setProfile] = useState<UserProfile>(() => storage.getProfile());

  // Current active language: en | hi | pa
  const [currentLanguage, setCurrentLanguage] = useState<Language>(() => {
    return (profile.language as Language) || 'en';
  });

  // Navigation tab: 'home' | 'journey' | 'meditate' | 'discover' | 'you'
  const [activeTab, setActiveTab] = useState<AskBabaTab>('home');

  // Daily practices list
  const [dailyPractices, setDailyPractices] = useState<DailyPracticeCheckItem[]>(() => {
    try {
      const stored = localStorage.getItem('ask_baba_daily_practices');
      return stored ? JSON.parse(stored) : INITIAL_DAILY_PRACTICES;
    } catch {
      return INITIAL_DAILY_PRACTICES;
    }
  });

  // Today's Purusharth data
  const [todayPurusharth, setTodayPurusharth] = useState<TodayPurusharth>(TODAY_PURUSHARTH_DATA);

  // Modals & Overlays
  const [showAskBabaModal, setShowAskBabaModal] = useState<boolean>(false);
  const [showReflectionModal, setShowReflectionModal] = useState<boolean>(false);
  const [showTrackModal, setShowTrackModal] = useState<boolean>(false);
  const [showNotificationsModal, setShowNotificationsModal] = useState<boolean>(false);
  const [showOnboarding, setShowOnboarding] = useState<boolean>(() => {
    return !localStorage.getItem('ask_baba_onboarded_v1');
  });

  // Notifications preferences
  const [notifications, setNotifications] = useState({
    amritvela: true,
    trafficControl: true,
    evening: true,
    night: true
  });

  const t = getTranslation(currentLanguage);
  const isDark = profile.theme === 'dark' || profile.theme === 'midnight';

  // Sync profile to storage
  useEffect(() => {
    storage.setProfile(profile);
  }, [profile]);

  // Synchronize HTML dark mode class with profile.theme
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  // Sync daily practices to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('ask_baba_daily_practices', JSON.stringify(dailyPractices));
    } catch (err) {
      console.error(err);
    }
  }, [dailyPractices]);

  // Toggle Theme between Warm Ivory (Day) & Midnight (Night)
  const handleToggleTheme = () => {
    const nextTheme = isDark ? 'light' : 'midnight';
    setProfile((prev) => ({ ...prev, theme: nextTheme }));
  };

  // Language Switch Handler (EN, HI, PA)
  const handleSelectLanguage = (lang: Language) => {
    setCurrentLanguage(lang);
    setProfile((prev) => ({ ...prev, language: lang }));
  };

  // Toggle single practice item
  const handleTogglePractice = (id: string) => {
    setDailyPractices((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const nextState = !item.completed;
          if (nextState) sound.playBell();
          return { ...item, completed: nextState };
        }
        return item;
      })
    );
  };

  // Set today's sankalp from AI or lesson
  const handleSetSankalp = (newSankalp: string) => {
    setTodayPurusharth((prev) => ({
      ...prev,
      sankalp: newSankalp,
      sankalpHi: newSankalp,
      sankalpPa: newSankalp
    }));
    sound.playStampSound();
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#711D35', '#B68A45', '#FFD700']
    });
  };

  // Save AI answer or thought to journal
  const handleSaveToJournal = (text: string) => {
    try {
      const existing = localStorage.getItem('ask_baba_journal_notes') || '[]';
      const parsed = JSON.parse(existing);
      parsed.unshift({
        id: 'note-' + Date.now(),
        date: new Date().toISOString(),
        text
      });
      localStorage.setItem('ask_baba_journal_notes', JSON.stringify(parsed));
      sound.playStampSound();
    } catch (e) {
      console.error(e);
    }
  };

  // Reset all data
  const handleResetData = () => {
    if (window.confirm('Are you sure you want to reset your practice and profile data?')) {
      localStorage.clear();
      window.location.reload();
    }
  };

  return (
    <div className="min-h-screen bg-[#F8EEE4] dark:bg-[#1E192F] text-[#302B2B] dark:text-white transition-colors duration-300 selection:bg-rose-200 selection:text-maroon-950 font-sans">
      
      {/* 1. Header with Language Switcher Buttons (EN | हिन्दी | ਪੰਜਾਬੀ), Theme & Audio */}
      <Header
        profile={profile}
        currentLanguage={currentLanguage}
        onSelectLanguage={handleSelectLanguage}
        onOpenAskBaba={() => setShowAskBabaModal(true)}
        onToggleTheme={handleToggleTheme}
        onOpenNotifications={() => setShowNotificationsModal(true)}
      />

      {/* 2. Main Content Area corresponding to the 5 Navigation Destinations */}
      <div className="max-w-md mx-auto">
        {activeTab === 'home' && (
          <AskBabaHomeView
            profile={profile}
            language={currentLanguage}
            todayPurusharth={todayPurusharth}
            dailyPractices={dailyPractices}
            onTogglePractice={handleTogglePractice}
            onOpenMeditate={() => setActiveTab('meditate')}
            onOpenTrack={() => setShowTrackModal(true)}
            onOpenAskBaba={() => setShowAskBabaModal(true)}
            onOpenExplore={() => setActiveTab('discover')}
            onOpenProfile={() => setActiveTab('you')}
            onOpenNotifications={() => setShowNotificationsModal(true)}
            onOpenReflection={() => setShowReflectionModal(true)}
          />
        )}

        {activeTab === 'journey' && (
          <AskBabaJourneyView
            profile={profile}
            onOpenChallenges={() => {}}
            onOpenAchievements={() => {}}
          />
        )}

        {activeTab === 'meditate' && (
          <AskBabaMeditateView
            onBack={() => setActiveTab('home')}
            onSessionComplete={(mins) => {
              setProfile((prev) => ({
                ...prev,
                totalMeditationMinutes: (prev.totalMeditationMinutes || 0) + mins,
                totalMeditations: (prev.totalMeditations || 0) + 1
              }));
            }}
          />
        )}

        {activeTab === 'discover' && (
          <AskBabaDiscoverView
            onBack={() => setActiveTab('home')}
            onOpenMeditation={() => setActiveTab('meditate')}
          />
        )}

        {activeTab === 'you' && (
          <AskBabaProfileView
            profile={profile}
            onUpdateProfile={(updated) => {
              setProfile((prev) => ({ ...prev, ...updated }));
              if (updated.language) {
                setCurrentLanguage(updated.language);
              }
            }}
            onResetData={handleResetData}
            onRetakeOnboarding={() => setShowOnboarding(true)}
          />
        )}
      </div>

      {/* 3. Signature Floating Action Button: ASK BABA AI (PRD Section 3 & 8) */}
      <button
        onClick={() => {
          sound.playBell();
          setShowAskBabaModal(true);
        }}
        title={t.quickActions.askBaba}
        className="fixed bottom-20 right-4 sm:right-[max(1rem,calc(50%-210px))] z-30 flex items-center gap-2 pl-3.5 pr-4 py-2.5 rounded-full bg-gradient-to-r from-[#711D35] via-[#8A2C3F] to-[#B68A45] text-white shadow-xl shadow-[#711D35]/35 hover:shadow-2xl border border-amber-300/40 hover:scale-105 active:scale-95 transition-all group"
      >
        <div className="relative w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
          <Sparkles className="w-4 h-4 text-amber-300 animate-spin-slow" />
          <span className="w-2 h-2 rounded-full bg-amber-400 absolute -top-0.5 -right-0.5 animate-ping" />
        </div>
        <span className="font-serif font-bold text-xs tracking-wide">
          {currentLanguage === 'pa' ? 'ਬਾਬਾ ਜੀ ਤੋਂ ਪੁੱਛੋ' : currentLanguage === 'hi' ? 'बाबा से पूछें' : 'Ask Baba'}
        </span>
      </button>

      {/* 4. Bottom Navigation Bar with 5 destinations */}
      <AskBabaNavbar
        activeTab={activeTab}
        onSelectTab={setActiveTab}
        language={currentLanguage}
        dark={isDark}
      />

      {/* 5. Full Screen Modal: Ask Baba AI Studio (PRD Section 8) */}
      {showAskBabaModal && (
        <div className="fixed inset-0 z-50 bg-[#F8EEE4] dark:bg-[#1E192F] overflow-y-auto animate-fadeIn">
          <AskBabaAIView
            onBack={() => setShowAskBabaModal(false)}
            onSetSankalp={handleSetSankalp}
            onSaveToJournal={handleSaveToJournal}
            language={currentLanguage}
          />
        </div>
      )}

      {/* 6. Full Screen Modal: Daily Reflection Journal (PRD Section 9) */}
      {showReflectionModal && (
        <div className="fixed inset-0 z-50 bg-[#F8EEE4] dark:bg-[#1E192F] overflow-y-auto animate-fadeIn">
          <AskBabaReflectionView
            onBack={() => setShowReflectionModal(false)}
          />
        </div>
      )}

      {/* 7. Full Screen Modal: Daily Track & Sanskar Observation (PRD Section 5.2 & 5.3) */}
      {showTrackModal && (
        <div className="fixed inset-0 z-50 bg-[#F8EEE4] dark:bg-[#1E192F] overflow-y-auto animate-fadeIn">
          <AskBabaTrackView
            onBack={() => setShowTrackModal(false)}
            onOpenReflection={() => {
              setShowTrackModal(false);
              setShowReflectionModal(true);
            }}
          />
        </div>
      )}

      {/* 8. Modal: Spiritual Notifications & Reminders (PRD Section 13) */}
      {showNotificationsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fadeIn">
          <div className="bg-[#F8EEE4] dark:bg-[#27223B] rounded-3xl max-w-sm w-full p-6 border border-[#DFC896] dark:border-[#453C66] shadow-2xl relative text-[#302B2B] dark:text-white space-y-4">
            <div className="flex items-center justify-between border-b border-[#DFC896]/40 pb-3">
              <div className="flex items-center gap-2">
                <Bell className="w-5 h-5 text-[#711D35] dark:text-amber-300" />
                <h3 className="font-bold font-serif text-[#711D35] dark:text-amber-200">
                  {t.profile.notifications}
                </h3>
              </div>
              <button
                onClick={() => setShowNotificationsModal(false)}
                className="w-8 h-8 rounded-full bg-white/70 dark:bg-[#1E192F] flex items-center justify-center text-[#711D35] dark:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-[#6B6363] dark:text-white/60">
              Configure gentle, non-intrusive spiritual reminders throughout the day:
            </p>

            <div className="space-y-3">
              {[
                { id: 'amritvela', label: 'Amritvela Reminder', time: '3:30 AM', desc: 'A beautiful opportunity to connect with Baba.' },
                { id: 'trafficControl', label: 'Traffic Control Pauses', time: 'Hourly', desc: 'Pause. Become the observer. Remember who you are.' },
                { id: 'evening', label: 'Evening Meditation (Numasham)', time: '6:30 PM', desc: 'Return to silence and review your day.' },
                { id: 'night', label: 'Night Reflection', time: '9:30 PM', desc: 'End the day with good wishes and a peaceful mind.' }
              ].map((item) => (
                <div
                  key={item.id}
                  className="p-3 rounded-2xl bg-white/80 dark:bg-[#1E192F]/80 border border-[#DFC896]/30 dark:border-[#453C66] flex items-center justify-between"
                >
                  <div className="pr-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold">{item.label}</span>
                      <span className="text-[10px] text-[#B68A45] font-mono">{item.time}</span>
                    </div>
                    <p className="text-[10px] text-[#8E8686] dark:text-white/50">{item.desc}</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={notifications[item.id as keyof typeof notifications]}
                    onChange={(e) =>
                      setNotifications((prev) => ({
                        ...prev,
                        [item.id]: e.target.checked
                      }))
                    }
                    className="w-5 h-5 accent-[#711D35]"
                  />
                </div>
              ))}
            </div>

            <button
              onClick={() => {
                sound.playSoftClick();
                setShowNotificationsModal(false);
              }}
              className="w-full py-2.5 rounded-xl bg-[#711D35] text-white font-bold text-xs shadow-md active:scale-95 transition"
            >
              Save Preferences
            </button>
          </div>
        </div>
      )}

      {/* 9. Onboarding Walkthrough Flow (PRD Section 12) */}
      {showOnboarding && (
        <AskBabaOnboardingModal
          initialProfile={profile}
          currentLanguage={currentLanguage}
          onSelectLanguage={handleSelectLanguage}
          onComplete={(updated) => {
            setProfile(updated);
            setShowOnboarding(false);
            localStorage.setItem('ask_baba_onboarded_v1', 'true');
          }}
          onClose={() => setShowOnboarding(false)}
        />
      )}
    </div>
  );
};

export default App;
