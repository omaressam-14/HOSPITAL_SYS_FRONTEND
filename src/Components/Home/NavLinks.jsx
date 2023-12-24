import { useState } from "react";
import StyledNavLink from "./StyledNavLink";
import { RxHamburgerMenu } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

function NavLinks() {
  const token = Cookies.get("token");
  const navigate = useNavigate();
  return (
    <>
      <>
        <StyledNavLink to="/home">Home</StyledNavLink>
        {token && <StyledNavLink to="/my-account">My Account</StyledNavLink>}
        <StyledNavLink to="/departments">Departments</StyledNavLink>
        <StyledNavLink to="/about-us">About Us</StyledNavLink>
      </>
      <button
        className="transition-all duration-300 bg-blue-500 hover:bg-blue-400 text-slate-100 rounded-xl py-1 px-2 "
        onClick={() => navigate("/contact-us")}>
        Contact Us
      </button>
    </>
  );
}

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav>
      <div className="z-20 justify-between items-center gap-3 md:gap-8 hidden sm:flex text-sm md:text-base">
        <NavLinks />
      </div>
      <div>
        <button className="md:hidden" onClick={() => setIsOpen((s) => !s)}>
          {<RxHamburgerMenu size={30} />}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden z-20 items-center fixed top-0 left-0 h-[100vh] w-[50%] bg-gray-100  flex flex-col gap-4 p-5 text-sm">
          <NavLinks />
        </div>
      )}
    </nav>
  );
}

export default Nav;
