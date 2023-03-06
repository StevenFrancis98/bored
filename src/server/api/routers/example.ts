import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const exampleRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.example.findMany();
  }),

  userCreate: publicProcedure
    .input(z.object({ visited: z.boolean() }))
    .mutation(({ ctx, input }) => {
      if (!input.visited) {
        const user = ctx.prisma.example.create({
          data: {
            updatedAt: new Date(),
          },
        });

        return user;
      }
    }),
});
