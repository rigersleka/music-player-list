import * as firebase from "firebase";
import "firebase/database";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4_lKx-268tQrchPTnDMaq1g37QFKAmT8",
  authDomain: "bezkoder-firebase-1f7d1.firebaseapp.com",
  databaseURL: "https://bezkoder-firebase-1f7d1-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "bezkoder-firebase-1f7d1",
  storageBucket: "bezkoder-firebase-1f7d1.appspot.com",
  messagingSenderId: "1092255242782",
  appId: "1:1092255242782:web:4c944fd1d332d75b526c0f",
  measurementId: "G-TGMSW7DTQW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default firebase.database();
