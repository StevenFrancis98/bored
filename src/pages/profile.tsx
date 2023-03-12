import { type NextPage } from "next";
import { useSession } from "next-auth/react";
import AuthenticationWrapper from "~/components/AuthenticationWrapper";
import TopNav from "~/components/TopNav";

const Profile: NextPage = () => {
  const { data: sessionData, status } = useSession();

  return (
    <main className="max-w-screen flex min-h-screen w-screen flex-col items-center justify-start bg-pink-100">
      <TopNav />
      <AuthenticationWrapper status={status}>
        <div className="flex h-full w-[90%] max-w-fit shrink flex-grow flex-col items-center justify-center bg-none">
          <div className="relative z-10 flex h-full w-full flex-col items-center justify-center rounded-xl bg-pink-200/70 p-10 px-10 shadow-xl shadow-pink-200/50 xs:px-20">
            <div className="z-10 flex aspect-square w-52 items-center justify-center rounded-full">
              <img
                className="w-11/12 rounded-full"
                src={sessionData?.user.image ? sessionData.user.image : ""}
              />
            </div>
            <div className="z-10 flex w-full flex-col items-center justify-center">
              <p className="text-5xl font-bold text-pink-200">
                {sessionData?.user.name}
              </p>
              <p className="text-xs text-pink-200/50">
                {sessionData?.user.email}
              </p>
              <p className="mt-10 text-xs text-pink-200/50">expires</p>
              <div className="mt-1 flex h-full flex-col items-center justify-center rounded-full bg-white py-2 px-4 text-center text-xl font-semibold text-pink-200 shadow-[inset_0_0px_2px]">
                {sessionData?.expires &&
                  new Date(sessionData?.expires).toLocaleTimeString()}
              </div>
            </div>
            <div className="z-1 absolute top-1/3  flex h-2/3 w-full flex-col items-center justify-end rounded-b-xl bg-pink-100 p-10 shadow-xl shadow-pink-200/50"></div>
          </div>
        </div>
      </AuthenticationWrapper>
    </main>
  );

  return <p></p>;
};

export default Profile;
