import { useMutation } from "@tanstack/react-query";
import { updateCurrentUser } from "../../../services/apiUser";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function useUpdateMe() {
  const navigate = useNavigate();
  const { mutate, data, isLoading, isError } = useMutation({
    mutationFn: updateCurrentUser,
    onSuccess: (d) => {
      if (d.status === "success") {
        toast.success("Updating Done");
        navigate("/my-account");
      } else {
        toast.error("cannot update your account");
      }
    },
    onError: (err) => {
      console.log(err);
      toast.err("something went wrong");
    },
  });

  return { mutate, data, isLoading, isError };
}
