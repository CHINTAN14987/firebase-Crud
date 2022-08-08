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

  // let navigate = useNavigate();

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
  const gmailHandler = async () => {
    try {
      await FirebaseAuthService.loginwithGmail().then((r) => {
        console.log(r);
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  const twitterHandler = async () => {
    try {
      await FirebaseAuthService.loginwithTwitter().then((r) => {
        console.log(r);
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  const InstagramHandler = async () => {
    try {
      await FirebaseAuthService.signinWithPhone(signUpData.email);
    } catch (error) {
      console.log(error.message);
    }
  };
  const FaceBookHandler = async () => {
    try {
      await FirebaseAuthService.loginWithFacebook().then((r) => {
        console.log(r);
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  //   const submithandler = (e) => {
  //     e.preventDefault();

  //     const auth = getAuth();
  //     createUserWithEmailAndPassword(auth, signUpData.email, signUpData.password)
  //       .then((response) => {
  //         // Signed in
  //         let user = response.user;

  //         dispatch(
  //           setUserLogin({
  //             name: user.displayName,
  //             email: user.email,
  //             photo: user.photoURL,
  //           })
  //         );
  //         localStorage.setItem("token", user.accessToken);
  //         localStorage.setItem("Name", user.email);
  //         navigate("/home");
  //       })
  //       .catch((error) => {
  //         const errorCode = error.code;

  //         let editError = errorCode
  //           .slice(errorCode.indexOf("/"), errorCode.length)
  //           .substring(1);
  //         console.log(editError);
  //         if (editError === "missing-email") {
  //           setShowEmailError(editError);
  //         } else if (editError === "email-already-in-use") {
  //           setShowEmailError(editError);
  //         } else if (editError === "weak-password") {
  //           setShowPasswordError(editError);
  //         } else {
  //           setShowPasswordError(editError);
  //         }
  //       });
  //   };

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

          <div className="icon_wrapper">
            <IoLogoTwitter fill="blue" size="25px" onClick={twitterHandler} />
            <BsFacebook fill="blue" size="20px" onClick={FaceBookHandler} />
            <AiFillInstagram
              fill="pink"
              size="25px"
              onClick={InstagramHandler}
            />
            <SiGmail fill="red" size="22px" onClick={gmailHandler} />
          </div>
          <button onClick={SignUpHandler}>Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
