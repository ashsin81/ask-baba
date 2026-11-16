import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowLeft,
  Music,
  Play,
  Pause,
  RotateCcw,
  Volume2,
  VolumeX,
  Sparkles,
  Clock,
  List,
  Leaf,
  CheckCircle2
} from 'lucide-react';
import { StatusBar } from '../Common/StatusBar';
import { MeditationSessionItem } from '../../types';
import { MEDITATION_SESSIONS_LIST } from '../../data/askBabaData';
import { sound } from '../../utils/audio';
import { ambientPlayer, SoundscapeType } from '../../utils/ambientAudio';

interface AskBabaMeditateViewProps {
  onBack: () => void;
  onSessionComplete?: (minutes: number) => void;
}

export const AskBabaMeditateView: React.FC<AskBabaMeditateViewProps> = ({
  onBack,
  onSessionComplete
}) => {
  const [activeTab, setActiveTab] = useState<'player' | 'library' | 'timer'>('player');
  const [currentSession, setCurrentSession] = useState<MeditationSessionItem>(
    MEDITATION_SESSIONS_LIST[3] // "Connecting with the Supreme Soul" (15 min)
  );

  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [elapsedSeconds, setElapsedSeconds] = useState<number>(600); // 10:00 as shown in mockup
  const totalSeconds = currentSession.durationMinutes * 60;

  // Soundscape
  const [soundscape, setSoundscape] = useState<SoundscapeType>('paramdham-drone');
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [showMusicMenu, setShowMusicMenu] = useState<boolean>(false);

  // Silent Timer duration options
  const [timerMinutes, setTimerMinutes] = useState<number>(15);

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Format seconds to mm:ss
  const formatTime = (sec: number) => {
    const mins = Math.floor(sec / 60);
    const secs = sec % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  // Play / Pause handler
  const handleTogglePlay = () => {
    if (isPlaying) {
      setIsPlaying(false);
      ambientPlayer.stop();
      if (timerRef.current) clearInterval(timerRef.current);
    } else {
      setIsPlaying(true);
      sound.playTibetanBowl();
      if (!isMuted) {
        ambientPlayer.play(soundscape);
      }
    }
  };

  // Timer tick
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setElapsedSeconds((prev) => {
          if (prev >= totalSeconds) {
            setIsPlaying(false);
            sound.playTibetanBowl();
            ambientPlayer.stop();
            if (onSessionComplete) onSessionComplete(currentSession.durationMinutes);
            return totalSeconds;
          }
          return prev + 1;
        });
      }, 1000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, totalSeconds, currentSession.durationMinutes, onSessionComplete]);

  // Clean up audio on unmount
  useEffect(() => {
    return () => {
      ambientPlayer.stop();
    };
  }, []);

  const handleEndSession = () => {
    setIsPlaying(false);
    ambientPlayer.stop();
    sound.playBell();
    if (onSessionComplete && elapsedSeconds > 60) {
      onSessionComplete(Math.round(elapsedSeconds / 60));
    }
    setElapsedSeconds(0);
  };

  const handleSelectSession = (session: MeditationSessionItem) => {
    setCurrentSession(session);
    setElapsedSeconds(0);
    setIsPlaying(false);
    ambientPlayer.stop();
    setActiveTab('player');
    sound.playChime();
  };

  const progressPercent = Math.min(100, Math.round((elapsedSeconds / totalSeconds) * 100));

  return (
    <div className="min-h-screen bg-[#27223B] text-white flex flex-col justify-between relative overflow-hidden select-none pb-20">
      {/* Dynamic Cosmic Background with Radiant Spiritual Aura */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Soft glowing radial gradient behind the Supreme Soul */}
        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-80 h-80 bg-gradient-to-b from-[#F6AD55]/25 via-[#ED8936]/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#711D35]/30 rounded-full blur-3xl" />

        {/* Floating golden particle stars */}
        <div className="absolute top-20 left-10 w-1.5 h-1.5 bg-amber-200 rounded-full opacity-60 animate-ping" />
        <div className="absolute top-36 right-12 w-1 h-1 bg-amber-100 rounded-full opacity-70" />
        <div className="absolute top-64 left-16 w-1 h-1 bg-amber-300 rounded-full opacity-50" />
        <div className="absolute top-72 right-20 w-1.5 h-1.5 bg-amber-200 rounded-full opacity-60" />
      </div>

      {/* Top Phone Status Bar */}
      <div className="relative z-20">
        <StatusBar dark />

        {/* Top Header Bar */}
        <header className="px-5 py-3 flex items-center justify-between">
          <button
            onClick={onBack}
            aria-label="Back"
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 transition flex items-center justify-center text-white/90 border border-white/10"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>

          {/* Mode Switcher Tabs */}
          <div className="flex bg-white/10 rounded-full p-1 border border-white/10 backdrop-blur-md">
            <button
              onClick={() => setActiveTab('player')}
              className={`px-3 py-1 rounded-full text-xs font-semibold transition ${
                activeTab === 'player' ? 'bg-[#711D35] text-amber-200 shadow' : 'text-white/60'
              }`}
            >
              Player
            </button>
            <button
              onClick={() => setActiveTab('library')}
              className={`px-3 py-1 rounded-full text-xs font-semibold transition ${
                activeTab === 'library' ? 'bg-[#711D35] text-amber-200 shadow' : 'text-white/60'
              }`}
            >
              Library
            </button>
            <button
              onClick={() => setActiveTab('timer')}
              className={`px-3 py-1 rounded-full text-xs font-semibold transition ${
                activeTab === 'timer' ? 'bg-[#711D35] text-amber-200 shadow' : 'text-white/60'
              }`}
            >
              Timer
            </button>
          </div>

          <button
            onClick={() => setShowMusicMenu(!showMusicMenu)}
            aria-label="Audio settings"
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 transition flex items-center justify-center text-amber-300 border border-white/10 relative"
          >
            <Music className="w-5 h-5" />
            {isPlaying && (
              <span className="w-2 h-2 rounded-full bg-amber-400 absolute top-2 right-2 animate-ping" />
            )}
          </button>
        </header>
      </div>

      {/* Soundscape Selector Popover */}
      {showMusicMenu && (
        <div className="absolute top-20 right-5 z-40 bg-[#1E192F]/95 backdrop-blur-xl border border-white/20 rounded-2xl p-4 shadow-2xl w-64 text-xs animate-fadeIn">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10">
            <span className="font-bold text-amber-200 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4" /> Soundscape
            </span>
            <button
              onClick={() => {
                setIsMuted(!isMuted);
                if (!isMuted) ambientPlayer.stop();
                else if (isPlaying) ambientPlayer.play(soundscape);
              }}
              className="text-white/70 hover:text-white"
            >
              {isMuted ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
            </button>
          </div>
          <div className="space-y-1.5">
            {[
              { id: 'paramdham-drone', label: 'Paramdham Drone (432Hz)' },
              { id: 'amritvela-theta', label: 'Amritvela Theta Waves' },
              { id: 'celestial-bells', label: 'Celestial Chimes' }
            ].map((snd) => (
              <button
                key={snd.id}
                onClick={() => {
                  setSoundscape(snd.id as SoundscapeType);
                  if (isPlaying && !isMuted) ambientPlayer.play(snd.id as SoundscapeType);
                  setShowMusicMenu(false);
                }}
                className={`w-full text-left px-3 py-2 rounded-xl transition flex items-center justify-between ${
                  soundscape === snd.id
                    ? 'bg-[#711D35] text-amber-200 font-bold'
                    : 'text-white/70 hover:bg-white/10'
                }`}
              >
                <span>{snd.label}</span>
                {soundscape === snd.id && <CheckCircle2 className="w-3.5 h-3.5" />}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Mode 1: Main Meditation Player (Exact mockup Screen #2) */}
      {activeTab === 'player' && (
        <main className="flex-1 flex flex-col items-center justify-around px-6 relative z-10 py-2">
          {/* Spiritual Artwork: Radiant Point of Light + Golden Lotus */}
          <div className="relative w-64 h-64 flex items-center justify-center my-2">
            {/* Pulsing halo aura */}
            <div
              className={`absolute inset-0 rounded-full bg-gradient-to-tr from-amber-500/20 via-pink-500/10 to-transparent blur-2xl transition-transform duration-1000 ${
                isPlaying ? 'scale-125 opacity-100' : 'scale-100 opacity-60'
              }`}
            />

            <svg viewBox="0 0 200 200" className="w-full h-full relative z-10 drop-shadow-2xl">
              <defs>
                <linearGradient id="lotusGold" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFF9E6" />
                  <stop offset="50%" stopColor="#DFC896" />
                  <stop offset="100%" stopColor="#B68A45" />
                </linearGradient>
                <radialGradient id="divineGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#FFFFFF" />
                  <stop offset="40%" stopColor="#FFD166" />
                  <stop offset="80%" stopColor="#F78C6C" />
                  <stop offset="100%" stopColor="transparent" />
                </radialGradient>
              </defs>

              {/* Water surface reflection ring */}
              <ellipse cx="100" cy="155" rx="80" ry="16" fill="rgba(255,255,255,0.06)" />
              <ellipse cx="100" cy="155" rx="55" ry="10" fill="rgba(223,200,150,0.12)" />

              {/* Radiant shower rays from Supreme Soul */}
              <g opacity={isPlaying ? '0.85' : '0.5'}>
                <line x1="100" y1="35" x2="100" y2="120" stroke="#FFEAA7" strokeWidth="1.5" strokeDasharray="3,3" />
                <line x1="100" y1="35" x2="60" y2="125" stroke="#FFEAA7" strokeWidth="1" strokeDasharray="3,3" />
                <line x1="100" y1="35" x2="140" y2="125" stroke="#FFEAA7" strokeWidth="1" strokeDasharray="3,3" />
                <line x1="100" y1="35" x2="40" y2="135" stroke="#FFEAA7" strokeWidth="0.8" strokeDasharray="2,2" />
                <line x1="100" y1="35" x2="160" y2="135" stroke="#FFEAA7" strokeWidth="0.8" strokeDasharray="2,2" />
              </g>

              {/* Supreme Soul (Shiv Baba Red-Golden Jyoti Bindu) */}
              <circle cx="100" cy="35" r="16" fill="url(#divineGlow)" opacity="0.4" filter="blur(4px)" />
              <circle cx="100" cy="35" r="10" fill="#FFF4D0" />
              <circle cx="100" cy="35" r="5" fill="#FFFFFF" />

              {/* Golden Blooming Lotus Petals */}
              {/* Outer petals */}
              <path
                d="M100 85 C65 95 30 115 25 142 C60 148 90 125 100 108 C110 125 140 148 175 142 C170 115 135 95 100 85 Z"
                fill="url(#lotusGold)"
                opacity="0.8"
              />
              {/* Middle petals */}
              <path
                d="M100 90 C78 102 52 120 48 144 C76 150 92 132 100 118 C108 132 124 150 152 144 C148 120 122 102 100 90 Z"
                fill="url(#lotusGold)"
                opacity="0.95"
              />
              {/* Inner central petals */}
              <path
                d="M100 94 C88 106 72 124 72 144 C88 148 96 135 100 126 C104 135 112 148 128 144 C128 124 112 106 100 94 Z"
                fill="#FFF4D0"
              />
              {/* Base */}
              <ellipse cx="100" cy="146" rx="28" ry="7" fill="#B68A45" />
            </svg>
          </div>

          {/* Title and Subtitle */}
          <div className="text-center space-y-1 mb-2">
            <h2 className="text-2xl font-serif font-bold tracking-tight text-white/95">
              Let's Meditate...
            </h2>
            <p className="text-xs font-medium text-amber-200/80">
              Connect with your Higher Self
            </p>
          </div>

          {/* Central Circular Glass Play/Pause Button */}
          <div className="my-2 relative flex items-center justify-center">
            {/* Circular glowing ripple aura */}
            <div
              className={`absolute w-24 h-24 rounded-full border border-amber-400/40 transition-transform duration-1000 ${
                isPlaying ? 'scale-125 opacity-40 animate-pulse' : 'scale-95 opacity-20'
              }`}
            />
            <button
              onClick={handleTogglePlay}
              aria-label={isPlaying ? 'Pause' : 'Play'}
              className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#711D35] to-[#B68A45] hover:brightness-110 active:scale-95 transition flex items-center justify-center shadow-xl shadow-amber-500/10 border-2 border-amber-300/40 relative z-10"
            >
              {isPlaying ? (
                <Pause className="w-7 h-7 text-white fill-white" />
              ) : (
                <Play className="w-7 h-7 text-white fill-white ml-1" />
              )}
            </button>
          </div>

          {/* Progress Waveform Bar & Time */}
          <div className="w-full max-w-xs space-y-2 my-2">
            {/* Waveform graphic */}
            <div className="flex items-center justify-between gap-1 h-5 px-2">
              {Array.from({ length: 32 }).map((_, i) => {
                const isPassed = (i / 32) * 100 <= progressPercent;
                const waveHeight = isPlaying
                  ? Math.sin(i * 0.4 + elapsedSeconds * 0.5) * 8 + 12
                  : 6 + (i % 5) * 2;

                return (
                  <span
                    key={i}
                    style={{ height: `${waveHeight}px` }}
                    className={`w-1 rounded-full transition-all duration-300 ${
                      isPassed ? 'bg-amber-400' : 'bg-white/20'
                    }`}
                  />
                );
              })}
            </div>

            {/* Time labels */}
            <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider text-amber-200/90 font-mono">
              <span>{formatTime(elapsedSeconds)}</span>
              <span className="text-white/40">/</span>
              <span className="text-white/60">{formatTime(totalSeconds)}</span>
            </div>
          </div>

          {/* End Session Button */}
          <button
            onClick={handleEndSession}
            className="px-6 py-2 rounded-full border border-white/25 hover:bg-white/10 active:scale-95 transition text-xs font-semibold text-white/90 shadow-sm"
          >
            End Session
          </button>

          {/* Bottom Calm Mind • Happy Life Pill (Exact mockup pill) */}
          <div className="mt-4 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md flex items-center gap-2 text-xs font-medium text-amber-200/90 shadow-sm">
            <Leaf className="w-3.5 h-3.5 text-amber-300" />
            <span>Calm Mind • Happy Life</span>
          </div>
        </main>
      )}

      {/* Mode 2: Guided Meditation Library */}
      {activeTab === 'library' && (
        <main className="flex-1 px-5 py-3 overflow-y-auto space-y-3 z-10 max-w-md mx-auto w-full">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-bold text-amber-200 uppercase tracking-wider flex items-center gap-1.5">
              <List className="w-4 h-4" /> Rajyoga Guided Library
            </h3>
            <span className="text-xs text-white/60">8 Sessions</span>
          </div>

          <div className="space-y-2.5 pb-10">
            {MEDITATION_SESSIONS_LIST.map((session) => {
              const isSelected = currentSession.id === session.id;
              return (
                <div
                  key={session.id}
                  onClick={() => handleSelectSession(session)}
                  className={`p-3.5 rounded-2xl border transition cursor-pointer active:scale-[0.99] flex items-center justify-between gap-3 ${
                    isSelected
                      ? 'bg-[#711D35]/80 border-amber-300/40 shadow-lg'
                      : 'bg-white/10 border-white/10 hover:bg-white/15'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-400/20 text-amber-300 flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white leading-tight">
                        {session.title}
                      </h4>
                      <p className="text-[11px] text-white/70 line-clamp-1 mt-0.5">
                        {session.subtitle}
                      </p>
                      <span className="text-[10px] text-amber-300/90 font-medium">
                        {session.category}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-1 flex-shrink-0">
                    <span className="text-xs font-bold text-amber-200 flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {session.durationMinutes} min
                    </span>
                    <button className="px-2.5 py-1 rounded-full bg-white/20 text-[10px] font-bold text-white hover:bg-white/30">
                      {isSelected ? 'Ready' : 'Choose'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </main>
      )}

      {/* Mode 3: Silent Meditation Timer with Bells (PRD Section 6.4) */}
      {activeTab === 'timer' && (
        <main className="flex-1 px-5 py-4 flex flex-col items-center justify-around z-10 max-w-md mx-auto w-full">
          <div className="text-center space-y-1">
            <h3 className="text-xl font-bold font-serif text-amber-200">
              Silent Meditation Timer
            </h3>
            <p className="text-xs text-white/70">
              Bathe in stillness with authentic singing bowl chimes
            </p>
          </div>

          {/* Duration selectors */}
          <div className="grid grid-cols-3 gap-2.5 w-full max-w-xs">
            {[2, 5, 10, 15, 20, 30].map((mins) => (
              <button
                key={mins}
                onClick={() => {
                  setTimerMinutes(mins);
                  setCurrentSession({
                    id: `timer-${mins}`,
                    title: `${mins} Minutes Silent Rajyoga`,
                    subtitle: 'Pure silence in Paramdham',
                    durationMinutes: mins,
                    category: 'Silent Meditation',
                    soundscapeId: 'paramdham-drone'
                  });
                  setElapsedSeconds(0);
                  sound.playChime();
                }}
                className={`py-3 rounded-2xl text-xs font-bold border transition ${
                  timerMinutes === mins
                    ? 'bg-[#711D35] border-amber-300 text-amber-200 shadow-lg scale-105'
                    : 'bg-white/10 border-white/10 text-white/80 hover:bg-white/15'
                }`}
              >
                {mins} min
              </button>
            ))}
          </div>

          {/* Test Sound Bell Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => sound.playTibetanBowl()}
              className="px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-amber-200 hover:bg-white/20 transition flex items-center gap-1.5"
            >
              🔔 Test Tibetan Singing Bowl
            </button>
          </div>

          <button
            onClick={() => {
              setActiveTab('player');
              handleTogglePlay();
            }}
            className="w-full max-w-xs py-3.5 rounded-2xl bg-gradient-to-r from-[#711D35] to-[#B68A45] text-white font-bold text-sm shadow-xl hover:brightness-110 active:scale-95 transition"
          >
            Start {timerMinutes} Min Silence
          </button>
        </main>
      )}
    </div>
  );
};
