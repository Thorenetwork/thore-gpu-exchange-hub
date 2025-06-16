
import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown } from "lucide-react";

const ThorecoinPriceTicker = () => {
  const [price, setPrice] = useState(122);
  const [change, setChange] = useState(0);
  const [isPositive, setIsPositive] = useState(true);
  const [high, setHigh] = useState(157);
  const [low, setLow] = useState(109);

  useEffect(() => {
    const interval = setInterval(() => {
      // Generate random price change between -3% and +3%
      const changePercent = (Math.random() - 0.5) * 6;
      const newPrice = Math.max(105, Math.min(165, price * (1 + changePercent / 100)));
      
      // Update high and low if needed
      const newHigh = Math.max(high, newPrice);
      const newLow = Math.min(low, newPrice);
      
      setPrice(Number(newPrice.toFixed(2)));
      setChange(Number(changePercent.toFixed(2)));
      setIsPositive(changePercent >= 0);
      setHigh(Number(newHigh.toFixed(2)));
      setLow(Number(newLow.toFixed(2)));
    }, 2000);

    return () => clearInterval(interval);
  }, [price, high, low]);

  return (
    <div className="bg-gradient-to-r from-primary/10 to-secondary/10 py-6 border-y border-primary/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
          {/* Main Price Display */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <img 
                src="/lovable-uploads/d0c3ad96-4098-4d11-88c1-f99faed47acc.png" 
                alt="ThoreCoin" 
                className="h-8 w-8"
              />
              <span className="text-2xl font-bold">THR</span>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold">${price}</div>
              <div className="flex items-center gap-1">
                {isPositive ? (
                  <TrendingUp className="h-4 w-4 text-green-600" />
                ) : (
                  <TrendingDown className="h-4 w-4 text-red-600" />
                )}
                <span className={`text-sm font-medium ${isPositive ? "text-green-600" : "text-red-600"}`}>
                  {change > 0 ? "+" : ""}{change}%
                </span>
              </div>
            </div>
          </div>

          {/* Price Range */}
          <div className="flex items-center gap-6">
            <div className="text-center">
              <div className="text-sm text-muted-foreground">24h High</div>
              <Badge variant="outline" className="text-green-600 border-green-600">
                ${high}
              </Badge>
            </div>
            <div className="text-center">
              <div className="text-sm text-muted-foreground">24h Low</div>
              <Badge variant="outline" className="text-red-600 border-red-600">
                ${low}
              </Badge>
            </div>
          </div>

          {/* Live Indicator */}
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-muted-foreground">LIVE</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThorecoinPriceTicker;
