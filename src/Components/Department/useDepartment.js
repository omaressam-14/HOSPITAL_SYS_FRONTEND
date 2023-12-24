import { useQuery } from "@tanstack/react-query";
import { getDepartment } from "../../services/apiDepartments";

export function useDepartment(id) {
  const { data, isLoading, error } = useQuery(["departments", id], () =>
    getDepartment(id)
  );

  return { data, isLoading, error };
}
