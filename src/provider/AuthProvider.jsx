import React, { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

import { auth } from "../firebase/firebase.config";


const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // sign in with google
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  // create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // log in user
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // sing out user
  const logOut = () => {
    return signOut(auth)
  }

  // update user profile
  const updateUserProfile = (updateData) =>{
    setLoading(true);
    return updateProfile(auth.currentUser , updateData)
  }
  // Reset password
  const fotgetPassword = (email) => {
    setLoading(true)
    return sendPasswordResetEmail(auth, email)
  }
  // Observe
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authData = {
    user,
    loading,
    googleProvider,
    signInWithGoogle,
    createUser,
    signInUser,
    logOut,
    updateUserProfile,
    fotgetPassword
  };
  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
