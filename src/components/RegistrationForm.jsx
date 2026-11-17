import React, { useState } from 'react';
import { User, Phone, Calendar, MapPin, ArrowRight, CheckCircle2 } from 'lucide-react';
import { US_STATES } from '../data/conferenceData';

const SHIRT_SIZES = ['XS', 'S', 'M', 'L', 'XL', '2XL'];

export default function RegistrationForm({ formData, setFormData, onSubmit, isSubmitting, submitError }) {
  const [errors, setErrors] = useState({});

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => {
        const updated = { ...prev };
        delete updated[field];
        return updated;
      });
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.firstName?.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName?.trim()) newErrors.lastName = "Last name is required";
    
    if (!formData.shirtSize) {
      newErrors.shirtSize = "Please select a shirt size";
    }

    if (!formData.phone?.trim()) {
      newErrors.phone = "Phone number is required";
    }

    const ageNum = Number(formData.age);
    if (!formData.age) {
      newErrors.age = "Age is required";
    } else if (isNaN(ageNum) || ageNum < 10 || ageNum > 35) {
      newErrors.age = "Please enter a valid age (10–35)";
    }

    if (!formData.city?.trim()) newErrors.city = "City is required";
    if (!formData.state?.trim()) newErrors.state = "Please select a state";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSubmit();
    }
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl shadow-slate-200/50 relative">
      
      {/* Form Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-100 gap-3">
        <div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-['Outfit']">
            Catholic Youth Conference 2027 Registration
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Fill in your details below to register for CYC 2027.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-5">
        
        {/* Names: First Name & Last Name */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              First Name <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <input
                type="text"
                value={formData.firstName || ''}
                onChange={(e) => handleInputChange('firstName', e.target.value)}
                
                className={`w-full bg-slate-50 text-slate-900 text-sm rounded-xl px-3.5 py-2.5 border ${
                  errors.firstName ? 'border-rose-400 ring-1 ring-rose-400 bg-rose-50/30' : 'border-slate-200 focus:border-indigo-600 focus:bg-white'
                } focus:outline-none focus:ring-1 focus:ring-indigo-600 transition-all`}
              />
            </div>
            {errors.firstName && <p className="text-rose-500 text-xs mt-1">{errors.firstName}</p>}
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Last Name <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <input
                type="text"
                value={formData.lastName || ''}
                onChange={(e) => handleInputChange('lastName', e.target.value)}
            
                className={`w-full bg-slate-50 text-slate-900 text-sm rounded-xl px-3.5 py-2.5 border ${
                  errors.lastName ? 'border-rose-400 ring-1 ring-rose-400 bg-rose-50/30' : 'border-slate-200 focus:border-indigo-600 focus:bg-white'
                } focus:outline-none focus:ring-1 focus:ring-indigo-600 transition-all`}
              />
            </div>
            {errors.lastName && <p className="text-rose-500 text-xs mt-1">{errors.lastName}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Shirt Size <span className="text-rose-500">*</span>
            </label>
            <select
              value={formData.shirtSize || ''}
              onChange={(e) => handleInputChange('shirtSize', e.target.value)}
              className={`w-full bg-slate-50 text-slate-900 text-sm rounded-xl px-3 py-2.5 border ${
                errors.shirtSize ? 'border-rose-400 ring-1 ring-rose-400 bg-rose-50/30' : 'border-slate-200 focus:border-indigo-600 focus:bg-white'
              } focus:outline-none focus:ring-1 focus:ring-indigo-600 transition-all cursor-pointer`}
            >
              <option value="" disabled>Select size...</option>
              {SHIRT_SIZES.map((size) => (
                <option key={size} value={size}>{size}</option>
              ))}
            </select>
            {errors.shirtSize && <p className="text-rose-500 text-xs mt-1">{errors.shirtSize}</p>}
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5 flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-emerald-600" />
              <span>Phone Number <span className="text-rose-500">*</span></span>
            </label>
            <input
              type="tel"
              value={formData.phone || ''}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              className={`w-full bg-slate-50 text-slate-900 text-sm rounded-xl px-3.5 py-2.5 border ${
                errors.phone ? 'border-rose-400 ring-1 ring-rose-400 bg-rose-50/30' : 'border-slate-200 focus:border-indigo-600 focus:bg-white'
              } focus:outline-none focus:ring-1 focus:ring-indigo-600 transition-all`}
            />
            {errors.phone && <p className="text-rose-500 text-xs mt-1">{errors.phone}</p>}
          </div>
        </div>

        {/* Age, City, and State with Selection */}
        <div className="grid grid-cols-1 sm:grid-cols-6 gap-4">
          
          {/* Age */}
          <div className="sm:col-span-2">
            <label className="block text-xs font-semibold text-slate-700 mb-1.5 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-amber-600" />
              <span>Age <span className="text-rose-500">*</span></span>
            </label>
            <input
              type="number"
              min="10"
              max="35"
              value={formData.age || ''}
              onChange={(e) => handleInputChange('age', e.target.value)}
              className={`w-full bg-slate-50 text-slate-900 text-sm rounded-xl px-3.5 py-2.5 border ${
                errors.age ? 'border-rose-400 ring-1 ring-rose-400 bg-rose-50/30' : 'border-slate-200 focus:border-indigo-600 focus:bg-white'
              } focus:outline-none focus:ring-1 focus:ring-indigo-600 transition-all`}
            />
            {errors.age && <p className="text-rose-500 text-xs mt-1">{errors.age}</p>}
          </div>

          {/* City */}
          <div className="sm:col-span-2">
            <label className="block text-xs font-semibold text-slate-700 mb-1.5 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-rose-500" />
              <span>City <span className="text-rose-500">*</span></span>
            </label>
            <input
              type="text"
              value={formData.city || ''}
              onChange={(e) => handleInputChange('city', e.target.value)}
              className={`w-full bg-slate-50 text-slate-900 text-sm rounded-xl px-3.5 py-2.5 border ${
                errors.city ? 'border-rose-400 ring-1 ring-rose-400 bg-rose-50/30' : 'border-slate-200 focus:border-indigo-600 focus:bg-white'
              } focus:outline-none focus:ring-1 focus:ring-indigo-600 transition-all`}
            />
            {errors.city && <p className="text-rose-500 text-xs mt-1">{errors.city}</p>}
          </div>

          {/* State with Selection */}
          <div className="sm:col-span-2">
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              State <span className="text-rose-500">*</span>
            </label>
            <select
              value={formData.state || ''}
              onChange={(e) => handleInputChange('state', e.target.value)}
              className={`w-full bg-slate-50 text-slate-900 text-sm rounded-xl px-3 py-2.5 border ${
                errors.state ? 'border-rose-400 ring-1 ring-rose-400 bg-rose-50/30' : 'border-slate-200 focus:border-indigo-600 focus:bg-white'
              } focus:outline-none focus:ring-1 focus:ring-indigo-600 transition-all cursor-pointer`}
            >
              <option value="" disabled className="text-slate-400">
                Select State...
              </option>
              {US_STATES.map((s) => (
                <option key={s.code} value={s.code} className="text-slate-900">
                  {s.name} ({s.code})
                </option>
              ))}
            </select>
            {errors.state && <p className="text-rose-500 text-xs mt-1">{errors.state}</p>}
          </div>

        </div>

        {/* Submit Button */}
        <div className="pt-4 border-t border-slate-100 space-y-3">
          {submitError && (
            <p className="text-rose-600 text-sm font-medium">{submitError}</p>
          )}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-indigo-600 via-indigo-600 to-rose-500 hover:from-indigo-700 hover:to-rose-600 shadow-lg shadow-indigo-200 hover:shadow-indigo-300 transition-all transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 cursor-pointer"
          >
            {isSubmitting ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>Submitting Registration...</span>
              </>
            ) : (
              <>
                <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                <span>Complete Registration</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </>
            )}
          </button>
        </div>

      </form>
    </div>
  );
}
