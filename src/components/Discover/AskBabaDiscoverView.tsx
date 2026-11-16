import React, { useState } from 'react';
import {
  ArrowLeft,
  Search,
  BookOpen,
  Sparkles,
  Headphones,
  Star,
  Play,
  ChevronRight,
  Bookmark,
  Share2,
  Clock,
  Compass
} from 'lucide-react';
import { StatusBar } from '../Common/StatusBar';
import { SpiritualLessonItem } from '../../types';
import { DISCOVER_LESSONS } from '../../data/askBabaData';
import { sound } from '../../utils/audio';

interface AskBabaDiscoverViewProps {
  onBack: () => void;
  onOpenMeditation?: (meditationId: string) => void;
}

export const AskBabaDiscoverView: React.FC<AskBabaDiscoverViewProps> = ({
  onBack,
  onOpenMeditation
}) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedLesson, setSelectedLesson] = useState<SpiritualLessonItem | null>(null);
  const [bookmarks, setBookmarks] = useState<string[]>([]);

  // 4 Featured Quick Categories (Exact Mockup Screen #7)
  const quickCategories = [
    { id: 'tips', icon: '🪷', title: 'Spiritual Tips', bg: 'bg-[#FCE8ED]', color: 'text-[#C53030]' },
    { id: 'wisdom', icon: '📖', title: 'BK Wisdom', bg: 'bg-[#FEF3C7]', color: 'text-[#D97706]' },
    { id: 'guide', icon: '🎧', title: 'Meditation Guide', bg: 'bg-[#E0E7FF]', color: 'text-[#4F46E5]' },
    { id: 'stories', icon: '⭐', title: 'Inspirational Stories', bg: 'bg-[#FEF9C3]', color: 'text-[#CA8A04]' }
  ];

  const filteredLessons = DISCOVER_LESSONS.filter((lesson) => {
    const matchesSearch =
      lesson.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lesson.introduction.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lesson.categoryName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === 'all' || lesson.categoryId === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleToggleBookmark = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    sound.playChime();
    setBookmarks((prev) =>
      prev.includes(id) ? prev.filter((b) => b !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-[#F8EEE4] text-[#302B2B] pb-28">
      {/* Top Phone Status Bar */}
      <StatusBar />

      {/* Header (Exact Mockup Screen #7) */}
      <header className="px-5 pt-1 pb-3 flex items-center justify-between">
        <button
          onClick={onBack}
          aria-label="Back"
          className="w-10 h-10 rounded-xl bg-white/70 border border-[#E4D3C0] flex items-center justify-center text-[#711D35] hover:bg-white active:scale-95 transition shadow-sm"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>

        <h1 className="text-xl font-bold font-serif text-[#711D35]">
          Explore
        </h1>

        <button
          onClick={() => {}}
          aria-label="Search"
          className="w-10 h-10 rounded-xl bg-white/70 border border-[#E4D3C0] flex items-center justify-center text-[#711D35] hover:bg-white active:scale-95 transition shadow-sm"
        >
          <Search className="w-5 h-5" />
        </button>
      </header>

      {/* Search Input Bar */}
      <div className="px-5 mb-4">
        <div className="w-full bg-white rounded-2xl px-4 py-2 border border-[#DFC896]/50 shadow-sm flex items-center gap-2">
          <Search className="w-4 h-4 text-[#8E8686]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search BK knowledge, Murli lessons..."
            className="w-full text-xs text-[#302B2B] placeholder:text-[#8E8686] outline-none bg-transparent"
          />
        </div>
      </div>

      <main className="px-5 space-y-5">
        {/* 4 Feature Cards Grid (Exact Mockup Screen #7) */}
        <section className="grid grid-cols-2 gap-3">
          {quickCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                sound.playChime();
                if (cat.id === 'tips') setSelectedCategory('transformation');
                else if (cat.id === 'wisdom') setSelectedCategory('soul');
                else if (cat.id === 'guide') setSelectedCategory('rajyoga');
                else setSelectedCategory('all');
              }}
              className="bg-white/95 hover:bg-white p-4 rounded-3xl border border-[#DFC896]/40 shadow-sm flex flex-col items-center justify-center gap-2 active:scale-[0.98] transition group text-center"
            >
              <div className={`w-12 h-12 rounded-2xl ${cat.bg} ${cat.color} flex items-center justify-center text-2xl shadow-inner group-hover:scale-105 transition`}>
                {cat.icon}
              </div>
              <span className="text-xs font-bold text-[#302B2B] group-hover:text-[#711D35] transition leading-tight">
                {cat.title}
              </span>
            </button>
          ))}
        </section>

        {/* Featured Card: "Silence is the key to happiness" with Play Button (Exact Mockup Screen #7) */}
        <div
          onClick={() => {
            sound.playBell();
            if (onOpenMeditation) onOpenMeditation('moment-of-silence');
          }}
          className="rounded-3xl bg-gradient-to-r from-[#D9B8A5] via-[#EBD9CE] to-[#F5EBE1] border border-[#DFC896]/60 p-5 shadow-sm relative overflow-hidden cursor-pointer active:scale-[0.99] transition group"
        >
          {/* Peaceful Sunrise Landscape Vector Artwork */}
          <div className="absolute right-0 bottom-0 w-44 h-32 opacity-30 pointer-events-none">
            <svg viewBox="0 0 160 120" className="w-full h-full">
              <circle cx="120" cy="50" r="30" fill="#E5A93C" />
              <path d="M0 100 Q60 70 120 100 T240 100 L240 120 L0 120 Z" fill="#711D35" />
              <path d="M40 100 Q100 80 160 100 L160 120 L40 120 Z" fill="#B68A45" />
            </svg>
          </div>

          <div className="relative z-10 flex items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#711D35]">
                Featured Insight
              </span>
              <h3 className="text-base font-serif font-bold text-[#302B2B] leading-tight">
                "Silence is the key to happiness"
              </h3>
              <p className="text-[11px] text-[#6B6363]">
                Listen to the calming power of soul-stillness
              </p>
            </div>

            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#711D35] to-[#B68A45] text-white flex items-center justify-center shadow-lg group-hover:scale-105 transition flex-shrink-0">
              <Play className="w-5 h-5 fill-white ml-0.5" />
            </div>
          </div>
        </div>

        {/* Structured BK Knowledge Lessons List (PRD Section 7) */}
        <section className="space-y-3 pt-2">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-[#302B2B] flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-[#B68A45]" /> Spiritual Knowledge Library
            </h3>
            {selectedCategory !== 'all' && (
              <button
                onClick={() => setSelectedCategory('all')}
                className="text-xs font-semibold text-[#711D35] underline"
              >
                Clear Filter
              </button>
            )}
          </div>

          <div className="space-y-2.5">
            {filteredLessons.map((lesson) => {
              const isBookmarked = bookmarks.includes(lesson.id);
              return (
                <div
                  key={lesson.id}
                  onClick={() => {
                    sound.playChime();
                    setSelectedLesson(lesson);
                  }}
                  className="bg-white/95 hover:bg-white p-4 rounded-3xl border border-[#DFC896]/40 shadow-sm flex items-center justify-between gap-3 cursor-pointer active:scale-[0.99] transition group"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-2xl mt-0.5">{lesson.icon}</span>
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold text-[#B68A45] uppercase tracking-wide">
                        {lesson.categoryName}
                      </span>
                      <h4 className="text-xs font-bold text-[#302B2B] group-hover:text-[#711D35] transition leading-snug">
                        {lesson.title}
                      </h4>
                      <p className="text-[11px] text-[#8E8686] line-clamp-1">
                        {lesson.introduction}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 flex-shrink-0">
                    <button
                      onClick={(e) => handleToggleBookmark(lesson.id, e)}
                      aria-label="Bookmark lesson"
                      className="p-1.5 rounded-full hover:bg-amber-50 text-[#8E8686]"
                    >
                      <Bookmark className={`w-4 h-4 ${isBookmarked ? 'text-[#711D35] fill-[#711D35]' : ''}`} />
                    </button>
                    <ChevronRight className="w-4 h-4 text-[#8E8686] group-hover:text-[#711D35] group-hover:translate-x-0.5 transition" />
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>

      {/* Lesson Reader Modal (PRD Section 7.2) */}
      {selectedLesson && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fadeIn">
          <div className="bg-[#F8EEE4] rounded-3xl max-w-md w-full p-6 border border-[#DFC896] shadow-2xl space-y-4 max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="flex items-start justify-between border-b border-[#EFE2D3] pb-3">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#B68A45]">
                  {selectedLesson.categoryName}
                </span>
                <h3 className="text-lg font-bold font-serif text-[#711D35] leading-snug">
                  {selectedLesson.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedLesson(null)}
                className="text-[#8E8686] hover:text-[#302B2B] text-lg font-bold"
              >
                ✕
              </button>
            </div>

            {/* Lesson Body */}
            <div className="space-y-4 text-xs text-[#302B2B] leading-relaxed">
              {/* Introduction */}
              <div className="bg-white/80 p-3.5 rounded-2xl border border-[#DFC896]/30">
                <h5 className="font-bold text-[#711D35] mb-1">Introduction</h5>
                <p>{selectedLesson.introduction}</p>
              </div>

              {/* BK Knowledge Explanation */}
              <div className="space-y-1">
                <h5 className="font-bold text-[#711D35]">Brahma Kumaris Knowledge</h5>
                <p className="whitespace-pre-line">{selectedLesson.bkKnowledge}</p>
              </div>

              {/* Murli Reference */}
              <div className="bg-[#FAF4EB] p-3 rounded-2xl border-l-4 border-[#B68A45] italic text-[#8B6E3F]">
                "{selectedLesson.murliReference}"
              </div>

              {/* Practical Everyday Example */}
              <div className="bg-white/80 p-3.5 rounded-2xl border border-[#DFC896]/30">
                <h5 className="font-bold text-[#711D35] mb-1">Practical Everyday Example</h5>
                <p>{selectedLesson.practicalExample}</p>
              </div>

              {/* Today's Exercise */}
              <div className="bg-[#E6F4EA] p-3.5 rounded-2xl border border-[#CEEAD6]">
                <h5 className="font-bold text-[#38A169] mb-1">Today's Purusharth Exercise</h5>
                <p className="font-medium">{selectedLesson.todayExercise}</p>
              </div>

              {/* Reflection Question */}
              <div className="bg-[#FAF4EB] p-3 rounded-2xl border border-[#B68A45]/40 text-[#711D35]">
                <h5 className="font-bold mb-1">Reflection Question:</h5>
                <p className="italic font-medium">{selectedLesson.reflectionQuestion}</p>
              </div>
            </div>

            {/* Modal actions */}
            <div className="pt-2 flex gap-2">
              {selectedLesson.relatedMeditationSessionId && (
                <button
                  onClick={() => {
                    const medId = selectedLesson.relatedMeditationSessionId!;
                    setSelectedLesson(null);
                    if (onOpenMeditation) onOpenMeditation(medId);
                  }}
                  className="flex-1 py-2.5 rounded-xl bg-[#711D35] text-white font-bold text-xs shadow-md active:scale-95 transition flex items-center justify-center gap-1.5"
                >
                  <Headphones className="w-4 h-4" /> Start Related Meditation
                </button>
              )}
              <button
                onClick={() => setSelectedLesson(null)}
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
