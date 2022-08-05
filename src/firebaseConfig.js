// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);
