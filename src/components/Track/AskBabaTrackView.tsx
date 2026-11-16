import React, { useState } from 'react';
import {
  ArrowLeft,
  ListTodo,
  ChevronRight,
  Sparkles,
  CheckCircle2,
  Circle,
  HelpCircle,
  Save,
  Clock,
  Heart
} from 'lucide-react';
import { StatusBar } from '../Common/StatusBar';
import { SanskarItem, DailyPracticeCheckItem } from '../../types';
import { INITIAL_SANSKARS, INITIAL_DAILY_PRACTICES } from '../../data/askBabaData';
import { sound } from '../../utils/audio';

interface AskBabaTrackViewProps {
  onBack: () => void;
  onOpenReflection?: () => void;
}

export const AskBabaTrackView: React.FC<AskBabaTrackViewProps> = ({
  onBack,
  onOpenReflection
}) => {
  const [activeCategory, setActiveCategory] = useState<'sanskars' | 'emotions' | 'thoughts'>('sanskars');
  const [sanskars, setSanskars] = useState<SanskarItem[]>(INITIAL_SANSKARS);
  const [dailyPractices, setDailyPractices] = useState<DailyPracticeCheckItem[]>(INITIAL_DAILY_PRACTICES);
  const [selectedSanskar, setSelectedSanskar] = useState<SanskarItem | null>(null);

  // Toggle daily practice status
  const handleTogglePractice = (id: string) => {
    sound.playBell();
    setDailyPractices((prev) =>
      prev.map((item) => (item.id === id ? { ...item, completed: !item.completed } : item))
    );
  };

  // Filter items based on activeCategory
  const filteredItems = sanskars.filter((item) => item.category === activeCategory);

  const handleSaveObservation = (updated: SanskarItem) => {
    sound.playStampSound();
    setSanskars((prev) => prev.map((s) => (s.id === updated.id ? updated : s)));
    setSelectedSanskar(null);
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
          Track
        </h1>

        <button
          onClick={onOpenReflection}
          aria-label="Open daily reflection journal"
          className="w-10 h-10 rounded-xl bg-white/70 border border-[#E4D3C0] flex items-center justify-center text-[#711D35] hover:bg-white active:scale-95 transition shadow-sm"
        >
          <ListTodo className="w-5 h-5" />
        </button>
      </header>

      {/* Segmented Filter Pills (Exact Mockup Screen #5: Sanskars | Emotions | Thoughts) */}
      <div className="px-5 mb-4">
        <div className="flex bg-[#EFE2D3]/70 p-1 rounded-2xl border border-[#DFC896]/40">
          {(['sanskars', 'emotions', 'thoughts'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`flex-1 py-1.5 rounded-xl text-xs font-bold capitalize transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-[#711D35] text-white shadow-sm'
                  : 'text-[#6B6363] hover:text-[#302B2B]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <main className="px-5 space-y-4">
        {/* Sanskars / Emotions List (Exact Mockup Screen #5) */}
        <div className="space-y-2.5">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedSanskar(item)}
              className="bg-white/95 hover:bg-white p-3.5 rounded-2xl border border-[#DFC896]/40 shadow-sm flex items-center justify-between gap-3 cursor-pointer active:scale-[0.99] transition group"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl flex-shrink-0">{item.icon}</span>
                <div>
                  <h3 className="text-sm font-bold text-[#302B2B] group-hover:text-[#711D35] transition">
                    {item.name}
                  </h3>
                  <p className="text-[11px] text-[#8E8686] line-clamp-1">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 flex-shrink-0">
                <span
                  className="text-xs font-bold px-2 py-0.5 rounded-full"
                  style={{
                    backgroundColor: `${item.color}15`,
                    color: item.color
                  }}
                >
                  {item.percentage}%
                </span>
                <ChevronRight className="w-4 h-4 text-[#8E8686] group-hover:text-[#711D35] group-hover:translate-x-0.5 transition" />
              </div>
            </div>
          ))}
        </div>

        {/* Daily Spiritual Routine Checklist (PRD Section 5.2) */}
        <section className="bg-white/95 rounded-3xl p-5 border border-[#DFC896]/40 shadow-sm space-y-3 mt-6">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-[#302B2B] flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[#B68A45]" /> Daily Spiritual Practices
            </h3>
            <span className="text-xs font-semibold text-[#38A169]">
              {dailyPractices.filter((p) => p.completed).length}/{dailyPractices.length} Completed
            </span>
          </div>

          <div className="divide-y divide-[#EFE2D3]">
            {dailyPractices.map((practice) => (
              <div
                key={practice.id}
                onClick={() => handleTogglePractice(practice.id)}
                className="py-3 flex items-center justify-between gap-3 cursor-pointer group"
              >
                <div className="flex items-center gap-3">
                  {practice.completed ? (
                    <CheckCircle2 className="w-5 h-5 text-[#38A169] flex-shrink-0" />
                  ) : (
                    <Circle className="w-5 h-5 text-[#C5A866] flex-shrink-0 group-hover:text-[#711D35]" />
                  )}
                  <div>
                    <span
                      className={`text-xs font-bold transition ${
                        practice.completed ? 'text-[#302B2B]' : 'text-[#8E8686]'
                      }`}
                    >
                      {practice.name}
                    </span>
                    <span className="block text-[10px] text-[#8E8686]">
                      {practice.nameHi}
                    </span>
                  </div>
                </div>

                {practice.timeEstimate && (
                  <span className="text-[10px] font-semibold text-[#8B6E3F] bg-[#FAF4EB] px-2 py-0.5 rounded-full border border-[#DFC896]/40">
                    {practice.timeEstimate}
                  </span>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Bottom Motivational Pill (Exact Mockup Screen #5) */}
        <div className="pt-2 flex justify-center">
          <div className="px-5 py-2 rounded-full bg-gradient-to-r from-[#FAF4EB] via-[#FDF9F2] to-[#FAF4EB] border border-[#B68A45]/40 text-xs font-bold text-[#8B6E3F] shadow-sm flex items-center gap-2">
            <span>✨</span>
            <span>Choose Peace, Choose Progress</span>
            <span>✨</span>
          </div>
        </div>
      </main>

      {/* Modal: Sanskar Deep-Dive Observation (PRD Section 5.3) */}
      {selectedSanskar && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fadeIn">
          <div className="bg-[#F8EEE4] rounded-3xl max-w-sm w-full p-6 border border-[#DFC896] shadow-2xl space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-[#EFE2D3] pb-3">
              <div className="flex items-center gap-2.5">
                <span className="text-3xl">{selectedSanskar.icon}</span>
                <div>
                  <h3 className="text-base font-bold font-serif text-[#711D35]">
                    {selectedSanskar.name} ({selectedSanskar.nameHi})
                  </h3>
                  <span className="text-[10px] text-[#8E8686]">
                    Self-Observation & Transformation
                  </span>
                </div>
              </div>
              <button
                onClick={() => setSelectedSanskar(null)}
                className="text-[#8E8686] hover:text-[#302B2B] text-lg font-bold"
              >
                ✕
              </button>
            </div>

            {/* Questions list */}
            <div className="space-y-3 text-xs">
              {selectedSanskar.questions.map((q, idx) => (
                <div key={idx} className="bg-white/90 p-3 rounded-2xl border border-[#DFC896]/40 space-y-2">
                  <h4 className="font-bold text-[#302B2B]">{q.question}</h4>
                  <div className="space-y-1">
                    {q.options.map((opt) => (
                      <label
                        key={opt}
                        className={`flex items-center gap-2 p-1.5 rounded-lg border transition cursor-pointer ${
                          q.userAnswer === opt
                            ? 'bg-[#711D35]/10 border-[#711D35] text-[#711D35] font-bold'
                            : 'bg-white border-[#EFE2D3] text-[#6B6363]'
                        }`}
                      >
                        <input
                          type="radio"
                          name={`q-${idx}`}
                          checked={q.userAnswer === opt}
                          onChange={() => {
                            const updated = { ...selectedSanskar };
                            updated.questions[idx].userAnswer = opt;
                            setSelectedSanskar(updated);
                          }}
                          className="accent-[#711D35]"
                        />
                        <span>{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Action buttons */}
            <div className="pt-2 flex gap-2">
              <button
                onClick={() => handleSaveObservation(selectedSanskar)}
                className="flex-1 py-2.5 rounded-xl bg-[#711D35] text-white font-bold text-xs shadow-md active:scale-95 transition flex items-center justify-center gap-1.5"
              >
                <Save className="w-4 h-4" /> Save Self-Observation
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
