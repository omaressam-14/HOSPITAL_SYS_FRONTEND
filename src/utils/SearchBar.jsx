import { useEffect, useState } from "react";
import Button from "../Components/Button/Button";
import Backdrop from "./Backdrop";

function SearchBar({
  CreateComponent,
  setFilteredData,
  data,
  className = "",
  showButton = true,
}) {
  const [search, setSearch] = useState("");
  const [isOpenCreate, setIsOpenCreate] = useState(false);

  const toggleOpen = function () {
    setIsOpenCreate((s) => !s);
  };

  useEffect(
    function () {
      const filData = data?.filter((d) =>
        d.name.toLowerCase().includes(search.toLocaleLowerCase())
      );
      setFilteredData(filData);
    },
    [search, data, setFilteredData]
  );
  return (
    <>
      <div
        className={`${
          showButton ? "w-[90%]" : "w-[100%]"
        } gap-4 m-auto justify-between flex items-center   ${className}`}>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search..."
          className={`in ${showButton ? "w-[70%]" : "w-[100%]"} mt-8 p-2`}
        />
        {showButton && (
          <Button
            onCLick={toggleOpen}
            className="py-0 sm:py-[0.5rem] rounded-lg bg-green-500 hover:bg-green-300 duration-300 transition-all">
            Create New
          </Button>
        )}
      </div>
      {/*  */}
      {isOpenCreate && (
        <div>
          <Backdrop onClick={toggleOpen} />
          {CreateComponent && <CreateComponent onClose={toggleOpen} />}
        </div>
      )}
    </>
  );
}

export default SearchBar;
