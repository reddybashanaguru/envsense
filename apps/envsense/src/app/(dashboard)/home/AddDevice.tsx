'use client';

import { useState } from 'react';

const AddDevice = () => {
  const [deviceName, setDeviceName] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const token = document.cookie.split(';').find(c => c.trim().startsWith('auth_token='))?.split('=')[1];

    if (!token) {
      alert('Please log in first');
      return;
    }

    const res = await fetch('http://localhost:8080/devices', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ name: deviceName }),
    });

    if (res.ok) {
      alert('Device added successfully');
    } else {
      alert('Failed to add device');
    }
  };

  return (
    <div className="mt-4">
      <h3>Add Device</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={deviceName}
          onChange={(e) => setDeviceName(e.target.value)}
          placeholder="Enter device name"
          required
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Add</button>
      </form>
    </div>
  );
};

export default AddDevice;
