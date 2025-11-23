"use client";

import { BarChart3, TrendingUp, Users, DollarSign, ArrowUpRight, ArrowDownRight } from "lucide-react";

export default function DashboardPage() {
  // Mock data - in production, fetch from Supabase
  const stats = {
    revenue: { value: "Rp 45.2M", change: "+12.5%", trend: "up" as const },
    users: { value: "1,234", change: "+8.3%", trend: "up" as const },
    conversion: { value: "3.2%", change: "-0.5%", trend: "down" as const },
    events: { value: "89,542", change: "+15.2%", trend: "up" as const },
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard Overview</h1>
          <p className="text-gray-600 mt-2">Real-time analytics dan insights untuk bisnis Anda</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            icon={<DollarSign className="w-8 h-8" />}
            title="Total Revenue"
            value={stats.revenue.value}
            change={stats.revenue.change}
            trend={stats.revenue.trend}
          />
          <StatCard
            icon={<Users className="w-8 h-8" />}
            title="Active Users"
            value={stats.users.value}
            change={stats.users.change}
            trend={stats.users.trend}
          />
          <StatCard
            icon={<TrendingUp className="w-8 h-8" />}
            title="Conversion Rate"
            value={stats.conversion.value}
            change={stats.conversion.change}
            trend={stats.conversion.trend}
          />
          <StatCard
            icon={<BarChart3 className="w-8 h-8" />}
            title="Total Events"
            value={stats.events.value}
            change={stats.events.change}
            trend={stats.events.trend}
          />
        </div>

        {/* Charts Placeholder */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Revenue Trend</h3>
            <div className="h-64 flex items-center justify-center text-gray-400 border-2 border-dashed border-gray-200 rounded-lg">
              <div className="text-center">
                <BarChart3 className="w-16 h-16 mx-auto mb-2" />
                <p>Chart visualization akan muncul di sini</p>
                <p className="text-sm">(Requires Recharts integration)</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Traffic Sources</h3>
            <div className="h-64 flex items-center justify-center text-gray-400 border-2 border-dashed border-gray-200 rounded-lg">
              <div className="text-center">
                <Users className="w-16 h-16 mx-auto mb-2" />
                <p>Pie chart visualization</p>
                <p className="text-sm">(Requires Recharts integration)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
          <div className="space-y-4">
            <ActivityItem
              title="New user signed up"
              time="2 minutes ago"
              type="user"
            />
            <ActivityItem
              title="Revenue milestone reached: Rp 45M"
              time="1 hour ago"
              type="revenue"
            />
            <ActivityItem
              title="Anomaly detected in conversion rate"
              time="3 hours ago"
              type="alert"
            />
            <ActivityItem
              title="New integration connected: Google Analytics"
              time="5 hours ago"
              type="integration"
            />
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 bg-gradient-to-r from-primary-600 to-primary-800 text-white rounded-xl p-6">
          <h3 className="text-xl font-bold mb-4">Quick Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm py-3 px-4 rounded-lg text-left transition-colors">
              <div className="font-semibold">📊 View Full Analytics</div>
              <div className="text-sm text-blue-100 mt-1">Detailed metrics & insights</div>
            </button>
            <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm py-3 px-4 rounded-lg text-left transition-colors">
              <div className="font-semibold">🔌 Connect Data Source</div>
              <div className="text-sm text-blue-100 mt-1">Add new integration</div>
            </button>
            <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm py-3 px-4 rounded-lg text-left transition-colors">
              <div className="font-semibold">📈 Generate Report</div>
              <div className="text-sm text-blue-100 mt-1">Create custom report</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  change: string;
  trend: "up" | "down";
}

function StatCard({ icon, title, value, change, trend }: StatCardProps) {
  const isPositive = trend === "up";
  
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <div className="flex items-center justify-between mb-4">
        <div className="text-primary-600">{icon}</div>
        <div className={`flex items-center text-sm font-semibold ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
          {isPositive ? <ArrowUpRight className="w-4 h-4 mr-1" /> : <ArrowDownRight className="w-4 h-4 mr-1" />}
          {change}
        </div>
      </div>
      <div className="text-2xl font-bold text-gray-900 mb-1">{value}</div>
      <div className="text-sm text-gray-600">{title}</div>
    </div>
  );
}

function ActivityItem({ title, time, type }: { title: string; time: string; type: string }) {
  const getIcon = () => {
    switch (type) {
      case "user": return "👤";
      case "revenue": return "💰";
      case "alert": return "⚠️";
      case "integration": return "🔌";
      default: return "📊";
    }
  };

  return (
    <div className="flex items-start space-x-3 py-3 border-b border-gray-100 last:border-b-0">
      <span className="text-2xl">{getIcon()}</span>
      <div className="flex-1">
        <p className="text-gray-900">{title}</p>
        <p className="text-sm text-gray-500">{time}</p>
      </div>
    </div>
  );
}
