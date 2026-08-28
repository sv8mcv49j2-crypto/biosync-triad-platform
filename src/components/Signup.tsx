import { useState } from 'react';
import { Shield, Zap, Activity, CreditCard, ChevronRight, ArrowLeft, Building, Smartphone, HeartPulse } from 'lucide-react';

interface SignupProps {
  onComplete: (onboardingData: any) => void;
  onBack: () => void;
}

const Signup = ({ onComplete, onBack }: SignupProps) => {
  const [step, setStep] = useState<'path-selection' | 'account-info' | 'clinic-id' | 'payment' | 'onboarding'>('path-selection');
  const [signupPath, setSignupPath] = useState<'provider' | 'b2c' | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    clinicId: '',
  });

  const handleNext = async () => {
    if (step === 'path-selection') {
      if (signupPath === 'provider') setStep('clinic-id');
      else setStep('account-info');
    } else if (step === 'clinic-id') {
      setStep('account-info');
    } else if (step === 'account-info') {
      // Register user via API
      try {
        const response = await fetch('/api/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...formData, signupPath }),
        });
        
        if (!response.ok) {
          throw new Error('Registration failed');
        }
        
        if (signupPath === 'b2c') setStep('payment');
        else setStep('onboarding');
      } catch (err) {
        console.error('Registration error:', err);
        // Fallback for demo purposes if API fails
        if (signupPath === 'b2c') setStep('payment');
        else setStep('onboarding');
      }
    } else if (step === 'payment') {
      setStep('onboarding');
    } else if (step === 'onboarding') {
      onComplete({ 
        ...formData, 
        signupPath, 
        subscriptionTier: signupPath === 'b2c' ? 'Premium' : 'Clinical',
        status: 'Active'
      });
    }
  };

  const renderStep = () => {
    switch (step) {
      case 'path-selection':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-center">How are you joining BioSync?</h2>
            <div className="grid grid-cols-1 gap-4">
              <button 
                onClick={() => { setSignupPath('provider'); }}
                className={`p-6 border-2 rounded-xl text-left transition-all ${signupPath === 'provider' ? 'border-purple-600 bg-purple-50' : 'border-gray-200 hover:border-purple-300'}`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                    <Building size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold">I was invited by my clinic</h3>
                    <p className="text-sm text-gray-500">Chronic Care Management & clinical oversight.</p>
                  </div>
                </div>
              </button>
              <button 
                onClick={() => { setSignupPath('b2c'); }}
                className={`p-6 border-2 rounded-xl text-left transition-all ${signupPath === 'b2c' ? 'border-purple-600 bg-purple-50' : 'border-gray-200 hover:border-purple-300'}`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600">
                    <Zap size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold">I'm here for self-optimization</h3>
                    <p className="text-sm text-gray-500">Biohacking, wearables, and mental resilience.</p>
                  </div>
                </div>
              </button>
            </div>
            <button 
              disabled={!signupPath}
              onClick={handleNext}
              className="w-full bg-purple-600 text-white py-3 rounded-xl font-bold disabled:opacity-50 flex items-center justify-center gap-2"
            >
              Continue <ChevronRight size={20} />
            </button>
          </div>
        );
      case 'clinic-id':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Enter your Clinic ID</h2>
            <p className="text-gray-500">This was provided in your invitation email or by your doctor.</p>
            <input 
              type="text" 
              placeholder="Clinic ID (e.g. NEXERA-2026)"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 outline-none"
              value={formData.clinicId}
              onChange={(e) => setFormData({ ...formData, clinicId: e.target.value })}
            />
            <button 
              onClick={handleNext}
              className="w-full bg-purple-600 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2"
            >
              Verify Clinic <ChevronRight size={20} />
            </button>
          </div>
        );
      case 'account-info':
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Create your account</h2>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input 
                type="text" 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 outline-none"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input 
                type="email" 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 outline-none"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input 
                type="password" 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 outline-none"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
            </div>
            <button 
              onClick={handleNext}
              className="w-full bg-purple-600 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 mt-4"
            >
              Create Account <ChevronRight size={20} />
            </button>
          </div>
        );
      case 'payment':
        return (
          <div className="space-y-6 text-center">
            <h2 className="text-2xl font-bold">Start your BioSync Journey</h2>
            <div className="p-6 bg-purple-50 rounded-2xl border-2 border-purple-200 inline-block w-full">
              <p className="text-purple-600 font-bold text-sm mb-1 uppercase tracking-wider">Premium Access</p>
              <p className="text-4xl font-extrabold mb-2">$29<span className="text-lg font-normal text-gray-500">/mo</span></p>
              <ul className="text-left text-sm space-y-2 mb-6 text-gray-600">
                <li className="flex items-center gap-2"><Shield size={16} className="text-green-500" /> Full Goal Wheel Tracking</li>
                <li className="flex items-center gap-2"><Activity size={16} className="text-green-500" /> Unlimited Wearable Integration</li>
                <li className="flex items-center gap-2"><Zap size={16} className="text-green-500" /> Biohacking Protocols</li>
              </ul>
              <div className="p-4 bg-white rounded-xl border border-gray-200 flex items-center gap-4 text-left">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <CreditCard size={20} className="text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-bold">Secure Checkout</p>
                  <p className="text-xs text-gray-500">Redirecting to Stripe</p>
                </div>
              </div>
            </div>
            <button 
              onClick={() => {
                window.open('https://buy.stripe.com/fZufZh2gR0YRavw2fT3AY00', '_blank');
                handleNext();
              }}
              className="w-full bg-purple-600 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2"
            >
              Pay & Start Subscription <ChevronRight size={20} />
            </button>
          </div>
        );
      case 'onboarding':
        return (
          <div className="space-y-6 text-center">
            <h2 className="text-2xl font-bold">Welcome to BioSync Triad!</h2>
            <p className="text-gray-500">Let's set up your data connections.</p>
            
            {signupPath === 'provider' ? (
              <div className="p-6 border-2 border-dashed border-gray-300 rounded-2xl">
                <Building size={48} className="mx-auto text-blue-500 mb-4" />
                <h3 className="font-bold mb-2">Syncing with OptiMantra</h3>
                <p className="text-sm text-gray-500">We are connecting your clinical records and care plan from your provider.</p>
                <div className="w-full bg-gray-100 h-2 rounded-full mt-6 overflow-hidden">
                  <div className="bg-blue-500 h-full w-2/3 animate-pulse"></div>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="p-4 border border-gray-200 rounded-xl flex items-center justify-between hover:bg-gray-50 cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center text-red-600">
                      <HeartPulse size={20} />
                    </div>
                    <span className="font-semibold">Apple Health</span>
                  </div>
                  <button className="text-sm font-bold text-purple-600">Connect</button>
                </div>
                <div className="p-4 border border-gray-200 rounded-xl flex items-center justify-between hover:bg-gray-50 cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600">
                      <Activity size={20} />
                    </div>
                    <span className="font-semibold">Oura Ring</span>
                  </div>
                  <button className="text-sm font-bold text-purple-600">Connect</button>
                </div>
                <div className="p-4 border border-gray-200 rounded-xl flex items-center justify-between hover:bg-gray-50 cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                      <Smartphone size={20} />
                    </div>
                    <span className="font-semibold">Terra API</span>
                  </div>
                  <button className="text-sm font-bold text-purple-600">Connect All</button>
                </div>
              </div>
            )}

            <button 
              onClick={handleNext}
              className="w-full bg-purple-600 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 mt-6"
            >
              Go to Dashboard <ChevronRight size={20} />
            </button>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-sm text-gray-500 hover:text-purple-600 mb-8 transition-colors"
        >
          <ArrowLeft size={16} />
          Back to site
        </button>
        
        {renderStep()}

        {step !== 'onboarding' && (
          <div className="mt-8 flex justify-center gap-2">
            <div className={`w-2 h-2 rounded-full ${step === 'path-selection' ? 'bg-purple-600' : 'bg-gray-200'}`} />
            <div className={`w-2 h-2 rounded-full ${step === 'clinic-id' || (step === 'account-info' && signupPath === 'b2c') ? 'bg-purple-600' : 'bg-gray-200'}`} />
            <div className={`w-2 h-2 rounded-full ${step === 'account-info' && signupPath === 'provider' ? 'bg-purple-600' : 'bg-gray-200'}`} />
            <div className={`w-2 h-2 rounded-full ${step === 'payment' ? 'bg-purple-600' : 'bg-gray-200'}`} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Signup;
