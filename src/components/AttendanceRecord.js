import React from 'react';

function AttendanceRecord() {
  const records = [
    { name: 'John Doe', date: '2024-10-01', status: 'Present' },
    { name: 'Jane Smith', date: '2024-10-01', status: 'Late' },
    { name: 'Mike Johnson', date: '2024-10-01', status: 'Absent' },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Attendance Record</h2>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Date</th>
            <th className="py-2 px-4 border-b">Status</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border-b">{record.name}</td>
              <td className="py-2 px-4 border-b">{record.date}</td>
              <td className="py-2 px-4 border-b">{record.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AttendanceRecord;
