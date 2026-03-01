import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef } from "react";

const CTASection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.98]);

  return (
    <section ref={ref} className="gradient-cta section-padding relative overflow-hidden">
      <motion.div style={{ y: bgY }} className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(40_100%_48%/0.08),transparent_50%)] pointer-events-none" />
      <motion.div style={{ scale }} className="section-container text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring", stiffness: 80 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            Ready to Scale Your Business?
          </h2>
          <p className="text-primary-foreground/70 text-lg mb-8 max-w-xl mx-auto">
            Let's build a growth strategy tailored to your business goals.
          </p>
          <Link to="/contact" className="btn-primary text-lg px-10 py-4 animate-glow-pulse">
            Schedule Free Consultation
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CTASection;
