import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth, performSSOHandoff } from '@/contexts/AdminContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { toast } from 'sonner';
import { Lock, Mail, User, Phone, ArrowRight, UserPlus, Loader2 } from 'lucide-react';
import { PageHero } from '@/components/shared/PageHero';
import { Breadcrumb } from '@/components/shared/Breadcrumb';

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isHandoff, setIsHandoff] = useState(false);
  const { register, isLoading } = useAuth();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name || !email || !password) {
      toast.error('Please fill in all required fields');
      return;
    }

    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    if (password.length < 6) {
      toast.error('Password must be at least 6 characters long');
      return;
    }

    try {
      await register({
        name,
        email,
        password,
        phone: phone || undefined,
      });
      toast.success('Account created successfully! Transferring to management portal...');
      setIsHandoff(true);

      const token = localStorage.getItem('authToken') || localStorage.getItem('token') || undefined;
      await performSSOHandoff(token, 'user', '/member-dashboard');
    } catch (err: any) {
      setIsHandoff(false);
      toast.error(err?.message || 'Failed to create account. Please check the information provided.');
    }
  }

  return (
    <>
      <PageHero
        title="Create an Account"
        subtitle="Join our community of rural changemakers and supporters."
        gradient="saffron"
      />
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Sign Up' }]} />

      <section className="section-py container-px flex items-center justify-center">
        <Card className="w-full max-w-md shadow-xl border-saffron-100">
          <CardHeader className="text-center pb-2">
            <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-forest-50 text-forest-600 shadow-inner">
              <UserPlus className="h-7 w-7" />
            </div>
            <CardTitle className="text-2xl font-bold text-ink">Sign Up</CardTitle>
            <CardDescription className="text-sm text-ink/60">
              Create your AIRD profile in seconds
            </CardDescription>
          </CardHeader>

          <CardContent className="pt-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <Label htmlFor="name">Full Name *</Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-ink/40" />
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="pl-9"
                    required
                    disabled={isLoading || isHandoff}
                    autoFocus
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="email">Email Address *</Label>
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
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="phone">Phone Number (10 Digits)</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 h-4 w-4 text-ink/40" />
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="9876543210"
                    maxLength={10}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                    disabled={isLoading || isHandoff}
                    className="pl-9"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="password">Password *</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-ink/40" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="Min 6 characters"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-9"
                    required
                    disabled={isLoading || isHandoff}
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="confirmPassword">Confirm Password *</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-ink/40" />
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="Re-enter your password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="pl-9"
                    required
                    disabled={isLoading || isHandoff}
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-forest-600 hover:bg-forest-700 text-white mt-2"
                disabled={isLoading || isHandoff}
              >
                {isHandoff ? (
                  <span className="flex items-center gap-2">
                    <Loader2 className="h-4 w-4 animate-spin" /> Transferring to Portal...
                  </span>
                ) : isLoading ? (
                  <span className="flex items-center gap-2">
                    <Loader2 className="h-4 w-4 animate-spin" /> Creating account...
                  </span>
                ) : (
                  <>
                    Create Account &amp; Enter Portal <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>

              <div className="mt-6 text-center text-xs text-ink/60 space-y-2">
                <p>
                  Already have an account?{' '}
                  <Link to="/login" className="font-semibold text-saffron-700 hover:underline">
                    Sign In here
                  </Link>
                </p>
                <p>
                  Looking to become an official trust member?{' '}
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
