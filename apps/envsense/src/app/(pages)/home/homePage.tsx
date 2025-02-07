import Link from 'next/link';
import AlertCard from '../../components/AlertCards';
import CardWithLinks from '../../components/CardwithLinks';
import DatalogCard from '../../components/DatalogCard';
import DropdownMenu from '../../components/DropdownMenu';
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
      {/* <DropdownMenu /> */}

      <div className="flex justify-evenly flex-row gap-2 p-2">
        <CardWithLinks
          title="Active Continous Monitoring Devices (CMS)"
          links={sampleLinks}
        />
        <Link href={'/alerts'}>
          <AlertCard
            title="Active Excursions"
            value="0"
            backgroundColor="bg-red-700"
            icon={<ExclamationCircleIcon />}
          />
        </Link>

        <Link href={''}>
          <AlertCard
            title="Active Warnings"
            value="4"
            backgroundColor="bg-yellow-500"
            icon={<ExclamationTriangleIcon />}
          />
        </Link>
      </div>

      <div className="flex justify-evenly flex-row gap-2 p-2 mt-4 ">
        <MainCard title="Calibration Over Due" backgroundColor="bg-white-500" />
        <Link href={''}>
          <DatalogCard
            title="Actions Required"
            value="0"
            backgroundColor="bg-white"
          />
        </Link>
      </div>
    </div>
  );
}
