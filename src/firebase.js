// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDB0cWv8dOgCp-6tKCXepNmneYtknms7JA",
  authDomain: "realtor-eb7dc.firebaseapp.com",
  projectId: "realtor-eb7dc",
  storageBucket: "realtor-eb7dc.appspot.com",
  messagingSenderId: "243432023031",
  appId: "1:243432023031:web:46df0a1896bb30d3f484f2",
  measurementId: "G-2G2SE4HTLZ"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const analytics = getAnalytics();
export const db = getFirestore();