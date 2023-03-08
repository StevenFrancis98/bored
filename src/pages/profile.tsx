import { type NextPage } from "next";
import { useSession } from "next-auth/react";
import AuthenticationWrapper from "~/components/AuthenticationWrapper";
import TopNav from "~/components/TopNav";

const Profile: NextPage = () => {
  const { data: sessionData, status } = useSession();

  return (
    <main className="max-w-screen flex min-h-screen w-screen flex-col items-center justify-start bg-pink-100 py-[10%]">
      <TopNav />
      <AuthenticationWrapper status={status}>
        <div className="relative flex h-full w-96 flex-col items-center justify-center shadow-xl shadow-pink-200/50">
          <div className="z-10 flex h-full w-full flex-col items-center justify-center rounded-xl bg-pink-200/70 py-10">
            <div className="z-10 flex aspect-square w-52 items-center justify-center rounded-full">
              <img
                className="w-11/12 rounded-full"
                src={sessionData?.user.image ? sessionData.user.image : ""}
              />
            </div>
            <div className="z-10 flex flex-col items-center justify-center">
              <p className="text-5xl font-bold text-pink-200">
                {sessionData?.user.name}
              </p>
              <p className="text-xs text-pink-200/50">
                {sessionData?.user.email}
              </p>
            </div>
            <div className="z-1 absolute top-1/3 flex h-full w-full flex-col items-center justify-end rounded-b-xl bg-pink-100 p-10 shadow-xl shadow-pink-200/50">
              <p className="text-xs text-pink-200/50">expires</p>
              <div className="flex h-1/6 w-4/6 flex-col items-center justify-center rounded-full bg-white text-center text-xl font-semibold text-pink-200 shadow-[inset_0_0px_2px]">
                {sessionData?.expires &&
                  new Date(sessionData?.expires).toLocaleTimeString()}
              </div>
            </div>
          </div>
        </div>
      </AuthenticationWrapper>
    </main>
  );

  return <p></p>;
};

export default Profile;
