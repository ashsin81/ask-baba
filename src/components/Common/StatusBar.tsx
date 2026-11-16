import React, { useState, useEffect } from 'react';
import { Wifi, Battery } from 'lucide-react';

interface StatusBarProps {
  dark?: boolean;
}

export const StatusBar: React.FC<StatusBarProps> = ({ dark = false }) => {
  const [time, setTime] = useState<string>('9:41');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  const textColor = dark ? 'text-white/80' : 'text-[#302B2B]';

  return (
    <div className={`w-full flex items-center justify-between px-6 pt-3 pb-2 text-xs font-semibold ${textColor} select-none`}>
      <span>{time}</span>
      <div className="flex items-center gap-1.5 opacity-90">
        <Wifi className="w-3.5 h-3.5" />
        <div className="w-4 h-2 border border-current rounded-sm p-0.5 flex items-center">
          <div className="w-full h-full bg-current rounded-[1px]" />
        </div>
      </div>
    </div>
  );
};
