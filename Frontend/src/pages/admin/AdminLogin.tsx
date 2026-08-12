import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAdmin } from '@/contexts/AdminContext';
import { AIRD } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { Lock, Mail } from 'lucide-react';

export default function AdminLogin() {
  const { login, user } = useAdmin();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      await login(email, password);
      toast.success('Welcome back!');
      navigate('/admin');
    } catch {
      toast.error('Please enter email and password');
    } finally {
      setLoading(false);
    }
  }

  // Already logged in — redirect
  if (user) {
    navigate('/admin');
    return null;
  }

  return (
    <div className="min-h-screen gradient-hero flex items-center justify-center px-4">
      <div className="w-full max-w-md card-surface p-8 space-y-6">
        <div className="text-center space-y-2">
          <div className="h-14 w-14 rounded-2xl gradient-saffron grid place-items-center text-white font-bold text-xl mx-auto">
            A
          </div>
          <h1 className="text-2xl font-bold text-saffron-800">{AIRD.shortName} Admin</h1>
          <p className="text-sm text-ink/50">Sign in to manage the platform (demo mode)</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1.5">
            <Label htmlFor="email">Email</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-ink/30" />
              <Input
                id="email"
                type="email"
                placeholder="admin@airdup.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-9"
                required
              />
            </div>
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-ink/30" />
              <Input
                id="password"
                type="password"
                placeholder="Any password works in demo"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-9"
                required
              />
            </div>
          </div>
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? 'Signing in...' : 'Sign In'}
          </Button>
        </form>

        <p className="text-center text-xs text-ink/30">
          Demo mode — any email/password combination is accepted.
        </p>
      </div>
    </div>
  );
}
