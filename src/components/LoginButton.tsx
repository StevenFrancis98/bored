import { signIn, signOut, useSession } from "next-auth/react";
import { api } from "~/utils/api";
import Hover from "./Hover";

const LoginButton: React.FC = () => {
  const { data: sessionData } = useSession();

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <Hover>
        <button
          className="rounded-full bg-[#590d22]/10 px-8 py-3 font-semibold text-[#590d22] no-underline hover:bg-[#590d22]/5 hover:text-[#ff4d6d]"
          onClick={sessionData ? () => void signOut() : () => void signIn()}
        >
          {sessionData ? "Sign out" : "Sign in"}
        </button>
      </Hover>
    </div>
  );
};

export default LoginButton;
