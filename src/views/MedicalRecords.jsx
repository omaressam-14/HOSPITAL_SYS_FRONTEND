import { useEffect, useState } from "react";
import MedicalRecordCard from "../Components/MedicalRecords/MedicalRecordCard";
import { useGetMedicalRecordsPerson } from "../Components/MedicalRecords/useMedicalRecords";
import useUser from "../Components/ProtectedRoute/useUser";
import Spinner from "../utils/Spinner";
import Backdrop from "../utils/Backdrop";
import MedicalRecordDetail from "../Components/MedicalRecords/MedicalRecordDetail";

function MedicalRecords() {
  const { user, isLoading } = useUser();
  const type = user?.role === "user" ? "patient" : "doctor";
  const [isOpenDetails, setIsOpenDetails] = useState(false);
  const [activeMedicalRec, setActiveMedicalRec] = useState({});
  const [isFinished, setIsFinished] = useState("");
  const {
    data,
    isLoading: isGetting,
    refetch,
    isFetching,
  } = useGetMedicalRecordsPerson(type, user._id, isFinished);
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const handleOpenDetails = () => {
    setIsOpenDetails((s) => !s);
  };

  useEffect(
    function () {
      const filData = data?.data?.filter((d) =>
        d.patient.name.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredData(filData);
    },
    [search, data]
  );

  useEffect(
    function () {
      refetch();
    },
    [isFinished, refetch]
  );

  if (isFetching) return <Spinner />;
  if (isLoading) return <Spinner />;
  if (isGetting) return <Spinner />;

  return (
    <div className="w-[80%] m-auto flex flex-col gap-8 mt-8 relative">
      {/* search bar */}
      {user.role === "doctor" && (
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="py-2 px-4 border-2 border-gray-100 rounded-full"
          placeholder="search for patient"
        />
      )}
      {/*  */}
      <div className="rounded-full flex gap-4 items-center self-center border border-gray-300 px-2 py-1">
        <button
          onClick={() => setIsFinished((s) => (s === true ? "" : true))}
          className={`text-gray-500 pr-4 border-r-2 ${
            isFinished === true ? "text-green-500" : ""
          }`}>
          Finished
        </button>
        <button
          onClick={() => setIsFinished((s) => (s === false ? "" : false))}
          className={`text-gray-500 ${
            isFinished === false ? "text-red-500" : ""
          }`}>
          Not Finished
        </button>
      </div>
      {/*  */}
      {data.results === 0 && (
        <h1 className="text-gray-500 text-xl font-bold text-center mt-8">
          No Medical Record Found
        </h1>
      )}
      {/*  */}
      <div className="flex flex-col gap-8">
        {filteredData?.map((medicalRecord) => {
          return (
            <MedicalRecordCard
              setRecord={setActiveMedicalRec}
              key={medicalRecord._id}
              onClick={handleOpenDetails}
              medicalRecord={medicalRecord}
            />
          );
        })}
      </div>
      {/*  */}
      {isOpenDetails && (
        <>
          <Backdrop onClick={handleOpenDetails} />
          <MedicalRecordDetail role={user.role} medicalRec={activeMedicalRec} />
        </>
      )}
    </div>
  );
}

export default MedicalRecords;
