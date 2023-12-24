const publicPath = import.meta.env.VITE_REACT_PUBLIC;
function DoctorInfo({ doctor }) {
  return (
    <div className="flex items-center bg-gray-100 p-4 gap-6 rounded-md">
      {/* <img src={doctor.photo} alt={doctor.name} /> */}
      <img
        className="rounded-full w-[30%] md:w-[20%]  lg:w-[10%]"
        src={`${publicPath}/users/${doctor.photo}`}
        alt={doctor.name}
      />
      <div>
        <h2 className="text-3xl capitalize font-semibold text-slate-700">
          {doctor.name}
        </h2>
        <p className="text-slate-500">{doctor.age} Years Old</p>
      </div>
    </div>
  );
}

export default DoctorInfo;
