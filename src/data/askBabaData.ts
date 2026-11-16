import {
  TodayPurusharth,
  DailyPracticeCheckItem,
  SanskarItem,
  MeditationSessionItem,
  SpiritualLessonItem,
  SpiritualChallenge,
  AchievementBadge,
  DailyReflectionItem
} from '../types';

export const TODAY_PURUSHARTH_DATA: TodayPurusharth = {
  id: 'purusharth-today',
  theme: 'Become the Master of Your Mind',
  themeHi: 'स्वराज्य अधिकारी: मन के मालिक बनो',
  themePa: 'ਸਵਰਾਜ ਅਧਿਕਾਰੀ: ਮਨ ਦੇ ਮਾਲਕ ਬਣੋ',
  thought: 'My mind is my instrument. I am the soul, the conscious being who directs my thoughts.',
  thoughtHi: 'मन मेरी कर्मेन्द्रिय है। मैं आत्मा, इस मन की मालिक व निर्देशक हूँ।',
  thoughtPa: 'ਮਨ ਮੇਰੀ ਕਰਮ-ਇੰਦਰੀ ਹੈ। ਮੈਂ ਆਤਮਾ, ਇਸ ਮਨ ਦੀ ਮਾਲਕ ਤੇ ਨਿਰਦੇਸ਼ਕ ਹਾਂ।',
  practice: 'Pause three times today and consciously create a peaceful thought.',
  practiceHi: 'दिन में 3 बार रुकें और सजग होकर केवल शांत स्वरूप का एक संकल्प रचें।',
  practicePa: 'ਦਿਨ ਵਿੱਚ 3 ਵਾਰ ਰੁਕੋ ਅਤੇ ਸੁਚੇਤ ਹੋ ਕੇ ਕੇਵਲ ਸ਼ਾਂਤ ਸਰੂਪ ਦਾ ਇੱਕ ਸੰਕਲਪ ਰਚੋ।',
  sankalp: 'I am a peaceful soul. I choose the quality of my thoughts.',
  sankalpHi: 'मैं शांत स्वरूप आत्मा हूँ। मैं अपने संकल्पों की स्वयं रचयिता हूँ।',
  sankalpPa: 'ਮੈਂ ਸ਼ਾਂਤ ਸਰੂਪ ਆਤਮਾ ਹਾਂ। ਮੈਂ ਆਪਣੇ ਸੰਕਲਪਾਂ ਦੀ ਖ਼ੁਦ ਰਚੈਤਾ ਹਾਂ।',
  explanation: 'Keep your mind peaceful and see your own virtues. When you sit on the seat of the self-sovereign, waste thoughts instantly dissolve into stillness.',
  explanationHi: 'अपने मन को शांत रखें और अपने मूल गुणों का अनुभव करें। जब आप स्वराज्य अधिकारी बनते हैं तो व्यर्थ संकल्प स्वतः शांत हो जाते हैं।',
  explanationPa: 'ਆਪਣੇ ਮਨ ਨੂੰ ਸ਼ਾਂਤ ਰੱਖੋ ਤੇ ਮੂਲ ਗੁਣਾਂ ਦਾ ਅਨੁਭਵ ਕਰੋ। ਜਦੋਂ ਤੁਸੀਂ ਸਵਰਾਜ ਅਧਿਕਾਰੀ ਬਣਦੇ ਹੋ ਤਾਂ ਵਿਅਰਥ ਸੰਕਲਪ ਖ਼ੁਦ ਸ਼ਾਂਤ ਹੋ ਜਾਂਦੇ ਹਨ।',
  murliReference: 'Avyakt BapDada Mahavakya (Madhuban)'
};

