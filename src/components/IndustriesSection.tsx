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
    <section className="section-padding bg-secondary">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="heading-section mb-4">Industries We Serve</h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="card-service text-center py-8"
            >
              <ind.icon className="w-8 h-8 text-accent mx-auto mb-3" />
              <p className="text-sm font-medium text-foreground">{ind.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
