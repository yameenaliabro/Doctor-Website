import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyA2UyPjiwZ3I0OUwUfgW5cF6sMcrFFdNf8",
  authDomain: "bookweb-f6580.firebaseapp.com",
  projectId: "bookweb-f6580",
  storageBucket: "bookweb-f6580.appspot.com",
  messagingSenderId: "941471012479",
  appId: "1:941471012479:web:4fde4886b3bdce5dad114a"
};
export const app = initializeApp(firebaseConfig);
export const  db = getFirestore(app)
export const auth = getAuth(app)