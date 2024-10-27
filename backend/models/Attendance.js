// backend/models/Attendance.js
const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
  stdName: { type: String, required: true },
  stdNum: { type: Number, required: true },
  attendance: { type: String, required: true }, // enum 없이 작성
  date: { type: Date, default: Date.now },
});

// 컬렉션 이름을 명시적으로 지정
const Attendance = mongoose.model('Attendance', attendanceSchema, 'attendances');

module.exports = Attendance;
