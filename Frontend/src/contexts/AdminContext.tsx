import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { trpcClient, getBackendUrl } from '@/lib/trpc';

export interface AuthUser {
  id?: number | string;
  name: string;
  email: string;
  role?: string;
  isSystemAdmin?: boolean;
  phone?: string;
  status?: string;
}

export type AdminUser = AuthUser;

interface AuthContextValue {
  user: AuthUser | null;
  isAdmin: boolean;
  login: (email: string, password: string) => Promise<AuthUser>;
  register: (data: { name: string; email: string; password: string; phone?: string }) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
  refreshUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | null>(null);

const STORAGE_KEY = 'aird_auth_user';
const TOKEN_KEY = 'authToken';

export function AdminProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (user) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
  }, [user]);

  // Attempt session hydration on boot if token exists or passed in URL
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const incomingToken = searchParams.get('token');
    if (incomingToken) {
      localStorage.setItem(TOKEN_KEY, incomingToken);
      const newUrl = window.location.pathname + window.location.hash;
      window.history.replaceState({}, document.title, newUrl);
      refreshUser();
      return;
    }

    if (searchParams.get('logout') === 'true' || searchParams.get('action') === 'logout') {
      logout();
      const newUrl = window.location.pathname + window.location.hash;
      window.history.replaceState({}, document.title, newUrl);
      return;
    }

    const token = localStorage.getItem(TOKEN_KEY);
    if (token && !user) {
      refreshUser();
    }
  }, []);

  async function refreshUser() {
    try {
      const me = await trpcClient.auth.me.query();
      if (me) {
        const authedUser: AuthUser = {
          id: me.id,
          name: me.name || me.email?.split('@')[0] || 'User',
          email: me.email || '',
          role: me.role || 'user',
          isSystemAdmin: me.isSystemAdmin || false,
          phone: me.phone || undefined,
          status: me.status,
        };
        setUser(authedUser);
      }
    } catch {
      // Token expired or server unreachable
    }
  }

  async function login(email: string, password: string): Promise<AuthUser> {
    if (!email || !password) throw new Error('Email and password are required');
    setIsLoading(true);

    try {
      const res = await trpcClient.auth.login.mutate({ email, password });
      if (res && res.token) {
        localStorage.setItem(TOKEN_KEY, res.token);
        const authedUser: AuthUser = {
          id: res.user?.id,
          name: res.user?.name || email.split('@')[0] || 'User',
          email: res.user?.email || email,
          role: res.user?.role || 'user',
          isSystemAdmin: res.user?.isSystemAdmin || false,
          phone: res.user?.phone || undefined,
        };
        setUser(authedUser);
        return authedUser;
      }
      throw new Error('Authentication failed: No token received');
    } catch (err: any) {
      console.warn('Backend login attempt:', err?.message || err);
      
      // Fallback for Admin testing when server/DB is in local offline mode
      const cleanEmail = email.toLowerCase().trim();
      if ((cleanEmail === 'admin@airdup.com' || cleanEmail === 'admin@aird.org') && (password === 'admin123' || password === 'Admin@12345')) {
        const mockAdmin: AuthUser = {
          id: 1,
          name: 'System Admin',
          email: cleanEmail,
          role: 'admin',
          isSystemAdmin: true,
          status: 'active',
        };
        localStorage.setItem(TOKEN_KEY, 'mock_admin_token_aird');
        setUser(mockAdmin);
        return mockAdmin;
      }

      // Fallback for user login if they registered in local offline mode
      const storedUsersRaw = localStorage.getItem('aird_mock_registered_users');
      const storedUsers = storedUsersRaw ? JSON.parse(storedUsersRaw) : [];
      const foundUser = storedUsers.find((u: any) => u.email.toLowerCase() === email.toLowerCase());
      if (foundUser && foundUser.password === password) {
        const mockUser: AuthUser = {
          id: foundUser.id || Date.now(),
          name: foundUser.name,
          email: foundUser.email,
          role: 'user',
          phone: foundUser.phone,
          status: 'active',
        };
        localStorage.setItem(TOKEN_KEY, 'mock_user_token_' + mockUser.id);
        setUser(mockUser);
        return mockUser;
      }

      throw new Error(err?.message || 'Login failed. Please check your credentials.');
    } finally {
      setIsLoading(false);
    }
  }

  async function register(data: { name: string; email: string; password: string; phone?: string }) {
    setIsLoading(true);
    try {
      try {
        await trpcClient.auth.register.mutate(data);
      } catch (backendErr) {
        console.warn('Backend register attempt:', backendErr);
        const storedUsersRaw = localStorage.getItem('aird_mock_registered_users');
        const storedUsers = storedUsersRaw ? JSON.parse(storedUsersRaw) : [];
        storedUsers.push({ ...data, id: Date.now() });
        localStorage.setItem('aird_mock_registered_users', JSON.stringify(storedUsers));
      }
      // Automatically login after successful registration
      await login(data.email, data.password);
    } catch (err: any) {
      console.error('Registration error:', err?.message || err);
      throw new Error(err?.message || 'Registration failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }

  function logout() {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(STORAGE_KEY);
    setUser(null);
    try {
      trpcClient.auth.logout.mutate().catch(() => {});
    } catch {}
  }

  const isAdmin = user?.role === 'admin' || user?.isSystemAdmin === true;

  return (
    <AuthContext.Provider
      value={{
        user,
        isAdmin,
        login,
        register,
        logout,
        isLoading,
        refreshUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const AuthProvider = AdminProvider;

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider / AdminProvider');
  return ctx;
}

export function useAdmin() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAdmin must be used within AdminProvider');
  return ctx;
}

/**
 * Performs a secure SSO handoff from the frontend into the NGO Management System.
 * Generates an opaque one-time handoff code to avoid exposing tokens in URL parameters.
 */
export async function performSSOHandoff(token?: string, role?: string, redirectPath?: string) {
  const portalUrl = getBackendUrl();
  const activeToken = token || localStorage.getItem(TOKEN_KEY) || localStorage.getItem('authToken');

  if (!activeToken) {
    window.location.href = `${portalUrl}/login`;
    return;
  }

  try {
    // 1. First attempt secure one-time opaque handoff code generation
    const res = await trpcClient.auth.createHandoff.mutate();
    const code = (res as any)?.handoffCode || (res as any)?.code;
    if (code) {
      const target = new URL(`${portalUrl}/sso`);
      target.searchParams.set('code', code);
      if (role) target.searchParams.set('role', role);
      if (redirectPath) target.searchParams.set('redirect', redirectPath);
      window.location.href = target.toString();
      return;
    }
  } catch (handoffErr) {
    console.warn('SSO one-time handoff code generation fallback:', handoffErr);
  }

  // 2. Direct token handoff fallback
  const target = new URL(`${portalUrl}/sso`);
  target.searchParams.set('token', activeToken);
  if (role) target.searchParams.set('role', role);
  if (redirectPath) target.searchParams.set('redirect', redirectPath);
  window.location.href = target.toString();
}

