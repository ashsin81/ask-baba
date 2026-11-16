import React, { useState } from 'react';
import {
  ArrowLeft,
  Calendar,
  Sparkles,
  RotateCcw,
  Save,
  CheckCircle2,
  Bookmark,
  History,
  Trash2
} from 'lucide-react';
import { StatusBar } from '../Common/StatusBar';
import { DailyReflectionItem } from '../../types';
import { INITIAL_REFLECTIONS_HISTORY } from '../../data/askBabaData';
import { sound } from '../../utils/audio';

interface AskBabaReflectionViewProps {
  onBack: () => void;
  onSaveEntry?: (entry: DailyReflectionItem) => void;
}

export const AskBabaReflectionView: React.FC<AskBabaReflectionViewProps> = ({
  onBack,
  onSaveEntry
}) => {
  const [activeTab, setActiveTab] = useState<'write' | 'history'>('write');
  const [selectedMood, setSelectedMood] = useState<'blissful' | 'peaceful' | 'neutral' | 'worried' | 'irritated'>('blissful');
  const [learnings, setLearnings] = useState<string>('');
  const [nextDaySankalp, setNextDaySankalp] = useState<string>('Stay calm and positive.');
  const [history, setHistory] = useState<DailyReflectionItem[]>(INITIAL_REFLECTIONS_HISTORY);
  const [savedSuccess, setSavedSuccess] = useState<boolean>(false);

  const moods = [
    { id: 'blissful', emoji: '😃', label: 'Blissful' },
    { id: 'peaceful', emoji: '😊', label: 'Peaceful' },
    { id: 'neutral', emoji: '😐', label: 'Neutral' },
    { id: 'worried', emoji: '😟', label: 'Worried' },
    { id: 'irritated', emoji: '😡', label: 'Tested' }
  ];

  const presetSankalps = [
    'Stay calm and positive.',
    'I am an ocean of peace. Nothing can shake my inner stillness.',
    'I see every soul with good wishes and benevolence.',
    'I am an instrument in Baba\'s hands. Nimitt and Nirahankari.',
    'No reaction. Only conscious, loving action.',
    'Master of my mind, carefree emperor of spiritual joy.'
  ];

  const handleShuffleSankalp = () => {
    sound.playChime();
    const otherSankalps = presetSankalps.filter((s) => s !== nextDaySankalp);
    const random = otherSankalps[Math.floor(Math.random() * otherSankalps.length)];
    setNextDaySankalp(random);
  };

  const handleSaveReflection = () => {
    if (!learnings.trim()) {
      alert('Please write a short reflection before saving.');
      return;
    }

    sound.playStampSound();
    const newEntry: DailyReflectionItem = {
      id: `ref-${Date.now()}`,
      date: new Date().toISOString().split('T')[0],
      timestamp: new Date().toISOString(),
      mood: selectedMood,
      moodLabel: moods.find((m) => m.id === selectedMood)?.label || 'Peaceful',
      learnings: learnings.trim(),
      nextDaySankalp
    };

    setHistory((prev) => [newEntry, ...prev]);
    if (onSaveEntry) onSaveEntry(newEntry);

    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      setLearnings('');
      setActiveTab('history');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#F8EEE4] text-[#302B2B] pb-28">
      {/* Top Phone Status Bar */}
      <StatusBar />

      {/* Header */}
      <header className="px-5 pt-1 pb-3 flex items-center justify-between">
        <button
          onClick={onBack}
          aria-label="Back"
          className="w-10 h-10 rounded-xl bg-white/70 border border-[#E4D3C0] flex items-center justify-center text-[#711D35] hover:bg-white active:scale-95 transition shadow-sm"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>

        <h1 className="text-xl font-bold font-serif text-[#711D35]">
          Daily Reflection
        </h1>

        <button
          onClick={() => setActiveTab(activeTab === 'write' ? 'history' : 'write')}
          aria-label="Toggle history"
          className="w-10 h-10 rounded-xl bg-white/70 border border-[#E4D3C0] flex items-center justify-center text-[#711D35] hover:bg-white active:scale-95 transition shadow-sm"
        >
          {activeTab === 'write' ? <Calendar className="w-5 h-5" /> : <Sparkles className="w-5 h-5" />}
        </button>
      </header>

      {/* Success Notification */}
      {savedSuccess && (
        <div className="fixed top-14 left-1/2 -translate-x-1/2 z-50 bg-[#711D35] text-amber-200 px-4 py-2 rounded-full text-xs font-bold shadow-xl border border-amber-300/40 animate-bounce">
          ✓ Reflection Saved to Your Private Journal!
        </div>
      )}

      {/* Main View */}
      {activeTab === 'write' ? (
        <main className="px-5 space-y-6 pt-2">
          {/* Lotus Prompt Header (Exact Mockup Screen #6) */}
          <div className="text-center space-y-2">
            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#711D35] to-[#B68A45] p-0.5 mx-auto flex items-center justify-center shadow-md">
              <div className="w-full h-full rounded-full bg-[#FAF4EB] flex items-center justify-center text-2xl">
                🪷
              </div>
            </div>

            <div className="space-y-0.5">
              <h2 className="text-xl font-bold font-serif text-[#302B2B]">
                How was your day?
              </h2>
              <p className="text-xs text-[#8E8686] italic">
                Be honest with yourself...
              </p>
            </div>
          </div>

          {/* 5 Mood Emoji Faces (Exact Mockup Screen #6) */}
          <div className="flex items-center justify-between max-w-xs mx-auto px-2">
            {moods.map((m) => {
              const isSelected = selectedMood === m.id;
              return (
                <button
                  key={m.id}
                  onClick={() => {
                    setSelectedMood(m.id as any);
                    sound.playChime();
                  }}
                  className={`flex flex-col items-center gap-1 transition transform active:scale-90 ${
                    isSelected ? 'scale-125' : 'opacity-70 hover:opacity-100'
                  }`}
                >
                  <span className="text-3xl filter drop-shadow-sm">{m.emoji}</span>
                  {isSelected && (
                    <span className="text-[10px] font-bold text-[#711D35]">
                      {m.label}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Today's Learnings Text Area (Exact Mockup Screen #6) */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-[#302B2B] block">
              Today's Learnings
            </label>
            <div className="bg-white rounded-3xl p-4 border border-[#DFC896]/60 shadow-sm focus-within:ring-2 focus-within:ring-[#711D35]/30 transition">
              <textarea
                value={learnings}
                onChange={(e) => setLearnings(e.target.value)}
                placeholder="Write your reflection..."
                rows={5}
                className="w-full text-xs text-[#302B2B] placeholder:text-[#8E8686] outline-none resize-none bg-transparent leading-relaxed"
              />
            </div>
          </div>

          {/* Next Day Sankalp with Refresh Icon (Exact Mockup Screen #6) */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-[#302B2B] block">
              Next Day Sankalp
            </label>
            <div className="bg-white/95 rounded-2xl p-3.5 border border-[#DFC896]/50 shadow-sm flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="text-amber-500 font-bold">⭐</span>
                <span className="text-xs font-semibold text-[#302B2B]">
                  {nextDaySankalp}
                </span>
              </div>
              <button
                onClick={handleShuffleSankalp}
                aria-label="Shuffle Sankalp"
                className="w-8 h-8 rounded-full bg-[#FAF4EB] text-[#711D35] hover:bg-amber-100 flex items-center justify-center transition flex-shrink-0"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Big Deep Maroon Button: Save Reflection (Exact Mockup Screen #6) */}
          <button
            onClick={handleSaveReflection}
            className="w-full py-3.5 rounded-2xl bg-[#711D35] hover:bg-[#5A1428] text-white font-bold text-sm shadow-lg shadow-[#711D35]/20 active:scale-95 transition flex items-center justify-center gap-2"
          >
            <Save className="w-4 h-4" /> Save Reflection
          </button>
        </main>
      ) : (
        /* Journal History View */
        <main className="px-5 space-y-4 pb-10">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-[#302B2B] flex items-center gap-1.5">
              <History className="w-4 h-4 text-[#B68A45]" /> Past Reflections ({history.length})
            </h3>
            <button
              onClick={() => setActiveTab('write')}
              className="text-xs font-bold text-[#711D35] underline"
            >
              + New Entry
            </button>
          </div>

          <div className="space-y-3">
            {history.map((entry) => (
              <div
                key={entry.id}
                className="bg-white/95 rounded-3xl p-4 border border-[#DFC896]/40 shadow-sm space-y-2.5"
              >
                <div className="flex items-center justify-between border-b border-[#EFE2D3] pb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">
                      {moods.find((m) => m.id === entry.mood)?.emoji || '😊'}
                    </span>
                    <span className="text-xs font-bold text-[#302B2B]">
                      {entry.moodLabel}
                    </span>
                  </div>
                  <span className="text-[11px] text-[#8E8686] font-mono">
                    {entry.date}
                  </span>
                </div>

                <p className="text-xs text-[#302B2B] leading-relaxed whitespace-pre-line">
                  "{entry.learnings}"
                </p>

                {entry.nextDaySankalp && (
                  <div className="bg-[#FAF4EB] p-2 rounded-xl text-[11px] text-[#8B6E3F] font-medium flex items-center gap-1.5">
                    <span>⭐</span>
                    <span>Sankalp: {entry.nextDaySankalp}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </main>
      )}
    </div>
  );
};
