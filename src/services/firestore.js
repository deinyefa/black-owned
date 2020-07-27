import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAg2FPRrweXqGmWhvQJH1ytqQr4hP1eDVE",
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: "black-owned-eb668",
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
};
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export const authenticateAnonymously = () =>
  firebase.auth().signInAnonymously();

export const getBusinesses = () => {
  return db.collection("businesses").get();
};

export const getRelatedBusinesses = (search, operand, value) => {
  return db.collection("businesses").where(search, operand, value).get();
};
