import { useState, useEffect } from 'react';
import { 
  Users, 
  Clock, 
  FileText, 
  AlertCircle, 
  Search, 
  Filter, 
  ArrowUpRight, 
  ArrowDownRight,
  Play,
  Pause,
  Save,
  Download,
  LayoutDashboard,
  Settings,
  LogOut,
  Bell
} from 'lucide-react';
import GoalWheel from './GoalWheel';

// Mock Patient Data
const MOCK_PATIENTS = [
  { 
    id: '1', 
    name: 'J. Doe', 
    score: 62, 
    trend: -4, 
    lastActivity: '2 days ago', 
    ccmEligible: true, 
    ccmTime: 18, 
    nextAction: 'Review glucose trends',
    conditions: ['T2DM (E11.9)', 'Hypertension (I10)'],
    activeProtocols: ['Glucose Stabilizer (d3)', 'Sleep Reset (d7)']
  },
  { 
    id: '2', 
    name: 'M. Smith', 
    score: 78, 
    trend: 6, 
    lastActivity: 'Today', 
    ccmEligible: true, 
    ccmTime: 24, 
    nextAction: 'Protocol complete — summary',
    conditions: ['Metabolic Syndrome'],
    activeProtocols: ['Zone 2 Builder']
  },
  { 
    id: '3', 
    name: 'L. Chen', 
    score: 45, 
    trend: -12, 
    lastActivity: '5 days ago', 
    ccmEligible: true, 
    ccmTime: 8, 
    nextAction: 'ALERT: HRV crash',
    conditions: ['Anxiety (F41.1)', 'Insomnia'],
    activeProtocols: ['HRV Recovery Boost']
  },
];

