
import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import GPUCard from "@/components/GPUCard";
import { Cpu } from "lucide-react";

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

const mockListings: GPUListing[] = [
  {
    id: 1,
    title: "NVIDIA A100 80GB",
    provider: "CloudGPU Pro",
    rating: 4.8,
    reviews: 124,
    location: "US East",
    price: 2.50,
    availability: "2 minutes",
    specs: "80GB HBM2e, 6912 CUDA Cores",
    verified: true,
    sustainable: true
  },
  {
    id: 2,
    title: "NVIDIA H100 80GB",
    provider: "AI Compute Hub",
    rating: 4.9,
    reviews: 89,
    location: "EU West",
    price: 3.75,
    availability: "5 minutes",
    specs: "80GB HBM3, 16896 CUDA Cores",
    verified: true,
    sustainable: false
  },
  {
    id: 3,
    title: "Thor T78 GPU",
    provider: "Thor Networks",
    rating: 4.7,
    reviews: 67,
    location: "Asia Pacific",
    price: 4.25,
    availability: "1 minute",
    specs: "128GB Memory, Custom Architecture",
    verified: true,
    sustainable: true
  },
  {
    id: 4,
    title: "NVIDIA V100 32GB",
    provider: "Budget GPU",
    rating: 4.5,
    reviews: 156,
    location: "US West",
    price: 1.85,
    availability: "10 minutes",
    specs: "32GB HBM2, 5120 CUDA Cores",
    verified: false,
    sustainable: false
  },
  {
    id: 5,
    title: "AMD MI250X",
    provider: "OpenCompute",
    rating: 4.6,
    reviews: 43,
    location: "EU Central",
    price: 2.10,
    availability: "3 minutes",
    specs: "128GB HBM2e, 14080 Stream Processors",
    verified: true,
    sustainable: true
  },
  {
    id: 6,
    title: "NVIDIA H200 141GB",
    provider: "Elite GPU",
    rating: 4.9,
    reviews: 28,
    location: "US East",
    price: 4.50,
    availability: "8 minutes",
    specs: "141GB HBM3e, 16896 CUDA Cores",
    verified: true,
    sustainable: false
  }
];

const GPUListings = () => {
  const [filteredListings] = useState<GPUListing[]>(mockListings);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">
          {filteredListings.length} Available GPU Credits
        </h2>
        <Select defaultValue="price">
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="price">Price: Low to High</SelectItem>
            <SelectItem value="price-desc">Price: High to Low</SelectItem>
            <SelectItem value="rating">Highest Rated</SelectItem>
            <SelectItem value="availability">Availability</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredListings.map((listing) => (
          <GPUCard key={listing.id} listing={listing} />
        ))}
      </div>

      {filteredListings.length === 0 && (
        <div className="text-center py-12">
          <Cpu className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">No GPUs Found</h3>
          <p className="text-muted-foreground">
            Try adjusting your search criteria or filters
          </p>
        </div>
      )}
    </div>
  );
};

export default GPUListings;
