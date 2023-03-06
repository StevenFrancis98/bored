import { useSession } from "next-auth/react";
import LoginButton from "./LoginButton";

const TopNav = () => {
  const { data: sessionData } = useSession();
  return (
    <div className="absolute top-0 flex w-screen items-center justify-between px-10 py-5">
      <div className="flex items-center gap-5 text-3xl font-bold">
        <a
          className="group text-[#590d22] underline decoration-[#ff4d6d] underline-offset-4 hover:text-[#ff4d6d]"
          href="#"
        >
          Bored
          <span className="text-[#ff4d6d] group-hover:text-[#590d22]">.</span>
        </a>
      </div>
      <div className="flex items-center gap-5 text-xl font-bold">
        {sessionData && (
          <a
            className="text-[#590d22] decoration-[#ff4d6d] underline-offset-4 hover:text-[#ff4d6d]"
            href="#"
          >
            {sessionData.user.name}
          </a>
        )}
        <a
          className="text-[#590d22] decoration-[#ff4d6d] underline-offset-4 hover:text-[#ff4d6d]"
          href="#"
        >
          <LoginButton />
        </a>
      </div>
    </div>
  );
};

export default TopNav;
