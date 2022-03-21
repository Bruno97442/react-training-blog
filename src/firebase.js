import firebase from 'firebase/compat/app';
// import { initializeApp } from "firebase//compat/app";
import { initializeApp } from "firebase/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import "firebase/database";
import 'firebase/compat/firestore';
let firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyCp4AgmQWbN4cffcfpnxUXeX9xXKAxU_Vs",
        authDomain: "react-contact-form-86d3e.firebaseapp.com",
        projectId: "react-contact-form-86d3e",
        storageBucket: "react-contact-form-86d3e.appspot.com",
        messagingSenderId: "1092238520264",
        appId: "1:1092238520264:web:e18e6bf0da531f98e2dafd",
        measurementId: "G-B0CQ05RXVY"      
});


  var db = firebaseApp.firestore();

  export { db };