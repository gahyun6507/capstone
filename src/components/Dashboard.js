<<<<<<< HEAD
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
||||||| (empty tree)
=======
import React from 'react';
import SystemLogChart from './SystemLogChart';
import Calendar from './Calendar';
import DataTable from './DataTable';
import '../styles/Dashboard.css';
import { FaUserCheck, FaUserTimes, FaClock, FaCheckCircle } from 'react-icons/fa'; // 아이콘 추가

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard-cards">
        <div className="card">
          <FaUserCheck className="icon" /> {/* 출석 아이콘 */}
          <div className="card-content">
            <div className="card-title">출석</div>
            <div className="card-value">15명</div>
          </div>
        </div>
        <div className="card">
          <FaUserTimes className="icon" /> {/* 결석 아이콘 */}
          <div className="card-content">
            <div className="card-title">결석</div>
            <div className="card-value">5명</div>
          </div>
        </div>
        <div className="card">
          <FaClock className="icon" /> {/* 지각 아이콘 */}
          <div className="card-content">
            <div className="card-title">지각</div>
            <div className="card-value">1명</div>
          </div>
        </div>
        <div className="card">
          <FaCheckCircle className="icon" /> {/* 총 출석률 아이콘 */}
          <div className="card-content">
            <div className="card-title">총 출석률</div>
            <div className="card-value">75%</div>
          </div>
        </div>
      </div>
      <div className="system-log-calendar-container">
        <SystemLogChart />
        <Calendar />
      </div>
      <DataTable />
    </div>
  );
}

export default Dashboard;
>>>>>>> 01b18e9 (update)
