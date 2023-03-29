import { Example, Visit } from "@prisma/client";
import { observable } from "@trpc/server/observable";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const visitCountRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.visit.findMany();
  }),

  onUserCreate: publicProcedure.subscription(({ ctx }) => {
    return observable<Visit[]>((emit) => {
      const onAdd = async (visit: Visit) => {
        const visitors = await ctx.prisma.visit.findMany();
        emit.next(visitors);
      };

      ctx.ee.on("visit", onAdd);

      return async () => {
        ctx.ee.off("visit", onAdd);
      };
    });
  }),

  userCreate: publicProcedure
    .input(z.object({ visited: z.boolean() }))
    .mutation(async ({ ctx, input }) => {
      if (!input.visited) {
        const user = await ctx.prisma.visit.create({
          data: {},
        });
        ctx.ee.emit("visit");
        return user;
      }
    }),
});
