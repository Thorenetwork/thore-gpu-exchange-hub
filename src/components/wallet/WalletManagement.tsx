
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Send, 
  Download, 
  QrCode, 
  ArrowLeftRight,
  Copy,
  Scan
} from "lucide-react";
import { toast } from "sonner";

const WalletManagement = () => {
  const [sendAddress, setSendAddress] = useState("");
  const [sendAmount, setSendAmount] = useState("");
  const [swapFromAmount, setSwapFromAmount] = useState("");
  const [swapToToken, setSwapToToken] = useState("THR");
  
  const availableCredits = 875;
  const thrBalance = 1250.75;
  const walletAddress = "0x742d35Cc6491C4E7b0f1f4a0F1E2A5B8C9E2F3A4";

  const handleSendCredits = () => {
    if (!sendAddress || !sendAmount) {
      toast.error("Please fill in all fields");
      return;
    }
    if (parseFloat(sendAmount) > availableCredits) {
      toast.error("Insufficient credits");
      return;
    }
    toast.success(`Sent ${sendAmount} credits to ${sendAddress.slice(0, 10)}...`);
    setSendAddress("");
    setSendAmount("");
  };

  const handleSwap = () => {
    if (!swapFromAmount) {
      toast.error("Please enter amount to swap");
      return;
    }
    toast.success(`Swapped ${swapFromAmount} credits for ${swapToToken}`);
    setSwapFromAmount("");
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard");
  };

  return (
    <div className="space-y-6">
      <Tabs defaultValue="send" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="send">Send Credits</TabsTrigger>
          <TabsTrigger value="receive">Receive Credits</TabsTrigger>
          <TabsTrigger value="swap">Token Swap</TabsTrigger>
        </TabsList>

        <TabsContent value="send" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Send className="h-5 w-5" />
                Send GPU Credits
              </CardTitle>
              <CardDescription>
                Transfer credits to another wallet address
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="send-address">Recipient Address</Label>
                <div className="flex gap-2">
                  <Input
                    id="send-address"
                    placeholder="0x... or ENS name"
                    value={sendAddress}
                    onChange={(e) => setSendAddress(e.target.value)}
                  />
                  <Button variant="outline" size="icon">
                    <Scan className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div>
                <Label htmlFor="send-amount">Amount</Label>
                <Input
                  id="send-amount"
                  type="number"
                  placeholder="Enter amount"
                  value={sendAmount}
                  onChange={(e) => setSendAmount(e.target.value)}
                />
                <div className="text-xs text-muted-foreground mt-1">
                  Available: {availableCredits} credits
                </div>
              </div>

              <div className="border rounded-lg p-4 bg-gray-50">
                <div className="flex justify-between text-sm mb-2">
                  <span>Transaction Fee:</span>
                  <span>0.5 credits</span>
                </div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Network:</span>
                  <Badge variant="outline">Polygon</Badge>
                </div>
                <div className="flex justify-between font-medium">
                  <span>Total:</span>
                  <span>{sendAmount ? (parseFloat(sendAmount) + 0.5).toFixed(1) : "0"} credits</span>
                </div>
              </div>

              <Button onClick={handleSendCredits} className="w-full" size="lg">
                <Send className="h-4 w-4 mr-2" />
                Send Credits
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="receive" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Download className="h-5 w-5" />
                Receive GPU Credits
              </CardTitle>
              <CardDescription>
                Share your wallet address to receive credits
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <div className="w-48 h-48 bg-gray-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <QrCode className="h-32 w-32 text-gray-400" />
                </div>
                <div className="text-sm font-medium mb-2">Your Wallet Address</div>
                <div className="text-xs font-mono bg-gray-100 p-3 rounded break-all mb-4">
                  {walletAddress}
                </div>
                <Button onClick={() => copyToClipboard(walletAddress)} className="w-full">
                  <Copy className="h-4 w-4 mr-2" />
                  Copy Address
                </Button>
              </div>

              <div className="border-t pt-4">
                <div className="text-sm text-muted-foreground mb-2">Supported Networks:</div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Polygon</Badge>
                  <Badge variant="outline">Ethereum</Badge>
                  <Badge variant="outline">Solana</Badge>
                  <Badge variant="outline">Binance Smart Chain</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="swap" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ArrowLeftRight className="h-5 w-5" />
                Token Swap
              </CardTitle>
              <CardDescription>
                Exchange between GPU Credits and THR tokens
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div>
                  <Label>From</Label>
                  <div className="flex gap-2">
                    <Input
                      type="number"
                      placeholder="0.00"
                      value={swapFromAmount}
                      onChange={(e) => setSwapFromAmount(e.target.value)}
                      className="flex-1"
                    />
                    <div className="flex items-center gap-2 px-3 py-2 border rounded-md bg-gray-50">
                      <span className="font-medium">GPU Credits</span>
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    Available: {availableCredits} credits
                  </div>
                </div>

                <div className="flex justify-center">
                  <Button variant="ghost" size="icon">
                    <ArrowLeftRight className="h-4 w-4" />
                  </Button>
                </div>

                <div>
                  <Label>To</Label>
                  <div className="flex gap-2">
                    <Input
                      placeholder="0.00"
                      value={swapFromAmount ? (parseFloat(swapFromAmount) * 0.8).toFixed(2) : ""}
                      readOnly
                      className="flex-1 bg-gray-50"
                    />
                    <div className="flex items-center gap-2 px-3 py-2 border rounded-md bg-gray-50">
                      <img 
                        src="/lovable-uploads/d0c3ad96-4098-4d11-88c1-f99faed47acc.png" 
                        alt="ThoreCoin" 
                        className="h-4 w-4"
                      />
                      <span className="font-medium">THR</span>
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    Rate: 1 Credit = 0.8 THR
                  </div>
                </div>
              </div>

              <div className="border rounded-lg p-4 bg-gray-50">
                <div className="flex justify-between text-sm mb-2">
                  <span>Exchange Rate:</span>
                  <span>1 Credit = 0.8 THR</span>
                </div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Network Fee:</span>
                  <span>0.1 THR</span>
                </div>
                <div className="flex justify-between font-medium">
                  <span>You'll receive:</span>
                  <span>
                    {swapFromAmount ? (parseFloat(swapFromAmount) * 0.8 - 0.1).toFixed(2) : "0"} THR
                  </span>
                </div>
              </div>

              <Button onClick={handleSwap} className="w-full" size="lg">
                <ArrowLeftRight className="h-4 w-4 mr-2" />
                Swap Tokens
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default WalletManagement;
