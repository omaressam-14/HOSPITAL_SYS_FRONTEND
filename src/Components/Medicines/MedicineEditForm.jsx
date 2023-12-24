import { useState } from "react";
import { useForm } from "react-hook-form";
import { useUpdateMedicine } from "./useMedicine";
import Button from "../Button/Button";

function MedicineEditForm({ medicine, onClose }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: medicine });

  const { mutate, isLoading } = useUpdateMedicine();

  const [profileImg, setProfileImg] = useState("");

  const onSubmit = function (d) {
    const formData = new FormData();
    if (profileImg) {
      formData.append("photo", profileImg);
    }
    formData.append("name", d.name);
    formData.append("price", Number(d.price));
    formData.append("quantity", Number(d.quantity));
    mutate({ id: medicine._id, body: formData });
  };
  return (
    <form
      encType="multipart/form-data"
      onSubmit={handleSubmit(onSubmit)}
      className="absolute w-[90%] gap-4 z-50 rounded-lg p-4 bg-white flex flex-col top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <label className="label">name :</label>
      <input
        onChange={(e) => setProfileImg(e.target.files[0])}
        type="file"
        id="photo"
        className="in"
        accept="image/*"
      />

      <label className="label">name :</label>
      {errors.name && <p className="input-error">{errors.name.message}</p>}
      <input
        {...register("name", { required: "please enter medicine name" })}
        className="in"
        type="in"
      />

      <label className="label">price :</label>
      {errors.price && <p className="input-error">{errors.price.message}</p>}
      <input
        {...register("price", { required: "please enter medicine price" })}
        className="in"
        type="in"
      />

      <label className="label">quantity :</label>
      {errors.price && <p className="input-error">{errors.price.message}</p>}
      <input
        {...register("quantity", {
          required: "please enter quantity",
          pattern: {
            value: /^\d+$/,
            message: "invalid price number",
          },
        })}
        className="in"
        type="in"
      />

      <div className="flex self-end gap-4">
        <Button
          disabled={isLoading}
          onCLick={onClose}
          type="button"
          category="create"
          className=" bg-red-500 hover:bg-red-300">
          Cancel
        </Button>
        <Button
          disabled={isLoading}
          category="create"
          className="bg-green-500 hover:bg-green-300">
          Update
        </Button>
      </div>
    </form>
  );
}

export default MedicineEditForm;
