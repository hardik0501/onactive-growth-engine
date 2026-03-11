import { motion } from "framer-motion";
import { Target, BarChart2, UserCheck, Database, Settings } from "lucide-react";

const points = [
  { icon: Target, title: "Integrated Solutions", desc: "A comprehensive suite of services that work together seamlessly." },
  { icon: BarChart2, title: "Industry Expertise", desc: "Deep domain knowledge across healthcare, HR, sales, and marketing." },
  { icon: UserCheck, title: "Client-Centric Approach", desc: "Every solution tailored to your unique business needs." },
  { icon: Database, title: "Data-Driven Decisions", desc: "Analytics and insights powering every recommendation." },
  { icon: Settings, title: "Scalable Solutions", desc: "Systems that grow with your business, from startup to enterprise." },
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,hsl(222_63%_33%/0.03),transparent_50%)] pointer-events-none" />
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="heading-section mb-4">Why Choose OnActive</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {points.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.1, duration: 0.5, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.03, x: 4 }}
              className="flex gap-4 items-start p-4 rounded-xl hover:bg-secondary/80 transition-colors cursor-default group"
            >
              <motion.div
                whileHover={{ rotate: 10, scale: 1.15 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors"
              >
                <p.icon className="w-5 h-5 text-accent" />
              </motion.div>
              <div>
                <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">{p.title}</h3>
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
