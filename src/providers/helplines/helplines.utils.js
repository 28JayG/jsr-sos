import { firestore } from '../../firebase/firebase.utils';

export const fetchHelplines = async () => {
  const helplinesRef = firestore.collection(`helplines`);

  const snapshot = await helplinesRef.get();
  const helplines = snapshot.docs.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  });

  return helplines;
};
