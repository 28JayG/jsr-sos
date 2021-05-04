import { firestore } from '../../firebase/firebase.utils';

export const fetchFaqs = async () => {
  const faqsRef = firestore.collection(`faqs`);

  const snapshot = await faqsRef.get();
  const faqs = snapshot.docs.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  });

  return faqs;
};
