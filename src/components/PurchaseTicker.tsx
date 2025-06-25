
import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { X, ShoppingCart } from "lucide-react";

interface PurchaseNotification {
  id: string;
  name: string;
  amount: number;
  time: string;
}

const PurchaseTicker = () => {
  const [notifications, setNotifications] = useState<PurchaseNotification[]>([]);

  const sampleNames = [
    "Mr Ravi Subra",
    "Ms Sarah Chen",
    "Dr Michael Johnson",
    "Mr Ahmed Hassan",
    "Ms Emily Rodriguez",
    "Mr David Kim",
    "Ms Priya Patel",
    "Mr James Wilson",
    "Ms Lisa Zhang",
    "Mr Carlos Martinez",
    "Ms Anna Kowalski",
    "Mr Rajesh Kumar",
    "Ms Maria Silva",
    "Mr Tom Anderson",
    "Ms Fatima Al-Zahra"
  ];

  const generateRandomPurchase = (): PurchaseNotification => {
    const randomName = sampleNames[Math.floor(Math.random() * sampleNames.length)];
    const randomAmount = Math.floor(Math.random() * 95) + 5; // 5-99 credits
    const now = new Date();
    const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    return {
      id: Date.now().toString(),
      name: randomName,
      amount: randomAmount,
      time: time
    };
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const newNotification = generateRandomPurchase();
      setNotifications(prev => [newNotification, ...prev.slice(0, 2)]); // Keep max 3 notifications
      
      // Auto remove after 8 seconds
      setTimeout(() => {
        setNotifications(prev => prev.filter(n => n.id !== newNotification.id));
      }, 8000);
    }, 5000); // New notification every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const removeNotification = (id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  if (notifications.length === 0) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 space-y-2">
      {notifications.map((notification, index) => (
        <div
          key={notification.id}
          className="bg-primary text-primary-foreground px-4 py-3 rounded-lg shadow-lg border animate-fade-in max-w-sm"
          style={{
            animationDelay: `${index * 0.1}s`
          }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingCart className="h-4 w-4" />
              <div className="text-sm">
                <div className="font-medium">{notification.name}</div>
                <div className="text-xs opacity-90">
                  bought {notification.amount} GPU Credits at {notification.time}
                </div>
              </div>
            </div>
            <button
              onClick={() => removeNotification(notification.id)}
              className="ml-2 p-1 hover:bg-primary-foreground/20 rounded"
            >
              <X className="h-3 w-3" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PurchaseTicker;
