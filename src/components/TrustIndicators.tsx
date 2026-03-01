import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Users, IndianRupee, Rocket } from "lucide-react";

const stats = [
  { icon: Calendar, label: "Since", value: 2019, suffix: "", prefix: "" },
  { icon: Users, label: "Clients Served", value: 100, suffix: "+", prefix: "" },
  { icon: IndianRupee, label: "Ad Spend Managed", value: 5, suffix: " Cr+", prefix: "₹" },
  { icon: Rocket, label: "Campaigns Launched", value: 200, suffix: "+", prefix: "" },
];

const Counter = ({ target, prefix, suffix }: { target: number; prefix: string; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1500;
          const steps = 40;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-3xl md:text-4xl font-bold text-primary">
      {prefix}{count}{suffix}
    </div>
  );
};

const TrustIndicators = () => {
  return (
    <section className="bg-secondary section-padding">
      <div className="section-container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <stat.icon className="w-8 h-8 text-accent mx-auto mb-3" />
              <Counter target={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;
