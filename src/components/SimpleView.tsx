
import { Heart, Brain, Shield, Zap, Activity, Info, Users, Sparkles } from 'lucide-react';

const SimpleView = ({ onToggle, userData, isPremium }: { onToggle: () => void, userData?: any, isPremium?: boolean }) => {
  const habits = [
    { title: "Fuel", habit: "Eat protein before carbs in every meal today.", icon: <Activity className="text-orange-500" /> },
    { title: "Sleep", habit: "No screens 60 minutes before your target bedtime.", icon: <Zap className="text-yellow-500" /> },
    { title: "Stress", habit: "Take 3 minutes for box breathing at 2 PM.", icon: <Brain className="text-blue-500" /> },
  ];

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
        <div className="w-32 h-32 bg-green-100 rounded-full flex items-center justify-center text-green-600 shadow-inner">
          <Heart size={64} fill="currentColor" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h2 className="text-2xl font-bold text-gray-900">You're doing great, {userData?.name || 'Alex'}!</h2>
            <Sparkles size={20} className="text-yellow-500 fill-current" />
          </div>
          <p className="text-gray-600 text-lg">All your vital signs are stable and you're on track with your foundational habits.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <HealthCard 
          title="How You Feel" 
          icon={<Brain className="text-blue-500" />} 
          status="Relaxed" 
          color="bg-blue-50"
          tooltip="Based on your daily mood check-ins."
        />
        <HealthCard 
          title="Your Body" 
          icon={<Activity className="text-orange-500" />} 
          status="Strong" 
          color="bg-orange-50"
          tooltip="Based on your activity and step count."
        />
        <HealthCard 
          title="Your Fuel" 
          icon={<Zap className="text-purple-500" />} 
          status="Stable" 
          color="bg-purple-50"
          tooltip="Based on your blood sugar trends."
        />
        <HealthCard 
          title="Your Sleep" 
          icon={<Activity className="text-indigo-500" />} 
          status="Rested" 
          color="bg-indigo-50"
          tooltip="Based on your deep sleep time."
        />
        <HealthCard 
          title="Your Community" 
          icon={<Users className="text-green-500" />} 
          status="Connected" 
          color="bg-green-50"
          tooltip="Based on your social interactions."
        />
        <HealthCard 
          title="Safety" 
          icon={<Shield className="text-red-500" />} 
          status="Protected" 
          color="bg-red-50"
          tooltip="Based on your preventative care screenings."
        />
      </div>

      <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
        <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
          Suggested for You
          <span className="text-xs font-medium text-purple-600 bg-purple-50 px-2 py-0.5 rounded uppercase tracking-wider">Today's Habits</span>
        </h3>
        <div className="space-y-4">
          {habits.map((habit, i) => (
            <div key={i} className="flex items-center gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100">
              <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center">
                {habit.icon}
              </div>
              <div className="flex-1">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">{habit.title}</p>
                <p className="font-medium text-gray-800">{habit.habit}</p>
              </div>
              <button className="text-sm font-bold text-purple-600 px-4 py-2 bg-purple-50 rounded-lg">Check off</button>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-purple-600 p-8 rounded-3xl text-white shadow-xl shadow-purple-200 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl font-bold mb-2">Upcoming Appointment</h3>
          <p className="text-purple-100 text-lg">Dr. Sarah Johnson is looking forward to seeing you tomorrow at 10:00 AM.</p>
        </div>
        <button className="bg-white text-purple-600 px-8 py-3 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all whitespace-nowrap">
          View Details
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
