import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import heroDashboard from "@/assets/hero-dashboard.png";

const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  return (
    <section ref={ref} className="gradient-hero overflow-hidden relative">
      {/* Parallax floating shapes */}
      <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], [0, -60]) }} className="absolute top-20 left-10 w-64 h-64 rounded-full bg-accent/5 blur-3xl pointer-events-none" />
      <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], [0, -100]) }} className="absolute bottom-10 right-20 w-96 h-96 rounded-full bg-primary-foreground/5 blur-3xl pointer-events-none" />

      <div className="section-container py-12 md:py-20 lg:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div style={{ y, opacity }} className="text-primary-foreground">
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-primary-foreground/10 rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-xs font-medium text-primary-foreground/80">Since 2019 • Jaipur, India</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-2xl md:text-3xl lg:text-4xl xl:text-[3.25rem] font-bold leading-tight mb-6"
            >
              Empowering Businesses to Achieve{" "}
              <span className="text-accent">Operational Excellence</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm md:text-base lg:text-lg text-primary-foreground/75 mb-8 max-w-lg leading-relaxed"
            >
              EPBX Solutions • TeleCRM • HRMS Development • Recruitment & Consulting • Digital Marketing — all under one roof.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <Link to="/contact" className="btn-primary animate-glow-pulse text-sm md:text-base justify-center">
                Book Free Strategy Call
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="#case-studies" className="btn-outline border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground text-sm md:text-base justify-center">
                <Play className="w-4 h-4" />
                View Our Work
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            style={{ y: imgY, scale: imgScale }}
            className="hidden lg:block"
          >
            <motion.div
              initial={{ opacity: 0, x: 60, rotateY: 10 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="animate-float-slow"
            >
              <img
                src={heroDashboard}
                alt="Digital Marketing Dashboard showing growth analytics"
                className="rounded-2xl shadow-2xl w-full"
                loading="eager"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
