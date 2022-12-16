import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";
import Nav from "../public/UI/Nav";

import { app } from "../util/firebase";

import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import UserContext from "../public/UI/UserContext";

export default function App({ Component, pageProps }: AppProps) {
  const [user, setUser] = useState({
    username: "",
    picture: "",
    favorites: [],

    isSignedIn: false,
  });
  const [isSignedIn, setIsSignedIn] = useState(false);

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
      })
      .catch((error) => alert(error));
  };

  return (
    <UserContext.Provider value={user}>
      <Nav />
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
