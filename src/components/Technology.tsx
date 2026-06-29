import React from 'react';
import { Cpu, RefreshCw, Zap, ShieldCheck, BarChart3, Database } from 'lucide-react';
import GoalWheel from './GoalWheel';

interface TechnologyProps {
  onStart: () => void;
}

const Technology: React.FC<TechnologyProps> = ({ onStart }) => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Your health data, unified. <br />
            <span className="text-purple-600">Your insights, correlated.</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            BioSync Triad connects your Oura Ring, Apple Watch, CGM, and more into a single intelligent dashboard. One Goal Wheel. Endless insights.
          </p>
          <div className="flex justify-center gap-4">
            <button 
              onClick={onStart}
              className="bg-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-purple-700 transition-all shadow-lg"
            >
              Start Your Journey
            </button>
          </div>
        </div>
      </section>

      {/* Goal Wheel Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">The Goal Wheel: Your health isn't a single number.</h2>
              <p className="text-lg text-gray-600 mb-6">
                Most health apps show you one metric. Steps. Hours slept. Blood glucose. But your body doesn't work in isolation — and your dashboard shouldn't either.
              </p>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-bold">75-100 — Thriving</span>: Optimal range
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-yellow-500 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-bold">50-74 — Building</span>: Room to grow
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-orange-500 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-bold">25-49 — Developing</span>: Needs attention
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-bold">0-24 — Needs Focus</span>: Priority pillar
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-inner flex flex-col items-center">
              <GoalWheel />
              <p className="text-sm text-gray-500 italic mt-6 text-center">
                Updates in real-time as your devices sync.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Syncing Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Connect what you already use.</h2>
            <p className="text-gray-400">BioSync Triad integrates with the devices you already own.</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="py-4 px-6 font-semibold">Device</th>
                  <th className="py-4 px-6 font-semibold">Metrics</th>
                  <th className="py-4 px-6 font-semibold">Sync</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                <tr>
                  <td className="py-4 px-6 font-medium text-purple-400">Oura Ring</td>
                  <td className="py-4 px-6 text-gray-300">Sleep stages, HRV, RHR, Temp</td>
                  <td className="py-4 px-6 text-gray-300">Real-time via API</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-purple-400">Apple Watch</td>
                  <td className="py-4 px-6 text-gray-300">Heart rate, HRV, VO2 max, Workouts</td>
                  <td className="py-4 px-6 text-gray-300">Real-time via HealthKit</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-purple-400">Dexcom G6/G7</td>
                  <td className="py-4 px-6 text-gray-300">Continuous glucose, TIR, GMI</td>
                  <td className="py-4 px-6 text-gray-300">5-min intervals</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-purple-400">Whoop 4.0/5.0</td>
                  <td className="py-4 px-6 text-gray-300">Strain, Recovery, Sleep, HRV</td>
                  <td className="py-4 px-6 text-gray-300">Real-time via API</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-purple-400">Garmin</td>
                  <td className="py-4 px-6 text-gray-300">VO2 max, Body Battery, Stress</td>
                  <td className="py-4 px-6 text-gray-300">Real-time via API</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-12 text-center text-gray-500 max-w-2xl mx-auto">
            No device? Establishing your baseline with our 5-minute quiz establishes your starting point.
          </p>
        </div>
      </section>

      {/* Correlation Engine Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex p-3 bg-purple-100 text-purple-600 rounded-2xl mb-6">
            <Cpu size={32} />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Power Wellness Correlation Engine</h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
            See the connections your wearables miss. We analyze your data across pillars to find the relationships that matter to your unique physiology.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="p-8 bg-white border border-gray-100 rounded-2xl shadow-sm">
              <RefreshCw className="text-purple-600 mb-4" size={24} />
              <h3 className="text-xl font-bold mb-2">Sleep → Glucose</h3>
              <p className="text-gray-600">Discover how sleep quality affects your next-day blood sugar regulation.</p>
            </div>
            <div className="p-8 bg-white border border-gray-100 rounded-2xl shadow-sm">
              <Zap className="text-purple-600 mb-4" size={24} />
              <h3 className="text-xl font-bold mb-2">Stress → Sleep</h3>
              <p className="text-gray-600">Quantify exactly how high-stress days impact your sleep onset and latency.</p>
            </div>
            <div className="p-8 bg-white border border-gray-100 rounded-2xl shadow-sm">
              <BarChart3 className="text-purple-600 mb-4" size={24} />
              <h3 className="text-xl font-bold mb-2">Glucose → Mood</h3>
              <p className="text-gray-600">Track how blood sugar stability correlates with your subjective wellbeing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-12 rounded-3xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <div className="flex items-center gap-3 text-purple-600 font-bold mb-4 uppercase tracking-widest text-sm">
                <ShieldCheck size={20} />
                Security & Architecture
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Built for health data. Built for trust.</h2>
              <div className="space-y-6 text-gray-600">
                <div className="flex gap-4">
                  <Database className="text-purple-600 flex-shrink-0" size={24} />
                  <div>
                    <p className="font-bold text-gray-900">HIPAA Compliant</p>
                    <p>AES-256 encryption at rest, TLS 1.3 in transit. Your data is access-controlled and auditable.</p>
                  </div>
                </div>
                <p>You control your data. Delete anytime. Opt-in only sharing with providers.</p>
              </div>
            </div>
            <div className="flex-1 w-full max-w-md bg-purple-50 p-8 rounded-2xl border border-purple-100 font-mono text-xs overflow-hidden">
              <p className="text-purple-800 opacity-50 mb-2">// BioSync Architecture</p>
              <p className="text-purple-900">const security = &#123;</p>
              <p className="pl-4">encryption: "AES-256-GCM",</p>
              <p className="pl-4">auth: "JWT + RBAC",</p>
              <p className="pl-4">compliance: "HIPAA",</p>
              <p className="pl-4">infrastructure: "AWS App Runner",</p>
              <p className="text-purple-900">&#125;</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Technology;
