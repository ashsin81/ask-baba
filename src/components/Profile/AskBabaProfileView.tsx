import React, { useState } from 'react';
import {
  Settings,
  Crown,
  Award,
  Target,
  Bell,
  Sliders,
  Info,
  ChevronRight,
  Download,
  Trash2,
  Globe,
  Volume2,
  CheckCircle2,
  ShieldCheck
} from 'lucide-react';
import { StatusBar } from '../Common/StatusBar';
import { UserProfile, ExperienceLevel, Language } from '../../types';
import { INITIAL_ACHIEVEMENTS } from '../../data/askBabaData';
import { sound } from '../../utils/audio';

interface AskBabaProfileViewProps {
  profile: UserProfile;
  onUpdateProfile: (updated: Partial<UserProfile>) => void;
  onResetData: () => void;
  onRetakeOnboarding?: () => void;
}

export const AskBabaProfileView: React.FC<AskBabaProfileViewProps> = ({
  profile,
  onUpdateProfile,
  onResetData,
  onRetakeOnboarding
}) => {
  const [activeModal, setActiveModal] = useState<'achievements' | 'goals' | 'notifications' | 'settings' | 'about' | null>(null);

  // Export User Data as JSON
  const handleExportData = () => {
    sound.playStampSound();
    const exportObj = {
      profile,
      exportedAt: new Date().toISOString(),
      platform: 'Ask Baba PWA'
    };
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(exportObj, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `ask_baba_backup_${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const experienceLabels: Record<ExperienceLevel, string> = {
    beginner: 'Beginner',
    seeker: 'Spiritual Seeker',
    practitioner: 'Regular Practitioner',
    bk_student: 'Brahma Kumaris Student'
  };

  return (
    <div className="min-h-screen bg-[#F8EEE4] text-[#302B2B] pb-28">
      {/* Top Phone Status Bar */}
      <StatusBar />

      {/* Header */}
      <header className="px-5 pt-1 pb-3 flex items-center justify-between">
        <h1 className="text-xl font-bold font-serif text-[#711D35]">
          Profile
        </h1>

        <button
          onClick={() => setActiveModal('settings')}
          aria-label="Settings"
          className="w-10 h-10 rounded-xl bg-white/70 border border-[#E4D3C0] flex items-center justify-center text-[#711D35] hover:bg-white active:scale-95 transition shadow-sm"
        >
          <Settings className="w-5 h-5" />
        </button>
      </header>

      <main className="px-5 space-y-4">
        {/* User Identity Card (Exact Mockup Screen #8) */}
        <div className="bg-white/95 rounded-3xl p-5 border border-[#DFC896]/40 shadow-sm flex flex-col items-center text-center space-y-2">
          {/* Avatar with glowing lotus */}
          <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#711D35] via-[#B68A45] to-[#FFD700] p-1 shadow-lg">
            <div className="w-full h-full rounded-full bg-gradient-to-tr from-[#5A1428] to-[#711D35] flex items-center justify-center text-3xl text-white shadow-inner">
              🪷
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold font-serif text-[#302B2B]">
              {profile.name || 'Himanshu'}
            </h2>
            <p className="text-xs font-semibold text-[#8B6E3F]">
              {experienceLabels[profile.experienceLevel] || 'Spiritual Seeker'}
            </p>
          </div>
        </div>

        {/* Level 3 Card with Progress Bar (Exact Mockup Screen #8) */}
        <div className="bg-gradient-to-r from-[#711D35] to-[#5A1428] rounded-3xl p-5 text-white shadow-md border border-[#B68A45]/30 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Crown className="w-5 h-5 text-amber-300 fill-amber-300" />
              <div>
                <h3 className="text-sm font-bold text-white font-serif">
                  Level {profile.level || 3}
                </h3>
                <p className="text-[11px] text-amber-200/90 font-medium">
                  {profile.levelTitle || 'On the Path of Purity'}
                </p>
              </div>
            </div>
            <span className="text-xs font-bold text-amber-300 font-mono">
              {profile.levelProgress || 78}%
            </span>
          </div>

          {/* Progress bar */}
          <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden">
            <div
              className="bg-gradient-to-r from-amber-300 to-amber-500 h-full rounded-full transition-all duration-700"
              style={{ width: `${profile.levelProgress || 78}%` }}
            />
          </div>
        </div>

        {/* Options Menu List (Exact Mockup Screen #8) */}
        <section className="bg-white/95 rounded-3xl p-2 border border-[#DFC896]/40 shadow-sm divide-y divide-[#EFE2D3]">
          {/* My Achievements */}
          <button
            onClick={() => setActiveModal('achievements')}
            className="w-full p-3.5 flex items-center justify-between hover:bg-[#FAF4EB] rounded-2xl transition group"
          >
            <div className="flex items-center gap-3">
              <Award className="w-5 h-5 text-[#D69E2E]" />
              <span className="text-xs font-bold text-[#302B2B] group-hover:text-[#711D35] transition">
                My Achievements
              </span>
            </div>
            <ChevronRight className="w-4 h-4 text-[#8E8686] group-hover:text-[#711D35] transition" />
          </button>

          {/* My Goals */}
          <button
            onClick={() => setActiveModal('goals')}
            className="w-full p-3.5 flex items-center justify-between hover:bg-[#FAF4EB] rounded-2xl transition group"
          >
            <div className="flex items-center gap-3">
              <Target className="w-5 h-5 text-[#38A169]" />
              <span className="text-xs font-bold text-[#302B2B] group-hover:text-[#711D35] transition">
                My Goals
              </span>
            </div>
            <ChevronRight className="w-4 h-4 text-[#8E8686] group-hover:text-[#711D35] transition" />
          </button>

          {/* Notifications */}
          <button
            onClick={() => setActiveModal('notifications')}
            className="w-full p-3.5 flex items-center justify-between hover:bg-[#FAF4EB] rounded-2xl transition group"
          >
            <div className="flex items-center gap-3">
              <Bell className="w-5 h-5 text-[#DD6B20]" />
              <span className="text-xs font-bold text-[#302B2B] group-hover:text-[#711D35] transition">
                Notifications
              </span>
            </div>
            <ChevronRight className="w-4 h-4 text-[#8E8686] group-hover:text-[#711D35] transition" />
          </button>

          {/* App Settings */}
          <button
            onClick={() => setActiveModal('settings')}
            className="w-full p-3.5 flex items-center justify-between hover:bg-[#FAF4EB] rounded-2xl transition group"
          >
            <div className="flex items-center gap-3">
              <Sliders className="w-5 h-5 text-[#805AD5]" />
              <span className="text-xs font-bold text-[#302B2B] group-hover:text-[#711D35] transition">
                App Settings
              </span>
            </div>
            <ChevronRight className="w-4 h-4 text-[#8E8686] group-hover:text-[#711D35] transition" />
          </button>

          {/* About Ask Baba */}
          <button
            onClick={() => setActiveModal('about')}
            className="w-full p-3.5 flex items-center justify-between hover:bg-[#FAF4EB] rounded-2xl transition group"
          >
            <div className="flex items-center gap-3">
              <Info className="w-5 h-5 text-[#3182CE]" />
              <span className="text-xs font-bold text-[#302B2B] group-hover:text-[#711D35] transition">
                About Ask Baba
              </span>
            </div>
            <ChevronRight className="w-4 h-4 text-[#8E8686] group-hover:text-[#711D35] transition" />
          </button>
        </section>

        {/* Data Privacy & Export */}
        <div className="flex items-center justify-between pt-2 px-2 text-xs">
          <button
            onClick={handleExportData}
            className="text-[#711D35] font-semibold hover:underline flex items-center gap-1.5"
          >
            <Download className="w-4 h-4" /> Export My Journal
          </button>

          <button
            onClick={() => {
              if (confirm('Are you sure you want to reset all local progress?')) {
                onResetData();
              }
            }}
            className="text-rose-600 font-semibold hover:underline flex items-center gap-1"
          >
            <Trash2 className="w-3.5 h-3.5" /> Reset Data
          </button>
        </div>
      </main>

      {/* Modal: App Settings */}
      {activeModal === 'settings' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fadeIn">
          <div className="bg-[#F8EEE4] rounded-3xl max-w-sm w-full p-6 border border-[#DFC896] shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-[#EFE2D3] pb-3">
              <h3 className="text-base font-bold font-serif text-[#711D35]">
                App Settings
              </h3>
              <button
                onClick={() => setActiveModal(null)}
                className="text-[#8E8686] hover:text-[#302B2B] font-bold"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4 text-xs">
              {/* User Name */}
              <div className="space-y-1">
                <label className="font-bold text-[#302B2B]">Your Spiritual Name</label>
                <input
                  type="text"
                  value={profile.name}
                  onChange={(e) => onUpdateProfile({ name: e.target.value })}
                  className="w-full bg-white p-2.5 rounded-xl border border-[#DFC896]/50 outline-none"
                />
              </div>

              {/* Language Selection */}
              <div className="space-y-1">
                <label className="font-bold text-[#302B2B]">App Language / भाषा / ਭਾਸ਼ਾ</label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'en', label: 'English' },
                    { id: 'hi', label: 'हिन्दी' },
                    { id: 'pa', label: 'ਪੰਜਾਬੀ' }
                  ].map((l) => (
                    <button
                      key={l.id}
                      onClick={() => onUpdateProfile({ language: l.id as Language })}
                      className={`py-2 rounded-xl border font-bold text-xs transition ${
                        profile.language === l.id
                          ? 'bg-[#711D35] text-white border-[#711D35]'
                          : 'bg-white border-[#DFC896]/50 text-[#6B6363]'
                      }`}
                    >
                      {l.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Experience Level Selection */}
              <div className="space-y-1">
                <label className="font-bold text-[#302B2B]">Spiritual Experience Level</label>
                <div className="space-y-1.5">
                  {(['beginner', 'seeker', 'practitioner', 'bk_student'] as ExperienceLevel[]).map((lvl) => (
                    <label
                      key={lvl}
                      className={`flex items-center gap-2 p-2 rounded-xl border cursor-pointer transition ${
                        profile.experienceLevel === lvl
                          ? 'bg-[#711D35]/10 border-[#711D35] text-[#711D35] font-bold'
                          : 'bg-white border-[#DFC896]/30 text-[#6B6363]'
                      }`}
                    >
                      <input
                        type="radio"
                        name="exp"
                        checked={profile.experienceLevel === lvl}
                        onChange={() => onUpdateProfile({ experienceLevel: lvl })}
                        className="accent-[#711D35]"
                      />
                      <span>{experienceLabels[lvl]}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Retake Onboarding */}
              {onRetakeOnboarding && (
                <div className="pt-2 border-t border-[#DFC896]/30">
                  <button
                    onClick={() => {
                      setActiveModal(null);
                      onRetakeOnboarding();
                    }}
                    className="w-full py-2.5 rounded-xl bg-white border border-[#DFC896] text-[#711D35] font-bold text-xs hover:bg-[#FAF4EB] transition"
                  >
                    🔄 Restart Onboarding Walkthrough
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => setActiveModal(null)}
              className="w-full py-2.5 rounded-xl bg-[#711D35] text-white font-bold text-xs shadow-md"
            >
              Done
            </button>
          </div>
        </div>
      )}

      {/* Modal: About Ask Baba (PRD Section 1) */}
      {activeModal === 'about' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fadeIn">
          <div className="bg-[#F8EEE4] rounded-3xl max-w-sm w-full p-6 border border-[#DFC896] shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-[#EFE2D3] pb-3">
              <h3 className="text-base font-bold font-serif text-[#711D35]">
                About Ask Baba
              </h3>
              <button
                onClick={() => setActiveModal(null)}
                className="text-[#8E8686] hover:text-[#302B2B] font-bold"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3 text-xs text-[#302B2B] leading-relaxed">
              <div className="text-center pb-2">
                <span className="font-serif text-lg font-bold text-[#711D35] block">Ask Baba</span>
                <span className="text-[10px] uppercase font-bold text-[#B68A45] tracking-widest">
                  Track · Reflect · Transform (v1.0)
                </span>
              </div>

              <p>
                Ask Baba is a personal spiritual-growth platform founded on <strong>Brahma Kumaris</strong> Rajyoga knowledge.
              </p>

              <div className="bg-white/80 p-3 rounded-2xl border border-[#DFC896]/30 space-y-1">
                <span className="font-bold text-[#711D35] block">Spiritual Policy:</span>
                <p className="text-[11px] text-[#6B6363]">
                  All guidance is strictly grounded in authenticated BK knowledge. The app never judges your worth, replaces medical advice, or claims to speak as God.
                </p>
              </div>

              <div className="bg-[#FAF4EB] p-3 rounded-2xl border border-[#B68A45]/40 text-center text-[#8B6E3F] font-serif italic text-xs">
                "A step closer to your Higher Self, every day."
              </div>
            </div>

            <button
              onClick={() => setActiveModal(null)}
              className="w-full py-2.5 rounded-xl bg-[#711D35] text-white font-bold text-xs shadow-md"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Modal: My Achievements */}
      {activeModal === 'achievements' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fadeIn">
          <div className="bg-[#F8EEE4] rounded-3xl max-w-sm w-full p-6 border border-[#DFC896] shadow-2xl space-y-4 max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-[#EFE2D3] pb-3">
              <h3 className="text-base font-bold font-serif text-[#711D35] flex items-center gap-1.5">
                <Award className="w-5 h-5 text-[#B68A45]" /> My Achievements
              </h3>
              <button
                onClick={() => setActiveModal(null)}
                className="text-[#8E8686] hover:text-[#302B2B] font-bold"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              {INITIAL_ACHIEVEMENTS.map((ach) => (
                <div
                  key={ach.id}
                  className={`p-3 rounded-2xl border text-center flex flex-col items-center gap-1 ${
                    ach.unlocked
                      ? 'bg-white border-[#DFC896]/50 shadow-sm'
                      : 'bg-white/40 border-dashed border-[#DFC896]/30 opacity-50'
                  }`}
                >
                  <span className="text-3xl">{ach.icon}</span>
                  <h5 className="text-xs font-bold text-[#302B2B]">{ach.title}</h5>
                  <p className="text-[10px] text-[#8E8686] line-clamp-2">{ach.subtitle}</p>
                </div>
              ))}
            </div>

            <button
              onClick={() => setActiveModal(null)}
              className="w-full py-2.5 rounded-xl bg-[#711D35] text-white font-bold text-xs shadow-md"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Modal: Notifications Configuration (PRD Section 13) */}
      {activeModal === 'notifications' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fadeIn">
          <div className="bg-[#F8EEE4] rounded-3xl max-w-sm w-full p-6 border border-[#DFC896] shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-[#EFE2D3] pb-3">
              <h3 className="text-base font-bold font-serif text-[#711D35] flex items-center gap-1.5">
                <Bell className="w-5 h-5 text-[#B68A45]" /> Notification Reminders
              </h3>
              <button
                onClick={() => setActiveModal(null)}
                className="text-[#8E8686] hover:text-[#302B2B] font-bold"
              >
                ✕
              </button>
            </div>

            <div className="space-y-2.5 text-xs text-[#302B2B]">
              {[
                { title: 'Amritvela Connection', time: '3:30 AM', sub: 'A beautiful opportunity to connect with Baba.' },
                { title: 'Morning Remembrance', time: '6:30 AM', sub: 'Begin your day with a peaceful thought.' },
                { title: 'Traffic Control Pauses', time: 'Every 3 Hours', sub: 'Pause. Become the observer. Remember who you are.' },
                { title: 'Night Reflection', time: '9:30 PM', sub: 'End the day with good wishes and a peaceful mind.' }
              ].map((rem, idx) => (
                <div key={idx} className="bg-white/90 p-3 rounded-2xl border border-[#DFC896]/30 flex items-center justify-between gap-2">
                  <div>
                    <h5 className="font-bold text-[#711D35]">{rem.title} ({rem.time})</h5>
                    <p className="text-[10px] text-[#8E8686]">{rem.sub}</p>
                  </div>
                  <input type="checkbox" defaultChecked className="accent-[#711D35] w-4 h-4 cursor-pointer" />
                </div>
              ))}
            </div>

            <button
              onClick={() => {
                sound.playStampSound();
                setActiveModal(null);
              }}
              className="w-full py-2.5 rounded-xl bg-[#711D35] text-white font-bold text-xs shadow-md"
            >
              Save Reminder Preferences
            </button>
          </div>
        </div>
      )}

      {/* Modal: Goals Customization */}
      {activeModal === 'goals' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fadeIn">
          <div className="bg-[#F8EEE4] rounded-3xl max-w-sm w-full p-6 border border-[#DFC896] shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-[#EFE2D3] pb-3">
              <h3 className="text-base font-bold font-serif text-[#711D35] flex items-center gap-1.5">
                <Target className="w-5 h-5 text-[#B68A45]" /> Customize Daily Goals
              </h3>
              <button
                onClick={() => setActiveModal(null)}
                className="text-[#8E8686] hover:text-[#302B2B] font-bold"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-[#8E8686]">
              Choose which practices calculate your daily progress circle:
            </p>

            <div className="space-y-2 text-xs text-[#302B2B]">
              {[
                'Rajyoga Meditation (15 min)',
                'Positive Thinking & Swaman',
                'Self-Review & Night Reflection',
                'Amritvela Yoga (3:30 AM)',
                'Traffic Control (5 times)',
                'Daily Murli Study'
              ].map((g, idx) => (
                <label key={idx} className="flex items-center gap-2.5 bg-white p-2.5 rounded-xl border border-[#DFC896]/30 cursor-pointer">
                  <input type="checkbox" defaultChecked className="accent-[#711D35] w-4 h-4" />
                  <span className="font-semibold">{g}</span>
                </label>
              ))}
            </div>

            <button
              onClick={() => {
                sound.playStampSound();
                setActiveModal(null);
              }}
              className="w-full py-2.5 rounded-xl bg-[#711D35] text-white font-bold text-xs shadow-md"
            >
              Update Routine
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
