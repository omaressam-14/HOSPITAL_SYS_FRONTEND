import { Link, useNavigate } from "react-router-dom";
import Button from "../Components/Button/Button";
import RegisterContainer from "../Components/Registers/RegisterContainer";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { signUp } from "../services/authApi";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import { useEffect } from "react";

function SignUp() {
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
  //
  const { mutate, data: signupData } = useMutation({
    mutationFn: (body) => signUp(body),
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
    watch,
  } = useForm();

  const password = watch("password", "");

  const onSubmit = function (data) {
    try {
      data.age = Number(data.age);
      mutate(data);
    } catch (err) {
      console.log("submit error", err);
    }
  };

  return (
    <RegisterContainer>
      <form
        className="flex flex-col p-4 sm:p-8 w-[90%] lg:w-[70%] bg-gray-100 sm:rounded-xl rounded-md "
        onSubmit={handleSubmit(onSubmit)}>
        <label className="label" htmlFor="name">
          Name:
        </label>
        {errors.name && <p className="input-error">{errors.name.message}</p>}

        <input
          type="text"
          id="name"
          className="in"
          placeholder="Enter Your Full Name"
          {...register("name", { required: "You Should Input Your Name" })}
        />
        <label className="label" htmlFor="email">
          Email:
        </label>
        {errors.email && <p className="input-error">{errors.email.message}</p>}
        {signupData?.error && signupData.message?.search("email") !== -1 && (
          <p className="input-error">email already used</p>
        )}
        <input
          type="email"
          id="email"
          className="in"
          placeholder="Email"
          {...register("email", {
            required: "Enter Your Email",
            pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          })}
        />
        <label className="label" htmlFor="phone">
          Phone:
        </label>
        {errors.phone && <p className="input-error">{errors.phone.message}</p>}
        {signupData?.error && signupData.message?.search("phone") !== -1 && (
          <p className="input-error">phone already used</p>
        )}
        <input
          type="text"
          className="in"
          id="phone"
          placeholder="000-000-000"
          {...register("phone", { required: "Enter Your Phone Number" })}
        />
        <label className="label" htmlFor="age">
          Age:
        </label>
        {errors.age && <p className="input-error">{errors.age.message}</p>}
        <input
          className="in"
          type="number"
          placeholder="18"
          id="age"
          {...register("age", { required: "Please Enter Your Age" })}
        />
        <div className="flex w-[100%]  justify-between">
          <div className="flex flex-col w-[45%]">
            <label className="label" htmlFor="password">
              Password:
            </label>
            {errors.password && (
              <p className="input-error">{errors.password.message}</p>
            )}

            <input
              type="password"
              placeholder="Enter The Password"
              className="in"
              {...register("password", {
                required: "please Enter Your Password",
                minLength: 8,
              })}
            />
          </div>
          <div className="flex flex-col w-[45%]">
            <label className="label" htmlFor="passwordConfirm">
              Password Confirm:
            </label>
            {errors.passwordConfirm && (
              <p className="input-error">{errors.passwordConfirm.message}</p>
            )}
            <input
              className="in"
              type="password"
              placeholder="Enter The Password Confirm"
              {...register("passwordConfirm", {
                required: "please Enter Your Password Confirm",
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
            />
          </div>
        </div>

        <label className="label" htmlFor="gender">
          Gender:
        </label>
        <select className="in" id="gender" {...register("gender")}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <span className="flex gap-2 text-sm mb-5">
          <p>Do You Have Account ?</p>
          <Link className="text-blue-500" to="/signin">
            Sign In
          </Link>
        </span>
        <Button type="submit" clasName="rounded-lg ">
          Sign Up
        </Button>
      </form>
    </RegisterContainer>
  );
}

export default SignUp;
