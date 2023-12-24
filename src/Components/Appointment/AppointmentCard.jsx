import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import useUser from "../ProtectedRoute/useUser";

const public_path = import.meta.env.VITE_REACT_PUBLIC;

function AppointmentCard({ appointment }) {
  const { user } = useUser();
  const navigate = useNavigate();
  //   console.log(appointment);
  return (
    <div className="flex flex-col gap-6 bg-gray-50 rounded-lg p-8">
      <div className="flex items-center gap-4">
        <img
          className="w-[4rem] rounded-full"
          src={`${public_path}/users/${appointment.doctor.photo}`}
          alt={`${appointment.doctor.name} photo`}
        />
        <h2 className="font-semibold text-xl text-slate-700">
          {appointment.doctor.name}
        </h2>
      </div>
      {/*  */}
      <div className="flex items-center gap-4">
        <img
          className="w-[4rem] rounded-full "
          src={`${public_path}/users/${appointment.patient.photo}`}
          alt={`${appointment.patient.name} photo`}
        />
        <h2 className="font-semibold text-xl text-slate-700">
          {appointment.patient.name}
        </h2>
      </div>
      {/*  */}
      <p className="self-center text-xl font-semibold text-slate-600">
        {appointment.date.split("T")[0]}
      </p>
      {user.role === "doctor" && (
        <Button
          category="create"
          className="w-[100%] sm:w-[70%] lg:w-[40%] self-center"
          onCLick={() =>
            navigate(`/medical-record/create/${appointment.patient._id}`)
          }>
          Create Medical Record
        </Button>
      )}
    </div>
  );
}

export default AppointmentCard;