export const INITIAL_DAILY_PRACTICES: DailyPracticeCheckItem[] = [
  {
    id: 'meditation',
    name: 'Meditation',
    nameHi: 'राजयोग ध्यान',
    namePa: 'ਰਾਜਯੋਗ ਧਿਆਨ',
    category: 'meditation',
    completed: true,
    timeEstimate: '15 min',
    targetMinutes: 15
  },
  {
    id: 'positive_thinking',
    name: 'Positive Thinking',
    nameHi: 'सकारात्मक चिंतन (स्वमान)',
    namePa: 'ਸਕਾਰਾਤਮਕ ਚਿੰਤਨ (ਸਵਮਾਨ)',
    category: 'mind',
    completed: true,
    timeEstimate: '3 times'
  },
  {
    id: 'self_review',
    name: 'Self-Review',
    nameHi: 'रात्रि आत्म-निरीक्षण',
    namePa: 'ਰਾਤ ਦਾ ਆਤਮ-ਨਿਰੀਖਣ',
    category: 'review',
    completed: false,
    timeEstimate: '5 min'
  },
  {
    id: 'amritvela',
    name: 'Amritvela Practice',
    nameHi: 'अमृतवेला योग',
    namePa: 'ਅੰਮ੍ਰਿਤਵੇਲਾ ਯੋਗ',
    category: 'meditation',
    completed: true,
    timeEstimate: '3:30 AM',
    targetMinutes: 45
  },
  {
    id: 'traffic_control',
    name: 'Traffic Control (5 Pauses)',
    nameHi: 'ट्रैफिक कंट्रोल (5 बार)',
    namePa: 'ਟ੍ਰੈਫਿਕ ਕੰਟਰੋਲ (5 ਵਾਰ)',
    category: 'mind',
    completed: true,
    timeEstimate: 'Every 3 hrs'
  },
  {
    id: 'murli_study',
    name: 'Murli Study',
    nameHi: 'दैनिक ज्ञान मुरली श्रवण',
    namePa: 'ਰੋਜ਼ਾਨਾ ਗਿਆਨ ਮੁਰਲੀ ਅਧਿਐਨ',
    category: 'study',
    completed: false,
    timeEstimate: '30 min'
  }
];

