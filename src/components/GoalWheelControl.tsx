import { useState } from 'react';
import GoalWheel from './GoalWheel';

const GoalWheelControl = () => {
  const [metrics, setMetrics] = useState([
    { subject: 'Metabolic Fuel', value: 85, fullMark: 100 },
    { subject: 'Sleep & Recovery', value: 70, fullMark: 100 },
    { subject: 'Stress & Resilience', value: 90, fullMark: 100 },
    { subject: 'Movement & Vitality', value: 45, fullMark: 100 },
    { subject: 'Mind & Connection', value: 80, fullMark: 100 },
  ]);

  const updateMetric = (index: number, newValue: number) => {
    const updated = [...metrics];
    updated[index].value = newValue;
    setMetrics(updated);
  };

  return (
    <div className="space-y-8">
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <GoalWheel data={metrics} />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {metrics.map((metric, index) => (
          <div key={metric.subject} className="p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
            <div className="flex justify-between mb-2">
              <span className="text-sm font-semibold text-gray-700">{metric.subject}</span>
              <span className="text-sm font-bold text-purple-600">{metric.value}%</span>
            </div>
            <input 
              type="range" 
              min="0" 
              max="100" 
              value={metric.value} 
              onChange={(e) => updateMetric(index, parseInt(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
            />
          </div>
        ))}
      </div>

      <div className="bg-purple-50 p-4 rounded-xl border border-purple-100">
        <h4 className="text-sm font-bold text-purple-800 mb-1">Clinical Insight</h4>
        <p className="text-xs text-purple-600 leading-relaxed">
          {metrics.filter(m => m.value < 50).length > 0 
            ? "⚠️ Action Required: Some pillars are below the 50% threshold. Consider scheduling a clinical touchpoint."
            : "✅ All systems stable. Your BioSync Index is in the optimal range for proactive thriving."}
        </p>
      </div>
    </div>
  );
};

export default GoalWheelControl;
