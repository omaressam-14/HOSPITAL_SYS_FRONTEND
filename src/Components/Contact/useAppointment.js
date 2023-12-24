import { useMutation, useQuery } from "@tanstack/react-query";
import {
  bookAppointment,
  getAllUserAppointments,
} from "../../services/apiAppointment";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useAppointment() {
  const navigate = useNavigate();
  const {
    mutate,
    isLoading: isCreating,
    data,
  } = useMutation({
    mutationFn: bookAppointment,
    onSuccess: (d) => {
      if (d.status === "success") {
        toast.success("The Appointment Has Booked");
        navigate("/departments");
      } else {
        toast.error(`Something went wrong ${d?.message}`);
      }
    },
  });
  return { mutate, isCreating, data };
}

export function useGetAllUserAppointments(type, id, date) {
  const { data, isLoading, isError, refetch, isFetching } = useQuery({
    queryKey: ["appointment"],
    queryFn: () => getAllUserAppointments(type, id, date),
  });

  return { data, isLoading, isError, refetch, isFetching };
}
