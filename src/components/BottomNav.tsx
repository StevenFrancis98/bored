import OnlineUsers from "./OnlineUsers";
import VisitCounter from "./VisitCounter";

const BottomNav = () => {
  return (
    <div className="bottom-0 flex w-screen items-center justify-between px-10 py-5">
      <div className="flex items-center gap-5">
        <VisitCounter />
      </div>
      <div className="flex items-center gap-5 text-xl font-bold text-pink-200">
        <OnlineUsers />
      </div>
    </div>
  );
};

export default BottomNav;
