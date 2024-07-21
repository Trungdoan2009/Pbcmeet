import firebase from "firebase/compat/app";
import database from "firebase/compat/database";

const firebaseConfig = {
    apiKey: 'AIzaSyBhd3kqe13Hr5nQRNLFBcORtCzWfX-gQi8',
    databaseURL: 'https://pbcmeet-default-rtdb.firebaseio.com/'
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase;

var firepadRef = firebase.database().ref();

export const userName = prompt("Tên của bạn là gì? ");
const urlparams = new URLSearchParams(window.location.search);
const roomId = urlparams.get("id");

if (roomId) {
  firepadRef = firepadRef.child(roomId);
} else {
  firepadRef = firepadRef.push();
  window.history.replaceState(null, "Meet", "?id=" + firepadRef.key);
}

export default firepadRef;