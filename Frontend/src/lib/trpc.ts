import { createTRPCReact } from '@trpc/react-query';
import { httpBatchLink } from '@trpc/client';
import superjson from 'superjson';
import type { AppRouter } from './trpc-types';

/**
 * tRPC React client configured for standalone and cloud deployment.
 */
export const trpc = createTRPCReact<AppRouter>();

export function getApiUrl(): string {
  const envUrl = import.meta.env.VITE_API_URL || import.meta.env.VITE_TRPC_URL;
  if (!envUrl) {
    return typeof window !== 'undefined' && window.location.hostname !== 'localhost'
      ? '/api/trpc'
      : 'http://localhost:5000/api/trpc';
  }
  const trimmed = envUrl.trim().replace(/\/$/, '');
  return trimmed.endsWith('/api/trpc') || trimmed.endsWith('/trpc')
    ? trimmed
    : `${trimmed}/api/trpc`;
}

export function getBackendUrl(): string {
  const apiUrl = getApiUrl();
  return apiUrl.replace(/\/api\/trpc\/?$/, '').replace(/\/api\/?$/, '').replace(/\/trpc\/?$/, '').replace(/\/$/, '');
}

export const trpcClient = trpc.createClient({
  links: [
    httpBatchLink({
      url: getApiUrl(),
      transformer: superjson,
      fetch(input, init) {
        const token =
          typeof window !== 'undefined'
            ? localStorage.getItem('authToken') || localStorage.getItem('token')
            : null;
        const headers = new Headers(init?.headers || {});

        if (token) {
          headers.set('Authorization', `Bearer ${token}`);
        }

        return globalThis.fetch(input, {
          ...(init ?? {}),
          headers,
        });
      },
    }),
  ],
});

