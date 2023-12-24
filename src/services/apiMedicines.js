import Cookies from "js-cookie";

const apiBase = import.meta.env.VITE_REACT_API_LINK;
const token = Cookies.get("token");

export async function getAllMedicines() {
  const res = await fetch(`${apiBase}/medicine`);
  const data = await res.json();
  return data;
}

export async function getMedicine(id) {
  const res = await fetch(`${apiBase}/medicine/${id}`);
  const data = await res.json();
  return data;
}

export async function updateMedicine({ id, body }) {
  const res = await fetch(`${apiBase}/medicine/${id}`, {
    method: "PATCH",
    body: body,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();

  return data;
}

export async function deleteMedicine(id) {
  const res = await fetch(`${apiBase}/medicine/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return await res.text();
}

export async function createMedicine(body) {
  const res = await fetch(`${apiBase}/medicine`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: body,
  });

  const data = await res.json();
  return data;
}
