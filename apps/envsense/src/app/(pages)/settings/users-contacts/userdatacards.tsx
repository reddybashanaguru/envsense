import React from 'react';
import { UserCircleIcon } from '@heroicons/react/24/solid';
import { EllipsisVerticalIcon } from '@heroicons/react/24/solid';
interface UserCardData {
  Role: string;
}

interface Props {
  data: UserCardData[];
}

const UserDataCards: React.FC<Props> = ({ data }) => {
  return (
    <div>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((item, index) => (
          <div
            key={index}
            className="p-4 border rounded-lg shadow-sm flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <UserCircleIcon className="h-6 w-6 text-blue-500" />

              <span className="font-semibold">{item.Role}</span>
            </div>

            <EllipsisVerticalIcon className="h-6 w-6 text-gray-500" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserDataCards;
