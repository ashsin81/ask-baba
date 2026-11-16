export type Language = 'en' | 'hi' | 'pa' | 'hinglish';
export type ThemeMode = 'light' | 'dark' | 'midnight';

export type AskBabaTab = 'home' | 'journey' | 'meditate' | 'discover' | 'you';
export type ExperienceLevel = 'beginner' | 'seeker' | 'practitioner' | 'bk_student';

export interface UserProfile {
  id: string;
  phone: string;
  name: string;
  role: 'student' | 'teacher';
  centerName?: string;
  language: Language;
  theme: ThemeMode;
  onboarded: boolean;
  experienceLevel: ExperienceLevel;
  level: number;
  levelTitle: string;
  levelProgress: number; // 0-100
  streakDays: number;
  totalMeditations: number;
  achievementsCount: number;
  totalMeditationMinutes: number;
  selectedQualities: string[];
  primarySanskarGoal: string;
  challenges: string[];
  signatureName: string;
  signedDate: string;
  avatarUrl?: string;
  customInspirationPhoto?: string;
  personalGalleryImages?: string[];
  fontScale?: 'sm' | 'base' | 'lg' | 'xl';
  ttsSpeed?: number;
  geminiApiKey?: string;
  adminPin?: string;
  currentJourneyDay?: number;
  completedJourneyDays?: number[];
  journeyReflections?: Record<number, string>;
  selectedGoals: string[];
  todayProgressPercentage: number;
}

export interface TodayPurusharth {
  id: string;
  theme: string;
  themeHi?: string;
  themePa?: string;
  thought: string;
  thoughtHi?: string;
  thoughtPa?: string;
  practice: string;
  practiceHi?: string;
  practicePa?: string;
  sankalp: string;
  sankalpHi?: string;
  sankalpPa?: string;
  explanation: string;
  explanationHi?: string;
  explanationPa?: string;
  murliReference?: string;
}

export interface DailyPracticeCheckItem {
  id: string;
  name: string;
  nameHi: string;
  namePa?: string;
  category: 'meditation' | 'mind' | 'study' | 'review';
  completed: boolean;
  timeEstimate?: string;
  targetMinutes?: number;
}

export interface SanskarItem {
  id: string;
  name: string;
  nameHi: string;
  namePa?: string;
  icon: string;
  category: 'sanskars' | 'emotions' | 'thoughts';
  percentage: number;
  color: string;
  description: string;
  questions: {
    question: string;
    options: string[];
    userAnswer?: string;
  }[];
  status: 'Not experienced' | 'Experienced but managed' | 'Reacted and later realised' | 'Need more practice';
  lastUpdated?: string;
}

export interface MeditationSessionItem {
  id: string;
  title: string;
  titleHi?: string;
  subtitle: string;
  subtitleHi?: string;
  durationMinutes: number;
  category: string;
  soundscapeId: 'paramdham-drone' | 'amritvela-theta' | 'celestial-bells' | 'silence';
  bgTheme?: string;
  audioUrl?: string;
  guidedVoiceText?: string[];
  isFavorite?: boolean;
}

export interface DailyReflectionItem {
  id: string;
  date: string; // YYYY-MM-DD
  timestamp: string;
  mood: 'blissful' | 'peaceful' | 'neutral' | 'worried' | 'irritated';
  moodLabel: string;
  learnings: string;
  bestThing?: string;
  disturbedSituation?: string;
  qualityPracticed?: string;
  improvementTomorrow?: string;
  nextDaySankalp: string;
}

export interface SpiritualLessonItem {
  id: string;
  categoryId: string;
  categoryName: string;
  categoryNameHi?: string;
  title: string;
  titleHi?: string;
  readTime: string;
  icon: string;
  introduction: string;
  bkKnowledge: string;
  murliReference: string;
  practicalExample: string;
  todayExercise: string;
  reflectionQuestion: string;
  relatedMeditationSessionId?: string;
  isBookmarked?: boolean;
}

export interface SpiritualChallenge {
  id: string;
  title: string;
  titleHi: string;
  durationDays: number;
  currentDay: number;
  isCompleted: boolean;
  icon: string;
  description: string;
  dailyTask: string;
  color: string;
}

export interface AchievementBadge {
  id: string;
  title: string;
  titleHi: string;
  subtitle: string;
  icon: string;
  unlocked: boolean;
  unlockedDate?: string;
  requirement: string;
}

