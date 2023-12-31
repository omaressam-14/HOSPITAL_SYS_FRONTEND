import Cookies from "js-cookie";

const baseURI = import.meta.env.VITE_REACT_API_LINK;
const token = Cookies.get("token");

export async function getDoctor(id) {
  const res = await fetch(`${baseURI}/user/${id}`);
  return await res.json();
}

export async function getCurrentUser() {
  const res = await fetch(`${baseURI}/user/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();

  return data;
}

export async function updateCurrentUser(body) {
  const res = await fetch(`${baseURI}/user/updateMe`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: body,
  });
  const data = await res.json();

  return data;
}

export async function getAllPatients() {
  const res = await fetch(`${baseURI}/user?role=user`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();

  return data;
}

export async function getAllUsers(role, page, limit) {
  const totalCountRes = await fetch(
    `${baseURI}/user?${role ? `role=${role}` : ""}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const d = await totalCountRes.json();
  const totalCount = d.results;

  const res = await fetch(
    `${baseURI}/user?${page ? `page=${page}` : "page=1"}${
      role ? `&role=${role}` : ""
    }${limit ? `&limit=${limit}` : ""}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const data = await res.json();
  data.totalResults = totalCount;
  return data;
}

export async function createEmplyee(body) {
  const res = await fetch(`${baseURI}/admin/employee`, {
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

export async function deleteUser(id) {
  const res = await fetch(`${baseURI}/user/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await res.text();

  return data;
}
