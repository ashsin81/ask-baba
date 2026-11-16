import React from 'react';

interface ScenicLandscapeArtProps {
  mode: 'day' | 'night';
  activityTime?: string;
  activityTitle?: string;
  onActivityClick?: () => void;
}

export const ScenicLandscapeArt: React.FC<ScenicLandscapeArtProps> = ({
  mode,
  activityTime = '8:00 p.m.',
  activityTitle = 'Meditation and relaxation',
  onActivityClick
}) => {
  const isDay = mode === 'day';

  return (
    <div className="relative w-full h-[320px] rounded-[32px] overflow-hidden select-none shadow-md">
      {/* Background Sky */}
      <svg
        viewBox="0 0 400 360"
        className="w-full h-full object-cover"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Day Sky Gradient */}
          <linearGradient id="daySky" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#87B7B8" />
            <stop offset="30%" stopColor="#A4C8C2" />
            <stop offset="65%" stopColor="#C4DCCB" />
            <stop offset="85%" stopColor="#E2EBE0" />
            <stop offset="100%" stopColor="#8BB5A9" />
          </linearGradient>

          {/* Night Sky Gradient */}
          <linearGradient id="nightSky" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0B1021" />
            <stop offset="40%" stopColor="#121833" />
            <stop offset="70%" stopColor="#1E2345" />
            <stop offset="90%" stopColor="#252445" />
            <stop offset="100%" stopColor="#14182B" />
          </linearGradient>

          {/* Day Mountain Gradients */}
          <linearGradient id="dayMountainBack" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8A766F" />
            <stop offset="50%" stopColor="#73615C" />
            <stop offset="100%" stopColor="#554440" />
          </linearGradient>
          <linearGradient id="dayMountainSun" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FDE68A" />
            <stop offset="100%" stopColor="#D97706" />
          </linearGradient>

          {/* Night Mountain Gradients */}
          <linearGradient id="nightMountainBack" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#433758" />
            <stop offset="50%" stopColor="#2A243D" />
            <stop offset="100%" stopColor="#181524" />
          </linearGradient>
          <linearGradient id="nightMountainHighlight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7E688E" />
            <stop offset="100%" stopColor="#3E3050" />
          </linearGradient>

          {/* Lake Water Gradients */}
          <linearGradient id="dayWater" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#548683" />
            <stop offset="50%" stopColor="#3C6E6B" />
            <stop offset="100%" stopColor="#264D4B" />
          </linearGradient>
          <linearGradient id="nightWater" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1A2038" />
            <stop offset="50%" stopColor="#111628" />
            <stop offset="100%" stopColor="#0B0F1C" />
          </linearGradient>

          {/* Moon Glow */}
          <radialGradient id="moonGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
            <stop offset="50%" stopColor="#FFFBEB" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#FCD34D" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Sky Base */}
        <rect width="400" height="360" fill={isDay ? 'url(#daySky)' : 'url(#nightSky)'} />

        {/* Night-Only Stars & Shooting Star */}
        {!isDay && (
          <g>
            {/* Twinkling stars */}
            <circle cx="50" cy="50" r="1.5" fill="#FFF" opacity="0.8" />
            <circle cx="120" cy="35" r="1" fill="#FFF" opacity="0.6" />
            <circle cx="180" cy="65" r="1.5" fill="#FFF" opacity="0.9" />
            <circle cx="220" cy="40" r="1" fill="#FFF" opacity="0.7" />
            <circle cx="340" cy="70" r="1.5" fill="#FFF" opacity="0.9" />
            <circle cx="370" cy="45" r="1.2" fill="#FFF" opacity="0.6" />
            <circle cx="80" cy="90" r="1" fill="#FFF" opacity="0.5" />
            <circle cx="300" cy="95" r="1" fill="#FFF" opacity="0.6" />

            {/* Glowing Shooting Star */}
            <path
              d="M 68 25 L 85 42"
              stroke="#FFF"
              strokeWidth="1.5"
              strokeLinecap="round"
              opacity="0.8"
            />
            <line
              x1="68"
              y1="25"
              x2="60"
              y2="17"
              stroke="#FFF"
              strokeWidth="0.8"
              opacity="0.4"
            />

            {/* Glowing Star near moon */}
            <circle cx="280" cy="72" r="2.5" fill="#FFF8DB" />
            <circle cx="280" cy="72" r="5" fill="#FFD700" opacity="0.3" />

            {/* Radiant Crescent Moon */}
            <g transform="translate(260, 40)">
              {/* Soft glow halo */}
              <circle cx="25" cy="25" r="30" fill="url(#moonGlow)" opacity="0.3" />
              {/* Moon crescent shape */}
              <path
                d="M 32 5 A 24 24 0 1 0 45 42 A 20 20 0 1 1 32 5 Z"
                fill="#FFFBEB"
                filter="drop-shadow(0 0 8px rgba(255, 251, 235, 0.7))"
              />
            </g>
          </g>
        )}

        {/* Day-Only Soft Sun behind peaks */}
        {isDay && (
          <g>
            <circle cx="330" cy="170" r="35" fill="url(#dayMountainSun)" opacity="0.4" filter="blur(8px)" />
            <circle cx="330" cy="170" r="18" fill="#FFFBEB" opacity="0.9" />
          </g>
        )}

        {/* Distant Mountain Ridges */}
        {isDay ? (
          <g>
            {/* Distant peaks */}
            <polygon points="120,230 180,140 230,195 280,120 360,230" fill="#7E6D66" opacity="0.8" />
            {/* Center Massive Mountain Peak */}
            <polygon points="80,240 180,125 210,145 255,115 320,240" fill="url(#dayMountainBack)" />
            {/* Mountain rocky highlight facets */}
            <polygon points="180,125 200,165 175,220 150,240" fill="#A8928B" opacity="0.5" />
            <polygon points="255,115 285,160 270,210 230,240" fill="#99837C" opacity="0.4" />
            <polygon points="210,145 235,175 220,230" fill="#BFA9A2" opacity="0.6" />
          </g>
        ) : (
          <g>
            {/* Night Purple Mountain Ridges */}
            <polygon points="100,240 180,110 230,185 270,120 340,240" fill="url(#nightMountainBack)" />
            {/* Center crag with moonlight highlights */}
            <polygon points="180,110 205,150 185,210 160,240" fill="url(#nightMountainHighlight)" />
            <polygon points="270,120 295,165 280,215 250,240" fill="#5D4B70" opacity="0.6" />
            <polygon points="230,185 245,210 230,240" fill="#4B3B5C" opacity="0.7" />
          </g>
        )}

        {/* Calm Reflective Lake Surface */}
        <rect
          x="0"
          y="230"
          width="400"
          height="130"
          fill={isDay ? 'url(#dayWater)' : 'url(#nightWater)'}
        />

        {/* Mountain reflections in water */}
        <ellipse
          cx="210"
          cy="260"
          rx="120"
          ry="25"
          fill={isDay ? '#365E5C' : '#141829'}
          opacity="0.6"
        />

        {/* Left Shore with Pine Trees & Forest */}
        <g>
          {/* Rocky shoreline left */}
          <path
            d="M -10 230 Q 80 235 120 260 Q 90 280 -10 290 Z"
            fill={isDay ? '#3D342F' : '#1A1824'}
          />

          {/* Pine Trees (Left Shoreline Forest) */}
          {/* Tree 1 */}
          <polygon points="30,130 15,190 45,190" fill={isDay ? '#23382D' : '#0F181C'} />
          <polygon points="30,145 10,210 50,210" fill={isDay ? '#1C2E25' : '#0D1418'} />
          {/* Tree 2 */}
          <polygon points="50,110 32,175 68,175" fill={isDay ? '#2C4437' : '#121F24'} />
          <polygon points="50,130 25,200 75,200" fill={isDay ? '#203329' : '#0E171C'} />
          {/* Tree 3 */}
          <polygon points="75,125 58,185 92,185" fill={isDay ? '#365343' : '#17272D'} />
          <polygon points="75,145 52,215 98,215" fill={isDay ? '#23382D' : '#0F1A1F'} />
          {/* Tree 4 */}
          <polygon points="100,160 85,220 115,220" fill={isDay ? '#203329' : '#0E171C'} />
          <polygon points="120,185 105,240 135,240" fill={isDay ? '#192820' : '#0A1216'} />
        </g>

        {/* Right Shore with Trees */}
        <g>
          {/* Rocky shoreline right */}
          <path
            d="M 410 220 Q 340 235 300 265 Q 350 285 410 290 Z"
            fill={isDay ? '#333A33' : '#181C26'}
          />
          {/* Birch / Pine Trees right */}
          <polygon points="330,130 310,195 350,195" fill={isDay ? '#2A4034' : '#121A22'} />
          <polygon points="360,115 338,185 382,185" fill={isDay ? '#344F40' : '#182430'} />
          <polygon points="385,125 365,190 405,190" fill={isDay ? '#24372D' : '#0E151C'} />

          {/* Birch Tree Trunks (Night style) */}
          {!isDay && (
            <g stroke="#94A3B8" strokeWidth="2.5" opacity="0.8">
              <line x1="330" y1="195" x2="330" y2="255" />
              <line x1="350" y1="185" x2="350" y2="260" />
              <line x1="375" y1="190" x2="375" y2="260" />
            </g>
          )}
        </g>

        {/* Small Kayaks / Boats in the water (Day) OR Glowing Tents (Night) */}
        {isDay ? (
          <g>
            {/* Kayak 1 */}
            <ellipse cx="240" cy="270" rx="14" ry="2.5" fill="#8B4513" />
            <line x1="230" y1="268" x2="250" y2="272" stroke="#FFF" strokeWidth="1" />
            {/* Kayak 2 */}
            <ellipse cx="270" cy="276" rx="10" ry="2" fill="#A0522D" />
            {/* Small tents on left shore */}
            <polygon points="65,245 55,255 75,255" fill="#3B82F6" />
            <polygon points="85,247 77,256 93,256" fill="#F59E0B" />
          </g>
        ) : (
          <g>
            {/* 3 Glowing Warm Tents on the Lake Shore (Exact mockup!) */}
            {/* Tent 1 (Warm Amber Glow) */}
            <polygon points="160,250 145,268 175,268" fill="#F59E0B" filter="drop-shadow(0 0 6px #F59E0B)" />
            <polygon points="160,250 160,268 175,268" fill="#D97706" />

            {/* Tent 2 (Soft White / Cream Glow) */}
            <polygon points="185,248 172,267 198,267" fill="#F8FAFC" filter="drop-shadow(0 0 6px #FFFFFF)" />
            <polygon points="185,248 185,267 198,267" fill="#CBD5E1" />

            {/* Tent 3 (Warm Coral / Red-Orange Glow) */}
            <polygon points="210,251 197,268 223,268" fill="#EA580C" filter="drop-shadow(0 0 6px #EA580C)" />
            <polygon points="210,251 210,268 223,268" fill="#C2410C" />

            {/* Golden light reflection on water */}
            <ellipse cx="185" cy="275" rx="35" ry="4" fill="#FCD34D" opacity="0.3" filter="blur(2px)" />
          </g>
        )}

        {/* Floating Clouds in the Sky (Exact mockup!) */}
        {isDay && (
          <g fill="#FFFFFF" opacity="0.85">
            {/* Cloud 1 Left */}
            <path d="M 60 110 Q 50 100 65 95 Q 75 90 90 95 Q 105 92 110 105 Q 115 115 100 118 Q 80 120 60 110 Z" />
            {/* Cloud 2 Right */}
            <path d="M 310 100 Q 300 90 320 85 Q 335 80 350 85 Q 365 82 375 92 Q 380 102 365 108 Q 340 110 310 100 Z" />
            {/* Cloud 3 Center Top */}
            <path d="M 200 70 Q 190 60 210 55 Q 225 50 240 55 Q 255 52 265 62 Q 270 72 255 78 Q 230 80 200 70 Z" opacity="0.6" />
          </g>
        )}
      </svg>

      {/* Floating Translucent Activities Card (Exact mockup on the clouds!) */}
      <div
        onClick={onActivityClick}
        className={`absolute top-6 left-6 right-6 p-4 rounded-2xl backdrop-blur-md border cursor-pointer transition transform active:scale-[0.99] shadow-lg ${
          isDay
            ? 'bg-white/60 border-white/70 text-[#1E293B]'
            : 'bg-[#182036]/75 border-white/15 text-white'
        }`}
      >
        <div className="flex items-center justify-between text-xs font-semibold mb-1">
          <div className="flex items-center gap-1.5">
            <span className={`w-2.5 h-2.5 rounded-full ${isDay ? 'bg-[#EA580C]' : 'bg-amber-400'} animate-pulse`} />
            <span className={isDay ? 'text-[#C2410C]' : 'text-amber-300'}>
              {isDay ? 'Activities today' : 'Night Purusharth'}
            </span>
          </div>
          <span className={isDay ? 'text-[#64748B]' : 'text-slate-300'}>
            {activityTime}
          </span>
        </div>
        <p className={`text-sm font-bold tracking-tight line-clamp-1 ${isDay ? 'text-[#0F172A]' : 'text-white'}`}>
          {activityTitle}
        </p>
      </div>
    </div>
  );
};
