import { Link } from "react-router-dom";
import "./AuthPagesCss.css";
import {Navbar} from '../../components/Navbar';

const SignUp = () => {
  return (
    <>
      <div className="wrapper-auth center mt-1">
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
            <div className="select-form flex-row-sb">
              <Link to="/sign-up" className="mx-sm">
                <button type="submit" className="sign-up-btn btn btn-primary">
                  sign up
                </button>
              </Link>
              <Link to="/log-in" className="mx-sm">
                <button type="submit" className="log-in-btn btn">
                  log in
                </button>
              </Link>
            </div>
            <div className="flex-row-sb">
              <h4 className="mr-sm">Continue with</h4>
              <div className="size-options m-0">
                <button>
                  <i className="fa fa-google"></i>
                </button>
              </div>
            </div>
            <p>Or you can manually sign-up too</p>
            <form action="#" className="sign-up-form px-1">
              <input type="text" placeholder="First Name*" />
              <input type="text" placeholder="Last Name*" />
              <input type="email" placeholder="Email*" />
              <div className="flex-row-sb pass-div">
                <input
                  type="password"
                  placeholder="Password*"
                  className="pass-field"
                />
                <i className="fa fa-eye-slash" aria-hidden="true"></i>
              </div>
              <div className="flex-row-sb pass-div">
                <input
                  type="password"
                  placeholder="Confirm Password*"
                  className="pass-field"
                />
                <i className="fa fa-eye-slash" aria-hidden="true"></i>
              </div>
              <div className="tnc grid grid-20-80">
                <input type="checkbox" name="tnc" id="tnc" />
                <label htmlFor="tnc">
                  <small>
                    By continuing, I agree to the Terms of Use and Privacy
                    Cookie Policy
                  </small>
                </label>
              </div>
              <button className="sign-up-btn btn btn-primary">sign up</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export { SignUp };
