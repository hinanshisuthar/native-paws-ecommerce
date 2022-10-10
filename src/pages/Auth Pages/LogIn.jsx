import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./AuthPagesCss.css";
import { loginHandler } from "../../backend/controllers/AuthController";
import { useAuth } from "../../context/auth-context";

const LogIn = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const { token, loginUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      loginUser(credentials.email, credentials.password);
    })();
  }, [credentials.email, credentials.password]);

  if (token) {
    setTimeout(() => {
      navigate(location?.state?.from || "/products", { replace: true });
    }, 500);
  }

  const inputChangeHandler = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const guestLoginHandler = () => {
    setCredentials({
      email: "testuser@gmail.com",
      password: "testuser*123",
    });
  };

  return (
    <>
      <div className="wrapper-auth center li mt-2">
        <div className="signup-con flex-col-sb p-0 pb-sm">
          <div className="top flex-col-sb">
            <h4>Hi-Ya Pet Parents!</h4>
            <p className="text-sm">
              Let’s raise healthy and happy furs together.
            </p>
            <div className="doodle">
              <img
                src="https://res.cloudinary.com/do5ez3xws/image/upload/v1648207170/auth-doodle_grjw42.svg"
                alt="dog-doodle"
                className="img-responsive"
              />
            </div>
          </div>
          <div className="bottom flex-col-sb">
            <div action="#" className="flex-row-sb" id="select-form">
              <Link to="/signup" className="mx-md">
                <button type="submit" className="log-in-btn btn">
                  sign up
                </button>
              </Link>
              <Link to="/login" className="mx-md">
                <button type="submit" className="sign-up-btn btn btn-primary">
                  log in
                </button>
              </Link>
            </div>
            <div className="flex-row-sb">
              <h4 className="mr-sm">Continue with </h4>
              <div className="size-options m-0">
                <button>
                  <i className="fa fa-google"></i>
                </button>
              </div>
            </div>
            <p>Or you can manually log-in too</p>
            <form onSubmit={loginHandler} className="sign-up-form px-1">
              <input
                type="email"
                placeholder="Email*"
                name="email"
                value={credentials.email}
                onChange={inputChangeHandler}
              />
              <input
                type="password"
                placeholder="Password*"
                name="password"
                value={credentials.password}
                onChange={inputChangeHandler}
              />
            </form>
            <button
              className="sign-up-btn btn btn-secondary"
              onClick={() => guestLoginHandler()}
            >
              Guest Login
            </button>
          </div>
        </div>
      </div>
      {/* {showOfferTag === "flex" ? <PlaceLogin /> : showOfferTag === "none"} */}
    </>
  );
};

export { LogIn };
