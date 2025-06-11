
import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  TrendingDown, 
  Play, 
  Pause, 
  RotateCcw,
  Zap,
  DollarSign
} from "lucide-react";

interface PriceData {
  price: number;
  change: number;
  timestamp: number;
}

const TradingDemo = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [prices, setPrices] = useState<Record<string, PriceData>>({
    "NVIDIA A100": { price: 2.50, change: 0, timestamp: Date.now() },
    "NVIDIA H100": { price: 3.75, change: 0, timestamp: Date.now() },
    "NVIDIA V100": { price: 1.85, change: 0, timestamp: Date.now() },
    "AMD MI250X": { price: 2.10, change: 0, timestamp: Date.now() }
  });

  const [transactions, setTransactions] = useState<Array<{
    id: string;
    type: 'buy' | 'sell';
    gpu: string;
    price: number;
    amount: number;
    timestamp: number;
  }>>([]);

  // Simulate price updates
  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setPrices(prev => {
        const newPrices = { ...prev };
        
        Object.keys(newPrices).forEach(gpu => {
          const currentPrice = newPrices[gpu].price;
          const volatility = 0.05; // 5% max change
          const randomChange = (Math.random() - 0.5) * 2 * volatility;
          const newPrice = Math.max(0.1, currentPrice * (1 + randomChange));
          const change = ((newPrice - currentPrice) / currentPrice) * 100;
          
          newPrices[gpu] = {
            price: Number(newPrice.toFixed(2)),
            change: Number(change.toFixed(2)),
            timestamp: Date.now()
          };
        });
        
        return newPrices;
      });

      // Simulate random transactions
      if (Math.random() < 0.3) {
        const gpus = Object.keys(prices);
        const randomGpu = gpus[Math.floor(Math.random() * gpus.length)];
        const type = Math.random() > 0.5 ? 'buy' : 'sell';
        const amount = Math.floor(Math.random() * 10) + 1;
        
        setTransactions(prev => [{
          id: Date.now().toString(),
          type,
          gpu: randomGpu,
          price: prices[randomGpu].price,
          amount,
          timestamp: Date.now()
        }, ...prev.slice(0, 9)]); // Keep only last 10 transactions
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [isRunning, prices]);

  const resetDemo = () => {
    setIsRunning(false);
    setPrices({
      "NVIDIA A100": { price: 2.50, change: 0, timestamp: Date.now() },
      "NVIDIA H100": { price: 3.75, change: 0, timestamp: Date.now() },
      "NVIDIA V100": { price: 1.85, change: 0, timestamp: Date.now() },
      "AMD MI250X": { price: 2.10, change: 0, timestamp: Date.now() }
    });
    setTransactions([]);
  };

  return (
    <div className="space-y-6">
      {/* Demo Controls */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-primary" />
            Live Trading Demo
          </CardTitle>
          <CardDescription>
            Experience real-time GPU credit trading simulation
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2">
            <Button 
              onClick={() => setIsRunning(!isRunning)}
              variant={isRunning ? "destructive" : "default"}
              size="sm"
            >
              {isRunning ? (
                <>
                  <Pause className="h-4 w-4 mr-2" />
                  Pause Demo
                </>
              ) : (
                <>
                  <Play className="h-4 w-4 mr-2" />
                  Start Demo
                </>
              )}
            </Button>
            <Button onClick={resetDemo} variant="outline" size="sm">
              <RotateCcw className="h-4 w-4 mr-2" />
              Reset
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Price Ticker */}
      <Card>
        <CardHeader>
          <CardTitle>Live Prices</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {Object.entries(prices).map(([gpu, data]) => (
              <div key={gpu} className="p-4 border rounded-lg">
                <div className="text-sm font-medium text-muted-foreground mb-1">
                  {gpu}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <DollarSign className="h-4 w-4 text-primary" />
                    <span className="text-lg font-bold">
                      {data.price}
                    </span>
                    <span className="text-sm text-muted-foreground">/hr</span>
                  </div>
                  {data.change !== 0 && (
                    <Badge 
                      variant={data.change > 0 ? "default" : "destructive"}
                      className="text-xs"
                    >
                      {data.change > 0 ? (
                        <TrendingUp className="h-3 w-3 mr-1" />
                      ) : (
                        <TrendingDown className="h-3 w-3 mr-1" />
                      )}
                      {Math.abs(data.change).toFixed(1)}%
                    </Badge>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Live Transactions Feed */}
      <Card>
        <CardHeader>
          <CardTitle>Live Transaction Feed</CardTitle>
          <CardDescription>
            Real-time trading activity in the marketplace
          </CardDescription>
        </CardHeader>
        <CardContent>
          {transactions.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              {isRunning ? "Waiting for transactions..." : "Start the demo to see live trading activity"}
            </div>
          ) : (
            <div className="space-y-2 max-h-64 overflow-y-auto">
              {transactions.map((tx) => (
                <div 
                  key={tx.id} 
                  className="flex items-center justify-between p-3 bg-muted/50 rounded-lg animate-fade-in"
                >
                  <div className="flex items-center gap-3">
                    <Badge 
                      variant={tx.type === 'buy' ? "default" : "outline"}
                      className="capitalize"
                    >
                      {tx.type}
                    </Badge>
                    <div>
                      <span className="font-medium">{tx.gpu}</span>
                      <div className="text-sm text-muted-foreground">
                        {tx.amount} hours @ ${tx.price}/hr
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">
                      ${(tx.price * tx.amount).toFixed(2)}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {new Date(tx.timestamp).toLocaleTimeString()}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default TradingDemo;
