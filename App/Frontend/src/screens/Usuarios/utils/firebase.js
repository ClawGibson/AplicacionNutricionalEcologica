import firebase from "firebase/app";

var firebaseConfig = {
  apiKey: "AIzaSyCNP1vcPZh4OcHO3NUleRfScgPTrxdZZyg",
  authDomain: "tenedores-70ac2.firebaseapp.com",
  projectId: "tenedores-70ac2",
  storageBucket: "tenedores-70ac2.appspot.com",
  messagingSenderId: "283292939400",
  appId: "1:283292939400:web:93f57431a3c563ccce9b3d",
  measurementId: "G-LP31NKRERR",
};
// Initialize Firebase
export const firebaseApp = firebase.initializeApp(firebaseConfig);
