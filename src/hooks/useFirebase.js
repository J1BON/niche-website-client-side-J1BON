import { useEffect, useState } from "react";
import {
  getAuth,
  signOut,
  updateProfile,
  signInWithPopup,
  onAuthStateChanged,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import initializeAuthentication from "./../Pages/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [regiError, setRegiError] = useState("");

  const [isLoading, setIsLoading] = useState(true);
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const signInUsingGoogle = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const registerNewUser = (email, password, name) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        handleUserInfo(user.email, "POST");
        setRegiError("");
        setUserName(name);
      })
      .catch((error) => {
        setRegiError(error.message);
      });
  };

  const handleUserInfo = (email, method) => {
    fetch("http://localhost:5000/addUserInfo", {
      method: method,
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email }),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
  };
  const setUserName = (name) => {
    updateProfile(auth.currentUser, { displayName: name }).then(() => {});
  };
  const processLogin = (email, password) => {
    // handleUserInfo(user.email)
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .finally(() => setIsLoading(false));
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
  }, [auth]);

  return {
    user,
    regiError,
    isLoading,
    setIsLoading,
    logOut,
    signInUsingGoogle,
    handleUserInfo,
    registerNewUser,
    processLogin,
  };
};

export default useFirebase;
