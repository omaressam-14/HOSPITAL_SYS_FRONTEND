import { Link } from "react-router-dom";
import StarRating from "../../utils/StarRating";
const publicPath = import.meta.env.VITE_REACT_PUBLIC;

function DoctorCard({ doctor }) {
  return (
    <div
      key={doctor.id}
      className="flex flex-col gap-2 items-center rounded-lg bg-slate-50 w-[60%] p-8 place-self-center mb-4">
      <img
        className="w-40 rounded-full"
        src={`${publicPath}/users/${doctor.photo}`}
        alt=""
      />
      <h3 className="text-xl font-bold text-slate-700 capitalize">
        {doctor.name}
      </h3>
      <div className="flex items-center gap-1">
        <StarRating rating={doctor.rating} />
        <span className="text-[1rem] text-blue-400">
          {doctor.ratingQuantity}
        </span>
      </div>
      <Link
        className="bg-blue-500 text-lg text-slate-50 py-2 px-6 rounded-md hover:bg-blue-300 hover:scale-105 transition-all duration-300"
        to={`/contact/${doctor.id}`}>
        Contact
      </Link>
    </div>
  );
}

export default DoctorCard;
