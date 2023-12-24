import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

function RoomTableRow({ room, index }) {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return (
    <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}>
      <td className="border px-4 py-2 text-center">{room.name}</td>
      <td className="border px-4 py-2 text-center">{room.type}</td>
      <td className="border px-4 py-2 text-center">{room.numberOfBeds}</td>
      <td className="border px-4 py-2 text-center">
        {room.isFull ? "Yes" : "No"}
      </td>
      <td className="border px-4 py-2 text-center">
        <button
          onClick={() => {
            queryClient.removeQueries("room");
            navigate(room._id);
          }}
          className="bg-green-500 hover:bg-green-700 transition-all duration-300 text-white px-4 py-1 rounded-lg">
          View
        </button>
      </td>
    </tr>
  );
}

export default RoomTableRow;
