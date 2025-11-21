import axios from "axios";
import { Reservation } from "@/types/reservation";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const getAllReservationsApi = async (): Promise<Reservation[]> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/reservations/findAll`);
    return response.data as Reservation[];
  } catch (err) {
    console.error("예약 조회 API 실패", err);
    return [];
  }
};
export interface ReservePayload {
  roomNumber: number;
  date: string;
  floor: number;
}

export const postReservation = async (payload: ReservePayload) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/reservations`, payload);
    return response.data;
  } catch (error) {
    console.error("예약 실패:", error);
    throw error;
  }
};
