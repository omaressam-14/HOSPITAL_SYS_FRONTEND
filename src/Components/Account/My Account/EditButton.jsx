import { MdModeEdit } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function EditButton() {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate("/update-me")}
      className="flex gap-2 items-center py-1 px-2 text-gray-400 border-[1.5px] border-gray-200 rounded-lg hover:bg-gray-300 hover:border-gray-300 transition-all duration-300  hover:text-white">
      <MdModeEdit />
      Edit
    </button>
  );
}

export default EditButton;
