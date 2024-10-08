import React from 'react';

function Statistics() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Attendance Statistics</h2>
      <div className="bg-white p-6 shadow-lg rounded-lg">
        <p>Weekly Attendance Rate: 90%</p>
        <p>Monthly Attendance Rate: 88%</p>
        <p>Yearly Attendance Rate: 92%</p>
        {/* 차트 라이브러리로 통계 시각화를 추가할 수 있습니다 */}
      </div>
    </div>
  );
}

export default Statistics;
