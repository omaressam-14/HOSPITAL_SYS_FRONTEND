const apiBase = import.meta.env.VITE_REACT_API_LINK;

export async function getAllDepartments() {
  const res = await fetch(`${apiBase}/department`);
  const data = await res.json();
  return data;
}

export async function createDepartment(newDepartment) {
  const res = await fetch(`${apiBase}/department`, {
    method: "POST",
    body: newDepartment,
  });

  return await res.json();
}

export async function getDepartment(id) {
  const res = await fetch(`${apiBase}/department/${id}`);
  const data = await res.json();
  return data;
}
