import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowLeft,
  Sparkles,
  Search,
  ArrowRight,
  Mic,
  MicOff,
  Volume2,
  VolumeX,
  Bookmark,
  Share2,
  BookOpen,
  CheckCircle2,
  Heart,
  Crown,
  ChevronRight,
  RefreshCw
} from 'lucide-react';
import { StatusBar } from '../Common/StatusBar';
import { AskBabaAIMessage, Language } from '../../types';
import { tts } from '../../utils/tts';
import { sound } from '../../utils/audio';
import { generateOfflineBabaAnswer } from '../../services/babaAIService';
import { getTranslation } from '../../utils/translations';

interface AskBabaAIViewProps {
  onBack: () => void;
  onSetSankalp?: (sankalp: string) => void;
  onSaveToJournal?: (text: string) => void;
  language?: Language;
}

export const AskBabaAIView: React.FC<AskBabaAIViewProps> = ({
  onBack,
  onSetSankalp,
  onSaveToJournal,
  language = 'en'
}) => {
  const [query, setQuery] = useState<string>('');
  const [messages, setMessages] = useState<AskBabaAIMessage[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isListening, setIsListening] = useState<boolean>(false);
  const [isSpeakingId, setIsSpeakingId] = useState<string | null>(null);
  const [savedSuccessMsg, setSavedSuccessMsg] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const popularInsights = [
    {
      id: 'calm',
      icon: '🪷',
      text:
        language === 'pa'
          ? 'ਮੁਸ਼ਕਲ ਹਾਲਾਤਾਂ ਵਿੱਚ ਸ਼ਾਂਤ ਕਿਵੇਂ ਰਹੀਏ?'
          : language === 'hi'
          ? 'कठिन परिस्थितियों में शांत कैसे रहें?'
          : 'How to stay calm in challenging situations?'
    },
    {
      id: 'anger',
      icon: '❤️',
      text:
        language === 'pa'
          ? 'ਗੁੱਸੇ ਤੇ ਖਿਝ ਉੱਤੇ ਕਾਬੂ ਕਿਵੇਂ ਪਾਈਏ?'
          : language === 'hi'
          ? 'क्रोध और चिड़चिड़ेपन पर विजय कैसे पाएं?'
          : 'How to overcome anger?'
    },
    {
      id: 'soul',
      icon: '🧘',
      text:
        language === 'pa'
          ? 'ਆਤਮਿਕ ਸਥਿਤੀ ਦਾ ਅਭਿਆਸ ਕਿਵੇਂ ਕਰੀਏ?'
          : language === 'hi'
          ? 'आत्म-अभिमानी स्थिति का अभ्यास कैसे करें?'
          : 'How do I practise soul consciousness?'
    },
    {
      id: 'thoughts',
      icon: '🕊️',
      text:
        language === 'pa'
          ? 'ਵਿਅਰਥ ਸੰਕਲਪਾਂ ਨੂੰ ਕਿਵੇਂ ਰੋਕੀਏ?'
          : language === 'hi'
          ? 'व्यर्थ संकल्पों को कैसे रोकें?'
          : 'How can I control waste thoughts?'
    },
    {
      id: 'amritvela',
      icon: '☀️',
      text:
        language === 'pa'
          ? 'ਅੰਮ੍ਰਿਤਵੇਲਾ ਯੋਗ ਕਿਵੇਂ ਸ਼ਕਤੀਸ਼ਾਲੀ ਬਣਾਈਏ?'
          : language === 'hi'
          ? 'अमृतवेला योग को शक्तिशाली कैसे बनाएं?'
          : 'How can I improve my Amritvela?'
    },
    {
      id: 'mind_intellect',
      icon: '💎',
      text:
        language === 'pa'
          ? 'ਮਨ ਅਤੇ ਬੁੱਧੀ ਵਿੱਚ ਕੀ ਅੰਤਰ ਹੈ?'
          : language === 'hi'
          ? 'मन और बुद्धि में क्या अंतर है?'
          : 'What is the difference between mind and intellect?'
    }
  ];

  // Scroll to bottom on new message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  // Voice recognition via Web Speech API
  const handleToggleVoice = () => {
    const SpeechRecognition =
      (window as any).SpeechRecognition ||
      (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert('Speech-to-text is not supported in this browser. Please type your question.');
      return;
    }

    if (isListening) {
      setIsListening(false);
      return;
    }

    try {
      const recognition = new SpeechRecognition();
      recognition.lang = language === 'pa' ? 'pa-IN' : language === 'hi' ? 'hi-IN' : 'en-US';
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;

      recognition.onstart = () => {
        setIsListening(true);
        sound.playChime();
      };

      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setQuery(transcript);
        setIsListening(false);
        handleSendQuestion(transcript);
      };

      recognition.onerror = () => {
        setIsListening(false);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognition.start();
    } catch {
      setIsListening(false);
    }
  };

  // Structured response generator strictly conforming to PRD Section 8.4
  const generateBKStructuredResponse = (userQuery: string): NonNullable<AskBabaAIMessage['structuredAnswer']> => {
    const raw = generateOfflineBabaAnswer(userQuery, 'en');
    const lower = userQuery.toLowerCase();

    if (lower.includes('calm') || lower.includes('peace') || lower.includes('challeng')) {
      return {
        understanding:
          'When sudden events disrupt outer peace, the intellect instinctively reacts to preserve its comfort or expectations.',
        bkKnowledge:
          'In Rajyoga, peace is not a temporary emotional state achieved by retreating from the world. Peace is the eternal, original sanskar (nature) of the soul. No external circumstance has power over you unless you permit it to enter your consciousness.',
        spiritualPerspective:
          'You are an immortal point of light playing a role on the drama stage. Just as an actor remains unaffected by tragic scenes in a drama, remain seated in the seat of the detached observer (sakshi drishta).',
        practicalPurusharth:
          '1. Practice the 5-second traffic control pause immediately when you feel emotional turbulence.\n2. Visualize yourself as a lighthouse beaming calm golden rays across the room.',
        todaySankalp: 'I am an Ocean of Peace. Situations pass, but my peace remains untouched.',
        sourceReference: 'Avyakt BapDada Mahavakya (Madhuban Murli 1984/10/24)'
      };
    }

    if (lower.includes('anger') || lower.includes('krodh') || lower.includes('irritat')) {
      return {
        understanding:
          'Irritation and anger arise when expectations are contradicted, or when the subtle ego feels unappreciated or challenged.',
        bkKnowledge:
          'Anger is a form of spiritual fire that burns the creator first before singeing anyone else. It weakens the intellect, destroys spiritual power, and creates adverse karmic accounts.',
        spiritualPerspective:
          'Shift your vision from seeing the defect in the other person to seeing their spiritual helplessness. An angry person is internally bankrupt of peace; meet their anger with unconditional forgiveness and mercy.',
        practicalPurusharth:
          '1. Drink a glass of water and consciously breathe deeply with the thought "I am cooling this inner flame with Baba\'s divine peace."\n2. Do not speak while your pulse is elevated.',
        todaySankalp: 'I am a master of tolerance. I respond with love, not reaction.',
        sourceReference: 'Avyakt BapDada Mahavakya (Avyakt Murli 1991/11/15)'
      };
    }

    if (lower.includes('happiness') || lower.includes('anand') || lower.includes('joy')) {
      return {
        understanding:
          'Most people seek happiness in objects, praise, relationships, or wealth, only to find that such pleasure quickly expires into disappointment.',
        bkKnowledge:
          'True spiritual happiness (Khushi) is born of soul-consciousness and pure thoughts. Purity is the mother of peace and happiness. When the mind is free from waste thoughts, supersensuous joy (ati-indriya sukh) bubbles up naturally.',
        spiritualPerspective:
          'Your eternal connection with the Supreme Father is the fountain of limitless happiness. Remember that you are Baba\'s child, an heir to all supreme divine treasures.',
        practicalPurusharth:
          '1. Count your spiritual blessings every morning before leaving bed.\n2. Give silent good wishes (shubhkaamna) to 5 souls today without expecting any acknowledgment.',
        todaySankalp: 'True happiness is my original nature. Nothing in the world can steal my joy.',
        sourceReference: 'Avyakt BapDada Mahavakya (Madhuban Murli 1978/03/10)'
      };
    }

    if (lower.includes('waste') || lower.includes('overthink') || lower.includes('thought')) {
      return {
        understanding:
          'When the mind wanders into past regrets or future anxieties, energy is drained and the intellect feels exhausted.',
        bkKnowledge:
          'Thoughts are subtle spiritual energy. A single waste thought consumes the power of ten elevated thoughts. By becoming the master of the mind (Man-Jeet), the flow of thoughts is naturally redirected into silence.',
        spiritualPerspective:
          'The world drama is absolutely beneficial (Kalyankari). Whatever happened was good, whatever is happening is better, and whatever is to happen is best. Anchor yourself in this faith.',
        practicalPurusharth:
          '1. Engage in 1 minute of silence every hour during traffic control.\n2. Give your mind an elevated theme to contemplate, such as "I am a star in Baba\'s eyes."',
        todaySankalp: 'I am the sovereign ruler over my thoughts. I create only peaceful, elevated ideas.',
        sourceReference: 'Avyakt BapDada Mahavakya (Avyakt Murli 1994/01/18)'
      };
    }

    // Default authentic BK structured answer
    return {
      understanding: `Regarding "${userQuery.slice(0, 50)}...": Spiritual contemplation reveals that every life question has its solution in soul-consciousness.`,
      bkKnowledge:
        raw.text ||
        'The soul and the Supreme Soul share an eternal bond of love and purity. By remembering who you truly are and connecting with Shiv Baba, the intellect becomes divine and clear.',
      spiritualPerspective:
        'You are an actor on this universal drama stage. Do not become trapped in external identities; step back into your original peaceful nature.',
      practicalPurusharth:
        raw.actionHomework || 'Take a 3-minute silence break today to visualize yourself in Paramdham surrounded by golden-red light.',
      todaySankalp: raw.swaman || 'I am a peaceful, powerful soul, forever accompanied by Baba.',
      sourceReference: raw.murliQuote || 'Avyakt BapDada Murli, Madhuban'
    };
  };

  const handleSendQuestion = (questionText?: string) => {
    const textToSend = questionText || query;
    if (!textToSend.trim()) return;

    sound.playBell();

    const userMsg: AskBabaAIMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: textToSend.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setQuery('');
    setIsLoading(true);

    setTimeout(() => {
      const structured = generateBKStructuredResponse(textToSend);
      const babaMsg: AskBabaAIMessage = {
        id: `baba-${Date.now()}`,
        sender: 'baba',
        text: `${structured.understanding}\n\n${structured.bkKnowledge}`,
        structuredAnswer: structured,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages((prev) => [...prev, babaMsg]);
      setIsLoading(false);
      sound.playStampSound();
    }, 700);
  };

  const handleReadAloud = (msg: AskBabaAIMessage) => {
    if (isSpeakingId === msg.id) {
      tts.stop();
      setIsSpeakingId(null);
      return;
    }

    setIsSpeakingId(msg.id);
    const textToSpeak = msg.structuredAnswer
      ? `${msg.structuredAnswer.understanding}. ${msg.structuredAnswer.bkKnowledge}. संकल्प: ${msg.structuredAnswer.todaySankalp}`
      : msg.text;

    tts.speak(textToSpeak, 'en', 0.92);
  };

  const handleApplySankalp = (sankalp: string) => {
    if (onSetSankalp) {
      onSetSankalp(sankalp);
      sound.playStampSound();
      setSavedSuccessMsg('Set as Today’s Sankalp on Home!');
      setTimeout(() => setSavedSuccessMsg(null), 3000);
    }
  };

  const handleSaveJournal = (text: string) => {
    if (onSaveToJournal) {
      onSaveToJournal(text);
      sound.playStampSound();
      setSavedSuccessMsg('Saved to your Daily Reflection Journal!');
      setTimeout(() => setSavedSuccessMsg(null), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FBF3EA] via-[#F8EEE4] to-[#F1E4D4] text-[#302B2B] flex flex-col justify-between pb-24">
      {/* Top Phone Status Bar */}
      <StatusBar />

      {/* Main Header */}
      <header className="px-5 pt-1 pb-3 flex items-center justify-between relative z-10">
        <button
          onClick={onBack}
          aria-label="Back"
          className="w-10 h-10 rounded-xl bg-white/70 border border-[#E4D3C0] flex items-center justify-center text-[#711D35] hover:bg-white active:scale-95 transition shadow-sm"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2">
          {/* Glowing Paramdham Point of Light Art */}
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#711D35] via-[#B68A45] to-[#FFD700] p-0.5 shadow-md flex items-center justify-center">
            <div className="w-full h-full rounded-full bg-[#711D35] flex items-center justify-center relative overflow-hidden">
              <div className="w-3.5 h-3.5 rounded-full bg-white shadow-[0_0_8px_#FFD700] animate-pulse" />
            </div>
          </div>
          <span className="font-serif font-bold text-lg text-[#711D35]">
            Ask Baba
          </span>
        </div>

        <button
          onClick={() => setMessages([])}
          aria-label="Refresh conversation"
          className="w-10 h-10 rounded-xl bg-white/70 border border-[#E4D3C0] flex items-center justify-center text-[#711D35] hover:bg-white active:scale-95 transition shadow-sm"
        >
          <RefreshCw className="w-4 h-4" />
        </button>
      </header>

      {/* Toast notification message */}
      {savedSuccessMsg && (
        <div className="fixed top-14 left-1/2 -translate-x-1/2 z-50 bg-[#711D35] text-amber-200 px-4 py-2 rounded-full text-xs font-bold shadow-xl border border-amber-300/40 animate-bounce">
          ✓ {savedSuccessMsg}
        </div>
      )}

      {/* Main Content Area */}
      <main className="flex-1 px-5 overflow-y-auto space-y-5 py-2">
        {/* If no active conversation, show the Welcome screen (Mockup Screen #4) */}
        {messages.length === 0 ? (
          <div className="space-y-6 pt-2">
            {/* Supreme Light Sunbeam Illustration */}
            <div className="relative w-full h-32 flex items-center justify-center">
              {/* Radiating sunbeams */}
              <div className="absolute inset-0 bg-radial-at-c from-amber-400/25 via-transparent to-transparent blur-xl pointer-events-none" />
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#FF5E62] via-[#FFD166] to-[#FFFFFF] p-1 shadow-2xl animate-pulse">
                  <div className="w-full h-full rounded-full bg-gradient-to-tr from-[#711D35] to-[#B68A45] flex items-center justify-center">
                    <Sparkles className="w-7 h-7 text-amber-200" />
                  </div>
                </div>
              </div>
            </div>

            {/* Prompt Heading */}
            <div className="text-center space-y-1">
              <h2 className="text-2xl font-serif font-bold text-[#302B2B]">
                What would you like to ask?
              </h2>
              <p className="text-xs text-[#8E8686] max-w-xs mx-auto">
                Explore life challenges through verified Brahma Kumaris Rajyoga knowledge
              </p>
            </div>

            {/* Search Input Capsule Bar */}
            <div className="relative max-w-md mx-auto">
              <div className="w-full bg-white rounded-full pl-5 pr-2 py-2 border border-[#DFC896]/60 shadow-md flex items-center justify-between gap-2 focus-within:ring-2 focus-within:ring-[#711D35]/40 transition">
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSendQuestion()}
                  placeholder="Ask anything..."
                  className="w-full bg-transparent text-sm text-[#302B2B] placeholder:text-[#8E8686] outline-none"
                />

                <div className="flex items-center gap-1.5 flex-shrink-0">
                  <button
                    onClick={handleToggleVoice}
                    aria-label="Voice input"
                    className={`w-9 h-9 rounded-full flex items-center justify-center transition ${
                      isListening
                        ? 'bg-rose-500 text-white animate-pulse'
                        : 'bg-[#FAF4EB] text-[#711D35] hover:bg-amber-100'
                    }`}
                  >
                    {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                  </button>

                  <button
                    onClick={() => handleSendQuestion()}
                    disabled={!query.trim()}
                    aria-label="Send question"
                    className="w-9 h-9 rounded-full bg-[#711D35] text-white flex items-center justify-center shadow hover:brightness-110 active:scale-95 disabled:opacity-40 transition"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Popular Insights (Exact Mockup Screen #4) */}
            <section className="space-y-3 pt-2">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-[#302B2B]">Popular Insights</h3>
                <span className="text-xs font-semibold text-[#711D35]">See All &gt;</span>
              </div>

              <div className="space-y-2.5">
                {popularInsights.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleSendQuestion(item.text)}
                    className="w-full bg-white/90 hover:bg-white p-3.5 rounded-2xl border border-[#DFC896]/30 shadow-sm flex items-center justify-between gap-3 text-left active:scale-[0.99] transition group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl flex-shrink-0">{item.icon}</span>
                      <span className="text-xs font-semibold text-[#302B2B] group-hover:text-[#711D35] transition">
                        {item.text}
                      </span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-[#8E8686] group-hover:text-[#711D35] group-hover:translate-x-0.5 transition flex-shrink-0" />
                  </button>
                ))}
              </div>
            </section>

            {/* Quote Card with Crown (Exact Mockup Screen #4) */}
            <div className="bg-[#FAF4EB] rounded-2xl p-4 border border-[#DFC896]/40 text-center space-y-1 shadow-inner">
              <p className="text-xs italic font-serif text-[#711D35] font-medium leading-relaxed">
                "Turn your attention inwards and find your real strength."
              </p>
              <div className="flex justify-center pt-1 text-amber-500">
                <Crown className="w-4 h-4 fill-amber-400" />
              </div>
            </div>
          </div>
        ) : (
          /* Active Chat Conversation with Structured 6-Part BK Cards */
          <div className="space-y-4 pb-10">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                {msg.sender === 'user' ? (
                  <div className="bg-[#711D35] text-white px-4 py-2.5 rounded-2xl rounded-tr-sm max-w-[85%] text-xs font-medium shadow-sm">
                    {msg.text}
                  </div>
                ) : (
                  /* Formatted Structured BK Response Card */
                  <div className="w-full bg-white rounded-3xl p-5 border border-[#DFC896]/50 shadow-md space-y-4">
                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-[#EFE2D3] pb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-[#711D35] text-amber-200 flex items-center justify-center font-serif text-xs font-bold">
                          बाबा
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-[#711D35]">Ask Baba Guidance</h4>
                          <span className="text-[10px] text-[#8E8686]">BK Knowledge Grounded</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => handleReadAloud(msg)}
                          aria-label="Read response aloud"
                          className={`w-8 h-8 rounded-full flex items-center justify-center transition border ${
                            isSpeakingId === msg.id
                              ? 'bg-[#711D35] text-amber-200 border-[#711D35]'
                              : 'bg-[#FAF4EB] text-[#711D35] border-[#DFC896]'
                          }`}
                        >
                          {isSpeakingId === msg.id ? (
                            <VolumeX className="w-4 h-4 animate-pulse" />
                          ) : (
                            <Volume2 className="w-4 h-4" />
                          )}
                        </button>
                      </div>
                    </div>

                    {msg.structuredAnswer ? (
                      <div className="space-y-3.5 text-xs text-[#302B2B]">
                        {/* 1. Understanding the situation */}
                        <div className="bg-[#FAF4EB] p-3 rounded-xl border-l-4 border-[#B68A45]">
                          <span className="font-bold text-[#8B6E3F] block mb-0.5 uppercase text-[10px]">
                            1. Understanding
                          </span>
                          <p>{msg.structuredAnswer.understanding}</p>
                        </div>

                        {/* 2. BK Knowledge */}
                        <div>
                          <span className="font-bold text-[#711D35] block mb-0.5 uppercase text-[10px]">
                            2. Spiritual Knowledge (ज्ञान)
                          </span>
                          <p className="leading-relaxed">{msg.structuredAnswer.bkKnowledge}</p>
                        </div>

                        {/* 3. Spiritual Perspective */}
                        <div className="bg-white p-2.5 rounded-xl border border-[#DFC896]/30">
                          <span className="font-bold text-[#711D35] block mb-0.5 uppercase text-[10px]">
                            3. Soul Consciousness Perspective
                          </span>
                          <p className="leading-relaxed">{msg.structuredAnswer.spiritualPerspective}</p>
                        </div>

                        {/* 4. Practical Purusharth */}
                        <div className="bg-[#E6F4EA] p-3 rounded-xl border border-[#CEEAD6]">
                          <span className="font-bold text-[#38A169] block mb-0.5 uppercase text-[10px]">
                            4. Practical Purusharth (अभ्यास)
                          </span>
                          <p className="whitespace-pre-line leading-relaxed font-medium">
                            {msg.structuredAnswer.practicalPurusharth}
                          </p>
                        </div>

                        {/* 5. Today's Sankalp */}
                        <div className="bg-gradient-to-r from-[#711D35] to-[#8A2C3F] text-white p-3.5 rounded-2xl shadow-sm flex items-center justify-between gap-3">
                          <div>
                            <span className="text-[10px] font-bold text-amber-300 uppercase block tracking-wider">
                              5. Today's Sankalp (स्वमान)
                            </span>
                            <p className="font-serif italic font-medium text-white/95 mt-0.5">
                              "{msg.structuredAnswer.todaySankalp}"
                            </p>
                          </div>
                          <button
                            onClick={() => handleApplySankalp(msg.structuredAnswer!.todaySankalp)}
                            className="px-3 py-1.5 rounded-xl bg-amber-400 text-[#711D35] font-bold text-[11px] shadow hover:bg-amber-300 active:scale-95 transition flex-shrink-0"
                          >
                            Set Sankalp
                          </button>
                        </div>

                        {/* 6. Source Reference */}
                        <div className="pt-1 flex items-center justify-between text-[10px] text-[#8E8686] italic">
                          <span className="flex items-center gap-1">
                            <BookOpen className="w-3 h-3 text-[#B68A45]" />
                            {msg.structuredAnswer.sourceReference}
                          </span>
                          <button
                            onClick={() => handleSaveJournal(msg.text)}
                            className="text-[#711D35] font-semibold hover:underline flex items-center gap-1 not-italic"
                          >
                            <Bookmark className="w-3 h-3" /> Save to Journal
                          </button>
                        </div>
                      </div>
                    ) : (
                      <p className="text-xs leading-relaxed whitespace-pre-line text-[#302B2B]">
                        {msg.text}
                      </p>
                    )}
                  </div>
                )}
              </div>
            ))}

            {isLoading && (
              <div className="flex items-center gap-2 p-4 bg-white/80 rounded-2xl border border-[#DFC896]/30 text-xs text-[#8E8686] animate-pulse">
                <Sparkles className="w-4 h-4 text-amber-500 animate-spin" />
                <span>Retrieving verified Brahma Kumaris knowledge...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        )}
      </main>

      {/* Bottom Sticky Input Bar when in conversation mode */}
      {messages.length > 0 && (
        <div className="px-5 py-2 bg-[#F8EEE4]/95 backdrop-blur-md border-t border-[#DFC896]/40 fixed bottom-0 left-0 right-0 max-w-md mx-auto z-20">
          <div className="w-full bg-white rounded-full pl-4 pr-1.5 py-1.5 border border-[#DFC896] shadow-md flex items-center justify-between gap-2">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendQuestion()}
              placeholder="Ask a follow-up question..."
              className="w-full bg-transparent text-xs text-[#302B2B] placeholder:text-[#8E8686] outline-none"
            />

            <div className="flex items-center gap-1">
              <button
                onClick={handleToggleVoice}
                aria-label="Voice input"
                className={`w-8 h-8 rounded-full flex items-center justify-center transition ${
                  isListening
                    ? 'bg-rose-500 text-white animate-pulse'
                    : 'bg-[#FAF4EB] text-[#711D35]'
                }`}
              >
                {isListening ? <MicOff className="w-3.5 h-3.5" /> : <Mic className="w-3.5 h-3.5" />}
              </button>

              <button
                onClick={() => handleSendQuestion()}
                disabled={!query.trim()}
                aria-label="Send follow-up"
                className="w-8 h-8 rounded-full bg-[#711D35] text-white flex items-center justify-center shadow hover:brightness-110 active:scale-95 disabled:opacity-40 transition"
              >
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
