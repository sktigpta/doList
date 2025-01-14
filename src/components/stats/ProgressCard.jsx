import React from 'react';
import { Card } from '../ui/Card';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import useTodoStore from '../../store/todoStore';

// Register necessary chart elements
ChartJS.register(ArcElement, Tooltip, Legend);

export const ProgressCard = () => {
  const tasks = useTodoStore((state) => state.tasks);
  const completedTasks = tasks.filter((task) => task.completed).length;
  const totalTasks = tasks.length;
  const completionRate = totalTasks ? (completedTasks / totalTasks) * 100 : 0;

  // Define chart data
  const data = {
    labels: [], // Empty array removes the labels
    datasets: [
      {
        data: [completionRate, 100 - completionRate],
        backgroundColor: ['#3498db', '#e1e1e1'], // Blue for completed, light gray for remaining
        borderWidth: 0, // Optional: to remove borders between sections
      },
    ],
  };

  // Define chart options
  const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      tooltip: {
        enabled: false, // Disable tooltips
      },
      legend: {
        display: false, // Disable the legend
      },
    },
  };

  return (
    <Card>
      <div className="p-4 flex flex-col items-center">
        <h3 className="text-lg font-semibold">Progress</h3>
        <div className="text-3xl font-bold mt-2">{Math.round(completionRate)}%</div>
        <div className="mt-4 w-32 h-32">
          <Doughnut data={data} options={options} />
        </div>
      </div>
    </Card>
  );
};
