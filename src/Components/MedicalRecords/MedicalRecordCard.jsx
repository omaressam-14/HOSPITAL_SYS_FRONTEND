import Button from "../Button/Button";

const public_path = import.meta.env.VITE_REACT_PUBLIC;

function MedicalRecordCard({ medicalRecord, onClick, setRecord }) {
  const handleClick = function () {
    onClick();
    setRecord(medicalRecord);
  };
  return (
    <div className="flex flex-col gap-6 bg-gray-50 rounded-lg p-8">
      <div className="flex items-center gap-4">
        <img
          className="w-[4rem] rounded-full"
          src={`${public_path}/users/${medicalRecord.doctor.photo}`}
          alt={`${medicalRecord.doctor.name} photo`}
        />
        <h2 className="font-semibold text-xl text-slate-700">
          {medicalRecord.doctor.name}
        </h2>
      </div>
      {/*  */}
      <div className="flex items-center gap-4">
        <img
          className="w-[4rem] rounded-full "
          src={`${public_path}/users/${medicalRecord.patient.photo}`}
          alt={`${medicalRecord.patient.name} photo`}
        />
        <h2 className="font-semibold text-xl text-slate-700">
          {medicalRecord.patient.name}
        </h2>
      </div>
      {/*  */}
      <p className="self-center text-xl font-semibold text-slate-600">
        {medicalRecord.createdAt.split("T")[0]}
      </p>
      <Button
        category="create"
        onCLick={handleClick}
        className="w-[100%] sm:w-[70%] lg:w-[40%] self-center bg-green-500 hover:bg-green-300">
        See Details
      </Button>
    </div>
  );
}

export default MedicalRecordCard;
