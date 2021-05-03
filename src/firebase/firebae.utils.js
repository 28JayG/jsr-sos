import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBH03WRySAMbI5QoDSsQs4uGuGyh2EE4o0',
  authDomain: 'jsr-sos.firebaseapp.com',
  projectId: 'jsr-sos',
  storageBucket: 'jsr-sos.appspot.com',
  messagingSenderId: '732658636205',
  appId: '1:732658636205:web:ced920576ead0ca31bfd24',
  measurementId: 'G-GBKEMGTYF8',
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export default firebase;