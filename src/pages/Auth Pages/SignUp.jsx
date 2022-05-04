import { Link, useNavigate } from "react-router-dom";
import "./AuthPagesCss.css";
import { Navbar } from "../../components/Navbar";
import { useState } from "react";
import { useAuth } from "../../context/auth-context";
import axios from "axios";

const SignUp = () => {
  const [signupCredentials, setSignupCredentials] = useState({
    fullName: "",
    email: "",
    password: "",
    passwordAgain: "",
  });

  const navigate = useNavigate();
  const { auth, setAuth } = useAuth();

  const signupHandler = (e) => {
    e.preventDefault();

    if (signupCredentials.password !== signupCredentials.passwordAgain) {
      console.log("passwords does not match");
    } else {
      setSignupCredentials({
        fullName: "",
        email: "",
        password: "",
        passwordAgain: "",
      });

      const createNewUser = async () => {
        try {
          const response = await axios.post("/api/auth/signup", {
            fullName: signupCredentials.fullName,
            email: signupCredentials.email,
            password: signupCredentials.password,
          });

          localStorage.setItem("USER_TOKEN", response.data.encodedToken);
          localStorage.setItem(
            "USER_DATA",
            JSON.stringify({
              fullName: response.data.createdUser.fullName,
              email: response.data.createdUser.email,
            })
          );

          setAuth({
            isLoggedIn: true,
            token: response.data.encodedToken,
            user: {
              fullName: response.data.createdUser.fullName,
              email: response.data.createdUser.email,
            },
          });
          console.log(response);
        } catch (err) {
          console.log(err);
        }
      };
      createNewUser();
    }
  };

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
            <div className="flex-row-sb">
              <h4 className="mr-sm">Continue with</h4>
              <div className="size-options m-0">
                <button>
                  <i className="fa fa-google"></i>
                </button>
              </div>
            </div>
            <p>Or you can manually sign-up too</p>
            <form action="#" className="sign-up-form px-1" onSubmit={signupHandler}>
              <input type="text" placeholder="Full Name*" value={signupCredentials.fullName} onChange={(e) => setSignupCredentials({...signupCredentials, fullName: e.target.value})}/>
              <input type="email" placeholder="Email*" value={signupCredentials.email} onChange={(e) => setSignupCredentials({...signupCredentials, email: e.target.value})} />
              <div className="flex-row-sb pass-div">
                <input
                  type="password"
                  placeholder="Password*"
                  className="pass-field"
                  value={signupCredentials.password}
                  onChange={(e) => setSignupCredentials({...signupCredentials, password: e.target.value})}
                />
                <i className="fa fa-eye-slash" aria-hidden="true"></i>
              </div>
              <div className="flex-row-sb pass-div">
                <input
                  type="password"
                  placeholder="Confirm Password*"
                  className="pass-field"
                  value={signupCredentials.passwordAgain}
                  onChange={(e) => setSignupCredentials({...signupCredentials, passwordAgain: e.target.value})}
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
              <button className="sign-up-btn btn btn-primary" type="submit">sign up</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export { SignUp };
