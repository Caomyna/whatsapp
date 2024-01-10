import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyA5nql9yhOj5X_kul1WMbFjL5aq7LCunjA",
    authDomain: "chatapp-9a695.firebaseapp.com",
    projectId: "chatapp-9a695",
    storageBucket: "chatapp-9a695.appspot.com",
    messagingSenderId: "121275213120",
    appId: "1:121275213120:web:050ad14a096c61e6f846a5",
    measurementId: "G-GTLZ71B7DG"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);