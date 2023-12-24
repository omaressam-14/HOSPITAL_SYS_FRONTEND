import { useQuery } from "@tanstack/react-query";
import { getDoctor } from "../../services/apiUser";

export default function useDoctor(id) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["doctor"],
    queryFn: () => getDoctor(id),
  });

  return { doctor: data?.data, isLoading, isError };
}