export const INITIAL_SANSKARS: SanskarItem[] = [
  {
    id: 'anger',
    name: 'Anger',
    nameHi: 'क्रोध व आवेश',
    icon: '🧘',
    category: 'sanskars',
    percentage: 30,
    color: '#E53E3E',
    description: 'Tendency to become irritated when situations or people do not match expectations.',
    status: 'Experienced but managed',
    questions: [
      {
        question: 'Did I become irritated or raise my tone today?',
        options: ['Not at all', 'Slight irritation inside', 'Spoke harshly', 'Lost control momentarily'],
        userAnswer: 'Slight irritation inside'
      },
      {
        question: 'What triggered my reaction?',
        options: ['Unexpected delay', 'Disrespect from another', 'Work pressure', 'Fatigue/hunger'],
        userAnswer: 'Work pressure'
      },
      {
        question: 'Was I able to take a 5-second conscious pause?',
        options: ['Yes, caught it in time', 'Partially', 'Realised only after reacting'],
        userAnswer: 'Yes, caught it in time'
      },
      {
        question: 'What spiritual antidote will I practice tomorrow?',
        options: ['See the actor, not the defect', 'I am an ocean of peace', 'Give respect first'],
        userAnswer: 'I am an ocean of peace'
      }
    ]
  },
  {
    id: 'ego',
    name: 'Ego',
    nameHi: 'अहंकार व मैं-पन',
    icon: '👑',
    category: 'sanskars',
    percentage: 45,
    color: '#DD6B20',
    description: 'Subtle desire for recognition, feeling "I know better", or defending self-image.',
    status: 'Need more practice',
    questions: [
      {
        question: 'Did I feel hurt or offended if my opinion was ignored?',
        options: ['No, stayed detached', 'Felt slight pinch', 'Felt resentful', 'Demanded credit'],
        userAnswer: 'Felt slight pinch'
      },
      {
        question: 'Was I able to see myself as an instrument (nimitt)?',
        options: ['Yes, Baba is the Karavanhar', 'Forgot momentarily', 'Felt purely doer (karanhar)'],
        userAnswer: 'Forgot momentarily'
      }
    ]
  },
  {
    id: 'attachment',
    name: 'Attachment',
    nameHi: 'मोह व लगाव',
    icon: '🕊️',
    category: 'sanskars',
    percentage: 20,
    color: '#805AD5',
    description: 'Dependent happiness tied to specific souls, possessions, or outcomes.',
    status: 'Not experienced',
    questions: [
      {
        question: 'Did my peace depend on someone else\'s mood or presence today?',
        options: ['No, remained content in the self', 'Mild dependency', 'Disturbed for hours'],
        userAnswer: 'No, remained content in the self'
      }
    ]
  },
  {
    id: 'jealousy',
    name: 'Jealousy',
    nameHi: 'ईर्ष्या व तुलना',
    icon: '🌟',
    category: 'sanskars',
    percentage: 15,
    color: '#38A169',
    description: 'Comparing virtues, status, or blessings with other souls.',
    status: 'Not experienced',
    questions: [
      {
        question: 'When another soul succeeded today, did I feel pure good wishes (shubhkaamna)?',
        options: ['Yes, genuine joy for them', 'Mild hesitation', 'Felt left behind'],
        userAnswer: 'Yes, genuine joy for them'
      }
    ]
  },
  {
    id: 'mind_direction',
    name: 'Mind Direction',
    nameHi: 'मन की दिशा व एकाग्रता',
    icon: '💎',
    category: 'thoughts',
    percentage: 70,
    color: '#3182CE',
    description: 'Mastery over the direction, speed, and elevated nature of self-created thoughts.',
    status: 'Experienced but managed',
    questions: [
      {
        question: 'How much of today was spent in waste thoughts (vyarth sankalp)?',
        options: ['Less than 10%', 'Around 25%', 'More than 50%', 'Felt completely scattered'],
        userAnswer: 'Around 25%'
      }
    ]
  },
  {
    id: 'expectations',
    name: 'Expectations',
    nameHi: 'उम्मीदें व अपेक्षाएं',
    icon: '🤝',
    category: 'emotions',
    percentage: 35,
    color: '#D69E2E',
    description: 'Expecting appreciation, change, or love from outside sources.',
    status: 'Experienced but managed',
    questions: [
      {
        question: 'Did I give unconditional love without waiting for a return?',
        options: ['Yes, full donor stage', 'Subtly hoped for thanks', 'Felt disappointed'],
        userAnswer: 'Subtly hoped for thanks'
      }
    ]
  },
  {
    id: 'worry',
    name: 'Worry & Fear',
    nameHi: 'चिंता व भय',
    icon: '🌊',
    category: 'emotions',
    percentage: 25,
    color: '#4FD1C5',
    description: 'Anxiety regarding future outcomes or loss of control.',
    status: 'Not experienced',
    questions: [
      {
        question: 'Did I surrender future uncertainties to the Supreme Father?',
        options: ['Yes, completely carefree emperor', 'Felt slight panic', 'Lost sleep'],
        userAnswer: 'Yes, completely carefree emperor'
      }
    ]
  }
];

