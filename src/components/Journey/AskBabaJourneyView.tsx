import React, { useState } from 'react';
import {
  Crown,
  Flame,
  Sparkles,
  Award,
  ChevronRight,
  TrendingUp,
  Sprout,
  CheckCircle2,
  Calendar,
  Compass
} from 'lucide-react';
import { UserProfile, AchievementBadge, SpiritualChallenge } from '../../types';
import { StatusBar } from '../Common/StatusBar';
import { INITIAL_ACHIEVEMENTS, SPIRITUAL_CHALLENGES } from '../../data/askBabaData';
import confetti from 'canvas-confetti';
import { sound } from '../../utils/audio';

interface AskBabaJourneyViewProps {
  profile: UserProfile;
  onOpenChallenges?: () => void;
  onOpenAchievements?: () => void;
}

export const AskBabaJourneyView: React.FC<AskBabaJourneyViewProps> = ({
  profile,
  onOpenChallenges,
  onOpenAchievements
}) => {
  const [activeSegment, setActiveSegment] = useState<'overview' | 'milestones' | 'insights'>('overview');
  const [achievements] = useState<AchievementBadge[]>(INITIAL_ACHIEVEMENTS);
  const [challenges] = useState<SpiritualChallenge[]>(SPIRITUAL_CHALLENGES);

  // Growth graph mock points (Mon to Sun)
  const growthPoints = [
    { day: 'Mon', value: 25 },
    { day: 'Tue', value: 30 },
    { day: 'Wed', value: 35 },
    { day: 'Thu', value: 42 },
    { day: 'Fri', value: 50 },
    { day: 'Sat', value: 58 },
    { day: 'Sun', value: 65 }
  ];

  const handleCelebrate = () => {
    sound.playStampSound();
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#711D35', '#B68A45', '#F5C6CE', '#FFD700']
    });
  };

  return (
    <div className="min-h-screen bg-[#F8EEE4] text-[#302B2B] pb-28">
      {/* Top Phone Status Bar */}
      <StatusBar />

      {/* Header */}
      <header className="px-5 pt-2 pb-4 flex items-center justify-between">
        <h1 className="text-xl font-bold font-serif text-[#711D35]">
          My Journey
        </h1>
        <button
          onClick={handleCelebrate}
          aria-label="Journey statistics"
          className="w-10 h-10 rounded-xl bg-white/70 border border-[#E4D3C0] flex items-center justify-center text-[#711D35] hover:bg-white active:scale-95 transition shadow-sm"
        >
          <TrendingUp className="w-5 h-5" />
        </button>
      </header>

      {/* Segmented Control: Overview | Milestones | Insights */}
      <div className="px-5 mb-4">
        <div className="flex bg-[#EFE2D3]/70 p-1 rounded-2xl border border-[#DFC896]/40">
          {(['overview', 'milestones', 'insights'] as const).map((seg) => (
            <button
              key={seg}
              onClick={() => setActiveSegment(seg)}
              className={`flex-1 py-1.5 rounded-xl text-xs font-bold capitalize transition-all duration-200 ${
                activeSegment === seg
                  ? 'bg-gradient-to-r from-[#711D35] to-[#8A2C3F] text-white shadow-sm'
                  : 'text-[#6B6363] hover:text-[#302B2B]'
              }`}
            >
              {seg}
            </button>
          ))}
        </div>
      </div>

      <main className="px-5 space-y-4">
        {/* Segment 1: Overview (Exact mockup Screen #3) */}
        {activeSegment === 'overview' && (
          <>
            {/* Level 3 Card with Semi-Circular Gauge */}
            <div className="bg-white/95 rounded-3xl p-5 border border-[#DFC896]/40 shadow-sm relative overflow-hidden text-center">
              {/* Semi-circular Gauge Arc */}
              <div className="relative w-48 h-28 mx-auto flex items-end justify-center overflow-hidden">
                <svg viewBox="0 0 200 120" className="w-full h-full">
                  {/* Gauge background track */}
                  <path
                    d="M 20 100 A 80 80 0 0 1 180 100"
                    fill="none"
                    stroke="#EFE2D3"
                    strokeWidth="14"
                    strokeLinecap="round"
                  />
                  {/* Gauge active gradient track */}
                  <path
                    d="M 20 100 A 80 80 0 0 1 155 45"
                    fill="none"
                    stroke="url(#levelGradient)"
                    strokeWidth="14"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="levelGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#711D35" />
                      <stop offset="60%" stopColor="#B68A45" />
                      <stop offset="100%" stopColor="#FFD700" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Crown in the center */}
                <div className="absolute bottom-2 flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#B68A45] to-[#FFD700] p-0.5 flex items-center justify-center shadow-md">
                    <div className="w-full h-full rounded-full bg-[#711D35] flex items-center justify-center text-amber-300">
                      <Crown className="w-5 h-5 fill-amber-300" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Level Title */}
              <div className="mt-2 space-y-0.5">
                <h2 className="text-xl font-bold font-serif text-[#302B2B]">
                  Level {profile.level || 3}
                </h2>
                <p className="text-xs font-semibold text-[#8B6E3F]">
                  {profile.levelTitle || 'On the Path of Purity'}
                </p>
              </div>

              {/* 3 Stats Badges (45 Days, 120 Meditations, 8 Achievements) */}
              <div className="grid grid-cols-3 gap-2 mt-5 pt-4 border-t border-[#EFE2D3]">
                {/* 45 Days */}
                <div className="flex flex-col items-center">
                  <Flame className="w-5 h-5 text-[#DD6B20] fill-[#DD6B20] mb-1" />
                  <span className="text-base font-bold text-[#302B2B] leading-tight font-serif">
                    {profile.streakDays || 45}
                  </span>
                  <span className="text-[10px] text-[#8E8686] font-medium">Days</span>
                </div>

                {/* 120 Meditations */}
                <div className="flex flex-col items-center">
                  <Sparkles className="w-5 h-5 text-[#805AD5] mb-1" />
                  <span className="text-base font-bold text-[#302B2B] leading-tight font-serif">
                    {profile.totalMeditations || 120}
                  </span>
                  <span className="text-[10px] text-[#8E8686] font-medium">Meditations</span>
                </div>

                {/* 8 Achievements */}
                <div className="flex flex-col items-center">
                  <Award className="w-5 h-5 text-[#D69E2E] fill-[#D69E2E] mb-1" />
                  <span className="text-base font-bold text-[#302B2B] leading-tight font-serif">
                    {profile.achievementsCount || 8}
                  </span>
                  <span className="text-[10px] text-[#8E8686] font-medium">Achievements</span>
                </div>
              </div>
            </div>

            {/* Your Growth Card with +12% Badge and Smooth Area Chart */}
            <div className="bg-white/95 rounded-3xl p-5 border border-[#DFC896]/40 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-bold text-[#302B2B]">Your Growth</h3>
                  <span className="px-2 py-0.5 rounded-full bg-[#711D35] text-white text-[10px] font-bold">
                    +12%
                  </span>
                </div>
                <button
                  onClick={onOpenChallenges}
                  className="text-xs font-semibold text-[#711D35] hover:underline flex items-center gap-0.5"
                >
                  View All <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* SVG Smooth Line Chart */}
              <div className="w-full h-32 pt-2">
                <svg viewBox="0 0 320 100" className="w-full h-full overflow-visible">
                  <defs>
                    <linearGradient id="growthAreaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#711D35" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#711D35" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>

                  {/* Horizontal subtle guide lines */}
                  <line x1="0" y1="20" x2="320" y2="20" stroke="#F0E5D8" strokeDasharray="3,3" />
                  <line x1="0" y1="50" x2="320" y2="50" stroke="#F0E5D8" strokeDasharray="3,3" />
                  <line x1="0" y1="80" x2="320" y2="80" stroke="#F0E5D8" strokeDasharray="3,3" />

                  {/* Smooth curved path */}
                  <path
                    d="M 20 75 Q 65 68 110 60 T 200 45 T 300 22"
                    fill="none"
                    stroke="#711D35"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  {/* Fill area below the curve */}
                  <path
                    d="M 20 75 Q 65 68 110 60 T 200 45 T 300 22 L 300 95 L 20 95 Z"
                    fill="url(#growthAreaGradient)"
                  />

                  {/* Day Points */}
                  {growthPoints.map((pt, i) => {
                    const x = 20 + i * 46;
                    // Y calculation aligned with curve
                    const y = 80 - (pt.value / 70) * 60;
                    return (
                      <g key={pt.day}>
                        <circle
                          cx={x}
                          cy={y}
                          r={i === 6 ? 5 : 3.5}
                          fill={i === 6 ? '#711D35' : '#FFFFFF'}
                          stroke="#711D35"
                          strokeWidth="2"
                        />
                        <text
                          x={x}
                          y="98"
                          textAnchor="middle"
                          fill="#8E8686"
                          fontSize="9"
                          fontWeight="600"
                        >
                          {pt.day}
                        </text>
                      </g>
                    );
                  })}
                </svg>
              </div>
            </div>

            {/* Seedling Encouragement Card (Exact mockup pill) */}
            <div className="bg-[#FAF4EB] rounded-2xl p-4 border border-[#DFC896]/40 flex items-center gap-3.5 shadow-sm">
              <div className="w-11 h-11 rounded-2xl bg-[#E6F4EA] text-[#38A169] flex items-center justify-center flex-shrink-0 border border-[#CEEAD6]">
                <Sprout className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-bold text-[#302B2B] leading-tight">
                  You are growing with every good thought.
                </p>
                <p className="text-[11px] text-[#8E8686] mt-0.5">
                  Consistency in Rajyoga purifies deep sanskars naturally.
                </p>
              </div>
            </div>
          </>
        )}

        {/* Segment 2: Milestones & Challenges */}
        {activeSegment === 'milestones' && (
          <div className="space-y-4 pb-10">
            {/* Active Challenges */}
            <div className="space-y-2.5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#B68A45] flex items-center gap-1.5">
                <Compass className="w-4 h-4" /> Spiritual Challenges
              </h3>

              {challenges.map((ch) => (
                <div
                  key={ch.id}
                  className="bg-white/90 p-4 rounded-2xl border border-[#DFC896]/30 shadow-sm space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className="text-2xl">{ch.icon}</span>
                      <div>
                        <h4 className="text-sm font-bold text-[#302B2B]">{ch.title}</h4>
                        <p className="text-[11px] text-[#8E8686]">{ch.description}</p>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-[#711D35] bg-[#711D35]/10 px-2.5 py-1 rounded-full">
                      Day {ch.currentDay}/{ch.durationDays}
                    </span>
                  </div>

                  {/* Progress bar */}
                  <div className="w-full bg-[#EFE2D3] h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-[#711D35] h-full rounded-full transition-all duration-500"
                      style={{ width: `${(ch.currentDay / ch.durationDays) * 100}%` }}
                    />
                  </div>

                  <p className="text-[11px] italic text-[#6B6363]">
                    Today's Task: {ch.dailyTask}
                  </p>
                </div>
              ))}
            </div>

            {/* Unlocked Badges */}
            <div className="space-y-2.5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#B68A45] flex items-center gap-1.5">
                <Award className="w-4 h-4" /> Unlocked Achievements ({achievements.filter(a => a.unlocked).length})
              </h3>

              <div className="grid grid-cols-2 gap-2.5">
                {achievements.map((ach) => (
                  <div
                    key={ach.id}
                    className={`p-3 rounded-2xl border flex flex-col items-center text-center gap-1.5 ${
                      ach.unlocked
                        ? 'bg-white border-[#DFC896]/50 shadow-sm'
                        : 'bg-white/40 border-dashed border-[#DFC896]/30 opacity-50'
                    }`}
                  >
                    <span className="text-3xl">{ach.icon}</span>
                    <h5 className="text-xs font-bold text-[#302B2B] leading-tight">
                      {ach.title}
                    </h5>
                    <p className="text-[10px] text-[#8E8686] line-clamp-2">
                      {ach.subtitle}
                    </p>
                    {ach.unlocked && (
                      <span className="text-[9px] font-semibold text-[#38A169] bg-[#E6F4EA] px-2 py-0.5 rounded-full">
                        ✓ Unlocked
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Segment 3: Weekly Insights (PRD Section 5.6) */}
        {activeSegment === 'insights' && (
          <div className="space-y-3 pb-10">
            <div className="bg-white/95 rounded-2xl p-5 border border-[#DFC896]/40 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-[#711D35]">
                <Calendar className="w-5 h-5" />
                <h3 className="text-sm font-bold">Weekly Purusharth Synthesis</h3>
              </div>
              <p className="text-xs text-[#302B2B] leading-relaxed">
                "This week you completed <strong>5 meditation sessions</strong> (total 75 minutes) and recorded <strong>4 daily reflections</strong>. You also identified situations where your mind became disturbed during workplace deadlines. Continue practising conscious 5-second pauses."
              </p>
              <div className="p-3 bg-[#FAF4EB] rounded-xl border border-[#DFC896]/40 text-xs text-[#8B6E3F] font-medium">
                ⭐ Recommendation: Focus on the <strong>Power of Tolerance</strong> during afternoon hours. Remember, you are a master ocean of peace.
              </div>
            </div>

            <div className="bg-white/95 rounded-2xl p-4 border border-[#DFC896]/40 shadow-sm space-y-2">
              <h4 className="text-xs font-bold text-[#302B2B]">Original Qualities Exercised</h4>
              <div className="space-y-1.5">
                {[
                  { quality: 'Peace (शांति)', percent: 85, color: '#3182CE' },
                  { quality: 'Purity (पवित्रता)', percent: 78, color: '#805AD5' },
                  { quality: 'Love (प्रेम)', percent: 90, color: '#E53E3E' },
                  { quality: 'Power (शक्ति)', percent: 70, color: '#DD6B20' },
                  { quality: 'Knowledge (ज्ञान)', percent: 82, color: '#D69E2E' }
                ].map((q) => (
                  <div key={q.quality} className="space-y-1">
                    <div className="flex justify-between text-[11px] font-semibold text-[#302B2B]">
                      <span>{q.quality}</span>
                      <span>{q.percent}%</span>
                    </div>
                    <div className="w-full bg-[#EFE2D3] h-1.5 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{ width: `${q.percent}%`, backgroundColor: q.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};
