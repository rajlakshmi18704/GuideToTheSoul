import { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../utils/firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';


const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState({});

  async function   signUp(email, password) {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log("Logged in:", userCredential.user);
    }
    catch (error) {
      console.error("Error during login:", error.message);
    }
    // setDoc(doc(db, 'users', email), {
    //     savedShows: []
    // })
  }

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logOut() {
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  });

  return (
    <AuthContext.Provider value={{ signUp, logIn, logOut, user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function UserAuth() {
  return useContext(AuthContext);
}