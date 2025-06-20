import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  PieChart,
  Pie,
  Tooltip,
  ResponsiveContainer,
  Cell,
  Legend,
} from "recharts";

const data = [
  { name: "node-01", value: 75, usage: "75%", color: "hsl(var(--primary))" },
  { name: "node-02", value: 92, usage: "92%", color: "#f59e0b" },
  { name: "node-03", value: 63, usage: "63%", color: "#3b82f6" },
  { name: "node-04", value: 88, usage: "88%", color: "#ef4444" },
  { name: "node-05", value: 45, usage: "45%", color: "#8b5cf6" },
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-card border border-border rounded-lg p-3 shadow-lg">
        <p className="text-sm font-medium text-foreground">{data.name}</p>
        <p className="text-sm" style={{ color: data.color }}>
          CPU Usage: {data.usage}
        </p>
      </div>
    );
  }
  return null;
};

const CustomLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}: any) => {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="hsl(var(--background))"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
      fontSize={12}
      fontWeight="500"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export const ResourceChart = () => {
  return (
    <Card className="col-span-2 border-2 border-border/50">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-xl font-bold text-foreground">
              Resource Distribution
            </CardTitle>
            <p className="text-sm text-muted-foreground mt-1">
              CPU usage across compute nodes
            </p>
          </div>
          <div className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium">
            Real-time
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={CustomLabel}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
              <Legend
                verticalAlign="bottom"
                height={36}
                formatter={(value, entry: any) => (
                  <span style={{ color: entry.color }}>{value}</span>
                )}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Node details below the chart */}
        <div className="grid grid-cols-3 gap-4 mt-6 pt-4 border-t border-border">
          {data.map((node, index) => (
            <div key={node.name} className="text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: node.color }}
                />
                <span className="text-sm font-medium text-foreground">
                  {node.name}
                </span>
              </div>
              <div className="text-xs text-muted-foreground">
                CPU: {node.usage}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
