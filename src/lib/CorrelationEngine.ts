/**
 * Core statistical function for calculating Pearson correlation
 */
export function pearsonCorrelation(x: number[], y: number[]): number {
  const n = x.length;
  if (n < 3 || n !== y.length) return 0;
  
  const sumX = x.reduce((a, b) => a + b, 0);
  const sumY = y.reduce((a, b) => a + b, 0);
  const sumXY = x.reduce((total, xi, i) => total + xi * y[i], 0);
  const sumX2 = x.reduce((a, b) => a + b * b, 0);
  const sumY2 = y.reduce((a, b) => a + b * b, 0);
  
  const numerator = n * sumXY - sumX * sumY;
  const denominator = Math.sqrt(
    (n * sumX2 - sumX * sumX) * (n * sumY2 - sumY * sumY)
  );
  
  if (denominator === 0) return 0;
  
  const r = numerator / denominator;
  
  // Clamp to [-1, 1]
  return Math.max(-1, Math.min(1, r));
}

export interface CorrelationResult {
  template_id: string;
  type: 'temporal' | 'concurrent' | 'lagging' | 'cumulative';
  correlation: 'inverse' | 'direct';
  strength: number;
  confidence: 'low' | 'medium' | 'high';
  headline: string;
  body: string;
  recommendation: string;
  cta: string;
  pillars: string[];
}

export function getCorrelationLabel(r: number): string {
  const absR = Math.abs(r);
  if (absR >= 0.8) return 'Very strong';
  if (absR >= 0.6) return 'Strong';
  if (absR >= 0.4) return 'Moderate';
  if (absR >= 0.2) return 'Weak';
  return 'Very weak';
}

/**
 * Mock implementation of Aria's correlation logic for implementation purposes
 */
export function analyzeCorrelations(_data: any): CorrelationResult[] {
  const results: CorrelationResult[] = [];

  // Sleep -> Glucose
  // Mock logic: r = -0.65
  results.push({
    template_id: 'sleep_glucose',
    type: 'temporal',
    correlation: 'inverse',
    strength: 0.65,
    confidence: 'high',
    headline: 'Your sleep quality predicts tomorrow\'s glucose',
    body: 'When your sleep quality improves by 20%, your fasting glucose typically drops 4.2 mg/dL the next day.',
    recommendation: 'Focus on 8 hours of sleep before high-carb days.',
    cta: 'Start Sleep Architecture Reset',
    pillars: ['Sleep & Recovery', 'Metabolic Fuel']
  });

  // Stress -> Sleep
  // Mock logic: r = 0.52
  results.push({
    template_id: 'stress_sleep',
    type: 'concurrent',
    correlation: 'direct',
    strength: 0.52,
    confidence: 'medium',
    headline: 'Daily stress impacts your sleep latency',
    body: 'On days your stress is highest, it takes you about 18 minutes longer to fall asleep.',
    recommendation: 'Start your evening wind-down routine 30 minutes earlier on high-stress days.',
    cta: 'Try Stress Recovery Protocol',
    pillars: ['Stress & Resilience', 'Sleep & Recovery']
  });

  // Movement -> Glucose
  // Mock logic: r = -0.48
  results.push({
    template_id: 'movement_glucose',
    type: 'cumulative',
    correlation: 'inverse',
    strength: 0.48,
    confidence: 'high',
    headline: 'Zone 2 volume improves fasting glucose',
    body: 'Weeks you do more Zone 2 cardio, your fasting glucose averages 5.1 mg/dL lower.',
    recommendation: 'Adding two 30-min Zone 2 walks this week would likely drop your fasting glucose 3-5 mg/dL.',
    cta: 'Join Zone 2 Builder',
    pillars: ['Movement & Vitality', 'Metabolic Fuel']
  });

  return results;
}
