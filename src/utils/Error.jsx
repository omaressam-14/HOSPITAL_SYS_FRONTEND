function Error() {
  return (
    <div className="flex flex-col items-center justify-center mt-[20%]">
      <div className="font-bold text-2xl rounded-full w-12 h-12 text-white bg-gray-400 flex justify-center items-center">
        !
      </div>
      <p className="text-xl text-gray-800 font-semibold">
        Something Went Wrong
      </p>
    </div>
  );
}

export default Error;
