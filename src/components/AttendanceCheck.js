import React, { useState, useEffect, useRef } from 'react';

function AttendanceCheck() {
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isVideoActive, setIsVideoActive] = useState(false); // 비디오 활성화 상태
  const videoRef = useRef(null); // 비디오 요소에 대한 ref

  // 비디오 스트림 시작 함수
  const startVideoStream = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true, // 비디오만 가져옴
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream; // 스트림을 비디오 요소에 연결
      }
    } catch (error) {
      console.error("카메라 접근 오류:", error);
      setStatus("카메라에 접근할 수 없습니다.");
    }
  };

  // 비디오 스트림 종료 함수
  const stopVideoStream = () => {
    if (videoRef.current) {
      const stream = videoRef.current.srcObject;
      if (stream) {
        const tracks = stream.getTracks();
        tracks.forEach((track) => track.stop()); // 트랙 중지
      }
      videoRef.current.srcObject = null; // 비디오 요소 비우기
    }
  };

  const handleStartRecognition = async () => {
    setLoading(true);
    setStatus(null); // 상태 초기화
    setIsVideoActive(true); // 비디오 활성화

    // 비디오 스트림 시작
    await startVideoStream();

    try {
      // 여기에 얼굴 인식 API 호출 로직 추가
      const isSuccess = await mockFaceRecognition(); // API 호출 대신 예시 함수 사용
      setStatus(isSuccess ? "출석 성공" : "출석 실패");
    } catch (error) {
      console.error("출석 체크 중 오류 발생:", error);
      setStatus("출석 체크 중 오류가 발생했습니다.");
    } finally {
      stopVideoStream(); // 출석 체크 후 비디오 종료
      setIsVideoActive(false); // 비디오 비활성화
      setLoading(false);
    }
  };

  // Mock Face Recognition Function
  const mockFaceRecognition = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const isSuccess = Math.random() > 0.5; // 50% 확률로 성공/실패
        resolve(isSuccess);
      }, 2000); // 2초 대기 후 결과 반환
    });
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">출석 체크</h1>
      <p className="mb-4">카메라 앞에 서서 출석을 체크하세요.</p>
      {isVideoActive && (
        <video
          ref={videoRef}
          autoPlay
          className="w-full max-w-md border border-gray-300 mb-4"
        ></video>
      )}
      <button
        onClick={handleStartRecognition}
        className="bg-blue-500 text-white py-2 px-4 rounded"
        disabled={loading}
      >
        {loading ? "인식 중..." : "출석 체크 시작"}
      </button>
      {status && (
        <div className="mt-4">
          <p className="text-lg">{status}</p>
        </div>
      )}
    </div>
  );
}

export default AttendanceCheck;
