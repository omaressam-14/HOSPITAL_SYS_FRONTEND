import { useEffect, useState } from "react";
import { useGetAllUserAppointments } from "../Components/Contact/useAppointment";
import useUser from "../Components/ProtectedRoute/useUser";
import Spinner from "../utils/Spinner";
import AppointmentCard from "../Components/Appointment/AppointmentCard";
import { getToday } from "../utils/getTodayFormatted";
import Error from "../utils/Error";

function Appointments() {
  const today = getToday();
  const { user } = useUser();
  const [date, setDate] = useState(today);
  let type = user?.role === "user" ? "patient" : "doctor";

  const changeDateHandler = (e) => {
    setDate(e.target.value + "");
  };

  const { data, isError, isLoading, refetch, isFetching } =
    useGetAllUserAppointments(type, user._id, date);

  useEffect(
    function () {
      refetch();
    },
    [refetch, date]
  );

  if (isLoading) return <Spinner />;
  if (isError) return <Error />;

  const appointments = data.status === "success" ? data.data : [];

  return (
    <div className="w-[80%] m-auto flex flex-col gap-8 mt-8 ">
      <h1 className="text-xl font-bold text-gray-700">Appointments</h1>
      <input
        className="appearance-none bg-white border border-gray-300 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
        type="date"
        value={date}
        onChange={(e) => changeDateHandler(e)}
      />
      {isFetching && <Spinner />}
      {!isFetching && appointments.length === 0 && (
        <h1 className="text-2xl text-center">No Appointments for Today</h1>
      )}
      {!isFetching && appointments.length > 0 && (
        <div className="flex flex-col gap-8">
          {appointments.map((appointment) => (
            <AppointmentCard key={appointment._id} appointment={appointment} />
          ))}
        </div>
      )}
      {date !== "" && (
        <div className="self-center">
          <button
            className="font-semibold text-blue-500"
            onClick={() => setDate("")}>
            See all appointments
          </button>
        </div>
      )}
    </div>
  );
}

export default Appointments;
