import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/onactive-logo.png";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Case Studies", href: "/#case-studies" },
  { label: "Contact", href: "/contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="section-container flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="OnActive Logo" className="h-10 md:h-12 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className={`text-sm font-medium transition-colors hover:text-accent ${
                location.pathname === link.href ? "text-accent" : "text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a href="tel:+919784848343" className="btn-primary text-sm">
            <Phone className="w-4 h-4" />
            Call Now
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {open && (
        <div className="md:hidden bg-background border-t border-border animate-fade-up">
          <nav className="section-container py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-foreground hover:text-accent transition-colors py-2"
              >
                {link.label}
              </Link>
            ))}
            <a href="tel:+919784848343" className="btn-primary text-sm w-fit">
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
