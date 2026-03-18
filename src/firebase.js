import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth, GoogleAuthProvider} from "firebase/auth"



const firebaseConfig = {  // FROM YOUR CONFIG IN FIREBASE
  apiKey: "AIzaSyDeDTRChszdgZj4J-dwXVi4t8ID5nZLzPE",
  authDomain: "react-firebase-app-7aa72.firebaseapp.com",
  projectId: "react-firebase-app-7aa72",
  storageBucket: "react-firebase-app-7aa72.firebasestorage.app",
  messagingSenderId: "863475128547",
  appId: "1:863475128547:web:45d1ef09c2cfc0182a4dd6"
  };
  
  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);
  export const provider = new GoogleAuthProvider();
  export const auth = getAuth(app);

  