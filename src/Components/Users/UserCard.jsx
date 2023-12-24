import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import DeleteConfirmation from "../../utils/DeleteConfirmation";
import { useDeleteUser } from "../Admin/useUsers";
const public_path = import.meta.env.VITE_REACT_PUBLIC;

function UserCard({ user }) {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [openDeleteForm, setOpenDeleteForm] = useState(false);
  const { mutate, isLoading: isDeleting } = useDeleteUser(ToggleOpen);

  function ToggleOpen() {
    setOpenDeleteForm((s) => !s);
  }

  return (
    <>
      <div className=" flex items-center sm:justify-between sm:flex-row flex-col gap-4 bg-white  p-4 rounded-lg">
        <div className="flex justify-center items-center gap-4">
          <img
            src={`${public_path}/users/${user.photo}`}
            className="w-[4rem] rounded-full"
          />
          <div className="flex flex-col ">
            <p className="font-semibold text-gray-600 text-lg">{user.name}</p>
            <p className=" text-gray-400 ">{user.age}</p>
            <p className=" text-gray-400 ">{user.email}</p>
          </div>
        </div>

        <div className="flex items-center gap-4 ">
          <Button
            className={"bg-blue-400 hover:bg-blue-600"}
            category="create"
            onCLick={() => {
              queryClient.removeQueries("userDetail");
              navigate(`${user._id}`);
            }}>
            View
          </Button>
          <Button
            onCLick={ToggleOpen}
            className={"bg-rose-400 hover:bg-rose-600"}
            category="create">
            Delete
          </Button>
        </div>
      </div>
      {openDeleteForm && (
        <div>
          <DeleteConfirmation
            toggleForm={ToggleOpen}
            deleteFn={() => mutate(user._id)}
            isLoading={isDeleting}
          />
        </div>
      )}
    </>
  );
}

export default UserCard;
