
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";
import { 
  ArrowLeft, 
  Wallet, 
  Send, 
  Clock, 
  CheckCircle,
  AlertCircle,
  Copy
} from "lucide-react";

const ThorecoinTransactions = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [thrBalance] = useState(1250.75);
  const [walletAddress, setWalletAddress] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  
  // Get transaction details from navigation state
  const { gpuTitle, hours, total } = location.state || {};

  useEffect(() => {
    if (!gpuTitle || !hours || !total) {
      navigate('/marketplace');
    }
  }, [gpuTitle, hours, total, navigate]);

  const thrRequired = total ? (parseFloat(total) * 0.8).toFixed(2) : "0"; // 20% discount with THR

  const handlePayment = async () => {
    if (!walletAddress) {
      toast.error("Please enter your THR wallet address");
      return;
    }

    if (parseFloat(thrRequired) > thrBalance) {
      toast.error("Insufficient THR balance");
      return;
    }

    setIsProcessing(true);
    
    // Simulate transaction processing
    setTimeout(() => {
      setIsProcessing(false);
      toast.success("Payment successful! GPU credits have been added to your account", {
        description: "Transaction hash: 0x1234...5678"
      });
      navigate('/credits');
    }, 3000);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard");
  };

  if (!gpuTitle) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/marketplace')}
          className="mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Marketplace
        </Button>

        <div className="max-w-2xl mx-auto space-y-6">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <img 
                src="/lovable-uploads/d0c3ad96-4098-4d11-88c1-f99faed47acc.png" 
                alt="ThoreCoin" 
                className="h-16 w-16"
              />
            </div>
            <h1 className="text-3xl font-bold mb-2">Thorecoin Payment</h1>
            <p className="text-muted-foreground">Complete your GPU credit purchase with THR</p>
          </div>

          {/* Transaction Summary */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Send className="h-5 w-5" />
                Transaction Summary
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span>GPU Type:</span>
                <span className="font-medium">{gpuTitle}</span>
              </div>
              <div className="flex justify-between">
                <span>Hours:</span>
                <span className="font-medium">{hours}</span>
              </div>
              <div className="flex justify-between">
                <span>Original Price:</span>
                <span className="line-through text-muted-foreground">${total}</span>
              </div>
              <div className="flex justify-between">
                <span>THR Discount (20%):</span>
                <span className="text-green-600">-${(parseFloat(total) * 0.2).toFixed(2)}</span>
              </div>
              <Separator />
              <div className="flex justify-between text-lg font-bold">
                <span>Total in THR:</span>
                <div className="flex items-center gap-2">
                  <img 
                    src="/lovable-uploads/d0c3ad96-4098-4d11-88c1-f99faed47acc.png" 
                    alt="ThoreCoin" 
                    className="h-5 w-5"
                  />
                  <span>{thrRequired} THR</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Wallet Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Wallet className="h-5 w-5" />
                Your THR Wallet
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Available Balance:</span>
                <div className="flex items-center gap-2">
                  <img 
                    src="/lovable-uploads/d0c3ad96-4098-4d11-88c1-f99faed47acc.png" 
                    alt="ThoreCoin" 
                    className="h-5 w-5"
                  />
                  <span className="font-bold text-lg">{thrBalance} THR</span>
                  {parseFloat(thrRequired) > thrBalance && (
                    <Badge variant="destructive">
                      <AlertCircle className="h-3 w-3 mr-1" />
                      Insufficient
                    </Badge>
                  )}
                  {parseFloat(thrRequired) <= thrBalance && (
                    <Badge variant="default" className="bg-green-600">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Sufficient
                    </Badge>
                  )}
                </div>
              </div>

              <div>
                <Label htmlFor="wallet">THR Wallet Address</Label>
                <div className="flex gap-2">
                  <Input
                    id="wallet"
                    placeholder="Enter your THR wallet address"
                    value={walletAddress}
                    onChange={(e) => setWalletAddress(e.target.value)}
                  />
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => copyToClipboard("0x1234567890abcdef...")}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Payment Section */}
          <Card>
            <CardHeader>
              <CardTitle>Complete Payment</CardTitle>
              <CardDescription>
                Review your transaction details and confirm payment
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                onClick={handlePayment} 
                disabled={!walletAddress || parseFloat(thrRequired) > thrBalance || isProcessing}
                className="w-full"
                size="lg"
              >
                {isProcessing ? (
                  <>
                    <Clock className="h-4 w-4 mr-2 animate-spin" />
                    Processing Payment...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    Pay {thrRequired} THR
                  </>
                )}
              </Button>
              
              {parseFloat(thrRequired) > thrBalance && (
                <p className="text-sm text-red-600 mt-2 text-center">
                  You need {(parseFloat(thrRequired) - thrBalance).toFixed(2)} more THR to complete this transaction
                </p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ThorecoinTransactions;
