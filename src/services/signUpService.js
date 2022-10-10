import axios from "axios";

export const signUpService = (email, password, firstname, lastname) => {
  return axios.post("api/auth/signup", {
    firstName: firstname,
    lastName: lastname,
    email: email,
    password: password,
  });
};
