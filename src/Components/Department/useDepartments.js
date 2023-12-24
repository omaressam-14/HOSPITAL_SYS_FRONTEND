import { useQuery } from "@tanstack/react-query";
import { getAllDepartments } from "../../services/apiDepartments";

export function useDepartments() {
  const {
    isLoading,
    data: departments,
    error,
    isError,
  } = useQuery({
    queryKey: ["departments"],
    queryFn: getAllDepartments,
  });

  return { isLoading, departments, error, isError };
}
