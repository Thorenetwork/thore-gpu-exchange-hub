
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Wallet, 
  TrendingUp, 
  Coins, 
  QrCode,
  Copy,
  DollarSign,
  Zap
} from "lucide-react";
import { toast } from "sonner";

const WalletDashboard = () => {
  const creditBalance = 3500;
  const walletAddress = "0x742d35Cc6491C4E7b0f1f4a0F1E2A5B8C9E2F3A4";
  const utilizedPercent = 45;
  const stakedPercent = 30;
  const availablePercent = 25;
  const creditValueUSD = 8750; // $2.50 per credit
  
  // THR calculations based on current price and discount
  const thrPrice = 122; // Current THR price in USD
  const thrDiscount = 0.8; // 80% discount for AI Credits
  const effectiveThrPrice = thrPrice * thrDiscount; // $97.6 per THR after discount
  const creditValueTHR = Math.round((creditValueUSD / effectiveThrPrice) * 100) / 100; // Credits value in THR

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard");
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Main Balance Card */}
      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Wallet className="h-5 w-5" />
            GPU AI Credit Balance
          </CardTitle>
          <CardDescription>Your total credits and current value</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">
              {creditBalance.toLocaleString()}
            </div>
            <div className="text-lg text-muted-foreground">AI Credits</div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-4 bg-green-50 rounded-lg border">
              <DollarSign className="h-6 w-6 mx-auto mb-2 text-green-600" />
              <div className="text-xl font-bold text-green-600">
                ${creditValueUSD.toLocaleString()}
              </div>
              <div className="text-sm text-muted-foreground">USD Value</div>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg border">
              <img 
                src="/lovable-uploads/d0c3ad96-4098-4d11-88c1-f99faed47acc.png" 
                alt="ThoreCoin" 
                className="h-6 w-6 mx-auto mb-2"
              />
              <div className="text-xl font-bold text-blue-600">
                {creditValueTHR} THR
              </div>
              <div className="text-sm text-muted-foreground">THR Value (80% discount)</div>
            </div>
          </div>

          {/* Usage Distribution */}
          <div className="space-y-3">
            <h4 className="font-medium">Credit Distribution</h4>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Utilized ({utilizedPercent}%)</span>
                <span>{Math.round(creditBalance * utilizedPercent / 100)} credits</span>
              </div>
              <Progress value={utilizedPercent} className="h-2" />
              
              <div className="flex justify-between text-sm">
                <span>Staked ({stakedPercent}%)</span>
                <span>{Math.round(creditBalance * stakedPercent / 100)} credits</span>
              </div>
              <Progress value={stakedPercent} className="h-2 [&>div]:bg-purple-500" />
              
              <div className="flex justify-between text-sm">
                <span>Available ({availablePercent}%)</span>
                <span>{Math.round(creditBalance * availablePercent / 100)} credits</span>
              </div>
              <Progress value={availablePercent} className="h-2 [&>div]:bg-green-500" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Wallet Info Card */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <QrCode className="h-5 w-5" />
            Wallet Address
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-center">
            <div className="w-32 h-32 bg-gray-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
              <QrCode className="h-16 w-16 text-gray-400" />
            </div>
            <div className="text-xs font-mono bg-gray-100 p-2 rounded break-all">
              {walletAddress}
            </div>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => copyToClipboard(walletAddress)}
              className="mt-2"
            >
              <Copy className="h-4 w-4 mr-2" />
              Copy Address
            </Button>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Network</span>
              <Badge variant="outline">Thore Network</Badge>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Status</span>
              <Badge className="bg-green-600">
                <Zap className="h-3 w-3 mr-1" />
                Active
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card className="lg:col-span-3">
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Common wallet operations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button className="h-16 flex-col gap-2">
              <Coins className="h-5 w-5" />
              Redeem Credits
            </Button>
            <Button variant="outline" className="h-16 flex-col gap-2">
              <TrendingUp className="h-5 w-5" />
              Trade on Exchange
            </Button>
            <Button variant="outline" className="h-16 flex-col gap-2">
              <Zap className="h-5 w-5" />
              Stake for Rewards
            </Button>
            <Button variant="outline" className="h-16 flex-col gap-2">
              <Copy className="h-5 w-5" />
              Send Credits
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WalletDashboard;
