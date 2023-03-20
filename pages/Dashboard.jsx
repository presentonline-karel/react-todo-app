import { auth } from "../util/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";

const Dashboard = () => {
  const [user, loading] = useAuthState(auth);
  const route = useRouter();

  if (loading) return <h1>Loading...</h1>;

  if (!user) route.push("auth/Login");

  if (user)
    return (
      <div>
        <h1>Welcome to your dashboard {user.displayName}</h1>
        <button onClick={() => auth.signOut()}>Sign out</button>
      </div>
    );
};

export default Dashboard;
