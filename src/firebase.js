import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDN7ThEIJrZtR9NNbGlq8rTxnrX94gPTF8",
    authDomain: "imessage-chat-app-fe573.firebaseapp.com",
    databaseURL: "https://imessage-chat-app-fe573.firebaseio.com",
    projectId: "imessage-chat-app-fe573",
    storageBucket: "imessage-chat-app-fe573.appspot.com",
    messagingSenderId: "34133953716",
    appId: "1:34133953716:web:c61e3392cc1d23af005be1",
    measurementId: "G-FP17EB8XGL"
  };

  const firebaseApp= firebase.initializeApp(firebaseConfig);
  const db= firebaseApp.firestore();
  const auth= firebase.auth();
  const provider= new firebase.auth.GoogleAuthProvider();
  
  
  export {auth, provider};

  export default db;