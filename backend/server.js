require('dotenv').config(); // dotenv 설정

const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const Attendance = require('./models/Attendance'); // Attendance 모델 가져오기

const app = express();
const PORT = 8000;
app.use(cors());

//========================
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB에 연결되었습니다.'))
  .catch((error) => console.error('MongoDB 연결 실패:', error));


//==================================================================
// Attendance API 엔드포인트
app.get('/api/attendance', async (req, res) => {
  try {
    const records = await Attendance.find();
    console.log('Records fetched from database:', records); // 로깅 추가
    res.json(records);
  } catch (error) {
    console.error('Error fetching attendance records:', error);
    res.status(500).json({ message: 'Error fetching attendance records' });
  }
});


//===================================================================
app.get('/api/dashboard', async (req, res) => {
  try {
    const today = new Date();
    const startOfDay = new Date(today.setHours(0, 0, 0, 0));
    const endOfDay = new Date(today.setHours(23, 59, 59, 999));
    
    // 오늘의 출석 데이터 조회
    const attendanceRecords = await Attendance.find({ date: { $gte: startOfDay, $lte: endOfDay } });

    const totalAttendance = attendanceRecords.length; // 오늘의 출석 수
    const absentees = await Attendance.find({ attendance: '결석' }).countDocuments(); // 결석자 수
    const latecomers = await Attendance.find({ attendance: '지각' }).countDocuments(); // 지각자 수

    // 총 학생 수를 데이터베이스에서 가져오기
    const distinctStudents = await Attendance.distinct('stdNum'); // 유일한 학생 ID 가져오기
    const totalStudents = distinctStudents.length; // 유일한 학생 수
    const attendanceRate = totalStudents ? ((totalStudents - absentees) / totalStudents) * 100 : 0;

    // 최근 결석자 조회 (전체 데이터에서 결석자만 가져옴)
    const recentAbsentees = await Attendance.find({ attendance: '결석' })
      .sort({ date: -1 }) // 가장 최근 기록 우선
      .limit(5)
      .then(records => records.map(record => record.stdName));

    res.status(200).json({
      totalAttendance, // 오늘의 출석 수
      absentees, // 결석자 수
      latecomers, // 지각자 수
      attendanceRate: attendanceRate.toFixed(2), // 총 출석률
      recentAbsentees, // 최근 결석자
    });
  } catch (error) {
    console.error('대시보드 데이터 조회 중 오류:', error);
    res.status(500).json({ message: '대시보드 데이터를 불러오는 중 오류가 발생했습니다.' });
  }
});

//====================================================


// 서버 시작
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
