import firebase from "./firebaseConfig";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
  TwitterAuthProvider,
  signInWithPhoneNumber,
} from "firebase/auth";

const auth = getAuth();
const provider = new GoogleAuthProvider();
const faceBookProvider = new FacebookAuthProvider();
const twitterAuthProvider = new TwitterAuthProvider();
// const phoneNumber = getPhoneNumberFromUserInput();
const appVerifier = window.recaptchaVerifier;

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

const firebaseAuthService = {
  RegisterUser,
  loginwithGmail,
  loginWithFacebook,
  loginwithTwitter,
};
export default firebaseAuthService;
