import { useForm } from "react-hook-form";
import Header from "../Components/Home/Header";
import useUser from "../Components/ProtectedRoute/useUser";
import Spinner from "../utils/Spinner";
import { useEffect, useState } from "react";
import Button from "../Components/Button/Button";
import { postContactUs } from "../services/apiContactUs";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Error from "../utils/Error";

function usePostContactUs() {
  const navigate = useNavigate();
  const { mutate, isLoading, isError, data } = useMutation({
    mutationFn: postContactUs,
    onSuccess: (d) => {
      if (d.status === "success") {
        toast.success(`${d.message}`);
        navigate("/");
      } else {
        toast.error(`${d.message}`);
      }
    },
    onError: (err) => {
      console.log(err);
    },
  });

  return { mutate, isLoading, isError, data };
}

function ContactUs() {
  const [defaultEmail, setDefaultEmail] = useState("");
  const { user, isLoading } = useUser();
  const { mutate, isLoading: isSending, isError } = usePostContactUs();

  useEffect(
    function () {
      if (user) {
        setDefaultEmail(user.email);
      }
    },
    [user]
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { email: defaultEmail },
  });

  const onSubmit = function (d) {
    if (defaultEmail) {
      d.email = defaultEmail;
    }
    mutate(d);
  };

  if (isLoading) return <Spinner />;
  if (isError) return <Error />;

  return (
    <div>
      <Header />
      <div className="flex justify-center items-center w-[100%] my-8">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col p-8 bg-gray-100 rounded-lg sm:w-[80%] w-[90%] lg:w-[70%] xl:w-[60%]">
          {defaultEmail === "" && (
            <>
              <label className="label">Email :</label>
              {errors.email && (
                <p className="input-error">{errors.email.message}</p>
              )}
              <input
                {...register("email", { required: "please enter your email" })}
                className="in"
                placeholder="enter your email"
                type="email"
              />
            </>
          )}
          <label className="label">Subject:</label>
          {errors.subject && (
            <p className="input-error">{errors.subject.message}</p>
          )}

          <input
            {...register("subject", { required: "please enter the subject" })}
            className="in"
            placeholder="enter your subject"
            type="text"
          />
          <label className="label">Message: </label>
          {errors.message && (
            <p className="input-error">{errors.message.message}</p>
          )}

          <textarea
            {...register("message", { required: "please enter your message" })}
            className="resize-none w-[100%] h-64 border border-gray-300 rounded-md p-2 text-sm text-gray-800"
          />
          <Button
            disabled={isSending}
            type="submit"
            category="create"
            className="bg-gray-700 hover:bg-gray-500 w-[100%] self-center mt-8">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
