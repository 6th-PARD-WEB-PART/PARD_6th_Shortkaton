import Room from "./Room";
import { floorData } from "./floorData";

export default function RoomSelector({
  floor,
  setFloor,
  selectedRoom,
  setSelectedRoom,
  onSubmit,
}: {
  floor: 1 | 2 | 3;
  setFloor: (v: 1 | 2 | 3) => void;
  selectedRoom: string | null;
  setSelectedRoom: (v: string | null) => void;
  onSubmit: () => void;
}) {
  return (
    <div className="w-[904px] bg-white rounded-xl shadow-[0px_0px_10px_rgba(166,166,166,0.25)] p-6">
      {/* 층 탭 */}
      <div className="flex mb-6">
        {[1, 2, 3].map((f) => (
          <button
            key={f}
            onClick={() => {
              setFloor(f as 1 | 2 | 3);
              setSelectedRoom(null);
            }}
            className={`
              px-20 py-3 text-xl font-semibold rounded-t-xl 
              ${
                floor === f
                  ? "bg-white border border-b-white border-gray-300"
                  : "bg-[#F5F5F5] text-gray-500"
              }
            `}
          >
            {f}층
          </button>
        ))}
      </div>

      {/* 테두리 */}
      <div className="w-full border border-gray-300 rounded-xl p-8 relative">
        <div className="text-2xl font-bold mb-10">은혜관 {floor}층</div>

        {/* 출입문 */}
        <div className="absolute left-[770px] top-[200px] rotate-90 text-gray-600">
          출입문
        </div>

        <div className="relative w-[839px] h-[300px]">
          {floorData[floor].map((room) => (
            <Room
              key={room.num}
              num={room.num}
              left={room.left}
              top={room.top}
              status={room.status}
              selected={selectedRoom === room.num}
              onSelect={setSelectedRoom}
            />
          ))}
        </div>

        <div className="flex justify-end mt-10">
          <button
            disabled={!selectedRoom}
            onClick={onSubmit}
            className={`
              w-40 h-12 rounded-xl text-2xl font-bold transition
              ${
                selectedRoom
                  ? "bg-[#EB6600] text-white"
                  : "bg-zinc-300 text-white cursor-not-allowed"
              }
            `}
          >
            예약하기
          </button>
        </div>
      </div>
    </div>
  );
}