export const MEDITATION_SESSIONS_LIST: MeditationSessionItem[] = [
  {
    id: 'moment-of-silence',
    title: 'A Moment of Silence',
    titleHi: 'शांति का एक अनमोल क्षण',
    subtitle: 'Step back from the world into the sanctuary of the soul',
    subtitleHi: 'संसार के कोलाहल से परे अपनी मूल शांति में स्थित हों',
    durationMinutes: 2,
    category: 'Soul Consciousness',
    soundscapeId: 'celestial-bells',
    bgTheme: 'from-[#27223B] via-[#1E192F] to-[#120F1D]',
    guidedVoiceText: [
      'Take a deep, gentle breath.',
      'I withdraw my attention from everything seen by these physical eyes.',
      'I am a point of peaceful light seated in the center of the forehead.',
      'Completely still... completely secure in my original nature.',
      'Om Shanti.'
    ]
  },
  {
    id: 'i-am-peaceful-soul',
    title: 'I Am a Peaceful Soul',
    titleHi: 'मैं शांत स्वरूप आत्मा हूँ',
    subtitle: 'Awaken your original spiritual identity and innate stillness',
    subtitleHi: 'अपने आत्मिक स्वरूप और जन्मसिद्ध शांति को जागृत करें',
    durationMinutes: 5,
    category: 'Soul Consciousness',
    soundscapeId: 'paramdham-drone',
    bgTheme: 'from-[#27223B] via-[#2A1D36] to-[#160E21]',
    guidedVoiceText: [
      'Relax your shoulders and breathe slowly.',
      'I am not this perishable body. I am the conscious, eternal soul.',
      'Like a shining star between the eyebrows, I illuminate this body.',
      'Peace is not something I need to find outside. Peace is who I am.',
      'Waves of divine calmness radiate through every cell and thought.',
      'I am a peaceful soul. Om Shanti.'
    ]
  },
  {
    id: 'morning-rajyoga',
    title: 'Morning Rajyoga',
    titleHi: 'प्रातःकालीन राजयोग साधना',
    subtitle: 'Begin the day in divine communion with the Supreme Sun',
    subtitleHi: 'ज्ञान सूर्य शिव बाबा की किरणों में अपने दिन का शुभारंभ करें',
    durationMinutes: 10,
    category: 'Morning Rajyoga',
    soundscapeId: 'amritvela-theta',
    bgTheme: 'from-[#27223B] via-[#351B2E] to-[#1A0C16]',
    guidedVoiceText: [
      'Welcome this pure morning with immense gratitude.',
      'I the soul fly beyond this physical world of sound and gravity.',
      'Passing beyond the sun, moon, and stars... entering the Soul World, Paramdham.',
      'An infinite sky of soft golden-red light.',
      'Before me shines the Supreme Father, the Ocean of Peace, Love, and Purity.',
      'His divine golden rays are showering directly upon me, filling me with boundless spiritual power.'
    ]
  },
  {
    id: 'supreme-soul-connection',
    title: 'Connecting with Supreme Soul',
    titleHi: 'परमात्म मिलन एवं शक्तिपान',
    subtitle: 'Establish a sweet heart-to-heart link with Shiv Baba',
    subtitleHi: 'शिव बाबा से सर्व संबंध जोड़कर परम आनंद का अनुभव करें',
    durationMinutes: 15,
    category: 'Supreme Soul Connection',
    soundscapeId: 'paramdham-drone',
    bgTheme: 'from-[#27223B] via-[#1F1735] to-[#100C1F]',
    guidedVoiceText: [
      'Remember the Supreme Soul, your eternal Father, Mother, Friend, and Guide.',
      'He is the Ocean of Purity, the Ever-Merciful One.',
      'Surrender every burden, every concern into His loving lap.',
      'You are His most beloved child.',
      'Drink the nectar of pure spiritual love from the Supreme Ocean.'
    ]
  },
  {
    id: 'master-of-my-mind',
    title: 'Master of My Mind',
    titleHi: 'मन के मालिक — स्वराज्य अधिकारी',
    subtitle: 'Command your intellect and thoughts with gentle spiritual sovereignty',
    subtitleHi: 'बुद्धि और संकल्पों को दिव्य आज्ञाकारी सेवक बनाएं',
    durationMinutes: 10,
    category: 'Self-Respect',
    soundscapeId: 'amritvela-theta',
    bgTheme: 'from-[#27223B] via-[#2F1D2C] to-[#190E18]'
  },
  {
    id: 'inner-stability',
    title: 'Experience Inner Stability',
    titleHi: 'अचल, अडोल व साक्षी दृष्टा भाव',
    subtitle: 'Anchor yourself as the detached observer in the drama of life',
    subtitleHi: 'संसार के हर दृश्य में स्थिर रहकर साक्षी भाव का आनंद लें',
    durationMinutes: 15,
    category: 'Peace and Stability',
    soundscapeId: 'paramdham-drone',
    bgTheme: 'from-[#27223B] via-[#241E3A] to-[#141024]'
  },
  {
    id: 'pure-feelings',
    title: 'Pure Feelings for Everyone',
    titleHi: 'सर्व के प्रति शुभभावना व शुभकामना',
    subtitle: 'Shower blessings and good wishes upon all souls without condition',
    subtitleHi: 'बिना शर्त सभी आत्माओं को कल्याण की दृष्टि व दुआएं दें',
    durationMinutes: 10,
    category: 'Relationship Harmony',
    soundscapeId: 'celestial-bells',
    bgTheme: 'from-[#27223B] via-[#331C2D] to-[#180C15]'
  },
  {
    id: 'before-sleep',
    title: 'Before Sleep — Surrender to Baba',
    titleHi: 'रात्रि योग — बाबा की गोदी में विश्राम',
    subtitle: 'Hand over the day’s ledger and rest in pure divine protection',
    subtitleHi: 'दिनभर का हिसाब बाबा को समर्पित कर निश्चिंत सोएं',
    durationMinutes: 10,
    category: 'Night Meditation',
    soundscapeId: 'amritvela-theta',
    bgTheme: 'from-[#1A1528] via-[#141021] to-[#0D0A16]'
  }
];

