import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

/* const firebaseConfig = {
    apiKey: "AIzaSyDKbNhpHWI2ERVNo6hRpjQdKv9qjAV96pc",
    authDomain: "reactcoderhouse-83121.firebaseapp.com",
    projectId: "reactcoderhouse-83121",
    storageBucket: "reactcoderhouse-83121.appspot.com",
    messagingSenderId: "1064022379802",
    appId: "1:1064022379802:web:3c5b55af0b7b622047b0a3"
  }; */
  const firebaseConfig = {
    apiKey: import.meta.env.VITE_apiKey,
    authDomain: import.meta.env.VITE_authDomain,
    projectId: import.meta.env.VITE_projectId,
    storageBucket: import.meta.env.VITE_storageBucket,
    messagingSenderId: import.meta.env.VITE_messagingSenderId,
    appId: import.meta.env.VITE_appId
  };


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

