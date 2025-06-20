import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { CheckCircle2, AlertTriangle, ArrowRight, Clock } from "lucide-react";

const migrationPaths = [
  {
    id: 1,
    from: "VM-PROD-001",
    to: "node-03",
    status: "recommended",
    reason: "Lower resource utilization",
    estimatedTime: "15 min",
    confidence: "High",
  },
  {
    id: 2,
    from: "VM-DEV-005",
    to: "node-01",
    status: "optimal",
    reason: "Better performance match",
    estimatedTime: "12 min",
    confidence: "High",
  },
  {
    id: 3,
    from: "VM-TEST-003",
    to: "node-04",
    status: "caution",
    reason: "Requires validation",
    estimatedTime: "20 min",
    confidence: "Medium",
  },
];

interface MigrationAdviceProps {
  onApprove?: (migrationId: number) => void;
}

export const MigrationAdvice = ({ onApprove }: MigrationAdviceProps) => {
  return (
    <div className="space-y-6">
      {/* Current Target Utilization */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-orange-500" />
            Migration Advice
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert>
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              Current Target Utilization: 82.1% VM1 • Verified Power Gen: 3.16%
              • Total Power Saved: 13.3 W
            </AlertDescription>
          </Alert>

          <div className="space-y-3">
            <h4 className="text-sm font-medium text-foreground">
              Verified Migration Paths
            </h4>
            {migrationPaths.map((migration) => (
              <div
                key={migration.id}
                className="border border-border rounded-lg p-4 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Badge
                      variant={
                        migration.status === "optimal"
                          ? "default"
                          : migration.status === "recommended"
                            ? "secondary"
                            : "outline"
                      }
                      className="text-xs"
                    >
                      {migration.status.toUpperCase()}
                    </Badge>
                    <span className="text-sm font-medium">
                      {migration.from}
                    </span>
                    <ArrowRight className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm font-medium text-primary">
                      {migration.to}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      {migration.estimatedTime}
                    </div>
                    <Button
                      size="sm"
                      variant={
                        migration.status === "caution" ? "outline" : "default"
                      }
                      onClick={() => onApprove?.(migration.id)}
                      className="text-xs px-3 py-1"
                    >
                      {migration.status === "caution" ? "Review" : "Approve"}
                    </Button>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">
                    {migration.reason}
                  </span>
                  <div className="flex items-center gap-1">
                    <span className="text-muted-foreground">Confidence:</span>
                    <span
                      className={`font-medium ${
                        migration.confidence === "High"
                          ? "text-primary"
                          : "text-orange-500"
                      }`}
                    >
                      {migration.confidence}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-3 pt-2">
            <Button className="flex-1" size="sm">
              <CheckCircle2 className="w-4 h-4 mr-2" />
              Approve Migration
            </Button>
            <Button variant="outline" size="sm">
              Schedule Later
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
