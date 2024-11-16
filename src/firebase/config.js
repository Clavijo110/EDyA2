import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAcbIVqi5aqAHjQqlQz4WG3-wGWPVq_iJA",
  authDomain: "playgroound-bc5b5.firebaseapp.com",
  projectId: "playgroound-bc5b5",
  storageBucket: "playgroound-bc5b5.appspot.com",
  messagingSenderId: "1048744607257",
  appId: "1:1048744607257:web:a23580b3aaacf7b1f9b488"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firebaseStorage = getStorage(app);

export {app, auth,firebaseStorage}