// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMOXkhqV4RXo2-Klro3lbmdKIRX4Ql6xo",
  authDomain: "unoverse-14e94.firebaseapp.com",
  projectId: "unoverse-14e94",
  storageBucket: "unoverse-14e94.firebasestorage.app",
  messagingSenderId: "261290875169",
  appId: "1:261290875169:web:4212294ccb1d52feaf4660",
  measurementId: "G-LSVQ9SYWHD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
