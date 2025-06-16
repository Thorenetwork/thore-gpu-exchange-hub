
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import { CreditCard, Building2, Bitcoin, ShoppingCart } from "lucide-react";

interface CreateVolumeDialogProps {
  gpuTitle: string;
  price: number;
  children: React.ReactNode;
}

const CreateVolumeDialog = ({ gpuTitle, price, children }: CreateVolumeDialogProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hours, setHours] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  const calculateTotal = () => {
    if (!hours) return 0;
    return (price * parseFloat(hours)).toFixed(2);
  };

  const handleCreateVolume = () => {
    if (!hours || !paymentMethod) {
      toast.error("Please fill in all fields");
      return;
    }

    const total = calculateTotal();
    toast.success(`Volume created! ${hours} hours of ${gpuTitle} for $${total}`, {
      description: `Payment method: ${paymentMethod}`
    });
    
    // Reset form and close dialog
    setHours("");
    setPaymentMethod("");
    setIsOpen(false);
  };

  const paymentMethods = [
    { value: "credit-card", label: "Credit Card", icon: CreditCard },
    { value: "bank-transfer", label: "Bank Transfer", icon: Building2 },
    { value: "crypto", label: "Cryptocurrency", icon: Bitcoin }
  ];

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <ShoppingCart className="h-5 w-5" />
            Create Volume - {gpuTitle}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
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

          <div>
            <Label>Payment Method</Label>
            <Select value={paymentMethod} onValueChange={setPaymentMethod}>
              <SelectTrigger>
                <SelectValue placeholder="Select payment method" />
              </SelectTrigger>
              <SelectContent>
                {paymentMethods.map((method) => (
                  <SelectItem key={method.value} value={method.value}>
                    <div className="flex items-center gap-2">
                      <method.icon className="h-4 w-4" />
                      {method.label}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {hours && (
            <Card>
              <CardContent className="p-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>GPU Type:</span>
                    <span className="font-medium">{gpuTitle}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Hours:</span>
                    <span className="font-medium">{hours}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Rate:</span>
                    <span className="font-medium">${price}/hour</span>
                  </div>
                  <div className="border-t pt-2 flex justify-between text-lg font-bold">
                    <span>Total:</span>
                    <span className="text-primary">${calculateTotal()}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          <div className="flex gap-2">
            <Button variant="outline" onClick={() => setIsOpen(false)} className="flex-1">
              Cancel
            </Button>
            <Button onClick={handleCreateVolume} className="flex-1" disabled={!hours || !paymentMethod}>
              Create Volume
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CreateVolumeDialog;
