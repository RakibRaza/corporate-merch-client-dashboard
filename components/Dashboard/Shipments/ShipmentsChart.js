import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";

const data = [
  {
    name: "Mon",
    pv: 200000,
    uv: 50000,
  },
  {
    name: "Tue",
    pv: 50000,
    uv: 180000,
  },
  {
    name: "Wed",
    pv: 80000,
    uv: 400000,
  },
  {
    name: "Thu",
    pv: 140000,
    uv: 200000,
  },
  {
    name: "Fri",
    pv: 60000,
    uv: 80000,
  },
  {
    name: "Sat",
    pv: 40000,
    uv: 140000,
  },
  {
    name: "Sun",
    pv: 140000,
    uv: 400000,
  }
];
const DataFormater = (number) => {
  return (number / 1000).toString() + 'K';
}
export default function ShipmentsChart() {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data}
        margin={{
          top: 5,
          right: 0,
          left: -10,
          bottom: 25
        }}
      >
        <XAxis tickMargin={10} axisLine={false} tickLine={false} dataKey="name" />
        <YAxis tickCount={6} domain={[0, 500000]} tickFormatter={DataFormater} axisLine={false} tickLine={false} />
        <Bar barSize={24} dataKey="pv" fill="#FF991F" radius={[8, 8, 0, 0]} />
        <Bar barSize={24} dataKey="uv" fill="#0052CC" radius={[8, 8, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
