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
  { id: "migration", label: "Migration Advice", icon: ArrowRightLeft },
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
            <h1 className="text-xl font-bold text-sidebar-foreground">
              B'GREEN
            </h1>
            <p className="text-sm text-sidebar-foreground/70 font-medium">
              Migration Advisor
            </p>
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
      <div className="p-6 border-t border-sidebar-border">
        <div className="text-center">
          <p className="text-sm text-sidebar-foreground/70 font-medium">
            AI-Powered Migration
          </p>
          <p className="text-xs text-sidebar-foreground/50 mt-1">
            Optimize • Migrate • Save
          </p>
        </div>
      </div>
    </div>
  );
};
