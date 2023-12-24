import Button from "../Button/Button";

const public_path = import.meta.env.VITE_REACT_PUBLIC;

function UserCard({ user }) {
  return (
    <div className=" flex items-center sm:justify-between sm:flex-row flex-col gap-4 bg-white  p-4 rounded-lg">
      <div className="flex justify-center items-center gap-4">
        <img
          src={`${public_path}/users/${user.photo}`}
          className="w-[4rem] rounded-full"
        />
        <div className="flex flex-col ">
          <p className="font-semibold text-gray-600 text-lg">{user.name}</p>
          <p className=" text-gray-400 ">{user.age}</p>
          <p className=" text-gray-400 ">{user.email}</p>
        </div>
      </div>

      <div className="flex items-center gap-4 ">
        <Button category="create">View</Button>
        <Button category="cancel">Delete</Button>
      </div>
    </div>
  );
}

export default UserCard;
