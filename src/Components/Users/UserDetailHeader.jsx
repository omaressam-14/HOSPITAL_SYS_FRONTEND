import StarRating from "../../utils/StarRating";

const public_path = import.meta.env.VITE_REACT_PUBLIC;

function UserDetailHeader({ user }) {
  return (
    <div className="mb-4 bg-gray-50 flex flex-col sm:grid sm:grid-cols-[1fr,3fr] gap-4 p-4">
      <img
        src={`${public_path}/users/${user.photo}`}
        className="w-[10rem] rounded-lg self-center"
      />
      <div className="">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col ">
            <h1 className="text-3xl font-semibold text-gray-600">
              {user.name}
            </h1>
            <p className="uppercase text-blue-500 tracking-wider">
              {user.role}
            </p>
          </div>

          {(user.rating || user.salary) && (
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <p className="text-lg font-thin text-blue-500">{user.rating}</p>
                <StarRating rating={user.rating} color="#067ee1" />
              </div>
              <p className="font-thin text-gray-500">{user.salary} $</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default UserDetailHeader;
