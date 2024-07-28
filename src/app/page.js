import AreaChartComponent from '../app/components/AreaChart';
import BarChartComponent from './components/BarChart';
import LineChartComponent from './components/LineChart';
import RadarChartComponent from './components/RadarChart';
import ScatterChartComponent from './components/ScatterChart';
import RadialChartComponent from './components/RadialChart';

// Example sales data
const salesData = [
  { name: 'Jan', revenue: 4000, profit: 2400 },
  { name: 'Feb', revenue: 3000, profit: 1398 },
  { name: 'Mar', revenue: 9800, profit: 2000 },
  { name: 'Apr', revenue: 3908, profit: 2780 },
  { name: 'May', revenue: 4800, profit: 1890 },
  { name: 'Jun', revenue: 3800, profit: 2390 },
];

export default function Home() {
  return (<>
      <h1 className='text-3xl flex text-center items-center justify-center pt-10 pb-5'>DASHBOARD</h1>
    <main className="-slate-950 flex min-h-screen flex-col items-center justify-center px-4 md:px-8 xl:px-12  py-12 ">
      <div className="grid xl:grid-cols-3 lg:grid-cols-2 w-full gap-10 max-w-[1400px]">
        <GridItem className='' title="Area Chart">
          <AreaChartComponent data={salesData} />
        </GridItem>
        <GridItem title="Bar Chart">
          <BarChartComponent data={salesData} />
        </GridItem>
        <GridItem title="Line Chart">
          <LineChartComponent data={salesData} />
        </GridItem>
        <GridItem title="Radar Chart">
          <RadarChartComponent data={salesData} />
        </GridItem>
        <GridItem title="Scatter Chart">
          <ScatterChartComponent data={salesData} />
        </GridItem>
        <GridItem title="Radial Chart">
          <RadialChartComponent data={salesData} />
        </GridItem>
       
      </div>
    </main>
  </>
  );
}

function GridItem({ title, children }) {
  return (
    <div className="flex flex-col items-center justify-center p-4 border border-slate-900 bg-slate-900/50 rounded-xl h-[400px] ">
      <h3 className="text-2xl font-semibold text-white mb-4">{title}</h3>
      {children}
    </div>
  );
}
