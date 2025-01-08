'use client';
import React from 'react';
import { Line } from 'react-chartjs-2';
import TemperatureTable from './temptable';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
} from 'chart.js';
import Annotation from './annotation';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler
);

const lineChartData = {
  labels: [
    '12 AM', '2 AM', '4 AM', '6 AM', '8 AM', '10 AM', '12 PM', '2 PM', '4 PM', '6 PM', '8 PM', '10 PM',
  ],
  datasets: [
    {
      label: 'Temperature (°C)',
      data: [80, 70, 65, 60, 55, 52, 50, 50, 55, 65, 70, 75, 78, 80, 82, 85, 88, 90, 92, 95, 97, 98],
      fill: true,
      backgroundColor: (context: any) => {
        const chart = context.chart;
        const { ctx, chartArea } = chart;
        if (!chartArea) return null;
        const gradient = ctx.createLinearGradient(0, 0, 0, chartArea.bottom);
        gradient.addColorStop(0, 'rgba(75, 192, 192, 0.3)');
        gradient.addColorStop(1, 'rgba(75, 192, 192, 0)');
        return gradient;
      },
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 3,
      tension: 0.4,
    },
    {
      label: 'Humidity (%)',
      data: [80, 75, 70, 65, 60, 55, 52, 50, 50, 55, 60, 65, 70, 75, 78, 80, 82, 85, 88, 90, 92, 95, 97, 98],
      fill: true,
      backgroundColor: (context: any) => {
        const chart = context.chart;
        const { ctx, chartArea } = chart;
        if (!chartArea) return null;
        const gradient = ctx.createLinearGradient(0, 0, 0, chartArea.bottom);
        gradient.addColorStop(0, 'rgba(153, 102, 255, 0.3)');
        gradient.addColorStop(1, 'rgba(153, 102, 255, 0)');
        return gradient;
      },
      borderColor: 'rgba(153, 102, 255, 1)',
      borderWidth: 3,
      tension: 0.4,
    },
  ],
};

const lineChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
      labels: {
        color: '#2D3748',
        font: { size: 14 },
      },
    },
    title: {
      display: true,
      text: ' CR LOGGER #05 HOT(04) - NEW COLD ROOM',
      color: '#2D3748',
      font: { size: 18 },
    },
    tooltip: {
      backgroundColor: 'rgba(75, 192, 192, 0.8)',
      titleColor: '#fff',
      bodyColor: '#fff',
      borderWidth: 1,
      borderColor: '#4A5568',
    },
  },
  scales: {
    x: {
      grid: { display: true, color: 'rgba(200, 200, 200, 0.2)' },
      ticks: { color: '#4A5568' },
    },
    y: {
      grid: { color: 'rgba(75, 192, 192, 0.2)' },
      ticks: { color: '#4A5568' },
    },
  },
};

const formatDate = (date: Date) => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
};

const LineChart = () => {
  const now = new Date();
  const yesterday = new Date(now);
  yesterday.setDate(now.getDate() - 1);
  yesterday.setHours(10, 0, 0, 0);

  const today = new Date(now);
  today.setHours(10, 0, 0, 0);

  const formattedYesterday = formatDate(yesterday);
  const formattedToday = formatDate(today);

  const temperatures = lineChartData.datasets[0].data;
  const humidity = lineChartData.datasets[1].data;

  const avgTemp = temperatures.reduce((sum, temp) => sum + temp, 0) / temperatures.length;
  const minTemp = Math.min(...temperatures);
  const maxTemp = Math.max(...temperatures);

  const avgHumidity = humidity.reduce((sum, h) => sum + h, 0) / humidity.length;
  const minHumidity = Math.min(...humidity);
  const maxHumidity = Math.max(...humidity);

  const meanKineticTemp = (minTemp + maxTemp) / 2;

  return (
    <div className="w-full mx-auto max-w-7xl p-4">
      <div className="text-center mb-4">
        <h4 className="text-lg text-gray-700">
          From {formattedYesterday} to {formattedToday}
        </h4>
      </div>

      <div style={{ position: 'relative', height: '400px' }} className="mb-8">
        <Line data={lineChartData} options={lineChartOptions} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        <div className="bg-white p-4 shadow-md rounded-md text-center">
          <div className="flex items-center justify-center mb-2">
            <div
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: 'rgba(75, 192, 192, 1)' }}
            />
            <h3 className="text-lg font-semibold text-gray-700 ml-2">
              Temperature (°C)
            </h3>
          </div>
          <p>Average: {avgTemp.toFixed(2)}°C</p>
          <p>Min: {minTemp}°C</p>
          <p>Max: {maxTemp}°C</p>
        </div>

        <div className="bg-white p-4 shadow-md rounded-md text-center">
          <div className="flex items-center justify-center mb-2">
            <div
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: 'rgba(153, 102, 255, 1)' }}
            />
            <h3 className="text-lg font-semibold text-gray-700 ml-2">
              Humidity (%)
            </h3>
          </div>
          <p>Average: {avgHumidity.toFixed(2)}%</p>
          <p>Min: {minHumidity}%</p>
          <p>Max: {maxHumidity}%</p>
        </div>
      </div>

      <TemperatureTable
        avgTemp={avgTemp}
        minTemp={minTemp}
        maxTemp={maxTemp}
        meanKineticTemp={meanKineticTemp}
      />

      <div className="mt-4">
        <Annotation />
      </div>
    </div>
  );
};

export default LineChart;
