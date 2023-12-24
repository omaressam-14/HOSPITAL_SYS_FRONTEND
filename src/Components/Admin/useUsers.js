import { useMutation, useQuery } from "@tanstack/react-query";
import {
  createEmplyee,
  getAllPatients,
  getAllUsers,
} from "../../services/apiUser";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useGetAllPatients() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["patients"],
    queryFn: getAllPatients,
  });

  return { data: data?.data, isLoading, isError };
}

export function useGetAllUsers(role) {
  const { data, isLoading, isError, refetch, isRefetching } = useQuery({
    queryKey: ["users"],
    queryFn: () => getAllUsers(role),
  });

  return { data: data?.data, isLoading, isError, refetch, isRefetching };
}

export function useCreateEmployee(onClose) {
  const { mutate, isLoading, isError } = useMutation({
    mutationFn: createEmplyee,
    onSuccess: (d) => {
      if (d.status === "success") {
        toast.success("Email has been sent to the user");
        onClose();
      } else if (d.status === "fail") {
        toast.error(d.message);
      } else {
        toast.error(`something went wrong`);
      }
    },
    onError: (err) => {
      console.log(err);
    },
  });

  return { mutate, isLoading, isError };
}
