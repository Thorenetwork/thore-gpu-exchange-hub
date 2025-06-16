
import { Card, CardContent } from "@/components/ui/card";
import { Activity, TrendingUp, Zap, Users } from "lucide-react";

const MarketStats = () => {
  const stats = [
    {
      icon: Activity,
      value: "2,847",
      label: "Active Traders",
      color: "text-primary"
    },
    {
      icon: TrendingUp,
      value: "$1.2M",
      label: "24h Volume",
      color: "text-green-500"
    },
    {
      icon: Zap,
      value: "15,439",
      label: "GPU Hours Available",
      color: "text-primary"
    },
    {
      icon: Users,
      value: "892",
      label: "Verified Providers",
      color: "text-blue-500"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
      {stats.map((stat, index) => (
        <Card key={index}>
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <stat.icon className={`h-5 w-5 ${stat.color}`} />
              <span className="text-2xl font-bold">{stat.value}</span>
            </div>
            <p className="text-sm text-muted-foreground">{stat.label}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default MarketStats;
