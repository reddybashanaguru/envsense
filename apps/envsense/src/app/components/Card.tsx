import AlertCard from './AlertCards';
import CardWithLinks from './CardwithLinks';
import ChannelCard from './ChannelCard';
import DatalogCard from './DatalogCard';
import DropdownMenu from './DropdownMenu';
import MainCard from './MainCard';
import OutOfRangeChannelCard from './OutOfRangeChannelCard';
import {
  ExclamationTriangleIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/solid';

export default function Card() {
  const sampleLinks = [
    { label: 'Data Logger 1', href: '/link1' },
    { label: 'Data Logger 2', href: '/link2' },
  ];

  const sampleData = [
    {
      timeoutRange: '5 minutes',
      channelName: 'Temperature CH:1',
      dataLoggerName: 'Logger A',
      location: 'City Pharmacy',
    },
    {
      timeoutRange: '10 minutes',
      channelName: 'Relative Humidity CH:3',
      dataLoggerName: 'Logger B',
      location: 'City Pharmacy',
    },
    {
      timeoutRange: '3 minutes',
      channelName: 'Temperature CH:2',
      dataLoggerName: 'Logger C',
      location: 'City Pharmacy',
    },
    {
      timeoutRange: '3 minutes',
      channelName: 'Temperature CH:2',
      dataLoggerName: 'Logger C',
      location: 'City Pharmacy',
    },
    {
      timeoutRange: '3 minutes',
      channelName: 'Temperature CH:2',
      dataLoggerName: 'Logger C',
      location: 'City Pharmacy',
    },
    {
      timeoutRange: '3 minutes',
      channelName: 'Temperature CH:2',
      dataLoggerName: 'Logger C',
      location: 'City Pharmacy',
    },
  ];

  return (
    <div>
      {/* Dropdown Menu */}
      <div className="p-2">
        <DropdownMenu />
      </div>

      <div>
        <div className="flex justify-between p-2 ">
          <AlertCard
            title="Active Excursions"
            value="0"
            backgroundColor="bg-red-700"
            icon={<ExclamationCircleIcon />}
          />
          <AlertCard
            title="Active Warnings"
            value="4"
            backgroundColor="bg-yellow-500"
            icon={<ExclamationTriangleIcon />}
          />
          <CardWithLinks
            title="Recently Viewed Data Loggers"
            links={sampleLinks}
          />
        </div>
      </div>

      <div className=" flex justify-between p-2 mt-4">
        <MainCard
          title="Sensors Due for Calibration"
          backgroundColor="bg-white-500"
        />
        <DatalogCard
          title="Data Loggers with available Firmware Updates"
          value="0"
          backgroundColor="bg-white-500"
        />
      </div>

      <div className="p-2">
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <ChannelCard
            title="Channels with the most excursions within the past 6 months"
            chartData={[25000, 5000]}
          />
          <ChannelCard
            title="Data Loggers with the most excursions within the past 6 months"
            chartData={[25000, 5000, 10000, 12000, 7000]}
          />
        </div>
      </div>

      <div>
        <div className="mt-4">
          <OutOfRangeChannelCard
            title="Channels Out of Range longest over the past 6 months"
            data={sampleData} // Provide the sample data
            backgroundColor="bg-white"
          />
        </div>
      </div>
    </div>
  );
}
