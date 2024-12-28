import React from 'react';

interface CardProps {
  title: string;
  value?: string; // 'value' is optional for the main card
  backgroundColor: string;
  icon?: React.ReactNode; // Optional icon prop
}

const AlertCard: React.FC<CardProps> = ({
  title,
  value,
  backgroundColor,
  icon,
}) => {
  return (
    <div
      className={`w-[350px] h-[239px] ${backgroundColor} shadow-lg rounded-lg cursor-pointer transition-transform transform hover:scale-105 p-4 flex flex-col justify-between`}
    >
      {/* Value Section */}
      <div className="flex justify-center items-center flex-1">
        <h2 className="text-4xl font-bold text-black">{value}</h2>
      </div>

      {/* Title Section with Icon */}
      <div className="flex items-center justify-center space-x-10 py-2">
        {icon && <div className="h-6 w-6">{icon}</div>}
        <h1 className="text-xl font-bold text-black truncate">{title}</h1>
      </div>
    </div>
  );
};

export default AlertCard;

