import {getApp,getApps,initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';



const firebaseConfig = {
    apiKey: "AIzaSyDpBpnix1Q1ts13FT-khhbpU2xTpIA3GMw",
    authDomain: "foodapp-3bd77.firebaseapp.com",
    databaseURL: "https://foodapp-3bd77-default-rtdb.firebaseio.com",
    projectId: "foodapp-3bd77",
    storageBucket: "foodapp-3bd77.appspot.com",
    messagingSenderId: "804557592827",
    appId: "1:804557592827:web:25103242f8d502b09d385e"
  };
  const app = getApps.length > 0 ? getApp(): initializeApp(firebaseConfig);
  const firestore= getFirestore(app);
  const storage= getStorage(app);



  
export { app , firestore , storage };