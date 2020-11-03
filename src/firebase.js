import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyC7x7DJcokZMDHjCoCZ1jvcNh1AoKOgImk",
    authDomain: "twitter-clone-809bf.firebaseapp.com",
    databaseURL: "https://twitter-clone-809bf.firebaseio.com",
    projectId: "twitter-clone-809bf",
    storageBucket: "twitter-clone-809bf.appspot.com",
    messagingSenderId: "944970091472",
    appId: "1:944970091472:web:feebd40a6a00554bb907d5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

export default firebaseApp;