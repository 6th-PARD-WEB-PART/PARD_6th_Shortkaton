export interface RoomType {
  num: string;
  left: number;
  top: number;
  status: "Default" | "Disabled";
}

export const floorData: Record<number, RoomType[]> = {
  1: [
    { num: "122", left: 0, top: 153, status: "Default" },
    { num: "120", left: 68, top: 153, status: "Disabled" },
    { num: "118", left: 136, top: 153, status: "Disabled" },
    { num: "116", left: 204, top: 153, status: "Disabled" },
    { num: "114", left: 272, top: 153, status: "Disabled" },
    { num: "112", left: 366, top: 153, status: "Disabled" },
    { num: "110", left: 434, top: 153, status: "Disabled" },
    { num: "108", left: 502, top: 153, status: "Disabled" },
    { num: "106", left: 570, top: 153, status: "Disabled" },

    { num: "121", left: 0, top: 233, status: "Default" },
    { num: "119", left: 68, top: 233, status: "Default" },
    { num: "117", left: 136, top: 233, status: "Disabled" },
    { num: "116", left: 204, top: 233, status: "Disabled" },
    { num: "115", left: 272, top: 233, status: "Disabled" },
    { num: "113", left: 366, top: 233, status: "Disabled" },
    { num: "111", left: 434, top: 233, status: "Disabled" },
    { num: "109", left: 502, top: 233, status: "Disabled" },
    { num: "107", left: 570, top: 233, status: "Disabled" },

    { num: "104", left: 659, top: 0, status: "Disabled" },
    { num: "103", left: 739, top: 0, status: "Disabled" },
    { num: "102", left: 659, top: 68, status: "Disabled" },
    { num: "101", left: 739, top: 68, status: "Disabled" },
    { num: "105", left: 739, top: 233, status: "Disabled" },
  ],

  2: [
    { num: "222", left: 0, top: 153, status: "Default" },
    { num: "220", left: 68, top: 153, status: "Disabled" },
    { num: "218", left: 136, top: 153, status: "Disabled" },
    { num: "216", left: 204, top: 153, status: "Disabled" },
    { num: "214", left: 272, top: 153, status: "Disabled" },
    { num: "212", left: 366, top: 153, status: "Disabled" },
    { num: "210", left: 434, top: 153, status: "Disabled" },
    { num: "208", left: 502, top: 153, status: "Disabled" },
    { num: "206", left: 570, top: 153, status: "Disabled" },

    { num: "221", left: 0, top: 233, status: "Default" },
    { num: "219", left: 68, top: 233, status: "Default" },
    { num: "217", left: 136, top: 233, status: "Disabled" },
    { num: "216", left: 204, top: 233, status: "Disabled" },
    { num: "215", left: 272, top: 233, status: "Disabled" },
    { num: "213", left: 366, top: 233, status: "Disabled" },
    { num: "211", left: 434, top: 233, status: "Disabled" },
    { num: "209", left: 502, top: 233, status: "Disabled" },
    { num: "207", left: 570, top: 233, status: "Disabled" },

    { num: "204", left: 659, top: 0, status: "Disabled" },
    { num: "203", left: 739, top: 0, status: "Disabled" },
    { num: "202", left: 659, top: 68, status: "Disabled" },
    { num: "201", left: 739, top: 68, status: "Disabled" },
    { num: "205", left: 739, top: 233, status: "Disabled" },
  ],

  3: [
    { num: "322", left: 0, top: 153, status: "Default" },
    { num: "320", left: 68, top: 153, status: "Disabled" },
    { num: "318", left: 136, top: 153, status: "Disabled" },
    { num: "316", left: 204, top: 153, status: "Disabled" },
    { num: "314", left: 272, top: 153, status: "Disabled" },
    { num: "312", left: 366, top: 153, status: "Disabled" },
    { num: "310", left: 434, top: 153, status: "Disabled" },
    { num: "308", left: 502, top: 153, status: "Disabled" },
    { num: "306", left: 570, top: 153, status: "Disabled" },

    { num: "321", left: 0, top: 233, status: "Default" },
    { num: "319", left: 68, top: 233, status: "Default" },
    { num: "317", left: 136, top: 233, status: "Disabled" },
    { num: "316", left: 204, top: 233, status: "Disabled" },
    { num: "315", left: 272, top: 233, status: "Disabled" },
    { num: "313", left: 366, top: 233, status: "Disabled" },
    { num: "311", left: 434, top: 233, status: "Disabled" },
    { num: "309", left: 502, top: 233, status: "Disabled" },
    { num: "307", left: 570, top: 233, status: "Disabled" },

    { num: "304", left: 659, top: 0, status: "Disabled" },
    { num: "303", left: 739, top: 0, status: "Disabled" },
    { num: "302", left: 659, top: 68, status: "Disabled" },
    { num: "301", left: 739, top: 68, status: "Disabled" },

    { num: "305", left: 739, top: 233, status: "Disabled" },
  ],
};
