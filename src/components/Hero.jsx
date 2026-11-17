import React from 'react';
import { Calendar, MapPin, Sparkles, ArrowRight, Award, CheckCircle, Cross } from 'lucide-react';
import { CONFERENCE_INFO } from '../data/conferenceData';

export default function Hero({ onRegisterClick, onExploreSchedule }) {
  return (
    <div className="relative overflow-hidden pt-8 pb-12 lg:pt-14 lg:pb-16">
      {/* Background radial gradients for light mode */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[350px] bg-gradient-to-tr from-indigo-200/50 via-pink-200/40 to-amber-200/30 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 font-['Outfit'] leading-[1.1]">
            Catholic Youth <span className="bg-gradient-to-r from-amber-500 via-rose-500 to-indigo-600 bg-clip-text text-transparent">Conference 2027</span>
          </h1>
          <p className="mt-3 text-lg sm:text-2xl font-bold text-slate-800">
            {CONFERENCE_INFO.theme}
          </p>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Three transformative days of praise & worship, daily Holy Mass, Eucharistic Adoration, inspiring keynote workshops, and fellowship for youth across the country.
          </p>

          {/* Key Quick Info Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-slate-700">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-sm">
              <Calendar className="w-4 h-4 text-amber-500" />
              <span className="font-medium">{CONFERENCE_INFO.dates}</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-sm">
              <MapPin className="w-4 h-4 text-rose-500" />
              <span className="font-medium">{CONFERENCE_INFO.location}</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-sm">
              <Sparkles className="w-4 h-4 text-indigo-600" />
              <span className="font-medium text-indigo-700">Parish & Youth Admission</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onRegisterClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl font-bold text-base text-white bg-gradient-to-r from-indigo-600 via-indigo-600 to-rose-500 hover:from-indigo-700 hover:to-rose-600 shadow-lg shadow-indigo-200 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <Sparkles className="w-5 h-5 text-amber-300" />
              <span>Register Now</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>

            <button
              onClick={onExploreSchedule}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-base text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-200 shadow-sm transition-all cursor-pointer"
            >
              <span>View 3-Day Schedule</span>
            </button>
          </div>

          {/* Trust badges */}
          <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500">
            <div className="flex items-center gap-1.5">
              <Cross className="w-4 h-4 text-indigo-600" />
              <span>Daily Holy Mass & Sacraments</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Award className="w-4 h-4 text-indigo-600" />
              <span>Eucharistic Adoration</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
