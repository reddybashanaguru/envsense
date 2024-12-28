'use client'; // Mark this file as a client-side component
import React from 'react';

interface SmallCardProps {
  title: string;
  value: string;
  backgroundColor: string;
}

const SmallCard: React.FC<SmallCardProps> = ({ title, value, backgroundColor }) => {
  return (
    <div
      className={`w-[140px] h-[100px] ${backgroundColor} shadow-lg rounded-lg flex flex-col items-center justify-center cursor-pointer transition-transform transform hover:scale-105`}
    >
      <h2 className="text-xl font-bold text-black">{value}</h2>
      <h3 className="text-sm font-bold text-black">{title}</h3>
    </div>
  );
};

export default SmallCard;
