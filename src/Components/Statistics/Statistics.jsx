import { Cell, Pie, PieChart } from 'recharts';

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill='white'
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline='central'
    >
      {`${(percent * 100).toFixed(1)}%`}
    </text>
  );
};
const Statistics = () => {
  let donateIdLength = 0;
  if (localStorage.getItem('donateId')) {
    donateIdLength = JSON.parse(localStorage.getItem('donateId')).length;
  }
  const data = [
    {
      name: 'Total Donation',
      value: 12 - donateIdLength,
    },
    {
      name: 'Your Donation',
      value: donateIdLength,
    },
  ];

  const COLORS = ['#FF444A', '#00C49F'];

  return (
    <div className='container mx-auto px-4'>
      <div className='flex flex-col items-center'>
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx={200}
            cy={200}
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={150}
            fill='#8884d8'
            dataKey='value'
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
        <div className='colorIndicator flex flex-col sm:flex-row items-center justify-center gap-10'>
          <h1 className='text-xl flex gap-5 items-center'>
            Your Donation{' '}
            <span className='w-24 h-2 bg-[#00C49F] block rounded'></span>
          </h1>
          <h1 className='text-xl flex gap-5 items-center'>
            Total Donation{' '}
            <span className='w-24 h-2 bg-[#FF444A] block rounded'></span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
