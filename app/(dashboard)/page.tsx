import type { Metadata } from "next";
import StatsCard from "@/components/dashboard/StatsCard";
import RecentActivity from "@/components/dashboard/RecentActivity";
import DataTable from "@/components/dashboard/DataTable";
import {
  Users,
  DollarSign,
  ShoppingCart,
  TrendingUp,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Admin dashboard overview with statistics and analytics",
};

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="mt-1 text-gray-600">
          Welcome back! Here's what's happening today.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total Users"
          value="12,543"
          change={12.5}
          icon={Users}
          index={0}
        />
        <StatsCard
          title="Revenue"
          value="$45,231"
          change={8.3}
          icon={DollarSign}
          index={1}
        />
        <StatsCard
          title="Orders"
          value="3,456"
          change={-2.4}
          icon={ShoppingCart}
          index={2}
        />
        <StatsCard
          title="Growth"
          value="23.5%"
          change={5.7}
          icon={TrendingUp}
          index={3}
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <DataTable />
        <RecentActivity />
      </div>
    </div>
  );
}
