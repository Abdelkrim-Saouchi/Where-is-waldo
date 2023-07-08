import { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase-config';

export const useCharacter = (docId) => {
  const [character, setCharacter] = useState({ found: false });

  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, 'characters', docId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log('Document:', docSnap.data());
        setCharacter(docSnap.data());
      } else {
        console.log('Document not found');
      }
    };
    fetchData();
  }, [docId]);

  return [character, setCharacter];
};
