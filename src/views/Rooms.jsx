import { useEffect, useState } from "react";
import RoomTableHead from "../Components/Room/RoomTableHead";
import RoomTableRow from "../Components/Room/RoomTableRow";
import { useGetAllRooms } from "../Components/Room/useRooms";
import Error from "../utils/Error";
import SearchBar from "../utils/SearchBar";
import Spinner from "../utils/Spinner";
import CreateRoomForm from "../Components/Room/CreateRoomForm";

function Rooms() {
  const [sortAsc, setSortAsc] = useState(true);
  const { data, isLoading, isError, refetch, isRefetching } =
    useGetAllRooms(sortAsc);
  const [filteredData, setFilteredData] = useState(data);

  const handleClickSort = function () {
    setSortAsc((s) => !s);
  };

  useEffect(
    function () {
      refetch();
    },
    [sortAsc, refetch]
  );

  if (isRefetching) return <Spinner />;
  if (isLoading) return <Spinner />;
  if (isError) return <Error />;

  return (
    <>
      <SearchBar
        CreateComponent={CreateRoomForm}
        setFilteredData={setFilteredData}
        data={data}
        className="w-[100%]"
      />
      <div className="overflow-x-auto">
        {(data?.length === 0 || filteredData?.length === 0) && (
          <p className="text-red-500 my-4 text-3xl mt-8 text-center self-center">
            No Room Found
          </p>
        )}
        <table className="min-w-full   table-auto">
          <RoomTableHead sortAsc={sortAsc} onClickSort={handleClickSort} />
          <tbody>
            {filteredData
              ? filteredData?.map((room, index) => (
                  <RoomTableRow key={room._id} room={room} index={index} />
                ))
              : data?.map((room, index) => (
                  <RoomTableRow key={room._id} room={room} index={index} />
                ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Rooms;
