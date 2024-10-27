import React, { useEffect, useState } from 'react';

function Dashboard() {
  const [data, setData] = useState({
    totalAttendance: 0,
    absentees: 0,
    latecomers: 0,
    attendanceRate: '0%',
    recentAbsentees: [],
  });

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const response = await fetch('http://3.17.156.22:8000/api/dashboard');
        if (response.ok) {
          const jsonData = await response.json();
          setData(jsonData);
        } else {
          console.error('대시보드 데이터 가져오기 실패:', response.statusText);
        }
      } catch (error) {
        console.error('대시보드 데이터 요청 중 오류 발생:', error);
      }
    };

    fetchDashboardData();
  }, []);

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">대시보드</h2>
      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white p-6 shadow-lg rounded-lg">
          <h3 className="text-xl font-bold">오늘의 출석</h3>
          <p>출석: {data.totalAttendance}명, 결석: {data.absentees}명, 지각: {data.latecomers}명</p>
        </div>
        <div className="bg-white p-6 shadow-lg rounded-lg">
          <h3 className="text-xl font-bold">최근 결석자</h3>
          <p>{data.recentAbsentees.join(', ') || '없음'}</p>
        </div>
        <div className="bg-white p-6 shadow-lg rounded-lg">
          <h3 className="text-xl font-bold">총 출석률</h3>
          <p>{data.attendanceRate}%</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
