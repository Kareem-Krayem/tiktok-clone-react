const firebaseConfig = {
  apiKey: 'AIzaSyCEwT2oZec0nX4dLXIvSm5y71PQoqlD8EA',
  authDomain: 'tiktok-clone-24b8d.firebaseapp.com',
  databaseURL: 'https://tiktok-clone-24b8d.firebaseio.com',
  projectId: 'tiktok-clone-24b8d',
  storageBucket: 'tiktok-clone-24b8d.appspot.com',
  messagingSenderId: '688765422073',
  appId: '1:688765422073:web:89fc4609820a924a929528',
};

import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  //here are the configurations that you need to put from firebase
});

const firebaseApp = firebase.initializeApp(config);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
