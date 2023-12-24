import { useForm } from "react-hook-form";
import useUser from "../Components/ProtectedRoute/useUser";
import Spinner from "../utils/Spinner";
import { useState } from "react";
import Button from "../Components/Button/Button";
import useUpdateMe from "../Components/Account/My Account/useUpdateMe";

function UpdateAccount() {
  const { mutate, isLoading: isUpdating } = useUpdateMe();
  const { user, isLoading } = useUser();
  const address = user?.address;
  const [profileImg, setProfilImg] = useState("");
  const { handleSubmit, register } = useForm({
    defaultValues: { ...user, ...address },
  });

  if (isLoading) return <Spinner />;

  const onSubmit = function (d) {
    const formData = new FormData();
    formData.append("name", d.name);
    if (profileImg) {
      formData.append("photo", profileImg);
    }
    formData.append("phone", d.phone);
    formData.append("country", d.country);
    formData.append("city", d.city);
    formData.append("state", d.state);
    formData.append("postalCode", d.postalCode);
    formData.append("street", d.street);
    mutate(formData);
  };

  return (
    <div className="w-[80%] m-auto  bg-gray-100 rounded-lg mt-10 p-8">
      <form
        encType="multipart/form-data"
        className="flex flex-col gap-4"
        onSubmit={handleSubmit(onSubmit)}>
        <label className="label" htmlFor="photo">
          Photo
        </label>
        <input
          onChange={(e) => setProfilImg(e.target.files[0])}
          type="file"
          id="photo"
          className="in"
          accept="image/*"
        />
        <label className="label" htmlFor="name">
          Name:
        </label>
        <input
          type="text"
          className="in"
          {...register("name", { required: "please enter your name" })}
        />
        <label className="label" htmlFor="phone">
          Phone:
        </label>
        <input
          className="in"
          type="text"
          {...register("phone", { required: "please enter phone number" })}
        />
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-4 w-[45%] ">
            <label className="label">Country:</label>
            <input type="text" {...register("country")} className="in" />
          </div>
          <div className="flex flex-col gap-4 w-50 w-[45%]">
            <label className="label">City:</label>
            <input type="text" {...register("city")} className="in" />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-4 w-[45%] ">
            <label className="label">State:</label>
            <input type="text" {...register("state")} className="in" />
          </div>
          <div className="flex flex-col gap-4 w-50 w-[45%]">
            <label className="label">Postal Code:</label>
            <input type="text" {...register("postalCode")} className="in" />
          </div>
        </div>
        <label className="label">Street:</label>
        <input className="in" type="text" {...register("street")} />

        <Button disabled={isUpdating} category="create" type="submit">
          {isUpdating ? "...Loading" : "Submit"}
        </Button>
      </form>
    </div>
  );
}

export default UpdateAccount;
