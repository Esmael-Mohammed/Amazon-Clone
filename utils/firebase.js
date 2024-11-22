import { initializeApp } from "firebase/app";
//auth
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore"
// import { getFirestore} from "firebase/firestore";
import { getFirestore, collection, doc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxh2K6D3qEK9vbqJyYQ4Lz5HosfguuIUA",
  authDomain: "clone-66846.firebaseapp.com",
  projectId: "clone-66846",
  storageBucket: "clone-66846.firebasestorage.app",
  messagingSenderId: "24740448800",
  appId: "1:24740448800:web:b1429edc8dd75ab76d0a45"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
const db=getFirestore(app)
export{db};