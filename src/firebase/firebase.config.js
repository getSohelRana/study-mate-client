// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAf27QObLhpICddGxLKpjFvZMcxazV-QnU",
  authDomain: "studymate-98c7d.firebaseapp.com",
  projectId: "studymate-98c7d",
  storageBucket: "studymate-98c7d.firebasestorage.app",
  messagingSenderId: "848194003876",
  appId: "1:848194003876:web:ae189f76eb866cafbcd731"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);