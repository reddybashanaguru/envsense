'use client'; // Mark this file as a client-side component

import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

interface ChannelCardProps {
  title: string;
  chartData: number[]; // Values for the donut chart
  backgroundColor?: string; // Optional background color
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
          '#36A2EB',
          '#E5E5E5',
          '#F1C40F',
          '#9B59B6',
          '#FF5733',
        ], // Color for the donut sections
        borderWidth: 0, // No border around the chart
      },
    ],
  };

  return (
    <div className={`p-8 rounded-lg shadow-md ${backgroundColor}`}>
      <div className="flex flex-col sm:flex-row items-center space-y-0 sm:space-y-0 sm:space-x-2">
        <div className="flex flex-col items-center sm:items-start">
          <h2 className="text-m font-semibold">{title}</h2>
          {/* Infographic Donut Chart */}
          <div
            className="mt-4 sm:mt-0 sm:ml-4 pt-10"
            style={{ width: '200px', height: '200px' }}
          >
            <Doughnut data={data} options={{ responsive: true }} />
          </div>
        </div>

        {/* Custom Legend (Right side of the chart) */}
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
