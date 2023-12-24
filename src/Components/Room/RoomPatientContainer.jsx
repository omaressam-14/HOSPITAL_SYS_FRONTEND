import { useState } from "react";
import Backdrop from "../../utils/Backdrop";
import Button from "../Button/Button";
import RoomPatientCard from "./RoomPatientCard";
import { createPortal } from "react-dom";
import PatientsList from "./PatientsList";

function RoomPatientContainer({ data }) {
  const [showPatientsList, setShowPatientsList] = useState(false);

  const toggglePatientList = function () {
    setShowPatientsList((s) => !s);
  };

  return (
    <>
      <div className="flex flex-col bg-gray-100 rounded-lg relative">
        <h1 className="font-bold text-gray-600 text-xl p-4">PATIENTS</h1>
        <div className="sm:grid md:grid-cols-3 lg:grid-col-4 flex flex-col gap-4  ">
          {data.patients.map((patient) => {
            return <RoomPatientCard key={patient._id} patient={patient} />;
          })}
        </div>
        <Button
          onCLick={toggglePatientList}
          className="self-center my-8 bg-green-500"
          category="create">
          ADD
        </Button>
      </div>

      {showPatientsList && (
        <>
          {createPortal(
            <Backdrop onClick={toggglePatientList} />,
            document.body
          )}
          <PatientsList onClose={toggglePatientList} />
        </>
      )}
    </>
  );
}

export default RoomPatientContainer;
