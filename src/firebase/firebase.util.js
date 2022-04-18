// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider,getAuth,signInWithPopup,signInWithRedirect} from 'firebase/auth';

import {getFirestore, doc,getDoc, setDoc} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBV04UgYkY7_3g2R4oNXQfC61kroRtb_q4",
  authDomain: "capstone-ecommerce-8e98a.firebaseapp.com",
  projectId: "capstone-ecommerce-8e98a",
  storageBucket: "capstone-ecommerce-8e98a.appspot.com",
  messagingSenderId: "32728041958",
  appId: "1:32728041958:web:66d7f818fb0e550a122e27"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account',
});



export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth,provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async(userAuth)=>{
    const userDocRef = doc(db,'users', userAuth.uid) //doc(databse, collection, identifier)
    console.log(userDocRef);
    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot.exists())

    if(!userSnapshot.exists()){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await setDoc(userDocRef,{
                displayName,
                email,
                createdAt
            })
        }catch(error){
            console.log('eror creating the user', error.message)
        }
    }

    return userDocRef;
}