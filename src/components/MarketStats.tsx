import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Activity, TrendingUp, Zap, Users } from "lucide-react";

const MarketStats = () => {
  const [activeTraders, setActiveTraders] = useState(2847);

  useEffect(() => {
    const interval = setInterval(() => {
      // Generate random number between 1800-1999 to keep under 2000
      const newCount = Math.floor(Math.random() * 200) + 1800;
      setActiveTraders(newCount);
    }, 10000); // Change every 10 seconds

    return () => clearInterval(interval);
  }, []);

  const stats = [
    {
      icon: Activity,
      value: activeTraders.toLocaleString(),
      label: "Active Traders",
      color: "text-primary"
    },
    {
      icon: TrendingUp,
      value: `$${(Math.random() * (12000 - 6700) + 6700).toFixed(0)}`,
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
      value: "12",
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
