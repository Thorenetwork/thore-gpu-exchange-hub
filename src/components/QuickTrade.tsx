
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { 
  ShoppingCart, 
  Sell, 
  Calculator,
  Clock,
  Zap
} from "lucide-react";

const QuickTrade = () => {
  const [selectedGpu, setSelectedGpu] = useState("");
  const [hours, setHours] = useState("");
  const [customPrice, setCustomPrice] = useState("");

  const gpuPrices = {
    "NVIDIA A100": 2.50,
    "NVIDIA H100": 3.75,
    "NVIDIA V100": 1.85,
    "AMD MI250X": 2.10
  };

  const calculateTotal = () => {
    if (!selectedGpu || !hours) return 0;
    const price = gpuPrices[selectedGpu as keyof typeof gpuPrices];
    return (price * parseFloat(hours)).toFixed(2);
  };

  const handleQuickBuy = () => {
    if (!selectedGpu || !hours) {
      toast.error("Please select a GPU and specify hours");
      return;
    }
    
    const total = calculateTotal();
    toast.success(`Order placed! ${hours} hours of ${selectedGpu} for $${total}`, {
      description: "Your GPU credits will be available instantly"
    });
    
    // Reset form
    setSelectedGpu("");
    setHours("");
  };

  const handleLimitOrder = () => {
    if (!selectedGpu || !hours || !customPrice) {
      toast.error("Please fill in all fields for limit order");
      return;
    }
    
    toast.success(`Limit order placed! ${hours} hours of ${selectedGpu} at $${customPrice}/hr`, {
      description: "Order will execute when price reaches your target"
    });
    
    // Reset form
    setSelectedGpu("");
    setHours("");
    setCustomPrice("");
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Zap className="h-5 w-5 text-primary" />
          Quick Trade
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="buy" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="buy">Buy Credits</TabsTrigger>
            <TabsTrigger value="sell">Sell Credits</TabsTrigger>
          </TabsList>
          
          <TabsContent value="buy" className="space-y-4">
            <div className="space-y-4">
              <div>
                <Label htmlFor="gpu-select">Select GPU</Label>
                <Select value={selectedGpu} onValueChange={setSelectedGpu}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose GPU type" />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(gpuPrices).map(([gpu, price]) => (
                      <SelectItem key={gpu} value={gpu}>
                        <div className="flex justify-between items-center w-full">
                          <span>{gpu}</span>
                          <Badge variant="secondary" className="ml-2">
                            ${price}/hr
                          </Badge>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="hours">Hours needed</Label>
                <Input
                  id="hours"
                  type="number"
                  placeholder="e.g., 10"
                  value={hours}
                  onChange={(e) => setHours(e.target.value)}
                  min="1"
                />
              </div>

              {selectedGpu && hours && (
                <div className="p-3 bg-muted rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <Calculator className="h-4 w-4" />
                      Total Cost:
                    </span>
                    <span className="text-lg font-bold text-primary">
                      ${calculateTotal()}
                    </span>
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <Button 
                  onClick={handleQuickBuy} 
                  className="w-full"
                  disabled={!selectedGpu || !hours}
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Buy Now (Market Price)
                </Button>
                
                <div className="flex gap-2">
                  <Input
                    placeholder="Custom price/hr"
                    value={customPrice}
                    onChange={(e) => setCustomPrice(e.target.value)}
                    type="number"
                    step="0.01"
                  />
                  <Button 
                    onClick={handleLimitOrder}
                    variant="outline"
                    disabled={!selectedGpu || !hours || !customPrice}
                  >
                    <Clock className="h-4 w-4 mr-2" />
                    Limit Order
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="sell" className="space-y-4">
            <div className="space-y-4">
              <div>
                <Label>Your GPU Credits</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select credits to sell" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="a100-50">NVIDIA A100 - 50 hours</SelectItem>
                    <SelectItem value="h100-25">NVIDIA H100 - 25 hours</SelectItem>
                    <SelectItem value="v100-100">NVIDIA V100 - 100 hours</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="sell-hours">Hours to sell</Label>
                <Input
                  id="sell-hours"
                  type="number"
                  placeholder="e.g., 20"
                  min="1"
                />
              </div>

              <div>
                <Label htmlFor="sell-price">Price per hour</Label>
                <Input
                  id="sell-price"
                  type="number"
                  placeholder="e.g., 2.40"
                  step="0.01"
                />
              </div>

              <Button className="w-full">
                <Sell className="h-4 w-4 mr-2" />
                List for Sale
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default QuickTrade;
