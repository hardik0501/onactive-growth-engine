import { motion } from "framer-motion";
import { Search, Lightbulb, Zap, TrendingUp } from "lucide-react";

const steps = [
  { icon: Search, title: "Research", desc: "Deep-dive into your market, competitors, and audience." },
  { icon: Lightbulb, title: "Strategy", desc: "Craft a data-backed plan aligned with your goals." },
  { icon: Zap, title: "Execution", desc: "Launch campaigns across channels with precision." },
  { icon: TrendingUp, title: "Optimization", desc: "Continuously refine for maximum ROI." },
];

const ProcessSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="heading-section mb-4">Our Process</h2>
          <p className="text-body">A proven 4-step framework for sustainable growth.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative text-center"
            >
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <step.icon className="w-7 h-7 text-accent" />
              </div>
              <div className="absolute top-8 left-[60%] right-0 h-px bg-border hidden lg:block last:hidden" style={{ display: i === 3 ? 'none' : undefined }} />
              <span className="text-xs font-bold text-accent mb-1 block">Step {i + 1}</span>
              <h3 className="text-lg font-semibold text-foreground mb-1">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
