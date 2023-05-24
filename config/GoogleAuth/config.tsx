import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const ggSignIn = async () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  const result = await signInWithPopup(auth, provider);
  return result;
};

export default ggSignIn;
