import { useState, useEffect } from 'react';
import { 
  LayoutDashboard, 
  Calendar, 
  MessageSquare, 
  Settings, 
  LogOut,
  TrendingUp,
  User,
  Bell,
  EyeOff,
  PlusCircle,
  ShieldCheck,
  Zap,
  BookOpen,
  Activity
} from 'lucide-react';
import GoalWheelControl from './GoalWheelControl';
import SimpleView from './SimpleView';
import Scheduling from './Scheduling';

interface DashboardProps {
  onTelehealth: () => void;
  userData?: {
    name: string;
    signupPath: 'provider' | 'b2c';
    clinicId?: string;
    subscriptionTier?: 'Standard' | 'Clinical' | 'Premium';
    status?: 'Pending' | 'Active';
  };
}

const Dashboard = ({ onTelehealth, userData }: DashboardProps) => {
  const [uiMode, setUiMode] = useState<'care-compass' | 'power-wellness'>('care-compass');
  const [activeTab, setActiveTab] = useState<'overview' | 'appointments' | 'protocols' | 'library'>('overview');

  const isPremium = userData?.subscriptionTier === 'Premium';
  const isB2C = userData?.signupPath === 'b2c';

  // Determine initial UI mode based on subscription tier
  useEffect(() => {
    if (isPremium) {
      setUiMode('power-wellness');
    } else {
      setUiMode('care-compass');
    }
  }, [userData, isPremium]);

  if (uiMode === 'care-compass') {
    return (
      <SimpleView 
        userData={userData} 
        onToggle={() => isPremium ? setUiMode('power-wellness') : null} 
        isPremium={isPremium}
      />
    );
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-6 flex items-center gap-2">
          <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white">
            <TrendingUp size={18} />
          </div>
          <span className="text-xl font-bold">BioSync</span>
        </div>
        
        <nav className="flex-1 px-4 py-4 space-y-1">
          <button 
            onClick={() => setActiveTab('overview')}
            className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg font-medium transition-colors ${activeTab === 'overview' ? 'bg-purple-50 text-purple-700' : 'text-gray-600 hover:bg-gray-50'}`}
          >
            <LayoutDashboard size={20} />
            Overview
          </button>
          <button 
            onClick={() => setActiveTab('appointments')}
            className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg font-medium transition-colors ${activeTab === 'appointments' ? 'bg-purple-50 text-purple-700' : 'text-gray-600 hover:bg-gray-50'}`}
          >
            <Calendar size={20} />
            Appointments
          </button>

          {isPremium && (
            <>
              <button 
                onClick={() => setActiveTab('protocols')}
                className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg font-medium transition-colors ${activeTab === 'protocols' ? 'bg-purple-50 text-purple-700' : 'text-gray-600 hover:bg-gray-50'}`}
              >
                <Zap size={20} />
                Protocols
              </button>
              <button 
                onClick={() => setActiveTab('library')}
                className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg font-medium transition-colors ${activeTab === 'library' ? 'bg-purple-50 text-purple-700' : 'text-gray-600 hover:bg-gray-50'}`}
              >
                <BookOpen size={20} />
                Insight Library
              </button>
            </>
          )}

          <a href="#" className="flex items-center gap-3 px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
            <MessageSquare size={20} />
            Messages
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
            <User size={20} />
            Health Profile
          </a>
          
          {isB2C && (
            <button className="w-full flex items-center gap-3 px-4 py-2 text-purple-600 hover:bg-purple-50 rounded-lg font-bold border-t border-gray-100 mt-4 pt-4">
              <PlusCircle size={20} />
              Link Provider
            </button>
          )}
        </nav>

        <div className="p-4 border-t border-gray-200">
          <a href="#" className="flex items-center gap-3 px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
            <Settings size={20} />
            Settings
          </a>
          <button className="w-full flex items-center gap-3 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg mt-1 text-left">
            <LogOut size={20} />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8 sticky top-0 z-10">
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-semibold">Welcome back, {userData?.name || 'Alex'}</h1>
            <button 
              onClick={() => setUiMode('care-compass')}
              className="flex items-center gap-2 text-xs font-medium text-purple-600 bg-purple-50 px-3 py-1.5 rounded-full transition-all border border-purple-200"
            >
              <EyeOff size={14} />
              Switch to Care Compass
            </button>
            {userData?.clinicId && (
              <div className="flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-blue-600 rounded-full border border-blue-100 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck size={14} />
                Clinic Verified
              </div>
            )}
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 text-gray-400 hover:text-gray-600 relative">
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold text-xs">
              {(userData?.name || 'A')[0]}
            </div>
          </div>
        </header>

        <div className="p-8">
          {activeTab === 'overview' ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Goal Wheel Card */}
              <div className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-lg font-bold">Health Goal Wheel</h2>
                    <p className="text-sm text-gray-500">{isB2C ? 'Self-Guided Progress Tracking' : 'Clinical Health Index'}</p>
                  </div>
                  <span className="text-sm text-purple-600 font-medium">Last synced: Just now</span>
                </div>
                <div className="flex items-center justify-center">
                  <GoalWheelControl />
                </div>
              </div>

              {/* Side Stats */}
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
                  <h3 className="text-sm font-medium text-gray-500 mb-2">
                    {isB2C ? 'Optimization Score' : 'Clinical Outlook'}
                  </h3>
                  <div className="flex items-end gap-2">
                    <span className={`text-3xl font-bold ${isB2C ? 'text-purple-600' : 'text-green-600'}`}>
                      {isB2C ? '74%' : 'Stable'}
                    </span>
                    <span className="text-sm text-gray-400 mb-1">↑ 4% this month</span>
                  </div>
                </div>
                
                {isPremium && (
                  <div className="bg-gradient-to-br from-indigo-900 to-purple-900 p-6 rounded-2xl shadow-sm text-white">
                    <div className="flex items-center gap-2 mb-4">
                      <TrendingUp size={18} className="text-purple-300" />
                      <h3 className="font-bold text-purple-100 uppercase text-xs tracking-widest">Advanced Correlations</h3>
                    </div>
                    <p className="text-xs text-purple-200 mb-4 leading-relaxed">
                      Your <span className="text-white font-bold">Glucose Stability</span> is 14% higher on days where your <span className="text-white font-bold">Deep Sleep</span> exceeded 90 minutes.
                    </p>
                    <div className="flex gap-2">
                      <div className="flex-1 h-12 bg-white/10 rounded-lg flex flex-col items-center justify-center border border-white/10">
                        <span className="text-[10px] text-purple-300 uppercase font-bold">Sleep</span>
                        <span className="text-sm font-bold">92m</span>
                      </div>
                      <div className="flex-1 h-12 bg-white/10 rounded-lg flex flex-col items-center justify-center border border-white/10">
                        <span className="text-[10px] text-purple-300 uppercase font-bold">GMI</span>
                        <span className="text-sm font-bold">5.8%</span>
                      </div>
                    </div>
                  </div>
                )}
                
                {!isB2C && (
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
                    <h3 className="text-sm font-medium text-gray-500 mb-4">Upcoming Appointment</h3>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Calendar size={20} />
                      </div>
                      <div>
                        <p className="font-semibold">Dr. Sarah Johnson</p>
                        <p className="text-sm text-gray-500">Chronic Care Review</p>
                        <button 
                          onClick={onTelehealth}
                          className="text-sm text-purple-600 font-bold mt-2 hover:text-purple-700 transition-colors flex items-center gap-1"
                        >
                          Join Video Call
                          <div className="w-2 h-2 bg-purple-600 rounded-full animate-pulse" />
                        </button>
                        <p className="text-xs text-gray-400 mt-1">Tomorrow, 10:00 AM</p>
                      </div>
                    </div>
                  </div>
                )}

                {isPremium && (
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-purple-200">
                    <div className="flex items-center gap-2 mb-4">
                      <Zap size={18} className="text-purple-600" />
                      <h3 className="font-bold">Active Protocols</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600 font-medium">Glucose Stabilizer</span>
                        <span className="text-purple-600 font-bold">Day 3/14</span>
                      </div>
                      <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-purple-600 h-full w-[21%]"></div>
                      </div>
                      <div className="flex items-center justify-between text-sm pt-1">
                        <span className="text-gray-600 font-medium">Sleep Reset</span>
                        <span className="text-purple-600 font-bold">Day 7/21</span>
                      </div>
                      <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-purple-600 h-full w-[33%]"></div>
                      </div>
                    </div>
                  </div>
                )}

                {isB2C ? (
                  <div className="bg-gray-900 p-6 rounded-2xl shadow-sm text-white relative overflow-hidden">
                    <div className="relative z-10">
                      <h3 className="font-bold text-lg mb-2">Device Sync</h3>
                      <p className="text-gray-400 text-sm mb-4">Connected to Apple Health & Oura. Next sync in 10 mins.</p>
                      <button className="bg-white text-gray-900 px-4 py-2 rounded-lg text-sm font-bold">Manage Devices</button>
                    </div>
                  </div>
                ) : (
                  <div className="bg-purple-600 p-6 rounded-2xl shadow-sm text-white relative overflow-hidden">
                    <div className="relative z-10">
                      <h3 className="font-bold text-lg mb-2">CCM Tracking</h3>
                      <p className="text-purple-100 text-sm mb-4">You have 12 minutes of care coordination logged this month.</p>
                      <button className="bg-white text-purple-600 px-4 py-2 rounded-lg text-sm font-bold">View History</button>
                    </div>
                    <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-purple-500 rounded-full opacity-50"></div>
                  </div>
                )}

                {isB2C && (
                  <div className="bg-gradient-to-br from-purple-100 to-blue-100 p-6 rounded-2xl border border-purple-200">
                    <h3 className="font-bold text-purple-900 mb-1 italic">BioSync Pro</h3>
                    <p className="text-xs text-purple-700 mb-3 font-medium uppercase tracking-wider">Premium Active</p>
                    <p className="text-sm text-gray-600 mb-4 font-medium">Unlock deeper insights with clinical oversight and direct messaging.</p>
                    <button 
  onClick={() => window.open('https://buy.stripe.com/fZufZh2gR0YRavw2fT3AY00', '_blank')}
  className="w-full py-2 bg-white text-purple-600 rounded-lg text-sm font-bold shadow-sm border border-purple-200"
>
  Review Plan
</button>
                  </div>
                )}
              </div>
            </div>
          ) : activeTab === 'appointments' ? (
            <Scheduling />
          ) : activeTab === 'protocols' ? (
            <div className="max-w-4xl space-y-6">
              <h2 className="text-2xl font-bold">Biohacking Protocol Library</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ProtocolCard 
                  title="Glucose Stabilizer" 
                  duration="14 Days" 
                  level="Foundation" 
                  description="Optimize your metabolic fuel through meal sequencing and timing."
                />
                <ProtocolCard 
                  title="HRV Recovery Boost" 
                  duration="21 Days" 
                  level="Intermediate" 
                  description="Maximize your autonomic flexibility with progressive biofeedback."
                />
                <ProtocolCard 
                  title="Zone 2 Builder" 
                  duration="28 Days" 
                  level="Intermediate" 
                  description="Build your aerobic base and mitochondrial health with HR tracking."
                />
                <ProtocolCard 
                  title="Sleep Architecture Reset" 
                  duration="14 Days" 
                  level="Foundation" 
                  description="Fine-tune your circadian rhythm for deeper REM and restorative sleep."
                />
              </div>
            </div>
          ) : (
            <div className="max-w-4xl space-y-6">
              <h2 className="text-2xl font-bold">Insight Library</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                    <BookOpen size={24} />
                  </div>
                  <h3 className="font-bold text-lg mb-2">The Glucose Rollercoaster</h3>
                  <p className="text-gray-500 text-sm mb-4">Understanding postprandial excursions and why they impact your energy stability.</p>
                  <button className="text-purple-600 font-bold text-sm">Read Article →</button>
                </div>
                <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                  <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-4">
                    <Activity size={24} />
                  </div>
                  <h3 className="font-bold text-lg mb-2">HRV Deep Dive</h3>
                  <p className="text-gray-500 text-sm mb-4">RMSSD vs SDNN: Which metric should you track for daily recovery baselines?</p>
                  <button className="text-purple-600 font-bold text-sm">Read Article →</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

const ProtocolCard = ({ title, duration, level, description }: any) => (
  <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:border-purple-200 transition-all group">
    <div className="flex items-center justify-between mb-4">
      <span className="px-3 py-1 bg-purple-50 text-purple-600 text-[10px] font-bold uppercase tracking-widest rounded-full">{level}</span>
      <span className="text-xs font-medium text-gray-400">{duration}</span>
    </div>
    <h3 className="font-bold text-lg mb-2 group-hover:text-purple-600 transition-colors">{title}</h3>
    <p className="text-gray-500 text-sm mb-6">{description}</p>
    <button className="w-full py-2 bg-gray-50 text-gray-600 rounded-xl text-sm font-bold hover:bg-purple-600 hover:text-white transition-all">Start Protocol</button>
  </div>
);

export default Dashboard;
