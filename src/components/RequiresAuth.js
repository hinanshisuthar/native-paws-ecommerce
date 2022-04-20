import { Navigate, useLocation } from "react-router-dom";

const RequiresAuth = ({ isLoggedIn, children }) => {
  const location = useLocation();

  return isLoggedIn ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export { RequiresAuth };
