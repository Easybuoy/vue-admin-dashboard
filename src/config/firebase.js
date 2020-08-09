import { firebase } from "@firebase/app";
import "@firebase/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA1Db8tDESRNTZklkhDq1cIfDhU1r6Bulk",
  authDomain: "vue-hq-8f020.firebaseapp.com",
  databaseURL: "https://vue-hq-8f020.firebaseio.com",
  projectId: "vue-hq-8f020",
  storageBucket: "vue-hq-8f020.appspot.com",
  messagingSenderId: "1006810439111",
  appId: "1:1006810439111:web:756402a329bec96ab34de2",
  measurementId: "G-3VQYR593HP",
});

export const db = firebaseApp.firestore();
