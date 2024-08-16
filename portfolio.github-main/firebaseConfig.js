
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAjQaNP9jRuR0nlM5KDBzjwj19klSjw3y0",
    authDomain: "contact-form-1c9de.firebaseapp.com",
    databaseURL: "https://contact-form-1c9de-default-rtdb.firebaseio.com",
    projectId: "contact-form-1c9de",
    storageBucket: "contact-form-1c9de.appspot.com",
    messagingSenderId: "657898627943",
    appId: "1:657898627943:web:b285deff5c65bca0fa05c2",
    measurementId: "G-132NYVZN3H"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);