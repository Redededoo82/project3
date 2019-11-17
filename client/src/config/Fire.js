import firebase from 'firebase'
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCP7CqpFgqk8p0Vaky7JERD1FnElOVqYK8",
    authDomain: "project3-c84f0.firebaseapp.com",
    databaseURL: "https://project3-c84f0.firebaseio.com",
    projectId: "project3-c84f0",
    storageBucket: "project3-c84f0.appspot.com",
    messagingSenderId: "1073143237012",
    appId: "1:1073143237012:web:1e2d1cbdeea75f8680a781",
    measurementId: "G-DCHRPEZPFD"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
export default firebase