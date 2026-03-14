import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Sharma",
    company: "Sharma Real Estate",
    text: "OnActive transformed our digital presence completely. We went from zero online leads to over 200 qualified leads per month within just 4 months.",
    rating: 5,
    initials: "RS",
  },
  {
    name: "Priya Mehta",
    company: "StyleKart E-commerce",
    text: "Their data-driven approach to performance marketing helped us achieve a 3.5x ROAS. The team is responsive, transparent, and truly cares about results.",
    rating: 5,
    initials: "PM",
  },
  {
    name: "Dr. Anil Gupta",
    company: "Gupta Healthcare Clinic",
    text: "From SEO to social media, OnActive handled everything professionally. Our appointment bookings increased by 400% in the first quarter.",
    rating: 5,
    initials: "AG",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(222_63%_33%/0.03),transparent_50%)] pointer-events-none" />
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="heading-section mb-4">What Our Clients Say</h2>
          <p className="text-body">Trusted by 100+ businesses across India</p>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.4, type: "spring", stiffness: 100 }}
              className="card-service text-center py-8 md:py-12 px-6 md:px-12"
            >
              <Quote className="w-10 h-10 text-accent/30 mx-auto mb-4" />
              
              {/* Star rating */}
              <div className="flex justify-center gap-1 mb-5">
                {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                ))}
              </div>

              <p className="text-base md:text-lg lg:text-xl text-foreground leading-relaxed mb-8 italic">
                "{testimonials[current].text}"
              </p>

              {/* Avatar + Info */}
              <div className="flex items-center justify-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                  {testimonials[current].initials}
                </div>
                <div className="text-left">
                  <p className="font-semibold text-foreground">{testimonials[current].name}</p>
                  <p className="text-sm text-muted-foreground">{testimonials[current].company}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-4 mt-8">
            <button onClick={prev} className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-secondary hover:border-accent transition-all" aria-label="Previous testimonial">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${i === current ? "bg-accent w-6" : "bg-border w-2 hover:bg-muted-foreground"}`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button onClick={next} className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-secondary hover:border-accent transition-all" aria-label="Next testimonial">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