export const DISCOVER_LESSONS: SpiritualLessonItem[] = [
  {
    id: 'lesson-who-am-i',
    categoryId: 'soul',
    categoryName: 'Soul & Self-Realisation',
    categoryNameHi: 'आत्म-दर्शन एवं स्व-पहचान',
    title: 'Who Am I? The Jewel of Consciousness',
    titleHi: 'मैं कौन हूँ? भृकुटी के बीच चमकता चैतन्य सितारा',
    readTime: '4 min',
    icon: '✨',
    introduction: 'In modern life we identify with our names, professions, bodies, and nationalities. But what happens when we look deeper at the one who experiences all of this?',
    bkKnowledge: 'The soul (Atma) is an eternal, infinitesimal point of living light situated in the center of the forehead between the eyebrows. The soul has three faculties: Mind (generates thoughts and feelings), Intellect (judges, decides, and visualizes), and Sanskars (deep recorded habits, memories, and tendencies). The body is an organic instrument through which the soul expresses itself in the physical world.',
    murliReference: 'Murli Excerpt: "Sweet children, become soul conscious. Remember that you are not the body; you are a sparkling jewel sitting on the throne of this forehead." — Madhuban',
    practicalExample: 'Just as a driver sits inside a car and operates the steering, pedals, and mirrors, you the soul are operating this physical body. When the driver knows they are distinct from the car, traffic jams do not crush their inner identity.',
    todayExercise: 'Today, look into a mirror, look directly into your own pupils, and gently whisper: "I am seeing the temple of the body, but I the soul am the shining light within."',
    reflectionQuestion: 'How would my interactions change today if I viewed everyone as a soul first, before noticing their gender, role, or background?',
    relatedMeditationSessionId: 'i-am-peaceful-soul'
  },
  {
    id: 'lesson-supreme-soul',
    categoryId: 'supreme-soul',
    categoryName: 'Supreme Soul Connection',
    categoryNameHi: 'परमात्मा परिचय एवं मिलन',
    title: 'Shiv Baba: The Supreme Ocean of Light',
    titleHi: 'शिव बाबा: ज्ञान, शांति व प्रेम के असीम सागर',
    readTime: '5 min',
    icon: '☀️',
    introduction: 'Who is the Supreme Soul? Does God have a form, a home, and a personal relationship with us?',
    bkKnowledge: 'The Supreme Soul (Paramatma) is identical in form to the soul — an incorporeal, self-luminous point of light (Jyotirlingam). Unlike human souls who take birth and pass through the cycle of karma, the Supreme Father never takes a physical body. His name is Shiva ("the Benevolent One"). His residence is Paramdham (the Soul World, the Land of Nirvana), an infinite expanse of golden-red divine light beyond sound and matter.',
    murliReference: 'Murli Excerpt: "Remember the One Father alone. He is the Ocean of Purity, the Purifier. By connecting your intellect with Him, your sins of many births are burnt away." — Madhuban',
    practicalExample: 'When an iron needle is covered in rust, a magnet draws it only after the rust is scraped away. Remembering Baba connects us to the Supreme Magnet, cleansing our sanskars with pure divine current.',
    todayExercise: 'Take a 3-minute pause. Close your eyes, visualize a glowing ruby star above, and mentally send a current of love to your Supreme Father.',
    reflectionQuestion: 'Which relationship with Baba (Father, Mother, Teacher, Guide, or Companion) feels sweetest to my heart right now?',
    relatedMeditationSessionId: 'supreme-soul-connection'
  },
  {
    id: 'lesson-rajyoga-meditation',
    categoryId: 'rajyoga',
    categoryName: 'Rajyoga Philosophy',
    categoryNameHi: 'राजयोग की विधि व अवस्थाएं',
    title: 'Meaning and Stages of Rajyoga',
    titleHi: 'राजयोग का यथार्थ अर्थ और अभ्यास की 4 सीढ़ियाँ',
    readTime: '6 min',
    icon: '🧘',
    introduction: 'Rajyoga is not physical postures or controlled breathing. It is the king of yogas — sovereign communion between the individual soul and the Supreme Soul.',
    bkKnowledge: 'Rajyoga means the yoga that makes the soul a king over its own sensory organs and mind. The four sequential stages of Rajyoga are:\n1. Dehe Abhiman Tyag (Detachment from body-consciousness)\n2. Atma Abhiman (Soul-consciousness — knowing the self as peaceful light)\n3. Paramatma Smriti (Supreme Soul remembrance in Paramdham)\n4. Karmayoga (Maintaining remembrance while acting in the daily world).',
    murliReference: 'Murli Excerpt: "Children, remain Manmanabhav — fix your mind on Me alone. Walk, talk, perform actions, but keep your intellect attached to Baba." — Madhuban',
    practicalExample: 'A mother working in the kitchen keeps one eye on her playing child. Similarly, a Rajyogi works in office or home with hands on the task, but the intellect resting gently in Baba’s lap.',
    todayExercise: 'Practice 1 minute of silence before every phone call or email today.',
    reflectionQuestion: 'Where did my mind wander during today\'s silent pause, and how gently can I guide it back without guilt?',
    relatedMeditationSessionId: 'morning-rajyoga'
  },
  {
    id: 'lesson-karma-philosophy',
    categoryId: 'karma',
    categoryName: 'Law of Karma',
    categoryNameHi: 'कर्म की गुह्य गति एवं हिसाब-किताब',
    title: 'The Law of Karma and Elevated Actions',
    titleHi: 'कर्म की गति और श्रेष्ठ कर्मों से भाग्य निर्माण',
    readTime: '5 min',
    icon: '⚖️',
    introduction: 'Every thought is a seed planted into the soil of the universe. What we harvest tomorrow is the direct fruit of our subtle intent today.',
    bkKnowledge: 'The Law of Karma is infallible and exact. Karma is created on three levels: thoughts (sankalp), words (vaani), and physical deeds (karma). The root of all karma is the intention behind it. An action performed with soul-consciousness and good wishes (shubhkaamna) creates elevated karma (sukarma). Actions driven by anger, ego, or attachment create karmic debt (vikarma).',
    murliReference: 'Murli Excerpt: "Perform elevated actions at every step. Let every thought be full of blessing. Those who give happiness receive happiness from everyone." — Madhuban',
    practicalExample: 'If someone speaks rudely to you and you reply with silence and compassion, you have cleared a karmic ledger without opening a fresh cycle of revenge.',
    todayExercise: 'When someone criticizes or challenges you today, give them silent good wishes from within instead of defending your ego.',
    reflectionQuestion: 'Is there a recurring pattern of conflict in my life where I can change my reaction to break an old karmic loop?'
  },
  {
    id: 'lesson-sanskar-transformation',
    categoryId: 'transformation',
    categoryName: 'Sanskar Transformation',
    categoryNameHi: 'संस्कार परिवर्तन से संसार परिवर्तन',
    title: 'Overcoming Anger with the Power of Tolerance',
    titleHi: 'क्रोध का नाश: सहनशीलता और शीतल दृष्टि की शक्ति',
    readTime: '5 min',
    icon: '🕊️',
    introduction: 'Anger is often called a short madness. Spiritual knowledge reveals that anger is the desperate scream of a hurt ego.',
    bkKnowledge: 'Anger arises when expectation is frustrated. We expect situations to proceed our way, or we expect people to act according to our script. In Rajyoga, we practice Shahan-shakti (the power of tolerance). Just as a fruit tree bears stones from children by showering them with sweet fruits, the soul anchored in Baba showers forgiveness and peace in the face of insult.',
    murliReference: 'Murli Excerpt: "Master oceans of peace, do not allow a trace of anger into your thoughts. Anger burns the one who creates it first before it reaches anyone else." — Madhuban',
    practicalExample: 'When boiling milk rises to the brim, a few drops of cold water immediately bring it down. Similarly, when anger begins to rise, taking three deep breaths with the sankalp "I am an Ocean of Peace" cools the inner flame.',
    todayExercise: 'Identify your single most common trigger for irritation today. Promise Baba you will meet that trigger with a peaceful smile.',
    reflectionQuestion: 'Did I notice my heart rate or jaw tighten today before speaking? What did that physical signal tell me about my soul state?'
  }
];

