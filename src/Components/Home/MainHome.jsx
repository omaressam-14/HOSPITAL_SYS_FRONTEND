import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import Cookies from "js-cookie";

function MainHome({ children }) {
  const userid = Cookies.get("userid");
  const navigate = useNavigate();
  return (
    <>
      <main className=" relative lg:grid lg:grid-cols-2 mt-[rem] lg:mt-[3rem] gap-0 flex flex-col grow">
        <div className="flex flex-col items-start mt-[10%] lg:mt-[15%] gap-4 sm:gap-8">
          <h1 className="capitalize text-[2rem] md:text-[3.5rem] xl:text-[5rem] font-bold text-slate-700">
            Your Health Is Our priority
          </h1>
          <p className="capitalize text-slate-400 text-sm  sm:text-[1.5rem] ">
            Check your health continously to make your life smoother
          </p>
          {!userid && (
            <div className=" flex gap-4">
              <Button onCLick={() => navigate("/signup")} category="create">
                Sign Up
              </Button>
              <Button
                onCLick={() => navigate("/signin")}
                category="create"
                className="bg-transparent border-2 border-gray-100 hover:text-black hover:bg-gray-200  ">
                Sign In
              </Button>
            </div>
          )}
        </div>
        <div className="relative">
          <img
            className=" lg:max-w-[95%] block sm:top-[-2rem] sm:right-[-2rem]"
            src="./stuff.webp"
          />
        </div>
      </main>
      <div className="w-100 mt-2">{children}</div>
    </>
  );
}

export default MainHome;
