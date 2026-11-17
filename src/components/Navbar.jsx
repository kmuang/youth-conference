import React from 'react';
import { Cross, Calendar, HelpCircle, Ticket, Sparkles } from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab, onRegisterClick }) {
  return (
    <header className="sticky top-0 z-40 w-full glass-panel border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Brand Logo */}
          <div 
            onClick={() => setActiveTab('register')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-indigo-600 p-[2px] shadow-md shadow-indigo-100 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center">
                <Cross className="w-5 h-5 text-indigo-600 group-hover:text-indigo-700 transition-colors" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-xl tracking-tight text-slate-900 font-['Outfit']">
                  CYC<span className="text-indigo-600 font-black">2027</span>
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">
                  Catholic Youth Conf
                </span>
              </div>
              <p className="text-xs text-slate-500 hidden sm:block">Portland, Oregon • July 23–25, 2027</p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-100/90 p-1.5 rounded-xl border border-slate-200">
            <button
              onClick={() => setActiveTab('register')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                activeTab === 'register'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200 font-semibold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white'
              }`}
            >
              <Ticket className="w-4 h-4" />
              Registration
            </button>

            <button
              onClick={() => setActiveTab('schedule')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                activeTab === 'schedule'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200 font-semibold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white'
              }`}
            >
              <Calendar className="w-4 h-4" />
              Schedule
            </button>

            <button
              onClick={() => setActiveTab('faq')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                activeTab === 'faq'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200 font-semibold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white'
              }`}
            >
              <HelpCircle className="w-4 h-4" />
              FAQ
            </button>
          </nav>

          {/* Action Button */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                setActiveTab('register');
                onRegisterClick?.();
              }}
              className="relative inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-indigo-600 via-indigo-600 to-rose-500 hover:from-indigo-700 hover:to-rose-600 shadow-md shadow-indigo-200 transition-all transform active:scale-95 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Register Now</span>
            </button>
          </div>

        </div>

        {/* Mobile Sub-Navigation Bar */}
        <div className="flex md:hidden overflow-x-auto py-2 gap-2 border-t border-slate-200 no-scrollbar">
          <button
            onClick={() => setActiveTab('register')}
            className={`flex-1 flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium cursor-pointer ${
              activeTab === 'register' ? 'bg-indigo-600 text-white font-semibold shadow-sm' : 'text-slate-600 bg-white border border-slate-200'
            }`}
          >
            <Ticket className="w-3.5 h-3.5" />
            Register
          </button>
          <button
            onClick={() => setActiveTab('schedule')}
            className={`flex-1 flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium cursor-pointer ${
              activeTab === 'schedule' ? 'bg-indigo-600 text-white font-semibold shadow-sm' : 'text-slate-600 bg-white border border-slate-200'
            }`}
          >
            <Calendar className="w-3.5 h-3.5" />
            Schedule
          </button>
          <button
            onClick={() => setActiveTab('faq')}
            className={`flex-1 flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium cursor-pointer ${
              activeTab === 'faq' ? 'bg-indigo-600 text-white font-semibold shadow-sm' : 'text-slate-600 bg-white border border-slate-200'
            }`}
          >
            <HelpCircle className="w-3.5 h-3.5" />
            FAQ
          </button>
        </div>

      </div>
    </header>
  );
}
