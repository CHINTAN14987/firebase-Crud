import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import firebaseAuthService from "./firebaseAuthService";
const SignUp = () => {
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
    name: "",
    mobile: "",
  });

  const handleChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const handleClick = () => {
    console.log(formValue);
  };

  const handleLogin = async () => {
    try {
      await firebaseAuthService
        .RegisterUser(formValue.email, formValue.password)
        .then((r) => {
          console.log(r);
        });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <h3 className="heading">Please Register or Login</h3>
      <div className="container">
        <label>Email Address:</label>
        <input value={formValue.email} onChange={handleChange} name="email" />
        <label>Password:</label>
        <input
          value={formValue.password}
          onChange={handleChange}
          name="password"
        />
        <label>Name:</label>
        <input value={formValue.name} onChange={handleChange} name="name" />
        <label>Mobile Number:</label>
        <input value={formValue.mobile} onChange={handleChange} name="mobile" />
        <div className="buttonFlex">
          {/* <button onClick={register}>Sign Up</button> */}
          <button onClick={handleLogin}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
