import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import { useQueryClient } from "@tanstack/react-query";

const public_link = import.meta.env.VITE_REACT_PUBLIC;

function MedicineCard({ medicine }) {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return (
    <div className=" bg-gray-100 flex flex-col items-center w-[100%]  p-6 rounded-lg xl:w-[80%] md:w-[100%]">
      <img
        className="w-[8rem] rounded-xl"
        src={`${public_link}/medicines/${medicine.photo}`}
        alt={medicine.name}
      />
      <p className="font-bold mt-4 tracking-wide text-gray-700">
        {medicine.name}
      </p>
      <Button
        onCLick={() => {
          queryClient.removeQueries("medicine");
          navigate(medicine._id);
        }}
        category="create"
        className="rounded-lg">
        See Details
      </Button>
    </div>
  );
}

export default MedicineCard;
