import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { PlaceLogin } from "../Cart Page/PlaceOrder";
import "./AuthPagesCss.css";
import { useAuth } from "../../utilities/context/auth-context";
import { loginHandler } from "../../backend/controllers/AuthController";

const LogIn = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showOfferTag, setShowOfferTag] = useState("none");

  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const inputChangeHandler = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const loginHandler = () => {
    if (
      credentials.email === "nativepaws@gmail.com" &&
      credentials.password === "nativepaws"
    ) {
      setShowOfferTag("flex");

      setTimeout(() => {
        setIsLoggedIn((isLoggedIn) => !isLoggedIn);
        navigate(location?.state?.from?.pathname, { replace: true });
      }, 2000);
    } else {
      navigate("/");
    }
  };

  const testLoginHandler = () => {
    setCredentials({
      email: "testuser123@gmail.com",
      password: "testuser123",
    });
    setShowOfferTag("flex");

    setTimeout(() => {
      setIsLoggedIn((isLoggedIn) => !isLoggedIn);
      navigate(location?.state?.from?.pathname, { replace: true });
    }, 2000);
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
              <Link to="/sign-up" className="mx-md">
                <button type="submit" className="log-in-btn btn">
                  sign up
                </button>
              </Link>
              <Link to="/log-in" className="mx-md">
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
            <form action="#" className="sign-up-form px-1">
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
            <form action="#" className="forgot-pass-form flex-row-sb px-1">
              <div className="flex-row-sb">
                <input type="checkbox" name="tnc" id="tnc" />
                <label htmlFor="tnc">
                  <small>Remember Me</small>
                </label>
              </div>
              <a className="link" href="#">
                <h6 className="text-capitalize text-center">
                  Forgot Password?
                </h6>
              </a>
            </form>
            <button
              className="sign-up-btn btn btn-primary"
              onClick={loginHandler}>
              log in
            </button>
            <button
              className="sign-up-btn btn btn-secondary"
              onClick={testLoginHandler}>
              Test Login
            </button>
          </div>
        </div>
      </div>
      {showOfferTag === "flex" ? <PlaceLogin /> : showOfferTag === "none"}
    </>
  );
};

export { LogIn };
