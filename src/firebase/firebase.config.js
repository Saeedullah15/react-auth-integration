// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDPSMY9k6tvPsW4YA42dlVv_2ZyGMhNO70",
    authDomain: "react-auth-885dd.firebaseapp.com",
    projectId: "react-auth-885dd",
    storageBucket: "react-auth-885dd.appspot.com",
    messagingSenderId: "675918058832",
    appId: "1:675918058832:web:e028f542949addf9e5c855"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;