const firebaseConfig = {
  apiKey: "AIzaSyBf2ar41YbjVr8KGLbx_KljYsufjJpJk0g",
  authDomain: "formulario-a8536.firebaseapp.com",
  projectId: "formulario-a8536",
  storageBucket: "formulario-a8536.appspot.com",
  messagingSenderId: "1056324797232",
  appId: "1:1056324797232:web:7e48ee51632452698dbef5",
  measurementId: "G-ME3PE1SEKH"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();
