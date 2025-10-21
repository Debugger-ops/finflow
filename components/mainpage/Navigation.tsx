"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import "./Navigation.css";

interface NavLink {
  name: string;
  href: string;
}

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks: NavLink[] = [
    { name: "Features", href: "#features" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Benefits", href: "#benefits" },
    { name: "Pricing", href: "#pricing" },
    { name: "Testimonials", href: "#testimonials" },
  ];

  return (
    <nav className="nav">
      <div className="nav-container">
        <div className="nav-inner">
          <Link href="/" className="nav-logo">
            <div className="nav-logo-box">
              <span className="nav-logo-letter">F</span>
            </div>
            <span className="nav-logo-text">FinFlow</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="nav-links">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="nav-link">
                {link.name}
              </a>
            ))}
            <Link href="/login" className="nav-btn" style={{ textDecoration: 'none' }}>
  Login
</Link>
<Link href="/register" className="nav-btn gradient" style={{ textDecoration: 'none' }}>
  Get Started
</Link>

          </div>

          {/* Mobile Menu Button */}
          <button
            className="menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="mobile-menu">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="mobile-link"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="mobile-buttons">
              <Link href="/login" className="nav-btn ghost">
                Login
              </Link>
              <Link href="/register" className="nav-btn gradient">
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
