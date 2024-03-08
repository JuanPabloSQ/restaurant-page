// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9iWW8Q_-rqQJb5ak54P8h4yCevXMWzJ8",
  authDomain: "proyecto-4-service.firebaseapp.com",
  projectId: "proyecto-4-service",
  storageBucket: "proyecto-4-service.appspot.com",
  messagingSenderId: "951681101957",
  appId: "1:951681101957:web:a28197fd4a02eac02a39ec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)