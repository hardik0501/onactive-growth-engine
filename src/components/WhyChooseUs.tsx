import { motion } from "framer-motion";
import { Target, BarChart2, UserCheck, Database, Settings } from "lucide-react";

const points = [
  { icon: Target, title: "ROI-Focused Approach", desc: "Every campaign optimized for measurable returns." },
  { icon: BarChart2, title: "Transparent Reporting", desc: "Real-time dashboards and weekly performance reports." },
  { icon: UserCheck, title: "Dedicated Account Manager", desc: "A single point of contact for seamless communication." },
  { icon: Database, title: "Data-Driven Campaigns", desc: "Decisions backed by analytics, not guesswork." },
  { icon: Settings, title: "Customized Strategies", desc: "Tailored solutions for your unique business needs." },
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="heading-section mb-4">Why Choose OnActive</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {points.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex gap-4 items-start"
            >
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                <p.icon className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
