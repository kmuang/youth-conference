import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { 
  CheckCircle2, Download, Calendar, ArrowRight, Printer, MapPin, 
  Mail, Phone, X, Sparkles, Cross 
} from 'lucide-react';
import { CONFERENCE_INFO } from '../data/conferenceData';

export default function ConfirmationModal({ attendee, onClose, onRegisterAnother }) {
  useEffect(() => {
    try {
      const count = 180;
      confetti({
        origin: { y: 0.7 },
        particleCount: count,
        spread: 80,
        startVelocity: 45
      });
    } catch (e) {
      console.log('Confetti effect failed', e);
    }
  }, []);

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadCalendar = () => {
    const fullName = `${attendee.firstName || ''} ${attendee.lastName || ''}`.trim();
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Catholic Youth Conference 2027//EN',
      'BEGIN:VEVENT',
      'SUMMARY:Catholic Youth Conference 2027 (CYC 2027)',
      'DESCRIPTION:National Catholic Youth Conference 2027 registration confirmed for ' + fullName,
      'LOCATION:Convention Center, Indianapolis, IN',
      'DTSTART:20270723T180000Z',
      'DTEND:20270725T200000Z',
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'CYC-2027-Conference.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const fullName = `${attendee.firstName || ''} ${attendee.lastName || ''}`.trim() || 'Attendee';

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-xl bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden my-8">
        
        {/* Header banner */}
        <div className="relative bg-gradient-to-r from-indigo-600 via-indigo-600 to-rose-500 p-6 text-white text-center overflow-hidden">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/10 hover:bg-black/25 text-white/90 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="w-12 h-12 mx-auto mb-2 rounded-2xl bg-white/15 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-lg">
            <CheckCircle2 className="w-7 h-7 text-emerald-300" />
          </div>
          <span className="text-[10px] uppercase font-extrabold tracking-widest text-indigo-100 bg-white/20 px-3 py-0.5 rounded-full border border-white/20">
            Registration Confirmed
          </span>
          <h2 className="text-2xl font-black mt-2 font-['Outfit']">
            Welcome to Catholic Youth Conference 2027!
          </h2>
          <p className="text-xs text-indigo-100 max-w-md mx-auto mt-1">
            <strong className="text-white">{fullName}</strong> is officially registered for CYC 2027.
          </p>
        </div>

        {/* Ticket Details */}
        <div className="p-6 space-y-5">
          
          <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 shadow-inner relative">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block">
                  Registration Pass ID
                </span>
                <span className="text-xl font-black text-indigo-700 font-mono tracking-wider">
                  {attendee.id || 'CYC-2027-LIVE'}
                </span>
              </div>

              <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                Official Attendee
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 py-4 text-xs">
              <div>
                <span className="text-slate-500 block text-[10px] uppercase font-semibold">Attendee Name</span>
                <p className="font-bold text-sm text-slate-900 mt-0.5">{fullName}</p>
                <p className="text-slate-500 text-xs mt-0.5">Age: {attendee.age} years</p>
              </div>

              <div>
                <span className="text-slate-500 block text-[10px] uppercase font-semibold">Location</span>
                <p className="font-bold text-sm text-slate-900 mt-0.5">{attendee.city}, {attendee.state}</p>
                <p className="text-slate-500 text-xs mt-0.5">Indianapolis Convention Center</p>
              </div>

              <div>
                <span className="text-slate-500 block text-[10px] uppercase font-semibold">Shirt Size</span>
                <p className="font-medium text-slate-800 truncate mt-0.5">{attendee.shirtSize}</p>
              </div>

              <div>
                <span className="text-slate-500 block text-[10px] uppercase font-semibold">Phone Number</span>
                <p className="font-medium text-slate-800 truncate mt-0.5">{attendee.phone}</p>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="p-1 bg-white rounded-lg border border-slate-200 shadow-sm">
                  <svg className="w-7 h-7 text-slate-900" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M2 2h8v8H2V2zm2 2v4h4V4H4zm10-2h8v8h-8V2zm2 2v4h4V4h-4zM2 14h8v8H2v-8zm2 2v4h4v-4H4zm14-2h4v4h-4v-4zm-4 4h4v4h-4v-4zm4 4h4v2h-4v-2zm-6-4h2v2h-2v-2zm2-2h2v2h-2v-2zm0-4h2v2h-2v-2z" />
                  </svg>
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold text-slate-700 block">PRESENT AT CHECK-IN</span>
                  <span className="text-[9px] text-slate-500 font-mono">July 23–25, 2027 • Indianapolis, IN</span>
                </div>
              </div>
              <span className="text-[10px] font-mono text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                ACTIVE PASS
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            <button
              onClick={handleDownloadCalendar}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs border border-slate-200 transition-all cursor-pointer shadow-sm"
            >
              <Calendar className="w-4 h-4 text-amber-600" />
              <span>Add to Calendar (.ics)</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs border border-slate-200 transition-all cursor-pointer shadow-sm"
            >
              <Printer className="w-4 h-4 text-indigo-600" />
              <span>Print / Save Pass</span>
            </button>
          </div>

          {/* Footer Navigation */}
          <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
            <button
              onClick={onClose}
              className="text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
            >
              Close
            </button>

            <button
              onClick={onRegisterAnother}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-md shadow-indigo-100 transition-all cursor-pointer"
            >
              <span>Register Another</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
