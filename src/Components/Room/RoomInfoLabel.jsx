function RoomInfoLabel({ head, body }) {
  return (
    <div className="flex gap-2  text-lg mb-4">
      <p className="text-gray-400 capitalize">{head} :</p>
      <p className="text-gray-700 font-semibold capitalize">{body}</p>
    </div>
  );
}

export default RoomInfoLabel;
