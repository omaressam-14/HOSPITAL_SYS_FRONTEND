import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createEmplyee,
  deleteUser,
  getAllPatients,
  getAllUsers,
  getDoctor,
} from "../../services/apiUser";
import toast from "react-hot-toast";

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

export function useGetUser(id) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["userDetail"],
    queryFn: () => getDoctor(id),
  });

  return { data: data?.data, isLoading, isError };
}

export function useDeleteUser(onClose) {
  const queryClient = useQueryClient();
  const { mutate, isLoading, isError } = useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      toast.success("User Deleted Successfully");
      queryClient.invalidateQueries("users");
      onClose();
    },
    onError: () => {
      toast.error("something went wrong");
    },
  });

  return { mutate, isLoading, isError };
}
