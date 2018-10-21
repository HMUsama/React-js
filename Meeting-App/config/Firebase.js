import * as firebase from 'firebase';

var config = {
  apiKey: "Your api key ",
  authDomain: "Your Domain Name",
  databaseURL: "Your databse Name",
  projectId: "meeting-app-",
  storageBucket: "",
  messagingSenderId: "Your id "
};
  firebase.initializeApp(config);
  export default firebase;
