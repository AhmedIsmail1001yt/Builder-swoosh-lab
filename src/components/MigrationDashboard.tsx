import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRightLeft,
  CheckCircle2,
  AlertTriangle,
  Zap,
  TrendingDown,
  Clock,
  Server,
  HardDrive,
  Activity,
  X,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const nodeData = [
  { name: "node-01", usage: 75, vms: 4, color: "#22c55e" },
  { name: "node-02", usage: 92, vms: 6, color: "#ef4444" },
];

const migrationPaths = [
  {
    id: 1,
    vm: "VM-PROD-001",
    from: "node-02",
    to: "node-01",
    confidence: 95,
    powerSaving: "4.2W",
    efficiency: "+12%",
    priority: "high",
  },
  {
    id: 2,
    vm: "VM-DEV-005",
    from: "node-02",
    to: "node-01",
    confidence: 88,
    powerSaving: "3.8W",
    efficiency: "+8%",
    priority: "medium",
  },
];

export const MigrationDashboard = () => {
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header with Live Status */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 via-emerald-50 to-purple-50 p-8 border-2 border-blue-200/50">
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-5xl font-bold bg-gradient-to-r from-primary via-blue-500 to-green-500 bg-clip-text text-transparent">
                B'GREEN Dashboard
              </h1>
            </div>
            <div className="flex items-center gap-3">
              <div className="px-4 py-2 bg-primary/20 border border-primary/30 rounded-full">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-primary">
                    LIVE ANALYSIS
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats Row */}
          <div className="grid grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">407.2W</div>
              <div className="text-sm text-muted-foreground">
                Verified Power Utilization
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500">3.16%</div>
              <div className="text-sm text-muted-foreground">
                Verified Power Gen
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-500">13.3W</div>
              <div className="text-sm text-muted-foreground">
                Total Power Saved
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-500">95%</div>
              <div className="text-sm text-muted-foreground">
                Optimization Score
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Innovative Two-Column Layout */}
      <div className="grid grid-cols-3 gap-6">
        {/* Left Column - Node & VM Overview */}
        <div className="col-span-1 space-y-6">
          {/* Compute Nodes */}
          <Card className="border-2 border-blue-200/50 bg-gradient-to-br from-blue-50/50 to-white">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Server className="w-5 h-5 text-primary" />
                Compute Nodes
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {nodeData.map((node) => (
                <div key={node.name} className="relative group">
                  <div className="flex items-center justify-between p-3 rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: node.color }}
                      />
                      <div>
                        <div className="font-semibold text-sm">{node.name}</div>
                        <div className="text-xs text-muted-foreground">
                          {node.vms} VMs
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div
                        className="text-sm font-bold"
                        style={{ color: node.color }}
                      >
                        {node.usage}%
                      </div>
                      <div className="w-16 bg-muted rounded-full h-1.5 mt-1">
                        <div
                          className="h-1.5 rounded-full transition-all duration-500"
                          style={{
                            width: `${node.usage}%`,
                            backgroundColor: node.color,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Virtual Machines Summary */}
          <Card className="border-2 border-emerald-200/50 bg-gradient-to-br from-emerald-50/50 to-white">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-lg">
                <HardDrive className="w-5 h-5 text-blue-500" />
                Virtual Machines
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                <div className="text-center p-3 rounded-lg bg-muted/50">
                  <div className="text-2xl font-bold text-foreground">23</div>
                  <div className="text-xs text-muted-foreground">Total VMs</div>
                </div>
                <div className="text-center p-3 rounded-lg bg-muted/50">
                  <div className="text-2xl font-bold text-green-500">3</div>
                  <div className="text-xs text-muted-foreground">
                    Ready to Migrate
                  </div>
                </div>
              </div>

              <div className="mt-4 space-y-2">
                {migrationPaths.map((path) => (
                  <div
                    key={path.id}
                    className="flex items-center justify-between text-sm"
                  >
                    <span className="font-medium">{path.vm}</span>
                    <Badge
                      variant={
                        path.priority === "high" ? "default" : "secondary"
                      }
                      className="text-xs"
                    >
                      {path.priority}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Resource Distribution & Migration Flow */}
        <div className="col-span-2 space-y-6">
          {/* Resource Distribution Chart */}
          <Card className="border-2 border-purple-200/50 bg-gradient-to-br from-purple-50/50 to-white">
            <CardHeader>
              <CardTitle className="text-xl font-bold">
                Resource Distribution by Node
              </CardTitle>
              <p className="text-muted-foreground">
                Current CPU utilization across infrastructure
              </p>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={nodeData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid
                      strokeDasharray="3 3"
                      stroke="hsl(var(--border))"
                    />
                    <XAxis
                      dataKey="name"
                      stroke="hsl(var(--muted-foreground))"
                      fontSize={12}
                    />
                    <YAxis
                      stroke="hsl(var(--muted-foreground))"
                      fontSize={12}
                      label={{
                        value: "CPU Usage (%)",
                        angle: -90,
                        position: "insideLeft",
                      }}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "8px",
                      }}
                      formatter={(value: any, name: any, props: any) => [
                        `${value}% CPU`,
                        `${props.payload.vms} VMs`,
                      ]}
                    />
                    <Line
                      type="monotone"
                      dataKey="usage"
                      stroke="#22c55e"
                      strokeWidth={3}
                      dot={{ fill: "#22c55e", strokeWidth: 2, r: 6 }}
                      activeDot={{ r: 8, stroke: "#22c55e", strokeWidth: 2 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Migration Recommendations - Smart Flow Design */}
          <Card className="border-2 border-orange-200/50 bg-gradient-to-br from-orange-50/50 to-white">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-xl font-bold flex items-center gap-2">
                    <ArrowRightLeft className="w-6 h-6 text-orange-500" />
                    Smart Migration Paths
                  </CardTitle>
                  <p className="text-muted-foreground">
                    AI-optimized workload placement
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-orange-500">3</div>
                  <div className="text-xs text-muted-foreground">
                    Recommendations
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {migrationPaths.map((migration, index) => (
                <div key={migration.id} className="relative">
                  {/* Migration Flow Visualization */}
                  <div className="flex items-center gap-4 p-4 rounded-xl border-2 border-slate-200/50 hover:border-primary/50 transition-all duration-300 bg-gradient-to-r from-blue-50/30 to-emerald-50/30">
                    {/* Priority Badge */}
                    <div className="flex-shrink-0">
                      <Badge
                        variant={
                          migration.priority === "high"
                            ? "default"
                            : migration.priority === "medium"
                              ? "secondary"
                              : "outline"
                        }
                        className="text-xs font-semibold"
                      >
                        #{index + 1}
                      </Badge>
                    </div>

                    {/* Migration Flow */}
                    <div className="flex-1 flex items-center gap-3">
                      <div className="text-center">
                        <div className="text-sm font-semibold">
                          {migration.vm}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {migration.from}
                        </div>
                      </div>

                      <div className="flex-1 relative">
                        <div className="h-0.5 bg-gradient-to-r from-red-500 via-orange-500 to-green-500"></div>
                        <ArrowRightLeft className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-background border rounded-full p-0.5" />
                      </div>

                      <div className="text-center">
                        <div className="text-sm font-semibold text-primary">
                          {migration.to}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Target
                        </div>
                      </div>
                    </div>

                    {/* Metrics */}
                    <div className="flex gap-4 text-center">
                      <div>
                        <div className="text-lg font-bold text-primary">
                          {migration.confidence}%
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Confidence
                        </div>
                      </div>
                      <div>
                        <div className="text-sm font-bold text-green-500">
                          {migration.powerSaving}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Power Save
                        </div>
                      </div>
                      <div>
                        <div className="text-sm font-bold text-blue-500">
                          {migration.efficiency}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Efficiency
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Verified Migration Results */}
      <Card className="border-2 border-green-200/50 bg-gradient-to-br from-green-50/50 to-white">
        <CardHeader>
          <CardTitle className="text-xl font-bold flex items-center gap-2">
            <CheckCircle2 className="w-6 h-6 text-green-500" />
            Verified Migration Results
          </CardTitle>
          <p className="text-muted-foreground">
            Historical performance and savings data
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-8">
            {/* Left - Migration Paths */}
            <div>
              <h4 className="font-semibold mb-4">Recent Migration Paths</h4>
              <div className="space-y-3">
                {[
                  {
                    from: "DB-VM-PROD",
                    to: "compute-2",
                    status: "completed",
                    time: "12.1s Min",
                  },
                  {
                    from: "WEB-VM-DEV",
                    to: "compute-1",
                    status: "completed",
                    time: "14.3s Min",
                  },
                ].map((path, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 rounded-lg border border-border/50"
                  >
                    <div className="flex items-center gap-3">
                      <Badge
                        variant="default"
                        className="text-xs bg-green-500/10 text-green-500 border-green-500/20"
                      >
                        {path.status.toUpperCase()}
                      </Badge>
                      <span className="text-sm font-medium">{path.from}</span>
                      <ArrowRightLeft className="w-3 h-3 text-muted-foreground" />
                      <span className="text-sm font-medium text-primary">
                        {path.to}
                      </span>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {path.time}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Performance Metrics */}
            <div>
              <h4 className="font-semibold mb-4">Performance Impact</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 rounded-lg bg-muted/30">
                  <div className="text-2xl font-bold text-green-500">
                    407.2W
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Verified Power Utilization
                  </div>
                </div>
                <div className="text-center p-4 rounded-lg bg-muted/30">
                  <div className="text-2xl font-bold text-orange-500">
                    3.16%
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Verified Power Gen
                  </div>
                </div>
              </div>
              <div className="text-center p-4 rounded-lg bg-muted/30 mt-4">
                <div className="text-3xl font-bold text-blue-500">13.3W</div>
                <div className="text-xs text-muted-foreground">
                  Total Power Saved
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Action Center */}
      <div className="flex justify-center gap-6 pt-4">
        <Button
          size="lg"
          className="px-12 py-4 text-lg font-bold bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600"
        >
          <CheckCircle2 className="w-6 h-6 mr-3" />
          Approve Migration
        </Button>
        <Button
          size="lg"
          variant="destructive"
          className="px-12 py-4 text-lg font-bold bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600"
        >
          <X className="w-6 h-6 mr-3" />
          Decline Migration
        </Button>
      </div>
    </div>
  );
};
