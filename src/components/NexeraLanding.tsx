import { useState, useRef } from 'react';
import {
  Shield, Stethoscope, BadgeCheck, Zap, Brain, HeartPulse,
  Smartphone, Activity, UserCheck, ArrowDown, ChevronRight
} from 'lucide-react';
import GoalWheel from './GoalWheel';

interface NexeraLandingProps {
  onStartSignup: () => void;
}

const NexeraLanding = ({ onStartSignup }: NexeraLandingProps) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    setSubmitting(true);

    fetch('/api/notify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        email,
        signupPath: `nexera-landing${phone ? ` | phone: ${phone}` : ''}`,
      }),
    })
      .catch(() => {
        // Fire-and-forget — silently ignore failures
      })
      .finally(() => {
        setSubmitting(false);
        setSubmitted(true);
      });
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-indigo-950 via-purple-950 to-indigo-950 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center">
          <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <BadgeCheck size={32} className="text-green-400" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-3">Thank you, {name || 'for signing up'}!</h2>
          <p className="text-purple-200 mb-6">Your information has been received. The NexEra Health & Wellness team will reach out to you shortly.</p>
          <button
            onClick={onStartSignup}
            className="w-full bg-purple-600 text-white py-3 rounded-xl font-semibold hover:bg-purple-500 transition-colors"
          >
            Continue to BioSync Triad
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-950 via-purple-950 to-indigo-950 text-white font-sans">
      {/* Minimal Header */}
      <header className="px-4 py-4 flex items-center justify-center gap-3 border-b border-white/10">
        <div className="w-8 h-8 bg-purple-500/30 rounded-lg flex items-center justify-center">
          <HeartPulse size={18} className="text-purple-300" />
        </div>
        <div className="text-center">
          <span className="text-sm font-bold tracking-wide text-white">NexEra Health & Wellness</span>
          <span className="block text-[10px] text-purple-300 uppercase tracking-widest">Powered by BioSync Triad</span>
        </div>
      </header>

      {/* 1. Hero Section */}
      <section className="px-4 py-16 md:py-24 text-center max-w-lg mx-auto">
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
          Your Health, <span className="text-purple-400">Connected</span>
        </h1>
        <p className="text-purple-200 text-base md:text-lg mb-8 max-w-md mx-auto leading-relaxed">
          NexEra Health & Wellness has partnered with BioSync Triad to bring clinical care and personal wellness tracking together in one place.
        </p>
        <button
          onClick={scrollToForm}
          className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white px-8 py-3.5 rounded-xl font-semibold text-lg transition-all shadow-lg shadow-purple-600/30"
        >
          Get Started
          <ArrowDown size={20} />
        </button>
      </section>

      {/* 2. Trust Bar */}
      <section className="px-4 py-10 max-w-lg mx-auto">
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
            <Shield size={24} className="text-purple-400 mx-auto mb-2" />
            <p className="text-[11px] text-purple-200 font-medium leading-tight">HIPAA-<br />Compliant</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
            <Stethoscope size={24} className="text-purple-400 mx-auto mb-2" />
            <p className="text-[11px] text-purple-200 font-medium leading-tight">Clinical-<br />Grade</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
            <BadgeCheck size={24} className="text-purple-400 mx-auto mb-2" />
            <p className="text-[11px] text-purple-200 font-medium leading-tight">Provider-<br />Approved</p>
          </div>
        </div>
      </section>

      {/* 3. What is BioSync Triad? */}
      <section className="px-4 py-14 max-w-lg mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">What is BioSync Triad?</h2>
        <p className="text-purple-300 text-center text-sm mb-10">One platform that synchronizes your physical, mental, and clinical health.</p>

        {/* Goal Wheel Visual */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 mb-10 max-w-sm mx-auto">
          <GoalWheel />
        </div>

        {/* Triad Cards */}
        <div className="space-y-4">
          <div className="bg-white/5 border border-white/10 rounded-xl p-5 flex items-start gap-4">
            <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <Zap size={20} className="text-purple-400" />
            </div>
            <div>
              <h3 className="font-bold text-sm mb-1">Physical Optimization</h3>
              <p className="text-purple-200 text-sm leading-relaxed">Track your biomarkers and wearable data across five health pillars. Monitor your metabolic fuel, sleep patterns, and activity levels in one dashboard.</p>
            </div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-5 flex items-start gap-4">
            <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <Brain size={20} className="text-purple-400" />
            </div>
            <div>
              <h3 className="font-bold text-sm mb-1">Mental Resilience</h3>
              <p className="text-purple-200 text-sm leading-relaxed">Build resilience with evidence-based principles grounded in SAMHSA guidelines. Track your stress patterns and recovery trends over time.</p>
            </div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-5 flex items-start gap-4">
            <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <UserCheck size={20} className="text-purple-400" />
            </div>
            <div>
              <h3 className="font-bold text-sm mb-1">Clinical Integration</h3>
              <p className="text-purple-200 text-sm leading-relaxed">Share your health data with your NexEra provider. Connect your clinical records and care plans for a complete view of your wellness journey.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. How It Works */}
      <section className="px-4 py-14 max-w-lg mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">How It Works</h2>
        <div className="space-y-4">
          <div className="bg-white/5 border border-white/10 rounded-xl p-5 flex items-center gap-4">
            <div className="w-12 h-12 bg-purple-600/30 rounded-full flex items-center justify-center flex-shrink-0 text-2xl font-black text-purple-300">
              1
            </div>
            <div className="flex items-center gap-3">
              <Smartphone size={22} className="text-purple-400 flex-shrink-0" />
              <p className="text-sm text-purple-100 font-medium">Connect your devices and wearables to sync your health data automatically.</p>
            </div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-5 flex items-center gap-4">
            <div className="w-12 h-12 bg-purple-600/30 rounded-full flex items-center justify-center flex-shrink-0 text-2xl font-black text-purple-300">
              2
            </div>
            <div className="flex items-center gap-3">
              <Activity size={22} className="text-purple-400 flex-shrink-0" />
              <p className="text-sm text-purple-100 font-medium">Track your progress across the 5-pillar Goal Wheel with real-time visualizations.</p>
            </div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-5 flex items-center gap-4">
            <div className="w-12 h-12 bg-purple-600/30 rounded-full flex items-center justify-center flex-shrink-0 text-2xl font-black text-purple-300">
              3
            </div>
            <div className="flex items-center gap-3">
              <UserCheck size={22} className="text-purple-400 flex-shrink-0" />
              <p className="text-sm text-purple-100 font-medium">Share your data with your NexEra provider for more informed care conversations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Lead Capture Form */}
      <section ref={formRef} className="px-4 py-14 max-w-lg mx-auto">
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-bold text-center mb-2">Get Connected with NexEra</h2>
          <p className="text-purple-200 text-center text-sm mb-6">Fill out the form below and the NexEra team will reach out.</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="nexera-name" className="block text-sm font-medium text-purple-200 mb-1">
                Full Name <span className="text-purple-400">*</span>
              </label>
              <input
                id="nexera-name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your full name"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-purple-300/60 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-colors"
              />
            </div>
            <div>
              <label htmlFor="nexera-email" className="block text-sm font-medium text-purple-200 mb-1">
                Email Address <span className="text-purple-400">*</span>
              </label>
              <input
                id="nexera-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-purple-300/60 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-colors"
              />
            </div>
            <div>
              <label htmlFor="nexera-phone" className="block text-sm font-medium text-purple-200 mb-1">
                Phone Number <span className="text-purple-400/60 text-xs">(optional)</span>
              </label>
              <input
                id="nexera-phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="(555) 555-5555"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-purple-300/60 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-colors"
              />
            </div>
            <input type="hidden" name="source" value="nexera-landing" />
            <button
              type="submit"
              disabled={submitting || !name.trim() || !email.trim()}
              className="w-full bg-purple-600 hover:bg-purple-500 disabled:opacity-40 disabled:cursor-not-allowed text-white py-3.5 rounded-xl font-semibold text-lg transition-all shadow-lg shadow-purple-600/30 flex items-center justify-center gap-2"
            >
              {submitting ? (
                <span className="inline-block w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  Submit <ChevronRight size={20} />
                </>
              )}
            </button>
          </form>
        </div>
      </section>

      {/* 6. Footer CTA */}
      <section className="px-4 py-14 max-w-lg mx-auto text-center border-t border-white/10">
        <h2 className="text-xl md:text-2xl font-bold mb-3">Ready to take control of your health?</h2>
        <p className="text-purple-300 text-sm mb-6">Start your BioSync Triad journey and connect with your NexEra care team.</p>
        <button
          onClick={onStartSignup}
          className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white px-8 py-3 rounded-xl font-semibold transition-all shadow-lg shadow-purple-600/30 mb-6"
        >
          Book a Free Consultation
          <ChevronRight size={20} />
        </button>
        <p className="text-purple-400/60 text-xs">Call us: (xxx) xxx-xxxx</p>
        <p className="text-purple-400/40 text-[10px] mt-8">
          NexEra Health & Wellness · Powered by BioSync Triad
        </p>
      </section>
    </div>
  );
};

export default NexeraLanding;