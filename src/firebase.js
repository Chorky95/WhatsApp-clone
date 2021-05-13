import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDXXB6GEhgIv23o2khWcW8rdKFjPGEp070',
  authDomain: 'whatsapp-clone-962bd.firebaseapp.com',
  projectId: 'whatsapp-clone-962bd',
  storageBucket: 'whatsapp-clone-962bd.appspot.com',
  messagingSenderId: '811000321627',
  appId: '1:811000321627:web:06b69a52a3bac24799517e',
  measurementId: 'G-3GR7GRJ7E2',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
