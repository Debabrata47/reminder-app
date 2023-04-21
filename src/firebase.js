import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB2KPvbXPJjBW3O-gXJ0u4ftB5MOdZEc9Q",
  authDomain: "reminder-app-39814.firebaseapp.com",
  databaseURL: "https://reminder-app-39814-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "reminder-app-39814",
  storageBucket: "reminder-app-39814.appspot.com",
  messagingSenderId: "123643739014",
  appId: "1:123643739014:web:5120bb4f588bf3cca28a07"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth();
