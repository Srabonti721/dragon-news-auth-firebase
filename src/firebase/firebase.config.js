// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0q-PGjZtaQdoDvsO1DxflhG4no6xJBfI",
  authDomain: "dragon-news-auth-firebas-860f4.firebaseapp.com",
  projectId: "dragon-news-auth-firebas-860f4",
  storageBucket: "dragon-news-auth-firebas-860f4.firebasestorage.app",
  messagingSenderId: "432419024097",
  appId: "1:432419024097:web:ac614e2ff6636870325ba0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);