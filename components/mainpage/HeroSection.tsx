'use client';

import { ArrowRight, Play } from "lucide-react";
import './herosection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      {/* Background gradient */}
      <div className="hero-gradient" />
      
      {/* Floating elements */}
      <div className="floating-elements">
        <div className="floating-element floating-element-1" />
        <div className="floating-element floating-element-2" />
        <div className="floating-element floating-element-3" />
      </div>

      <div className="hero-container">
        <div className="hero-content">
          {/* Badge */}
          <div className="hero-badge">
            <span className="badge-indicator" />
            Now live with advanced API integration
          </div>

          {/* Main headline */}
          <h1 className="hero-title">
            The Future of
            <span className="hero-title-gradient">
              Financial Technology
            </span>
          </h1>

          {/* Subheadline */}
          <p className="hero-subtitle">
            Streamline payments, analytics, and financial operations with our cutting-edge platform. 
            Built for modern businesses that demand speed, security, and scalability.
          </p>

          {/* CTA Buttons */}
          <div className="hero-buttons">
            <button className="btn-start btn-lg btn-border-none">
              Start Free Trial
              <ArrowRight className="btn-icon btn-icon-arrow" />
            </button>
            <button className="btn-demo btn-lg ">
              <Play className="btn-icon btn-icon-left" />
              Watch Demo
            </button>
          </div>

          {/* Trust indicators */}
          <div className="trust-indicators">
            <p className="trust-text">Trusted by 10,000+ businesses worldwide</p>
            <div className="trust-logos">
              <div className="trust-logo">TechCorp</div>
              <div className="trust-logo">StartupXYZ</div>
              <div className="trust-logo">GlobalInc</div>
              <div className="trust-logo">InnovateLab</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="hero-wave">
        <svg viewBox="0 0 1440 320" className="wave-svg">
          <path d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;