import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FirebaseAuthService from "./firebaseAuthService";
import "./css/SignUp.css";
import { IoLogoTwitter } from "react-icons/io";
import { BsFacebook } from "react-icons/bs";

import { SiGmail } from "react-icons/si";
import "./css/Login.css";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "./features/loginSlice";

const Login = () => {
  const [signUpData, setSignUpData] = useState({
    email: "",
    password: "",
  });

  const [showEmailerror, setShowEmailError] = useState("");
  const [showPasswordError, setShowPasswordError] = useState("");
  let navigate = useNavigate();
  const disptach = useDispatch();
  const slectedUser = useSelector((state) => state.LoginReducer);

  const LoginHandler = async () => {
    try {
      await FirebaseAuthService.signIn(
        signUpData.email,
        signUpData.password
      ).then((r) => {
        console.log(r.user.email);

        navigate("/home");
        disptach(
          loginAction.setUserLogin({
            name: r.user.displayName,
            email: r.user.email,
            photo: r.user.photoURL,
          })
        );
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  const gmailHandler = async () => {
    try {
      await FirebaseAuthService.loginwithGmail().then((r) => {
        console.log(r);
        navigate("/home");
        disptach(
          loginAction.setUserLogin({
            name: r.user.displayName,
            email: r.user.email,
            photo: r.user.photoURL,
          })
        );
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  const twitterHandler = async () => {
    try {
      await FirebaseAuthService.loginwithTwitter().then((r) => {
        console.log(r);
        navigate("/home");
        disptach(
          loginAction.setUserLogin({
            name: r.user.displayName,
            email: r.user.email,
            photo: r.user.photoURL,
          })
        );
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  const FaceBookHandler = async () => {
    try {
      await FirebaseAuthService.loginWithFacebook().then((r) => {
        console.log(r);
        navigate("/home");
        disptach(
          loginAction.setUserLogin({
            name: r.user.displayName,
            email: r.user.email,
            photo: r.user.photoURL,
          })
        );
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
      <div className="loginContainer">
        <div className="login_Flex_Container">
          <h3 className="title">SignIn Your Account</h3>

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

          <div className="icon_wrapper">
            <IoLogoTwitter fill="blue" size="25px" onClick={twitterHandler} />
            <BsFacebook fill="blue" size="20px" onClick={FaceBookHandler} />
            <SiGmail fill="red" size="22px" onClick={gmailHandler} />
          </div>
          <button onClick={LoginHandler}>Login</button>
          <h3 className="Login_Link_Title">
            New Here? <span onClick={() => navigate("/")}>Sign up now.</span>
          </h3>
          <h3 className="Capcha_link">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
            <span>Learn more.</span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Login;
