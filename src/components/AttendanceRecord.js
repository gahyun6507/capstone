import React, { useEffect, useState } from 'react';

function AttendanceRecord() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const response = await fetch('http://3.17.156.22:8000/api/attendance'); // 백엔드 API 호출 - 다시 킬 때 EC2 퍼블릭 아이피 가져와야됨
        console.log('Response status:', response.status); // 응답 상태 코드 로그 추가
        
        if (response.ok) {
          const data = await response.json();
          console.log('Fetched records:', data); // 가져온 데이터 로그 추가
          setRecords(data);
        } else {
          console.error('Failed to fetch records:', response.statusText); // 오류 메시지 출력
        }
      } catch (error) {
        console.error('Error fetching records:', error);
      }
    };

    fetchRecords();
  }, []);

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Attendance Record</h2>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">이름</th>
            <th className="py-2 px-4 border-b">날짜</th>
            <th className="py-2 px-4 border-b">출석 여부</th>
          </tr>
        </thead>
        <tbody>
          {records.length > 0 ? ( // 데이터가 있는 경우에만 맵핑
            records.map((record, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b">{record.stdName}</td>
                <td className="py-2 px-4 border-b">{new Date(record.date).toLocaleString()}</td> {/* 날짜 포맷 변경 */}
                <td className="py-2 px-4 border-b">{record.attendance}</td> {/* 출석 여부 */}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="py-2 px-4 border-b text-center">No records found</td> {/* 데이터가 없는 경우 */}
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default AttendanceRecord;
