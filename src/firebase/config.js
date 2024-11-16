import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAYyh3ztkayry4FdBayaI8iUFOJKwSyTfg",
  authDomain: "challenge-react-14.firebaseapp.com",
  projectId: "challenge-react-14",
  storageBucket: "challenge-react-14.firebasestorage.app",
  messagingSenderId: "186074306820",
  appId: "1:186074306820:web:76f3ab3472a6c0ae811851",
  measurementId: "G-PTNWWLBTKN"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };
