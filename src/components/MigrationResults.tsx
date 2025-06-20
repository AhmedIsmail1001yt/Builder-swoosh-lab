import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Clock, Zap, TrendingDown } from "lucide-react";

const migrationResults = [
  {
    id: 1,
    vmName: "VM-PROD-001",
    fromNode: "node-02",
    toNode: "node-03",
    status: "completed",
    startTime: "2024-01-15 14:30",
    endTime: "2024-01-15 14:45",
    duration: "15m 23s",
    powerSaved: "4.2 W",
    efficiency: "+12%",
  },
  {
    id: 2,
    vmName: "VM-DEV-005",
    fromNode: "node-01",
    toNode: "node-04",
    status: "completed",
    startTime: "2024-01-15 13:15",
    endTime: "2024-01-15 13:27",
    duration: "12m 18s",
    powerSaved: "3.8 W",
    efficiency: "+8%",
  },
  {
    id: 3,
    vmName: "VM-TEST-003",
    fromNode: "node-03",
    toNode: "node-01",
    status: "in-progress",
    startTime: "2024-01-15 15:00",
    endTime: "-",
    duration: "8m 45s",
    powerSaved: "2.1 W",
    efficiency: "+5%",
  },
];

export const MigrationResults = () => {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-primary" />
            Verified Migration Results
          </CardTitle>
          <Button variant="outline" size="sm">
            View All
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        {/* Summary Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-muted/20 rounded-lg">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">407.2 W</div>
            <div className="text-xs text-muted-foreground">
              Verified Power Utilization
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-500">3.16%</div>
            <div className="text-xs text-muted-foreground">
              Verified Power Gen
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-500">13.3 W</div>
            <div className="text-xs text-muted-foreground">
              Total Power Saved
            </div>
          </div>
        </div>

        {/* Migration History */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-foreground mb-3">
            Recent Migrations
          </h4>
          {migrationResults.map((result) => (
            <div
              key={result.id}
              className="border border-border rounded-lg p-4 space-y-3"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Badge
                    variant={
                      result.status === "completed" ? "default" : "secondary"
                    }
                    className="text-xs"
                  >
                    {result.status.toUpperCase()}
                  </Badge>
                  <span className="text-sm font-medium">{result.vmName}</span>
                  <span className="text-xs text-muted-foreground">
                    {result.fromNode} → {result.toNode}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {result.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Zap className="w-3 h-3" />
                    {result.powerSaved}
                  </div>
                  <div className="flex items-center gap-1">
                    <TrendingDown className="w-3 h-3" />
                    {result.efficiency}
                  </div>
                </div>
              </div>

              <div className="text-xs text-muted-foreground">
                Started: {result.startTime}
                {result.endTime !== "-" && ` • Completed: ${result.endTime}`}
              </div>

              {result.status === "in-progress" && (
                <div className="w-full bg-muted rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full"
                    style={{ width: "65%" }}
                  ></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
