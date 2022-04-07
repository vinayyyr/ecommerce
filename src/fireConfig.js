import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBqBK4oaLwzwfm-4zWBoN5sX7MWTYq0FNs",
  authDomain: "commerce-bf521.firebaseapp.com",
  projectId: "commerce-bf521",
  storageBucket: "commerce-bf521.appspot.com",
  messagingSenderId: "1016941738989",
  appId: "1:1016941738989:web:72d9d9d5e9c0fdb4d505e4",
  measurementId: "G-5RH8YRV0HN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDb = getFirestore(app);
export default fireDb