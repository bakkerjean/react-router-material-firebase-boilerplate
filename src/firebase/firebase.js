import * as firebase from 'firebase';

const config = {
    apiKey: "YOUR_API",
    authDomain: "YOUR_AUTHDOMAIN",
    databaseURL: "YOUR_DATABASE",
    projectId: "YOUR_ID",
    storageBucket: "YOUR_STORAGE",
    messagingSenderId: "YOUR_MESSAGING"
};



if (!firebase.apps.length) {
  firebase.initializeApp(config);
}


const db = firebase.database();
const auth = firebase.auth();

export {
  db,
  auth,
};
