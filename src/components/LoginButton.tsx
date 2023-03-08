import { signIn, signOut, useSession } from "next-auth/react";
import Hover from "./Hover";

const LoginButton: React.FC = () => {
  const { data: sessionData } = useSession();

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <Hover>
        <button
          className="rounded-full bg-pink-200/10 px-8 py-3 font-semibold text-maroon no-underline hover:bg-pink-200/5 hover:text-pink-200"
          onClick={sessionData ? () => void signOut() : () => void signIn()}
        >
          {sessionData ? "Sign out" : "Sign in"}
        </button>
      </Hover>
    </div>
  );
};

export default LoginButton;
