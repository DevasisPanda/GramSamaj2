import { createContext, useContext, useState, type ReactNode } from 'react';

/**
 * Admin auth context — STUB.
 *
 * This is a placeholder so admin routes are reachable while the real
 * authentication + member system is built in `ngo-management-system`.
 * Any non-empty credential pair is accepted in demo mode. Replace with the
 * real tRPC `auth.login` mutation + JWT session when the backend connects.
 */

interface AdminUser {
  name: string;
  email: string;
}

interface AdminContextValue {
  user: AdminUser | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AdminContext = createContext<AdminContextValue | null>(null);

export function AdminProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AdminUser | null>(null);

  async function login(email: string, password: string) {
    if (!email || !password) throw new Error('Email and password are required');
    // Demo: accept anything. Real auth comes with the backend.
    setUser({ name: email.split('@')[0] || 'Admin', email });
  }

  function logout() {
    setUser(null);
  }

  return <AdminContext.Provider value={{ user, login, logout }}>{children}</AdminContext.Provider>;
}

export function useAdmin() {
  const ctx = useContext(AdminContext);
  if (!ctx) throw new Error('useAdmin must be used within AdminProvider');
  return ctx;
}
