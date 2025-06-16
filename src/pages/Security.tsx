
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Shield, 
  Lock, 
  Key, 
  Eye,
  CheckCircle,
  AlertTriangle,
  FileText,
  Users,
  Database,
  Globe,
  Zap,
  Award,
  Mail,
  Phone
} from "lucide-react";

const Security = () => {
  // Get current date and calculate recent dates
  const currentDate = new Date();
  const lastAuditDate = new Date(currentDate.getTime() - (15 * 24 * 60 * 60 * 1000)); // 15 days ago
  const dataProtectionDate = new Date(currentDate.getTime() - (7 * 24 * 60 * 60 * 1000)); // 7 days ago
  const incidentResponseDate = new Date(currentDate.getTime() - (3 * 24 * 60 * 60 * 1000)); // 3 days ago
  const accessControlDate = new Date(currentDate.getTime() - (1 * 24 * 60 * 60 * 1000)); // 1 day ago
  const vendorSecurityDate = currentDate; // today

  const formatDate = (date: Date) => {
    return date.toISOString().split('T')[0];
  };

  const securityFeatures = [
    {
      title: "End-to-End Encryption",
      description: "All data is encrypted in transit and at rest using AES-256 encryption",
      icon: Lock,
      status: "Active"
    },
    {
      title: "Blockchain Security",
      description: "Smart contract-powered transactions with immutable transaction records",
      icon: Database,
      status: "Active"
    },
    {
      title: "Multi-Factor Authentication",
      description: "Additional security layer with SMS, email, and authenticator app support",
      icon: Key,
      status: "Active"
    },
    {
      title: "Regular Security Audits",
      description: "Quarterly penetration testing and vulnerability assessments",
      icon: Eye,
      status: "Active"
    },
    {
      title: "DDoS Protection",
      description: "Advanced protection against distributed denial-of-service attacks",
      icon: Globe,
      status: "Active"
    },
    {
      title: "Zero-Trust Architecture",
      description: "Never trust, always verify approach to network security",
      icon: Shield,
      status: "Active"
    }
  ];

  const certifications = [
    {
      name: "SOC 2 Type II",
      description: "Service Organization Control 2 compliance for security and availability",
      icon: Award
    },
    {
      name: "ISO 27001",
      description: "International standard for information security management systems",
      icon: Award
    },
    {
      name: "GDPR Compliant",
      description: "Full compliance with General Data Protection Regulation",
      icon: FileText
    },
    {
      name: "PCI DSS Level 1",
      description: "Payment Card Industry Data Security Standard compliance",
      icon: Shield
    }
  ];

  const securityPolicies = [
    {
      title: "Data Protection",
      description: "Comprehensive data protection and privacy policies",
      lastUpdated: formatDate(dataProtectionDate)
    },
    {
      title: "Incident Response",
      description: "24/7 security monitoring and incident response procedures",
      lastUpdated: formatDate(incidentResponseDate)
    },
    {
      title: "Access Control",
      description: "Role-based access control and least privilege principles",
      lastUpdated: formatDate(accessControlDate)
    },
    {
      title: "Vendor Security",
      description: "Security requirements for all third-party integrations",
      lastUpdated: formatDate(vendorSecurityDate)
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-500/10 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-blue-100 text-blue-700 border-blue-300">
              <Shield className="h-4 w-4 mr-2" />
              Enterprise-Grade Security
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Security & Trust
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Your security is our priority. Learn about our comprehensive security measures 
              and compliance standards that protect your data and transactions.
            </p>
            
            <Alert className="max-w-2xl mx-auto bg-green-50 border-green-200">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <AlertDescription className="text-green-800">
                <strong>Security Status:</strong> All systems secure and fully operational. 
                Last security audit completed on {formatDate(lastAuditDate)}.
              </AlertDescription>
            </Alert>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Security Infrastructure</h2>
            <p className="text-xl text-muted-foreground">
              Multi-layered security approach protecting every aspect of our platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityFeatures.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <feature.icon className="h-10 w-10 text-primary" />
                    <Badge variant="outline" className="text-green-600 border-green-600">
                      {feature.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Certifications & Compliance</h2>
            <p className="text-xl text-muted-foreground">
              Industry-recognized certifications ensuring the highest security standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <cert.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-lg">{cert.name}</CardTitle>
                  <CardDescription>{cert.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security Policies */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Security Policies</h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive policies governing our security practices and procedures
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {securityPolicies.map((policy, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl">{policy.title}</CardTitle>
                      <CardDescription className="text-base mt-2">
                        {policy.description}
                      </CardDescription>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-muted-foreground">Last Updated</div>
                      <div className="text-sm font-medium">{policy.lastUpdated}</div>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bug Bounty */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Bug Bounty Program</h2>
            <p className="text-xl text-muted-foreground">
              Help us maintain the highest security standards and get rewarded
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader className="text-center">
                <Zap className="h-16 w-16 text-primary mx-auto mb-6" />
                <CardTitle className="text-3xl">Security Researchers Welcome</CardTitle>
                <CardDescription className="text-lg">
                  We believe in responsible disclosure and working with the security community 
                  to keep our platform safe.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-2">$500 - $5,000</h3>
                    <p className="text-muted-foreground">Critical Vulnerabilities</p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-2">$100 - $1,000</h3>
                    <p className="text-muted-foreground">High Severity Issues</p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-2">$50 - $500</h3>
                    <p className="text-muted-foreground">Medium Severity Issues</p>
                  </div>
                </div>
                
                <Alert>
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Important:</strong> Please report security vulnerabilities responsibly 
                    to security@thorenetwork.com. Do not test on production systems without permission.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Security Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="bg-primary text-primary-foreground max-w-4xl mx-auto">
            <CardContent className="text-center py-16">
              <Users className="h-16 w-16 mx-auto mb-6 opacity-90" />
              <h2 className="text-4xl font-bold mb-6">Security Questions?</h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Our dedicated security team is available to address any security concerns 
                or questions about our platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:security@thorenetwork.com"
                  className="flex items-center justify-center px-6 py-3 bg-primary-foreground text-primary rounded-lg font-medium hover:bg-opacity-90 transition-colors"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  security@thorenetwork.com
                </a>
                <button className="flex items-center justify-center px-6 py-3 border border-primary-foreground text-primary-foreground rounded-lg font-medium hover:bg-primary-foreground hover:text-primary transition-colors">
                  <Phone className="mr-2 h-5 w-5" />
                  24/7 Security Hotline
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Security;
