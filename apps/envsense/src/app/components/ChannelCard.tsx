'use client'; // Mark this file as a client-side component

import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

interface ChannelCardProps {
  title: string;
  chartData: number[];
  backgroundColor?: string;
}

const ChannelCard: React.FC<ChannelCardProps> = ({
  title,
  chartData,
  backgroundColor = 'bg-white',
}) => {
  // Donut Chart Data
  const data = {
    datasets: [
      {
        data: chartData, // Data to be represented
        backgroundColor: [
          '#36A2EB', // Blue
          '#E5E5E5', // Light Gray
          '#F1C40F', // Yellow
          '#9B59B6', // Purple
          '#FF5733', // Red
        ], // Color for the donut sections
        borderWidth: 0,
      },
    ],
  };

  return (
    <div className={`p-3 rounded-lg shadow-md ${backgroundColor}`}>
      <h2 className="text-lg font-semibold text-center w-full truncate">
        {title}
      </h2>

      <div className="flex justify-center items-center space-x-4 mt-4">
        <div
          className="flex-shrink-0 flex justify-center items-center"
          style={{ width: '200px', height: '200px' }}
        >
          <Doughnut data={data} options={{ responsive: true }} />
        </div>

        <div className="flex flex-col space-y-2 text-sm">
          {chartData.map((value, index) => (
            <div key={index} className="flex items-center space-x-2">
              <div
                className="w-4 h-4"
                style={{
                  backgroundColor: data.datasets[0].backgroundColor[index],
                }}
              />
              <span>{`Value: ${value}`}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChannelCard;
