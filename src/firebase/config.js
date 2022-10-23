import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAvjJfN3nWHkHkvw9uKRdt22tIEf78TA8s",
  authDomain: "mymoney-38e57.firebaseapp.com",
  projectId: "mymoney-38e57",
  storageBucket: "mymoney-38e57.appspot.com",
  messagingSenderId: "156711833939",
  appId: "1:156711833939:web:3cd61b6b8c5b12c4da91a6"
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init required services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

export { projectFirestore, projectAuth };