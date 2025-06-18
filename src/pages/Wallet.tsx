
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WalletDashboard from "@/components/wallet/WalletDashboard";
import ActivityFeed from "@/components/wallet/ActivityFeed";
import CreditUtility from "@/components/wallet/CreditUtility";
import WalletManagement from "@/components/wallet/WalletManagement";
import SecuritySettings from "@/components/wallet/SecuritySettings";
import { 
  Wallet as WalletIcon, 
  TrendingUp, 
  Shield, 
  Coins,
  Activity,
  Settings
} from "lucide-react";

const Wallet = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-primary/10 rounded-lg">
              <WalletIcon className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">GPU AI Credit Wallet</h1>
              <p className="text-muted-foreground">Your Digital Vault for AI Power – Trade, Store, and Redeem GPU Credits Securely</p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="text-green-600 border-green-600">
              <Shield className="h-3 w-3 mr-1" />
              Secured
            </Badge>
            <Badge variant="outline" className="text-blue-600 border-blue-600">
              <Coins className="h-3 w-3 mr-1" />
              Multi-Token
            </Badge>
            <Badge variant="outline" className="text-purple-600 border-purple-600">
              <TrendingUp className="h-3 w-3 mr-1" />
              Staking Enabled
            </Badge>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="dashboard" className="flex items-center gap-2">
              <WalletIcon className="h-4 w-4" />
              Dashboard
            </TabsTrigger>
            <TabsTrigger value="activity" className="flex items-center gap-2">
              <Activity className="h-4 w-4" />
              Activity
            </TabsTrigger>
            <TabsTrigger value="utility" className="flex items-center gap-2">
              <Coins className="h-4 w-4" />
              Utility
            </TabsTrigger>
            <TabsTrigger value="management" className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              Management
            </TabsTrigger>
            <TabsTrigger value="security" className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              Security
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard">
            <WalletDashboard />
          </TabsContent>

          <TabsContent value="activity">
            <ActivityFeed />
          </TabsContent>

          <TabsContent value="utility">
            <CreditUtility />
          </TabsContent>

          <TabsContent value="management">
            <WalletManagement />
          </TabsContent>

          <TabsContent value="security">
            <SecuritySettings />
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default Wallet;
