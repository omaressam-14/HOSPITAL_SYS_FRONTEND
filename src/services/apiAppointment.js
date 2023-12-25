import Cookies from "js-cookie";
import { getToday } from "../utils/getTodayFormatted";
const today = getToday();

const apiBase = import.meta.env.VITE_REACT_API_LINK;
const token = Cookies.get("token");

export async function bookAppointment(body) {
  const res = await fetch(`${apiBase}/appointment`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  });
  const data = await res.json();
  return data;
}

export async function getAllUserAppointments(type, id, date) {
  const res = await fetch(
    `${apiBase}/appointment?${type}=${id}&${
      date ? `date=${date}` : `date[gte]=${today}`
    }`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const data = await res.json();
  return data;
}
