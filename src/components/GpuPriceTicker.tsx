
import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Coins } from "lucide-react";

interface GpuPrice {
  name: string;
  price: number;
  change: number;
  isPositive: boolean;
  symbol?: string;
}

const GpuPriceTicker = () => {
  const [prices, setPrices] = useState<GpuPrice[]>([
    { name: "Thorecoin", price: 1.25, change: 0, isPositive: true, symbol: "THORE" },
    { name: "NVIDIA A100", price: 2.50, change: 0, isPositive: true },
    { name: "NVIDIA H100", price: 3.75, change: 0, isPositive: true },
    { name: "NVIDIA H200", price: 4.50, change: 0, isPositive: true },
    { name: "NVIDIA V100", price: 1.85, change: 0, isPositive: false },
    { name: "AMD MI250X", price: 2.10, change: 0, isPositive: true },
    { name: "Thor T78", price: 4.25, change: 0, isPositive: true },
    { name: "Intel Ponte Vecchio", price: 2.85, change: 0, isPositive: true },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrices(prev => prev.map(gpu => {
        // Generate random change between -5% and +20%
        const minChange = -5;
        const maxChange = 20;
        const changePercent = Math.random() * (maxChange - minChange) + minChange;
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
    <div className="bg-primary/5 py-4 border-b border-primary/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center">
          <div className="flex items-center gap-8 overflow-x-auto">
            <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">
              Live Prices:
            </span>
            {prices.map((item) => (
              <div key={item.name} className="flex items-center gap-2 whitespace-nowrap">
                <div className="flex items-center gap-1">
                  {item.symbol && <Coins className="h-4 w-4 text-primary" />}
                  <span className="text-sm font-medium">{item.name}</span>
                </div>
                <Badge variant="outline" className="flex items-center gap-1">
                  ${item.price}{item.symbol ? "" : "/hr"}
                  {item.change !== 0 && (
                    <>
                      {item.isPositive ? (
                        <TrendingUp className="h-3 w-3 text-green-600" />
                      ) : (
                        <TrendingDown className="h-3 w-3 text-red-600" />
                      )}
                      <span className={item.isPositive ? "text-green-600" : "text-red-600"}>
                        {item.change > 0 ? "+" : ""}{item.change}%
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
