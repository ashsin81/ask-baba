import { Language } from '../types';

export interface Translations {
  appName: string;
  tagline: string;
  nav: {
    home: string;
    journey: string;
    meditate: string;
    discover: string;
    you: string;
  };
  greetings: {
    morning: string;
    afternoon: string;
    evening: string;
    night: string;
    welcomeSub: string;
  };
  todayPurusharth: {
    title: string;
    theme: string;
    thoughtLabel: string;
    practiceLabel: string;
    sankalpLabel: string;
    exploreBtn: string;
    speakSankalp: string;
    murliRef: string;
  };
  quickActions: {
    title: string;
    startMeditation: string;
    trackMyDay: string;
    askBaba: string;
    dailyReflection: string;
  };
  progress: {
    todayTitle: string;
    completed: string;
    of: string;
    practices: string;
    customiseRoutine: string;
  };
  practices: {
    amritvela: string;
    amritvelaDesc: string;
    morningMeditation: string;
    morningMeditationDesc: string;
    swaman: string;
    swamanDesc: string;
    murliStudy: string;
    murliStudyDesc: string;
    trafficControl: string;
    trafficControlDesc: string;
    manmanabhav: string;
    manmanabhavDesc: string;
    eveningMeditation: string;
    eveningMeditationDesc: string;
    nightReflection: string;
    nightReflectionDesc: string;
  };
  sanskar: {
    title: string;
    subtitle: string;
    categories: {
      anger: string;
      ego: string;
      attachment: string;
      jealousy: string;
      expectations: string;
      worry: string;
      fear: string;
      comparison: string;
      impatience: string;
      laziness: string;
      wasteThoughts: string;
      negativeThinking: string;
    };
    status: {
      notExperienced: string;
      managed: string;
      reactedRealised: string;
      needPractice: string;
    };
  };
  qualities: {
    title: string;
    subtitle: string;
    peace: string;
    love: string;
    happiness: string;
    purity: string;
    bliss: string;
    knowledge: string;
    power: string;
  };
  meditate: {
    heroTitle: string;
    heroSubtitle: string;
    silentTimer: string;
    guidedLibrary: string;
    startTimer: string;
    pauseTimer: string;
    resetTimer: string;
    ambientSound: string;
    minutes: string;
    favorite: string;
  };
  discover: {
    title: string;
    searchPlaceholder: string;
    allLessons: string;
    dailyWisdom: string;
    readTime: string;
    startLesson: string;
  };
  askBabaAI: {
    title: string;
    subtitle: string;
    welcomeMsg: string;
    suggestedTitle: string;
    inputPlaceholder: string;
    listening: string;
    send: string;
    setAsSankalp: string;
    saveToJournal: string;
    sourcesCitations: string;
    safetyDisclaimer: string;
  };
  reflection: {
    title: string;
    howWasDay: string;
    bestThing: string;
    lostStability: string;
    qualityPracticed: string;
    learnedAboutSelf: string;
    improveTomorrow: string;
    nextDaySankalp: string;
    saveEntry: string;
    history: string;
  };
  profile: {
    title: string;
    experienceLevel: string;
    spiritualGoals: string;
    meditationMinutes: string;
    streakDays: string;
    achievements: string;
    language: string;
    theme: string;
    notifications: string;
    exportData: string;
    resetData: string;
  };
  onboarding: {
    welcomeTitle: string;
    welcomeSubtitle: string;
    beginBtn: string;
    nameLabel: string;
    languageSelect: string;
    experienceTitle: string;
    goalsTitle: string;
    routineTitle: string;
    finishBtn: string;
  };
}

