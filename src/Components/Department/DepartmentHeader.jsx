// import { NavLink } from "react-router-dom";
const linkStyle = `text-lg font-semibold`;

function DepartmentHeader({
  departments,
  setActiveDepartment,
  activeDepartment,
}) {
  return (
    <ul className="md:flex md:justify-around md:p-4 bg-slate-600 text-white md:text-[1rem] md:items-center w-[100%] grid grid-cols-2 items-center justify-center gap-4  ">
      {departments.data.map((dep) => {
        return (
          <button
            onClick={() => setActiveDepartment(dep.id)}
            to={dep.slug.toLowerCase()}
            key={dep.id}
            className={
              dep.id === activeDepartment
                ? `text-blue-300 ${linkStyle} `
                : `text-slate-200 ${linkStyle}`
            }>
            {dep.name}
          </button>
        );
      })}
    </ul>
  );
}

export default DepartmentHeader;
