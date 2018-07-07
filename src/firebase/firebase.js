import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const prodConfig = {
      apiKey: "AIzaSyA1I6ToEeX97DyaNjRcdBNLKAtTPjp98Ds",
      authDomain: "leadnynja.firebaseapp.com",
      databaseURL: "https://leadnynja.firebaseio.com",
      projectId: "leadnynja",
      storageBucket: "leadnynja.appspot.com",
      messagingSenderId: "26988618871"
};

const devConfig = {
  apiKey: "AIzaSyA1I6ToEeX97DyaNjRcdBNLKAtTPjp98Ds",
  authDomain: "leadnynja.firebaseapp.com",
  databaseURL: "https://leadnynja.firebaseio.com",
  projectId: "leadnynja",
  storageBucket: "leadnynja.appspot.com",
  messagingSenderId: "26988618871"
};

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
  db,
  auth,
};
