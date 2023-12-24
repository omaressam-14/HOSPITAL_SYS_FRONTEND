import { useEffect, useState } from "react";
import { useGetAllMedicines } from "../Medicines/useMedicine";
import Spinner from "../../utils/Spinner";
import MedicineSearchItem from "./MedicineSearchItem";

function MedicalRecordCreateForm({ setMedicines, onClose }) {
  const [search, setSearch] = useState("");
  const { isLoading, data, isError } = useGetAllMedicines();
  const [filteredData, setFilteredData] = useState(data?.data);

  const onChangeHandler = function (e) {
    setSearch(e.target.value);
  };

  useEffect(
    function () {
      let filteredItems = data?.data?.filter((d) =>
        d.name.toLowerCase().includes(search.toLocaleLowerCase())
      );
      setFilteredData(filteredItems);
    },
    [search, setFilteredData, data]
  );

  if (isLoading) return <Spinner />;

  return (
    <div className="rounded-md p-8 absolute h-auto w-[100%]   top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  bg-white  z-50 flex flex-col gap-8">
      <input
        value={search}
        type="text"
        className="w-[100%] border border-gray-300 rounded-full p-2 "
        placeholder="Search Your Medicine..."
        onChange={onChangeHandler}
      />
      <div className="">
        {isLoading && <Spinner />}
        {isError && <p className="text-center">Something Went Wrong</p>}
      </div>
      <div>
        {filteredData?.length === 0 && (
          <p className="text-center text-red-500">
            Sorry The Medicine You Search Is Not Found
          </p>
        )}
        {filteredData?.map((medicine) => {
          return (
            <MedicineSearchItem
              setMedicines={setMedicines}
              onClose={onClose}
              medicine={medicine}
              key={medicine._id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default MedicalRecordCreateForm;
