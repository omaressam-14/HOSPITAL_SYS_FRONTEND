import { useForm } from "react-hook-form";
import Button from "../Button/Button";
import { useAppointment } from "./useAppointment";
import Cookies from "js-cookie";
import { useParams } from "react-router-dom";

function AppointmentForm() {
  const { mutate, isCreating } = useAppointment();
  const userid = Cookies.get("userid");
  const { id: doctorid } = useParams();
  const { register, handleSubmit, watch } = useForm();
  const wdate = watch("date");

  const onSubmit = (data) => {
    data.patient = userid;
    data.doctor = doctorid;
    mutate(data);
  };

  return (
    <div className="bg-gray-100 rounded-md p-4 ">
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <h4 className="text-center text-xl font-semibold text-slate-700  ">
          Get Appointment
        </h4>
        <input
          type="date"
          className="appearance-none bg-white border border-gray-300 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
          {...register("date")}
        />
        <Button
          disabled={!wdate || isCreating || new Date() > new Date(wdate)}
          type="submit"
          clasName="rounded-lg duration-300 transition-all hover:bg-blue-700">
          {isCreating ? "... Loading" : "Book now"}
        </Button>
      </form>
    </div>
  );
}

export default AppointmentForm;
