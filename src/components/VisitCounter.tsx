import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { api } from "~/utils/api";

const VisitCounter = () => {
  const [vistiors, setVisitors] = useState<number>(0);
  const { data: sessionData } = useSession();
  const adduser = api.visitCount.userCreate.useMutation();
  const users = api.visitCount.getAll.useQuery();
  api.visitCount.onUserCreate.useSubscription(undefined, {
    onData(visitors) {
      setVisitors(visitors.length);
    },
  });

  useEffect(() => {
    let visited = window.sessionStorage.getItem("visited") ? true : false;
    adduser.mutate({ visited: visited });
    window.sessionStorage.setItem(
      "visited",
      sessionData?.user.name ? sessionData.user.name : "visited"
    );
  }, []);

  useEffect(() => {
    users.data && setVisitors(users.data.length);
  }, [users]);

  return (
    <div className="flex h-14 w-14 animate-glow flex-col items-center justify-center rounded-full bg-pink-200/10">
      <p className="text-left text-2xl font-bold text-pink-200">{vistiors}</p>
    </div>
  );
};

export default VisitCounter;
