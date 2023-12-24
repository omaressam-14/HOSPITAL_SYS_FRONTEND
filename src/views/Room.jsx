import { useParams } from "react-router-dom";
import { useGetRoom } from "../Components/Room/useRooms";
import Spinner from "../utils/Spinner";
import Error from "../utils/Error";
import RoomHeader from "../Components/Room/RoomHeader";
import RoomInfo from "../Components/Room/RoomInfo";
import RoomPatientContainer from "../Components/Room/RoomPatientContainer";
import Backdrop from "../utils/Backdrop";
import { useState } from "react";
import RoomEditForm from "../Components/Room/RoomEditForm";

function Room() {
  const { id } = useParams();
  const { isLoading, isError, data } = useGetRoom(id);
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);

  const toggleOpenForm = function () {
    setIsEditFormOpen((s) => !s);
  };

  if (isLoading) return <Spinner />;
  if (isError || data === undefined) return <Error />;

  return (
    <>
      <div className="p-12 relative">
        <RoomHeader data={data} onEdit={toggleOpenForm} />
        <div className="flex flex-col md:grid md:grid-cols-[1fr,3fr] gap-8">
          <RoomInfo data={data} />
          <RoomPatientContainer data={data} />
        </div>
      </div>
      {/*  */}
      {isEditFormOpen && (
        <div>
          <Backdrop onClick={toggleOpenForm} />
          <RoomEditForm onClose={toggleOpenForm} room={data} />
        </div>
      )}
      {/*  */}
    </>
  );
}

export default Room;
