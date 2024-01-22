import { Select } from 'flowbite-react';

import StudentList from './StudentList';

import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Pie,
  PieChart,
} from 'recharts';

import Layout from '../../../Layouts';

const data = [
  {
    name: 'Jan',
    pv: 2400,
  },
  {
    name: 'Feb',
    pv: 1398,
  },
  {
    name: 'Mar',
    pv: 3800,
  },
  {
    name: 'Apr',
    pv: 3908,
  },
  {
    name: 'May',
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Jun',
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Jul',
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Sep',
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Oct',
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Nov',
    pv: 25,
    amt: 2100,
  },
  {
    name: 'Dec',
    pv: 15,
    amt: 2100,
  },
];

const data2 = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const GetTeacherStudent = () => {
  return (
    <Layout label="Students">
      <>
        <div className="flex flex-col lg:flex-row lg:justify-between">
          <div className="w-full lg:w-3/5 p-4 bg-white shadow-lg rounded-2xl mr-4">
            <div className="flex justify-between">
              <div>
                <h4 className="text-sm text-gray-500 font-bold">
                  Student Enrolled & Left
                </h4>
                <span className="font-bold text-xs text-gray-500 mr-2 items-center">
                  <span className="text-xl text-purple-500">&bull;</span>Male
                </span>
                <span className="font-bold text-xs text-gray-500 items-center">
                  <span className="text-xl text-green-500">&bull;</span>Female
                </span>
              </div>

              <div>
                <Select id="year" required>
                  <option>year</option>
                  <option>2022</option>
                  <option>2023</option>
                  <option>2024</option>
                </Select>
              </div>
            </div>

            <div className="h-full lg:h-5/6">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  width={500}
                  height={300}
                  data={data}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <XAxis dataKey="name" />
                  <YAxis ticks={[0, 10, 15, 30, 50, 75, 100]} />
                  <Bar dataKey="pv" stackId="a" fill="#8884d8" />
                  <Bar dataKey="amt" stackId="a" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="w-full lg:w-2/5 p-4 bg-white shadow-lg rounded-xl">
            <div className="font-bold text-lg text-gray-500">
              Student Geolocation Rate
            </div>
            <div className="h-full lg:h-5/6">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart width={400} height={400}>
                  <Pie
                    data={data2}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {data.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex overflow-x-auto sm:justify-center text-xs text-gray-400 items-center">
              <span>
                <span className="text-xl" style={{ color: '#0088FE' }}>
                  &bull;
                </span>
                Africa
              </span>
              <span className="ml-1">
                <span className="text-xl" style={{ color: '#00C49F' }}>
                  &bull;
                </span>
                Europe
              </span>
              <span className="mr-1 ml-1">
                <span className="text-xl" style={{ color: '#FFBB28' }}>
                  &bull;
                </span>
                America
              </span>
              <span>
                <span className="text-xl" style={{ color: '#FF8042' }}>
                  &bull;
                </span>
                Asia
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-2xl mt-8">
          <StudentList />
        </div>
      </>
    </Layout>
  );
};

export default GetTeacherStudent;
