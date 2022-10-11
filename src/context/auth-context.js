import { createContext, useContext, useState, useEffect } from "react";
import { loginService } from "../services/loginService";
import { signUpService } from "../services/signUpService";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const localStorageToken = JSON.parse(localStorage.getItem("login"));
  const [token, setToken] = useState(localStorageToken?.token);
  const localStorageUser = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState(localStorageUser?.user);
  const [loader, setLoader] = useState(false);

  const loginUser = async (email, password) => {
    if (email && password !== "") {
      try {
        const {
          data: { foundUser, encodedToken },
          status,
        } = await loginService(email, password);

        if (status === 200) {
          localStorage.setItem(
            "login",
            JSON.stringify({ token: encodedToken })
          );
          setToken(encodedToken);
          localStorage.setItem("user", JSON.stringify({ user: foundUser }));
          setUser(foundUser);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const createNewUser = async (email, password, firstName, lastName) => {
    try {
      const {
        data: { createdUser, encodedToken },
        status,
      } = await signUpService(email, password, firstName, lastName);

      if (status === 200) {
        localStorage.setItem("signup", JSON.stringify({ token: encodedToken }));
        setToken(encodedToken);
        localStorage.setItem("user", JSON.stringify({ user: createdUser }));
        setUser(createdUser);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 800);
  }, [token]);

  return (
    <AuthContext.Provider
      value={{
        token,
        setToken,
        user,
        setToken,
        loginUser,
        createNewUser,
        setUser,
        loader,
        setLoader,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
