import City from './city';

export default function Main() {
  return (
    <>
      <City
        initialCity="CITY PHARMACY"
        subcity=""
        sublocations={[
          'City Pharmacy Sharjah',
          'City Pharmacy Jafza',
          'City Pharmacy Dubai',
          'City Pharmacy Jafza',
          'City Pharmacy Dubai',
        ]}
      />
    </>
  );
}
