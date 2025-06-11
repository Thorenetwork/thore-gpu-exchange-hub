
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

interface Order {
  price: number;
  quantity: number;
  total: number;
}

const OrderBook = () => {
  const [buyOrders, setBuyOrders] = useState<Order[]>([]);
  const [sellOrders, setSellOrders] = useState<Order[]>([]);

  // Generate mock order book data
  useEffect(() => {
    const generateOrders = (basePrice: number, isBuy: boolean) => {
      const orders: Order[] = [];
      for (let i = 0; i < 8; i++) {
        const priceVariation = isBuy ? -0.02 - (i * 0.01) : 0.02 + (i * 0.01);
        const price = basePrice * (1 + priceVariation);
        const quantity = Math.floor(Math.random() * 50) + 5;
        orders.push({
          price: Number(price.toFixed(2)),
          quantity,
          total: Number((price * quantity).toFixed(2))
        });
      }
      return orders;
    };

    const updateOrderBook = () => {
      const basePrice = 2.50; // Base price for NVIDIA A100
      setBuyOrders(generateOrders(basePrice, true));
      setSellOrders(generateOrders(basePrice, false));
    };

    updateOrderBook();
    const interval = setInterval(updateOrderBook, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Order Book - NVIDIA A100</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Buy Orders */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="default">Buy Orders</Badge>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Price</TableHead>
                  <TableHead>Hours</TableHead>
                  <TableHead>Total</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {buyOrders.map((order, index) => (
                  <TableRow key={index} className="hover:bg-green-50">
                    <TableCell className="font-medium text-green-600">
                      ${order.price}
                    </TableCell>
                    <TableCell>{order.quantity}</TableCell>
                    <TableCell>${order.total}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Sell Orders */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="destructive">Sell Orders</Badge>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Price</TableHead>
                  <TableHead>Hours</TableHead>
                  <TableHead>Total</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sellOrders.map((order, index) => (
                  <TableRow key={index} className="hover:bg-red-50">
                    <TableCell className="font-medium text-red-600">
                      ${order.price}
                    </TableCell>
                    <TableCell>{order.quantity}</TableCell>
                    <TableCell>${order.total}</TableCell>
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

export default OrderBook;
