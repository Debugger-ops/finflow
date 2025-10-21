'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { CreditCard, BarChart3, Shield, Zap, Globe, Users } from "lucide-react";
import "./featuressection.css";

const features = [
  {
    icon: CreditCard,
    title: "Smart Payments",
    description: "Process payments seamlessly with our advanced payment gateway supporting 100+ currencies and payment methods."
  },
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description: "Get instant insights into your financial data with powerful analytics and customizable dashboards."
  },
  {
    icon: Shield,
    title: "Bank-grade Security",
    description: "Your data is protected with enterprise-level encryption and compliance with global financial standards."
  },
  {
    icon: Zap,
    title: "Lightning Fast API",
    description: "Integrate with our high-performance API in minutes. Built for scale with 99.99% uptime guarantee."
  },
  {
    icon: Globe,
    title: "Global Coverage",
    description: "Operate worldwide with multi-currency support and localized payment methods for 180+ countries."
  },
  {
    icon: Users,
    title: "Team Management",
    description: "Collaborate effectively with role-based access controls and comprehensive audit trails."
  }
];

const FeaturesSection = () => {
  return (
    <section className="features-section" id="features">
      <div className="features-header">
        <h2>
          Everything you need to <span className="gradient-text">scale your business</span>
        </h2>
        <p>Powerful features designed to streamline your financial operations and accelerate growth</p>
      </div>

      <div className="features-grid">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <Card key={index} className="feature-card">
              <CardHeader className="feature-card-header">
                <div className="feature-card-icon">
                  <Icon />
                </div>
                <CardTitle className="feature-card-title">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="feature-card-description">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="features-cta">
        <p>Ready to experience the future of finance?</p>
        <button>Explore All Features</button>
      </div>
    </section>
  );
};

export default FeaturesSection;
