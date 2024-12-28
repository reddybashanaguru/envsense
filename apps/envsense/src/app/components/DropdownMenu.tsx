'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const DropdownMenu: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>('Dashbord:DicksonOne Default');

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="mb-6 flex items-center justify-between space-x-4">
      <div className="flex items-center text-center space-x-2">
        <select
          id="dropdown"
          value={selectedOption}
          onChange={handleSelectChange}
          className="w-72 p-2 border rounded-md text-sm font-bold"
        >
          <option value="Dashbord: DicksonOne Default">Dashbord: DicksonOne Default</option>
          <option value="option 1">option 2</option>
          <option value="option 2">option 2</option>
          
          {/* More options */}
        </select>
        <label htmlFor="dropdown" className="text-sm font-semibold mr-2 border rounded-[2px] p-1">
          Your Default
        </label>
      </div>

      <div className="flex space-x-4">
        <Link href="#" className="bg-white text-blue-500 p-2 border rounded-md text-sm font-semibold">
          + Add Hardware
        </Link>
        <Link href="#" className="bg-blue-500 text-white p-2 rounded-md text-sm font-semibold">
          + Create Custom Dashboard
        </Link>
      </div>
    </div>
  );
};

export default DropdownMenu;
