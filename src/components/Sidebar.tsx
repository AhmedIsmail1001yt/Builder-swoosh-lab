import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Home,
  Server,
  HardDrive,
  BarChart3,
  ArrowRightLeft,
  CheckCircle2,
  Settings,
  Users,
  Activity,
} from "lucide-react";

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const navigationItems = [
  { id: "overview", label: "Overview", icon: Home },
  { id: "compute", label: "Compute Nodes", icon: Server },
  { id: "vms", label: "Virtual Machines", icon: HardDrive },
  { id: "resources", label: "Resource Distribution", icon: BarChart3 },
  { id: "migration", label: "Migration Advice", icon: ArrowRightLeft },
  { id: "results", label: "Migration Results", icon: CheckCircle2 },
  { id: "monitoring", label: "Monitoring", icon: Activity },
  { id: "users", label: "Users", icon: Users },
  { id: "settings", label: "Settings", icon: Settings },
];

export const Sidebar = ({ activeTab, onTabChange }: SidebarProps) => {
  return (
    <div className="w-64 h-screen bg-sidebar border-r border-sidebar-border flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-sidebar-border">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <Server className="w-5 h-5 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-lg font-semibold text-sidebar-foreground">
              B'GREEN
            </h1>
            <p className="text-xs text-sidebar-foreground/60">Cloud Manager</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          return (
            <Button
              key={item.id}
              variant={isActive ? "default" : "ghost"}
              className={cn(
                "w-full justify-start gap-3 h-10",
                isActive
                  ? "bg-sidebar-accent text-sidebar-accent-foreground"
                  : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
              )}
              onClick={() => onTabChange(item.id)}
            >
              <Icon className="w-4 h-4" />
              <span className="text-sm">{item.label}</span>
            </Button>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-sidebar-border">
        <div className="flex items-center gap-3 p-3 rounded-lg bg-sidebar-accent">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <span className="text-xs font-medium text-primary-foreground">
              JD
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-sidebar-foreground truncate">
              John Doe
            </p>
            <p className="text-xs text-sidebar-foreground/60 truncate">
              System Admin
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
