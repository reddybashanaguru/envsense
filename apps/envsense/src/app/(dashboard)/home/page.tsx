import { cookies } from 'next/headers'; // for server-side cookies handling
import jwtDecode from 'jwt-decode'; // Import jwt-decode
import Card from '../../components/Card'; // Import the Card component
import Hardware from '../../register_hardware/page';

async function fetchDevices(token: string) {
  const res = await fetch('http://localhost:8080/devices', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch devices');
  }

  return res.json();
}

export default async function Dashboard() {
  // Access the cookie for auth_token
  // const cookieStore = await cookies();
  // const token = cookieStore.get('auth_token')?.value;

  // if (!token) {
  //   return (
  //     <div>
  //       <p>
  //         You are not logged in. Please <a href="/login">login</a> to access the
  //         dashboard.
  //       </p>
  //     </div>
  //   );
  // }

  // // Decode the JWT to get the user role
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
  //   devices = (await fetchDevices(token)) || [];
  // } catch (error) {
  //   return <div>Failed to load devices. Please try again later.</div>;
  // }

  return (
    <div>
      <Card />
      {/* <Hardware /> */}
    </div>
  );
}
