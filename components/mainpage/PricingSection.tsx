"use client";
import React from "react";
import { Check } from "lucide-react";
import "./PricingSection.css";

interface Plan {
  name: string;
  price: string;
  period: string;
  features: string[];
  popular?: boolean;
}

const plans: Plan[] = [
  {
    name: "Starter",
    price: "Free",
    period: "Forever",
    features: [
      "Basic budgeting tools",
      "Track up to 2 accounts",
      "Email support",
      "Community access",
    ],
  },
  {
    name: "Pro",
    price: "$12",
    period: "/month",
    features: [
      "Unlimited accounts",
      "Advanced analytics",
      "Priority support",
      "Smart financial insights",
    ],
    popular: true,
  },
  {
    name: "Business",
    price: "$25",
    period: "/month",
    features: [
      "Team collaboration",
      "Custom integrations",
      "Dedicated manager",
      "All Pro features included",
    ],
  },
];

const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="pricing">
      <div className="pricing-container">
        <div className="pricing-header">
          <h2 className="pricing-title">
            Choose Your <span className="highlight">Perfect Plan</span>
          </h2>
          <p className="pricing-subtitle">
            Simple, transparent pricing. No hidden fees. Upgrade anytime.
          </p>
        </div>

        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`pricing-card ${plan.popular ? "popular" : ""}`}
            >
              {plan.popular && <div className="popular-badge">Most Popular</div>}
              <h3 className="plan-name">{plan.name}</h3>
              <p className="plan-price">
                <span>{plan.price}</span> <small>{plan.period}</small>
              </p>
              <ul className="plan-features">
                {plan.features.map((feature, i) => (
                  <li key={i} className="feature-item">
                    <Check size={18} className="check-icon" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="plan-button">
                {plan.popular ? "Get Started" : "Try Now"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
