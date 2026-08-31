import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth, performSSOHandoff } from '@/contexts/AdminContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { toast } from 'sonner';
import { Lock, Mail, ArrowRight, ShieldCheck, Loader2 } from 'lucide-react';
import { PageHero } from '@/components/shared/PageHero';
import { Breadcrumb } from '@/components/shared/Breadcrumb';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isHandoff, setIsHandoff] = useState(false);
  const { login, isLoading } = useAuth();
  const location = useLocation();

  const redirectParam = (location.state as any)?.from?.pathname || new URLSearchParams(window.location.search).get('redirect') || null;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !password) {
      toast.error('Please enter both email and password');
      return;
    }

    try {
      const user = await login(email, password);
      toast.success(`Welcome back, ${user.name}! Transferring to management portal...`);
      setIsHandoff(true);

      const targetRole = user.role === 'admin' || user.isSystemAdmin ? 'admin' : 'user';
      const targetPath = redirectParam || (targetRole === 'admin' ? '/admin' : '/member-dashboard');

      await performSSOHandoff(undefined, targetRole, targetPath);
    } catch (err: any) {
      setIsHandoff(false);
      toast.error(err?.message || 'Login failed. Please check your credentials.');
    }
  }

  return (
    <>
      <PageHero
        title="Member & Admin Sign In"
        subtitle="Access your membership records, digital credentials, and trust resources."
        gradient="saffron"
      />
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Sign In' }]} />

      <section className="section-py container-px flex items-center justify-center">
        <Card className="w-full max-w-md shadow-xl border-saffron-100">
          <CardHeader className="text-center pb-2">
            <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-saffron-50 text-saffron-600 shadow-inner">
              <ShieldCheck className="h-7 w-7" />
            </div>
            <CardTitle className="text-2xl font-bold text-ink">Sign In</CardTitle>
            <CardDescription className="text-sm text-ink/60">
              Enter your credentials to access the management portal
            </CardDescription>
          </CardHeader>

          <CardContent className="pt-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <Label htmlFor="email">Email Address</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-ink/40" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-9"
                    required
                    disabled={isLoading || isHandoff}
                    autoFocus
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-ink/40" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-9"
                    required
                    disabled={isLoading || isHandoff}
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-saffron-600 hover:bg-saffron-700 text-white mt-2"
                disabled={isLoading || isHandoff}
              >
                {isHandoff ? (
                  <span className="flex items-center gap-2">
                    <Loader2 className="h-4 w-4 animate-spin" /> Transferring to Portal...
                  </span>
                ) : isLoading ? (
                  <span className="flex items-center gap-2">
                    <Loader2 className="h-4 w-4 animate-spin" /> Signing In...
                  </span>
                ) : (
                  <>
                    Sign In &amp; Enter Portal <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>

              <div className="mt-6 text-center text-xs text-ink/60 space-y-2">
                <p>
                  Don't have an account yet?{' '}
                  <Link to="/signup" className="font-semibold text-saffron-700 hover:underline">
                    Create an account
                  </Link>
                </p>
                <p>
                  Applying for formal Gram Samaj membership?{' '}
                  <Link to="/membership" className="font-semibold text-forest-700 hover:underline">
                    Fill Membership Form
                  </Link>
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </section>
    </>
  );
}
