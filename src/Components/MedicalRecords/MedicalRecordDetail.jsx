import Button from "../Button/Button";
import {
  useDeleteMedicalRecord,
  useMarkMedicalAsFinished,
} from "./useMedicalRecords";
const public_path = import.meta.env.VITE_REACT_PUBLIC;

function MedicalRecordDetail({ medicalRec, role }) {
  const { mutate: deleteMed, isLoading: isDeleting } = useDeleteMedicalRecord();
  const { mutate: setFinished, isLoading } = useMarkMedicalAsFinished();
  return (
    <div className=" p-4 w-[100%] bg-white h-auto rounded-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
      <div className="md:grid md:grid-cols-[2fr,1fr] flex flex-col gap-4">
        {/*  */}
        <div>
          <div className="flex gap-4 items-center mb-4">
            <p className=" text-gray-500">Patient Name :</p>
            <p className="font-semibold capitalize text-gray-700">
              {medicalRec.patient.name}
            </p>
          </div>
          <div className="flex gap-4 items-center ">
            <p className=" text-gray-500">Doctor Name :</p>
            <p className="font-semibold capitalize text-gray-700">
              {medicalRec.doctor.name}
            </p>
          </div>
          <div className="w-[100%] bg-gray-50 rounded-lg mt-4 p-2">
            <p className=" text-gray-500">Diagnose:</p>
            <p className="mt-2 font-semibold text-lg text-gray-700">
              {medicalRec.diagnose}
            </p>
          </div>
          <div className="flex items-center gap-2 mt-4">
            <p className="text-gray-500">Created At:</p>
            <p className="text-gray-700 font-semibold">
              {medicalRec.createdAt.split("T")[0]}
            </p>
          </div>
          <p className={`mt-4 text-gray-500`}>
            Status :{" "}
            <span
              className={` ${
                medicalRec.isFinished ? `text-green-500` : `text-red-600`
              } font-semibold`}>
              {medicalRec.isFinished ? "Finished" : "Not Finished"}
            </span>
          </p>
        </div>
        {/*  */}
        <div className="flex flex-col gap-4">
          <p className="font-semibold text-gray-500">Medicines:</p>
          {medicalRec.medicines.length === 0 && (
            <p className="text-red-500">NONE</p>
          )}
          {medicalRec.medicines.map((medicine) => {
            return (
              <div
                key={medicine._id}
                className="flex p-2  items-center  bg-gray-100 rounded-xl gap-2">
                <img
                  src={`${public_path}/medicines/${medicine.photo}`}
                  className="w-[4rem] rounded-full"
                />
                <p className="font-semibold text-gray-700">{medicine.name}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        {role === "doctor" && (
          <div className="my-8 gap-4 flex justify-center items-center">
            {!medicalRec.isFinished && (
              <Button
                disabled={isDeleting || isLoading}
                category="create"
                onCLick={() => setFinished(medicalRec._id)}
                className="bg-green-500 hover:bg-green-300">
                {isDeleting || isLoading ? "...loading" : `Mark as Finished`}
              </Button>
            )}
            <Button
              onCLick={() => deleteMed(medicalRec._id)}
              category="create"
              className="bg-red-500 hover:bg-red-300">
              {isDeleting || isLoading ? "...loading" : `Delete`}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default MedicalRecordDetail;
