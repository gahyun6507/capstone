import React from 'react';
import AttendanceRecord from './AttendanceRecord'; // 출석 기록 컴포넌트 임포트
import Statistics from './Statistics'; // 통계 컴포넌트 임포트
import CalendarView from './CalendarView'; // 캘린더 컴포넌트 임포트

function Dashboard() {
  return (
    <div>
      <div>
      <h2 className="text-3xl font-bold mb-4">대시보드</h2>
      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white p-6 shadow-lg rounded-lg">
          <h3 className="text-xl font-bold">오늘의 출석</h3>
          <p>출석: 30명, 결석: 5명, 지각: 2명</p>
        </div>
        <div className="bg-white p-6 shadow-lg rounded-lg">
          <h3 className="text-xl font-bold">최근 결석자</h3>
          <p>홍길동, 김철수</p>
        </div>
        <div className="bg-white p-6 shadow-lg rounded-lg">
          <h3 className="text-xl font-bold">총 출석률</h3>
          <p>95%</p>
        </div>
      </div>
    </div>
      <AttendanceRecord /> {/* 출석 기록 컴포넌트 */}
      <Statistics /> {/* 통계 컴포넌트 */}
      <CalendarView /> {/* 캘린더 컴포넌트 */}
    </div>
  );
}

export default Dashboard;
