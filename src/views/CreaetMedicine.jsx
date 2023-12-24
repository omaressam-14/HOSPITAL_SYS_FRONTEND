import { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../Components/Button/Button";
import { useCreateMedicine } from "../Components/Medicines/useMedicine";

function CreaetMedicine() {
  const [medicineImg, setMedicineImg] = useState("");
  const { mutate, isLoading } = useCreateMedicine();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = function (d) {
    const formData = new FormData();
    if (medicineImg) formData.append("photo", medicineImg);
    formData.append("name", d.name);
    formData.append("quantity", Number(d.quantity));
    formData.append("price", Number(d.price));
    mutate(formData);
  };

  return (
    <form
      encType="multipart/form-data"
      onSubmit={handleSubmit(onSubmit)}
      className="  gap-4 rounded-lg p-4 bg-gray-100  flex-col w-[85%]   flex my-20     z-50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <label className="label">name :</label>
      <input
        onChange={(e) => setMedicineImg(e.target.files[0])}
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
        {...register("price", {
          required: "please enter medicine price",
          pattern: {
            value: /^\d+$/,
            message: "invalid bed number",
          },
        })}
        className="in"
        type="in"
      />

      <label className="label">quantity :</label>
      {errors.price && <p className="input-error">{errors.price.message}</p>}
      <input
        {...register("quantity", { required: "please enter quantity" })}
        className="in"
        type="in"
      />

      <Button
        disabled={isLoading}
        category="create"
        className="w-[100%] self-center bg-green-500 hover:bg-green-300">
        Create
      </Button>
    </form>
  );
}

export default CreaetMedicine;
