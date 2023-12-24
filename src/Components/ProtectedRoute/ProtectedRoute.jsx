import { useNavigate } from "react-router-dom";
import Spinner from "../../utils/Spinner";
import useUser from "./useUser";
import { useEffect } from "react";

function ProtectedRoute({ children }) {
  const { user, isLoading } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user && !isLoading) {
      return navigate("/signin");
    }
  }, [user, isLoading, navigate]);

  if (isLoading)
    return (
      <div className="bg-slate-100 flex items-center justify-center">
        <Spinner />
      </div>
    );
  if (user) return children;
}

export default ProtectedRoute;
