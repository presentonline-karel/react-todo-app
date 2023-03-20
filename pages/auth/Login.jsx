// Icons
import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook } from "react-icons/ai";

// Auth
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../util/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

// Others
import { useRouter } from "next/router";
import { useEffect } from "react";



const Login = () => {

  const route = useRouter();
  const [user, loading] = useAuthState(auth);

  // Sign in with Google
  const googleProvider = new GoogleAuthProvider();

  const googleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      route.push("/Dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  // Redirect logged in users to Dashboard
  useEffect(() => {
    if(user) {
      route.push("/Dashboard");
    } else {
      console.log("Login");
    }
  }, [user]);



  return (
    <div className="shadow-xl mt-32 p-10 text-white-700 rounded-lg">
      <h2 className="text-3xl font-medium">Join today</h2>

      <div className="py-4">
        <h3 className="py-4">Sign in with one of the providers</h3>
      </div>

      <div className="flex flex-col gap-4">
        <button onClick={googleLogin} className="text-white bg-white text-gray-700 p-4 w-full font-medium rounded-lg flex align-middle gap-2">
          <FcGoogle className="text-2xl" /> Sign in with Google
        </button>
        <button className="text-white bg-white text-gray-700 p-4 w-full font-medium rounded-lg flex align-middle gap-2">
          <AiFillFacebook className="text-2xl" /> Sign in with Facebook
        </button>
      </div>
    </div>
  );
};

export default Login;