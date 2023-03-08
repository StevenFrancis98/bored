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
        <div className="relative flex h-full w-96 flex-col items-center justify-center">
          <div className="z-1 absolute top-1/3 h-full w-full rounded-xl bg-pink-200"></div>
          <div className="z-10 flex flex-col justify-center">
            <div className="z-10 flex aspect-square w-52 items-center justify-center rounded-full">
              <img
                className="w-11/12 rounded-full"
                src={sessionData?.user.image ? sessionData.user.image : ""}
              />
            </div>
            <div className="z-10 flex flex-col items-center justify-center">
              <p className="text-5xl font-bold text-pink-100">
                {sessionData?.user.name}
              </p>
              <p className="text-xs text-pink-100/50">
                {sessionData?.user.email}
              </p>
            </div>
          </div>
        </div>
      </AuthenticationWrapper>
    </main>
  );

  return <p></p>;
};

export default Profile;
