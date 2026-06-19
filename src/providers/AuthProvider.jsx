import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase.init";
import { AuthContext } from "./AuthContext";
import { useState } from "react";

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const name = "Nodi Amer Jan";

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  } 

  const signOutUser = () => {
    return signOut(auth)
  }

  onAuthStateChanged(auth, currentUser => {
    if (currentUser) {
      console.log('the current user is', currentUser)
      setUser(currentUser)
      setLoading(false)
    }
    else{
      console.log('no user logged in')
      setUser(null)
    }
  })

  const authInfo = {
    loading,
    name,
    user,
    createUser,
    signInUser,
    signOutUser
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
