import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../styles/CalendarStyles.css'; 

function CalendarView() {
  const [date, setDate] = useState(new Date());
  const [attendance, setAttendance] = useState([
    { date: '2024-10-01', records: [{ name: '홍길동', status: '출석' }, { name: '김철수', status: '결석' }] },
    { date: '2024-10-02', records: [{ name: '홍길동', status: '지각' }, { name: '김철수', status: '출석' }] }
  ]);

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  const formatDate = (date) => {
    const d = new Date(date);
    return `${d.getFullYear()}-${('0' + (d.getMonth() + 1)).slice(-2)}-${('0' + d.getDate()).slice(-2)}`;
  };

  const selectedDateRecords = attendance.find(record => record.date === formatDate(date));

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mt-4">
      <h2 className="text-2xl font-bold mb-4">출석 캘린더</h2>
      <Calendar
        onChange={handleDateChange}
        value={date}
        locale="ko-KO" 
        className="mb-4 border-2 border-blue-500 rounded-md"
      />
      <h3 className="text-xl font-bold">선택한 날짜: {formatDate(date)}</h3>
      {selectedDateRecords ? (
        <table className="min-w-full mt-4 bg-white border border-gray-300 rounded-lg">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="py-2 px-4 border-b">이름</th>
              <th className="py-2 px-4 border-b">상태</th>
            </tr>
          </thead>
          <tbody>
            {selectedDateRecords.records.map((record, index) => (
              <tr key={index} className="border-b hover:bg-gray-100">
                <td className="py-2 px-4 border-b">{record.name}</td>
                <td className="py-2 px-4 border-b">{record.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="mt-4">이 날짜에 대한 출석 기록이 없습니다.</p>
      )}
    </div>
  );
}

export default CalendarView;
