import EditButton from "./EditButton";

const publicSrc = import.meta.env.VITE_REACT_PUBLIC;

function ImageInformation({ user }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <img
          className="rounded-full w-[5rem]"
          src={`${publicSrc}/users/${user.photo}`}
        />
        <p className="capitalize text-lg font-semibold">{user.name}</p>
      </div>
      <EditButton />
    </div>
  );
}

export default ImageInformation;
