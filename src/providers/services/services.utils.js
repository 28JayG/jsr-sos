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
