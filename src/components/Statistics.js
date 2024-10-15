import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

// Chart.js 스케일 및 요소 등록
ChartJS.register(ArcElement, Title, Tooltip, Legend);

const Statistics = () => {
  const data = {
    labels: ['출석', '결석', '지각'],
    datasets: [
      {
        label: '학생 출석 통계',
        data: [12, 5, 3], // 예시 데이터
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

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mt-4">
      <h2 className="text-2xl font-bold mb-4">출석 통계</h2>
      {/* width와 height 속성을 추가하여 차트를 작게 조정 */}
      <Pie data={data} width={100} height={100} /> 
    </div>
  );
};

export default Statistics;
