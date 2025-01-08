import AlertCard from '../../components/AlertCards';
import CardWithLinks from '../../components/CardwithLinks';
import DatalogCard from '../../components/DatalogCard';
import MainCard from '../../components/MainCard';
import {
  ExclamationTriangleIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/solid';

export default function HomeComponent() {
  const sampleLinks = [
    { label: 'Data Logger 1', href: '/link1' },
    { label: 'Data Logger 2', href: '/link2' },
  ];

  return (
    <div>
      <div>
        <div className="flex justify-between p-2">
          <CardWithLinks
            title="Active Continous Monitoring Devices (CMS)"
            links={sampleLinks}
          />
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
        </div>
      </div>

      <div className="flex justify-between p-4 mt-4">
        <MainCard
          title="Calibration Over Due"
          backgroundColor="bg-white-500"
        />
        <DatalogCard
          title="Actions Required"
          value="0"
          backgroundColor="bg-white"
        />
      </div>
    </div>
  );
}
