import React from 'react';

function Sidebar() {
  return (
    <div className="w-64 h-screen bg-blue-900 text-white flex flex-col">
      <h1 className="text-2xl font-bold p-4">출석 관리 시스템</h1>
      <nav className="flex flex-col p-4 space-y-4">
        <a href="#" className="hover:bg-blue-700 p-2 rounded">대시보드</a>
        <a href="#" className="hover:bg-blue-700 p-2 rounded">출석 체크</a>
        <a href="#" className="hover:bg-blue-700 p-2 rounded">출석 기록</a>
        <a href="#" className="hover:bg-blue-700 p-2 rounded">통계</a>
        <a href="#" className="hover:bg-blue-700 p-2 rounded">사용자 관리</a>
        <a href="#" className="hover:bg-blue-700 p-2 rounded">출석 캘린더</a>
      </nav>
    </div>
  );
}

export default Sidebar;
