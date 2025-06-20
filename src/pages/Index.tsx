import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { StatsCard } from "@/components/StatsCard";
import { ResourceChart } from "@/components/ResourceChart";
import { MigrationAdvice } from "@/components/MigrationAdvice";
import { MigrationResults } from "@/components/MigrationResults";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Server,
  HardDrive,
  Activity,
  Zap,
  CheckCircle2,
  AlertTriangle,
  Play,
  Pause,
  MoreHorizontal,
} from "lucide-react";

const Index = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const handleApprove = (migrationId: number) => {
    console.log(`Approved migration ${migrationId}`);
    // Handle migration approval logic here
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <div className="space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatsCard
                title="Compute Nodes"
                value="4"
                change="+2 from last month"
                changeType="positive"
                icon={Server}
              />
              <StatsCard
                title="Virtual Machines"
                value="23"
                change="+5 from last week"
                changeType="positive"
                icon={HardDrive}
              />
              <StatsCard
                title="Total CPU Usage"
                value="67.8%"
                change="-5% from yesterday"
                changeType="positive"
                icon={Activity}
              />
              <StatsCard
                title="Power Efficiency"
                value="92.4%"
                change="+3.2% this week"
                changeType="positive"
                icon={Zap}
              />
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <ResourceChart />
              <div className="space-y-6">
                <MigrationAdvice onApprove={handleApprove} />
              </div>
            </div>

            {/* Migration Results */}
            <MigrationResults />
          </div>
        );

      case "compute":
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-foreground">
                Compute Nodes
              </h2>
              <Button>Add Node</Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4].map((node) => (
                <Card key={node}>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-lg font-semibold">
                      node-0{node}
                    </CardTitle>
                    <Badge variant={node % 2 === 0 ? "default" : "secondary"}>
                      {node % 2 === 0 ? "Active" : "Standby"}
                    </Badge>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">CPU Usage</span>
                        <span className="font-medium">{65 + node * 5}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full"
                          style={{ width: `${65 + node * 5}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Memory</span>
                        <span className="font-medium">{70 + node * 3}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="bg-orange-500 h-2 rounded-full"
                          style={{ width: `${70 + node * 3}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="flex gap-2 pt-2">
                      <Button size="sm" variant="outline" className="flex-1">
                        <Play className="w-3 h-3 mr-1" />
                        Manage
                      </Button>
                      <Button size="sm" variant="outline">
                        <MoreHorizontal className="w-3 h-3" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      case "vms":
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-foreground">
                Virtual Machines
              </h2>
              <Button>Create VM</Button>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>VM Status Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    "VM-PROD-001",
                    "VM-DEV-005",
                    "VM-TEST-003",
                    "VM-STAGE-002",
                  ].map((vm, index) => (
                    <div
                      key={vm}
                      className="flex items-center justify-between p-3 border border-border rounded-lg"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-3 h-3 rounded-full ${
                            index % 3 === 0
                              ? "bg-primary"
                              : index % 3 === 1
                                ? "bg-orange-500"
                                : "bg-green-500"
                          }`}
                        ></div>
                        <span className="font-medium">{vm}</span>
                        <Badge variant="outline" className="text-xs">
                          node-0{(index % 4) + 1}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground">
                          {index % 3 === 0
                            ? "Running"
                            : index % 3 === 1
                              ? "Migrating"
                              : "Stopped"}
                        </span>
                        <Button size="sm" variant="outline">
                          Manage
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case "resources":
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground">
              Resource Distribution
            </h2>
            <ResourceChart />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <StatsCard
                title="Total CPU Cores"
                value="128"
                change="67.8% utilized"
                changeType="neutral"
                icon={Activity}
              />
              <StatsCard
                title="Total Memory"
                value="512 GB"
                change="74.2% utilized"
                changeType="neutral"
                icon={HardDrive}
              />
              <StatsCard
                title="Total Storage"
                value="2.5 TB"
                change="56.3% utilized"
                changeType="neutral"
                icon={Server}
              />
            </div>
          </div>
        );

      case "migration":
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground">
              Migration Advice
            </h2>
            <MigrationAdvice onApprove={handleApprove} />
          </div>
        );

      case "results":
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground">
              Migration Results
            </h2>
            <MigrationResults />
          </div>
        );

      default:
        return (
          <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <h3 className="text-lg font-medium text-foreground">
                Coming Soon
              </h3>
              <p className="text-muted-foreground">
                This section is under development.
              </p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="flex h-screen bg-background">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="flex-1 overflow-auto">
        <div className="p-6">{renderTabContent()}</div>
      </main>
    </div>
  );
};

export default Index;
