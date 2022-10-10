import { Link, useNavigate } from "react-router-dom";
import "./AuthPagesCss.css";
import { useState } from "react";
import { useAuth } from "../../context/auth-context";

const SignUp = () => {
  const [signupCredentials, setSignupCredentials] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const { token, createNewUser } = useAuth();
  const navigate = useNavigate();

  const signupHandler = (e) => {
    e.preventDefault();
    const { email, password, firstName, lastName } = signupCredentials;
    if (email && password && firstName && lastName !== "") {
      (async () => {
        createNewUser(email, password, firstName, lastName);
      })();
    }
  };

  if (token) {
    setTimeout(() => {
      navigate(location?.state?.from || "/products", { replace: true });
    }, 500);
  }

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
              <Link to="/signup" className="mx-sm">
                <button type="submit" className="sign-up-btn btn btn-primary">
                  sign up
                </button>
              </Link>
              <Link to="/login" className="mx-sm">
                <button type="submit" className="log-in-btn btn">
                  log in
                </button>
              </Link>
            </div>
            <form
              action="#"
              className="sign-up-form px-1"
              onSubmit={signupHandler}
            >
              <input
                type="text"
                placeholder="FirstName*"
                value={signupCredentials.firstName}
                onChange={(e) =>
                  setSignupCredentials({
                    ...signupCredentials,
                    firstName: e.target.value,
                  })
                }
              />
              <input
                type="text"
                placeholder="LastName*"
                value={signupCredentials.lastName}
                onChange={(e) =>
                  setSignupCredentials({
                    ...signupCredentials,
                    lastName: e.target.value,
                  })
                }
              />
              <input
                type="email"
                placeholder="Email*"
                value={signupCredentials.email}
                onChange={(e) =>
                  setSignupCredentials({
                    ...signupCredentials,
                    email: e.target.value,
                  })
                }
              />
              <div className="flex-row-sb pass-div">
                <input
                  type="password"
                  placeholder="Password*"
                  className="pass-field"
                  value={signupCredentials.password}
                  onChange={(e) =>
                    setSignupCredentials({
                      ...signupCredentials,
                      password: e.target.value,
                    })
                  }
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
              <button className="sign-up-btn btn btn-primary" type="submit">
                sign up
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export { SignUp };
