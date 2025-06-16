
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Cpu, Clock, Calendar, Download } from "lucide-react";

interface GPUCredit {
  id: string;
  gpuType: string;
  hours: number;
  hoursUsed: number;
  purchaseDate: string;
  status: 'active' | 'expired' | 'used';
  price: number;
  paymentMethod: string;
}

const PurchasedCredits = () => {
  // Mock data - in a real app, this would come from an API or state management
  const credits: GPUCredit[] = [
    {
      id: "1",
      gpuType: "NVIDIA A100 80GB",
      hours: 10,
      hoursUsed: 3,
      purchaseDate: "2024-06-15",
      status: "active",
      price: 25.00,
      paymentMethod: "Credit Card"
    },
    {
      id: "2",
      gpuType: "NVIDIA H100",
      hours: 5,
      hoursUsed: 5,
      purchaseDate: "2024-06-10",
      status: "used",
      price: 18.75,
      paymentMethod: "Crypto"
    },
    {
      id: "3",
      gpuType: "NVIDIA V100",
      hours: 20,
      hoursUsed: 0,
      purchaseDate: "2024-06-16",
      status: "active",
      price: 37.00,
      paymentMethod: "Bank Transfer"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'expired':
        return 'bg-red-100 text-red-800';
      case 'used':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-blue-100 text-blue-800';
    }
  };

  const totalActiveHours = credits
    .filter(credit => credit.status === 'active')
    .reduce((sum, credit) => sum + (credit.hours - credit.hoursUsed), 0);

  const totalValue = credits
    .filter(credit => credit.status === 'active')
    .reduce((sum, credit) => sum + credit.price, 0);

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Clock className="h-5 w-5 text-primary" />
              <span className="text-2xl font-bold">{totalActiveHours}</span>
            </div>
            <p className="text-sm text-muted-foreground">Hours Available</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Cpu className="h-5 w-5 text-green-500" />
              <span className="text-2xl font-bold">{credits.filter(c => c.status === 'active').length}</span>
            </div>
            <p className="text-sm text-muted-foreground">Active Credits</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-2xl font-bold">${totalValue.toFixed(2)}</span>
            </div>
            <p className="text-sm text-muted-foreground">Total Value</p>
          </CardContent>
        </Card>
      </div>

      {/* Credits List */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Your GPU Credits</CardTitle>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {credits.map((credit) => (
              <div key={credit.id} className="border rounded-lg p-4 space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold">{credit.gpuType}</h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(credit.purchaseDate).toLocaleDateString()}
                      </span>
                      <span>Payment: {credit.paymentMethod}</span>
                    </div>
                  </div>
                  <Badge className={getStatusColor(credit.status)}>
                    {credit.status.charAt(0).toUpperCase() + credit.status.slice(1)}
                  </Badge>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Total Hours:</span>
                    <p className="font-medium">{credit.hours} hours</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Hours Used:</span>
                    <p className="font-medium">{credit.hoursUsed} hours</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Remaining:</span>
                    <p className="font-medium text-green-600">{credit.hours - credit.hoursUsed} hours</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Paid:</span>
                    <p className="font-medium">${credit.price.toFixed(2)}</p>
                  </div>
                </div>
                
                {credit.status === 'active' && credit.hours > credit.hoursUsed && (
                  <div className="flex justify-end">
                    <Button size="sm">
                      Use Credits
                    </Button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PurchasedCredits;
