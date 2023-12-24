import Cookies from "js-cookie";

const apiBase = import.meta.env.VITE_REACT_API_LINK;
const token = Cookies.get("token");

export async function createMedicalRecord(body) {
  const res = await fetch(`${apiBase}/records`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: body,
  });

  return await res.json();
}

export async function getMedicalRecordsPerson(type, id, filter) {
  const res = await fetch(
    `${apiBase}/records?${type}=${id}${
      filter !== "" ? `&isFinished=${filter} ` : ""
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

export async function deleteMedicalRecord(id) {
  const res = await fetch(`${apiBase}/records/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await res.text();
  return data;
}

export async function markMedicalAsFinished(id) {
  const res = await fetch(`${apiBase}/records/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ isFinished: true }),
  });

  const data = await res.json();
  return data;
}
