interface RoomProps {
  num: string;
  left: number;
  top: number;
  status: "Default" | "Disabled";
  selected: boolean;
  onSelect: (num: string) => void;
}

export default function Room({
  num,
  left,
  top,
  status,
  selected,
  onSelect,
}: RoomProps) {
  const isDisabled = status === "Disabled";
  const tall = num.length === 3; // 3자리면 세로 긴 방

  return (
    <div
      style={{ left, top }}
      onClick={() => !isDisabled && onSelect(num)}
      className={`
        absolute flex justify-center items-center rounded-sm cursor-pointer
        ${tall ? "w-10 h-16" : "w-16 h-10"}
        ${
          isDisabled
            ? "bg-zinc-100 text-neutral-400 cursor-not-allowed"
            : selected
            ? "bg-white text-[#EB6600] border border-[#EB6600]"
            : "bg-white border border-zinc-300 text-black"
        }
      `}
    >
      {num}
    </div>
  );
}
