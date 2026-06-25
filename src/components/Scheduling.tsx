import React, { useState } from 'react';
import { Calendar as CalendarIcon, Clock, MapPin, Video, ChevronRight, CheckCircle2 } from 'lucide-react';

const Scheduling = () => {
  const [step, setView] = useState<'type' | 'dateTime' | 'confirm'>('type');
  const [appointmentType, setType] = useState<'telehealth' | 'pos' | null>(null);

  if (step === 'confirm') {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 size={48} />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Appointment Requested!</h2>
        <p className="text-gray-600 max-w-sm mb-8">
          Your {appointmentType === 'telehealth' ? 'Virtual' : 'In-Person'} session with Dr. Sarah Johnson is being processed.
        </p>
        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 w-full max-w-md text-left mb-8">
          <div className="flex justify-between mb-4 border-b border-gray-200 pb-4">
            <span className="text-gray-500">Date & Time</span>
            <span className="font-semibold text-gray-900">June 28, 2026 at 10:00 AM</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Provider</span>
            <span className="font-semibold text-gray-900">Dr. Sarah Johnson</span>
          </div>
        </div>
        <button className="text-purple-600 font-bold hover:underline">Add to Calendar</button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto py-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Schedule an Appointment</h2>
        <p className="text-gray-600">Select your preferred visit type to continue.</p>
      </div>

      {step === 'type' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SelectionCard 
            title="Virtual Visit"
            description="Secure video call from your home or office."
            icon={<Video className="text-purple-600" size={32} />}
            onClick={() => { setType('telehealth'); setView('dateTime'); }}
          />
          <SelectionCard 
            title="In-Person Visit"
            description="Visit us at our clinical location (Place of Service)."
            icon={<MapPin className="text-blue-600" size={32} />}
            onClick={() => { setType('pos'); setView('dateTime'); }}
          />
        </div>
      )}

      {step === 'dateTime' && (
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-sm">
            <h3 className="font-bold mb-4 flex items-center gap-2">
              <CalendarIcon size={20} className="text-purple-600" />
              Available Dates
            </h3>
            <div className="grid grid-cols-4 gap-2">
              {['Mon 26', 'Tue 27', 'Wed 28', 'Thu 29'].map((date) => (
                <button key={date} className={`p-3 rounded-xl border text-sm font-medium transition-all ${date === 'Wed 28' ? 'bg-purple-600 text-white border-purple-600' : 'bg-white text-gray-600 border-gray-200 hover:border-purple-300'}`}>
                  {date}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-sm">
            <h3 className="font-bold mb-4 flex items-center gap-2">
              <Clock size={20} className="text-purple-600" />
              Available Times
            </h3>
            <div className="grid grid-cols-3 gap-2">
              {['09:00 AM', '10:00 AM', '11:30 AM', '02:00 PM', '04:15 PM'].map((time) => (
                <button 
                  key={time} 
                  onClick={() => setView('confirm')}
                  className="p-3 rounded-xl border border-gray-200 text-sm font-medium hover:border-purple-600 hover:text-purple-600 transition-all"
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
          
          <button 
            onClick={() => setView('type')}
            className="text-gray-500 font-medium hover:text-gray-700"
          >
            ← Back to visit types
          </button>
        </div>
      )}
    </div>
  );
};

const SelectionCard = ({ title, description, icon, onClick }: any) => (
  <button 
    onClick={onClick}
    className="bg-white p-8 rounded-3xl border-2 border-gray-100 hover:border-purple-600 hover:shadow-xl hover:shadow-purple-100 transition-all text-left group"
  >
    <div className="mb-6 p-4 bg-gray-50 rounded-2xl group-hover:bg-purple-50 transition-colors w-fit">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-500 text-sm leading-relaxed mb-6">{description}</p>
    <div className="flex items-center text-purple-600 font-bold text-sm">
      Select 
      <ChevronRight size={16} />
    </div>
  </button>
);

export default Scheduling;
