import React, { useState } from 'react';

function AttendanceCheck() {
  const [status, setStatus] = useState(null);

  const handleFaceRecognition = () => {
    // 얼굴 인식 로직 추가 (모의 데이터로 상태 변경)
    setStatus('Attendance recorded for John Doe');
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Face Recognition Attendance</h2>
      <div className="bg-white p-6 shadow-lg rounded-lg">
        <p className="mb-4">Please stand in front of the camera to check your attendance.</p>
        <button 
          onClick={handleFaceRecognition} 
          className="bg-blue-500 text-white p-2 rounded"
        >
          Start Face Recognition
        </button>
        {status && <p className="mt-4 text-green-500">{status}</p>}
      </div>
    </div>
  );
}

export default AttendanceCheck;
