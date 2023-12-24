import { useState } from "react";
import SearchBar from "../../utils/SearchBar";
import { useGetAllPatients } from "../Admin/useUsers";
import Spinner from "../../utils/Spinner";
import PatientCard from "./PatientCard";

function PatientsList({ onClose }) {
  const { data, isLoading } = useGetAllPatients();
  const [filteredData, setFilteredData] = useState([]);

  if (isLoading) return <Spinner />;

  return (
    <div className=" pb-12 rounded-lg sm:py-8 sm:px-12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white z-50 w-[95%] px-2 sm:w-[85%]">
      <SearchBar
        data={data}
        setFilteredData={setFilteredData}
        showButton={false}
        className="block  p-2"
      />
      {(data?.length === 0 || filteredData?.length === 0) && (
        <p className="text-center text-xl">No Patient Found</p>
      )}
      {filteredData
        ? filteredData?.map((patient) => {
            return (
              <PatientCard
                key={patient._id}
                patient={patient}
                onClose={onClose}
              />
            );
          })
        : data?.map((patient) => {
            return (
              <PatientCard
                key={patient._id}
                patient={patient}
                onClose={onClose}
              />
            );
          })}
    </div>
  );
}

export default PatientsList;
