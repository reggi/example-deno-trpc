// @filename: client.ts
import { createTRPCProxyClient, httpBatchLink } from 'npm:@trpc/client';
import type { AppRouter } from './router.ts';
 
// Notice the <AppRouter> generic here.
const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:8000/trpc',
    }),
  ],
});

const user = await trpc.userById.query('1');

console.log(user)