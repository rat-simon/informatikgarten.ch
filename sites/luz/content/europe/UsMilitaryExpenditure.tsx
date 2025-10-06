"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine } from 'recharts';

const data = [
  { year: 1988, absolute: 797866.0, share: 46.58 },
  { year: 1989, absolute: 791125.5, share: 46.16 },
  { year: 1990, absolute: 758217.3, share: 47.64, note: "Ende des Kalten Krieges" },
  { year: 1991, absolute: 669786.5, share: null },
  { year: 1992, absolute: 705819.7, share: 48.25 },
  { year: 1993, absolute: 668046.7, share: 53.26 },
  { year: 1994, absolute: 633319.1, share: 51.72 },
  { year: 1995, absolute: 591579.8, share: 51.88 },
  { year: 1996, absolute: 559401.2, share: 49.88 },
  { year: 1997, absolute: 556507.3, share: 46.75 },
  { year: 1998, absolute: 543941.3, share: 47.03 },
  { year: 1999, absolute: 545279.8, share: 45.19 },
  { year: 2000, absolute: 566381.0, share: 43.69 },
  { year: 2001, absolute: 570981.0, share: 44.52, note: "11. September" },
  { year: 2002, absolute: 641102.5, share: 42.01 },
  { year: 2003, absolute: 729680.6, share: 43.92, note: "Beginn Irakkrieg" },
  { year: 2004, absolute: 795293.5, share: 46.85 },
  { year: 2005, absolute: 831923.9, share: 49.04 },
  { year: 2006, absolute: 843911.7, share: 49.94 },
  { year: 2007, absolute: 866430.5, share: 48.69 },
  { year: 2008, absolute: 929457.8, share: 47.17 },
  { year: 2009, absolute: 1002596.4, share: 47.34 },
  { year: 2010, absolute: 1031257.1, share: 50.05 },
  { year: 2011, absolute: 1019045.9, share: 51.40, note: "Höchststand Krieg gegen Terror" },
  { year: 2012, absolute: 962443.2, share: 51.37 },
  { year: 2013, absolute: 888413.2, share: 49.54 },
  { year: 2014, absolute: 833765.0, share: 46.05 },
  { year: 2015, absolute: 814831.4, share: 42.64 },
  { year: 2016, absolute: 812331.0, share: 41.63 },
  { year: 2017, absolute: 803961.2, share: 41.02 },
  { year: 2018, absolute: 828158.3, share: 39.43 },
  { year: 2019, absolute: 875217.4, share: 38.98 },
  { year: 2020, absolute: 916416.6, share: 39.78 },
  { year: 2021, absolute: 906594.3, share: 41.23 },
  { year: 2022, absolute: 896121.2, share: 39.51, note: "Beginn Ukrainekrieg" },
  { year: 2023, absolute: 916014.7, share: 36.61 },
  { year: 2024, absolute: 968381.6, share: 34.22 }
];

interface CustomTooltipProps {
  active?: boolean;
  payload?: { color: string; name: string; value: number }[];
  label?: number;
}

export default function USMilitaryDualAxis() {
  const formatYAxisBillion = (value) => {
    return `$${(value / 1000).toFixed(0)}B`;
  };

  const formatYAxisPercent = (value) => {
    return `${value}%`;
  };

  const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
    if (active && payload && payload.length) {
      const noteData = data.find(d => d.year === label);
      return (
        <div style={{
          backgroundColor: 'rgb(var(--nextra-bg))',
          border: '1px solid #77777777',
          borderRadius: '4px',
          padding: '10px'
        }}>
          <p style={{ fontWeight: 'bold', marginBottom: '5px' }}>{label}</p>
          {payload.map((entry, index) => (
            <p key={index} style={{ color: entry.color, margin: '2px 0' }}>
              {entry.name}: {entry.name.includes('Share') ? 
                `${entry.value?.toFixed(1)}%` : 
                `$${(entry.value / 1000).toFixed(1)}B`}
            </p>
          ))}
          {noteData?.note && (
            <p style={{ marginTop: '5px', fontStyle: 'italic', fontSize: '12px', color: '#666' }}>
              {noteData.note}
            </p>
          )}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">
        US-Militärausgaben: Weltanteil vs. absolute Ausgaben (1988-2024)
      </h2>
      <p className="text-sm text-center mb-6">
        Die Divergenz zwischen Ausgabenniveau und globaler Dominanz
      </p>
      
      <ResponsiveContainer width="100%" height={500}>
        <LineChart
          data={data}
          margin={{
            top: 40,
            bottom: 20,
          }}
        >
          <XAxis
            dataKey="year"
            stroke="#666"
            tick={{ fontSize: 11 }}
          />
          <YAxis
            yAxisId="left"
            stroke="#2563eb"
            tick={{ fontSize: 11 }}
            tickFormatter={formatYAxisPercent}
            domain={[30, 55]}
            label={{ value: 'Weltanteil (%)', angle: -90, position: 'insideLeft', offset: 10, style: { fill: '#2563eb', textAnchor: 'middle' } }}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            stroke="#dc2626"
            tick={{ fontSize: 11 }}
            tickFormatter={formatYAxisBillion}
            domain={[500000, 1100000]}
            label={{ value: 'Absolute Ausgaben (konstant USD)', angle: 90, position: 'insideRight', offset: 10, style: { fill: '#dc2626', textAnchor: 'middle' } }}
          />
          <Tooltip content={<CustomTooltip />} />

          {/* Reference lines for key events */}
          <ReferenceLine yAxisId="left" x={1990} stroke="#666" strokeDasharray="3 3" label={{ value: 'Ende Kalter Krieg', position: 'top', fontSize: 10, fill: '#666', offset: 10 }} />
          <ReferenceLine yAxisId="left" x={2001} stroke="#fbbf24" strokeDasharray="3 3" label={{ value: '11. Sept.', position: 'top', fontSize: 10, fill: '#fbbf24', offset: 10 }} />
          <ReferenceLine yAxisId="left" x={2003} stroke="#f97316" strokeDasharray="3 3" label={{ value: 'Irakkrieg', position: 'top', fontSize: 10, fill: '#f97316', offset: 25 }} />
          <ReferenceLine yAxisId="left" x={2011} stroke="#8b5cf6" strokeDasharray="3 3" label={{ value: 'Höchststand', position: 'top', fontSize: 10, fill: '#8b5cf6', offset: 10 }} />
          <ReferenceLine yAxisId="left" x={2022} stroke="#ec4899" strokeDasharray="3 3" label={{ value: 'Ukrainekrieg', position: 'top', fontSize: 10, fill: '#ec4899', offset: 10 }} />

          <Line
            yAxisId="left"
            type="linear"
            dataKey="share"
            stroke="#2563eb"
            strokeWidth={3}
            dot={{ fill: '#2563eb', strokeWidth: 2, r: 3 }}
            connectNulls
            name="Weltanteil (%)"
          />
          <Line
            yAxisId="right"
            type="linear"
            dataKey="absolute"
            stroke="#dc2626"
            strokeWidth={3}
            dot={{ fill: '#dc2626', strokeWidth: 2, r: 3 }}
            name="Absolute Ausgaben (USD)"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}