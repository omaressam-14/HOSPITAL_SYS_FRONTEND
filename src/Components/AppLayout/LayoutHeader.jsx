import { useState } from "react";
import Logo from "../Home/Logo";
import useUser from "../ProtectedRoute/useUser";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { RxHamburgerMenu } from "react-icons/rx";

function LayoutHeader({ openSidebar }) {
  const { user, isLoading: userLoading } = useUser();
  const [showDrop, setShowDrop] = useState(false);
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  function handleLogout() {
    Cookies.remove("token");
    Cookies.remove("userid");
    queryClient.invalidateQueries();
    queryClient.clear();
    navigate("/");
  }

  return (
    //   <div className="flex  fixed w-[100%] z-[-100] top-0 justify-between items-center bg-slate-900 text-slate-200 col-span-5 p-4">
    <div className="flex justify-between items-center bg-slate-900 text-slate-200 col-span-5 p-4">
      <button className="sm:block lg:hidden" onClick={openSidebar}>
        <RxHamburgerMenu size={24} />
      </button>
      <div className="hidden lg:block">
        <Logo />
      </div>
      <div className="flex items-center gap-2">
        {userLoading ? (
          <p>Welcome </p>
        ) : (
          <p className="capitalize">Welcome {user.name.split(" ")[0]}</p>
        )}
        <div className="relative">
          <span
            onClick={() => setShowDrop((s) => !s)}
            className="cursor-pointer">
            ▼
          </span>
          {showDrop && (
            <div
              id="dropdown-div"
              className="py-1 px-4 absolute top-[2rem] left-[-4rem] bg-red-600 text-lg hover:bg-red-400 transition-all duration-300 text-white rounded-md shadow-lg">
              <button onClick={handleLogout}>Logout</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default LayoutHeader;
