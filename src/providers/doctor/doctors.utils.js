import { firestore } from '../../firebase/firebase.utils';

export const fetchDoctors = async () => {
  const doctorsRef = firestore.collection(`doctors`);

  const snapshot = await doctorsRef.get();
  const doctors = snapshot.docs.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  });

  return doctors;
};
