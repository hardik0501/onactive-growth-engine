import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Sharma",
    company: "Sharma Real Estate",
    text: "OnActive transformed our digital presence completely. We went from zero online leads to over 200 qualified leads per month within just 4 months.",
  },
  {
    name: "Priya Mehta",
    company: "StyleKart E-commerce",
    text: "Their data-driven approach to performance marketing helped us achieve a 3.5x ROAS. The team is responsive, transparent, and truly cares about results.",
  },
  {
    name: "Dr. Anil Gupta",
    company: "Gupta Healthcare Clinic",
    text: "From SEO to social media, OnActive handled everything professionally. Our appointment bookings increased by 400% in the first quarter.",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="heading-section mb-4">What Our Clients Say</h2>
        </motion.div>

        <div className="max-w-2xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="text-center"
            >
              <Quote className="w-10 h-10 text-accent/30 mx-auto mb-4" />
              <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6 italic">
                "{testimonials[current].text}"
              </p>
              <p className="font-semibold text-foreground">{testimonials[current].name}</p>
              <p className="text-sm text-muted-foreground">{testimonials[current].company}</p>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-4 mt-8">
            <button onClick={prev} className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors" aria-label="Previous testimonial">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setCurrent(i)} className={`w-2 h-2 rounded-full transition-colors ${i === current ? "bg-accent" : "bg-border"}`} aria-label={`Go to testimonial ${i + 1}`} />
              ))}
            </div>
            <button onClick={next} className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors" aria-label="Next testimonial">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
