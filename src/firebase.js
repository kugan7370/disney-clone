// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries






// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// my firebase
const firebaseConfig = {
  apiKey: "AIzaSyCc3AACmS69qtbgeDZM9GFUMZCJOY42JBA",
  authDomain: "disney-clone-system.firebaseapp.com",
  projectId: "disney-clone-system",
  storageBucket: "disney-clone-system.appspot.com",
  messagingSenderId: "125826853722",
  appId: "1:125826853722:web:9c39bea14424d4f5dd6163",
  measurementId: "G-YV0SENXQ0H"
};



// Initialize Firebase
 initializeApp(firebaseConfig);

export default getFirestore();




