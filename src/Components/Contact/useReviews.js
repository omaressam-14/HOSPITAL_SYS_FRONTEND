import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  createReview,
  deleteReview,
  updateReview,
} from "../../services/apiReviews";
import toast from "react-hot-toast";

export function useCreateReview(onCloseForm) {
  const queryClient = useQueryClient();
  const { mutate, isLoading, isError, data } = useMutation({
    mutationFn: (docid, body) => createReview(docid, body),
    onSuccess: (d) => {
      if (d.status === "success") {
        toast.success("Your Review Posted");
        queryClient.invalidateQueries({ queryKey: ["doctor"] });
        onCloseForm();
      }
      if (d.status === "fail") {
        toast.error(`${d.message}`);
        onCloseForm();
      }
    },
    onError: (err) => {
      console.error(err);
      toast.error(`Something Went Wrong, Can't Post Right Now`);
    },
  });

  return { mutate, isLoading, isError, data };
}

export function useDeleteReview() {
  const queryClient = useQueryClient();
  const { mutate, isError, isLoading, data } = useMutation({
    mutationFn: (id) => deleteReview(id),
    onSuccess: () => {
      toast.success("Review Deleted");
      queryClient.invalidateQueries({ queryKey: ["doctor"] });
    },
    onError: (err) => {
      toast.error(err?.message);
    },
  });

  return { mutate, isError, isLoading, data };
}

export function useUpdateReview(onCloseForm) {
  const queryClient = useQueryClient();
  const { mutate, isLoading, isError, data } = useMutation({
    mutationFn: updateReview,
    onSuccess: (data) => {
      if (data?.status === "success") {
        toast.success("The Review Has Been Updated");
        queryClient.invalidateQueries({ queryKey: ["doctor"] });
      } else {
        toast.error(`Can't Update The Review Right Now`);
      }
      onCloseForm();
    },
    onError: (err) => {
      console.log(err);
      toast.error("something went wrong");
    },
  });
  return { mutate, isError, isLoading, data };
}
