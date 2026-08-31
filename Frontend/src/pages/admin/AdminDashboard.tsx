import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  LineChart, Line, PieChart, Pie, Cell,
} from 'recharts';
import { useDashboardMetrics, useVillagers, useDonors, useEvents, useVillageDemographics } from '@/hooks/useApi';
import { formatINR, plural } from '@/lib/utils';
import { Users, DollarSign, CalendarDays, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const PIE_COLORS = ['#f59e0b', '#15803d', '#065f46', '#d97706'];

function StatCard({ icon: Icon, label, value, sub }: { icon: React.ComponentType<{ className?: string }>; label: string; value: string; sub?: string }) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-ink/60 break-words">{label}</CardTitle>
        <Icon className="h-4 w-4 text-saffron-500 shrink-0" />
      </CardHeader>
      <CardContent>
        <div className="text-xl sm:text-2xl font-bold text-saffron-800 break-words">{value}</div>
        {sub && <p className="text-xs text-ink/40 mt-1 break-words">{sub}</p>}
      </CardContent>
    </Card>
  );
}

export default function AdminDashboard() {
  const { data: metrics, isLoading: mLoading } = useDashboardMetrics();
  const { data: villagers, isLoading: vLoading } = useVillagers();
  const { data: donors, isLoading: dLoading } = useDonors();
  const { data: events, isLoading: eLoading } = useEvents();
  const { data: demographics } = useVillageDemographics();

  const loading = mLoading || vLoading || dLoading || eLoading;

  const demoData = (demographics && Array.isArray(demographics) ? demographics : []).map((d: { name: string; value: number }, i: number) => ({
    name: d.name,
    value: d.value,
    color: PIE_COLORS[i % PIE_COLORS.length],
  }));

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
          sub={plural(villagers?.filter((v: any) => v.isPop).length ?? 0, 'PoP household')}
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
          sub={plural(events?.filter((e: any) => e.isCompleted).length ?? 0, 'completed')}
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
                  data={demoData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${((percent ?? 0) * 100).toFixed(0)}%`}
                >
                  {demoData.map((entry: { color: string }, i: number) => (
                    <Cell key={i} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="space-y-2 text-sm">
              {demoData.map((item: { name: string; value: number; color: string }) => (
                <div key={item.name} className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="text-ink/70">{item.name}</span>
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
