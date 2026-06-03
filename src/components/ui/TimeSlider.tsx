"use client";

import { useDictionary } from "@/contexts/DictionaryContext";

interface TimeSliderProps {
  label: string;
  value: number;
  onChange: (hours: number) => void;
  min?: number;
  max?: number;
  step?: number;
  helpText?: string;
}

export function TimeSlider({
  label,
  value,
  onChange,
  min = 0.25,
  max = 24,
  step = 0.25,
  helpText,
}: TimeSliderProps) {
  const dict = useDictionary();

  const formatTime = (hours: number): string => {
    const h = Math.floor(hours);
    const m = Math.round((hours - h) * 60);

    if (h === 0 && m > 0) return `${m} ${dict.time.minutes}`;
    if (h > 0 && m === 0) return `${h} ${h !== 1 ? dict.time.hours_other : dict.time.hours_one}`;
    return `${h} ${h !== 1 ? dict.time.hours_other : dict.time.hours_one} ${dict.time.and} ${m} ${dict.time.minutes}`;
  };

  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label className="block text-sm font-medium text-slate-700">
          {label}
        </label>
        <span className="text-sm font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-lg">
          {formatTime(value)}
        </span>
      </div>

      <div className="relative pt-1 pb-1">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="time-slider w-full h-2 rounded-full appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-500/30"
          style={{
            background: `linear-gradient(to right, #10b981 0%, #14b8a6 ${percentage}%, #e2e8f0 ${percentage}%, #e2e8f0 100%)`,
          }}
          aria-label={label}
          aria-valuetext={formatTime(value)}
        />
      </div>

      {/* Min/Max labels */}
      <div className="flex justify-between text-xs text-slate-400">
        <span>{formatTime(min)}</span>
        <span>{formatTime(max)}</span>
      </div>

      {helpText && (
        <p className="text-xs text-slate-500 leading-relaxed">{helpText}</p>
      )}

      <style jsx>{`
        .time-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: white;
          border: 3px solid #10b981;
          box-shadow: 0 2px 6px rgba(16, 185, 129, 0.3);
          cursor: pointer;
          transition: box-shadow 0.2s, transform 0.15s;
        }

        .time-slider::-webkit-slider-thumb:hover {
          box-shadow: 0 3px 10px rgba(16, 185, 129, 0.45);
          transform: scale(1.1);
        }

        .time-slider::-webkit-slider-thumb:active {
          transform: scale(0.95);
        }

        .time-slider::-moz-range-thumb {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: white;
          border: 3px solid #10b981;
          box-shadow: 0 2px 6px rgba(16, 185, 129, 0.3);
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
