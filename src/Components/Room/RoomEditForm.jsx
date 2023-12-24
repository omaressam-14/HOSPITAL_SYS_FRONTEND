import { useForm } from "react-hook-form";
import Button from "../Button/Button";
import { useUpdateRoom } from "./useRooms";

function RoomEditForm({ onClose, room }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: room,
  });

  const { mutate, isLoading } = useUpdateRoom(onClose);

  const onSubmit = function (d) {
    mutate({ id: room._id, body: d });
  };

  return (
    <div className="absolute z-50 w-[85%] p-6 rounded-2xl  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="absolute w-[90%] gap-4 z-50 rounded-lg p-4 bg-white flex flex-col top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <label className="label">Name :</label>
        {errors.name && <p className="input-error">{errors.name.message}</p>}
        <input
          {...register("name", { required: "please enter room name" })}
          className="in"
          type="in"
        />

        <label className="label">Type :</label>
        {errors.price && <p className="input-error">{errors.type.message}</p>}
        <input
          {...register("type", { required: "please enter room type" })}
          className="in"
          type="in"
        />

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
            Update
          </Button>
        </div>
      </form>
    </div>
  );
}

export default RoomEditForm;