export const SPIRITUAL_CHALLENGES: SpiritualChallenge[] = [
  {
    id: 'challenge-7-peace',
    title: '7 Days of Inner Peace',
    titleHi: '7 दिवसीय शांति साधना',
    durationDays: 7,
    currentDay: 4,
    isCompleted: false,
    icon: '🕊️',
    description: 'Practise conscious pauses during difficult situations and remain an observer.',
    dailyTask: 'Pause 3 times today for 1 minute of silence.',
    color: '#3182CE'
  },
  {
    id: 'challenge-14-amritvela',
    title: '14 Days of Amritvela',
    titleHi: '14 दिवसीय अमृतवेला तपस्या',
    durationDays: 14,
    currentDay: 9,
    isCompleted: false,
    icon: '☀️',
    description: 'Build a consistent morning meditation routine between 3:30 AM and 5:00 AM.',
    dailyTask: 'Sit in Paramdham remembrance at dawn for 30 minutes.',
    color: '#D69E2E'
  },
  {
    id: 'challenge-21-swaman',
    title: '21 Days of Swaman',
    titleHi: '21 दिवसीय स्वमान अभ्यास',
    durationDays: 21,
    currentDay: 12,
    isCompleted: false,
    icon: '👑',
    description: 'Practise remembering your original self-respect qualities every single hour.',
    dailyTask: 'Repeat the sankalp "I am a peaceful, elevated soul" 10 times throughout the day.',
    color: '#805AD5'
  },
  {
    id: 'challenge-7-no-reaction',
    title: '7 Days Without Reaction',
    titleHi: '7 दिन: कोई प्रतिक्रिया नहीं (No Reaction)',
    durationDays: 7,
    currentDay: 2,
    isCompleted: false,
    icon: '🧘',
    description: 'Observe your thoughts before responding to situations. Become the detached actor.',
    dailyTask: 'Take a 5-second pause before answering challenging messages or conversations.',
    color: '#38A169'
  },
  {
    id: 'challenge-7-pure-feelings',
    title: '7 Days of Pure Feelings',
    titleHi: '7 दिन: सर्व के प्रति शुभ भावना',
    durationDays: 7,
    currentDay: 1,
    isCompleted: false,
    icon: '❤️',
    description: 'Practise seeing every soul with good wishes and benevolent vision (Drishti).',
    dailyTask: 'Give a silent blessing to at least 5 people you meet today.',
    color: '#E53E3E'
  },
  {
    id: 'challenge-30-reflection',
    title: '30 Days of Daily Reflection',
    titleHi: '30 दिवसीय आत्म-निरीक्षण पोतामेल',
    durationDays: 30,
    currentDay: 18,
    isCompleted: false,
    icon: '📖',
    description: 'Develop the daily spiritual habit of reviewing your thoughts, actions, and sanskars.',
    dailyTask: 'Complete and save your night reflection journal entry before sleeping.',
    color: '#711D35'
  }
];

