import StarRating from "../../utils/StarRating";

function DoctorRate({ doctor, toggleReview }) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-5">
        <StarRating size={28} rating={doctor.rating} />
        <p className="text-lg text-gray-800 font-semibold">
          Rating : <span className="text-blue-500">{doctor.rating}</span>
        </p>
      </div>
      <p className="text-lg text-gray-500 font-thin">
        {doctor.ratingQuantity} People Rated This Doctor
      </p>
      <button
        onClick={toggleReview}
        className="bg-gray-100 text-slate-800 outline-none border-slate-600 border-[1px] self-center md:w-[70%] xl:w-[40%] lg:w-[60%] w-[80%] border-opacity-70 rounded-3xl font-semibold hover:bg-gray-700 hover:text-gray-50 duration-300 transition-all py-2">
        Write Review
      </button>
    </div>
  );
}

export default DoctorRate;
