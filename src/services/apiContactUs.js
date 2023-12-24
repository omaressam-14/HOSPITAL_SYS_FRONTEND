const api_base = import.meta.env.VITE_REACT_API_LINK;

export async function postContactUs(body) {
  const res = await fetch(`${api_base}/contact-us`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const data = await res.json();
  return data;
}
