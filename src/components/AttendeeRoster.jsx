import React, { useState, useMemo } from 'react';
import { 
  Users, Search, Download, Plus, Trash2, MapPin, CheckCircle2, Mail, Phone, Calendar 
} from 'lucide-react';
import { US_STATES, CONFERENCE_INFO } from '../data/conferenceData';

export default function AttendeeRoster({ attendees, onAddClick, onDeleteAttendee, onResetDefaultAttendees }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedState, setSelectedState] = useState('all');

  // Filtered attendees
  const filteredAttendees = useMemo(() => {
    return attendees.filter(a => {
      const fullName = `${a.firstName || ''} ${a.lastName || ''}`.toLowerCase();
      const matchQuery = 
        fullName.includes(searchTerm.toLowerCase()) ||
        (a.contact || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
        (a.phone || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
        (a.city || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
        (a.state || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
        (a.id || '').toLowerCase().includes(searchTerm.toLowerCase());

      const matchState = selectedState === 'all' || a.state === selectedState;

      return matchQuery && matchState;
    });
  }, [attendees, searchTerm, selectedState]);

  // Statistics
  const stats = useMemo(() => {
    const total = attendees.length;
    const statesCovered = new Set(attendees.map(a => a.state).filter(Boolean)).size;
    const avgAge = total > 0 
      ? Math.round(attendees.reduce((acc, curr) => acc + (Number(curr.age) || 0), 0) / total) 
      : 0;
    return { total, statesCovered, avgAge };
  }, [attendees]);

  // CSV Export
  const handleExportCSV = () => {
    const headers = [
      "Registration ID",
      "First Name",
      "Last Name",
      "Contact Email",
      "Phone Number",
      "Age",
      "City",
      "State",
      "Registered Date"
    ];

    const rows = attendees.map(a => {
      return [
        `"${a.id || ''}"`,
        `"${a.firstName || ''}"`,
        `"${a.lastName || ''}"`,
        `"${a.contact || ''}"`,
        `"${a.phone || ''}"`,
        `"${a.age || ''}"`,
        `"${a.city || ''}"`,
        `"${a.state || ''}"`,
        `"${a.createdAt || new Date().toISOString()}"`
      ].join(',');
    });

    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(','), ...rows].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `IGNITE_2026_Delegates_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      
      {/* Top Header & Quick Metrics */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-['Outfit']">
              Registered Delegates
            </h2>
            <span className="px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200 text-xs font-bold">
              Live Roster
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Delegate directory showing names, contact email, phone, age, city, and state.
          </p>
        </div>

        <div className="flex items-center gap-3 self-start md:self-auto">
          <button
            onClick={handleExportCSV}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 text-xs sm:text-sm font-semibold border border-slate-200 transition-all shadow-sm cursor-pointer"
          >
            <Download className="w-4 h-4 text-emerald-600" />
            <span>Export CSV</span>
          </button>

          <button
            onClick={onAddClick}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs sm:text-sm font-bold shadow-md shadow-indigo-100 transition-all cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>Register New</span>
          </button>
        </div>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between text-slate-500 text-xs mb-1">
            <span>Total Delegates</span>
            <Users className="w-4 h-4 text-indigo-600" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl sm:text-3xl font-black text-slate-900 font-['Outfit']">
              {stats.total}
            </span>
            <span className="text-xs text-slate-400">/ {CONFERENCE_INFO.attendeeCap} cap</span>
          </div>
          <div className="w-full bg-slate-100 h-1.5 rounded-full mt-3 overflow-hidden">
            <div 
              className="bg-indigo-600 h-full rounded-full transition-all duration-500" 
              style={{ width: `${Math.min((stats.total / CONFERENCE_INFO.attendeeCap) * 100, 100)}%` }}
            />
          </div>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between text-slate-500 text-xs mb-1">
            <span>States Represented</span>
            <MapPin className="w-4 h-4 text-rose-500" />
          </div>
          <span className="text-2xl sm:text-3xl font-black text-slate-900 font-['Outfit']">
            {stats.statesCovered}
          </span>
          <p className="text-[11px] text-slate-400 mt-2">Across the country</p>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between text-slate-500 text-xs mb-1">
            <span>Average Age</span>
            <Calendar className="w-4 h-4 text-amber-500" />
          </div>
          <span className="text-2xl sm:text-3xl font-black text-slate-900 font-['Outfit']">
            {stats.avgAge} yrs
          </span>
          <p className="text-[11px] text-slate-400 mt-2">Youth delegates</p>
        </div>
      </div>

      {/* Search & State Filter Toolbar */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
        
        {/* Search */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by name, contact, phone, city, or ID..."
            className="w-full bg-slate-50 text-slate-900 text-xs sm:text-sm rounded-xl pl-9 pr-4 py-2.5 border border-slate-200 focus:bg-white focus:border-indigo-600 focus:outline-none focus:ring-1 focus:ring-indigo-600 transition-all placeholder:text-slate-400"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-700 cursor-pointer"
            >
              Clear
            </button>
          )}
        </div>

        {/* State Filter */}
        <div className="flex items-center gap-2">
          <select
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
            className="bg-slate-50 text-slate-800 text-xs rounded-xl px-3 py-2.5 border border-slate-200 focus:bg-white focus:border-indigo-600 focus:outline-none cursor-pointer"
          >
            <option value="all">All States</option>
            {US_STATES.map(s => (
              <option key={s.code} value={s.code}>{s.name} ({s.code})</option>
            ))}
          </select>

          <button
            onClick={onResetDefaultAttendees}
            title="Reset to default sample delegates"
            className="px-3 py-2.5 rounded-xl bg-slate-100 text-slate-600 hover:text-slate-900 text-xs font-medium border border-slate-200 transition-colors cursor-pointer"
          >
            Reset
          </button>
        </div>

      </div>

      {/* Attendees Table */}
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-50 text-slate-500 uppercase text-[10px] tracking-wider border-b border-slate-200">
              <tr>
                <th className="py-3.5 px-4 font-bold">Delegate Name</th>
                <th className="py-3.5 px-4 font-bold">Contact (Email)</th>
                <th className="py-3.5 px-4 font-bold">Phone Number</th>
                <th className="py-3.5 px-4 font-bold">Age</th>
                <th className="py-3.5 px-4 font-bold">City, State</th>
                <th className="py-3.5 px-4 text-right font-bold">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredAttendees.length === 0 ? (
                <tr>
                  <td colSpan="6" className="py-12 text-center text-slate-400">
                    <p className="text-base font-semibold text-slate-600">No delegates found</p>
                    <p className="text-xs mt-1">Try adjusting your search query or state selection.</p>
                  </td>
                </tr>
              ) : (
                filteredAttendees.map((attendee) => {
                  const fullName = `${attendee.firstName || ''} ${attendee.lastName || ''}`.trim();

                  return (
                    <tr key={attendee.id} className="hover:bg-slate-50/80 transition-colors">
                      
                      {/* Name & ID */}
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-500 to-rose-500 p-[1.5px] flex-shrink-0 shadow-sm">
                            <div className="w-full h-full bg-white rounded-[9px] flex items-center justify-center font-bold text-indigo-700 text-xs">
                              {(attendee.firstName || 'A').charAt(0)}
                            </div>
                          </div>
                          <div>
                            <span className="font-bold text-slate-900 text-sm block">
                              {fullName}
                            </span>
                            <span className="font-mono text-[11px] text-amber-600 font-semibold">
                              {attendee.id}
                            </span>
                          </div>
                        </div>
                      </td>

                      {/* Contact Email */}
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-1.5 text-slate-700">
                          <Mail className="w-3.5 h-3.5 text-indigo-600 flex-shrink-0" />
                          <span className="truncate max-w-[200px]">{attendee.contact}</span>
                        </div>
                      </td>

                      {/* Phone */}
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-1.5 text-slate-700">
                          <Phone className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                          <span>{attendee.phone}</span>
                        </div>
                      </td>

                      {/* Age */}
                      <td className="py-4 px-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-100 text-slate-800 border border-slate-200">
                          {attendee.age} yrs
                        </span>
                      </td>

                      {/* City & State */}
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-1.5 text-slate-800">
                          <MapPin className="w-3.5 h-3.5 text-rose-500 flex-shrink-0" />
                          <span className="font-medium">{attendee.city}, <strong>{attendee.state}</strong></span>
                        </div>
                      </td>

                      {/* Delete Action */}
                      <td className="py-4 px-4 text-right">
                        <button
                          onClick={() => {
                            if (window.confirm(`Remove delegate ${fullName}?`)) {
                              onDeleteAttendee(attendee.id);
                            }
                          }}
                          className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-all cursor-pointer"
                          title="Delete delegate"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>

                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
