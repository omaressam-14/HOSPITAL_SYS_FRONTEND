import { useState } from "react";
import DeleteConfirmation from "./DeleteConfirmation";
import { useDeleteRoom } from "./useRooms";

function RoomHeader({ data, onEdit }) {
  const [opendDelete, setOpenDelete] = useState(false);
  const { mutate, isLoading } = useDeleteRoom();

  const toggleDelete = function () {
    setOpenDelete((s) => !s);
  };

  return (
    <>
      <div className="mb-8 flex flex-col gap-8  bg-gray-100 rounded-lg p-4 sm:flex-row items-center justify-between">
        <h1 className="text-8xl font-bold text-gray-500">{data?.name}</h1>
        <div className="flex gap-8">
          <button
            onClick={toggleDelete}
            className="border-2 w-[6rem] py-2 rounded-xl border-gray-300 text-gray-400 hover:bg-gray-600 hover:border-transparent hover:text-white transition-all duration-300">
            Delete
          </button>
          <button
            onClick={onEdit}
            className="border-2 w-[6rem] py-2 rounded-xl border-gray-300 text-gray-400 hover:bg-gray-600 hover:border-transparent hover:text-white transition-all duration-300">
            Edit
          </button>
        </div>
      </div>
      {opendDelete && (
        <DeleteConfirmation
          toggleForm={toggleDelete}
          deleteFn={() => mutate(data._id)}
          isLoading={isLoading}
        />
      )}
    </>
  );
}

export default RoomHeader;
