import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCP9DAQpH2H3aAqffJzhImNdqM0G2k0HaI",
  authDomain: "g-maps-clone.firebaseapp.com",
  projectId: "g-maps-clone",
  storageBucket: "g-maps-clone.appspot.com",
  messagingSenderId: "38255311699",
  appId: "1:38255311699:web:73821598771c934fe93fa6",
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

// Create a root reference
export const storageRef = firebase.storage().ref();
