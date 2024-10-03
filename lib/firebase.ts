// firebase.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAXC25Kyzg7nspv2NGzxoBBkRwX5hUfH3E",
  authDomain: "ekindus-3cd71.firebaseapp.com",
  projectId: "ekindus-3cd71",
  storageBucket: "ekindus-3cd71.appspot.com",
  messagingSenderId: "694314926111",
  appId: "1:694314926111:web:2a3ff888b9bae2d782952a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
export default app;
