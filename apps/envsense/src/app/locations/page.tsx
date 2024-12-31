import City from './city';
import Monitor from './monitoring';
// import NewLocation from './newlocation';

export default function Main() {
  return (
    <>
      <City
        initialCity="CITY PHARMACY"
        subcity=''
        sublocations={[
          'City Pharmacy Sharjah',
          'City Pharmacy Jafza',
          'City Pharmacy Dubai',
          'City Pharmacy Jafza',
          'City Pharmacy Dubai',
        ]}
      />
      <Monitor />
      {/* <NewLocation /> */}
    </>
  );
}
