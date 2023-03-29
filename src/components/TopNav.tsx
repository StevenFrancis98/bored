import { signIn, signOut, useSession } from "next-auth/react";
import { useState } from "react";
import LoginButton from "./LoginButton";

const TopNav = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const { data: sessionData } = useSession();

  const toggle = () => setShowMenu((prev) => !prev);
  return (
    <>
      <div className="top-0 flex w-[90%] items-center justify-between py-5 sm:w-screen sm:px-10">
        <div className="flex items-center gap-5 text-3xl font-bold">
          <a
            className="group text-maroon underline decoration-pink-200 underline-offset-4 hover:text-pink-200"
            href="/"
          >
            Bored
            <span className="text-pink-200 group-hover:text-maroon">.</span>
          </a>
        </div>
        <div className="hidden items-center gap-5 text-xl font-bold md:flex">
          {sessionData && (
            <a className="text-maroon hover:text-pink-200" href="/profile">
              {sessionData.user.name}
            </a>
          )}
          <a className="text-maroon hover:text-pink-200" href="#">
            <LoginButton />
          </a>
        </div>
        <div
          className="z-10 block text-maroon hover:cursor-pointer md:hidden"
          onClick={toggle}
        >
          {!showMenu && (
            <svg
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </div>
      </div>
      {showMenu && (
        <div className="absolute right-0 z-50 block h-screen w-fit bg-pink-200 py-10 text-pink-100 md:hidden">
          <div className="flex flex-col items-center gap-1">
            <svg
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="mb-5 h-6 w-6 hover:scale-[1.15] hover:cursor-pointer"
              onClick={toggle}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            {sessionData && (
              <a
                className="w-full px-10 text-center hover:bg-white hover:text-pink-200"
                href="/profile"
              >
                {sessionData?.user.name}
              </a>
            )}
            <button
              className="w-full px-10 text-center hover:bg-white hover:text-pink-200"
              onClick={sessionData ? () => void signOut() : () => void signIn()}
            >
              {sessionData ? "Sign out" : "Sign in"}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default TopNav;
