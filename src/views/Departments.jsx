import { useDepartments } from "../Components/Department/useDepartments";
import { useDepartment } from "../Components/Department/useDepartment";
import Spinner from "../utils/Spinner";
import { useState } from "react";
import DoctorCard from "../Components/Department/DoctorCard";
import DepartmentHeader from "../Components/Department/DepartmentHeader";
import Error from "../utils/Error";

function Departments() {
  const [activeDepartment, setActiveDepartment] = useState(
    "65673f5c306818a531715686"
  );
  const { isLoading, departments, isError } = useDepartments();
  const { isLoading: departLoading, data: selectedDepartment } =
    useDepartment(activeDepartment);

  if (isLoading) return <Spinner />;
  if (isError) return <Error />;

  return (
    <>
      {/* Header to Select the Department */}
      <DepartmentHeader
        departments={departments}
        setActiveDepartment={setActiveDepartment}
        activeDepartment={activeDepartment}
      />
      {/* show the doctors */}
      {!departLoading && (
        <div className="md:grid md:grid-cols-2 xl:grid-cols-3 xl:gap-8 lg:p-6 flex flex-col items-center ">
          {selectedDepartment.data.doctors.map((doctor) => {
            return <DoctorCard doctor={doctor} key={doctor.id} />;
          })}
        </div>
      )}
    </>
  );
}

export default Departments;
