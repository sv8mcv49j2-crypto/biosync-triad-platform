import { analyzeCorrelations, getCorrelationLabel } from '../lib/CorrelationEngine';
import type { CorrelationResult } from '../lib/CorrelationEngine';
import { Zap, Activity, Brain, Heart, Info, ArrowRight } from 'lucide-react';

const InsightsView = () => {
  const correlations = analyzeCorrelations({});

  return (
    <div className="max-w-4xl space-y-8 animate-in fade-in duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Personalized Insights</h2>
          <p className="text-gray-500">Data-driven correlations across your 5 health pillars.</p>
        </div>
        <div className="px-4 py-2 bg-purple-50 rounded-lg border border-purple-100 flex items-center gap-2">
          <Info size={16} className="text-purple-600" />
          <span className="text-sm font-medium text-purple-700">Last updated: Today, 3:00 AM</span>
        </div>
      </div>

      <div className="grid gap-6">
        {correlations.map((insight) => (
          <InsightCard key={insight.template_id} insight={insight} />
        ))}
      </div>

      <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
        <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
          <Activity size={20} className="text-blue-600" />
          Emerging Patterns
        </h3>
        <div className="flex items-center gap-4 text-gray-500">
          <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center">
            <Zap size={20} />
          </div>
          <div>
            <p className="text-sm font-medium">Glucose-Mood Correlation</p>
            <p className="text-xs">More data needed. Continue logging your mood for 3 more days.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const InsightCard = ({ insight }: { insight: CorrelationResult }) => {
  const strengthLabel = getCorrelationLabel(insight.strength);
  
  return (
    <div className="p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:border-purple-200 transition-all">
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="flex -space-x-2">
            {insight.pillars.map((pillar, i) => (
              <div 
                key={pillar}
                className={`w-10 h-10 rounded-full border-2 border-white flex items-center justify-center ${
                  i === 0 ? 'bg-blue-100 text-blue-600' : 'bg-purple-100 text-purple-600'
                }`}
                title={pillar}
              >
                {pillar.includes('Sleep') ? <Heart size={18} /> : 
                 pillar.includes('Metabolic') ? <Activity size={18} /> :
                 pillar.includes('Stress') ? <Zap size={18} /> :
                 <Brain size={18} />}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2 px-3 py-1 bg-gray-50 rounded-full border border-gray-100">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4].map((i) => (
                <Zap 
                  key={i}
                  size={12} 
                  className={i <= (insight.strength * 5) ? 'text-purple-600 fill-purple-600' : 'text-gray-200'} 
                />
              ))}
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">{strengthLabel}</span>
          </div>
        </div>
        <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${
          insight.confidence === 'high' ? 'bg-green-50 text-green-600 border border-green-100' : 'bg-blue-50 text-blue-600 border border-blue-100'
        }`}>
          {insight.confidence} Confidence
        </span>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-bold text-gray-900 mb-3">{insight.headline}</h3>
        <p className="text-gray-600 leading-relaxed">{insight.body}</p>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-4 p-4 bg-purple-50/50 rounded-xl border border-purple-100/50">
        <div className="flex-1">
          <p className="text-sm font-medium text-purple-900">{insight.recommendation}</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-2 bg-purple-600 text-white rounded-lg text-sm font-bold hover:bg-purple-700 transition-colors">
          {insight.cta}
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default InsightsView;
