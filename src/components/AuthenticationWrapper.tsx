import { NextPage } from "next";
import Spinner from "./Spinner";

interface Props {
  children: JSX.Element;
  status: "unauthenticated" | "loading" | "authenticated";
}

const AuthenticationWrapper: NextPage<Props> = ({ children, status }) => {
  if (status === "unauthenticated")
    return (
      <div className="flex h-full w-full flex-col items-center justify-center">
        <p className="text-2xl text-maroon">
          You need to sign in to view this!
        </p>
      </div>
    );

  if (status === "loading") return <Spinner />;

  if (status === "authenticated") return <div>{children}</div>;

  return <>Error</>;
};

export default AuthenticationWrapper;
