'use client'

import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Legend } from 'recharts';


function RadarChartComponent({data}) {
  return (
    <ResponsiveContainer width="100%" height='100%'>

    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
    <PolarGrid />
    <Legend />
    <PolarAngleAxis dataKey="name" />
    <PolarRadiusAxis />
    <Radar name="Reveune" dataKey="revenue" stroke="#2563eb" fill="#3b82f6" fillOpacity={0.6} />
    <Radar name="Profit" dataKey="profit" stroke="#7c3aed" fill="#8b5cf6" fillOpacity={0.6} />
    </RadarChart>
    </ResponsiveContainer>

  )
}

export default RadarChartComponent