import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  LineChart, Line, PieChart, Pie, Cell,
} from 'recharts';
import { useDashboardMetrics, useVillagers, useDonors, useEvents } from '@/hooks/useApi';
import { formatINR, plural } from '@/lib/utils';
import { Users, DollarSign, CalendarDays, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const PIE_COLORS = ['#f59e0b', '#15803d', '#065f46', '#d97706'];

function StatCard({ icon: Icon, label, value, sub }: { icon: React.ComponentType<{ className?: string }>; label: string; value: string; sub?: string }) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-ink/60">{label}</CardTitle>
        <Icon className="h-4 w-4 text-saffron-500" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-saffron-800">{value}</div>
        {sub && <p className="text-xs text-ink/40 mt-1">{sub}</p>}
      </CardContent>
    </Card>
  );
}

export default function AdminDashboard() {
  const { data: metrics, isLoading: mLoading } = useDashboardMetrics();
  const { data: villagers, isLoading: vLoading } = useVillagers();
  const { data: donors, isLoading: dLoading } = useDonors();
  const { data: events, isLoading: eLoading } = useEvents();

  const loading = mLoading || vLoading || dLoading || eLoading;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-saffron-800">Dashboard</h1>
        <p className="text-sm text-ink/50">Overview of AIRD operations and metrics</p>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          icon={Users}
          label="Villagers"
          value={vLoading ? '...' : String(villagers?.length ?? 0)}
          sub={plural(villagers?.filter((v) => v.isPop).length ?? 0, 'PoP household')}
        />
        <StatCard
          icon={DollarSign}
          label="Total Donations"
          value={dLoading ? '...' : formatINR(metrics?.totalDonations ?? 0)}
          sub={`${donors?.length ?? 0} donors`}
        />
        <StatCard
          icon={CalendarDays}
          label="Events"
          value={eLoading ? '...' : String(events?.length ?? 0)}
          sub={plural(events?.filter((e) => e.isCompleted).length ?? 0, 'completed')}
        />
        <StatCard
          icon={TrendingUp}
          label="Membership Fees"
          value={mLoading ? '...' : formatINR(metrics?.totalMembershipFees ?? 0)}
          sub="Collected this year"
        />
      </div>

      {/* Charts */}
      {loading ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {[1, 2].map((i) => (
            <Card key={i}>
              <CardContent className="h-72 animate-pulse bg-saffron-50 rounded-xl" />
            </Card>
          ))}
        </div>
      ) : metrics ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Donations vs Fees bar chart */}
          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium text-ink/60">Monthly Donations vs Fees</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={260}>
                <BarChart data={metrics.monthlyFlow}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f5f0e0" />
                  <XAxis dataKey="month" tick={{ fontSize: 12 }} stroke="#a8a29e" />
                  <YAxis tick={{ fontSize: 12 }} stroke="#a8a29e" />
                  <Tooltip formatter={(v) => formatINR(v as number)} />
                  <Legend />
                  <Bar dataKey="donations" fill="#f59e0b" radius={[4, 4, 0, 0]} name="Donations" />
                  <Bar dataKey="fees" fill="#15803d" radius={[4, 4, 0, 0]} name="Fees" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Member growth line chart */}
          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium text-ink/60">Member Growth by Category</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={260}>
                <LineChart data={metrics.memberCounts}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f5f0e0" />
                  <XAxis dataKey="month" tick={{ fontSize: 12 }} stroke="#a8a29e" />
                  <YAxis tick={{ fontSize: 12 }} stroke="#a8a29e" />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="general" stroke="#f59e0b" strokeWidth={2} name="General" />
                  <Line type="monotone" dataKey="special" stroke="#15803d" strokeWidth={2} name="Special" />
                  <Line type="monotone" dataKey="executive" stroke="#065f46" strokeWidth={2} name="Executive" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      ) : null}

      {/* Demographics Pie */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-medium text-ink/60">Village Demographics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center gap-8 flex-wrap">
            <ResponsiveContainer width={300} height={260}>
              <PieChart>
                <Pie
                  data={[
                    { name: 'General', value: 120, color: '#f59e0b' },
                    { name: 'OBC', value: 85, color: '#15803d' },
                    { name: 'SC', value: 45, color: '#065f46' },
                    { name: 'ST', value: 15, color: '#d97706' },
                  ]}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${((percent ?? 0) * 100).toFixed(0)}%`}
                >
                  {PIE_COLORS.map((color, i) => (
                    <Cell key={i} fill={color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="space-y-2 text-sm">
              {[
                { label: 'General', value: 120, color: '#f59e0b' },
                { label: 'OBC', value: 85, color: '#15803d' },
                { label: 'SC', value: 45, color: '#065f46' },
                { label: 'ST', value: 15, color: '#d97706' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="text-ink/70">{item.label}</span>
                  <span className="font-semibold text-ink/80">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
