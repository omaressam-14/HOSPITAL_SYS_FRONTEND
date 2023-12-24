import { NavLink } from "react-router-dom";

function LinkHeader({ children, to }) {
  return (
    <NavLink
      className={({ isActive }) =>
        isActive
          ? "text-blue-500 font-bold transition-all duration-300 "
          : "text-slate-600 hover:text-slate-400 transition-all duration-300 "
      }
      to={to}>
      {children}
    </NavLink>
  );
}

export default LinkHeader;
