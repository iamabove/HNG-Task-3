import firebase from "firebase/compat/app"
import "firebase/compat/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCFJoe7DmxzkP-OuCG9dYfBHnRucXqV7LU",
    authDomain: "hng-task-3-4ac84.firebaseapp.com",
    projectId: "hng-task-3-4ac84",
    storageBucket: "hng-task-3-4ac84.appspot.com",
    messagingSenderId: "940165303985",
    appId: "1:940165303985:web:a55ba528d5abcbd4be5c90"
  };

  firebase.initializeApp(firebaseConfig)

  const projectAuth = firebase.auth()

  export {projectAuth}