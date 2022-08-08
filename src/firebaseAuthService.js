import firebase from "./firebaseConfig";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
  TwitterAuthProvider,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const auth = getAuth();
const provider = new GoogleAuthProvider();
const faceBookProvider = new FacebookAuthProvider();
const twitterAuthProvider = new TwitterAuthProvider();

const RegisterUser = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

const loginwithGmail = () => {
  return signInWithPopup(auth, provider);
};

const loginWithFacebook = () => {
  return signInWithPopup(auth, faceBookProvider);
};
const loginwithTwitter = () => {
  return signInWithPopup(auth, twitterAuthProvider);
};
const signIn = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

const AuthChangedWithuser = () => {};

const SignOuthandler = () => {
  return signOut(auth);
};
const firebaseAuthService = {
  RegisterUser,
  loginwithGmail,
  loginWithFacebook,
  loginwithTwitter,
  signIn,
  SignOuthandler,
};
export default firebaseAuthService;
