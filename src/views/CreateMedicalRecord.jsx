import { useState } from "react";
import Button from "../Components/Button/Button";
import { createPortal } from "react-dom";
import Backdrop from "../utils/Backdrop";
import MedicalRecordCreateForm from "../Components/MedicalRecords/MedicalRecordCreateForm";
import MedicineItem from "../Components/MedicalRecords/MedicineItem";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import Cookies from "js-cookie";
import { useCreateMedicalRecord } from "../Components/MedicalRecords/useMedicalRecords";

function MedicalRecord() {
  const [medicines, setMedicines] = useState([]);
  const [isMedicinesOpen, setIsMedicinesOpen] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { id: patientId } = useParams();
  const { mutate, isLoading: isCreating } = useCreateMedicalRecord();
  const medicinesId = [];

  const handleToggleMedicines = function () {
    setIsMedicinesOpen((s) => !s);
  };

  const handleDeleteMedicine = function (id) {
    setMedicines((s) => s.filter((m) => m._id !== id));
  };

  medicines.forEach((m) => medicinesId.push(m._id));

  const onSubmit = function (d) {
    const doctorId = Cookies.get("userid");
    d.patient = patientId;
    d.doctor = doctorId;
    d.medicines = medicinesId;

    mutate(JSON.stringify(d));
  };

  return (
    <div className="w-[80%] m-auto relative">
      <h1 className="my-8 text-2xl font-semibold">Medical Record</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
        <div className="flex gap-8 items-center">
          <label className="label">Medicines</label>
          <button
            type="button"
            onClick={handleToggleMedicines}
            className="transition-all duration-300 text-lg rounded-full w-[2rem] h-[2rem] flex items-center justify-center bg-green-500 hover:bg-green-300 text-white font-bold">
            +
          </button>
        </div>
        <div className="flex gap-2">
          {/* medicines */}
          {medicines.map((medicine) => {
            return (
              <MedicineItem
                key={medicine._id}
                medicine={medicine}
                handleDelete={handleDeleteMedicine}
              />
            );
          })}
          {/*  */}
        </div>
        <label className="label">Diagnose:</label>

        {errors.diagnose && (
          <p className="text-center text-red-500">{errors.diagnose.message}</p>
        )}
        <textarea
          {...register("diagnose", { required: "please enter diagnose" })}
          className="resize-none w-[100%] h-32 bg-gray-100 border border-gray-300 rounded-md p-2 text-gray-800"
        />
        <Button
          disabled={isCreating}
          className="w-[30%] lg:w-[15%] self-end mt-4"
          category="create"
          type="submit">
          {isCreating ? "...Loading" : "Create"}
        </Button>
      </form>

      {isMedicinesOpen && (
        <>
          {createPortal(
            <Backdrop onClick={handleToggleMedicines} />,
            document.body
          )}
          <MedicalRecordCreateForm
            setMedicines={setMedicines}
            onClose={setIsMedicinesOpen}
          />
        </>
      )}
    </div>
  );
}

export default MedicalRecord;