export const INITIAL_ACHIEVEMENTS: AchievementBadge[] = [
  {
    id: 'ach-first-meditation',
    title: 'First Step to Peace',
    titleHi: 'प्रथम राजयोग अभ्यास',
    subtitle: 'Completed your very first Rajyoga meditation session',
    icon: '🪷',
    unlocked: true,
    unlockedDate: 'Nov 1, 2026',
    requirement: 'Complete 1 meditation session'
  },
  {
    id: 'ach-7-day-streak',
    title: 'Consistency Star',
    titleHi: 'नियमितता का सितारा',
    subtitle: 'Maintained 7 consecutive days of spiritual discipline',
    icon: '🔥',
    unlocked: true,
    unlockedDate: 'Nov 8, 2026',
    requirement: '7-day daily practice streak'
  },
  {
    id: 'ach-100-mins',
    title: 'Deep Diver',
    titleHi: 'योग की गहराई',
    subtitle: 'Recorded over 100 minutes of Rajyoga meditation',
    icon: '⏱️',
    unlocked: true,
    unlockedDate: 'Nov 12, 2026',
    requirement: 'Accumulate 100 meditation minutes'
  },
  {
    id: 'ach-master-mind',
    title: 'Master of Mind',
    titleHi: 'मन के राजा',
    subtitle: 'Maintained peace during an intense emotional trigger',
    icon: '👑',
    unlocked: true,
    unlockedDate: 'Nov 14, 2026',
    requirement: 'Log a successful sanskar transformation'
  },
  {
    id: 'ach-amritvela',
    title: 'Amritvela Victor',
    titleHi: 'अमृतवेला विजयी',
    subtitle: 'Woke up at 3:30 AM for 5 days in divine remembrance',
    icon: '☀️',
    unlocked: true,
    unlockedDate: 'Nov 15, 2026',
    requirement: 'Complete 5 Amritvela sessions'
  },
  {
    id: 'ach-pure-drishti',
    title: 'Pure Vision',
    titleHi: 'दिव्य दृष्टि',
    subtitle: 'Practiced soul-conscious drishti with all souls',
    icon: '✨',
    unlocked: true,
    unlockedDate: 'Nov 16, 2026',
    requirement: 'Complete 7 days pure feelings challenge'
  },
  {
    id: 'ach-lotus-purity',
    title: 'Lotus in the Mud',
    titleHi: 'कमल पुष्प समान',
    subtitle: 'Remained detached and pure in worldly responsibilities',
    icon: '🌸',
    unlocked: true,
    unlockedDate: 'Nov 16, 2026',
    requirement: 'Pass 3 sanskar checkpoints'
  },
  {
    id: 'ach-truth-seeker',
    title: 'Wisdom Explorer',
    titleHi: 'ज्ञान पिपासू',
    subtitle: 'Studied 5 complete spiritual lessons in Discover',
    icon: '📚',
    unlocked: true,
    unlockedDate: 'Nov 17, 2026',
    requirement: 'Complete 5 lessons'
  },
  {
    id: 'ach-30-days',
    title: 'Sovereign Yogi',
    titleHi: 'स्वराज्य अधिकारी योगी',
    subtitle: 'Complete 30 continuous days of daily reflection',
    icon: '🌟',
    unlocked: false,
    requirement: '30-day reflection streak'
  }
];

