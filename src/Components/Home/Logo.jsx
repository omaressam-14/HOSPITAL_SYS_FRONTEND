import { useNavigate } from "react-router-dom";

function Logo() {
  const navigate = useNavigate();
  return (
    <div className="cursor-pointer" onClick={() => navigate("/")}>
      <img className="w-[5rem]" src="/logo.png" alt="logo" />
    </div>
  );
}

export default Logo;
