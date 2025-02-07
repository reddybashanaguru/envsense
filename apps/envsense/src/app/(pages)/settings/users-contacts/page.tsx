'use client';
import React, { useState } from 'react';
import UserDataCards from './userdatacards';

const users = [
  { Role: 'Quality Manager Admin 01' },
  { Role: 'PA to GM Admin 02' },
  { Role: 'Showroom Dubai' },
  { Role: 'Khaleel' },
  { Role: 'Showroom Sharjah' },
];

const CreateUsers: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredUsers, setFilteredUsers] = useState(users);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value.toLowerCase();
    setSearchTerm(searchValue);

    const filtered = users.filter((user) =>
      user.Role.toLowerCase().includes(searchValue)
    );
    setFilteredUsers(filtered);
  };

  return (
    <div className="p-6 max-w-auto bg-white shadow-md rounded-lg mt-4">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">
        Users & Contacts
      </h1>

      <div className="flex gap-4 mb-6 items-center text-sm">
        <div className="flex gap-1 w-full">
          <div className="w-full sm:w-1/3">
            <input
              type="text"
              disabled
              defaultValue="Sort By: Last Name"
              className="border border-gray-300 p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="w-full sm:w-2/3">
            <input
              type="search"
              placeholder="Search contacts"
              className="border border-gray-300 p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
        </div>

        <div className="flex gap-4 justify-end">
          <div className="w-auto">
            <button className="border-b text-blue-400 px-4 py-2 rounded-lg hover:transition-all w-auto flex items-center justify-center whitespace-nowrap">
              Manage User Roles
            </button>
          </div>

          <div className="w-auto">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all w-auto flex items-center justify-center whitespace-nowrap">
              Add User or Contact
            </button>
          </div>
        </div>
      </div>

      <UserDataCards data={filteredUsers} />
    </div>
  );
};

export default CreateUsers;