const ProviderDashboard = () => {
  const [selectedPatient, setSelectedPatient] = useState<any>(null);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0); // in seconds
  const [monthlyTotal, setMonthlyTotal] = useState(18); // mock monthly total for selected patient

  useEffect(() => {
    let interval: any;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setElapsedTime(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handlePatientSelect = (patient: any) => {
    setSelectedPatient(patient);
    setElapsedTime(0);
    setIsTimerRunning(false);
    setMonthlyTotal(patient.ccmTime);
  };

  const [activities, setActivities] = useState<string[]>([]);

  const handleAction = (type: string) => {
    if (!isTimerRunning) setIsTimerRunning(true);
    setActivities(prev => [type, ...prev]);
    // Simulate adding time based on Aria's rules
    if (type === 'Pillar Review') setMonthlyTotal(prev => prev + 4);
    if (type === 'Trend Analysis') setMonthlyTotal(prev => prev + 3);
    if (type === 'Care Plan Update') setMonthlyTotal(prev => prev + 5);
    if (type === 'Patient Messaging') setMonthlyTotal(prev => prev + 1);
  };

  return (
    <div className="flex h-screen bg-gray-50 text-gray-900 overflow-hidden font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white flex flex-col">
        <div className="p-6 flex items-center gap-3">
          <div className="w-10 h-10 bg-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-900/20">
            <LayoutDashboard size={24} />
          </div>
          <div>
            <span className="text-xl font-bold block leading-none">BioSync</span>
            <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Provider Pro</span>
          </div>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2">
          <button className="w-full flex items-center gap-3 px-4 py-2.5 bg-slate-800 rounded-lg font-medium text-purple-400 transition-all border border-slate-700/50">
            <Users size={20} />
            Patient Panel
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-2.5 text-slate-400 hover:bg-slate-800 hover:text-white rounded-lg transition-all font-medium">
            <Clock size={20} />
            CCM Billing
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-2.5 text-slate-400 hover:bg-slate-800 hover:text-white rounded-lg transition-all font-medium">
            <FileText size={20} />
            Reports
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-2.5 text-slate-400 hover:bg-slate-800 hover:text-white rounded-lg transition-all font-medium">
            <Settings size={20} />
            Clinic Settings
          </button>
        </nav>

        <div className="p-4 border-t border-slate-800 space-y-4">
          <div className="flex items-center gap-3 px-4">
            <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center font-bold text-white shadow-lg shadow-purple-500/20">
              IH
            </div>
            <div className="overflow-hidden">
              <p className="text-sm font-bold truncate">Ingrid Hinojosa</p>
              <p className="text-[10px] text-slate-500 uppercase font-bold tracking-tight">DNPc, APRN, FNPc</p>
            </div>
          </div>
          <button className="w-full flex items-center gap-3 px-4 py-2 text-slate-400 hover:text-red-400 transition-colors text-sm font-bold">
            <LogOut size={18} />
            Log Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-20 bg-white border-b border-gray-200 flex items-center justify-between px-8 shrink-0">
          <div className="flex items-center gap-4 flex-1 max-w-xl">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="text" 
                placeholder="Search patient panel by name, condition, or score..." 
                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-600 outline-none transition-all"
              />
            </div>
            <button className="p-2.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-500 hover:text-purple-600 transition-colors">
              <Filter size={20} />
            </button>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="flex flex-col items-end border-r border-gray-200 pr-6 mr-6">
              <span className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">NexEra Health</span>
              <span className="text-sm font-bold text-gray-600">Clinic Pilot Phase</span>
            </div>
            <button className="relative p-2.5 bg-gray-50 rounded-xl text-gray-500 hover:text-purple-600 transition-colors border border-gray-200">
              <Bell size={20} />
              <span className="absolute top-2.5 right-2.5 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white shadow-sm"></span>
            </button>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-hidden flex">
          {/* Patient List (Section 6.1) */}
          <div className={`w-full ${selectedPatient ? 'hidden lg:block lg:w-1/3 border-r border-gray-200 bg-white' : 'block bg-white'} overflow-y-auto`}>
            <div className="p-6">
              <h2 className="text-lg font-bold mb-6 flex items-center gap-2">
                Active Patient Panel
                <span className="px-2 py-0.5 bg-gray-100 text-gray-500 text-xs rounded-md font-bold">{MOCK_PATIENTS.length}</span>
              </h2>
              <div className="space-y-3">
                {MOCK_PATIENTS.map(patient => (
                  <button 
                    key={patient.id}
                    onClick={() => handlePatientSelect(patient)}
                    className={`w-full p-4 rounded-2xl border transition-all text-left group ${selectedPatient?.id === patient.id ? 'bg-purple-600 border-purple-600 shadow-lg shadow-purple-600/20 text-white' : 'bg-white border-gray-100 hover:border-purple-200 hover:bg-purple-50/30'}`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm ${selectedPatient?.id === patient.id ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-600'}`}>
                          {patient.name[0]}
                        </div>
                        <div>
                          <h3 className="font-bold">{patient.name}</h3>
                          <p className={`text-xs ${selectedPatient?.id === patient.id ? 'text-purple-100' : 'text-gray-400'}`}>{patient.lastActivity}</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-end">
                        <span className={`text-xl font-black ${selectedPatient?.id === patient.id ? 'text-white' : 'text-gray-900'}`}>{patient.score}</span>
                        <div className={`flex items-center text-[10px] font-bold ${patient.trend > 0 ? (selectedPatient?.id === patient.id ? 'text-green-300' : 'text-green-600') : (selectedPatient?.id === patient.id ? 'text-red-300' : 'text-red-600')}`}>
                          {patient.trend > 0 ? <ArrowUpRight size={10} /> : <ArrowDownRight size={10} />}
                          {Math.abs(patient.trend)}pts
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-current/10">
                      <div className="flex items-center justify-between text-xs font-bold uppercase tracking-tight opacity-70">
                        <span>CCM Timer</span>
                        <span>Next Action</span>
                      </div>
                      <div className="flex items-center justify-between mt-1">
                        <div className="flex items-center gap-1.5">
                          <div className={`w-2 h-2 rounded-full ${patient.ccmTime >= 20 ? 'bg-green-400' : 'bg-orange-400'}`}></div>
                          <span className="font-mono text-sm">{patient.ccmTime}m / 20m</span>
                        </div>
                        <div className="flex items-center gap-1 text-xs font-medium max-w-[120px] truncate">
                          {patient.nextAction.includes('ALERT') && <AlertCircle size={12} className={selectedPatient?.id === patient.id ? 'text-red-300' : 'text-red-500'} />}
                          {patient.nextAction}
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Patient Detail View (Section 6.2) */}
          {selectedPatient ? (
            <div className="flex-1 overflow-y-auto bg-gray-50 flex flex-col lg:flex-row">
              {/* Left: Goal Wheel */}
              <div className="lg:w-1/2 p-8 flex flex-col items-center justify-center bg-white border-r border-gray-200">
                <div className="w-full max-w-md">
                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <h2 className="text-2xl font-black">{selectedPatient.name}</h2>
                      <p className="text-gray-500 font-medium">Health Status Overview</p>
                    </div>
                    <div className="text-right">
                      <span className="text-4xl font-black text-purple-600">{selectedPatient.score}</span>
                      <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">BioSync Score</p>
                    </div>
                  </div>

                  <div className="aspect-square bg-gray-50 rounded-full p-4 flex items-center justify-center border border-gray-100 shadow-inner relative">
                    <GoalWheel />
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
                      <LayoutDashboard size={200} />
                    </div>
                  </div>

                  <div className="mt-12 grid grid-cols-2 gap-4">
                    <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                      <span className="text-[10px] text-gray-400 uppercase font-bold tracking-widest block mb-1">Conditions</span>
                      <div className="space-y-1">
                        {selectedPatient.conditions.map((c: string) => (
                          <span key={c} className="block text-sm font-bold text-gray-700">{c}</span>
                        ))}
                      </div>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                      <span className="text-[10px] text-gray-400 uppercase font-bold tracking-widest block mb-1">Active Protocols</span>
                      <div className="space-y-1">
                        {selectedPatient.activeProtocols.map((p: string) => (
                          <span key={p} className="block text-sm font-bold text-purple-600">{p}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: CCM Dashboard & Timer (Section 5.2) */}
              <div className="lg:w-1/2 p-8">
                <div className="max-w-md mx-auto space-y-6">
                  {/* Timer Card */}
                  <div className="bg-slate-900 rounded-3xl p-8 text-white shadow-2xl shadow-purple-900/40 relative overflow-hidden">
                    <div className="absolute -right-8 -top-8 w-32 h-32 bg-purple-600/20 rounded-full blur-3xl"></div>
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-8">
                        <div>
                          <span className="text-[10px] text-purple-400 uppercase font-bold tracking-widest block mb-1">Encounter Timer</span>
                          <h3 className="text-4xl font-mono font-black">{formatTime(elapsedTime)}</h3>
                        </div>
                        <button 
                          onClick={() => setIsTimerRunning(!isTimerRunning)}
                          className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all shadow-lg ${isTimerRunning ? 'bg-orange-500 hover:bg-orange-600 shadow-orange-900/20' : 'bg-purple-600 hover:bg-purple-700 shadow-purple-900/20'}`}
                        >
                          {isTimerRunning ? <Pause size={28} fill="currentColor" /> : <Play size={28} className="ml-1" fill="currentColor" />}
                        </button>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-slate-400">Monthly Time Tracked</span>
                          <span className="font-bold">{monthlyTotal} / 20m</span>
                        </div>
                        <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                          <div 
                            className={`h-full transition-all duration-500 ${monthlyTotal >= 20 ? 'bg-green-400' : 'bg-purple-500'}`}
                            style={{ width: `${Math.min(100, (monthlyTotal / 20) * 100)}%` }}
                          ></div>
                        </div>
                        {monthlyTotal >= 20 && (
                          <div className="flex items-center gap-2 text-green-400 text-xs font-bold uppercase tracking-wider">
                            <ShieldCheckIcon size={14} />
                            Meets CPT 99439 Threshold
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Actions (Section 5.2 Countable Actions) */}
                  <div className="space-y-3">
                    <h4 className="text-xs text-gray-400 uppercase font-bold tracking-widest px-1">Log Countable Activities</h4>
                    <div className="grid grid-cols-2 gap-3">
                      <button onClick={() => handleAction('Pillar Review')} className="p-3 bg-white border border-gray-200 rounded-xl text-left hover:border-purple-300 hover:shadow-sm transition-all group">
                        <span className="block text-[10px] text-gray-400 uppercase font-bold mb-1">CCM Entry</span>
                        <span className="text-xs font-bold text-gray-700 group-hover:text-purple-600">Pillar Review</span>
                      </button>
                      <button onClick={() => handleAction('Trend Analysis')} className="p-3 bg-white border border-gray-200 rounded-xl text-left hover:border-purple-300 hover:shadow-sm transition-all group">
                        <span className="block text-[10px] text-gray-400 uppercase font-bold mb-1">CCM Entry</span>
                        <span className="text-xs font-bold text-gray-700 group-hover:text-purple-600">Trend Analysis</span>
                      </button>
                      <button onClick={() => handleAction('Care Plan Update')} className="p-3 bg-white border border-gray-200 rounded-xl text-left hover:border-purple-300 hover:shadow-sm transition-all group">
                        <span className="block text-[10px] text-gray-400 uppercase font-bold mb-1">CCM Entry</span>
                        <span className="text-xs font-bold text-gray-700 group-hover:text-purple-600">Care Plan Update</span>
                      </button>
                      <button onClick={() => handleAction('Patient Messaging')} className="p-3 bg-white border border-gray-200 rounded-xl text-left hover:border-purple-300 hover:shadow-sm transition-all group">
                        <span className="block text-[10px] text-gray-400 uppercase font-bold mb-1">CCM Entry</span>
                        <span className="text-xs font-bold text-gray-700 group-hover:text-purple-600">Messaging</span>
                      </button>
                    </div>
                  </div>

                  {/* Activity Log */}
                  {activities.length > 0 && (
                    <div className="bg-white rounded-3xl p-6 border border-gray-200">
                      <h4 className="text-xs text-gray-400 uppercase font-bold tracking-widest mb-4">Encounter Log</h4>
                      <div className="space-y-3 max-h-40 overflow-y-auto pr-2">
                        {activities.map((act, i) => (
                          <div key={i} className="flex items-center justify-between text-sm">
                            <span className="text-gray-600">{act}</span>
                            <span className="text-[10px] font-mono text-gray-400">Just now</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Documentation & Billing Export (Section 6.3) */}
                  <div className="bg-white rounded-3xl p-6 border border-gray-200 space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-gray-700">Monthly Billing Export</h4>
                      <Download size={18} className="text-gray-400 cursor-pointer hover:text-purple-600" />
                    </div>
                    <div className="bg-gray-50 rounded-xl p-4 border border-dashed border-gray-200">
                      <pre className="text-[10px] text-gray-500 font-mono overflow-x-auto">
{`{
  "code": "99439",
  "units": 1,
  "minutes": ${monthlyTotal},
  "supporting_documentation": "Monthly CCM: Goal Wheel review, trend analysis..."
}`}
                      </pre>
                    </div>
                    <button className="w-full bg-purple-600 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-purple-700 transition-colors shadow-lg shadow-purple-600/20">
                      <Save size={18} />
                      Sync with Availity
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center p-12 text-center bg-gray-50">
              <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center text-gray-200 shadow-sm border border-gray-100 mb-6">
                <Users size={48} />
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Select a patient to begin</h2>
              <p className="text-gray-500 max-w-xs mx-auto">Choose a patient from your panel to review their Goal Wheel and document care management time.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

// Helper Icon Component
const ShieldCheckIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export default ProviderDashboard;
