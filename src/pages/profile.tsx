import { type NextPage } from "next";
import { useSession } from "next-auth/react";
import TopNav from "~/components/TopNav";

const Profile: NextPage = () => {
  const { data: sessionData } = useSession();
  if (!sessionData)
    return (
      <main className="max-w-screen flex min-h-screen w-screen flex-col items-center justify-center bg-[#ffe5ec]">
        <TopNav />
        <div className="flex h-full w-full flex-col items-center justify-center">
          <p className="text-2xl text-[#590d22]">
            You need to sign in to view your profile!
          </p>
        </div>
      </main>
    );
  return (
    <main className="max-w-screen flex min-h-screen w-screen flex-col items-center justify-start bg-[#ffe5ec] py-52">
      <TopNav />
      <div className="relative flex h-full w-96 flex-col items-center justify-center">
        <div className="z-1 absolute top-1/3 h-full w-full rounded-xl bg-[#ff4d6d]"></div>
        <div className="z-10 flex flex-col justify-center">
          <div className="z-10 flex aspect-square w-52 items-center justify-center rounded-full">
            <img
              className="w-11/12 rounded-full"
              src={sessionData.user.image ? sessionData.user.image : ""}
            />
          </div>
          <div className="z-10 flex flex-col items-center justify-center">
            <p className="text-5xl font-bold text-[#ffe5ec]">
              {sessionData.user.name}
            </p>
            <p className="text-xs text-[#ffe5ec]/50">
              {sessionData.user.email}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Profile;
