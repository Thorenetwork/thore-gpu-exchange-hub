
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

interface GPUListingsProps {
  filteredListings: GPUListing[];
}

const GPUListings = ({ filteredListings }: GPUListingsProps) => {
  return (
    <>
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
    </>
  );
};

export default GPUListings;
