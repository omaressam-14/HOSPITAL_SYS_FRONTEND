import { useMutation, useQuery } from "@tanstack/react-query";
import {
  createMedicalRecord,
  deleteMedicalRecord,
  getMedicalRecordsPerson,
  markMedicalAsFinished,
} from "../../services/apiMedicalRecords";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useCreateMedicalRecord() {
  const navigate = useNavigate();
  const { mutate, isLoading, isError } = useMutation({
    mutationFn: createMedicalRecord,
    onSuccess: (d) => {
      if (d.status === "success") {
        toast.success("Medical Record has been created");
        navigate("/appointments");
      } else {
        toast.error("something went wrong");
      }
    },
    onError: () => {
      toast.error("something went wrong");
    },
  });

  return { mutate, isLoading, isError };
}

export function useGetMedicalRecordsPerson(type, id, filter) {
  const { data, isLoading, refetch, isFetching } = useQuery({
    queryKey: ["records"],
    queryFn: () => getMedicalRecordsPerson(type, id, filter),
  });

  return { data, isLoading, refetch, isFetching };
}

export function useDeleteMedicalRecord() {
  const navigate = useNavigate();
  const { mutate, isLoading, isError } = useMutation({
    mutationFn: deleteMedicalRecord,
    onSuccess: () => {
      toast.success("Medical record has been Deleted");
      navigate("/appointments");
    },
    onError: (err) => {
      toast.error(`Something went wrong`);
      console.error(err);
    },
  });

  return { mutate, isLoading, isError };
}

export function useMarkMedicalAsFinished() {
  const navigate = useNavigate();
  const { mutate, isLoading, isError } = useMutation({
    mutationFn: markMedicalAsFinished,
    onSuccess: (d) => {
      if (d.status === "success") {
        toast.success("Medical Record Marked as Finished");
        navigate("/appointments");
      } else {
        toast.error(d.message);
      }
    },
  });

  return { mutate, isError, isLoading };
}
