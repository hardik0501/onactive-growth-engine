import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";
import heroDashboard from "@/assets/hero-dashboard.png";

const HeroSection = () => {
  return (
    <section className="gradient-hero overflow-hidden">
      <div className="section-container py-16 md:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-primary-foreground"
          >
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-xs font-medium text-primary-foreground/80">Since 2019 • Jaipur, India</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-[3.25rem] font-bold leading-tight mb-6">
              360° Digital Marketing Agency in Jaipur Driving{" "}
              <span className="text-accent">Real Business Growth</span>
            </h1>

            <p className="text-base md:text-lg text-primary-foreground/75 mb-8 max-w-lg leading-relaxed">
              Performance-driven marketing strategies that convert clicks into customers.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary">
                Book Free Strategy Call
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="#case-studies" className="btn-outline border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                <Play className="w-4 h-4" />
                View Our Work
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:block"
          >
            <img
              src={heroDashboard}
              alt="Digital Marketing Dashboard showing growth analytics"
              className="rounded-2xl shadow-2xl w-full"
              loading="eager"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
