import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";
import Nav from "../public/UI/Nav";

import { db, app } from "../util/firebase";

import {
  onSnapshot,
  query,
  collection,
  getFirestore,
  where,
  getDoc,
  getDocs,
  addDoc,
} from "firebase/firestore";

import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import UserContext from "../public/UI/UserContext";
import Favorites from "./favorites";

export default function App({ Component, pageProps }: AppProps) {
  // const userContext = useContext(UserContext);
  const [user, setUser] = useState({
    username: "",
    picture: "",
    favorites: [],

    isSignedIn: false,
  });
  const [isSignedIn, setIsSignedIn] = useState(false);
  // const auth = getAuth(app);

  // const provider = new GoogleAuthProvider();

  const signInWithGoogle = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const name = result.user.displayName + "";
        const profilePic = result.user.photoURL + "";
        setIsSignedIn(true);

        setUser({
          ...user,
          username: name,
          picture: profilePic,
          isSignedIn: !isSignedIn,
        });

        // const taskQuery = query(
        //   collection(db, "firstuser"),
        //   where("username", "==", name)
        // );
      })
      .catch((error) => alert(error));
  };

  return (
    <UserContext.Provider value={user}>
      <Nav isSignedIn={isSignedIn} />
      <Component
        {...pageProps}
        signIn={signInWithGoogle}
        isSignedIn={isSignedIn}
        user={user}
        changeuser={setUser}
      />
      <h1></h1>
    </UserContext.Provider>
  );
}
