import * as firebase from "firebase";
import "firebase/database";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_F08E3juUg3OR27aF4rVZiFytaf-iwKY",
  authDomain: "music-player-3ea25.firebaseapp.com",
  databaseURL: "https://music-player-3ea25-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "music-player-3ea25",
  storageBucket: "music-player-3ea25.appspot.com",
  messagingSenderId: "385996362759",
  appId: "1:385996362759:web:62bd128f6a939559f906a2",
  measurementId: "G-79ZFFYXN9V"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export default firebase.database();
