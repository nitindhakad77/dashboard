
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// console.log(process.env.REACT_APP_FIREBASE_API_KEY);

const firebaseConfig = {
  apiKey: "AIzaSyBJ4q0lSnMbzIkIdmkrBlFKVAg36rWZ-C8",
  authDomain: "moviex-react-5cae6.firebaseapp.com",
  projectId: "moviex-react-5cae6",
  storageBucket: "moviex-react-5cae6.appspot.com",
  messagingSenderId: "534458219869",
  appId: "1:534458219869:web:8f66269e54bf7fa8487cb4",
  measurementId: "G-6G4E0Q5VSQ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();



export { app, auth };
