import Cookies from "js-cookie";

const apiBase = import.meta.env.VITE_REACT_API_LINK;
const token = Cookies.get("token");

export async function createReview(args) {
  const res = await fetch(`${apiBase}/user/${args.docId}/reviews`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(args.body),
  });
  const data = await res.json();

  return data;
}

export async function deleteReview(id) {
  const res = await fetch(`${apiBase}/reviews/${id}`, {
    method: "DELETE",
    headers: new Headers({
      Authorization: `Bearer ${token}`,
    }),
    body: JSON.stringify({}),
  });

  if (res.ok) {
    // Try to parse the response as JSON
    try {
      const data = await res.text();
      return data;
    } catch (error) {
      // Handle the parsing error
      console.error("Invalid JSON:", error);
    }
  } else {
    // Handle the response error
    console.error("Response error:", res.status, res.statusText);
  }
}

export async function updateReview(args) {
  const res = await fetch(`${apiBase}/reviews/${args.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(args.body),
  });

  const data = await res.json();

  return data;
}
