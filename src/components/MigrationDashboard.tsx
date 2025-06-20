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
} from "lucide-react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

const nodeUsageData = [
  { name: "node-01", usage: 75, color: "#22c55e" },
  { name: "node-02", usage: 92, color: "#ef4444" },
  { name: "node-03", usage: 63, color: "#3b82f6" },
  { name: "node-04", usage: 88, color: "#f59e0b" },
  { name: "node-05", usage: 45, color: "#8b5cf6" },
];

const migrationSavings = [
  { name: "Power Saved", value: 13.3, unit: "W", color: "#22c55e" },
  { name: "Cost Reduction", value: 24.5, unit: "%", color: "#3b82f6" },
  { name: "Efficiency Gain", value: 18.7, unit: "%", color: "#f59e0b" },
];

const migrationPaths = [
  {
    id: 1,
    from: "VM-PROD-001",
    to: "node-03",
    confidence: 95,
    powerSaving: "4.2W",
    efficiency: "+12%",
    status: "recommended",
  },
  {
    id: 2,
    from: "VM-DEV-005",
    to: "node-01",
    confidence: 88,
    powerSaving: "3.8W",
    efficiency: "+8%",
    status: "optimal",
  },
  {
    id: 3,
    from: "VM-TEST-003",
    to: "node-04",
    confidence: 72,
    powerSaving: "2.1W",
    efficiency: "+5%",
    status: "review",
  },
];

export const MigrationDashboard = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-foreground">
          Migration Recommendations
        </h1>
        <p className="text-xl text-muted-foreground">
          AI-powered optimization for maximum efficiency and cost savings
        </p>
        <div className="flex items-center justify-center gap-6 mt-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-primary">
              Live Analysis
            </span>
          </div>
          <div className="text-sm text-muted-foreground">
            Last updated: {new Date().toLocaleTimeString()}
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-3 gap-6">
        {migrationSavings.map((metric, index) => (
          <Card key={index} className="text-center border-2">
            <CardContent className="pt-6">
              <div
                className="text-3xl font-bold"
                style={{ color: metric.color }}
              >
                {metric.value}
                {metric.unit}
              </div>
              <div className="text-sm text-muted-foreground mt-2">
                {metric.name}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Node Usage Visualization */}
      <Card className="border-2">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Current Node Utilization
          </CardTitle>
          <p className="text-center text-muted-foreground">
            CPU usage distribution across compute nodes
          </p>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={nodeUsageData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <XAxis
                  dataKey="name"
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={14}
                  fontWeight={500}
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
                    borderRadius: "6px",
                  }}
                />
                <Bar dataKey="usage" radius={[4, 4, 0, 0]}>
                  {nodeUsageData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Migration Recommendations */}
      <Card className="border-2">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center flex items-center justify-center gap-3">
            <ArrowRightLeft className="w-8 h-8 text-primary" />
            Recommended Migrations
          </CardTitle>
          <p className="text-center text-muted-foreground">
            Optimized workload placement for maximum efficiency
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          {migrationPaths.map((migration) => (
            <div
              key={migration.id}
              className="border-2 border-border rounded-xl p-6 space-y-4 hover:border-primary/50 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Badge
                    variant={
                      migration.status === "optimal"
                        ? "default"
                        : migration.status === "recommended"
                          ? "secondary"
                          : "outline"
                    }
                    className="text-sm px-3 py-1"
                  >
                    {migration.status.toUpperCase()}
                  </Badge>
                  <div className="flex items-center gap-3 text-lg font-semibold">
                    <Server className="w-5 h-5" />
                    <span>{migration.from}</span>
                    <ArrowRightLeft className="w-5 h-5 text-primary" />
                    <span className="text-primary">{migration.to}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary">
                    {migration.confidence}%
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Confidence
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-6 text-center">
                <div className="space-y-1">
                  <div className="flex items-center justify-center gap-2">
                    <Zap className="w-4 h-4 text-green-500" />
                    <span className="text-lg font-bold text-green-500">
                      {migration.powerSaving}
                    </span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Power Savings
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-center gap-2">
                    <TrendingDown className="w-4 h-4 text-blue-500" />
                    <span className="text-lg font-bold text-blue-500">
                      {migration.efficiency}
                    </span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Efficiency Gain
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-center gap-2">
                    <Clock className="w-4 h-4 text-orange-500" />
                    <span className="text-lg font-bold text-orange-500">
                      ~15min
                    </span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Est. Duration
                  </div>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex justify-center gap-4">
        <Button size="lg" className="px-8 py-3 text-lg font-semibold">
          <CheckCircle2 className="w-5 h-5 mr-2" />
          Approve All Migrations
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="px-8 py-3 text-lg font-semibold"
        >
          <AlertTriangle className="w-5 h-5 mr-2" />
          Review Recommendations
        </Button>
      </div>
    </div>
  );
};
