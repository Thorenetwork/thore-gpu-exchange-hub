
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  CheckCircle, 
  AlertCircle, 
  Clock, 
  Activity,
  Server,
  Database,
  Shield,
  Globe,
  Zap,
  TrendingUp
} from "lucide-react";

const Status = () => {
  const systemStatus = [
    {
      service: "API Gateway",
      status: "Operational",
      uptime: "99.99%",
      responseTime: "45ms",
      icon: Server,
      color: "green"
    },
    {
      service: "GPU Marketplace",
      status: "Operational", 
      uptime: "99.97%",
      responseTime: "120ms",
      icon: Activity,
      color: "green"
    },
    {
      service: "Payment Processing",
      status: "Operational",
      uptime: "99.98%",
      responseTime: "200ms",
      icon: Shield,
      color: "green"
    },
    {
      service: "User Authentication",
      status: "Operational",
      uptime: "99.99%",
      responseTime: "80ms",
      icon: Database,
      color: "green"
    },
    {
      service: "AI Credit Trading",
      status: "Operational",
      uptime: "99.96%",
      responseTime: "150ms",
      icon: TrendingUp,
      color: "green"
    },
    {
      service: "Global CDN",
      status: "Operational",
      uptime: "99.99%",
      responseTime: "25ms",
      icon: Globe,
      color: "green"
    }
  ];

  const recentIncidents = [
    {
      date: "2024-12-15",
      title: "Scheduled Maintenance - API Gateway",
      description: "Routine maintenance performed on API gateway infrastructure. No user impact.",
      status: "Resolved",
      duration: "30 minutes"
    },
    {
      date: "2024-12-10", 
      title: "Minor Payment Processing Delay",
      description: "Brief delay in payment confirmations due to third-party provider issues.",
      status: "Resolved",
      duration: "15 minutes"
    }
  ];

  const metrics = [
    { label: "Overall Uptime", value: "99.98%", trend: "+0.02%" },
    { label: "Average Response Time", value: "95ms", trend: "-5ms" },
    { label: "Active Users", value: "12,847", trend: "+2.3%" },
    { label: "Transactions/Hour", value: "1,234", trend: "+15%" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-500/10 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-green-100 text-green-700 border-green-300">
              <CheckCircle className="h-4 w-4 mr-2" />
              All Systems Operational
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              System Status
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Real-time status and performance metrics for all Thore Network services
            </p>
            <div className="text-sm text-muted-foreground">
              Last updated: {new Date().toLocaleString()}
            </div>
          </div>
        </div>
      </section>

      {/* Overall Metrics */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-primary mb-2">{metric.value}</div>
                  <div className="text-sm text-muted-foreground mb-1">{metric.label}</div>
                  <div className="text-xs text-green-600">{metric.trend}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* System Status */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Service Status</h2>
            <p className="text-xl text-muted-foreground">
              Current operational status of all platform services
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-4">
            {systemStatus.map((service, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <service.icon className="h-8 w-8 text-primary" />
                      <div>
                        <h3 className="text-lg font-semibold">{service.service}</h3>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <span>Uptime: {service.uptime}</span>
                          <span>Response: {service.responseTime}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className={`w-3 h-3 rounded-full bg-${service.color}-500`}></div>
                      <span className="text-green-600 font-medium">{service.status}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Incidents */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Recent Incidents</h2>
            <p className="text-xl text-muted-foreground">
              Latest updates and resolved issues
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {recentIncidents.map((incident, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{incident.title}</CardTitle>
                    <Badge variant="outline" className="text-green-600 border-green-600">
                      {incident.status}
                    </Badge>
                  </div>
                  <CardDescription>
                    {incident.date} • Duration: {incident.duration}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{incident.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe to Updates */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="bg-primary text-primary-foreground max-w-4xl mx-auto">
            <CardContent className="text-center py-16">
              <Activity className="h-16 w-16 mx-auto mb-6 opacity-90" />
              <h2 className="text-4xl font-bold mb-6">Stay Updated</h2>
              <p className="text-xl mb-8 opacity-90">
                Subscribe to status updates and get notified about incidents and maintenance windows.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg text-foreground"
                />
                <button className="px-6 py-2 bg-primary-foreground text-primary rounded-lg font-medium hover:bg-opacity-90 transition-colors">
                  Subscribe
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

export default Status;
