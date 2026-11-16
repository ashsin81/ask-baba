import React, { useState } from 'react';
import { Sparkles, BookOpen, Clock, Check, HelpCircle, ArrowRight, Trash2 } from 'lucide-react';
import { sound } from '../../utils/audio';

export interface JournalReflectionEntry {
  id: string;
  createdAt: string;
  biggestNeed: string;
  focusArea: string;
  situation: string;
  oldSanskar: string;
  babaDirection: string;
  newSanskar: string;
  elevatedAction: string;
  experience: string;
}

export const JournalView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'new' | 'past'>('new');
  
  // Form fields
  const [biggestNeed, setBiggestNeed] = useState<string>('');
  const [focusArea, setFocusArea] = useState<string>('');
  const [situation, setSituation] = useState<string>('');
  const [oldSanskar, setOldSanskar] = useState<string>('');
  const [babaDirection, setBabaDirection] = useState<string>('');
  const [newSanskar, setNewSanskar] = useState<string>('');
  const [elevatedAction, setElevatedAction] = useState<string>('');
  const [experience, setExperience] = useState<string>('');

  const [savedReflections, setSavedReflections] = useState<JournalReflectionEntry[]>(() => {
    try {
      const stored = localStorage.getItem('royal_reflections');
      return stored ? JSON.parse(stored) : [
        {
          id: 'ref-demo-1',
          createdAt: new Date(Date.now() - 86400000).toLocaleDateString('hi-IN'),
          biggestNeed: 'क्रोध के समय 3 सेकंड का मौन',
          focusArea: 'मधुरता और निर्मानता',
          situation: 'कार्यस्थल पर बात मन के अनुसार नहीं हुई',
          oldSanskar: 'तुरंत तीखा उत्तर देना',
          babaDirection: 'देही-अभिमानी बनो। द्रष्टा बनकर परिस्थिति को देखो।',
          newSanskar: 'शांत स्वरूप राजाई स्थिति',
          elevatedAction: 'रुककर मधुरता से बात रखी',
          experience: 'मन बहुत हल्का और शक्तिशाली महसूस हुआ।'
        }
      ];
    } catch {
      return [];
    }
  });

  const handleSaveReflection = (e: React.FormEvent) => {
    e.preventDefault();
    if (!situation.trim() && !newSanskar.trim()) return;

    const newEntry: JournalReflectionEntry = {
      id: `ref-${Date.now()}`,
      createdAt: new Date().toLocaleDateString('hi-IN'),
      biggestNeed,
      focusArea,
      situation,
      oldSanskar,
      babaDirection,
      newSanskar,
      elevatedAction,
      experience,
    };

    const updated = [newEntry, ...savedReflections];
    setSavedReflections(updated);
    try {
      localStorage.setItem('royal_reflections', JSON.stringify(updated));
    } catch (err) {
      console.error(err);
    }

    sound.playTibetanBowl();
    sound.playChime();

    // Reset fields
    setBiggestNeed('');
    setFocusArea('');
    setSituation('');
    setOldSanskar('');
    setBabaDirection('');
    setNewSanskar('');
    setElevatedAction('');
    setExperience('');
    setActiveTab('past');
  };

  const handleDeleteReflection = (id: string) => {
    const updated = savedReflections.filter((r) => r.id !== id);
    setSavedReflections(updated);
    try {
      localStorage.setItem('royal_reflections', JSON.stringify(updated));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="space-y-4 pb-20 max-w-md mx-auto">
      {/* Header */}
      <div className="pt-1 space-y-1">
        <span className="text-[10px] uppercase font-serif tracking-[0.25em] text-emerald-700 dark:text-amber-400 font-bold block">
          MY PERSONAL PURUSHARTH MAP
        </span>
        <h1 className="text-2xl sm:text-3xl font-hindi font-bold text-slate-900 dark:text-amber-100 tracking-tight">
          मेरा पुरुषार्थ
        </h1>
        <p className="text-xs font-serif text-slate-500 dark:text-slate-400 italic">
          "A quiet space to notice, choose and grow."
        </p>
      </div>

      {/* Tabs */}
      <div className="grid grid-cols-2 p-1 rounded-2xl bg-slate-100 dark:bg-[#131C2E] border border-slate-200/80 dark:border-slate-800">
        <button
          onClick={() => {
            sound.playSoftClick();
            setActiveTab('new');
          }}
          className={`py-2 rounded-xl text-xs font-serif font-bold transition-all ${
            activeTab === 'new'
              ? 'bg-white dark:bg-amber-400 text-slate-900 dark:text-slate-950 shadow-xs'
              : 'text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200'
          }`}
        >
          New reflection
        </button>
        <button
          onClick={() => {
            sound.playSoftClick();
            setActiveTab('past');
          }}
          className={`py-2 rounded-xl text-xs font-serif font-bold transition-all flex items-center justify-center gap-1.5 ${
            activeTab === 'past'
              ? 'bg-white dark:bg-amber-400 text-slate-900 dark:text-slate-950 shadow-xs'
              : 'text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200'
          }`}
        >
          <span>Past reflections</span>
          <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-slate-200 dark:bg-slate-800 font-mono">
            {savedReflections.length}
          </span>
        </button>
      </div>

      {/* Tab 1: New Reflection Form */}
      {activeTab === 'new' && (
        <form onSubmit={handleSaveReflection} className="space-y-3">
          <div className="rounded-3xl bg-white dark:bg-[#131C2E] border border-slate-100 dark:border-slate-800 p-5 space-y-3 text-xs font-hindi shadow-xs">
            
            {/* 1. अभी मेरी सबसे बड़ी आवश्यकता */}
            <div className="space-y-1">
              <label className="text-[10px] font-mono tracking-wider uppercase text-emerald-700 dark:text-amber-400 font-bold block">
                अभी मेरी सबसे बड़ी आवश्यकता
              </label>
              <input
                type="text"
                value={biggestNeed}
                onChange={(e) => setBiggestNeed(e.target.value)}
                placeholder="उदा. क्रोध के समय 3 सेकंड का मौन..."
                className="w-full px-3 py-2.5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 dark:focus:border-amber-400"
              />
            </div>

            {/* 2. आज मुझे किस बात पर ध्यान देना है? */}
            <div className="space-y-1">
              <label className="text-[10px] font-mono tracking-wider uppercase text-emerald-700 dark:text-amber-400 font-bold block">
                आज मुझे किस बात पर ध्यान देना है?
              </label>
              <input
                type="text"
                value={focusArea}
                onChange={(e) => setFocusArea(e.target.value)}
                placeholder="उदा. मीठे बोल, साक्षी दृष्टि..."
                className="w-full px-3 py-2.5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 dark:focus:border-amber-400"
              />
            </div>

            {/* 3. स्थिति */}
            <div className="space-y-1">
              <label className="text-[10px] font-mono tracking-wider uppercase text-slate-700 dark:text-slate-300 font-bold block">
                स्थिति (क्या हुआ और मैंने क्या महसूस किया?)
              </label>
              <textarea
                value={situation}
                onChange={(e) => setSituation(e.target.value)}
                rows={2}
                placeholder="परिस्थिति का संक्षिप्त विवरण..."
                className="w-full px-3 py-2.5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 dark:focus:border-amber-400 resize-none"
              />
            </div>

            {/* 4. मेरा पुराना संस्कार */}
            <div className="space-y-1">
              <label className="text-[10px] font-mono tracking-wider uppercase text-rose-600 dark:text-rose-400 font-bold block">
                मेरा पुराना संस्कार (पुराना pattern)
              </label>
              <input
                type="text"
                value={oldSanskar}
                onChange={(e) => setOldSanskar(e.target.value)}
                placeholder="उदा. क्रोध करना, बहस में पड़ना..."
                className="w-full px-3 py-2.5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-rose-400"
              />
            </div>

            {/* 5. बाबा की दिशा */}
            <div className="space-y-1">
              <label className="text-[10px] font-mono tracking-wider uppercase text-amber-600 dark:text-amber-300 font-bold block">
                बाबा की दिशा (इस परिस्थिति में मेरी दिशा…)
              </label>
              <input
                type="text"
                value={babaDirection}
                onChange={(e) => setBabaDirection(e.target.value)}
                placeholder="उदा. देही-अभिमानी बनो, साक्षी भाव रखो..."
                className="w-full px-3 py-2.5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-amber-400"
              />
            </div>

            {/* 6. मेरा नया श्रेष्ठ संस्कार */}
            <div className="space-y-1">
              <label className="text-[10px] font-mono tracking-wider uppercase text-emerald-700 dark:text-emerald-400 font-bold block">
                मेरा नया श्रेष्ठ संस्कार (मैं कौन-सा संस्कार धारण करूँगा?)
              </label>
              <input
                type="text"
                value={newSanskar}
                onChange={(e) => setNewSanskar(e.target.value)}
                placeholder="उदा. शांत स्वरूप, मास्टर सर्वशक्तिमान..."
                className="w-full px-3 py-2.5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-emerald-400"
              />
            </div>

            {/* 7. मेरा एक श्रेष्ठ कर्म */}
            <div className="space-y-1">
              <label className="text-[10px] font-mono tracking-wider uppercase text-slate-700 dark:text-slate-300 font-bold block">
                मेरा एक श्रेष्ठ कर्म (अभी मेरा एक छोटा कदम…)
              </label>
              <input
                type="text"
                value={elevatedAction}
                onChange={(e) => setElevatedAction(e.target.value)}
                placeholder="उदा. 3 बार गहरी सांस लेकर मुस्कुराना..."
                className="w-full px-3 py-2.5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-emerald-400"
              />
            </div>

            {/* 8. आज का अनुभव */}
            <div className="space-y-1">
              <label className="text-[10px] font-mono tracking-wider uppercase text-slate-700 dark:text-slate-300 font-bold block">
                आज का अनुभव (इस अभ्यास से मैंने क्या अनुभव किया?)
              </label>
              <textarea
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                rows={2}
                placeholder="आंतरिक स्थिति और शांति का अनुभव..."
                className="w-full px-3 py-2.5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-emerald-400 resize-none"
              />
            </div>

          </div>

          {/* Baba se poochhein prompt */}
          <div className="p-3.5 rounded-3xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-500/30 space-y-1">
            <div className="flex items-center gap-1.5 text-[10px] font-mono text-purple-700 dark:text-purple-300 font-bold uppercase">
              <HelpCircle className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
              बाबा से पूछें…
            </div>
            <p className="text-xs font-hindi text-purple-900 dark:text-purple-200 italic font-medium">
              "बाबा, मेरे पुरुषार्थ की अगली मंज़िल क्या है?"
            </p>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-4 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-700 dark:bg-gradient-to-r dark:from-amber-500 dark:via-amber-600 dark:to-rose-600 text-white dark:text-slate-950 font-bold font-serif shadow-md shadow-emerald-600/20 dark:shadow-amber-500/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
          >
            <span>Save reflection</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <p className="text-center text-[10px] text-slate-400 dark:text-slate-500 italic pt-1">
            Your personal journey, one conscious choice at a time.
          </p>
        </form>
      )}

      {/* Tab 2: Past Reflections */}
      {activeTab === 'past' && (
        <div className="space-y-3">
          {savedReflections.length === 0 ? (
            <div className="p-8 text-center rounded-3xl bg-white dark:bg-[#131C2E] border border-slate-200 dark:border-slate-800 space-y-2">
              <BookOpen className="w-6 h-6 text-slate-400 mx-auto" />
              <p className="text-xs font-hindi text-slate-500 dark:text-slate-400">
                अभी कोई डायरी प्रविष्टि नहीं है। 'New reflection' से शुरुआत करें।
              </p>
            </div>
          ) : (
            savedReflections.map((r) => (
              <div
                key={r.id}
                className="rounded-3xl bg-white dark:bg-[#131C2E] border border-slate-100 dark:border-slate-800 p-4.5 space-y-2 text-xs font-hindi shadow-xs"
              >
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2">
                  <span className="text-[10px] font-mono text-emerald-700 dark:text-amber-400 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {r.createdAt}
                  </span>
                  <button
                    onClick={() => handleDeleteReflection(r.id)}
                    className="text-rose-500 hover:text-rose-700 p-1"
                    title="हटाएं"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>

                {r.biggestNeed && (
                  <div>
                    <span className="text-[9px] font-mono uppercase text-slate-400 dark:text-slate-500 block">
                      आवश्यकता:
                    </span>
                    <span className="text-slate-900 dark:text-slate-100 font-semibold">{r.biggestNeed}</span>
                  </div>
                )}

                {r.situation && (
                  <div>
                    <span className="text-[9px] font-mono uppercase text-slate-400 dark:text-slate-500 block">
                      स्थिति:
                    </span>
                    <span className="text-slate-700 dark:text-slate-300">{r.situation}</span>
                  </div>
                )}

                {r.babaDirection && (
                  <div className="p-2.5 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200/80 dark:border-amber-400/30">
                    <span className="text-[9px] font-mono uppercase text-amber-700 dark:text-amber-400 font-bold block">
                      बाबा की दिशा:
                    </span>
                    <span className="text-amber-900 dark:text-amber-100 italic">"{r.babaDirection}"</span>
                  </div>
                )}

                <div className="grid grid-cols-2 gap-2 pt-1">
                  {r.newSanskar && (
                    <div className="p-2.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-500/30">
                      <span className="text-[9px] font-mono uppercase text-emerald-700 dark:text-emerald-400 font-bold block">
                        नया संस्कार:
                      </span>
                      <span className="text-emerald-900 dark:text-emerald-200">{r.newSanskar}</span>
                    </div>
                  )}

                  {r.elevatedAction && (
                    <div className="p-2.5 rounded-2xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-500/30">
                      <span className="text-[9px] font-mono uppercase text-blue-700 dark:text-blue-400 font-bold block">
                        श्रेष्ठ कर्म:
                      </span>
                      <span className="text-blue-900 dark:text-blue-200">{r.elevatedAction}</span>
                    </div>
                  )}
                </div>

                {r.experience && (
                  <div className="pt-1 text-[11px] text-slate-500 dark:text-slate-400 italic">
                    अनुभव: {r.experience}
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};
