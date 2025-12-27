"use client";

import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import type { ActivityItem } from "@/types";

const mockActivities: ActivityItem[] = [
  {
    id: "1",
    user: "John Doe",
    action: "Created a new project",
    timestamp: "2 minutes ago",
  },
  {
    id: "2",
    user: "Jane Smith",
    action: "Updated user profile",
    timestamp: "15 minutes ago",
  },
  {
    id: "3",
    user: "Mike Johnson",
    action: "Deleted a report",
    timestamp: "1 hour ago",
  },
  {
    id: "4",
    user: "Sarah Williams",
    action: "Added new team member",
    timestamp: "2 hours ago",
  },
  {
    id: "5",
    user: "Tom Brown",
    action: "Exported analytics data",
    timestamp: "3 hours ago",
  },
];

export default function RecentActivity() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.4 }}
      className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
    >
      <h3 className="mb-4 text-lg font-semibold text-gray-900">
        Recent Activity
      </h3>
      <div className="space-y-4">
        {mockActivities.map((activity, index) => (
          <motion.div
            key={activity.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
            className="flex items-start gap-3 border-b border-gray-100 pb-3 last:border-0 last:pb-0"
          >
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary-50 text-sm font-semibold text-primary">
              {activity.user
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">
                {activity.user}
              </p>
              <p className="text-sm text-gray-600">{activity.action}</p>
              <div className="mt-1 flex items-center gap-1 text-xs text-gray-500">
                <Clock className="h-3 w-3" />
                <span>{activity.timestamp}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
