import React from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import { parseData } from '../dataParser';

Chart.register(...registerables);

const Charts = () => {
  const data = parseData();

  const categoryData = {
    labels: Object.keys(data.alertsByCategory),
    datasets: [{
      label: 'Alerts by Category',
      data: Object.values(data.alertsByCategory),
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    }],
  };

  const severityData = {
    labels: Object.keys(data.alertsBySeverity),
    datasets: [{
      label: 'Alerts by Severity',
      data: Object.values(data.alertsBySeverity),
      backgroundColor: 'rgba(153, 102, 255, 0.2)',
      borderColor: 'rgba(153, 102, 255, 1)',
      borderWidth: 1,
    }],
  };

  const timeData = {
    labels: Object.keys(data.alertsOverTime),
    datasets: [{
      label: 'Alerts Over Time',
      data: Object.values(data.alertsOverTime),
      fill: false,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
    }],
  };

  const sourceIPData = {
    labels: Object.keys(data.alertsBySourceIP),
    datasets: [{
      label: 'Alerts by Source IP',
      data: Object.values(data.alertsBySourceIP),
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1,
    }],
  };

  const hourOfDayData = {
    labels: Array.from({ length: 24 }, (_, i) => `${i}:00`),
    datasets: [{
      label: 'Alerts by Hour of Day',
      data: data.alertsByHourOfDay,
      backgroundColor: 'rgba(255, 159, 64, 0.2)',
      borderColor: 'rgba(255, 159, 64, 1)',
      borderWidth: 1,
    }],
  };

  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: function(context) {
            let label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed.y !== null) {
              label += new Intl.NumberFormat('en-US', { style: 'decimal' }).format(context.parsed.y);
            }
            return label;
          }
        }
      }
    }
  };

  return (
    <div className="p-4 space-y-8">
      <div className="bg-gray-800 p-4 max-w-6xl mx-auto rounded shadow-md">
        <h2 className="text-white text-xl mb-2">Alerts by Category</h2>
        <Bar data={categoryData} options={options} />
      </div>
      <div className="bg-gray-800 p-4 max-w-6xl mx-auto rounded shadow-md">
        <h2 className="text-white text-xl mb-2">Alerts by Source IP</h2>
        <Bar data={sourceIPData} options={options} />
      </div>
      <div className="bg-gray-800 p-4 max-w-6xl mx-auto rounded shadow-md">
        <h2 className="text-white text-xl mb-2">Alerts by Hour of Day</h2>
        <Bar data={hourOfDayData} options={options} />
      </div>
      <div className="bg-gray-800 p-4 max-w-6xl mx-auto  rounded shadow-md">
        <h2 className="text-white text-xl mb-2">Alerts by Severity</h2>
        <Line data={severityData} options={options} />
      </div>
      <div className="bg-gray-800 p-4 max-w-6xl mx-auto rounded shadow-md">
        <h2 className="text-white text-xl mb-2">Alerts Over Time</h2>
        <Bar data={timeData} options={options} />
      </div>
    </div>
  );
};

export default Charts;
