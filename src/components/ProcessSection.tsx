import { motion, useScroll, useTransform } from "framer-motion";
import { Search, Lightbulb, Zap, TrendingUp } from "lucide-react";
import { useRef } from "react";
import processVisual from "@/assets/process-visual.jpg";

const steps = [
  { icon: Search, title: "Research", desc: "Deep-dive into your market, competitors, and audience." },
  { icon: Lightbulb, title: "Strategy", desc: "Craft a data-backed plan aligned with your goals." },
  { icon: Zap, title: "Execution", desc: "Launch campaigns across channels with precision." },
  { icon: TrendingUp, title: "Optimization", desc: "Continuously refine for maximum ROI." },
];

const ProcessSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [20, -20]);

  return (
    <section ref={ref} className="section-padding bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(222_63%_33%/0.03),transparent_50%)] pointer-events-none" />
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="heading-section mb-4">Our Process</h2>
          <p className="text-body">A proven 4-step framework for sustainable growth.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-12 lg:mb-0">
          {/* Steps */}
          <div className="grid sm:grid-cols-2 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.15, duration: 0.5, type: "spring", stiffness: 100 }}
                whileHover={{ y: -6, scale: 1.03 }}
                className="relative text-center group cursor-default card-service"
              >
                <motion.div
                  className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4 relative"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <step.icon className="w-6 h-6 text-accent" />
                  <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                </motion.div>
                <h3 className="text-lg font-semibold text-foreground mb-1 transition-colors group-hover:text-primary">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Visual */}
          <motion.div
            style={{ y: imgY }}
            className="hidden lg:block"
          >
            <motion.img
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, type: "spring", stiffness: 80 }}
              src={processVisual}
              alt="OnActive 4-step process workflow"
              className="rounded-2xl shadow-xl w-full object-cover"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
