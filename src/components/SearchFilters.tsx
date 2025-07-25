
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter } from "lucide-react";

const SearchFilters = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [selectedGpuType, setSelectedGpuType] = useState("all");

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 bg-background p-6 rounded-lg shadow-sm border">
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search GPUs or providers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        
        <Select value={selectedRegion} onValueChange={setSelectedRegion}>
          <SelectTrigger>
            <SelectValue placeholder="Region" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Regions</SelectItem>
            <SelectItem value="US">United States</SelectItem>
            <SelectItem value="EU">Europe</SelectItem>
            <SelectItem value="Asia">Asia Pacific</SelectItem>
          </SelectContent>
        </Select>

        <Select value={selectedGpuType} onValueChange={setSelectedGpuType}>
          <SelectTrigger>
            <SelectValue placeholder="GPU Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All GPUs</SelectItem>
            <SelectItem value="A100">NVIDIA A100</SelectItem>
            <SelectItem value="H100">NVIDIA H100</SelectItem>
            <SelectItem value="H200">NVIDIA H200</SelectItem>
            <SelectItem value="V100">NVIDIA V100</SelectItem>
            <SelectItem value="RTX">NVIDIA RTX</SelectItem>
            <SelectItem value="Thor">Thor T78</SelectItem>
            <SelectItem value="AMD">AMD</SelectItem>
            <SelectItem value="Intel">Intel</SelectItem>
            <SelectItem value="TPU">Google TPU</SelectItem>
          </SelectContent>
        </Select>

        <Button className="w-full">
          <Filter className="h-4 w-4 mr-2" />
          More Filters
        </Button>
      </div>
    </div>
  );
};

export default SearchFilters;
