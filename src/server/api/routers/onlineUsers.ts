import { OnlineStatus, User } from "@prisma/client";
import { observable } from "@trpc/server/observable";
import { publicProcedure, createTRPCRouter, protectedProcedure } from "../trpc";

export const onlineUsersRouter = createTRPCRouter({
  onAdd: protectedProcedure.subscription(({ ctx }) => {
    // return an `observable` with a callback which is triggered immediately
    return observable<
      (OnlineStatus & {
        user: User;
      })[]
    >((emit) => {
      const onAdd = async (onlineStatus: OnlineStatus) => {
        // emit data to client
        const onlineUsers = await ctx.prisma.onlineStatus.findMany({
          where: {
            online: true,
            NOT: {
              userId: ctx.session.user.id,
            },
          },
          include: {
            user: true,
          },
        });
        emit.next(onlineUsers);
      };

      // trigger `onAdd()` when `test` is triggered in our event emitter
      ctx.ee.on("test", onAdd);

      // unsubscribe function when client disconnects or stops subscribing
      return async () => {
        // turn user offline
        const user = await ctx.prisma.onlineStatus.update({
          where: {
            userId: ctx.session?.user.id,
          },
          data: {
            updatedAt: new Date(),
            online: false,
          },
        });
        ctx.ee.emit("test", user);
        ctx.ee.off("test", onAdd);
      };
    });
  }),
  add: protectedProcedure.mutation(async ({ ctx }) => {
    const existingUserEntry = await ctx.prisma.onlineStatus.findFirst({
      where: {
        userId: ctx.session?.user.id,
      },
    });
    let user = null;
    // turn user online
    if (existingUserEntry !== null) {
      //update
      user = await ctx.prisma.onlineStatus.update({
        where: {
          userId: ctx.session?.user.id,
        },
        data: {
          updatedAt: new Date(),
          online: true,
        },
      });
    } else {
      //create
      user = await ctx.prisma.onlineStatus.create({
        data: {
          userId: ctx.session.user.id,
          online: true,
        },
      });
    }
    ctx.ee.emit("test", user);
    return user;
  }),
});
