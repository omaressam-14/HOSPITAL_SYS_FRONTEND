import Cookies from "js-cookie";

const baseURI = import.meta.env.VITE_REACT_API_LINK;

export async function signUp(body) {
  const res = await fetch(`${baseURI}/user/signup`, {
    method: "POST",
    headers: new Headers({ "Content-Type": "application/json" }),
    body: JSON.stringify(body),
  });
  const data = await res.json();
  return data;
}

export async function SignIn(body) {
  const res = await fetch(`${baseURI}/user/signin`, {
    method: "POST",
    headers: new Headers({ "Content-Type": "application/json" }),
    body: JSON.stringify(body),
  });

  const data = await res.json();
  return data;
}

export async function getCurrentUser() {
  const userid = Cookies.get("userid");
  if (!userid) return null;
  const res = await fetch(`${baseURI}/user/${userid}`);
  const data = await res.json();
  return data;
}
