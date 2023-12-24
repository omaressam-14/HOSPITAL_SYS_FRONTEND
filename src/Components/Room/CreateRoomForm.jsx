import { useForm } from "react-hook-form";
import Button from "../Button/Button";
import { useCreateRoom } from "./useRooms";

function CreateRoomForm({ onClose }) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { mutate, isLoading } = useCreateRoom();

  const onSubmit = function (d) {
    d.numberOfBeds = +d.numberOfBeds;
    mutate(d);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="absolute w-[95%] md:w-[90%] gap-4 p-4 md:px-12 md:py-8 z-50 rounded-lg  bg-white flex flex-col top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <label className="label">Name :</label>
      {errors.name && <p className="input-error">{errors.name.message}</p>}
      <input
        {...register("name", { required: "please enter room name" })}
        className="in"
        type="in"
      />

      <label className="label">Type :</label>
      {errors.price && <p className="input-error">{errors.type.message}</p>}
      <select
        {...register("type", {
          required: "please enter room type",
        })}
        className="in"
        type="in">
        <option value="regular">Regular</option>
        <option value="special">Special</option>
      </select>

      <label className="label">Num of Beds :</label>
      {errors.numberOfBeds && (
        <p className="input-error">{errors.numberOfBeds.message}</p>
      )}
      <input
        {...register("numberOfBeds", {
          required: "please enter Num of beds",
          pattern: {
            value: /^\d+$/,
            message: "invalid bed number",
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
          {isLoading ? "Creating..." : "Create"}
        </Button>
      </div>
    </form>
  );
}

export default CreateRoomForm;
