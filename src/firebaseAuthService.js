import { initializeApp } from "firebase/app";

import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
  getAuth,
  TwitterAuthProvider,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAUYJtDRbXyITHgzwHB0oJZdJnG0ZqnfTU",
  authDomain: "confident-topic-356611.firebaseapp.com",
  projectId: "confident-topic-356611",
  storageBucket: "confident-topic-356611.appspot.com",
  messagingSenderId: "981578188334",
  appId: "1:981578188334:web:1a8021fc84cb097eeb81bf",
  measurementId: "G-NTXSBK5FRQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

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

const SignOuthandler = () => {
  return signOut(auth);
};

const authChange = () => {
  return onAuthStateChanged(auth, async (user) => {
    if (user) {
      return user;
    }
  });
};

const firebaseAuthService = {
  RegisterUser,
  loginwithGmail,
  loginWithFacebook,
  loginwithTwitter,
  signIn,
  SignOuthandler,
  auth,
};
export default firebaseAuthService;
