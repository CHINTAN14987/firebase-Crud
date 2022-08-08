import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import "../css/Header.css";
import firebaseAuthService from "../firebaseAuthService";
import { loginAction } from "../features/loginSlice";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const Header = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const LoginValue = useSelector((state) => state.LoginReducer.photo);
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      auth.onAuthStateChanged(async (user) => {
        if (user) {
          console.log(user.photoURL);
          dispatch(
            loginAction.setUserLogin({
              name: user.displayName,
              email: user.email,
              photo: user.photoURL,
            })
          );
          navigate("/home");
        }
      });
    });
  }, []);
  const logouthandler = async () => {
    try {
      await firebaseAuthService.SignOuthandler().then((response) => {
        navigate("/login");
        dispatch(
          loginAction.setSignOut({
            name: null,
            email: null,
            photo: null,
          })
        );
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <div className="header_wrapper">
        {pathname === "/home" ? (
          <>
            <button onClick={logouthandler}>LogOut</button>
          </>
        ) : (
          <>
            {pathname === "/" ? (
              <>
                <NavLink to="/login">
                  <button>Login</button>
                </NavLink>
              </>
            ) : (
              <></>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
