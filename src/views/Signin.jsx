import { Link, useNavigate } from "react-router-dom";
import RegisterContainer from "../Components/Registers/RegisterContainer";
import Button from "../Components/Button/Button";
import { useMutation } from "@tanstack/react-query";
import { SignIn } from "../services/authApi";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import { useEffect } from "react";

function Signin() {
  const navigate = useNavigate();
  const userid = Cookies.get("userid");
  useEffect(
    function () {
      if (userid) {
        navigate("/");
      }
    },
    [userid, navigate]
  );
  const {
    mutate,
    data: signinData,
    isLoading,
  } = useMutation({
    mutationFn: (d) => SignIn(d),
    onSuccess: (d) => {
      if (d.status === "success") {
        Cookies.set("token", d.token, { expires: 2, secure: true });
        Cookies.set("userid", d.user._id, { expires: 2, secure: true });

        navigate("/my-account");
      }
    },
    onError: () => {
      toast.error("something went wrong");
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    mutate(data);
  };

  return (
    <RegisterContainer>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col p-4 sm:p-8 w-[90%] lg:w-[70%] bg-gray-100 md:rounded-xl rounded-md">
        {/*  */}
        {signinData?.status === "fail" && (
          <p className="capitalize text-red-500 font-semibold self-center">
            {signinData.message}
          </p>
        )}
        {/*  */}
        <label className="label" htmlFor="name">
          Email:
        </label>
        {errors.email && <p className="input-error">{errors.email.message}</p>}
        <input
          type="email"
          id="email"
          className="in"
          disabled={isLoading}
          placeholder="Enter The Email"
          {...register("email", { required: "Please Enter Your Email" })}
        />
        <label className="label" htmlFor="password">
          Password:
        </label>
        {errors.password && (
          <p className="input-error">{errors.password.message}</p>
        )}

        <input
          type="password"
          className="in"
          id="password"
          disabled={isLoading}
          placeholder="Enter The Password"
          {...register("password", { required: "Please Enter Your Password" })}
        />
        {/*  */}
        <div className="flex items-center justify-between gap-2">
          <span className="text-slate-800 md:text-sm text-sm">
            {`Don't Have Email?`}
            <Link className="text-blue-500 ml-1 font-semibold" to="/signup">
              Sign Up
            </Link>
          </span>
          <span className="text-slate-800 md:text-sm text-sm">
            <Link
              to="/forget-password"
              className="text-red-500 ml-1 font-semibold">
              Forget Your Password?
            </Link>
          </span>
          {/*  */}
        </div>
        <Button
          disabled={isLoading}
          type="submit"
          clasName="rounded-lg mt-8 tracking-wider ">
          {isLoading ? "... Loading" : "Sign In"}
        </Button>
        {signinData?.error && (
          <p className="input-error self-center mt-3">{signinData.message}</p>
        )}
      </form>
    </RegisterContainer>
  );
}

export default Signin;
