// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API"AIzaSyDwdtXjMQLSYx17LyYzQz_wcPjc5jx1L5g",
  authDomain: "realtor-clone-react-57d40.firebaseapp.com",
  projectId: "realtor-clone-react-57d40",
  storageBucket: "realtor-clone-react-57d40.appspot.com",
  messagingSenderId: "760818294843",
  appId: "1:760818294843:web:ff5cf50daaee7d16547c1e"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();