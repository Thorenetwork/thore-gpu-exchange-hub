
import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown } from "lucide-react";

interface GpuPrice {
  name: string;
  price: number;
  change: number;
  isPositive: boolean;
}

const GpuPriceTicker = () => {
  const [prices, setPrices] = useState<GpuPrice[]>([
    { name: "NVIDIA A100", price: 2.50, change: 0, isPositive: true },
    { name: "NVIDIA H100", price: 3.75, change: 0, isPositive: true },
    { name: "NVIDIA V100", price: 1.85, change: 0, isPositive: false },
    { name: "AMD MI250X", price: 2.10, change: 0, isPositive: true },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrices(prev => prev.map(gpu => {
        const changePercent = (Math.random() - 0.5) * 10; // Random change between -5% and +5%
        const newPrice = Math.max(0.1, gpu.price * (1 + changePercent / 100));
        return {
          ...gpu,
          price: Number(newPrice.toFixed(2)),
          change: Number(changePercent.toFixed(1)),
          isPositive: changePercent >= 0
        };
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-muted/30 py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center">
          <div className="flex items-center gap-8 overflow-x-auto">
            <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">
              Live GPU Prices:
            </span>
            {prices.map((gpu) => (
              <div key={gpu.name} className="flex items-center gap-2 whitespace-nowrap">
                <span className="text-sm font-medium">{gpu.name}</span>
                <Badge variant="outline" className="flex items-center gap-1">
                  ${gpu.price}/hr
                  {gpu.change !== 0 && (
                    <>
                      {gpu.isPositive ? (
                        <TrendingUp className="h-3 w-3 text-green-600" />
                      ) : (
                        <TrendingDown className="h-3 w-3 text-red-600" />
                      )}
                      <span className={gpu.isPositive ? "text-green-600" : "text-red-600"}>
                        {gpu.change > 0 ? "+" : ""}{gpu.change}%
                      </span>
                    </>
                  )}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GpuPriceTicker;