export interface AskBabaAIMessage {
  id: string;
  sender: 'user' | 'baba';
  text: string;
  timestamp: string;
  structuredAnswer?: {
    understanding: string;
    bkKnowledge: string;
    spiritualPerspective: string;
    practicalPurusharth: string;
    todaySankalp: string;
    sourceReference: string;
  };
  suggestedFollowUps?: string[];
}

export interface DailyDivineCard {
  id: string;
  cardTitle: string;
  babaGreeting: string;
  mainMessage: string;
  vardan: string;
  slogan: string;
  drushtiQuality: string;
  imageTheme: string;
}

export interface SpinReward {
  id: string;
  type: 'swaman' | 'vardan' | 'shakti';
  titleHi: string;
  titleEn: string;
  descriptionHi: string;
  color: string;
  icon: string;
}

export interface StudentProgressSummary {
  id: string;
  phone: string;
  name: string;
  centerName: string;
  streakDays: number;
  completedTodayCount: number;
  activeSanskar: string;
  unlockedStampsCount: number;
  lastActive: string;
  lastReflection?: string;
  ratingAverage: number;
  avatarUrl?: string;
}

export interface TeacherMessage {
  id: string;
  fromTeacherName: string;
  toStudentId: string;
  title: string;
  messageText: string;
  blessingVardan: string;
  sentAt: string;
  read: boolean;
}

export interface RescueSituation {
  id: string;
  nameHi: string;
  nameEn: string;
  icon: string;
  borderNameHi: string;
  borderNameEn: string;
  triggerPlaceholder: string;
  defaultEmotions: string[];
  commonOldSanskars: string[];
  gyanGuidanceHi: string;
  babaDirectionHi: string;
  oldResponseExample: string;
  newResponseExample: string;
  stampId: string;
  recommendedQuality: string;
  remembranceAffirmation: string;
  reflectionQuestion: string;
}

export interface RescueSessionRecord {
  id: string;
  situationId: string;
  situationName: string;
  trigger: string;
  emotionalState: string;
  intensityBefore: number;
  oldSanskar: string;
  selectedQuality: string;
  newResponse: string;
  intensityAfter: number;
  reflectionText: string;
  stampAwardedId: string;
  createdAt: string;
}

export interface NightReflectionRecord {
  id: string;
  date: string;
  successfulSituation: string;
  oldPatternRecognized: string;
  nextElevatedThought: string;
  gratitudeToBaba: string;
  purusharthRating: number;
  createdAt: string;
}

export interface DailyPracticeState {
  date: string;
  swamanCompleted: boolean;
  remembranceCompleted: boolean;
  murliCompleted: boolean;
  challengeCompleted: boolean;
  reflectionCompleted: boolean;
  completedAt?: string;
}

export interface AskBabaMessage {
  id: string;
  sender: 'user' | 'baba';
  text: string;
  swaman?: string;
  murliQuote?: string;
  actionHomework?: string;
  drishtiQuality?: string;
  timestamp: string;
}

export interface QualityDefinition {
  id: string;
  nameHi: string;
  nameEn: string;
  descriptionHi: string;
  icon: string;
}

export interface SanskarGoal {
  id: string;
  oldSanskar: string;
  newSanskar: string;
  trigger: string;
  oldResponse: string;
  newResponse: string;
  dailyPractice: string;
  ifThenPlan: string;
  category: string;
  practiceDays: number;
  status: 'active' | 'completed' | 'paused';
  createdAt: string;
}

export interface MurliContentItem {
  id: string;
  title: string;
  category: string;
  murliDate: string;
  sourceReference: string;
  originalExcerpt: string;
  explanation: string;
  practicalApplication: string;
  todayChallenge: string;
  relatedSanskar: string;
  relatedQuality: string;
  verified: boolean;
}

export interface PassportStamp {
  id: string;
  code: string;
  titleHi: string;
  titleEn: string;
  subtitleHi: string;
  category: 'peace' | 'purity' | 'power' | 'love' | 'wisdom' | 'sovereignty';
  shape: 'round' | 'rect' | 'seal' | 'shield';
  color: string;
  iconSvg: string;
  isUnlocked: boolean;
  unlockedAt?: string;
  notes?: string;
}

export interface BaggageItem {
  id: string;
  nameHi: string;
  nameEn: string;
  category: string;
  isReleased: boolean;
  releasedAt?: string;
  spiritualAntidote: string;
}
