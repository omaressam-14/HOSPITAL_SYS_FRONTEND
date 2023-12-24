import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/authApi";

export default function useUser() {
  const {
    data: user,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });

  return { user: user?.data, isLoading, isError };
}
