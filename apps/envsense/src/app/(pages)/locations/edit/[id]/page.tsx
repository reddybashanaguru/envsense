import City from '../../city';
import Overview from '../monitorwithsettings';

export default function EditPage() {
  return (
    <div>
      <City
        initialCity="CITY PHARMACY"
        subcity="CITY PHARMACY SHARJAH"
        sublocations={['ARCHIEVED UNITS']}
      />
      <Overview />
    </div>
  );
}
