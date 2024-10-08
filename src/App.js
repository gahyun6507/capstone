import React from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import AttendanceCheck from './components/AttendanceCheck';
import AttendanceRecord from './components/AttendanceRecord';
import Statistics from './components/Statistics';
import CalendarView from './components/CalendarView'; 

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6 bg-gray-100">
        <Dashboard />
        <AttendanceCheck />
        <AttendanceRecord />
        <Statistics />
        <CalendarView />
      </div>
    </div>
  );
}

export default App;
