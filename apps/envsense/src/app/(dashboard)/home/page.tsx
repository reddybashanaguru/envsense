// File: apps/envsense/src/app/(dashboard)/home/page.tsx
import { cookies } from 'next/headers'; // for server-side cookies handling
import { jwtDecode } from 'jwt-decode';
import SubHeader from '../../components/subHeader.tsx/page';
import ActiveCards from '../../components/activeCards/page';
import SensorFirmwareCards from '../../components/sensorFirmwareCards/page';
import ExcursionDetails from '../../components/excursionsDetails/page';
async function fetchDevices(token: string) {
  const res = await fetch('http://localhost:8080/devices', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  // if (!res.ok) {
  //   throw new Error('Failed to fetch devices');
  // }

  // return res.json();
  return [];
}

export default async function Dashboard() {
  // Access the cookie for auth_token
  const cookieStore = await cookies();
  const token = cookieStore.get('auth_token')?.value;
  console.log(token, "token")

  if (token) {
    return (
      <div>
        <p>You are not logged in. Please <a href="/login">login</a> to access the dashboard.</p>
      </div>
    );
  }

  // Decode the JWT to get the user role
  // let decoded: any;
  // try {
  //   decoded = jwtDecode(token);
  // } catch (error) {
  //   return (
  //     <div>
  //       <p>Error decoding the token. Please login again.</p>
  //     </div>
  //   );
  // }

  // const userRole = decoded.role; // Get role from decoded token
  // let devices = [];

  // try {
  //   // Fetch devices using the decoded token
  //   devices = await fetchDevices(token) || [];
  // } 
  // catch (error) {
  //   return <div>Failed to load devices. Please try again later.</div>;
  // }

  return (
    <div className="p-6">
      {/* <h1 className="text-2xl mb-4">Dashboard</h1>
      <h2 className="text-xl mb-4">Role: {userRole}</h2>
      <h3 className="text-lg mb-2">Devices:</h3>
      <ul>
        {devices.map((device: any) => (
          <li key={device.id}>{device.name}</li>
        ))}
      </ul>
      {userRole === 'admin' && (
        <div className="mt-4">
          <button className="bg-blue-500 text-white p-2 rounded">Add Device</button>
        </div>
      )}  */}

        <div className="contents">

          <SubHeader/>
        </div>
    

      <div className='flex p-5'>
            <div>
              <ActiveCards />
            </div>
          </div>

      <div className='flex pl-5'>
            <div>
              <SensorFirmwareCards />
            </div>
          </div>
          
      <div className='flex p-5'>
            <div>
              <ExcursionDetails />
            </div>
          </div>
          


    </div>
  );
}
