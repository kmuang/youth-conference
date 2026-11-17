import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import RegistrationForm from './components/RegistrationForm';
import ConfirmationModal from './components/ConfirmationModal';
import ScheduleView from './components/ScheduleView';
import FAQSection from './components/FAQSection';
const STORAGE_KEY = 'cyc_2027_registrations_v1';
const FORMSPREE_URL = 'https://formspree.io/f/myewwgvd';

const initialFormData = {
  firstName: '',
  lastName: '',
  shirtSize: '',
  phone: '',
  age: '',
  city: '',
  state: ''
};

export default function App() {
  const [activeTab, setActiveTab] = useState('register');
  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [confirmedAttendee, setConfirmedAttendee] = useState(null);
  const formRef = useRef(null);

  const scrollToForm = () => {
    setActiveTab('register');
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
  };

  const handleRegistrationSubmit = async () => {
    setIsSubmitting(true);
    setSubmitError('');

    const generatedId = `CYC-2027-${Math.floor(1000 + Math.random() * 9000)}`;
    const newAttendee = {
      ...formData,
      id: generatedId,
      createdAt: new Date().toISOString()
    };

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          firstName: newAttendee.firstName,
          lastName: newAttendee.lastName,
          shirtSize: newAttendee.shirtSize,
          phone: newAttendee.phone,
          age: newAttendee.age,
          city: newAttendee.city,
          state: newAttendee.state,
          registrationId: newAttendee.id,
          _subject: `CYC 2027 Registration — ${newAttendee.firstName} ${newAttendee.lastName}`
        })
      });

      if (!response.ok) {
        throw new Error('Formspree rejected the submission');
      }

      try {
        const existing = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
        localStorage.setItem(STORAGE_KEY, JSON.stringify([newAttendee, ...existing]));
      } catch (e) {
        console.error('Storage save failed', e);
      }

      setConfirmedAttendee(newAttendee);
    } catch (e) {
      console.error('Registration submit failed', e);
      setSubmitError('Registration could not be sent. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleRegisterAnother = () => {
    setFormData(initialFormData);
    setSubmitError('');
    setConfirmedAttendee(null);
    setActiveTab('register');
    scrollToForm();
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
      
      {/* Top Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onRegisterClick={scrollToForm}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        
        {/* Hero Section */}
        {activeTab === 'register' && (
          <Hero
            onRegisterClick={scrollToForm}
            onExploreSchedule={() => setActiveTab('schedule')}
          />
        )}

        {/* View Switcher Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          
          {activeTab === 'register' && (
            <div ref={formRef} className="max-w-3xl mx-auto">
              <RegistrationForm
                formData={formData}
                setFormData={setFormData}
                onSubmit={handleRegistrationSubmit}
                isSubmitting={isSubmitting}
                submitError={submitError}
              />
            </div>
          )}

          {/* TAB 2: Schedule */}
          {activeTab === 'schedule' && (
            <div className="py-6">
              <ScheduleView onRegisterClick={scrollToForm} />
            </div>
          )}

          {/* TAB 3: FAQ */}
          {activeTab === 'faq' && (
            <div className="py-6">
              <FAQSection onRegisterClick={scrollToForm} />
            </div>
          )}

        </div>
      </main>

      {/* Confirmation Modal */}
      {confirmedAttendee && (
        <ConfirmationModal
          attendee={confirmedAttendee}
          onClose={() => setConfirmedAttendee(null)}
          onRegisterAnother={handleRegisterAnother}
        />
      )}

    </div>
  );
}
