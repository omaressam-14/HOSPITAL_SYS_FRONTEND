import Cookies from "js-cookie";

const apiBase = import.meta.env.VITE_REACT_API_LINK;

const token = Cookies.get("token");

export async function getAllRooms(sort) {
  //   const res = await fetch(`${apiBase}/room?sort=-isFull`, {
  const res = await fetch(
    `${apiBase}/room${sort ? "?sort=-isFull" : "?sort=isFull"}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return await res.json();
}

export async function getRoom(id) {
  const res = await fetch(`${apiBase}/room/${id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return await res.json();
}

export async function updateRoom({ id, body }) {
  const res = await fetch(`${apiBase}/room/${id}`, {
    method: "PATCH",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();

  return data;
}

export async function deleteRoom(id) {
  const res = await fetch(`${apiBase}/room/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await res.text();

  return data;
}

export async function createRoom(body) {
  const res = await fetch(`${apiBase}/room/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  });

  return await res.json();
}

export async function removePatientFromRoom({ id, body }) {
  const res = await fetch(`${apiBase}/room/${id}/edit`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  return await res.json();
}

export async function addPatientToRoom({ id, body }) {
  const res = await fetch(`${apiBase}/room/${id}/edit`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const data = await res.json();

  return data;
}
