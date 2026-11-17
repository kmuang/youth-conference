import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { 
  CheckCircle2, Download, ArrowRight, MapPin, 
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
            <div className="flex justify-end pb-3 border-b border-slate-200">
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
