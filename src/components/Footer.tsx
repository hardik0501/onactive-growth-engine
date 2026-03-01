import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/onactive-logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="section-container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <img src={logo} alt="OnActive" className="h-10 brightness-0 invert" />
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              360° Digital Marketing Agency driving real business growth since 2019.
            </p>
            <div className="flex gap-3">
              <a
                href="https://wa.me/919784848343"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="WhatsApp"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About", "Services", "Case Studies", "Contact"].map((item) => (
                <li key={item}>
                  <Link to={item === "Home" ? "/" : item === "Contact" ? "/contact" : `/#${item.toLowerCase().replace(" ", "-")}`} className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-2">
              {["Performance Marketing", "SEO", "Social Media", "Web Development", "Branding", "Video Marketing"].map((s) => (
                <li key={s}>
                  <span className="text-sm text-primary-foreground/70">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                <span className="text-sm text-primary-foreground/70">Jaipur, Rajasthan, India</span>
              </li>
              <li>
                <a href="tel:+919784848343" className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                  <Phone className="w-4 h-4 text-accent shrink-0" />
                  +91 97848 48343
                </a>
              </li>
              <li>
                <a href="mailto:hello@onactive.in" className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                  <Mail className="w-4 h-4 text-accent shrink-0" />
                  hello@onactive.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center">
          <p className="text-sm text-primary-foreground/50">© {new Date().getFullYear()} OnActive. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
