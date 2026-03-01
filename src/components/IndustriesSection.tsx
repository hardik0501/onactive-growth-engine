import { motion } from "framer-motion";
import { Building2, ShoppingCart, Heart, GraduationCap, UtensilsCrossed, Store } from "lucide-react";

const industries = [
  { icon: Building2, name: "Real Estate" },
  { icon: ShoppingCart, name: "E-commerce" },
  { icon: Heart, name: "Healthcare" },
  { icon: GraduationCap, name: "Education" },
  { icon: UtensilsCrossed, name: "Hospitality" },
  { icon: Store, name: "Local Businesses" },
];

const IndustriesSection = () => {
  return (
    <section className="section-padding bg-secondary relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_80%,hsl(40_100%_48%/0.03),transparent_50%)] pointer-events-none" />
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="heading-section mb-4">Industries We Serve</h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.08, duration: 0.5, type: "spring", stiffness: 120 }}
              whileHover={{
                y: -8,
                scale: 1.05,
                transition: { duration: 0.25, type: "spring", stiffness: 400 },
              }}
              className="card-service text-center py-8 cursor-default group"
            >
              <motion.div
                whileHover={{ rotateY: 180 }}
                transition={{ duration: 0.5 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <ind.icon className="w-8 h-8 text-accent mx-auto mb-3 transition-colors group-hover:text-primary" />
              </motion.div>
              <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">{ind.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