export const INITIAL_REFLECTIONS_HISTORY: DailyReflectionItem[] = [
  {
    id: 'ref-1',
    date: '2026-11-16',
    timestamp: '2026-11-16T21:40:00Z',
    mood: 'blissful',
    moodLabel: 'Peaceful & Content',
    learnings: 'I noticed that when I remember Baba at the start of any conversation, no harsh words escape my lips. The power of pause worked wonders during the team meeting.',
    bestThing: 'Felt deeply anchored during 4 PM Traffic Control pause.',
    disturbedSituation: 'A colleague delayed a critical task, but I chose patience over irritation.',
    qualityPracticed: 'Peace & Patience',
    improvementTomorrow: 'Maintain Amritvela punctuality at 3:30 AM.',
    nextDaySankalp: 'I am a peaceful soul. I choose love and calmness in every encounter.'
  },
  {
    id: 'ref-2',
    date: '2026-11-15',
    timestamp: '2026-11-15T22:10:00Z',
    mood: 'peaceful',
    moodLabel: 'Serene',
    learnings: 'Observed subtle ego when receiving a compliment. Immediately offered it back as Baba\'s blessing so it does not turn into arrogance.',
    bestThing: 'Wonderful Amritvela meditation filled with divine rays.',
    disturbedSituation: 'None. Kept mind light like a feather.',
    qualityPracticed: 'Humility & Truth',
    improvementTomorrow: 'Keep checking mind direction every two hours.',
    nextDaySankalp: 'I am an instrument in Baba\'s hands. Nimitt and Nirahankari.'
  }
];
