import { OnlineStatus, User } from "@prisma/client";
import { useEffect, useState } from "react";
import { api } from "~/utils/api";

const OnlineUsers: React.FC = () => {
  const [onlineUsers, setOnlineUsers] = useState<
    (OnlineStatus & {
      user: User;
    })[]
  >([]);
  api.onlineUsers.onAdd.useSubscription(undefined, {
    onData(users) {
      console.log(users);
      setOnlineUsers(users);
    },
  });
  const addUser = api.onlineUsers.add.useMutation();

  useEffect(() => {
    addUser.mutate();
  }, []);

  return (
    <div className="flex flex-row-reverse">
      {onlineUsers.map((u) => {
        return (
          <div key={u.userId} className="-mx-4 first:mx-0">
            <img
              className="w-16 rounded-full outline outline-2 outline-pink-200"
              src={u.user.image || ""}
              alt={u.user.name || "profile picture"}
            />
          </div>
        );
      })}
    </div>
  );
};

export default OnlineUsers;
