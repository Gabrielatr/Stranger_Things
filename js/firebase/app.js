    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    const firebaseConfig = {
    apiKey: "AIzaSyD1emxS-swdUdELXBfxiTFJ8rMWO0sfbtI",
    authDomain: "projeto-stranger-things-f6a52.firebaseapp.com",
    projectId: "projeto-stranger-things-f6a52",
    storageBucket: "projeto-stranger-things-f6a52.appspot.com",
    messagingSenderId: "583185193191",
    appId: "1:583185193191:web:ad62e030f51a3cc865ea42"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig)

  export default app