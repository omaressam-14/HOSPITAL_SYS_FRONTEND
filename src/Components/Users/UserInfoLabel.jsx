function UserInfoLabel({ head, body }) {
  return (
    <div className="flex items-center gap-2 text-[1.1rem]">
      <p className="text-gray-600 font-thin capitalize">{head} :</p>
      <p className="text-gray-700 font-semibold">{body}</p>
    </div>
  );
}

export default UserInfoLabel;
