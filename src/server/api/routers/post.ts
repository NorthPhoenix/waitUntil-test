import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

import { waitUntil } from "@vercel/functions";


export const postRouter = createTRPCRouter({
  testWaitUntil: publicProcedure
    .mutation(async () => {
      const testarr = []
      console.log('waitUntilTest 1')
      testarr.push(1)
      waitUntil(new Promise(resolve => {
        console.log('waitUntilTest 2')
        testarr.push(2)
        setTimeout(() => {
          console.log('waitUntilTest 4')
          testarr.push(4)
          resolve(undefined)
        }, 3000)
      }))
      console.log('waitUntilTest 3')
      testarr.push(3)
      return testarr;
    }),
});
