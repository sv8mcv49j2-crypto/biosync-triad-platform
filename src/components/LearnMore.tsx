import React from 'react';
import { 
  Activity, Moon, Zap, Dumbbell, Users, 
  Shield, AlertCircle, Clock, Heart, 
  CheckCircle2, Info, BookOpen, Brain, 
  Lock, Users2, Handshake, Sparkles, Languages
} from 'lucide-react';

interface LearnMoreProps {
  onStart: () => void;
}

const LearnMore: React.FC<LearnMoreProps> = ({ onStart }) => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Five pillars. One system. <br />
            <span className="text-indigo-600">Everything connected.</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            The BioSync Triad Goal Wheel is built on 50+ biomarkers across five interconnected health pillars. Each pillar is grounded in peer-reviewed science and mapped to clinical outcomes.
          </p>
          <div className="flex justify-center gap-4">
            <button 
              onClick={onStart}
              className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition-all shadow-lg"
            >
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* The 5 Pillars Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">The 5 Core Pillars</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Our unique Goal Wheel tracks your progress across the entire health spectrum, moving you from reactive management to proactive thriving.</p>
          </div>

          <div className="space-y-12">
            {/* Pillar 1: Metabolic Fuel */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="bg-orange-50 p-8 rounded-3xl border border-orange-100 flex items-center justify-center min-h-[300px]">
                <Activity size={120} className="text-orange-500 opacity-20 absolute" />
                <div className="relative text-center">
                  <div className="bg-white p-4 rounded-2xl shadow-sm inline-block mb-4">
                    <Activity size={48} className="text-orange-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Metabolic Fuel</h3>
                  <p className="text-orange-700 font-medium">Your body's energy system</p>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">What it measures</h3>
                <p className="text-gray-600 mb-6">
                  Your body's ability to process and utilize energy from food — blood glucose regulation, insulin sensitivity, and metabolic flexibility.
                </p>
                <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm mb-6">
                  <h4 className="font-bold text-sm uppercase tracking-wider text-gray-400 mb-4">Key Biomarkers</h4>
                  <ul className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm text-gray-700">
                    <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-green-500" /> Fasting Glucose</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-green-500" /> Time-in-Range</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-green-500" /> HbA1c / GMI</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-green-500" /> Insulin Sensitivity</li>
                  </ul>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 text-sm italic text-gray-600">
                  <span className="font-bold text-gray-900 not-italic">The science:</span> Postprandial glucose excursions are independently associated with oxidative stress and inflammation.
                </div>
              </div>
            </div>

            {/* Pillar 2: Sleep & Recovery */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-bold mb-4">What it measures</h3>
                <p className="text-gray-600 mb-6">
                  Sleep architecture (deep, REM, light), recovery capacity (HRV, resting heart rate), and circadian alignment.
                </p>
                <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm mb-6">
                  <h4 className="font-bold text-sm uppercase tracking-wider text-gray-400 mb-4">Key Biomarkers</h4>
                  <ul className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm text-gray-700">
                    <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-blue-500" /> Deep & REM %</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-blue-500" /> Sleep Efficiency</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-blue-500" /> Overnight HRV</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-blue-500" /> RHR Baseline</li>
                  </ul>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 text-sm italic text-gray-600">
                  <span className="font-bold text-gray-900 not-italic">The science:</span> Chronic sleep restriction reduces insulin sensitivity by up to 40% and impairs immune function.
                </div>
              </div>
              <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100 flex items-center justify-center min-h-[300px] order-1 md:order-2">
                <Moon size={120} className="text-blue-500 opacity-20 absolute" />
                <div className="relative text-center">
                  <div className="bg-white p-4 rounded-2xl shadow-sm inline-block mb-4">
                    <Moon size={48} className="text-blue-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Sleep & Recovery</h3>
                  <p className="text-blue-700 font-medium">Your body's nightly reset</p>
                </div>
              </div>
            </div>

            {/* Pillar 3: Stress & Resilience */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="bg-red-50 p-8 rounded-3xl border border-red-100 flex items-center justify-center min-h-[300px]">
                <Zap size={120} className="text-red-500 opacity-20 absolute" />
                <div className="relative text-center">
                  <div className="bg-white p-4 rounded-2xl shadow-sm inline-block mb-4">
                    <Zap size={48} className="text-red-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Stress & Resilience</h3>
                  <p className="text-red-700 font-medium">Your nervous system's flexibility</p>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">What it measures</h3>
                <p className="text-gray-600 mb-6">
                  Autonomic nervous system balance, stress load, recovery capacity, and mental health indicators.
                </p>
                <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm mb-6">
                  <h4 className="font-bold text-sm uppercase tracking-wider text-gray-400 mb-4">Key Biomarkers</h4>
                  <ul className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm text-gray-700">
                    <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-red-500" /> Morning HRV</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-red-500" /> Stress Scores</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-red-500" /> HR Recovery</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-red-500" /> Burnout Risk</li>
                  </ul>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 text-sm italic text-gray-600">
                  <span className="font-bold text-gray-900 not-italic">Trauma-informed:</span> Built on SAMHSA principles — safety, trustworthiness, and empowerment.
                </div>
              </div>
            </div>

            {/* Pillar 4: Movement & Vitality */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-bold mb-4">What it measures</h3>
                <p className="text-gray-600 mb-6">
                  Cardiovascular fitness, metabolic efficiency, strength, and daily physical activation.
                </p>
                <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm mb-6">
                  <h4 className="font-bold text-sm uppercase tracking-wider text-gray-400 mb-4">Key Biomarkers</h4>
                  <ul className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm text-gray-700">
                    <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-500" /> VO2 Max Estimate</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-500" /> Zone 2 Minutes</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-500" /> Daily Step Avg</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-500" /> Lean Body Mass</li>
                  </ul>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 text-sm italic text-gray-600">
                  <span className="font-bold text-gray-900 not-italic">The science:</span> Each 3.5 mL/kg/min increase in VO2 Max is associated with a 13% reduction in all-cause mortality.
                </div>
              </div>
              <div className="bg-emerald-50 p-8 rounded-3xl border border-emerald-100 flex items-center justify-center min-h-[300px] order-1 md:order-2">
                <Dumbbell size={120} className="text-emerald-500 opacity-20 absolute" />
                <div className="relative text-center">
                  <div className="bg-white p-4 rounded-2xl shadow-sm inline-block mb-4">
                    <Dumbbell size={48} className="text-emerald-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Movement & Vitality</h3>
                  <p className="text-emerald-700 font-medium">Your body's engine</p>
                </div>
              </div>
            </div>

            {/* Pillar 5: Mind & Connection */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="bg-purple-50 p-8 rounded-3xl border border-purple-100 flex items-center justify-center min-h-[300px]">
                <Users size={120} className="text-purple-500 opacity-20 absolute" />
                <div className="relative text-center">
                  <div className="bg-white p-4 rounded-2xl shadow-sm inline-block mb-4">
                    <Users size={48} className="text-purple-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Mind & Connection</h3>
                  <p className="text-purple-700 font-medium">Your brain's social ecosystem</p>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">What it measures</h3>
                <p className="text-gray-600 mb-6">
                  Cognitive function, social connectedness, emotional wellbeing, and sense of purpose.
                </p>
                <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm mb-6">
                  <h4 className="font-bold text-sm uppercase tracking-wider text-gray-400 mb-4">Key Biomarkers</h4>
                  <ul className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm text-gray-700">
                    <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-purple-500" /> Social Engagement</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-purple-500" /> Purpose Score</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-purple-500" /> Daily Mood Avg</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-purple-500" /> Gratitude Minutes</li>
                  </ul>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 text-sm italic text-gray-600">
                  <span className="font-bold text-gray-900 not-italic">The science:</span> Quality of relationships is the strongest predictor of health and happiness at age 80.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tripartite Medical Model */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">The Tripartite Medical Model</h2>
            <p className="text-gray-400">Every biomarker tells a story. Every story belongs in a care pathway.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-gray-800 rounded-3xl border border-gray-700">
              <Shield className="text-blue-400 mb-6" size={40} />
              <h3 className="text-xl font-bold mb-2">Preventative Care</h3>
              <p className="text-blue-300 text-sm mb-4">"Keep doing what's working"</p>
              <ul className="text-gray-400 text-sm space-y-2">
                <li>• Maintain optimal trajectory</li>
                <li>• Optimization educational content</li>
                <li>• Example: VO2 max improvement</li>
              </ul>
            </div>
            <div className="p-8 bg-gray-800 rounded-3xl border border-gray-700">
              <AlertCircle className="text-orange-400 mb-6" size={40} />
              <h3 className="text-xl font-bold mb-2">Acute Care</h3>
              <p className="text-orange-300 text-sm mb-4">"Something changed — let's address it"</p>
              <ul className="text-gray-400 text-sm space-y-2">
                <li>• Identify sudden triggers</li>
                <li>• Provider/User alerts</li>
                <li>• Example: Glucose drop alert</li>
              </ul>
            </div>
            <div className="p-8 bg-gray-800 rounded-3xl border border-gray-700">
              <Clock className="text-red-400 mb-6" size={40} />
              <h3 className="text-xl font-bold mb-2">Chronic Care Management</h3>
              <p className="text-red-300 text-sm mb-4">"Let's manage this long-term"</p>
              <ul className="text-gray-400 text-sm space-y-2">
                <li>• Trend improvement & medication optimization</li>
                <li>• Care plan tracking & billing</li>
                <li>• Example: Diabetes management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SAMHSA Foundation */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Built on trauma-informed principles.</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">Every BioSync Triad feature is built on SAMHSA's six principles of trauma-informed care.</p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
              <Lock className="text-indigo-600 mx-auto mb-4" size={24} />
              <p className="font-bold text-sm">Safety</p>
            </div>
            <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
              <Shield className="text-indigo-600 mx-auto mb-4" size={24} />
              <p className="font-bold text-sm">Trustworthy</p>
            </div>
            <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
              <Users2 className="text-indigo-600 mx-auto mb-4" size={24} />
              <p className="font-bold text-sm">Peer Support</p>
            </div>
            <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
              <Handshake className="text-indigo-600 mx-auto mb-4" size={24} />
              <p className="font-bold text-sm">Collaboration</p>
            </div>
            <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
              <Sparkles className="text-indigo-600 mx-auto mb-4" size={24} />
              <p className="font-bold text-sm">Empowerment</p>
            </div>
            <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
              <Languages className="text-indigo-600 mx-auto mb-4" size={24} />
              <p className="font-bold text-sm">Cultural</p>
            </div>
          </div>
        </div>
      </section>

      {/* Protocol Engine Flow */}
      <section className="py-20 bg-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Your data drives your next step.</h2>
          <div className="space-y-6 text-left">
            <div className="bg-indigo-500/50 p-6 rounded-2xl border border-indigo-400">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-white text-indigo-600 flex items-center justify-center font-bold">1</div>
                <h4 className="font-bold text-xl">Detection</h4>
              </div>
              <p className="text-indigo-100">Platform detects a dip in Metabolic Fuel scores via your CGM data.</p>
            </div>
            <div className="bg-indigo-500/50 p-6 rounded-2xl border border-indigo-400">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-white text-indigo-600 flex items-center justify-center font-bold">2</div>
                <h4 className="font-bold text-xl">Suggestion</h4>
              </div>
              <p className="text-indigo-100">Suggests: Glucose Stabilizer (14-day protocol) based on postprandial excursions.</p>
            </div>
            <div className="bg-indigo-500/50 p-6 rounded-2xl border border-indigo-400">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-white text-indigo-600 flex items-center justify-center font-bold">3</div>
                <h4 className="font-bold text-xl">Optimization</h4>
              </div>
              <p className="text-indigo-100">You start the protocol, follow daily checkpoints, and your score rises in real-time.</p>
            </div>
          </div>
          <button 
            onClick={onStart}
            className="mt-12 bg-white text-indigo-600 px-10 py-4 rounded-2xl font-bold hover:bg-indigo-50 transition-all shadow-xl"
          >
            Start Your First Protocol
          </button>
        </div>
      </section>
    </div>
  );
};

export default LearnMore;
