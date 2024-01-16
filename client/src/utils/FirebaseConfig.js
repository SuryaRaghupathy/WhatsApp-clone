import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCEi_XQ34xzqB8bes6cB5U2qoB7Ng6JtY4",
  authDomain: "whatsapp-clone-89e20.firebaseapp.com",
  projectId: "whatsapp-clone-89e20",
  storageBucket: "whatsapp-clone-89e20.appspot.com",
  messagingSenderId: "648803500700",
  appId: "1:648803500700:web:a3f620187b5ab6161ca359",
  measurementId: "G-PCW2PJJ2TH",
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
