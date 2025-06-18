
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Activity, 
  ArrowUp, 
  ArrowDown, 
  Coins, 
  Pickaxe,
  Gift,
  ExternalLink
} from "lucide-react";

interface Transaction {
  id: string;
  type: 'sent' | 'received' | 'redeemed' | 'staked' | 'mined' | 'reward';
  amount: number;
  timestamp: string;
  status: 'completed' | 'pending' | 'failed';
  txHash?: string;
  description: string;
}

const ActivityFeed = () => {
  const transactions: Transaction[] = [
    {
      id: '1',
      type: 'received',
      amount: 500,
      timestamp: '2024-06-18T10:30:00Z',
      status: 'completed',
      txHash: '0x1234...5678',
      description: 'Credits purchased with THR'
    },
    {
      id: '2',
      type: 'staked',
      amount: 1000,
      timestamp: '2024-06-18T09:15:00Z',
      status: 'completed',
      txHash: '0x2345...6789',
      description: 'Staked for 30-day rewards'
    },
    {
      id: '3',
      type: 'redeemed',
      amount: 250,
      timestamp: '2024-06-18T08:45:00Z',
      status: 'completed',
      txHash: '0x3456...7890',
      description: 'GPU compute time - NVIDIA H100'
    },
    {
      id: '4',
      type: 'reward',
      amount: 75,
      timestamp: '2024-06-17T18:00:00Z',
      status: 'completed',
      txHash: '0x4567...8901',
      description: 'Staking rewards distribution'
    },
    {
      id: '5',
      type: 'sent',
      amount: 300,
      timestamp: '2024-06-17T14:20:00Z',
      status: 'completed',
      txHash: '0x5678...9012',
      description: 'Transfer to 0x742d...F3A4'
    },
    {
      id: '6',
      type: 'mined',
      amount: 150,
      timestamp: '2024-06-17T12:00:00Z',
      status: 'completed',
      txHash: '0x6789...0123',
      description: 'GPU mining rewards'
    }
  ];

  const getTransactionIcon = (type: string) => {
    switch (type) {
      case 'sent':
        return <ArrowUp className="h-4 w-4 text-red-500" />;
      case 'received':
        return <ArrowDown className="h-4 w-4 text-green-500" />;
      case 'redeemed':
        return <Coins className="h-4 w-4 text-blue-500" />;
      case 'staked':
        return <Activity className="h-4 w-4 text-purple-500" />;
      case 'mined':
        return <Pickaxe className="h-4 w-4 text-orange-500" />;
      case 'reward':
        return <Gift className="h-4 w-4 text-green-600" />;
      default:
        return <Activity className="h-4 w-4" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return <Badge className="bg-green-600">Completed</Badge>;
      case 'pending':
        return <Badge variant="outline" className="text-yellow-600 border-yellow-600">Pending</Badge>;
      case 'failed':
        return <Badge variant="destructive">Failed</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="h-5 w-5" />
            Transaction History
          </CardTitle>
          <CardDescription>Recent wallet activity and transactions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {transactions.map((tx) => (
              <div key={tx.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-gray-100 rounded-full">
                    {getTransactionIcon(tx.type)}
                  </div>
                  <div>
                    <div className="font-medium capitalize">{tx.type}</div>
                    <div className="text-sm text-muted-foreground">{tx.description}</div>
                    <div className="text-xs text-muted-foreground">
                      {new Date(tx.timestamp).toLocaleString()}
                    </div>
                  </div>
                </div>
                
                <div className="text-right space-y-2">
                  <div className="font-bold">
                    {tx.type === 'sent' ? '-' : '+'}
                    {tx.amount.toLocaleString()} credits
                  </div>
                  <div className="flex items-center gap-2">
                    {getStatusBadge(tx.status)}
                    {tx.txHash && (
                      <Button variant="ghost" size="sm">
                        <ExternalLink className="h-3 w-3" />
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 text-center">
            <Button variant="outline">Load More Transactions</Button>
          </div>
        </CardContent>
      </Card>

      {/* Activity Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <ArrowDown className="h-8 w-8 text-green-500" />
              <div>
                <div className="text-2xl font-bold">2,150</div>
                <div className="text-sm text-muted-foreground">Credits Received</div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <ArrowUp className="h-8 w-8 text-red-500" />
              <div>
                <div className="text-2xl font-bold">550</div>
                <div className="text-sm text-muted-foreground">Credits Sent</div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <Gift className="h-8 w-8 text-purple-500" />
              <div>
                <div className="text-2xl font-bold">225</div>
                <div className="text-sm text-muted-foreground">Rewards Earned</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ActivityFeed;
