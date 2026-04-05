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

          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.0, ease }}
            className="absolute -bottom-6 -left-6 bg-card rounded-2xl shadow-premium border border-border/50 p-4 animate-float"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center shadow-md">
                <Activity size={18} className="text-secondary" />
              </div>
              <div>
                <div className="text-sm font-bold text-foreground">24/7 Monitoring</div>
                <div className="text-xs text-muted-foreground">Always watching</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.2, ease }}
            className="absolute -top-4 -right-4 bg-card rounded-2xl shadow-premium border border-border/50 p-4 animate-float [animation-delay:1s]"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center shadow-md">
                <Brain size={18} className="text-primary-foreground" />
              </div>
              <div>
                <div className="text-sm font-bold text-foreground">AI-Powered</div>
                <div className="text-xs text-muted-foreground">Smart diagnostics</div>
              </div>
            </div>
          </motion.div>
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

        {/* Floating Social Icons */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 1.4, ease }}
          className="fixed left-4 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-3"
        >
          {[
            { href: "https://facebook.com", label: "Facebook", path: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" },
            { href: "https://twitter.com", label: "X / Twitter", path: "M4 4l7.07 9.34L4 20h1.6l5.84-5.5L16 20h4l-7.46-9.88L19.5 4H18l-5.44 5.12L8 4H4z" },
            { href: "https://instagram.com", label: "Instagram", path: "M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm4.5 5.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9zm5.25-.75a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" },
            { href: "https://linkedin.com", label: "LinkedIn", path: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="w-10 h-10 rounded-full bg-card/80 backdrop-blur-sm border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 hover:shadow-md transition-all duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d={s.path} />
              </svg>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
