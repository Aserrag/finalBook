import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyCdOiyXlP6dRezFWMCzGvM5YhZ6lT-7WdM",
    authDomain: "bookreactplayer.firebaseapp.com",
    projectId: "bookreactplayer",
    storageBucket: "bookreactplayer.appspot.com",
    messagingSenderId: "494106440504",
    appId: "1:494106440504:web:4f50070401fcb3e17987cd"
  };

  const firebaseApp= firebase.initializeApp(firebaseConfig);
  const auth= firebaseApp.auth()
  const provider= new firebase.auth.GoogleAuthProvider();

  export {auth , provider }