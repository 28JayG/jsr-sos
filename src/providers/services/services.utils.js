import {
  convertServiesSnapshotToMap,
  firestore,
} from '../../firebase/firebase.utils';

export const fetchServicesAsync = async () => {
  const serviesRef = firestore.collection('services');

  const snapshot = await serviesRef.get();
  const servicesMap = convertServiesSnapshotToMap(snapshot);

  return servicesMap;
};

export const fetchServiceOptions = async (serviceID) => {
  const serviceOptionsRef = firestore.collection(
    `services/${serviceID}/service_options`
  );

  const snapshot = await serviceOptionsRef.get();
  const serviceOptions = snapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));

  return serviceOptions;
};
