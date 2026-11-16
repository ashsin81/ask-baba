import React, { useState } from 'react';
import { FIGMA_CHECKPOINTS, FigmaCheckpoint } from '../../data/figmaPassportData';
import { CheckpointDetailModal } from './CheckpointDetailModal';
import { Search, Sparkles, Filter, ChevronRight, Crown, Flame, Wind, Eye, Scale, ShieldAlert, Archive, Compass, MessageSquare, RefreshCw, ShieldCheck, Lightbulb, Heart, VolumeX, Award } from 'lucide-react';
import { sound } from '../../utils/audio';

interface CheckpointsViewProps {
  unlockedStampIds: string[];
  onUnlockStamp: (stampId: string) => void;
  initialCheckpointId?: string;
  onClearInitialCheckpoint?: () => void;
}

export const CheckpointsView: React.FC<CheckpointsViewProps> = ({
  unlockedStampIds,
  onUnlockStamp,
  initialCheckpointId,
  onClearInitialCheckpoint,
}) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Borders' | 'Checkpoints' | 'Gates'>('All');
  const [activeModalCheckpoint, setActiveModalCheckpoint] = useState<FigmaCheckpoint | null>(() => {
    if (initialCheckpointId) {
      return FIGMA_CHECKPOINTS.find((c) => c.id === initialCheckpointId) || null;
    }
    return null;
  });

  const categories: ('All' | 'Borders' | 'Checkpoints' | 'Gates')[] = [
    'All',
    'Borders',
    'Checkpoints',
    'Gates',
  ];

  const filteredCheckpoints = FIGMA_CHECKPOINTS.filter((cp) => {
    const matchesCategory =
      selectedCategory === 'All' || cp.category === selectedCategory;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !q ||
      cp.nameHi.toLowerCase().includes(q) ||
      cp.nameEn.toLowerCase().includes(q) ||
      cp.situation.toLowerCase().includes(q) ||
      cp.babaDirection.toLowerCase().includes(q) ||
      cp.stampName.toLowerCase().includes(q);
    return matchesCategory && matchesSearch;
  });

  const getCheckpointIcon = (iconName: string) => {
    switch (iconName) {
      case 'flame': return Flame;
      case 'wind': return Wind;
      case 'eye': return Eye;
      case 'scale': return Scale;
      case 'shield-alert': return ShieldAlert;
      case 'archive': return Archive;
      case 'compass': return Compass;
      case 'message-square': return MessageSquare;
      case 'refresh-cw': return RefreshCw;
      case 'shield-check': return ShieldCheck;
      case 'lightbulb': return Lightbulb;
      case 'heart': return Heart;
      case 'volume-x': return VolumeX;
      case 'crown': return Crown;
      case 'award': return Award;
      default: return Sparkles;
    }
  };

  return (
    <div className="space-y-4 pb-20 max-w-md mx-auto">
      {/* Header */}
      <div className="pt-1 space-y-1">
        <span className="text-[10px] uppercase font-serif tracking-[0.25em] text-emerald-700 dark:text-amber-400 font-bold block">
          FIND YOUR CHECKPOINT
        </span>
        <h1 className="text-2xl sm:text-3xl font-hindi font-bold text-slate-900 dark:text-amber-100 tracking-tight">
          अभी मन में क्या है?
        </h1>
        <p className="text-xs font-serif text-slate-500 dark:text-slate-400">
          Choose a situation. Find a clear divine direction.
        </p>
      </div>

      {/* Search Input */}
      <div className="relative">
        <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search · क्रोध, मन, चिंता, दृष्टि, अभिमान..."
          className="w-full pl-10 pr-12 py-3 rounded-2xl bg-white dark:bg-[#131C2E] border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 text-xs font-hindi focus:outline-none focus:border-emerald-500 dark:focus:border-amber-400 shadow-xs"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="text-[11px] text-emerald-600 dark:text-amber-400 absolute right-3.5 top-1/2 -translate-y-1/2 font-bold hover:underline"
          >
            Clear
          </button>
        )}
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat;
          const count =
            cat === 'All'
              ? FIGMA_CHECKPOINTS.length
              : FIGMA_CHECKPOINTS.filter((c) => c.category === cat).length;

          return (
            <button
              key={cat}
              onClick={() => {
                sound.playSoftClick();
                setSelectedCategory(cat);
              }}
              className={`py-1.5 px-3.5 rounded-full text-xs font-serif whitespace-nowrap transition-all ${
                isSelected
                  ? 'bg-emerald-600 dark:bg-amber-400 text-white dark:text-slate-950 font-bold shadow-xs'
                  : 'bg-white dark:bg-[#131C2E] border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/80'
              }`}
            >
              {cat} ({count})
            </button>
          );
        })}
      </div>

      {/* Checkpoints Cards List */}
      <div className="space-y-2.5 pt-1">
        {filteredCheckpoints.length === 0 ? (
          <div className="p-8 text-center rounded-3xl bg-white dark:bg-[#131C2E] border border-slate-200 dark:border-slate-800 space-y-2">
            <Sparkles className="w-6 h-6 text-slate-400 mx-auto" />
            <p className="text-xs font-hindi text-slate-500 dark:text-slate-400">
              कोई चेकपॉइंट नहीं मिला। कृपया दूसरा शब्द खोजें।
            </p>
          </div>
        ) : (
          filteredCheckpoints.map((cp) => {
            const Icon = getCheckpointIcon(cp.icon);
            const isUnlocked = unlockedStampIds.includes(cp.stampId);

            return (
              <div
                key={cp.id}
                onClick={() => {
                  sound.playSoftClick();
                  setActiveModalCheckpoint(cp);
                }}
                className="cursor-pointer rounded-3xl bg-white dark:bg-[#131C2E] border border-slate-100 dark:border-slate-800 hover:border-emerald-300 dark:hover:border-amber-400/50 p-4 shadow-xs hover:shadow-md transition-all active:scale-[0.99] group space-y-2.5"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono tracking-wider px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold">
                      {String(cp.number).padStart(2, '0')} / 20
                    </span>
                    <span className="text-[10px] uppercase font-serif text-slate-400 dark:text-slate-500">
                      {cp.category}
                    </span>
                  </div>
                  {isUnlocked && (
                    <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-500/30 font-semibold">
                      STAMP UNLOCKED ✓
                    </span>
                  )}
                </div>

                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-200 group-hover:scale-110 transition-transform">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="text-base font-bold font-hindi text-slate-900 dark:text-slate-100 group-hover:text-emerald-600 dark:group-hover:text-amber-300 transition-colors">
                        {cp.nameHi}
                      </h3>
                      <span className="text-xs text-slate-400 dark:text-slate-500 font-serif">
                        ({cp.nameEn})
                      </span>
                    </div>
                    <p className="text-xs font-hindi text-slate-600 dark:text-slate-300 line-clamp-2 pl-9">
                      {cp.situation}
                    </p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-400 group-hover:translate-x-1 group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-all shrink-0 mt-2" />
                </div>

                <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px] font-hindi">
                  <span className="text-slate-500 dark:text-slate-400">संस्कार: <strong className="text-slate-700 dark:text-slate-200 font-semibold">{cp.stampName}</strong></span>
                  <span className="font-serif text-emerald-600 dark:text-amber-400 font-medium group-hover:underline">Open Checkpoint →</span>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Modal for Selected Checkpoint */}
      {activeModalCheckpoint && (
        <CheckpointDetailModal
          checkpoint={activeModalCheckpoint}
          isOpen={true}
          onClose={() => {
            setActiveModalCheckpoint(null);
            if (onClearInitialCheckpoint) onClearInitialCheckpoint();
          }}
          onUnlockStamp={onUnlockStamp}
          isStampUnlocked={unlockedStampIds.includes(activeModalCheckpoint.stampId)}
        />
      )}
    </div>
  );
};
