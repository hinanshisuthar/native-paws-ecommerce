import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth-context";

export const UserDetails = () => {
  const { user, setToken, setUser } = useAuth();
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem("login");
    localStorage.removeItem("user");
    localStorage.removeItem("signup");

    setUser(null);
    setToken("");
    setTimeout(() => {
      navigate("/");
    }, 500);
  };

  return (
    <div>
      <p className="title">User Details</p>
      <div className="flex-row-center profile-details">
        <div className="flex-column profile-column">
          <p>Name</p>
          <p>Email</p>
        </div>
        <div className="flex-column  profile-column">
          <p>{` ${user?.firstName} ${user?.lastName}`}</p>
          <p>{` ${user?.email}`}</p>
        </div>
      </div>
      <div>
        <p className="title">Settings</p>
        <button
          className="btn btn-primary logout"
          onClick={() => logoutHandler()}
        >
          Log Out
        </button>
      </div>
    </div>
  );
};
