import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCEvXrfqu2hQRkBr6YbBajpu1prF06mewg",
  authDomain: "tripstravels-87be4.firebaseapp.com",
  projectId: "tripstravels-87be4",
  storageBucket: "tripstravels-87be4.appspot.com",
  messagingSenderId: "607788102545",
  appId: "1:607788102545:web:e0b316e7201151ca792030"
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;