import { Link } from "react-router-dom";
import { Navbar } from '../../components/Navbar';
import "./AuthPagesCss.css";

const LogIn = () => {
  return (
    <>
      <Navbar />
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
              <input type="email" placeholder="Email*" />
              <input type="password" placeholder="Password*" />
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
            <button className="sign-up-btn btn btn-primary">log in</button>
          </div>
        </div>
      </div>
    </>
  );
};

export { LogIn };
