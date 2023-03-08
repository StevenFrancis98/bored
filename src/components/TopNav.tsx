import { useSession } from "next-auth/react";
import LoginButton from "./LoginButton";

const TopNav = () => {
  const { data: sessionData } = useSession();
  return (
    <div className="absolute top-0 flex w-screen items-center justify-between px-10 py-5">
      <div className="flex items-center gap-5 text-3xl font-bold">
        <a
          className="group text-maroon underline decoration-pink-200 underline-offset-4 hover:text-pink-200"
          href="/"
        >
          Bored
          <span className="text-pink-200 group-hover:text-maroon">.</span>
        </a>
      </div>
      <div className="flex items-center gap-5 text-xl font-bold">
        {sessionData && (
          <a className="text-maroon hover:text-pink-200" href="/profile">
            {sessionData.user.name}
          </a>
        )}
        <a className="text-maroon hover:text-pink-200" href="#">
          <LoginButton />
        </a>
      </div>
    </div>
  );
};

export default TopNav;
