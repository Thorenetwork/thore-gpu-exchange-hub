
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { 
  Shield, 
  Smartphone, 
  Key, 
  Eye,
  EyeOff,
  Download,
  Trash2,
  Plus,
  CheckCircle
} from "lucide-react";
import { toast } from "sonner";

const SecuritySettings = () => {
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(true);
  const [biometricEnabled, setBiometricEnabled] = useState(false);
  const [showSeedPhrase, setShowSeedPhrase] = useState(false);
  const [newDeviceName, setNewDeviceName] = useState("");

  const whitelistedDevices = [
    { id: "1", name: "MacBook Pro", type: "Desktop", lastUsed: "2024-06-18", status: "active" },
    { id: "2", name: "iPhone 15", type: "Mobile", lastUsed: "2024-06-17", status: "active" },
    { id: "3", name: "Windows PC", type: "Desktop", lastUsed: "2024-06-15", status: "inactive" }
  ];

  const seedPhrase = "abandon ability able about above absent absorb abstract absurd abuse access accident";

  const handleExportPrivateKey = () => {
    toast.success("Private key exported securely");
  };

  const handleBackupSeedPhrase = () => {
    toast.success("Seed phrase backed up successfully");
  };

  const handleAddDevice = () => {
    if (!newDeviceName) {
      toast.error("Please enter a device name");
      return;
    }
    toast.success(`Device "${newDeviceName}" added to whitelist`);
    setNewDeviceName("");
  };

  const handleRemoveDevice = (deviceName: string) => {
    toast.success(`Device "${deviceName}" removed from whitelist`);
  };

  return (
    <div className="space-y-6">
      {/* Security Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Security Overview
          </CardTitle>
          <CardDescription>Current security status and recommendations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 p-4 border rounded-lg">
              <CheckCircle className="h-6 w-6 text-green-600" />
              <div>
                <div className="font-medium">2FA Enabled</div>
                <div className="text-xs text-muted-foreground">Strong protection</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 border rounded-lg">
              <Shield className="h-6 w-6 text-blue-600" />
              <div>
                <div className="font-medium">Wallet Encrypted</div>
                <div className="text-xs text-muted-foreground">AES-256 encryption</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 border rounded-lg">
              <Key className="h-6 w-6 text-purple-600" />
              <div>
                <div className="font-medium">Seed Backed Up</div>
                <div className="text-xs text-muted-foreground">Recovery enabled</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Authentication Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Authentication Settings</CardTitle>
          <CardDescription>Manage your login and verification preferences</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium">Two-Factor Authentication</div>
              <div className="text-sm text-muted-foreground">
                Require 2FA for all transactions and logins
              </div>
            </div>
            <Switch
              checked={twoFactorEnabled}
              onCheckedChange={setTwoFactorEnabled}
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium">Biometric Authentication</div>
              <div className="text-sm text-muted-foreground">
                Use fingerprint or face recognition when available
              </div>
            </div>
            <Switch
              checked={biometricEnabled}
              onCheckedChange={setBiometricEnabled}
            />
          </div>

          {twoFactorEnabled && (
            <div className="border-t pt-4">
              <Button variant="outline">
                <Smartphone className="h-4 w-4 mr-2" />
                Configure 2FA App
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Backup & Recovery */}
      <Card>
        <CardHeader>
          <CardTitle>Backup & Recovery</CardTitle>
          <CardDescription>Secure your wallet with backup options</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="font-medium">Seed Phrase</div>
                <div className="text-sm text-muted-foreground">
                  12-word recovery phrase for wallet restoration
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowSeedPhrase(!showSeedPhrase)}
              >
                {showSeedPhrase ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </Button>
            </div>
            
            {showSeedPhrase ? (
              <div className="p-4 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
                <div className="grid grid-cols-3 gap-2 text-sm font-mono">
                  {seedPhrase.split(" ").map((word, index) => (
                    <div key={index} className="p-2 bg-white rounded border">
                      <span className="text-muted-foreground mr-2">{index + 1}.</span>
                      {word}
                    </div>
                  ))}
                </div>
                <Button onClick={handleBackupSeedPhrase} className="w-full mt-4">
                  <Download className="h-4 w-4 mr-2" />
                  Download Backup
                </Button>
              </div>
            ) : (
              <div className="p-4 bg-gray-50 rounded-lg text-center">
                <div className="text-sm text-muted-foreground">
                  Click the eye icon to view your seed phrase
                </div>
              </div>
            )}
          </div>

          <div className="border-t pt-4">
            <Button variant="outline" onClick={handleExportPrivateKey}>
              <Key className="h-4 w-4 mr-2" />
              Export Private Key
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Device Whitelist */}
      <Card>
        <CardHeader>
          <CardTitle>Device Whitelist</CardTitle>
          <CardDescription>Manage authorized devices for wallet access</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            {whitelistedDevices.map((device) => (
              <div key={device.id} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center gap-3">
                  <Smartphone className="h-5 w-5 text-gray-400" />
                  <div>
                    <div className="font-medium">{device.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {device.type} • Last used: {device.lastUsed}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant={device.status === 'active' ? 'default' : 'secondary'}>
                    {device.status}
                  </Badge>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleRemoveDevice(device.name)}
                  >
                    <Trash2 className="h-4 w-4 text-red-500" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t pt-4">
            <div className="flex gap-2">
              <Input
                placeholder="Device name"
                value={newDeviceName}
                onChange={(e) => setNewDeviceName(e.target.value)}
              />
              <Button onClick={handleAddDevice}>
                <Plus className="h-4 w-4 mr-2" />
                Add Device
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Cold Storage Options */}
      <Card>
        <CardHeader>
          <CardTitle>Cold Storage Integration</CardTitle>
          <CardDescription>Connect hardware wallets for enhanced security</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardContent className="p-4 text-center">
                <div className="h-12 w-12 bg-gray-100 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-gray-600" />
                </div>
                <div className="font-medium mb-2">Ledger</div>
                <Button variant="outline" size="sm">Connect</Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="h-12 w-12 bg-gray-100 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-gray-600" />
                </div>
                <div className="font-medium mb-2">Trezor</div>
                <Button variant="outline" size="sm">Connect</Button>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SecuritySettings;
