import { getApp, getApps, initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyALmxglFoF_4dtYVDfmMh2eeMILB1i2IgA",
    authDomain: "dropbox-clone-60af1.firebaseapp.com",
    projectId: "dropbox-clone-60af1",
    storageBucket: "dropbox-clone-60af1.appspot.com",
    messagingSenderId: "1035902169855",
    appId: "1:1035902169855:web:21a79d82f82faf053a92ca",
    measurementId: "G-S9PV41S99Q"
  };

  const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const storage = getStorage(app);

  export { db, storage };