import { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase-config';

export const useCharacter = (docId) => {
  const [character, setCharacter] = useState({ found: false });

  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, 'characters', docId);
      try {
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setCharacter(docSnap.data());
        } else {
          throw new Error('Document Not found in firestore!');
        }
      } catch (error) {
        console.log(error);
        alert('Error: fetch data failed. Refresh page please!');
      }
    };
    fetchData();
  }, [docId]);

  return [character, setCharacter];
};
