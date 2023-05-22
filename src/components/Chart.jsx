import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

export default function Chart({ data }) {
  return (
    <div className="chart">
      <h3>User Analytics</h3>
      <ResponsiveContainer className="chartResponsive" width="90%" aspect={4 / 1}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis dataKey="Active User" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Active User" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}