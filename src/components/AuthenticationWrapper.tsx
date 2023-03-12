import { NextPage } from "next";
import Spinner from "./Spinner";

interface Props {
  children: JSX.Element;
  status: "unauthenticated" | "loading" | "authenticated";
}

const AuthenticationWrapper: NextPage<Props> = ({ children, status }) => {
  if (status === "unauthenticated")
    return (
      <div className="flex h-full w-full flex-grow flex-col items-center justify-center text-center">
        <p className="text-2xl text-maroon">
          You need to sign in to view this!
        </p>
      </div>
    );

  if (status === "loading") return <Spinner />;

  if (status === "authenticated") return { ...children };

  return <>Error</>;
};

export default AuthenticationWrapper;
