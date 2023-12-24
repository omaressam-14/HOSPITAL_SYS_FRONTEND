function UserRoleMenu({ setActive, activeRole }) {
  function handleClick(e) {
    setActive((s) => (s === e.target.value ? "" : e.target.value));
  }

  return (
    <div className="flex self-center justify-center ">
      <div className="text-gray-400 py-2 px-4 flex gap-4 rounded-full my-4 border-2 border-gray-400">
        <button
          onClick={handleClick}
          value="user"
          className={`${activeRole === "user" ? "text-gray-700" : ""}`}>
          users
        </button>
        <button
          onClick={handleClick}
          value="doctor"
          className={`${activeRole === "doctor" ? "text-gray-700" : ""}`}>
          doctors
        </button>
        <button
          onClick={handleClick}
          value="nurse"
          className={`${activeRole === "nurse" ? "text-gray-700" : ""}`}>
          nurses
        </button>
      </div>
    </div>
  );
}

export default UserRoleMenu;
