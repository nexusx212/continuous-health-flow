import { Button } from "@/components/ui/button";
import { Shield, Building2, Stethoscope, Activity, Heart, Thermometer, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import nexcareIcon from "@/assets/nexcare-icon.png";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease },
});

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Premium background layers */}
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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 lg:gap-20 items-center py-12 lg:py-0">
        {/* Copy */}
        <div className="space-y-10">
          <motion.div {...fadeUp(0.1)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/[0.06] border border-primary/10 text-xs font-semibold text-primary tracking-wide uppercase"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
            Continuous Care Infrastructure
          </motion.div>

          <motion.h1 {...fadeUp(0.25)}
            className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-extrabold tracking-[-0.03em] text-foreground leading-[1.08]"
          >
            Real-Time Monitoring.{" "}
            <span className="gradient-text">Real-Life Rescue.</span>
          </motion.h1>

          <motion.p {...fadeUp(0.4)}
            className="text-lg sm:text-xl text-muted-foreground max-w-lg leading-relaxed font-light"
          >
            Continuous healthcare powered by AI, doctors, and real-time patient data. We don't wait for emergencies — we prevent them.
          </motion.p>

          <motion.div {...fadeUp(0.55)} className="flex flex-wrap gap-4">
            <Button size="lg" onClick={() => scrollTo("#contact")} className="rounded-full px-8 text-base gap-2 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/25 transition-all">
              Get Started <ArrowRight size={16} />
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollTo("#partners")} className="rounded-full px-8 text-base">
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

        {/* Dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, x: 60, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative hidden lg:block"
        >
          <div className="relative bg-card rounded-3xl shadow-premium-lg border border-border/50 p-7 space-y-5">
            {/* Header bar */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-destructive/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-400/50" />
                <div className="w-3 h-3 rounded-full bg-secondary/50" />
              </div>
              <div className="flex items-center gap-2">
                <img src={nexcareIcon} alt="" className="w-4 h-4" />
                <span className="text-xs text-muted-foreground font-medium">NexCare Dashboard</span>
              </div>
            </div>

            {/* Vitals grid */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { icon: Heart, label: "Heart Rate", value: "72 bpm", color: "text-destructive" },
                { icon: Activity, label: "SpO₂", value: "98%", color: "text-primary" },
                { icon: Thermometer, label: "Temp", value: "36.6°C", color: "text-secondary" },
              ].map((v) => (
                <div key={v.label} className="bg-muted/40 rounded-2xl p-4 text-center space-y-1.5">
                  <v.icon size={18} className={`mx-auto ${v.color}`} />
                  <div className="text-[11px] text-muted-foreground font-medium">{v.label}</div>
                  <div className="text-lg font-bold text-foreground tracking-tight">{v.value}</div>
                </div>
              ))}
            </div>

            {/* Chart */}
            <div className="bg-muted/20 rounded-2xl p-5 space-y-3">
              <div className="flex items-center justify-between">
                <div className="text-xs text-muted-foreground font-medium">Heart Rate — Last 24h</div>
                <div className="text-[10px] text-primary font-semibold">Live</div>
              </div>
              <svg viewBox="0 0 300 60" className="w-full h-16">
                <polyline fill="none" stroke="hsl(174 84% 32%)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                  points="0,40 20,35 40,38 60,30 80,28 100,32 120,25 140,20 160,22 180,18 200,25 220,30 240,28 260,32 280,30 300,28" />
                <polyline fill="url(#hero-grad)" stroke="none" opacity="0.1"
                  points="0,60 0,40 20,35 40,38 60,30 80,28 100,32 120,25 140,20 160,22 180,18 200,25 220,30 240,28 260,32 280,30 300,28 300,60" />
                <defs>
                  <linearGradient id="hero-grad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="hsl(174 84% 32%)" />
                    <stop offset="100%" stopColor="hsl(174 84% 32%)" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Status */}
            <div className="flex items-center gap-2 text-xs">
              <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span className="text-muted-foreground">All vitals normal — Last synced 2s ago</span>
            </div>
          </div>

          {/* Floating watch card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
            className="absolute -bottom-8 -left-8 bg-card rounded-2xl shadow-premium border border-border/50 p-5 w-44 animate-float"
          >
            <div className="flex items-center gap-2 mb-2">
              <Heart size={14} className="text-destructive animate-pulse-soft" />
              <span className="text-xs font-semibold text-foreground">Watch</span>
            </div>
            <div className="text-3xl font-bold text-foreground tracking-tight">72</div>
            <div className="text-xs text-muted-foreground">bpm • Normal</div>
          </motion.div>

          {/* Floating alert card */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute -top-4 -right-4 bg-card rounded-2xl shadow-premium border border-border/50 p-4 w-48 animate-float-delayed"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-secondary" />
              <span className="text-[11px] font-semibold text-foreground">AI Alert</span>
            </div>
            <p className="text-[11px] text-muted-foreground mt-1.5 leading-relaxed">Patient vitals stable. No intervention needed.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
