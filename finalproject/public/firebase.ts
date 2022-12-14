import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyABi776mTs2fFOU5YVMzi7yNSUsfSHcHGI",
  authDomain: "trends-auth.firebaseapp.com",
  projectId: "trends-auth",
  storageBucket: "trends-auth.appspot.com",
  messagingSenderId: "951974275589",
  appId: "1:951974275589:web:c997f57578fd2e87bc8a6c",
};
// export const app = initializeApp(firebaseConfig);
export const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const auth = getAuth(app);

const db = getFirestore(app);
export const storage = getStorage(app);

export { db };
