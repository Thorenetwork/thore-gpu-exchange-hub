
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import CreateVolumeDialog from "@/components/CreateVolumeDialog";
import {
  MapPin,
  Cpu,
  Shield,
  Star,
  Clock,
  DollarSign
} from "lucide-react";

interface GPUListing {
  id: number;
  title: string;
  provider: string;
  rating: number;
  reviews: number;
  location: string;
  price: number;
  availability: string;
  specs: string;
  verified: boolean;
  sustainable: boolean;
}

interface GPUCardProps {
  listing: GPUListing;
}

const GPUCard = ({ listing }: GPUCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardHeader>
        <div className="flex justify-between items-start mb-2">
          <div>
            <CardTitle className="text-xl">{listing.title}</CardTitle>
            <CardDescription className="text-primary font-medium">
              {listing.provider}
            </CardDescription>
          </div>
          <div className="flex flex-col gap-1">
            {listing.verified && (
              <Badge variant="secondary" className="text-xs">
                <Shield className="h-3 w-3 mr-1" />
                Verified
              </Badge>
            )}
            {listing.sustainable && (
              <Badge variant="outline" className="text-xs text-green-600 border-green-300">
                🌱 Eco
              </Badge>
            )}
          </div>
        </div>

        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 mr-1" />
            <span>{listing.rating}</span>
          </div>
          <span>•</span>
          <span>{listing.reviews} reviews</span>
          <span>•</span>
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-1" />
            <span>{listing.location}</span>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center text-sm text-muted-foreground">
            <Cpu className="h-4 w-4 mr-2" />
            <span>{listing.specs}</span>
          </div>

          <div className="flex items-center text-sm text-muted-foreground">
            <Clock className="h-4 w-4 mr-2" />
            <span>Available in {listing.availability}</span>
          </div>

          <div className="flex justify-between items-center pt-4 border-t">
            <div className="flex items-center">
              <DollarSign className="h-5 w-5 text-primary mr-1" />
              <span className="text-2xl font-bold text-primary">
                ${listing.price}
              </span>
              <span className="text-muted-foreground ml-1">/hour</span>
            </div>
            <CreateVolumeDialog 
              gpuTitle={listing.title} 
              price={listing.price}
            >
              <Button>
                Create Volume
              </Button>
            </CreateVolumeDialog>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default GPUCard;
