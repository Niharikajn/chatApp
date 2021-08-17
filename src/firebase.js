import firebase from 'firebase/app';
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyApmxUqCP2XmAVPq_9OI6LdlFmHyC51xks",
    authDomain: "chatapp-bfc4d.firebaseapp.com",
    projectId: "chatapp-bfc4d",
    storageBucket: "chatapp-bfc4d.appspot.com",
    messagingSenderId: "552622654308",
    appId: "1:552622654308:web:8b5ef95d35a12f90777071",
    measurementId: "G-TT1J0QPTP0"
}).auth();

