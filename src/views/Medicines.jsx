import { useState } from "react";
import MedicineCard from "../Components/Medicines/MedicineCard";
import { useGetAllMedicines } from "../Components/Medicines/useMedicine";
import Error from "../utils/Error";
import Spinner from "../utils/Spinner";
import SearchBar from "../utils/SearchBar";
import CreaetMedicine from "./CreaetMedicine";

function Medicines() {
  const { data, isLoading, isError } = useGetAllMedicines();
  const [filteredData, setFilteredData] = useState(data);

  if (isLoading) return <Spinner />;
  if (isError) return <Error />;

  return (
    <div className="p-12">
      <SearchBar
        CreateComponent={CreaetMedicine}
        data={data}
        setFilteredData={setFilteredData}
      />
      <div className="w-[100%]  justify-between flex flex-col md:grid grid-cols-2 xl:grid-cols-3 gap-24 ">
        {data?.length === 0 && (
          <p className="mt-8 text-center">No Medicine Found</p>
        )}
        {filteredData
          ? filteredData.map((medicine) => {
              return <MedicineCard key={medicine._id} medicine={medicine} />;
            })
          : data.map((medicine) => {
              return <MedicineCard key={medicine._id} medicine={medicine} />;
            })}
      </div>
    </div>
  );
}

export default Medicines;
