
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Cpu, 
  TrendingUp, 
  Coins, 
  Zap,
  Clock,
  DollarSign,
  ArrowRight
} from "lucide-react";
import { toast } from "sonner";

const CreditUtility = () => {
  const [redeemAmount, setRedeemAmount] = useState("");
  const [stakingAmount, setStakingAmount] = useState("");
  const [stakingPeriod, setStakingPeriod] = useState("30");
  
  const availableCredits = 875; // Available for utility
  
  const gpuOptions = [
    { name: "NVIDIA H100", rate: "4.5 credits/hour", popular: true },
    { name: "NVIDIA A100", rate: "2.5 credits/hour", popular: true },
    { name: "NVIDIA V100", rate: "1.8 credits/hour", popular: false },
    { name: "AMD MI250X", rate: "2.1 credits/hour", popular: false }
  ];

  const stakingOptions = [
    { period: "7", apy: "5%", minCredits: 100 },
    { period: "30", apy: "12%", minCredits: 500 },
    { period: "90", apy: "18%", minCredits: 1000 },
    { period: "365", apy: "25%", minCredits: 2000 }
  ];

  const handleRedeem = () => {
    if (!redeemAmount || parseFloat(redeemAmount) <= 0) {
      toast.error("Please enter a valid amount");
      return;
    }
    if (parseFloat(redeemAmount) > availableCredits) {
      toast.error("Insufficient available credits");
      return;
    }
    toast.success(`Redeemed ${redeemAmount} credits for GPU computing time`);
    setRedeemAmount("");
  };

  const handleStaking = () => {
    if (!stakingAmount || parseFloat(stakingAmount) <= 0) {
      toast.error("Please enter a valid staking amount");
      return;
    }
    const selectedOption = stakingOptions.find(opt => opt.period === stakingPeriod);
    if (selectedOption && parseFloat(stakingAmount) < selectedOption.minCredits) {
      toast.error(`Minimum ${selectedOption.minCredits} credits required for ${stakingPeriod}-day staking`);
      return;
    }
    if (parseFloat(stakingAmount) > availableCredits) {
      toast.error("Insufficient available credits");
      return;
    }
    toast.success(`Staked ${stakingAmount} credits for ${stakingPeriod} days`);
    setStakingAmount("");
  };

  return (
    <div className="space-y-6">
      <Tabs defaultValue="redeem" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="redeem">Redeem for GPU Time</TabsTrigger>
          <TabsTrigger value="trade">Trade on Exchange</TabsTrigger>
          <TabsTrigger value="stake">Stake for Rewards</TabsTrigger>
        </TabsList>

        <TabsContent value="redeem" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Cpu className="h-5 w-5" />
                Redeem Credits for GPU Computing Time
              </CardTitle>
              <CardDescription>
                Use your credits to access high-performance GPU computing resources
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {gpuOptions.map((gpu, index) => (
                  <Card key={index} className={`cursor-pointer transition-all ${gpu.popular ? 'border-primary' : ''}`}>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div className="font-medium">{gpu.name}</div>
                        {gpu.popular && <Badge>Popular</Badge>}
                      </div>
                      <div className="text-sm text-muted-foreground mb-3">{gpu.rate}</div>
                      <Button size="sm" className="w-full">Select GPU</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="border-t pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="redeem-amount">Credits to Redeem</Label>
                    <Input
                      id="redeem-amount"
                      type="number"
                      placeholder="Enter amount"
                      value={redeemAmount}
                      onChange={(e) => setRedeemAmount(e.target.value)}
                    />
                    <div className="text-xs text-muted-foreground mt-1">
                      Available: {availableCredits} credits
                    </div>
                  </div>
                  <div className="flex items-end">
                    <Button onClick={handleRedeem} className="w-full">
                      <Zap className="h-4 w-4 mr-2" />
                      Redeem Credits
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="trade" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Trade on Thore GPU Exchange
              </CardTitle>
              <CardDescription>
                Buy, sell, or trade your GPU credits on the decentralized exchange
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-green-600">$2.45</div>
                    <div className="text-sm text-muted-foreground">Current Buy Price</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-red-600">$2.55</div>
                    <div className="text-sm text-muted-foreground">Current Sell Price</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-blue-600">+2.4%</div>
                    <div className="text-sm text-muted-foreground">24h Change</div>
                  </CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button size="lg" className="h-16">
                  <TrendingUp className="h-5 w-5 mr-2" />
                  Open Trading Interface
                </Button>
                <Button size="lg" variant="outline" className="h-16">
                  <DollarSign className="h-5 w-5 mr-2" />
                  View Market Orders
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="stake" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Coins className="h-5 w-5" />
                Stake Credits for Rewards
              </CardTitle>
              <CardDescription>
                Lock your credits to earn THR tokens and receive priority access
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {stakingOptions.map((option) => (
                  <Card 
                    key={option.period} 
                    className={`cursor-pointer transition-all ${stakingPeriod === option.period ? 'border-primary bg-primary/5' : ''}`}
                    onClick={() => setStakingPeriod(option.period)}
                  >
                    <CardContent className="p-4 text-center">
                      <div className="text-xl font-bold text-primary">{option.apy}</div>
                      <div className="text-sm text-muted-foreground">{option.period} days</div>
                      <div className="text-xs text-muted-foreground mt-2">
                        Min: {option.minCredits} credits
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="border-t pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="stake-amount">Credits to Stake</Label>
                    <Input
                      id="stake-amount"
                      type="number"
                      placeholder="Enter amount"
                      value={stakingAmount}
                      onChange={(e) => setStakingAmount(e.target.value)}
                    />
                    <div className="text-xs text-muted-foreground mt-1">
                      Available: {availableCredits} credits
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Estimated Rewards</Label>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="flex justify-between">
                        <span className="text-sm">Period:</span>
                        <span className="font-medium">{stakingPeriod} days</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">APY:</span>
                        <span className="font-medium text-green-600">
                          {stakingOptions.find(opt => opt.period === stakingPeriod)?.apy}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <Button onClick={handleStaking} className="w-full mt-4">
                  <Clock className="h-4 w-4 mr-2" />
                  Stake Credits
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CreditUtility;
