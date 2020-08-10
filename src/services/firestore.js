import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
};
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export const storageRef = firebase.storage().ref();

export const authenticateAnonymously = () =>
  firebase.auth().signInAnonymously();

export const getBusinesses = () => {
  return db.collection("businesses").get();
};

export const getRelatedBusinesses = (search, operand, value) => {
  return db.collection("businesses").where(search, operand, value).get();
};
