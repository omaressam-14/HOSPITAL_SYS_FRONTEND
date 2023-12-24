import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { useParams } from "react-router-dom";
import { useDeleteMedicine } from "./useMedicine";
const public_path = import.meta.env.VITE_REACT_PUBLIC;

function MedicineDetailsHeader({ data, onEdit }) {
  const { id } = useParams();

  const { mutate } = useDeleteMedicine();

  return (
    <div className="rounded-xl bg-gray-100 p-8 flex flex-col justify-center items-center md:flex md:justify-between md:items-start text-gray-600">
      <div className="flex flex-col md:flex-row items-center md:gap-8 md:text-6xl text-5xl">
        <img
          className="rounded-full w-[8rem] md:w-[14rem]"
          src={`${public_path}/medicines/${data.photo}`}
        />
        <h1>{data.name.split(" ")[0]}</h1>
      </div>
      <div className="flex gap-8 self-center md:self-end mt-4 ">
        <button
          onClick={onEdit}
          className="text-2xl text-green-500 hover:text-green-300 transition-all duration-300">
          <MdEdit />
        </button>
        <button
          onClick={() => mutate(id)}
          className="text-2xl text-red-500 hover:text-red-300 transition-all duration-300       ">
          <MdDelete />
        </button>
      </div>
    </div>
  );
}

export default MedicineDetailsHeader;
