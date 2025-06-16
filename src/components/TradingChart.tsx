
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { Button } from "@/components/ui/button";

interface ChartData {
  time: string;
  price: number;
  volume: number;
}

interface TradingChartProps {
  gpuId: string;
}

const TradingChart = ({ gpuId }: TradingChartProps) => {
  const [timeframe, setTimeframe] = useState<'1m' | '5m' | '1h' | '1d'>('5m');
  const [chartData, setChartData] = useState<ChartData[]>([]);

  useEffect(() => {
    // Generate initial chart data
    const generateData = () => {
      const data: ChartData[] = [];
      const now = new Date();
      let basePrice = 2.50;
      
      for (let i = 59; i >= 0; i--) {
        const time = new Date(now.getTime() - i * 60000); // 1 minute intervals
        basePrice += (Math.random() - 0.5) * 0.1;
        basePrice = Math.max(0.1, basePrice);
        
        data.push({
          time: time.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' }),
          price: Number(basePrice.toFixed(2)),
          volume: Math.floor(Math.random() * 100) + 20
        });
      }
      return data;
    };

    setChartData(generateData());

    // Update chart data every 5 seconds
    const interval = setInterval(() => {
      setChartData(prev => {
        const newData = [...prev.slice(1)];
        const lastPrice = prev[prev.length - 1]?.price || 2.50;
        const newPrice = Math.max(0.1, lastPrice + (Math.random() - 0.5) * 0.1);
        const now = new Date();
        
        newData.push({
          time: now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' }),
          price: Number(newPrice.toFixed(2)),
          volume: Math.floor(Math.random() * 100) + 20
        });
        
        return newData;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [gpuId]);

  const chartConfig = {
    price: {
      label: "Price",
      color: "hsl(var(--primary))",
    },
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>Price Chart</CardTitle>
          <div className="flex gap-1">
            {(['1m', '5m', '1h', '1d'] as const).map((tf) => (
              <Button
                key={tf}
                size="sm"
                variant={timeframe === tf ? "default" : "outline"}
                onClick={() => setTimeframe(tf)}
              >
                {tf}
              </Button>
            ))}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[300px]">
          <LineChart data={chartData}>
            <XAxis dataKey="time" />
            <YAxis domain={['dataMin - 0.1', 'dataMax + 0.1']} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Line
              type="monotone"
              dataKey="price"
              stroke="var(--color-price)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default TradingChart;
