/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_TRPC_URL?: string;
  readonly VITE_VERIFY_URL?: string;
  readonly VITE_RAZORPAY_KEY_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
