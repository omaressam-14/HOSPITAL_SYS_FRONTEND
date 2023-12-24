import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createMedicine,
  deleteMedicine,
  getAllMedicines,
  getMedicine,
  updateMedicine,
} from "../../services/apiMedicines";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useGetAllMedicines() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["medicines"],
    queryFn: getAllMedicines,
  });

  return { data: data?.data, isLoading, isError };
}

export function useGetMedicine(id) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["medicine"],
    queryFn: () => getMedicine(id),
  });

  return { data: data?.data, isError, isLoading };
}

export function useUpdateMedicine() {
  const navigate = useNavigate();
  const { mutate, isLoading, isError } = useMutation({
    mutationFn: updateMedicine,
    onSuccess: (d) => {
      if (d.status === "success") {
        toast.success("medicine has been updated successfully");
        navigate("/medicines");
      } else {
        toast.error(`can't update medicine ${d.message}`);
      }
    },
  });
  return { mutate, isLoading, isError };
}

export function useDeleteMedicine() {
  const navigate = useNavigate();
  const { mutate, isLoading, isError } = useMutation({
    mutationFn: deleteMedicine,
    onSuccess: () => {
      toast.success("the medicine has been deleted");
      navigate("/medicines");
    },
    onError: () => {
      toast.error("something went wrong");
    },
  });

  return { mutate, isLoading, isError };
}

export function useCreateMedicine() {
  const navigate = useNavigate();
  const querClient = useQueryClient();
  const { mutate, isError, isLoading } = useMutation({
    mutationFn: createMedicine,
    onSuccess: (d) => {
      if (d.status === "success") {
        toast.success("Medicine Has Been Created");
        querClient.invalidateQueries("medicines");
        navigate(`/medicines/${d?.data._id}`);
      } else {
        toast.error(
          "cannot create medicine right now , or you have invalid inputs"
        );
      }
    },
    onError: (err) => {
      toast.error("something went wrong");
      console.log(err);
    },
  });

  return { mutate, isError, isLoading };
}
