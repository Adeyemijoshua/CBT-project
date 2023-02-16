// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import {  getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use


const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_API_KEY,
  authDomain: "cbt-auth-b4f22.firebaseapp.com",
  projectId: "cbt-auth-b4f22",
  storageBucket: "cbt-auth-b4f22.appspot.com",
  messagingSenderId: "148541853472",
  appId: "1:148541853472:web:426c4587273ace84ef1145"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
export const db = getFirestore(app)

export {auth}

// export function signUp(email, password) {
//   return createUserWithEmailAndPassword(auth, email, password)
// }