import {initializeApp} from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyClWxU5BnKiVup5od8aAumvqGgbsjEwp-k",
    authDomain: "lets-connect-4b6c5.firebaseapp.com",
    projectId: "lets-connect-4b6c5",
    storageBucket: "lets-connect-4b6c5.appspot.com",
    messagingSenderId: "741732086961",
    appId: "1:741732086961:web:989e157ac33743f22a1e90"
  };

  initializeApp(firebaseConfig);




export  default getFirestore();