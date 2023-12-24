import { useParams } from "react-router-dom";
import Button from "../Button/Button";
import { useAddPatientToRoom } from "./useRooms";

const public_path = import.meta.env.VITE_REACT_PUBLIC;

function PatientCard({ patient, onClose }) {
  const { id: roomId } = useParams();
  //
  const { mutate, isLoading } = useAddPatientToRoom();

  function handleClick() {
    mutate({ id: roomId, body: { patient: patient._id } });
    onClose();
  }

  return (
    <div className="flex items-center justify-between bg-gray-100 my-4 p-4 rounded-lg">
      <div className="flex justify-center items-center gap-4">
        <img
          src={`${public_path}/users/${patient.photo}`}
          className="w-[4rem] rounded-full"
        />
        <div className="flex flex-col ">
          <p className="font-semibold text-gray-600 text-lg">{patient.name}</p>
          <p className=" text-gray-400 ">{patient.age}</p>
          <p className=" text-gray-400 ">{patient.email}</p>
        </div>
      </div>

      <Button disabled={isLoading} onCLick={handleClick} category="create">
        Add
      </Button>
    </div>
  );
}

export default PatientCard;