export const translations: Record<'en' | 'hi' | 'pa', Translations> = {
  en: {
    appName: 'Ask Baba',
    tagline: 'Track · Reflect · Transform',
    nav: {
      home: 'Home',
      journey: 'Journey',
      meditate: 'Meditate',
      discover: 'Discover',
      you: 'You'
    },
    greetings: {
      morning: 'Good Morning',
      afternoon: 'Good Afternoon',
      evening: 'Good Evening',
      night: 'Peaceful Night',
      welcomeSub: 'Every day is an opportunity to experience your original qualities.'
    },
    todayPurusharth: {
      title: "Today's Purusharth",
      theme: 'Become the Master of Your Mind',
      thoughtLabel: 'Thought of the Day',
      practiceLabel: 'Daily Practice',
      sankalpLabel: "Today's Sankalp",
      exploreBtn: 'Explore Topic',
      speakSankalp: 'Listen to Sankalp',
      murliRef: 'Avyakt BapDada Mahavakya (Madhuban)'
    },
    quickActions: {
      title: 'Daily Quick Actions',
      startMeditation: 'Start Meditation',
      trackMyDay: 'Track My Day',
      askBaba: 'Ask Baba',
      dailyReflection: 'Daily Reflection'
    },
    progress: {
      todayTitle: "Today's Progress",
      completed: 'Completed',
      of: 'of',
      practices: 'practices',
      customiseRoutine: 'Customise Daily Routine'
    },
    practices: {
      amritvela: 'Amritvela Meditation',
      amritvelaDesc: 'Early morning nectar hour connection with Supreme Soul (3:30 - 4:45 AM)',
      morningMeditation: 'Morning Rajyoga',
      morningMeditationDesc: 'Anchor the mind in soul consciousness and peace',
      swaman: 'Swaman Practice',
      swamanDesc: 'Affirm original divine identity throughout the day',
      murliStudy: 'Daily Murli Study',
      murliStudyDesc: 'Imbibe pure spiritual teachings and blessings',
      trafficControl: 'Traffic Control Pause',
      trafficControlDesc: 'Pause thoughts for 2-3 minutes at hourly intervals',
      manmanabhav: 'Manmanabhav Practice',
      manmanabhavDesc: 'Focus intellect solely on one Supreme Father',
      eveningMeditation: 'Evening Meditation (Numa Sham)',
      eveningMeditationDesc: 'Twilight silence and power recharge (6:30 - 7:30 PM)',
      nightReflection: 'Night Self-Observation',
      nightReflectionDesc: 'Review thoughts, words, and deeds before rest'
    },
    sanskar: {
      title: 'Sanskar Observation',
      subtitle: 'Observe, accept, and transform inner patterns with divine awareness',
      categories: {
        anger: 'Anger & Irritation',
        ego: 'Ego & Superiority',
        attachment: 'Attachment & Dependency',
        jealousy: 'Jealousy & Insecurity',
        expectations: 'Expectations from Others',
        worry: 'Worry & Anxiety',
        fear: 'Fear & Hesitation',
        comparison: 'Comparison & Competition',
        impatience: 'Impatience & Restlessness',
        laziness: 'Laziness & Procrastination',
        wasteThoughts: 'Waste & Idle Thoughts',
        negativeThinking: 'Negative & Doubtful Thoughts'
      },
      status: {
        notExperienced: 'Not experienced today',
        managed: 'Experienced but managed',
        reactedRealised: 'Reacted and later realised',
        needPractice: 'Need more practice'
      }
    },
    qualities: {
      title: 'Original Qualities of the Soul',
      subtitle: 'Consciously remember and radiate the 7 innate treasures of the soul',
      peace: 'Peace (Shanti)',
      love: 'Love (Prem)',
      happiness: 'Happiness (Khushi)',
      purity: 'Purity (Pavitrata)',
      bliss: 'Bliss (Anand)',
      knowledge: 'Knowledge (Gyan)',
      power: 'Power (Shakti)'
    },
    meditate: {
      heroTitle: 'Return to your inner peace',
      heroSubtitle: 'Rajyoga Meditation Studio · Experience silence and Supreme connection',
      silentTimer: 'Silent Timer',
      guidedLibrary: 'Guided Sessions',
      startTimer: 'Start Meditation',
      pauseTimer: 'Pause',
      resetTimer: 'Reset',
      ambientSound: 'Ambient Drone / Soundscape',
      minutes: 'minutes',
      favorite: 'Add to Favorites'
    },
    discover: {
      title: 'Spiritual Knowledge Library',
      searchPlaceholder: 'Search BK knowledge, topics, lessons...',
      allLessons: 'All Lessons',
      dailyWisdom: 'Daily Wisdom',
      readTime: 'min read',
      startLesson: 'Read Lesson'
    },
    askBabaAI: {
      title: 'Ask Baba',
      subtitle: "What's on your mind today?",
      welcomeMsg: 'Ask questions, explore spiritual knowledge and discover practical ways to apply it in your everyday life.',
      suggestedTitle: 'Suggested Inquiries',
      inputPlaceholder: 'Ask Baba anything about spiritual life, thoughts, sanskars...',
      listening: 'Listening to your voice...',
      send: 'Ask',
      setAsSankalp: "Set as Today's Sankalp",
      saveToJournal: 'Save to Reflection Journal',
      sourcesCitations: 'Verified BK Sources & Murli Citation',
      safetyDisclaimer: 'Ask Baba is an AI spiritual study companion grounded in verified Brahma Kumaris knowledge. It is not an alternative to medical or emergency services.'
    },
    reflection: {
      title: 'Daily Spiritual Journal',
      howWasDay: 'How was your inner state today?',
      bestThing: 'What was the most elevated thing about today?',
      lostStability: 'Where did I lose my inner stability?',
      qualityPracticed: 'Which spiritual quality did I consciously practise?',
      learnedAboutSelf: 'What did I learn about my sanskars and mind today?',
      improveTomorrow: 'What would I like to improve tomorrow?',
      nextDaySankalp: 'What is my elevated Sankalp for tomorrow?',
      saveEntry: 'Save Reflection Entry',
      history: 'Journal History'
    },
    profile: {
      title: 'Your Spiritual Space',
      experienceLevel: 'Spiritual Experience Level',
      spiritualGoals: 'Active Spiritual Goals',
      meditationMinutes: 'Total Meditation Minutes',
      streakDays: 'Days Practice Streak',
      achievements: 'Spiritual Milestones & Badges',
      language: 'App Language / भाषा / ਭਾਸ਼ਾ',
      theme: 'Visual Appearance (Ivory / Midnight)',
      notifications: 'Daily Spiritual Reminders',
      exportData: 'Export Personal Journey (JSON)',
      resetData: 'Reset All Data'
    },
    onboarding: {
      welcomeTitle: 'Welcome to Ask Baba',
      welcomeSubtitle: 'Your journey towards a peaceful, powerful and elevated self begins here.',
      beginBtn: 'Begin Your Journey',
      nameLabel: 'Your Spiritual Name / Nickname',
      languageSelect: 'Choose Your Preferred Language',
      experienceTitle: 'What is your background in meditation?',
      goalsTitle: 'Select your spiritual focus areas',
      routineTitle: 'Do you practice a daily spiritual routine?',
      finishBtn: 'Enter My Sanctuary'
    }
  },

  hi: {
    appName: 'आस्क बाबा (Ask Baba)',
    tagline: 'Track · Reflect · Transform | निरीक्षण · चिंतन · परिवर्तन',
    nav: {
      home: 'होम',
      journey: 'यात्रा',
      meditate: 'ध्यान',
      discover: 'ज्ञान',
      you: 'स्वयं'
    },
    greetings: {
      morning: 'सुप्रभात, ॐ शान्ति',
      afternoon: 'शुभ दोपहर',
      evening: 'शुभ संध्या (नुमाशाम)',
      night: 'शुभ रात्रि (शांति वेला)',
      welcomeSub: 'हर नया दिन अपनी मूल आत्मिक शक्तियों को अनुभव करने का ईश्वरीय अवसर है।'
    },
    todayPurusharth: {
      title: 'आज का पुरुषार्थ',
      theme: 'स्वराज्य अधिकारी: मन के मालिक बनो',
      thoughtLabel: 'आज का शुभ विचार',
      practiceLabel: 'दैनिक अभ्यास',
      sankalpLabel: 'आज का श्रेष्ठ संकल्प',
      exploreBtn: 'ज्ञान विस्तार पढ़ें',
      speakSankalp: 'संकल्प श्रवण करें',
      murliRef: 'अव्यक्त बापदादा महावाक्य (मधुबन)'
    },
    quickActions: {
      title: 'दैनिक त्वरित क्रियाएं',
      startMeditation: 'राजयोग ध्यान शुरू करें',
      trackMyDay: 'दिनचर्या चार्ट भरें',
      askBaba: 'बाबा से पूछें',
      dailyReflection: 'आत्म-निरीक्षण पोतामेल'
    },
    progress: {
      todayTitle: 'आज का पुरुषार्थ स्तर',
      completed: 'पूर्ण',
      of: 'कुल',
      practices: 'नियम',
      customiseRoutine: 'दिनचर्या नियम बदलें'
    },
    practices: {
      amritvela: 'अमृतवेला योग (3:30 - 4:45 AM)',
      amritvelaDesc: 'वरदानों के समय शिवबाबा से स्नेह व शक्तियों का मिलन',
      morningMeditation: 'प्रातः राजयोग अभ्यास',
      morningMeditationDesc: 'स्वयं को ज्योतिर्बिन्दु आत्मा अनुभव कर शांत स्वरूप में स्थित होना',
      swaman: 'स्वमान अभ्यास',
      swamanDesc: 'दिनभर श्रेष्ठ स्वमान का स्मृति तिलक लगाना',
      murliStudy: 'दैनिक ईश्वरीय महावाक्य (मुरली)',
      murliStudyDesc: 'मुरली के ज्ञान रत्नों का मनन-चिंतन व धारणा',
      trafficControl: 'ट्रैफिक कंट्रोल (मन पर विराम)',
      trafficControlDesc: 'हर घंटे 2-3 मिनट रुककर साक्षी दृष्टा बन आत्मा को देखना',
      manmanabhav: 'मन्मनाभव अभ्यास',
      manmanabhavDesc: 'बुद्धि को केवल एक परमपिता परमात्मा में एकाग्र करना',
      eveningMeditation: 'नुमाशाम योग (6:30 - 7:30 PM)',
      eveningMeditationDesc: 'गोधूलि वेला में परमधाम की शक्तियों से स्वयं को चार्ज करना',
      nightReflection: 'रात्रि पोतामेल (आत्म-निरीक्षण)',
      nightReflectionDesc: 'दिनभर के कर्मों व संकल्पों की जांच कर बाबा को सौंपना'
    },
    sanskar: {
      title: 'संस्कार अवलोकन (Sanskar Observation)',
      subtitle: 'साक्षी भाव से पुरानी प्रवृत्तियों को देखें और ईश्वरीय ज्ञान से रूपांतरित करें',
      categories: {
        anger: 'क्रोध व झुंझलाहट',
        ego: 'अभिमान व मान-शान की इच्छा',
        attachment: 'मोह व किसी पर निर्भरता',
        jealousy: 'ईर्ष्या व असंतोष',
        expectations: 'दूसरों से अपेक्षाएं',
        worry: 'चिंता व व्यर्थ फिक्र',
        fear: 'भय व संकोच',
        comparison: 'तुलना व होड़',
        impatience: 'अधीरज व उतावलापन',
        laziness: 'आलस्य व अलबेलापन',
        wasteThoughts: 'व्यर्थ व अनियंत्रित संकल्प',
        negativeThinking: 'नकारात्मक व संशययुक्त विचार'
      },
      status: {
        notExperienced: 'आज अनुभव नहीं हुआ',
        managed: 'सामने आया पर संभाल लिया',
        reactedRealised: 'प्रभाव में आए फिर महसूस हुआ',
        needPractice: 'अधिक अभ्यास की आवश्यकता है'
      }
    },
    qualities: {
      title: 'आत्मा के 7 मूल गुण',
      subtitle: 'आत्मा के मूल संस्कारों का निरंतर स्मरण और जीवन में प्रकटीकरण',
      peace: 'शांति (Peace)',
      love: 'प्रेम (Love)',
      happiness: 'खुशी व आनंद (Happiness)',
      purity: 'पवित्रता (Purity)',
      bliss: 'अतींद्रिय सुख (Bliss)',
      knowledge: 'ज्ञान प्रकाश (Knowledge)',
      power: 'आत्मिक शक्ति (Power)'
    },
    meditate: {
      heroTitle: 'अपनी आंतरिक शांति में लौटें',
      heroSubtitle: 'राजयोग ध्यान कक्ष · परम ज्योति शिवबाबा के सानिध्य का अलौकिक अनुभव',
      silentTimer: 'मौन योग घड़ी',
      guidedLibrary: 'मार्गदर्शित ध्यान',
      startTimer: 'योग प्रारंभ करें',
      pauseTimer: 'विराम',
      resetTimer: 'पुनः सेट करें',
      ambientSound: 'परमधाम नाद / ध्वनियाँ',
      minutes: 'मिनट',
      favorite: 'पसंदीदा में जोड़ें'
    },
    discover: {
      title: 'ईश्वरीय ज्ञान वाटिका',
      searchPlaceholder: 'मुरली, आत्म-दर्शन, कर्म दर्शन खोजें...',
      allLessons: 'सभी पाठ',
      dailyWisdom: 'आज का वरदान व स्लोगन',
      readTime: 'मिनट पठन',
      startLesson: 'अध्ययन करें'
    },
    askBabaAI: {
      title: 'आस्क बाबा (Ask Baba)',
      subtitle: 'आज आपके मन में क्या संकल्प या प्रश्न है?',
      welcomeMsg: 'अपने मन की कोई भी उलझन, संस्कार या आध्यात्मिक प्रश्न पूछें और ब्रह्माकुमारी ज्ञान के आधार पर समाधान पाएं।',
      suggestedTitle: 'सुझाए गए प्रश्न',
      inputPlaceholder: 'बाबा से अपने संकल्पों, संस्कारों या ज्ञान के बारे में पूछें...',
      listening: 'आपकी वाणी सुन रहे हैं...',
      send: 'पूछें',
      setAsSankalp: 'आज का संकल्प बनाएं',
      saveToJournal: 'पोतामेल में संजोएं',
      sourcesCitations: 'सत्यापित बी.के. स्रोत एवं मुरली उद्धरण',
      safetyDisclaimer: 'आस्क बाबा ब्रह्माकुमारीज़ के आध्यात्मिक ज्ञान पर आधारित AI मार्गदर्शक है। यह चिकित्सीय या कानूनी सलाह का विकल्प नहीं है।'
    },
    reflection: {
      title: 'दैनिक पोतामेल (आत्म-निरीक्षण डायरी)',
      howWasDay: 'आज आपकी मानसिक स्थिति कैसी रही?',
      bestThing: 'आज का सबसे सुंदर व श्रेष्ठ अनुभव क्या था?',
      lostStability: 'आज आंतरिक स्थिरता कब और कहाँ डगमगाई?',
      qualityPracticed: 'आज किस आत्मिक गुण का विशेष अभ्यास किया?',
      learnedAboutSelf: 'आज अपने संस्कारों और मन के बारे में क्या सीखा?',
      improveTomorrow: 'कल के लिए क्या सुधार करना चाहते हैं?',
      nextDaySankalp: 'कल का आपका मुख्य संकल्प क्या रहेगा?',
      saveEntry: 'पोतामेल सुरक्षित करें',
      history: 'पूर्व पोतामेल डायरी'
    },
    profile: {
      title: 'आपका आध्यात्मिक कक्ष',
      experienceLevel: 'आध्यात्मिक अनुभव स्तर',
      spiritualGoals: 'सक्रिय आध्यात्मिक लक्ष्य',
      meditationMinutes: 'कुल योग मिनट',
      streakDays: 'निरंतरता दिवस',
      achievements: 'प्राप्त आध्यात्मिक उपलब्धियां',
      language: 'भाषा बदलें / Language / ਭਾਸ਼ਾ',
      theme: 'दृश्य स्वरूप (आइवरी / मिडनाइट)',
      notifications: 'स्मृति सूचक (याद के अलार्म)',
      exportData: 'व्यक्तिगत डेटा डाउनलोड करें (JSON)',
      resetData: 'डेटा रीसेट करें'
    },
    onboarding: {
      welcomeTitle: 'आस्क बाबा में आपका स्वागत है',
      welcomeSubtitle: 'एक शांत, शक्तिशाली और दिव्य जीवन की आपकी यात्रा यहाँ से आरंभ होती है।',
      beginBtn: 'यात्रा आरंभ करें',
      nameLabel: 'आपका शुभ नाम',
      languageSelect: 'अपनी पसंदीदा भाषा चुनें',
      experienceTitle: 'राजयोग व ध्यान में आपका अनुभव क्या है?',
      goalsTitle: 'अपने मुख्य आध्यात्मिक लक्ष्य चुनें',
      routineTitle: 'क्या आप दैनिक आध्यात्मिक दिनचर्या रखते हैं?',
      finishBtn: 'अपने आध्यात्मिक मंदिर में प्रवेश करें'
    }
  },

  pa: {
    appName: 'ਆਸਕ ਬਾਬਾ (Ask Baba)',
    tagline: 'Track · Reflect · Transform | ਪਰਖੋ · ਸੋਚੋ · ਬਦਲੋ',
    nav: {
      home: 'ਮੁੱਖ ਪੰਨਾ',
      journey: 'ਯਾਤਰਾ',
      meditate: 'ਧਿਆਨ',
      discover: 'ਗਿਆਨ',
      you: 'ਤੁਸੀਂ'
    },
    greetings: {
      morning: 'ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ, ਓਮ ਸ਼ਾਂਤੀ',
      afternoon: 'ਸ਼ੁਭ ਦੁਪਹਿਰ',
      evening: 'ਸ਼ੁਭ ਸੰਝ (ਨੁਮਾਸ਼ਾਮ)',
      night: 'ਸ਼ਾਂਤ ਰਾਤ (ਸ਼ਾਂਤੀ ਵੇਲਾ)',
      welcomeSub: 'ਹਰ ਨਵਾਂ ਦਿਨ ਆਪਣੇ ਅਸਲ ਆਤਮਿਕ ਗੁਣਾਂ ਨੂੰ ਅਨੁਭਵ ਕਰਨ ਦਾ ਸੁਨਹਿਰੀ ਮੌਕਾ ਹੈ।'
    },
    todayPurusharth: {
      title: 'ਅੱਜ ਦਾ ਪੁਰਸ਼ਾਰਥ',
      theme: 'ਸਵਰਾਜ ਅਧਿਕਾਰੀ: ਮਨ ਦੇ ਮਾਲਕ ਬਣੋ',
      thoughtLabel: 'ਅੱਜ ਦਾ ਸ਼ੁਭ ਵਿਚਾਰ',
      practiceLabel: 'ਰੋਜ਼ਾਨਾ ਅਭਿਆਸ',
      sankalpLabel: 'ਅੱਜ ਦਾ ਸ਼੍ਰੇਸ਼ਠ ਸੰਕਲਪ',
      exploreBtn: 'ਗਿਆਨ ਵਿਸਥਾਰ ਪੜ੍ਹੋ',
      speakSankalp: 'ਸੰਕਲਪ ਸੁਣੋ',
      murliRef: 'ਅਵਿਅਕਤ ਬਾਪਦਾਦਾ ਮਹਾਵਾਕ (ਮਧੂਬਨ)'
    },
    quickActions: {
      title: 'ਰੋਜ਼ਾਨਾ ਤੁਰੰਤ ਕਾਰਜ',
      startMeditation: 'ਰਾਜਯੋਗ ਧਿਆਨ ਸ਼ੁਰੂ ਕਰੋ',
      trackMyDay: 'ਦਿਨਚਰਿਆ ਚਾਰਟ ਭਰੋ',
      askBaba: 'ਬਾਬਾ ਜੀ ਤੋਂ ਪੁੱਛੋ',
      dailyReflection: 'ਆਤਮ-ਨਿਰੀਖਣ ਪੋਤਾਮੇਲ'
    },
    progress: {
      todayTitle: 'ਅੱਜ ਦਾ ਪੁਰਸ਼ਾਰਥ ਪੱਧਰ',
      completed: 'ਪੂਰਾ',
      of: 'ਕੁੱਲ',
      practices: 'ਨਿਯਮ',
      customiseRoutine: 'ਦਿਨਚਰਿਆ ਨਿਯਮ ਬਦਲੋ'
    },
    practices: {
      amritvela: 'ਅੰਮ੍ਰਿਤਵੇਲਾ ਯੋਗ (3:30 - 4:45 AM)',
      amritvelaDesc: 'ਵਰਦਾਨਾਂ ਦੇ ਸਮੇਂ ਸ਼ਿਵਬਾਬਾ ਨਾਲ ਪ੍ਰੇਮ ਤੇ ਸ਼ਕਤੀਆਂ ਦਾ ਮਿਲਨ',
      morningMeditation: 'ਸਵੇਰ ਦਾ ਰਾਜਯੋਗ ਅਭਿਆਸ',
      morningMeditationDesc: 'ਆਪਣੇ ਆਪ ਨੂੰ ਜੋਤੀ-ਬਿੰਦੂ ਆਤਮਾ ਅਨੁਭਵ ਕਰਕੇ ਸ਼ਾਂਤ ਰਹਿਣਾ',
      swaman: 'ਸਵਮਾਨ ਅਭਿਆਸ',
      swamanDesc: 'ਸਾਰਾ ਦਿਨ ਸ਼੍ਰੇਸ਼ਠ ਆਤਮਿਕ ਗੁਣਾਂ ਦੀ ਸਿਮਰਤੀ ਰੱਖਣਾ',
      murliStudy: 'ਰੋਜ਼ਾਨਾ ਮੁਰਲੀ ਅਧਿਐਨ',
      murliStudyDesc: 'ਮੁਰਲੀ ਦੇ ਗਿਆਨ ਰਤਨਾਂ ਦਾ ਵਿਚਾਰ ਤੇ ਜੀਵਨ ਵਿੱਚ ਧਾਰਨਾ',
      trafficControl: 'ਟ੍ਰੈਫਿਕ ਕੰਟਰੋਲ (ਮਨ ਨੂੰ ਠਹਿਰਾਓ)',
      trafficControlDesc: 'ਹਰ ਘੰਟੇ 2-3 ਮਿੰਟ ਰੁਕ ਕੇ ਸਾਕਸ਼ੀ ਬਣ ਕੇ ਆਤਮਾ ਨੂੰ ਵੇਖਣਾ',
      manmanabhav: 'ਮਨਮਨਾਭਵ ਅਭਿਆਸ',
      manmanabhavDesc: 'ਬੁੱਧੀ ਨੂੰ ਸਿਰਫ਼ ਇੱਕ ਪਰਮਪਿਤਾ ਪਰਮਾਤਮਾ ਵਿੱਚ ਇਕਾਗਰ ਕਰਨਾ',
      eveningMeditation: 'ਸ਼ਾਮ ਦਾ ਯੋਗ (6:30 - 7:30 PM)',
      eveningMeditationDesc: 'ਸੰਧਿਆ ਵੇਲੇ ਪਰਮਧਾਮ ਦੀਆਂ ਸ਼ਕਤੀਆਂ ਨਾਲ ਆਤਮਾ ਨੂੰ ਰਿਚਾਰਜ ਕਰਨਾ',
      nightReflection: 'ਰਾਤ ਦਾ ਪੋਤਾਮੇਲ (ਲੇਖਾ-ਜੋਖਾ)',
      nightReflectionDesc: 'ਸਾਰੇ ਦਿਨ ਦੇ ਕਰਮਾਂ ਤੇ ਵਿਚਾਰਾਂ ਦੀ ਪਰਖ ਕਰਕੇ ਬਾਬਾ ਨੂੰ ਸੌਂਪਣਾ'
    },
    sanskar: {
      title: 'ਸੰਸਕਾਰ ਨਿਰੀਖਣ (Sanskar Observation)',
      subtitle: 'ਸਾਕਸ਼ੀ ਭਾਵ ਨਾਲ ਪੁਰਾਣੇ ਸੁਭਾਅ ਨੂੰ ਵੇਖੋ ਅਤੇ ਰੂਹਾਨੀ ਗਿਆਨ ਨਾਲ ਬਦਲੋ',
      categories: {
        anger: 'ਗੁੱਸਾ ਤੇ ਖਿਝ (Anger)',
        ego: 'ਹੰਕਾਰ ਤੇ ਮਾਣ (Ego)',
        attachment: 'ਮੋਹ ਤੇ ਲਗਾਅ (Attachment)',
        jealousy: 'ਈਰਖਾ ਤੇ ਸਾੜਾ (Jealousy)',
        expectations: 'ਦੂਜਿਆਂ ਤੋਂ ਉਮੀਦਾਂ',
        worry: 'ਚਿੰਤਾ ਤੇ ਫ਼ਿਕਰ (Worry)',
        fear: 'ਡਰ ਤੇ ਝਿਜਕ (Fear)',
        comparison: 'ਮੁਕਾਬਲਾ ਤੇ ਤੁਲਨਾ',
        impatience: 'ਬੇਸਬਰੀ ਤੇ ਕਾਹਲ',
        laziness: 'ਆਲਸ ਤੇ ਢਿੱਲ-ਮੱਠ',
        wasteThoughts: 'ਵਿਅਰਥ ਤੇ ਫ਼ਜ਼ੂਲ ਸੋਚਾਂ',
        negativeThinking: 'ਨਕਾਰਾਤਮਕ ਤੇ ਸ਼ੱਕੀ ਵਿਚਾਰ'
      },
      status: {
        notExperienced: 'ਅੱਜ ਅਨੁਭਵ ਨਹੀਂ ਹੋਇਆ',
        managed: 'ਸਾਹਮਣੇ ਆਇਆ ਪਰ ਸੰਭਾਲ ਲਿਆ',
        reactedRealised: 'ਅਸਰ ਹੇਠ ਆਏ ਫਿਰ ਅਹਿਸਾਸ ਹੋਇਆ',
        needPractice: 'ਹੋਰ ਅਭਿਆਸ ਦੀ ਲੋੜ ਹੈ'
      }
    },
    qualities: {
      title: 'ਆਤਮਾ ਦੇ 7 ਮੂਲ ਗੁਣ',
      subtitle: 'ਆਪਣੀ ਆਤਮਾ ਦੇ ਅਸਲ ਗੁਣਾਂ ਨੂੰ ਜਾਣੋ ਤੇ ਜ਼ਿੰਦਗੀ ਵਿੱਚ ਲਿਆਓ',
      peace: 'ਸ਼ਾਂਤੀ (Peace)',
      love: 'ਪ੍ਰੇਮ (Love)',
      happiness: 'ਖ਼ੁਸ਼ੀ ਤੇ ਆਨੰਦ (Happiness)',
      purity: 'ਪਵਿੱਤਰਤਾ (Purity)',
      bliss: 'ਅਲੌਕਿਕ ਸੁੱਖ (Bliss)',
      knowledge: 'ਗਿਆਨ ਰੌਸ਼ਨੀ (Knowledge)',
      power: 'ਆਤਮਿਕ ਸ਼ਕਤੀ (Power)'
    },
    meditate: {
      heroTitle: 'ਆਪਣੀ ਅੰਦਰੂਨੀ ਸ਼ਾਂਤੀ ਵਿੱਚ ਪਰਤੋ',
      heroSubtitle: 'ਰਾਜਯੋਗ ਧਿਆਨ ਕਮਰਾ · ਪਰਮ ਜੋਤੀ ਸ਼ਿਵਬਾਬਾ ਦੇ ਸਾਨਿਧ ਦਾ ਅਲੌਕਿਕ ਅਨੁਭਵ',
      silentTimer: 'ਮੌਨ ਯੋਗ ਟਾਈਮਰ',
      guidedLibrary: 'ਮਾਰਗਦਰਸ਼ਕ ਧਿਆਨ ਸੈਸ਼ਨ',
      startTimer: 'ਯੋਗ ਸ਼ੁਰੂ ਕਰੋ',
      pauseTimer: 'ਰੋਕੋ',
      resetTimer: 'ਮੁੜ ਸ਼ੁਰੂ ਕਰੋ',
      ambientSound: 'ਪਰਮਧਾਮ ਧੁਨੀਆਂ / ਨਾਦ',
      minutes: 'ਮਿੰਟ',
      favorite: 'ਪਸੰਦੀਦਾ ਵਿੱਚ ਜੋੜੋ'
    },
    discover: {
      title: 'ਰੂਹਾਨੀ ਗਿਆਨ ਖ਼ਜ਼ਾਨਾ',
      searchPlaceholder: 'ਮੁਰਲੀ, ਆਤਮ-ਗਿਆਨ, ਕਰਮ ਦਰਸ਼ਨ ਖੋਜੋ...',
      allLessons: 'ਸਾਰੇ ਪਾਠ',
      dailyWisdom: 'ਅੱਜ ਦਾ ਵਰਦਾਨ ਤੇ ਸਲੋਗਨ',
      readTime: 'ਮਿੰਟ ਪੜ੍ਹਨਾ',
      startLesson: 'ਅਧਿਐਨ ਕਰੋ'
    },
    askBabaAI: {
      title: 'ਆਸਕ ਬਾਬਾ (Ask Baba)',
      subtitle: 'ਅੱਜ ਤੁਹਾਡੇ ਮਨ ਵਿੱਚ ਕੀ ਸਵਾਲ ਜਾਂ ਸੰਕਲਪ ਹੈ?',
      welcomeMsg: 'ਆਪਣੇ ਮਨ ਦੀ ਕੋਈ ਵੀ ਉਲਝਣ, ਸੁਭਾਅ ਜਾਂ ਰੂਹਾਨੀ ਸਵਾਲ ਪੁੱਛੋ ਅਤੇ ਬ੍ਰਹਮਾਕੁਮਾਰੀਜ਼ ਗਿਆਨ ਅਨੁਸਾਰ ਅਗਵਾਈ ਪ੍ਰਾਪਤ ਕਰੋ।',
      suggestedTitle: 'ਸੁਝਾਏ ਗਏ ਪ੍ਰਸ਼ਨ',
      inputPlaceholder: 'ਬਾਬਾ ਜੀ ਤੋਂ ਆਪਣੇ ਸੰਕਲਪਾਂ ਜਾਂ ਜੀਵਨ ਬਾਰੇ ਪੁੱਛੋ...',
      listening: 'ਤੁਹਾਡੀ ਆਵਾਜ਼ ਸੁਣ ਰਹੇ ਹਾਂ...',
      send: 'ਪੁੱਛੋ',
      setAsSankalp: 'ਅੱਜ ਦਾ ਸੰਕਲਪ ਬਣਾਓ',
      saveToJournal: 'ਡਾਇਰੀ ਵਿੱਚ ਸੰਭਾਲੋ',
      sourcesCitations: 'ਪ੍ਰਮਾਣਿਤ ਬੀ.ਕੇ. ਸਰੋਤ ਤੇ ਮੁਰਲੀ ਹਵਾਲਾ',
      safetyDisclaimer: 'ਆਸਕ ਬਾਬਾ ਬ੍ਰਹਮਾਕੁਮਾਰੀਜ਼ ਗਿਆਨ ਉੱਤੇ ਅਧਾਰਿਤ AI ਸਾਥੀ ਹੈ। ਇਹ ਕਿਸੇ ਡਾਕਟਰੀ ਜਾਂ ਕਾਨੂੰਨੀ ਸਲਾਹ ਦਾ ਵਿਕਲਪ ਨਹੀਂ ਹੈ।'
    },
    reflection: {
      title: 'ਰੋਜ਼ਾਨਾ ਆਤਮ-ਨਿਰੀਖਣ (ਪੋਤਾਮੇਲ)',
      howWasDay: 'ਅੱਜ ਤੁਹਾਡੀ ਮਾਨਸਿਕ ਹਾਲਤ ਕਿਹੋ ਜਿਹੀ ਰਹੀ?',
      bestThing: 'ਅੱਜ ਦਾ ਸਭ ਤੋਂ ਵਧੀਆ ਤੇ ਸ਼੍ਰੇਸ਼ਠ ਅਨੁਭਵ ਕੀ ਸੀ?',
      lostStability: 'ਅੱਜ ਅੰਦਰੂਨੀ ਸ਼ਾਂਤੀ ਕਦੋਂ ਤੇ ਕਿੱਥੇ ਡੋਲੀ?',
      qualityPracticed: 'ਅੱਜ ਕਿਹੜੇ ਆਤਮਿਕ ਗੁਣ ਦਾ ਖ਼ਾਸ ਅਭਿਆਸ ਕੀਤਾ?',
      learnedAboutSelf: 'ਅੱਜ ਆਪਣੇ ਮਨ ਤੇ ਸੁਭਾਅ ਬਾਰੇ ਕੀ ਸਿੱਖਿਆ?',
      improveTomorrow: 'ਕੱਲ੍ਹ ਲਈ ਕੀ ਸੁਧਾਰ ਕਰਨਾ ਚਾਹੁੰਦੇ ਹੋ?',
      nextDaySankalp: 'ਕੱਲ੍ਹ ਲਈ ਤੁਹਾਡਾ ਮੁੱਖ ਸੰਕਲਪ ਕੀ ਹੋਵੇਗਾ?',
      saveEntry: 'ਡਾਇਰੀ ਸੁਰੱਖਿਅਤ ਕਰੋ',
      history: 'ਪਿਛਲੀ ਡਾਇਰੀ ਵੇਖੋ'
    },
    profile: {
      title: 'ਤੁਹਾਡਾ ਰੂਹਾਨੀ ਅਸਥਾਨ',
      experienceLevel: 'ਰੂਹਾਨੀ ਅਨੁਭਵ ਪੱਧਰ',
      spiritualGoals: 'ਚੁਣੇ ਹੋਏ ਰੂਹਾਨੀ ਟੀਚੇ',
      meditationMinutes: 'ਕੁੱਲ ਧਿਆਨ ਮਿੰਟ',
      streakDays: 'ਲਗਾਤਾਰ ਦਿਨ',
      achievements: 'ਪ੍ਰਾਪਤ ਕੀਤੇ ਮੀਲ-ਪੱਥਰ ਤੇ ਬੈਜ',
      language: 'ਭਾਸ਼ਾ ਬਦਲੋ / Language / भाषा',
      theme: 'ਦਿੱਖ ਰੂਪ (ਆਈਵਰੀ / ਮਿਡਨਾਈਟ)',
      notifications: 'ਯਾਦ ਦੇ ਸੁਨੇਹੇ (Reminders)',
      exportData: 'ਡਾਟਾ ਡਾਊਨਲੋਡ ਕਰੋ (JSON)',
      resetData: 'ਸਾਰਾ ਡਾਟਾ ਰੀਸੈੱਟ ਕਰੋ'
    },
    onboarding: {
      welcomeTitle: 'ਆਸਕ ਬਾਬਾ ਵਿੱਚ ਤੁਹਾਡਾ ਸੁਆਗਤ ਹੈ',
      welcomeSubtitle: 'ਇੱਕ ਸ਼ਾਂਤ, ਸ਼ਕਤੀਸ਼ਾਲੀ ਅਤੇ ਉੱਚੇ ਜੀਵਨ ਦੀ ਤੁਹਾਡੀ ਯਾਤਰਾ ਇੱਥੋਂ ਸ਼ੁਰੂ ਹੁੰਦੀ ਹੈ।',
      beginBtn: 'ਯਾਤਰਾ ਸ਼ੁਰੂ ਕਰੋ',
      nameLabel: 'ਤੁਹਾਡਾ ਸ਼ੁਭ ਨਾਮ',
      languageSelect: 'ਆਪਣੀ ਪਸੰਦੀਦਾ ਭਾਸ਼ਾ ਚੁਣੋ',
      experienceTitle: 'ਰਾਜਯੋਗ ਅਤੇ ਧਿਆਨ ਵਿੱਚ ਤੁਹਾਡਾ ਅਨੁਭਵ ਕੀ ਹੈ?',
      goalsTitle: 'ਆਪਣੇ ਮੁੱਖ ਰੂਹਾਨੀ ਟੀਚੇ ਚੁਣੋ',
      routineTitle: 'ਕੀ ਤੁਸੀਂ ਰੋਜ਼ਾਨਾ ਰੂਹਾਨੀ ਨੇਮ ਰੱਖਦੇ ਹੋ?',
      finishBtn: 'ਆਪਣੇ ਰੂਹਾਨੀ ਮੰਦਿਰ ਵਿੱਚ ਦਾਖ਼ਲ ਹੋਵੋ'
    }
  }
};

export const getTranslation = (lang: Language): Translations => {
  if (lang === 'pa') return translations.pa;
  if (lang === 'hi') return translations.hi;
  return translations.en;
};
