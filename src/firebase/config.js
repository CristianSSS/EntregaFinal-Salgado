import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyA754WkL3T62qrWmbEuKpNQExz_k01iUVo",
  authDomain: "ecommerce-74cf6.firebaseapp.com",
  projectId: "ecommerce-74cf6",
  storageBucket: "ecommerce-74cf6.appspot.com",
  messagingSenderId: "1084572802101",
  appId: "1:1084572802101:web:39099f386448a3a5a7657c"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
