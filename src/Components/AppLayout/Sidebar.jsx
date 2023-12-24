import { createPortal } from "react-dom";
import "./Sidebar.css";
import Logo from "../Home/Logo";
import Backdrop from "../../utils/Backdrop";
import { NavLink } from "react-router-dom";
import { IoPersonOutline } from "react-icons/io5";
import { TbReportSearch } from "react-icons/tb";
import { CiCalendarDate } from "react-icons/ci";
import useUser from "../ProtectedRoute/useUser";
import Spinner from "../../utils/Spinner";
import { RiFileHistoryLine } from "react-icons/ri";
import { AiFillMedicineBox } from "react-icons/ai";
import { MdKingBed } from "react-icons/md";
import { FaClipboardUser } from "react-icons/fa6";

function SidebarLinks() {
  const { user, isLoading } = useUser();
  if (isLoading) return <Spinner />;
  return (
    <>
      <NavLink className="navlink" to="my-account">
        <IoPersonOutline />
        Account
      </NavLink>

      {user.role === "admin" && (
        <NavLink className="navlink" to="my-reports">
          <TbReportSearch />
          Reports
        </NavLink>
      )}

      {(user.role === "user" || user.role === "doctor") && (
        <NavLink className="navlink" to="medical-record">
          <RiFileHistoryLine />
          Medical-Records
        </NavLink>
      )}

      {(user.role === "admin" || user.role === "nurse") && (
        <NavLink className="navlink" to="medicines">
          <AiFillMedicineBox />
          Medicines
        </NavLink>
      )}

      {(user.role === "user" || user.role === "doctor") && (
        <NavLink className="navlink" to="appointments">
          <CiCalendarDate />
          My Appointments
        </NavLink>
      )}

      {user.role === "admin" && (
        <NavLink className="navlink" to="room">
          <MdKingBed />
          Rooms
        </NavLink>
      )}
      {user.role === "admin" && (
        <NavLink className="navlink" to="users">
          <FaClipboardUser />
          Users
        </NavLink>
      )}
    </>
  );
}

function Sidebar({ isOpen, closeSidebar }) {
  return (
    <>
      <div
        className={` hidden
      bg-gray-100 py-8 px-6 border-r grid-row-1 grid-row-end lg:flex flex-col gap-8 h-[100%] sidebar `}>
        <SidebarLinks />
      </div>
      {isOpen && (
        <>
          {createPortal(<Backdrop onClick={closeSidebar} />, document.body)}
          <div className="lg:hidden z-[80] items-center fixed top-0 left-0 h-[100%] w-[14rem] bg-gray-100  flex flex-col gap-4 p-5 text-lg transition-all duration-300 ">
            <Logo />
            <SidebarLinks />
          </div>
        </>
      )}
    </>
  );
}

export default Sidebar;
