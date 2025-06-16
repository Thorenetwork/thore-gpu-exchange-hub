
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Activity, TrendingUp, TrendingDown } from "lucide-react";

interface Bid {
  id: string;
  type: 'buy' | 'sell';
  gpu: string;
  price: number;
  quantity: number;
  timestamp: Date;
}

const BidStream = () => {
  const [bids, setBids] = useState<Bid[]>([]);

  const gpus = ['A100', 'H100', 'H200', 'V100', 'MI250X', 'T78'];

  useEffect(() => {
    const interval = setInterval(() => {
      const newBid: Bid = {
        id: Math.random().toString(36).substr(2, 9),
        type: Math.random() > 0.5 ? 'buy' : 'sell',
        gpu: gpus[Math.floor(Math.random() * gpus.length)],
        price: Number((Math.random() * 4 + 1).toFixed(2)),
        quantity: Math.floor(Math.random() * 100) + 1,
        timestamp: new Date()
      };

      setBids(prev => [newBid, ...prev.slice(0, 19)]); // Keep last 20 bids
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Activity className="h-5 w-5" />
          Live Bid Stream
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="max-h-[400px] overflow-y-auto">
          {bids.map((bid) => (
            <div
              key={bid.id}
              className={`p-3 border-b border-border/50 hover:bg-muted/50 transition-colors ${
                bid.type === 'buy' ? 'border-l-2 border-l-green-500' : 'border-l-2 border-l-red-500'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  <Badge 
                    variant={bid.type === 'buy' ? 'default' : 'destructive'}
                    className="text-xs"
                  >
                    {bid.type === 'buy' ? (
                      <TrendingUp className="h-3 w-3 mr-1" />
                    ) : (
                      <TrendingDown className="h-3 w-3 mr-1" />
                    )}
                    {bid.type.toUpperCase()}
                  </Badge>
                  <span className="font-medium text-sm">{bid.gpu}</span>
                </div>
                <span className="text-xs text-muted-foreground">
                  {bid.timestamp.toLocaleTimeString()}
                </span>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="text-sm">
                  <span className="font-bold">${bid.price}</span>
                  <span className="text-muted-foreground ml-2">×{bid.quantity}</span>
                </div>
                <div className="text-xs text-muted-foreground">
                  Total: ${(bid.price * bid.quantity).toFixed(2)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default BidStream;
