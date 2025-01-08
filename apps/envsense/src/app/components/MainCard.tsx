'use client';
import React from 'react';
import SmallCard from './SmallCard';
interface MainCardProps {
  title: string;
  backgroundColor: string;
}

const MainCard: React.FC<MainCardProps> = ({ title, backgroundColor }) => {
  return (
    <div className="w-[715px] h-[239px] bg-white shadow-lg rounded-lg overflow-hidden">
      <div className={`p-4 font-semibold text-x text-center ${backgroundColor}`}>{title}</div>
      <div className="p-4 grid grid-cols-4 gap-4">
        <SmallCard title="Overdue" value="0" backgroundColor="bg-gray-100" />
        <SmallCard title="Due in <30 days" value="1" backgroundColor="bg-yellow-500" />
        <SmallCard title="Due in 30 - 90 days" value="0" backgroundColor="bg-gray-100" />
        <SmallCard title="Due in > 90 days" value="0" backgroundColor="bg-gray-100" />
      </div>
    </div>
  );
};

export default MainCard;
