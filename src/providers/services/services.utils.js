import {
  convertServiesSnapshotToMap,
  firestore,
} from '../../firebase/firebase.utils';

/* basic flow:
   1) create collection ref(with correct collection name or path)
   2) get snapshot using ref.get()
   3) stucture docs acc. to your reqirement
   4) return it
*/

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

export const fetchBanners = async () => {
  const bannersRef = firestore.collection('banners');

  const snapshot = await bannersRef.get();
  const banners = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

  return banners;
};
