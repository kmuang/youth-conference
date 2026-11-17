import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Tag, Sparkles } from 'lucide-react';
import { SCHEDULE_DAYS, CONFERENCE_INFO } from '../data/conferenceData';

export default function ScheduleView({ onRegisterClick }) {
  const [selectedDay, setSelectedDay] = useState(0);

  const currentDayData = SCHEDULE_DAYS[selectedDay];

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-fadeIn">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-8">
        <span className="text-xs font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
          Full 3-Day Program
        </span>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3 font-['Outfit']">
          Conference Program & Keynotes
        </h2>
        <p className="text-sm text-slate-600 mt-2">
          Packed with daily Mass, praise & worship, Eucharistic Adoration, youth workshops, and inspiring keynote speakers.
        </p>
      </div>

      {/* Day Selector Tabs */}
      <div className="grid grid-cols-3 gap-2 sm:gap-3 p-1.5 bg-slate-100 rounded-2xl border border-slate-200">
        {SCHEDULE_DAYS.map((d, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedDay(idx)}
            className={`py-3 px-3 sm:px-4 rounded-xl text-center transition-all cursor-pointer ${
              selectedDay === idx
                ? 'bg-indigo-600 text-white font-bold shadow-md shadow-indigo-100'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white font-medium'
            }`}
          >
            <span className="block text-xs uppercase tracking-wider opacity-85">
              Day {idx + 1}
            </span>
            <span className="text-xs sm:text-sm font-bold truncate block mt-0.5">
              {d.day.split('•')[1] || d.day}
            </span>
          </button>
        ))}
      </div>

      {/* Selected Day Timeline */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
        
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div>
            <h3 className="text-xl font-black text-slate-900 font-['Outfit']">
              {currentDayData.title}
            </h3>
            <p className="text-xs text-indigo-600 font-semibold mt-0.5">
              {currentDayData.day}
            </p>
          </div>

          <span className="text-xs bg-slate-100 text-slate-700 px-3 py-1 rounded-full border border-slate-200 font-medium">
            {CONFERENCE_INFO.location}
          </span>
        </div>

        <div className="space-y-3 pt-2">
          {currentDayData.items.map((item, index) => (
            <div 
              key={index}
              className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 hover:bg-white transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 group"
            >
              <div className="flex items-start sm:items-center gap-3">
                <div className="p-2 rounded-xl bg-white text-indigo-600 border border-slate-200 group-hover:bg-indigo-600 group-hover:text-white transition-colors flex-shrink-0 shadow-sm">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-slate-900">
                    {item.title}
                  </h4>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mt-1">
                    <span className="text-amber-700 font-semibold">{item.time}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {item.location}
                    </span>
                  </div>
                </div>
              </div>

              <div className="self-start sm:self-auto">
                <span className="text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-indigo-50 text-indigo-700 border border-indigo-200">
                  {item.tag}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA bottom */}
        <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500 text-center sm:text-left">
            Spots are filling fast. Register today to secure your delegate badge.
          </p>
          <button
            onClick={onRegisterClick}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-rose-500 hover:from-indigo-700 hover:to-rose-600 text-white font-bold text-xs shadow-md shadow-indigo-100 transition-all cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Secure Your Pass</span>
          </button>
        </div>

      </div>

    </div>
  );
}
