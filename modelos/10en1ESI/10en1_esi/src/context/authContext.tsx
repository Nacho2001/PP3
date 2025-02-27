import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  Auth,
  User,
} from "firebase/auth"; // Import Firebase Auth types
import { auth } from "../config/firebase";

// Define the types for your context
interface AuthContextType {
  signup: (email: string, password: string) => Promise<any>;
  login: (email: string, password: string) => Promise<any>;
  logout: () => Promise<void>;
  loginWithGoogle: () => Promise<any>;
  user: User | null;
  loading: boolean;
}

// Create the auth context
export const authContext = createContext<AuthContextType | undefined>(
  undefined
);

// Create a custom hook for using the auth context
export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) throw new Error("No auth provider");
  return context;
};

// Define the props for AuthProvider
interface AuthProviderProps {
  children: ReactNode;
}

// Create the AuthProvider component
export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null); // Specify the User type
  const [loading, setLoading] = useState(true);

  // Register user
  const signup = (email: string, password: string) =>
    createUserWithEmailAndPassword(auth, email, password);

  // Log in
  const login = (email: string, password: string) =>
    signInWithEmailAndPassword(auth, email, password);

  // Sign off
  const logout = () => signOut(auth);

  // Login with Google
  const loginWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    // The authContext is used to make data accessible by all components
    <authContext.Provider
      value={{ signup, login, user, logout, loading, loginWithGoogle }}
    >
      {children}
    </authContext.Provider>
  );
}
