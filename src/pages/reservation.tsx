import { useState } from "react";
import Sidebar from "@/components/sidebar";
import axios from "axios";
import generateCalendar from "@/components/generateCalendar";
import RoomSelector from "@/components/Room/RoomSelector";
import { postReservation } from "@/api/reserveAPI";

const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function Reservation() {
  const today = new Date();
  const todayYear = today.getFullYear();
  const todayMonth = today.getMonth();
  const todayDate = today.getDate();

  const [year, setYear] = useState(todayYear);
  const [month, setMonth] = useState(todayMonth);
  const [selectedDate, setSelectedDate] = useState<number | null>(todayDate);

  const [floor, setFloor] = useState<1 | 2 | 3>(1);
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);

  const calendarData = generateCalendar(year, month);

  const handlePrevMonth = () => {
    if (month === 0) {
      setYear(year - 1);
      setMonth(11);
    } else {
      setMonth(month - 1);
    }
  };

  const handleNextMonth = () => {
    if (month === 11) {
      setYear(year + 1);
      setMonth(0);
    } else {
      setMonth(month + 1);
    }
  };

  const handleSubmit = async () => {
    if (!selectedRoom || !selectedDate) return;

    const dateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(
      selectedDate
    ).padStart(2, "0")}`;

    const payload = {
      roomNumber: Number(selectedRoom),
      date: dateStr,
      floor: floor,
    };

    try {
      await postReservation(payload);
      console.log("BASE:", process.env.NEXT_PUBLIC_API_BASE_URL);

      alert("예약 완료!");
    } catch {
      alert("예약 실패. 다시 시도하세요.");
    }
  };

  return (
    <div className="flex w-full h-screen bg-white">
      <Sidebar />

      <main className="flex-1 p-10 overflow-auto">
        <div className="w-full h-36 pl-7 pt-14 bg-white/90 border-b-2 border-zinc-300">
          <div className="text-3xl font-black">예약하기</div>
        </div>

        <div className="flex gap-10 mt-10">
          {/* 캘린더 */}
          <div className="bg-white shadow rounded-xl p-6 w-[589px] h-[820px]">
            <h2 className="text-xl font-bold mb-2">
              공실을 예약하고 싶은 날짜
            </h2>

            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-400 font-semibold text-xl">
                {year}년 {month + 1}월
              </p>
              <div className="flex gap-4 text-2xl">
                <button onClick={handlePrevMonth}>&lt;</button>
                <button onClick={handleNextMonth}>&gt;</button>
              </div>
            </div>

            <div className="grid grid-cols-7 mb-3">
              {weekDays.map((day) => (
                <div
                  key={day}
                  className="flex justify-center text-lg font-bold"
                >
                  {day}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-y-4 text-center">
              {calendarData.map((week, i) =>
                week.map((date, j) => (
                  <button
                    key={`${i}-${j}`}
                    onClick={() => date !== 0 && setSelectedDate(date)}
                    className={`
                      w-10 h-10 flex items-center justify-center rounded-full
                      ${date !== 0 ? "text-black" : "text-gray-300"}
                      ${selectedDate === date ? "bg-orange-400 text-white" : ""}
                    `}
                  >
                    {date !== 0 ? date : ""}
                  </button>
                ))
              )}
            </div>
          </div>

          {/* 방 선택 컴포넌트 */}
          <RoomSelector
            floor={floor}
            setFloor={setFloor}
            selectedRoom={selectedRoom}
            setSelectedRoom={setSelectedRoom}
            onSubmit={handleSubmit}
          />
        </div>
      </main>
    </div>
  );
}
