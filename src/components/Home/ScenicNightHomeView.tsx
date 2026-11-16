import React, { useState } from 'react';
import { Plus, Check, Clock, Sparkles, Moon, Sun } from 'lucide-react';
import { UserProfile, TodayPurusharth } from '../../types';
import { ScenicLandscapeArt } from '../Common/ScenicLandscapeArt';
import { StatusBar } from '../Common/StatusBar';
import { sound } from '../../utils/audio';

interface RoutineTimelineItem {
  id: string;
  title: string;
  status: 'In progress' | 'To do' | 'Completed' | 'Scheduled';
  time: string;
  iconType: 'meditation' | 'bedtime' | 'amritvela' | 'traffic';
}

interface ScenicNightHomeViewProps {
  profile: UserProfile;
  todayPurusharth: TodayPurusharth;
  onOpenMeditate: () => void;
  onOpenReflection: () => void;
}

export const ScenicNightHomeView: React.FC<ScenicNightHomeViewProps> = ({
  profile,
  todayPurusharth,
  onOpenMeditate,
  onOpenReflection
}) => {
  const currentDateFormatted = new Date().toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).toLowerCase();

  const [routineItems, setRoutineItems] = useState<RoutineTimelineItem[]>([
    {
      id: 'item-1',
      title: 'Meditation Zen',
      status: 'In progress',
      time: '10.00 p.m.',
      iconType: 'meditation'
    },
    {
      id: 'item-2',
      title: 'Bedtime & Night Reflection',
      status: 'To do',
      time: '11.00 p.m.',
      iconType: 'bedtime'
    },
    {
      id: 'item-3',
      title: 'Amritvela Rajyoga',
      status: 'Scheduled',
      time: '3.30 a.m.',
      iconType: 'amritvela'
    }
  ]);

  const [showAddModal, setShowAddModal] = useState<boolean>(false);
  const [newTitle, setNewTitle] = useState<string>('');
  const [newTime, setNewTime] = useState<string>('9:00 p.m.');

  const handleToggleItem = (id: string) => {
    sound.playBell();
    setRoutineItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const nextStatus = item.status === 'Completed' ? 'To do' : 'Completed';
          return { ...item, status: nextStatus };
        }
        return item;
      })
    );
  };

  const handleAddItem = () => {
    if (!newTitle.trim()) return;
    sound.playStampSound();
    const newItem: RoutineTimelineItem = {
      id: `item-${Date.now()}`,
      title: newTitle.trim(),
      status: 'To do',
      time: newTime,
      iconType: 'meditation'
    };
    setRoutineItems((prev) => [...prev, newItem]);
    setNewTitle('');
    setShowAddModal(false);
  };

  return (
    <div className="min-h-screen bg-[#0B0F1C] text-white pb-28 select-none">
      {/* Top Phone Status Bar */}
      <StatusBar dark />

      {/* Header (Exact Mockup: "Good Night / 23 december, 2020") */}
      <header className="px-6 pt-2 pb-4 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-white">
            Good Night
          </h1>
          <p className="text-xs text-slate-400 capitalize mt-0.5">
            {currentDateFormatted}
          </p>
        </div>

        <button
          onClick={onOpenReflection}
          className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 transition text-xs font-semibold text-amber-200 border border-white/10 flex items-center gap-1.5"
        >
          <Moon className="w-3.5 h-3.5 text-amber-300" />
          <span>Reflect</span>
        </button>
      </header>

      {/* Scenic Night Landscape with Crescent Moon, Stars & Glowing Tents */}
      <div className="px-5 mb-6">
        <ScenicLandscapeArt
          mode="night"
          activityTime="10:00 p.m."
          activityTitle="Rest in Baba's lap of pure peace"
          onActivityClick={onOpenMeditate}
        />
      </div>

      {/* Bottom Half: "Programmation" + Sky Blue Add Button (Exact Mockup!) */}
      <div className="px-6 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-white tracking-tight">
            Programmation
          </h2>

          {/* Sky Blue '+' Button in Rounded Square (Exact Mockup!) */}
          <button
            onClick={() => setShowAddModal(true)}
            aria-label="Add routine item"
            className="w-10 h-10 rounded-2xl bg-[#0284C7] hover:bg-[#0369A1] active:scale-95 transition flex items-center justify-center text-white shadow-lg shadow-sky-600/30"
          >
            <Plus className="w-6 h-6 stroke-[2.5]" />
          </button>
        </div>

        {/* Connected Timeline List with Vertical Connecting Line (Exact Mockup!) */}
        <div className="relative pl-2 pt-2 pb-4 space-y-6">
          {/* Vertical Connecting Line */}
          <div className="absolute left-[26px] top-7 bottom-7 w-0.5 bg-slate-700/60 pointer-events-none" />

          {routineItems.map((item, index) => {
            const isCompleted = item.status === 'Completed';
            const isInProgress = item.status === 'In progress';

            return (
              <div
                key={item.id}
                onClick={() => handleToggleItem(item.id)}
                className="relative flex items-center justify-between gap-4 cursor-pointer group active:scale-[0.99] transition"
              >
                <div className="flex items-center gap-4">
                  {/* Glowing Circular Badge with Icon */}
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center relative z-10 transition shadow-md ${
                      isInProgress
                        ? 'bg-[#0284C7] text-white shadow-sky-500/30 ring-4 ring-sky-500/20'
                        : isCompleted
                        ? 'bg-emerald-600 text-white'
                        : 'bg-[#182033] border border-white/10 text-slate-300'
                    }`}
                  >
                    {item.iconType === 'meditation' ? (
                      <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-current fill-none stroke-2">
                        <circle cx="12" cy="7" r="2.5" />
                        <path d="M12 9.5 C8.5 9.5 6 13 6 17 L18 17 C18 13 15.5 9.5 12 9.5 Z" />
                      </svg>
                    ) : item.iconType === 'bedtime' ? (
                      <Moon className="w-5 h-5 fill-current" />
                    ) : (
                      <Sun className="w-5 h-5 text-amber-300" />
                    )}
                  </div>

                  {/* Title & Status */}
                  <div>
                    <h3
                      className={`text-sm font-bold transition ${
                        isCompleted
                          ? 'line-through text-slate-500'
                          : 'text-white group-hover:text-sky-300'
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p
                      className={`text-xs font-medium ${
                        isInProgress
                          ? 'text-sky-400'
                          : isCompleted
                          ? 'text-emerald-400'
                          : 'text-slate-400'
                      }`}
                    >
                      {item.status}
                    </p>
                  </div>
                </div>

                {/* Time Display */}
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-slate-300 font-mono">
                    {item.time}
                  </span>
                  {isCompleted && <Check className="w-4 h-4 text-emerald-400" />}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Add Routine Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4 animate-fadeIn">
          <div className="bg-[#182033] rounded-3xl max-w-sm w-full p-6 border border-white/20 shadow-2xl space-y-4">
            <h3 className="text-base font-bold text-white">
              Add Routine Task
            </h3>

            <div className="space-y-3 text-xs">
              <div className="space-y-1">
                <label className="text-slate-300 font-semibold">Title</label>
                <input
                  type="text"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="e.g. 5-min Traffic Control"
                  className="w-full bg-[#0F172A] p-2.5 rounded-xl border border-white/10 text-white outline-none focus:border-sky-400"
                />
              </div>

              <div className="space-y-1">
                <label className="text-slate-300 font-semibold">Time</label>
                <input
                  type="text"
                  value={newTime}
                  onChange={(e) => setNewTime(e.target.value)}
                  placeholder="e.g. 9:30 p.m."
                  className="w-full bg-[#0F172A] p-2.5 rounded-xl border border-white/10 text-white outline-none focus:border-sky-400"
                />
              </div>
            </div>

            <div className="flex gap-2 pt-2">
              <button
                onClick={handleAddItem}
                className="flex-1 py-2.5 rounded-xl bg-[#0284C7] text-white font-bold text-xs shadow hover:bg-[#0369A1] transition"
              >
                Add Task
              </button>
              <button
                onClick={() => setShowAddModal(false)}
                className="px-4 py-2.5 rounded-xl bg-white/10 text-slate-300 text-xs hover:bg-white/20 transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
