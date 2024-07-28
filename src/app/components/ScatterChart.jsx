'use client'
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';


import React from 'react'

function ScatterChartComponent({data}) {
  return (
    <ResponsiveContainer width='100%' height='100%'>
        <ScatterChart margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}>
            <Tooltip />
            <Legend />
            <CartesianGrid />
            <XAxis type="number" dataKey="revenue" name="Revenue" unit="Rs" />
            <YAxis type="number" dataKey="profit" name="Profit" unit="Rs" />
          <Scatter name="Revenue " data={data} fill="#8884d8" />
          <Scatter name="profit " data={data} fill="#8884d8" />


        </ScatterChart>
         
    </ResponsiveContainer>
  )
}

export default ScatterChartComponent