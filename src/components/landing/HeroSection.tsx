import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Shield, Building2, Stethoscope, ArrowRight, ChevronLeft, ChevronRight, Activity, Brain } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import heroDoctor from "@/assets/hero-doctor.jpg";
import heroPatient from "@/assets/hero-patient.jpg";
import heroTelehealth from "@/assets/hero-telehealth.jpg";
import heroTeam from "@/assets/hero-team.jpg";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease },
});

const slides = [
  { src: heroDoctor, alt: "Professional doctor ready to help", caption: "Expert Doctors" },
  { src: heroPatient, alt: "Patient with health monitoring smartwatch", caption: "Patient Monitoring" },
  { src: heroTelehealth, alt: "Telehealth video consultation", caption: "Virtual Care" },
  { src: heroTeam, alt: "NexCare medical team", caption: "Our Team" },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((c) => (c + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 0, scale: 0.95 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -300 : 300, opacity: 0, scale: 0.95 }),
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full bg-primary/[0.03] blur-[120px]"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
        className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-secondary/[0.03] blur-[100px]"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-12 lg:py-0">
        {/* Copy */}
        <div className="space-y-10">
          <motion.div
            {...fadeUp(0.1)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/[0.06] border border-primary/10 text-xs font-semibold text-primary tracking-wide uppercase"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
            Continuous Care Infrastructure
          </motion.div>

          <motion.h1
            {...fadeUp(0.25)}
            className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-extrabold tracking-[-0.03em] text-foreground leading-[1.08]"
          >
            Real-Time Monitoring.{" "}
            <span className="gradient-text">Real-Life Rescue.</span>
          </motion.h1>

          <motion.p
            {...fadeUp(0.4)}
            className="text-lg sm:text-xl text-muted-foreground max-w-lg leading-relaxed font-light"
          >
            Continuous healthcare powered by AI, doctors, and real-time patient data. We don't wait for emergencies — we prevent them.
          </motion.p>

          <motion.div {...fadeUp(0.55)} className="flex flex-wrap gap-4">
            <Button
              size="lg"
              onClick={() => scrollTo("#contact")}
              className="rounded-full px-8 text-base gap-2 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/25 transition-all"
            >
              Get Started <ArrowRight size={16} />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollTo("#partners")}
              className="rounded-full px-8 text-base"
            >
              Partner With Us
            </Button>
          </motion.div>

          {/* Trust badges */}
          <motion.div {...fadeUp(0.7)} className="flex flex-wrap gap-8 pt-2">
            {[
              { icon: Shield, label: "HIPAA-Ready" },
              { icon: Building2, label: "HMO Integrated" },
              { icon: Stethoscope, label: "Doctor Network" },
            ].map((b) => (
              <div key={b.label} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                <div className="w-8 h-8 rounded-lg bg-primary/[0.06] flex items-center justify-center">
                  <b.icon size={15} className="text-primary" />
                </div>
                <span className="font-medium text-[13px]">{b.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Image Carousel */}
        <motion.div
          initial={{ opacity: 0, x: 60, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.5, ease }}
          className="relative hidden lg:block"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-premium-lg border border-border/50 aspect-[4/3]">
            <AnimatePresence custom={direction} mode="wait">
              <motion.img
                key={current}
                src={slides[current].src}
                alt={slides[current].alt}
                width={960}
                height={640}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />

            {/* Caption */}
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-6 left-6 right-6 flex items-end justify-between"
              >
                <div>
                  <span className="inline-block bg-primary/90 text-primary-foreground text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-sm">
                    {slides[current].caption}
                  </span>
                </div>
                <span className="text-primary-foreground/70 text-xs font-medium">
                  {current + 1} / {slides.length}
                </span>
              </motion.div>
            </AnimatePresence>

            {/* Nav arrows */}
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card/80 backdrop-blur-sm border border-border/50 flex items-center justify-center text-foreground hover:bg-card transition-colors shadow-md"
              aria-label="Previous slide"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card/80 backdrop-blur-sm border border-border/50 flex items-center justify-center text-foreground hover:bg-card transition-colors shadow-md"
              aria-label="Next slide"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Dot indicators */}
          <div className="flex items-center justify-center gap-2 mt-5">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > current ? 1 : -1);
                  setCurrent(i);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-8 bg-primary"
                    : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

        </motion.div>

        {/* Mobile Carousel */}
        <div className="lg:hidden relative mt-4">
          <div className="relative rounded-2xl overflow-hidden shadow-premium border border-border/50 aspect-[4/3]">
            <AnimatePresence custom={direction} mode="wait">
              <motion.img
                key={`mobile-${current}`}
                src={slides[current].src}
                alt={slides[current].alt}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
              <span className="inline-block bg-primary/90 text-primary-foreground text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-sm">
                {slides[current].caption}
              </span>
              <span className="text-primary-foreground/70 text-xs font-medium">
                {current + 1} / {slides.length}
              </span>
            </div>
            <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-card/80 backdrop-blur-sm border border-border/50 flex items-center justify-center text-foreground shadow-md" aria-label="Previous slide">
              <ChevronLeft size={16} />
            </button>
            <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-card/80 backdrop-blur-sm border border-border/50 flex items-center justify-center text-foreground shadow-md" aria-label="Next slide">
              <ChevronRight size={16} />
            </button>
          </div>
          <div className="flex items-center justify-center gap-2 mt-4">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                className={`h-2 rounded-full transition-all duration-300 ${i === current ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
