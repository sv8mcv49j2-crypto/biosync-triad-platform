import { useState } from 'react';
import { Activity, Brain, Shield, Zap, HeartPulse, ChevronRight } from 'lucide-react';
import GoalWheel from './components/GoalWheel';
import Dashboard from './components/Dashboard';
import Telehealth from './components/Telehealth';
import Signup from './components/Signup';
import ProviderDashboard from './components/ProviderDashboard';
import Technology from './components/Technology';
import Solutions from './components/Solutions';
import LearnMore from './components/LearnMore';
import Header from './components/Header';
import Footer from './components/Footer';

const PillarCard = ({ title, icon: Icon, description }: { title: string, icon: any, description: string }) => (
  <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 text-purple-600">
      <Icon size={24} />
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

function App() {
  const [view, setView] = useState<'landing' | 'signup' | 'dashboard' | 'telehealth' | 'provider' | 'technology' | 'solutions' | 'learn-more'>('landing');
  const [user, setUser] = useState<any>(null);

  const handleSignupComplete = (onboardingData: any) => {
    setUser(onboardingData);
    setView('dashboard');
  };

  const navigateTo = (newView: typeof view) => {
    setView(newView);
    window.scrollTo(0, 0);
  };

  if (view === 'signup') {
    return <Signup onComplete={handleSignupComplete} onBack={() => setView('landing')} />;
  }

  if (view === 'dashboard') {
    return <Dashboard userData={user} onTelehealth={() => setView('telehealth')} />;
  }

  if (view === 'provider') {
    return <ProviderDashboard />;
  }

  if (view === 'telehealth') {
    return (
      <div className="h-screen bg-gray-100 p-4 md:p-8">
        <div className="max-w-6xl mx-auto h-full flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <button 
              onClick={() => setView('dashboard')}
              className="text-gray-600 hover:text-purple-600 flex items-center gap-2 font-medium transition-colors"
            >
              <ChevronRight size={20} className="rotate-180" />
              Back to Dashboard
            </button>
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-500 font-medium">Appointment with Dr. Sarah Johnson</span>
              <div className="w-2 h-2 bg-green-500 rounded-full" />
            </div>
          </div>
          <div className="flex-1 min-h-0">
            <Telehealth />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <Header onNavigate={navigateTo} currentView={view} />

      <main>
        {view === 'landing' && (
          <>
            {/* Hero Section */}
            <section className="py-20 bg-white">
              <div className="max-w-4xl mx-auto text-center px-4">
                <h1 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                  Synchronize Your Health.<br />
                  <span className="text-purple-600">Proactive Thriving</span> Starts Here.
                </h1>
                <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                  BioSync Triad integrates physical optimization, mental resilience, and clinical care 
                  to move you from reactive management to peak vitality.
                </p>
                <div className="flex justify-center gap-4">
                  <button 
                    onClick={() => setView('signup')}
                    className="bg-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-purple-700 transition-all shadow-lg shadow-purple-200"
                  >
                    Start Your Journey
                  </button>
                  <button 
                    onClick={() => setView('learn-more')}
                    className="border border-gray-300 text-gray-700 px-8 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-all"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </section>

            {/* 5 Pillars Section */}
            <section className="py-20">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">The 5 Core Pillars</h2>
                  <p className="text-gray-600">Our unique Goal Wheel tracks your progress across the entire health spectrum.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                  <PillarCard 
                    title="Metabolic Fuel" 
                    icon={Activity} 
                    description="Optimize physical performance through data-driven biomarkers and wearable integration."
                  />
                  <PillarCard 
                    title="Sleep & Recovery" 
                    icon={Shield} 
                    description="Proactive screenings and lifestyle adjustments to stay ahead of future health issues."
                  />
                  <PillarCard 
                    title="Stress & Resilience" 
                    icon={Brain} 
                    description="Build resilience using SAMHSA trauma-informed principles for lasting recovery."
                  />
                  <PillarCard 
                    title="Movement & Vitality" 
                    icon={Zap} 
                    description="Rapid response and management for immediate health episodes and recovery."
                  />
                  <PillarCard 
                    title="Mind & Connection" 
                    icon={HeartPulse} 
                    description="Unified data view for managing long-term conditions and optimizing longevity."
                  />
                </div>
              </div>
            </section>

            {/* Goal Wheel Visual */}
            <section className="py-20 bg-gray-100">
              <div className="max-w-7xl mx-auto px-4 text-center">
                <div className="max-w-2xl mx-auto bg-white p-12 rounded-3xl shadow-xl border border-gray-100">
                  <h2 className="text-2xl font-bold mb-4">Integrated Health View</h2>
                  <p className="text-gray-600 mb-8">Real-time synchronization of Physical, Mental, and Clinical data.</p>
                  <div className="bg-white rounded-2xl p-4">
                    <GoalWheel />
                  </div>
                  <p className="text-gray-500 text-sm italic mt-8">Your unique "Goal Wheel" tracks health trends across Preventative, Acute, and Chronic care.</p>
                </div>
              </div>
            </section>
          </>
        )}

        {view === 'technology' && <Technology onStart={() => setView('signup')} />}
        {view === 'solutions' && <Solutions onStart={() => setView('signup')} onProviderInquiry={() => setView('provider')} />}
        {view === 'learn-more' && <LearnMore onStart={() => setView('signup')} />}
      </main>

      <Footer />
    </div>
  );
}

export default App;
