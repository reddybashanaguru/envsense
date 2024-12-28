import React from 'react';

interface CardProps {
  title: string;
  value?: string; 
  backgroundColor: string;
}

const DatalogCard: React.FC<CardProps> = ({
  title,
  value,
  backgroundColor,
}) => {
  return (
    <div
      className={`w-[340px] h-[239px] ${backgroundColor} shadow-lg rounded-lg cursor-pointer p-4 flex flex-col justify-between`}
    >
      <div className="flex justify-center items-center flex-1">
        <h2 className="text-4xl font-bold text-black">{value}</h2>
      </div>

      <h1 className="text-m font-bold text-black text-center mb-2">{title}</h1>
      <input type='range'/>


    </div>
  );
};

export default DatalogCard;
