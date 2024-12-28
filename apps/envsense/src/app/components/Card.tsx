import AlertCard from './AlertCards';
import CardWithLinks from './CardwithLinks';
import ChannelCard from './ChannelCard';
import DropdownMenu from './DropdownMenu';
import MainCard from './MainCard';
import OutOfRangeChannelCard from './OutOfRangeChannelCard';
import { ExclamationTriangleIcon, ExclamationCircleIcon  } from '@heroicons/react/24/solid';
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
  ];

  return (
    <div className="p-2">
      {/* Dropdown Menu */}
      <DropdownMenu />

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-3">
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
        {/* Card with several links */}

        <div className="p-2">
          {/* Flex Layout for side-by-side alignment */}
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            {/* MainCard */}
            <div className="flex-1">
              <MainCard
                title="Sensors Due for Calibration"
                backgroundColor="bg-blue-500"
              />
            </div>

            {/* CardWithLinks */}
            <div className="flex-1">
              <CardWithLinks
                title="Data loggers with available Firmware Updates"
                links={sampleLinks}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Cards with flex layout (for side-by-side cards) */}
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-4">
        {/* Channel Cards */}
        <ChannelCard
          title="Channels with the most excursions within the past 6 months"
          chartData={[25000, 5000]} // Sample chart data
        />
        <ChannelCard
          title="Data Loggers with the most excursions within the past 6 months"
          chartData={[25000, 5000, 10000, 12000, 7000]} // Sample chart data
        />
      </div>

      {/* Out of Range Channel Card */}
      <div className="mt-4">
        <OutOfRangeChannelCard
          title="Channels Out of Range longest over the past 6 months"
          data={sampleData} // Provide the sample data
          backgroundColor="bg-white"
        />
      </div>
    </div>
  );
}
