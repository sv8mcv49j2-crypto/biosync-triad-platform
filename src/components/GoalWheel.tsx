import React from 'react';
import { 
  Radar, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  ResponsiveContainer,
  Tooltip
} from 'recharts';

interface GoalWheelData {
  subject: string;
  value: number;
  fullMark: number;
}

const defaultData: GoalWheelData[] = [
  { subject: 'Metabolic Fuel', value: 85, fullMark: 100 },
  { subject: 'Sleep & Recovery', value: 70, fullMark: 100 },
  { subject: 'Stress & Resilience', value: 90, fullMark: 100 },
  { subject: 'Movement & Vitality', value: 45, fullMark: 100 },
  { subject: 'Mind & Connection', value: 80, fullMark: 100 },
];

interface GoalWheelProps {
  data?: GoalWheelData[];
}

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 border border-gray-200 shadow-lg rounded-lg">
        <p className="text-sm font-bold text-gray-800">{payload[0].payload.subject}</p>
        <p className="text-sm text-purple-600 font-semibold">
          Score: {payload[0].value}%
        </p>
      </div>
    );
  }
  return null;
};

const GoalWheel = ({ data = defaultData }: GoalWheelProps) => {
  return (
    <div className="w-full h-[400px] flex items-center justify-center relative">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid stroke="#e5e7eb" strokeDasharray="3 3" />
          <PolarAngleAxis 
            dataKey="subject" 
            tick={{ fill: '#6b7280', fontSize: 13, fontWeight: 600 }}
          />
          <PolarRadiusAxis 
            angle={30} 
            domain={[0, 100]} 
            tick={false} 
            axisLine={false} 
          />
          <Radar
            name="Health Metrics"
            dataKey="value"
            stroke="#7c3aed"
            strokeWidth={3}
            fill="#8b5cf6"
            fillOpacity={0.4}
            dot={{ r: 4, fill: '#7c3aed' }}
          />
          <Tooltip content={<CustomTooltip />} />
        </RadarChart>
      </ResponsiveContainer>
      
      {/* Legend / Info Overlay (Optional) */}
      <div className="absolute bottom-0 right-0 p-2 bg-white/80 backdrop-blur-sm rounded-lg border border-gray-100 hidden md:block">
        <div className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">BioSync Index</div>
        <div className="text-lg font-bold text-purple-700">74.2</div>
      </div>
    </div>
  );
};

export default GoalWheel;
