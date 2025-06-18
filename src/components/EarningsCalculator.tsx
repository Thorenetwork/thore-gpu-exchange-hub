
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Calculator, DollarSign, TrendingUp, Clock, Zap } from "lucide-react";

interface GPUPricing {
  hourly: number;
  daily: number;
  monthly: number;
}

interface GPUData {
  [key: string]: GPUPricing;
}

const EarningsCalculator = () => {
  const [calculatorType, setCalculatorType] = useState<'rent-out' | 'rent-in'>('rent-out');
  const [selectedGPU, setSelectedGPU] = useState('rtx-4090');
  const [hours, setHours] = useState('24');
  const [days, setDays] = useState('30');
  const [uptimePercentage, setUptimePercentage] = useState('95');
  const [results, setResults] = useState({
    hourly: 0,
    daily: 0,
    monthly: 0,
    yearly: 0
  });

  const gpuPricing: GPUData = {
    'rtx-4090': { hourly: 2.50, daily: 60, monthly: 1800 },
    'rtx-4080': { hourly: 1.80, daily: 43.2, monthly: 1296 },
    'rtx-3090': { hourly: 1.20, daily: 28.8, monthly: 864 },
    'rtx-3080': { hourly: 0.90, daily: 21.6, monthly: 648 },
    'a100-80gb': { hourly: 4.20, daily: 100.8, monthly: 3024 },
    'h100': { hourly: 8.50, daily: 204, monthly: 6120 },
    'v100': { hourly: 1.50, daily: 36, monthly: 1080 },
    'tesla-t4': { hourly: 0.40, daily: 9.6, monthly: 288 }
  };

  const gpuNames: { [key: string]: string } = {
    'rtx-4090': 'NVIDIA RTX 4090',
    'rtx-4080': 'NVIDIA RTX 4080',
    'rtx-3090': 'NVIDIA RTX 3090',
    'rtx-3080': 'NVIDIA RTX 3080',
    'a100-80gb': 'NVIDIA A100 80GB',
    'h100': 'NVIDIA H100',
    'v100': 'NVIDIA V100',
    'tesla-t4': 'NVIDIA Tesla T4'
  };

  useEffect(() => {
    calculateEarnings();
  }, [selectedGPU, hours, days, uptimePercentage, calculatorType]);

  const calculateEarnings = () => {
    const pricing = gpuPricing[selectedGPU];
    const hoursPerDay = parseFloat(hours);
    const daysPerMonth = parseFloat(days);
    const uptime = parseFloat(uptimePercentage) / 100;

    if (calculatorType === 'rent-out') {
      // Calculate earnings from renting out
      const hourlyEarnings = pricing.hourly * uptime;
      const dailyEarnings = hourlyEarnings * hoursPerDay;
      const monthlyEarnings = dailyEarnings * daysPerMonth;
      const yearlyEarnings = monthlyEarnings * 12;

      setResults({
        hourly: hourlyEarnings,
        daily: dailyEarnings,
        monthly: monthlyEarnings,
        yearly: yearlyEarnings
      });
    } else {
      // Calculate costs for renting
      const hourlyCost = pricing.hourly;
      const dailyCost = hourlyCost * hoursPerDay;
      const monthlyCost = dailyCost * daysPerMonth;
      const yearlyCost = monthlyCost * 12;

      setResults({
        hourly: hourlyCost,
        daily: dailyCost,
        monthly: monthlyCost,
        yearly: yearlyCost
      });
    }
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader className="text-center">
        <div className="flex items-center justify-center mb-4">
          <Calculator className="h-8 w-8 text-primary mr-3" />
          <CardTitle className="text-3xl">GPU Earnings Calculator</CardTitle>
        </div>
        <CardDescription className="text-lg">
          Estimate your profits when you rent your server out, or the cost to rent a server to complete your own tasks
        </CardDescription>
      </CardHeader>

      <CardContent>
        <Tabs value={calculatorType} onValueChange={(value) => setCalculatorType(value as 'rent-out' | 'rent-in')} className="mb-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="rent-out" className="flex items-center gap-2">
              <DollarSign className="h-4 w-4" />
              Rent Out (Earn)
            </TabsTrigger>
            <TabsTrigger value="rent-in" className="flex items-center gap-2">
              <Zap className="h-4 w-4" />
              Rent In (Cost)
            </TabsTrigger>
          </TabsList>

          <TabsContent value="rent-out" className="mt-6">
            <div className="text-center mb-4">
              <Badge className="bg-green-100 text-green-700 border-green-300">
                Calculate Your Earnings from GPU Rentals
              </Badge>
            </div>
          </TabsContent>

          <TabsContent value="rent-in" className="mt-6">
            <div className="text-center mb-4">
              <Badge className="bg-blue-100 text-blue-700 border-blue-300">
                Calculate Your Costs for Renting GPUs
              </Badge>
            </div>
          </TabsContent>
        </Tabs>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="space-y-6">
            <div>
              <Label htmlFor="gpu-select" className="text-base font-semibold">GPU Model</Label>
              <Select value={selectedGPU} onValueChange={setSelectedGPU}>
                <SelectTrigger className="mt-2">
                  <SelectValue placeholder="Select GPU model" />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(gpuNames).map(([key, name]) => (
                    <SelectItem key={key} value={key}>
                      {name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="hours" className="text-base font-semibold">Hours per Day</Label>
              <Input
                id="hours"
                type="number"
                min="1"
                max="24"
                value={hours}
                onChange={(e) => setHours(e.target.value)}
                className="mt-2"
              />
              <p className="text-sm text-muted-foreground mt-1">1-24 hours per day</p>
            </div>

            <div>
              <Label htmlFor="days" className="text-base font-semibold">Days per Month</Label>
              <Input
                id="days"
                type="number"
                min="1"
                max="31"
                value={days}
                onChange={(e) => setDays(e.target.value)}
                className="mt-2"
              />
              <p className="text-sm text-muted-foreground mt-1">1-31 days per month</p>
            </div>

            {calculatorType === 'rent-out' && (
              <div>
                <Label htmlFor="uptime" className="text-base font-semibold">Uptime Percentage</Label>
                <Input
                  id="uptime"
                  type="number"
                  min="50"
                  max="100"
                  value={uptimePercentage}
                  onChange={(e) => setUptimePercentage(e.target.value)}
                  className="mt-2"
                />
                <p className="text-sm text-muted-foreground mt-1">50-100% uptime guarantee</p>
              </div>
            )}
          </div>

          {/* Results Section */}
          <div className="space-y-4">
            <div className="text-center mb-4">
              <h3 className="text-xl font-bold">
                {calculatorType === 'rent-out' ? 'Your Potential Earnings' : 'Your Rental Costs'}
              </h3>
              <p className="text-muted-foreground">Based on {gpuNames[selectedGPU]}</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card className="text-center">
                <CardContent className="pt-4">
                  <div className="flex items-center justify-center mb-2">
                    <Clock className="h-5 w-5 text-blue-500 mr-2" />
                    <span className="font-semibold">Hourly</span>
                  </div>
                  <div className="text-2xl font-bold text-blue-600">
                    ${results.hourly.toFixed(2)}
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-4">
                  <div className="flex items-center justify-center mb-2">
                    <DollarSign className="h-5 w-5 text-green-500 mr-2" />
                    <span className="font-semibold">Daily</span>
                  </div>
                  <div className="text-2xl font-bold text-green-600">
                    ${results.daily.toFixed(2)}
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-4">
                  <div className="flex items-center justify-center mb-2">
                    <TrendingUp className="h-5 w-5 text-purple-500 mr-2" />
                    <span className="font-semibold">Monthly</span>
                  </div>
                  <div className="text-2xl font-bold text-purple-600">
                    ${results.monthly.toFixed(2)}
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-4">
                  <div className="flex items-center justify-center mb-2">
                    <TrendingUp className="h-5 w-5 text-orange-500 mr-2" />
                    <span className="font-semibold">Yearly</span>
                  </div>
                  <div className="text-2xl font-bold text-orange-600">
                    ${results.yearly.toFixed(2)}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-6 p-4 bg-muted/50 rounded-lg">
              <h4 className="font-semibold mb-2">Calculation Details:</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Base rate: ${gpuPricing[selectedGPU].hourly}/hour</li>
                <li>• Usage: {hours} hours/day × {days} days/month</li>
                {calculatorType === 'rent-out' && (
                  <li>• Uptime efficiency: {uptimePercentage}%</li>
                )}
                <li>• GPU Model: {gpuNames[selectedGPU]}</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Button size="lg" className="mr-4">
            {calculatorType === 'rent-out' ? 'Start Earning Today' : 'Find GPUs to Rent'}
          </Button>
          <Button variant="outline" size="lg">
            View Detailed Pricing
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default EarningsCalculator;
