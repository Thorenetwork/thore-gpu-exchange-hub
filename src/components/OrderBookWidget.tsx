
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface OrderBookEntry {
  price: number;
  quantity: number;
  total: number;
}

interface OrderBookWidgetProps {
  gpuId: string;
}

const OrderBookWidget = ({ gpuId }: OrderBookWidgetProps) => {
  const [buyOrders, setBuyOrders] = useState<OrderBookEntry[]>([]);
  const [sellOrders, setSellOrders] = useState<OrderBookEntry[]>([]);

  useEffect(() => {
    const generateOrders = () => {
      const basePrice = 2.50;
      const newBuyOrders: OrderBookEntry[] = [];
      const newSellOrders: OrderBookEntry[] = [];

      // Generate buy orders (below market price)
      for (let i = 0; i < 8; i++) {
        const price = basePrice * (1 - 0.01 - (i * 0.005));
        const quantity = Math.floor(Math.random() * 50) + 5;
        newBuyOrders.push({
          price: Number(price.toFixed(2)),
          quantity,
          total: Number((price * quantity).toFixed(2))
        });
      }

      // Generate sell orders (above market price)
      for (let i = 0; i < 8; i++) {
        const price = basePrice * (1 + 0.01 + (i * 0.005));
        const quantity = Math.floor(Math.random() * 50) + 5;
        newSellOrders.push({
          price: Number(price.toFixed(2)),
          quantity,
          total: Number((price * quantity).toFixed(2))
        });
      }

      setBuyOrders(newBuyOrders);
      setSellOrders(newSellOrders);
    };

    generateOrders();
    const interval = setInterval(generateOrders, 3000);

    return () => clearInterval(interval);
  }, [gpuId]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Order Book</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Sell Orders */}
          <div>
            <h4 className="text-sm font-medium text-red-600 mb-2">Sell Orders</h4>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-xs">Price</TableHead>
                  <TableHead className="text-xs">Size</TableHead>
                  <TableHead className="text-xs">Total</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sellOrders.slice(0, 5).reverse().map((order, index) => (
                  <TableRow key={index} className="hover:bg-red-50">
                    <TableCell className="text-xs text-red-600 font-medium">
                      ${order.price}
                    </TableCell>
                    <TableCell className="text-xs">{order.quantity}</TableCell>
                    <TableCell className="text-xs">${order.total}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Spread */}
          <div className="text-center py-2 bg-muted/50 rounded">
            <div className="text-xs text-muted-foreground">Spread</div>
            <div className="text-sm font-medium">
              ${((sellOrders[0]?.price || 0) - (buyOrders[0]?.price || 0)).toFixed(2)}
            </div>
          </div>

          {/* Buy Orders */}
          <div>
            <h4 className="text-sm font-medium text-green-600 mb-2">Buy Orders</h4>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-xs">Price</TableHead>
                  <TableHead className="text-xs">Size</TableHead>
                  <TableHead className="text-xs">Total</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {buyOrders.slice(0, 5).map((order, index) => (
                  <TableRow key={index} className="hover:bg-green-50">
                    <TableCell className="text-xs text-green-600 font-medium">
                      ${order.price}
                    </TableCell>
                    <TableCell className="text-xs">{order.quantity}</TableCell>
                    <TableCell className="text-xs">${order.total}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default OrderBookWidget;
