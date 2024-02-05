// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCV3fvCC2cDODH8JocsCO1bThWnjZosBm8",
  authDomain: "entertainment-web-app-7cfba.firebaseapp.com",
  projectId: "entertainment-web-app-7cfba",
  storageBucket: "entertainment-web-app-7cfba.appspot.com",
  messagingSenderId: "226102892752",
  appId: "1:226102892752:web:9ef2a1df2d80a459f466d5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export default app;
