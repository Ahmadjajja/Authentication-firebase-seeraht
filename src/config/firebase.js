// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAutlYWcyeIuZb5iK2JgwYGVB67xMJOnUw",
    authDomain: "crudbynaveed.firebaseapp.com",
    projectId: "crudbynaveed",
    storageBucket: "crudbynaveed.appspot.com",
    messagingSenderId: "971897390085",
    appId: "1:971897390085:web:f9f52fa0cd13d04578c86c",
    measurementId: "G-WEVMDM63V7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore = getFirestore(app)

<<<<<<< HEAD
export { analytics, auth }   //simple import
=======
export { analytics, auth, firestore }
>>>>>>> 032f9911f91c4701fced0fcd50ea462fa764e6b8
