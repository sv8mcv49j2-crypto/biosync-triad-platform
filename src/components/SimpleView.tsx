import React from 'react';
import { Heart, Brain, Shield, Zap, Activity, Info } from 'lucide-react';

const SimpleView = ({ onToggle, userData, isPremium }: { onToggle: () => void, userData?: any, isPremium?: boolean }) => {
  return (
    <div className="p-8 max-w-4xl mx-auto space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900">Care Compass</h1>
          <p className="text-gray-500">Your Foundational Wellness Overview</p>
        </div>
        {isPremium ? (
          <button 
            onClick={onToggle}
            className="text-sm font-medium text-purple-600 bg-purple-50 px-4 py-2 rounded-full hover:bg-purple-100 transition-all border border-purple-200"
          >
            Switch to Power Wellness
          </button>
        ) : (
          <div className="flex flex-col items-end">
            <span className="text-[10px] text-gray-400 uppercase font-bold tracking-widest mb-1">Current Tier</span>
            <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              {userData?.subscriptionTier || 'Standard'} Mode
            </span>
          </div>
        )}
      </div>

      <div className="bg-white p-8 rounded-3xl shadow-sm border border-purple-100 flex items-center gap-8">
        <div className="w-32 h-32 bg-green-100 rounded-full flex items-center justify-center text-green-600">
          <Heart size={64} fill="currentColor" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">You're doing great, {userData?.name || 'Alex'}!</h2>
          <p className="text-gray-600 text-lg">All your vital signs are stable and you've completed your daily goals.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <HealthCard 
          title="How you feel" 
          icon={<Brain className="text-blue-500" />} 
          status="Happy & Relaxed" 
          color="bg-blue-50"
          tooltip="Your mental resilience score is based on your recent check-ins."
        />
        <HealthCard 
          title="Your Body" 
          icon={<Activity className="text-orange-500" />} 
          status="Active & Strong" 
          color="bg-orange-50"
          tooltip="Physical optimization includes your steps and heart rate."
        />
        <HealthCard 
          title="Safety" 
          icon={<Shield className="text-green-500" />} 
          status="Fully Protected" 
          color="bg-green-50"
          tooltip="Preventative care ensures you stay ahead of health issues."
        />
        <HealthCard 
          title="Energy" 
          icon={<Zap className="text-yellow-500" />} 
          status="Charging Up" 
          color="bg-yellow-50"
          tooltip="Acute care markers track your immediate recovery energy."
        />
      </div>

      <div className="bg-purple-600 p-8 rounded-3xl text-white shadow-xl shadow-purple-200">
        <h3 className="text-xl font-bold mb-4">Next Step</h3>
        <p className="text-purple-100 mb-6 text-lg">You have a friendly chat scheduled with Dr. Sarah Johnson tomorrow morning.</p>
        <button className="bg-white text-purple-600 px-8 py-3 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all">
          View Appointment
        </button>
      </div>
    </div>
  );
};

const HealthCard = ({ title, icon, status, color, tooltip }: any) => (
  <div className={`p-6 rounded-3xl ${color} border border-white/50 shadow-sm relative group`}>
    <div className="flex items-center justify-between mb-4">
      <div className="p-3 bg-white rounded-2xl shadow-sm">
        {icon}
      </div>
      <div className="relative">
        <Info size={18} className="text-gray-400 cursor-help" />
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 bg-gray-900 text-white text-[10px] rounded shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
          {tooltip}
        </div>
      </div>
    </div>
    <p className="text-sm font-medium text-gray-500 mb-1">{title}</p>
    <p className="text-xl font-bold text-gray-900">{status}</p>
  </div>
);

export default SimpleView;
