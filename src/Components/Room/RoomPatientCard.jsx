import { useParams } from "react-router-dom";
import { useDeletePatientFromRoom } from "./useRooms";

const public_path = import.meta.env.VITE_REACT_PUBLIC;

function RoomPatientCard({ patient }) {
  const { mutate: deletePatient, isLoading: isDeleting } =
    useDeletePatientFromRoom();

  const { id } = useParams();

  const handleDeletePatient = function () {
    deletePatient({ id: id, body: { patient: patient._id } });
  };

  if (isDeleting) return <p className="text-center mt-8">...Deleting</p>;

  return (
    <div className="w-[100%] flex flex-col justify-center items-center my-4 ">
      {/*  */}
      <div className="relative">
        <img
          className="w-[5rem]  rounded-full "
          src={`${public_path}/users/${patient.photo}`}
        />
        <button
          onClick={handleDeletePatient}
          className="font-semibold w-[2rem] h-[2rem] border-2 rounded-full text-center border-red-500 text-red-500 absolute top-0 right-[-0.5rem] hover:border-transparent hover:bg-red-500 hover:text-white duration-300 transition-all">
          X
        </button>
      </div>
      {/*  */}
      <p className="text-lg font-semibold capitalize text-gray-500">
        {patient.name}
      </p>
    </div>
  );
}

export default RoomPatientCard;
