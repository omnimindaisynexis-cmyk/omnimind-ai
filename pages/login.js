import { auth } from "../lib/firebaseClient";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/router";

export default function Login(){
  const router = useRouter();
  async function signInGoogle(){
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
    router.push("/dashboard");
  }
  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold">Login</h1>
      <button onClick={signInGoogle} className="mt-4 bg-[var(--omni-cyan)] p-2 rounded">Sign in with Google</button>
    </div>
  );
}
