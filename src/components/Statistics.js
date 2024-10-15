import React from 'react';
import { Bar } from 'react-chartjs-2';

const Statistics = () => {
  const data = {
    labels: ['출석', '결석', '지각'],
    datasets: [
      {
        label: '학생 출석 통계',
        data: [12, 5, 3], // 실제 데이터로 변경 가능
        backgroundColor: [
          'rgba(75, 192, 192, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 206, 86, 0.2)',
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mt-4">
      <h2 className="text-2xl font-bold mb-4">출석 통계</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default Statistics;
