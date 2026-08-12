import { createTRPCReact } from '@trpc/react-query';

/**
 * tRPC client scaffold for the future `ngo-management-system` backend.
 *
 * Today the frontend runs on typed mock data (see `lib/mockApi.ts`). When the
 * backend is connected, replace the mock hooks with `trpc.<procedure>.useXxx()`
 * calls and instantiate the tRPC client in `lib/trpcProvider.tsx` using
 * `VITE_TRPC_URL`. The AppRouter type is intentionally `any` so the frontend
 * builds independently of the backend repo; all inputs are validated by zod
 * schemas on the server at runtime.
 */
export const trpc = createTRPCReact<any>();
