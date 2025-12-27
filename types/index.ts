export interface User {
    id: string;
    name: string;
    email: string;
    avatar?: string;
    role: string;
}

export interface NavItem {
    label: string;
    href: string;
    icon: React.ComponentType<{ className?: string }>;
}

export interface StatsCardProps {
    title: string;
    value: string | number;
    change: number;
    icon: React.ComponentType<{ className?: string }>;
}

export interface ActivityItem {
    id: string;
    user: string;
    action: string;
    timestamp: string;
    avatar?: string;
}
