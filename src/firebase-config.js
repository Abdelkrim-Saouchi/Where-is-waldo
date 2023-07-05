// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDu6izQfYFAaNDTx41frlLdgjnoRuO62DQ',
  authDomain: 'where-is-waldo-22df1.firebaseapp.com',
  projectId: 'where-is-waldo-22df1',
  storageBucket: 'where-is-waldo-22df1.appspot.com',
  messagingSenderId: '1087516911235',
  appId: '1:1087516911235:web:431f52ec2f8e6b8d6fddb6',
  measurementId: 'G-E76ENJCT4W',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
