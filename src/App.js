import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Router 추가
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import AttendanceCheck from './components/AttendanceCheck';
import AttendanceRecord from './components/AttendanceRecord'; // 출석 기록 컴포넌트
import Statistics from './components/Statistics'; // 통계 컴포넌트
import CalendarView from './components/CalendarView'; // 캘린더 컴포넌트
import UserManagement from './components/UserManagement'; // 사용자 관리 컴포넌트

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-6 bg-gray-100">
          <Routes>
            <Route path="/" element={<Dashboard />} /> {/* 대시보드 */}
            <Route path="/attendance-check" element={<AttendanceCheck />} /> {/* 출석 체크 */}
            <Route path="/attendance-record" element={<AttendanceRecord />} /> {/* 출석 기록 */}
            <Route path="/statistics" element={<Statistics />} /> {/* 통계 */}
            <Route path="/calendar" element={<CalendarView />} /> {/* 출석 캘린더 */}
            <Route path="/user-management" element={<UserManagement />} /> {/* 사용자 관리 */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
