import firebase from "./firebaseConfig";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
console.log(auth);

const RegisterUser = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};
const firebaseAuthService = { RegisterUser };
export default firebaseAuthService;
