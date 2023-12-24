import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  addPatientToRoom,
  createRoom,
  deleteRoom,
  getAllRooms,
  getRoom,
  removePatientFromRoom,
  updateRoom,
} from "../../services/apiRoom";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useGetAllRooms(sort) {
  const { data, isLoading, isError, refetch, isRefetching } = useQuery({
    queryKey: ["rooms"],
    queryFn: () => getAllRooms(sort),
  });

  return { data: data?.data, isLoading, isError, refetch, isRefetching };
}

export function useGetRoom(id) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["room"],
    queryFn: () => getRoom(id),
  });

  return { data: data?.data, isLoading, isError };
}

export function useUpdateRoom(onClose) {
  const queryClient = useQueryClient();
  const { mutate, isLoading, isError } = useMutation({
    mutationFn: updateRoom,
    onSuccess: (d) => {
      if (d.status === "success") {
        toast.success("The Room Has Been Created");
        queryClient.invalidateQueries("room");
        onClose();
      } else if (d.status === "fail" && d.message.startsWith("Dupl")) {
        toast.error("Name Already Exsist");
      } else {
        console.log(d);
        toast.error("Something Went Wrong");
      }
    },
    onError: () => {
      toast.error("Something Went Wrong");
    },
  });

  return { mutate, isLoading, isError };
}

export function useDeleteRoom() {
  const navigate = useNavigate();
  const { mutate, isLoading, isError } = useMutation({
    mutationFn: deleteRoom,
    onSuccess: () => {
      toast.success("The Room Has Been deleted");
      navigate("/room");
    },
    onError: () => {
      toast.error("cannot delete the room right now");
    },
  });

  return { mutate, isLoading, isError };
}

export function useCreateRoom() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate, isLoading, isError } = useMutation({
    mutationFn: createRoom,
    onSuccess: (d) => {
      if (d.status === "success") {
        toast.success("the room has been created");
        queryClient.removeQueries("room");
        navigate(`/room/${d?.data?._id}`);
      } else if (d.status === "fail") {
        if (d.message.startsWith("Duplicate"))
          toast.error("The Room Name Already Exsist");
      } else toast.error("something went wrong");
    },
  });

  return { mutate, isLoading, isError };
}

export function useDeletePatientFromRoom() {
  const queryClient = useQueryClient();
  const { mutate, isLoading, isError } = useMutation({
    mutationFn: removePatientFromRoom,
    onSuccess: () => {
      toast.success("Patient Has Been Removed");
      queryClient.invalidateQueries("room");
    },
    onError: () => {
      toast.error("something went wrong");
    },
  });

  return { mutate, isLoading, isError };
}

export function useAddPatientToRoom() {
  const queryClient = useQueryClient();
  const { mutate, isLoading, isError } = useMutation({
    mutationFn: addPatientToRoom,
    onSuccess: (d) => {
      if (d.status === "success") {
        queryClient.invalidateQueries("room");
        toast.success("The Patient Added To The Room");
      } else if (d.status === "fail") {
        toast.error(d.message);
      } else {
        toast.error("something Went Wrong");
      }
    },
    onError: (err) => {
      console.log(err);
    },
  });
  return { mutate, isError, isLoading };
}
