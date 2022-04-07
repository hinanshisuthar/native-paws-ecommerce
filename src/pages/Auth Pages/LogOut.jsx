import "./AuthPagesCss.css";
import { Link } from "react-router-dom";
import { Navbar } from "../../components/Navbar";

const LogOut = () => {
  return (
    <>
      <div className="wrapper-auth center lo mt-2">
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
          <div className="bottom flex-col-sb p-1">
            <h5>You are successfully logged out.</h5>
            <form action="#" className="sign-up-form p-1 flex-col-sb px-1">
              <h3>We already miss you!</h3>
              <h4>Want to log in?</h4>
              <Link to="/log-in">
                <button className="sign-up-btn btn btn-primary">log in</button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export { LogOut };
