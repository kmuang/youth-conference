import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Mail, MessageCircle } from 'lucide-react';
import { FAQS } from '../data/conferenceData';

export default function FAQSection({ onRegisterClick }) {
  const [openIdx, setOpenIdx] = useState(0);

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6 animate-fadeIn">
      
      <div className="text-center max-w-xl mx-auto mb-8">
        <span className="text-xs font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
          Frequently Asked Questions
        </span>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3 font-['Outfit']">
          Got Questions? We’ve Got Answers.
        </h2>
        <p className="text-sm text-slate-600 mt-2">
          Everything you need to know about registration, schedule, and attendance.
        </p>
      </div>

      <div className="space-y-3">
        {FAQS.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div
              key={idx}
              className={`rounded-2xl border transition-all ${
                isOpen 
                  ? 'bg-white border-indigo-400 shadow-md ring-1 ring-indigo-200' 
                  : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
              }`}
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer"
              >
                <span className="text-sm sm:text-base font-bold text-slate-900">
                  {faq.q}
                </span>
                <ChevronDown className={`w-5 h-5 text-indigo-600 transition-transform flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
              </button>

              {isOpen && (
                <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Support box */}
      <div className="bg-indigo-50/70 p-6 rounded-3xl border border-indigo-200 text-center space-y-3 mt-8 shadow-sm">
        <h4 className="font-bold text-slate-900 text-base">Still have questions?</h4>
        <p className="text-xs text-slate-600 max-w-md mx-auto">
          Our youth ministry coordination team is here to assist parishes, group leaders, and attendees.
        </p>
        <div className="flex items-center justify-center gap-4 text-xs font-semibold pt-1">
          <a href="mailto:ksmuang20@gmail.com" className="inline-flex items-center gap-1.5 text-indigo-700 hover:text-indigo-800">
            <Mail className="w-4 h-4" />
            <span>ksmuang20@gmail.com</span>
          </a>
        </div>
      </div>

    </div>
  );
}
