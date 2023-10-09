import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAE3-mitAqM0dNa_wbU85bMmTF9WI62hBE",
  authDomain: "erpclassfb.firebaseapp.com",
  projectId: "erpclassfb",
  storageBucket: "erpclassfb.appspot.com",
  messagingSenderId: "53766514756",
  appId: "1:53766514756:web:2213dc40498c1080e93411",
};

export const fbInit = initializeApp(firebaseConfig);

export const firestoreInit = getFirestore(fbInit);

export const auth = getAuth(fbInit);
