
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PurchasedCredits from "@/components/PurchasedCredits";

const Credits = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header Section */}
      <section className="bg-gradient-to-r from-primary/10 via-purple-50 to-blue-50 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              My GPU Credits
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Manage and track your purchased GPU computing credits
            </p>
          </div>
        </div>
      </section>

      {/* Credits Content */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <PurchasedCredits />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Credits;
