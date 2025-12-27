"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  Users,
  Settings,
  FileText,
  BarChart3,
  ChevronLeft,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSidebar } from "@/hooks/useSidebar";
import { cn } from "@/lib/utils";
import type { NavItem } from "@/types";

const navItems: NavItem[] = [
  { label: "Dashboard", href: "/", icon: LayoutDashboard },
  { label: "Users", href: "/users", icon: Users },
  { label: "Analytics", href: "/analytics", icon: BarChart3 },
  { label: "Reports", href: "/reports", icon: FileText },
  { label: "Settings", href: "/settings", icon: Settings },
];

export default function Sidebar() {
  const { isOpen, toggle, isMobile } = useSidebar();
  const pathname = usePathname();

  return (
    <>
      <AnimatePresence>
        {isMobile && isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggle}
            className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          />
        )}
      </AnimatePresence>

      <motion.aside
        initial={false}
        animate={{
          width: isOpen ? (isMobile ? "280px" : "280px") : "0px",
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={cn(
          "fixed left-0 top-0 z-40 h-screen overflow-hidden bg-primary",
          isMobile ? "lg:relative" : "lg:relative"
        )}
      >
        <div className="flex h-full w-[280px] flex-col">
          <div className="flex h-16 items-center justify-between border-b border-primary-400/30 px-6">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: isOpen ? 1 : 0 }}
              className="text-2xl font-bold text-white"
            >
              v7_Admin
            </motion.h1>
            <button
              onClick={toggle}
              className="rounded-lg p-1.5 text-white/70 transition-colors hover:bg-primary-400/20 hover:text-white"
              aria-label="Toggle sidebar"
            >
              <ChevronLeft
                className={cn(
                  "h-5 w-5 transition-transform duration-300",
                  !isOpen && "rotate-180"
                )}
              />
            </button>
          </div>

          <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-4">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;

              return (
                <Link key={item.href} href={item.href}>
                  <motion.div
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                    className={cn(
                      "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                      isActive
                        ? "bg-secondary text-white shadow-sm"
                        : "text-white/80 hover:bg-primary-400/20 hover:text-white"
                    )}
                  >
                    <Icon className="h-5 w-5 flex-shrink-0" />
                    <span>{item.label}</span>
                  </motion.div>
                </Link>
              );
            })}
          </nav>

          <div className="border-t border-primary-400/30 p-4">
            <div className="flex items-center gap-3 rounded-lg bg-primary-400/20 px-3 py-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-sm font-semibold text-white">
                VK
              </div>
              <div className="flex-1 overflow-hidden">
                <p className="truncate text-sm font-medium text-white">
                  Vaibhaw Kumar
                </p>
                <p className="truncate text-xs text-white/70">Admin</p>
              </div>
            </div>
          </div>
        </div>
      </motion.aside>
    </>
  );
}
