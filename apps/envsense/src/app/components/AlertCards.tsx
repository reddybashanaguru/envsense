import React from 'react';

interface CardProps {
  title: string;
  value?: string;
  backgroundColor: string;
  icon?: React.ReactNode;
}

const AlertCard: React.FC<CardProps> = ({
  title,
  value,
  backgroundColor,
  icon,
}) => {
  return (
    <div
      className={`w-[260px] h-[230px] ${backgroundColor} shadow-lg rounded-lg cursor-pointer transition-transform transform hover:scale-105 p-4 flex flex-col justify-between`}
    >
      <div className="flex justify-center items-center flex-1">
        <h2 className="text-4xl font-bold text-white">{value}</h2>
      </div>

      <div className="flex items-center justify-center space-x-3 py-2">
        {icon && <div className="h-6 w-6">{icon}</div>}
        <h1 className="text-xl font-bold text-white truncate">{title}</h1>
      </div>
    </div>
  );
};

export default AlertCard;
