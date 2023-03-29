import { createTRPCRouter } from "~/server/api/trpc";
import { onlineUsersRouter } from "./routers/onlineUsers";
import { visitCountRouter } from "./routers/visitCount";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  onlineUsers: onlineUsersRouter,
  visitCount: visitCountRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
