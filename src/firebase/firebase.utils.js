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

export const convertServiesSnapshotToMap = (collection) => {
  const services = collection.docs.map((doc) => {
    //get data
    const { title, iconUrl } = doc.data();
    //add additional fields
    return {
      title,
      iconUrl,
      routeName: title.toLowerCase().replace(/ /g, '_'),
      id: doc.id,
    };
  });

  //reduces services to map
  return services.reduce((accumulator, service) => {
    accumulator[service.id] = service;
    //return complete object
    return accumulator;
  }, {});
};

export const getServiceOptions = async (optionsRef) => {
  let serviceOptions = [];
  //get services
  optionsRef
    .get()
    .then((snapshot) =>
      snapshot.docs.map((doc) => serviceOptions.push(doc.data()))
    );

  return serviceOptions;
};

export const firestore = firebase.firestore();

export default firebase;
