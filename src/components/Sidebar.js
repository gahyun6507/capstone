import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="w-64 h-screen bg-blue-900 text-white flex flex-col">
      <h1 className="text-2xl font-bold p-4">출석 관리 시스템</h1>
      <nav className="flex flex-col p-4 space-y-4">
        <Link to="/" className="hover:bg-blue-700 p-2 rounded">대시보드</Link>
        <Link to="/attendance-check" className="hover:bg-blue-700 p-2 rounded">출석 체크</Link>
        <Link to="/attendance-record" className="hover:bg-blue-700 p-2 rounded">출석 기록</Link>
        <Link to="/statistics" className="hover:bg-blue-700 p-2 rounded">통계</Link>
        <Link to="/calendar" className="hover:bg-blue-700 p-2 rounded">출석 캘린더</Link>
        <Link to="/user-management" className="hover:bg-blue-700 p-2 rounded">사용자 관리</Link> {/* 사용자 관리 링크 추가 */}
      </nav>
    </div>
  );
}

export default Sidebar;
