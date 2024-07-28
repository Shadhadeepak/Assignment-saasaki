'use client'
import { AreaChart,Area,ResponsiveContainer,XAxis,YAxis,CartesianGrid,Tooltip,Legend } from "recharts"


const AreaChartComponent = ({data}) => {
  return (
    <ResponsiveContainer width="100%" height='100%'>

    <AreaChart width={500} height={400} data={data} margin={{right:30}}>
    <YAxis />
    <XAxis dataKey='name' />
    <CartesianGrid  strokeDasharray='5 5 '/>
    <Legend />
    <Tooltip />
      <Area type='monotone' dataKey='revenue' stroke="#2563eb" fill="#3b82f6 " stackId={1}/>
      <Area type='monotone' dataKey='profit' stroke="#7c3aed" fill="#8b5cf6 " stackId={1}/>
    </AreaChart>
    </ResponsiveContainer>


  )
}

export default AreaChartComponent