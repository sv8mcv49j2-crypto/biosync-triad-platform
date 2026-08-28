import React from 'react';
import { User, Building2, Check, ArrowRight } from 'lucide-react';

interface SolutionsProps {
  onStart: () => void;
  onProviderInquiry: () => void;
}

const Solutions: React.FC<SolutionsProps> = ({ onStart, onProviderInquiry }) => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Two paths. One platform. <br />
            <span className="text-purple-600">Better health either way.</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            Whether you're optimizing your own biomarkers or managing a panel of chronic care patients, BioSync Triad unifies your health data into action.
          </p>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="py-6 px-4 bg-white border-b border-gray-100"></th>
                  <th className="py-8 px-8 bg-white border-b-2 border-purple-600 text-center min-w-[300px]">
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center">
                        <User size={24} />
                      </div>
                      <span className="text-2xl font-bold">Self-Optimization</span>
                    </div>
                  </th>
                  <th className="py-8 px-8 bg-white border-b-2 border-indigo-600 text-center min-w-[300px]">
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center">
                        <Building2 size={24} />
                      </div>
                      <span className="text-2xl font-bold">Provider-Led Care</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                <tr className="border-b border-gray-50">
                  <td className="py-6 px-4 font-bold text-gray-900">Best For</td>
                  <td className="py-6 px-8 text-center italic">Health-conscious individuals, biohackers</td>
                  <td className="py-6 px-8 text-center italic">Clinics, NPs, care coordinators</td>
                </tr>
                <tr className="border-b border-gray-50">
                  <td className="py-6 px-4 font-bold text-gray-900">Enrollment</td>
                  <td className="py-6 px-8 text-center">Direct signup, no provider needed</td>
                  <td className="py-6 px-8 text-center">Provider enrolls patient (CCM-eligible)</td>
                </tr>
                <tr className="border-b border-gray-50">
                  <td className="py-6 px-4 font-bold text-gray-900">Onboarding</td>
                  <td className="py-6 px-8 text-center">5-min quiz + device connection</td>
                  <td className="py-6 px-8 text-center">Clinical intake + EHR import</td>
                </tr>
                <tr className="border-b border-gray-50">
                  <td className="py-6 px-4 font-bold text-gray-900">Goal Wheel</td>
                  <td className="py-6 px-8 text-center">Self-report + wearable data</td>
                  <td className="py-6 px-8 text-center">Full clinical biomarkers + labs</td>
                </tr>
                <tr className="border-b border-gray-50">
                  <td className="py-6 px-4 font-bold text-gray-900">Protocols</td>
                  <td className="py-6 px-8 text-center">Self-selected, self-guided</td>
                  <td className="py-6 px-8 text-center">Provider-prescribed, care-plan aligned</td>
                </tr>
                <tr className="border-b border-gray-50">
                  <td className="py-6 px-4 font-bold text-gray-900">Lab Integration</td>
                  <td className="py-6 px-8 text-center">Manual entry</td>
                  <td className="py-6 px-8 text-center">API-connected (Quest, LabCorp)</td>
                </tr>
                <tr className="border-b border-gray-50">
                  <td className="py-6 px-4 font-bold text-gray-900">Data Sharing</td>
                  <td className="py-6 px-8 text-center">User controls all sharing</td>
                  <td className="py-6 px-8 text-center">Provider access with patient consent</td>
                </tr>
                <tr className="border-b border-gray-50">
                  <td className="py-6 px-4 font-bold text-gray-900">Billing</td>
                  <td className="py-6 px-8 text-center text-gray-400">Not applicable</td>
                  <td className="py-6 px-8 text-center font-medium text-indigo-600">Automated CCM Billing</td>
                </tr>
                <tr className="border-b border-gray-50">
                  <td className="py-6 px-4 font-bold text-gray-900">Revenue Model</td>
                  <td className="py-6 px-8 text-center font-bold text-gray-900">$29/mo subscription</td>
                  <td className="py-6 px-8 text-center font-bold text-gray-900">$140-280/mo per patient via CCM</td>
                </tr>
                <tr>
                  <td className="py-8 px-4"></td>
                  <td className="py-8 px-8 text-center">
                    <button 
                      onClick={onStart}
                      className="bg-purple-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-purple-700 transition-colors w-full"
                    >
                      Join Now
                    </button>
                  </td>
                  <td className="py-8 px-8 text-center">
                    <button 
                      onClick={onProviderInquiry}
                      className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-indigo-700 transition-colors w-full"
                    >
                      Pilot Inquiry
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Individual Details Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-purple-50 p-8 rounded-3xl border border-purple-100">
                <h3 className="text-2xl font-bold mb-6">Self-Optimization (B2C)</h3>
                <div className="space-y-4">
                  {[
                    "Full Goal Wheel dashboard",
                    "Wearable integration (Oura, Apple, etc.)",
                    "Daily BioSync Score",
                    "Weekly personalized insights",
                    "100+ guide content library",
                    "1 biohacking protocol at a time",
                    "Monthly progress report (PDF)"
                  ].map((feature, i) => (
                    <div key={i} className="flex gap-3">
                      <Check className="text-purple-600" size={20} />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-8 border-t border-purple-100">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-4xl font-extrabold text-gray-900">$29</span>
                    <span className="text-gray-500">/month</span>
                  </div>
                  <p className="text-sm text-gray-600">Less than $1/day for high-performance health tracking.</p>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Your biomarkers. Your protocols. Your optimization path.</h2>
              <p className="text-lg text-gray-600 mb-8">
                BioSync Triad Self-Optimization is for anyone who wants to move beyond "steps and sleep scores" into real biomarker-driven health optimization. No clinic required. Just you, your devices, and intelligence.
              </p>
              <button 
                onClick={onStart}
                className="inline-flex items-center gap-2 text-purple-600 font-bold hover:gap-3 transition-all"
              >
                Start Your 7-Day Free Trial <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Provider Details Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">More revenue. Less admin. Better outcomes.</h2>
              <p className="text-lg text-gray-600 mb-8">
                Chronic Care Management (CCM) is one of the most underutilized revenue streams in primary care. BioSync Triad makes it easy by turning patient wellness data into reimbursable, auto-documented care.
              </p>
              <div className="space-y-4 mb-8">
                <div className="p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                  <p className="font-bold text-indigo-600 mb-1">Metabolic Reset Bundle</p>
                  <p className="text-sm text-gray-600">Reimbursement: $140-180/patient/mo</p>
                </div>
                <div className="p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                  <p className="font-bold text-indigo-600 mb-1">Resilience Protocol Bundle</p>
                  <p className="text-sm text-gray-600">Reimbursement: $110-140/patient/mo</p>
                </div>
              </div>
              <button 
                onClick={onProviderInquiry}
                className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-lg"
              >
                Request Pilot Access
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 text-center">
                <p className="text-3xl font-bold text-indigo-600 mb-2">73%</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider font-bold">Patient Engagement</p>
              </div>
              <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 text-center">
                <p className="text-3xl font-bold text-indigo-600 mb-2">0</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider font-bold">Manual Note Entry</p>
              </div>
              <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 text-center">
                <p className="text-3xl font-bold text-indigo-600 mb-2">6</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider font-bold">SAMHSA Principles</p>
              </div>
              <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 text-center">
                <p className="text-3xl font-bold text-indigo-600 mb-2">Live</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider font-bold">Telehealth Portal</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Choice Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Not sure which path is right?</h2>
          <div className="bg-purple-600 rounded-3xl p-12 text-white shadow-2xl">
            <h3 className="text-2xl font-bold mb-4">Establish Your Baseline</h3>
            <p className="text-purple-100 mb-8 max-w-xl mx-auto">
              Take our 5-minute health assessment. We'll map your biomarkers to the Goal Wheel and recommend the best starting path for your needs.
            </p>
            <button 
              onClick={onStart}
              className="bg-white text-purple-600 px-8 py-3 rounded-xl font-bold hover:bg-purple-50 transition-all"
            >
              Take the Assessment Quiz
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
