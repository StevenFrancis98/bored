import { signIn, signOut, useSession } from "next-auth/react";
import { api } from "~/utils/api";
import Hover from "./Hover";

const LoginButton: React.FC = () => {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = api.example.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined }
  );

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl text-[#590d22]">
        {sessionData && <span>You are {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <Hover>
        <button
          className="rounded-full bg-[#590d22]/10 px-10 py-3 font-semibold text-[#590d22] no-underline hover:bg-[#590d22]/20"
          onClick={sessionData ? () => void signOut() : () => void signIn()}
        >
          {sessionData ? "Sign out" : "Sign in"}
        </button>
      </Hover>
    </div>
  );
};

export default LoginButton;
