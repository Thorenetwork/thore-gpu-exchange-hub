
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, TrendingDown, Activity } from "lucide-react";
import TradingChart from "./TradingChart";
import OrderBookWidget from "./OrderBookWidget";
import BidStream from "./BidStream";

interface GPUQuote {
  id: string;
  name: string;
  symbol: string;
  price: number;
  change: number;
  changePercent: number;
  volume: number;
  high24h: number;
  low24h: number;
  bid: number;
  ask: number;
}

const TradingDashboard = () => {
  const [selectedGPU, setSelectedGPU] = useState<string>("NVIDIA-A100");
  const [quotes, setQuotes] = useState<GPUQuote[]>([
    {
      id: "NVIDIA-A100",
      name: "NVIDIA A100",
      symbol: "A100",
      price: 2.50,
      change: 0.05,
      changePercent: 2.04,
      volume: 1250,
      high24h: 2.65,
      low24h: 2.40,
      bid: 2.49,
      ask: 2.51
    },
    {
      id: "NVIDIA-H100",
      name: "NVIDIA H100",
      symbol: "H100",
      price: 3.75,
      change: -0.12,
      changePercent: -3.10,
      volume: 890,
      high24h: 3.95,
      low24h: 3.70,
      bid: 3.73,
      ask: 3.77
    },
    {
      id: "NVIDIA-H200",
      name: "NVIDIA H200",
      symbol: "H200",
      price: 4.50,
      change: 0.25,
      changePercent: 5.88,
      volume: 650,
      high24h: 4.60,
      low24h: 4.20,
      bid: 4.48,
      ask: 4.52
    },
    {
      id: "NVIDIA-V100",
      name: "NVIDIA V100",
      symbol: "V100",
      price: 1.85,
      change: -0.03,
      changePercent: -1.60,
      volume: 2100,
      high24h: 1.92,
      low24h: 1.80,
      bid: 1.84,
      ask: 1.86
    },
    {
      id: "AMD-MI250X",
      name: "AMD MI250X",
      symbol: "MI250X",
      price: 2.10,
      change: 0.08,
      changePercent: 3.96,
      volume: 780,
      high24h: 2.15,
      low24h: 2.00,
      bid: 2.09,
      ask: 2.11
    },
    {
      id: "THOR-T78",
      name: "Thor T78",
      symbol: "T78",
      price: 4.25,
      change: 0.15,
      changePercent: 3.66,
      volume: 420,
      high24h: 4.35,
      low24h: 4.05,
      bid: 4.23,
      ask: 4.27
    }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuotes(prev => prev.map(quote => {
        const changePercent = (Math.random() - 0.5) * 10; // -5% to +5%
        const newPrice = Math.max(0.1, quote.price * (1 + changePercent / 100));
        const change = newPrice - quote.price;
        
        return {
          ...quote,
          price: Number(newPrice.toFixed(2)),
          change: Number(change.toFixed(2)),
          changePercent: Number(changePercent.toFixed(2)),
          bid: Number((newPrice * 0.998).toFixed(2)),
          ask: Number((newPrice * 1.002).toFixed(2)),
          volume: quote.volume + Math.floor(Math.random() * 50)
        };
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const selectedQuote = quotes.find(q => q.id === selectedGPU);

  return (
    <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
      {/* GPU Quotes Panel */}
      <div className="xl:col-span-1">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5" />
              GPU Quotes
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {quotes.map((quote) => (
              <div
                key={quote.id}
                className={`p-3 rounded-lg border cursor-pointer transition-all ${
                  selectedGPU === quote.id 
                    ? 'border-primary bg-primary/5' 
                    : 'border-border hover:border-primary/50'
                }`}
                onClick={() => setSelectedGPU(quote.id)}
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <div className="font-medium text-sm">{quote.symbol}</div>
                    <div className="text-xs text-muted-foreground">{quote.name}</div>
                  </div>
                  <Badge variant={quote.changePercent >= 0 ? "default" : "destructive"}>
                    {quote.changePercent >= 0 ? (
                      <TrendingUp className="h-3 w-3 mr-1" />
                    ) : (
                      <TrendingDown className="h-3 w-3 mr-1" />
                    )}
                    {quote.changePercent.toFixed(1)}%
                  </Badge>
                </div>
                
                <div className="text-lg font-bold">${quote.price}</div>
                <div className={`text-sm ${quote.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {quote.change >= 0 ? '+' : ''}{quote.change.toFixed(2)}
                </div>
                
                <div className="flex justify-between text-xs text-muted-foreground mt-2">
                  <span>Vol: {quote.volume}</span>
                  <span>Bid: ${quote.bid}</span>
                  <span>Ask: ${quote.ask}</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Main Trading Area */}
      <div className="xl:col-span-2 space-y-6">
        {/* Selected GPU Info */}
        {selectedQuote && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>{selectedQuote.name} ({selectedQuote.symbol})</span>
                <div className="flex items-center gap-4 text-sm">
                  <span>24h High: <span className="font-bold">${selectedQuote.high24h}</span></span>
                  <span>24h Low: <span className="font-bold">${selectedQuote.low24h}</span></span>
                  <span>Volume: <span className="font-bold">{selectedQuote.volume}</span></span>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-6 mb-4">
                <div>
                  <div className="text-3xl font-bold">${selectedQuote.price}</div>
                  <div className={`flex items-center gap-1 ${selectedQuote.changePercent >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {selectedQuote.changePercent >= 0 ? (
                      <TrendingUp className="h-4 w-4" />
                    ) : (
                      <TrendingDown className="h-4 w-4" />
                    )}
                    <span>{selectedQuote.change >= 0 ? '+' : ''}{selectedQuote.change.toFixed(2)} ({selectedQuote.changePercent.toFixed(1)}%)</span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-center">
                    <div className="text-sm text-muted-foreground">Bid</div>
                    <div className="font-bold text-green-600">${selectedQuote.bid}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-muted-foreground">Ask</div>
                    <div className="font-bold text-red-600">${selectedQuote.ask}</div>
                  </div>
                </div>
                <div className="flex gap-2 ml-auto">
                  <Button size="sm" className="bg-green-600 hover:bg-green-700">Buy</Button>
                  <Button size="sm" variant="destructive">Sell</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Trading Chart */}
        <TradingChart gpuId={selectedGPU} />
      </div>

      {/* Right Sidebar */}
      <div className="xl:col-span-1 space-y-6">
        <OrderBookWidget gpuId={selectedGPU} />
        <BidStream />
      </div>
    </div>
  );
};

export default TradingDashboard;
