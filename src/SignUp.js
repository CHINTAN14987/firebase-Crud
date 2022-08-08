import FirebaseAuthService from "./firebaseAuthService";
import { useState } from "react";
import "./css/SignUp.css";
// import { useLocation, useNavigate } from "react-router-dom";
import { IoLogoTwitter } from "react-icons/io";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

import { SiGmail } from "react-icons/si";

const SignUp = () => {
  const [signUpData, setSignUpData] = useState({
    email: "",
    password: "",
  });

  const [showEmailerror, setShowEmailError] = useState("");
  const [showPasswordError, setShowPasswordError] = useState("");

  const SignUpHandler = async () => {
    try {
      await FirebaseAuthService.RegisterUser(
        signUpData.email,
        signUpData.password
      ).then((r) => {
        console.log(r);
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  const inputDataHandler = (e) => {
    setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className="signUpContainer">
        <div className="signUp_Flex_Container">
          <h3 className="title">Create Your Account</h3>
          <p>Just a few more steps and you're done! We hate paperwork, too.</p>
          <input
            className={`input1 ${
              showEmailerror.length > 0
                ? "InputBorder__ErrorActive1"
                : "InputBorder__ErrorInActive1"
            }`}
            placeholder="email or phone number"
            value={signUpData.email}
            name="email"
            onChange={inputDataHandler}
            required
          />

          <span className="signup_Error1">{showEmailerror}</span>

          <input
            className={`input2 ${
              showEmailerror.length > 0
                ? "InputBorder__ErrorActive2"
                : "InputBorder__ErrorInActive2"
            }`}
            placeholder="password"
            value={signUpData.password}
            name="password"
            type="password"
            onChange={inputDataHandler}
            required
          />
          <span className="signup_Error2">{showPasswordError}</span>

          <button onClick={SignUpHandler}>Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
