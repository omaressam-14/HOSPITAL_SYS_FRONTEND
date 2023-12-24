import Header from "../Home/Header";

function RegisterContainer({ children }) {
  return (
    <>
      <Header className="bg-slate-100" />

      <div className="flex items-center justify-center md:items-stretch  lg:grid-cols-2 md:grid-cols-[2fr,1fr] h-screen sm:grid">
        <div className="flex items-center justify-center w-[100%] py-4 px-2 ">
          {children}
        </div>
        <div className="hidden sm:block ">
          <img
            className=" h-[100%] object-cover"
            src="/side.png"
            alt="side image"
          />
        </div>
      </div>
    </>
  );
}

export default RegisterContainer;
