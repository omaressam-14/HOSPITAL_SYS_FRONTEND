import RoomInfoLabel from "./RoomInfoLabel";

function RoomInfo({ data }) {
  return (
    <div className="bg-gray-100 rounded-lg flex-col p-4">
      <h1 className="font-bold text-lg text-gray-600 mb-4">INFO</h1>
      <RoomInfoLabel head="Full" body={data?.isFull ? "Yes" : "No"} />
      <RoomInfoLabel head="Number Of Beds" body={data?.numberOfBeds} />
      <RoomInfoLabel head="Type" body={data?.type} />
    </div>
  );
}

export default RoomInfo;
