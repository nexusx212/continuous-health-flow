import { Button } from "@/components/ui/button";
import { Shield, Building2, Stethoscope, Activity, Heart, Thermometer } from "lucide-react";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Subtle gradient bg */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/50 via-background to-background" />
      <div className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-12 lg:py-0">
        {/* Copy */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent border border-primary/10 text-xs font-medium text-accent-foreground">
            <Activity size={14} />
            Continuous Care Infrastructure
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1]">
            Real-Time Monitoring.{" "}
            <span className="gradient-text">Real-Life Rescue.</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-lg leading-relaxed">
            Continuous healthcare powered by AI, doctors, and real-time patient data. We don't wait for emergencies — we prevent them.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button size="lg" onClick={() => scrollTo("#contact")} className="px-8 text-base">
              Get Started
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollTo("#partners")} className="px-8 text-base">
              Partner With Us
            </Button>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-6 pt-4">
            {[
              { icon: Shield, label: "Secure & HIPAA-Ready" },
              { icon: Building2, label: "HMO-Ready" },
              { icon: Stethoscope, label: "Doctor Network" },
            ].map((b) => (
              <div key={b.label} className="flex items-center gap-2 text-sm text-muted-foreground">
                <b.icon size={16} className="text-primary" />
                {b.label}
              </div>
            ))}
          </div>
        </div>

        {/* Dashboard mockup */}
        <div className="relative hidden lg:block">
          <div className="relative bg-card rounded-2xl shadow-2xl border border-border p-6 space-y-4">
            {/* Header bar */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-destructive/60" />
                <div className="w-3 h-3 rounded-full bg-secondary/60" />
                <div className="w-3 h-3 rounded-full bg-primary/60" />
              </div>
              <span className="text-xs text-muted-foreground">NexCare Dashboard</span>
            </div>

            {/* Vitals grid */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { icon: Heart, label: "Heart Rate", value: "72 bpm", color: "text-destructive" },
                { icon: Activity, label: "SpO₂", value: "98%", color: "text-primary" },
                { icon: Thermometer, label: "Temp", value: "36.6°C", color: "text-secondary" },
              ].map((v) => (
                <div key={v.label} className="bg-muted/50 rounded-xl p-4 text-center space-y-1">
                  <v.icon size={20} className={`mx-auto ${v.color}`} />
                  <div className="text-xs text-muted-foreground">{v.label}</div>
                  <div className="text-lg font-bold text-foreground">{v.value}</div>
                </div>
              ))}
            </div>

            {/* Fake chart */}
            <div className="bg-muted/30 rounded-xl p-4 space-y-2">
              <div className="text-xs text-muted-foreground font-medium">Heart Rate — Last 24h</div>
              <svg viewBox="0 0 300 60" className="w-full h-16">
                <polyline
                  fill="none"
                  stroke="hsl(174 84% 32%)"
                  strokeWidth="2"
                  points="0,40 20,35 40,38 60,30 80,28 100,32 120,25 140,20 160,22 180,18 200,25 220,30 240,28 260,32 280,30 300,28"
                />
                <polyline
                  fill="url(#grad)"
                  stroke="none"
                  opacity="0.15"
                  points="0,60 0,40 20,35 40,38 60,30 80,28 100,32 120,25 140,20 160,22 180,18 200,25 220,30 240,28 260,32 280,30 300,28 300,60"
                />
                <defs>
                  <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="hsl(174 84% 32%)" />
                    <stop offset="100%" stopColor="hsl(174 84% 32%)" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Status bar */}
            <div className="flex items-center gap-2 text-xs">
              <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span className="text-muted-foreground">All vitals normal — Last synced 2s ago</span>
            </div>
          </div>

          {/* Floating watch card */}
          <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl shadow-xl border border-border p-4 w-40">
            <div className="flex items-center gap-2 mb-2">
              <Heart size={14} className="text-destructive" />
              <span className="text-xs font-semibold text-foreground">Watch</span>
            </div>
            <div className="text-2xl font-bold text-foreground">72</div>
            <div className="text-xs text-muted-foreground">bpm • Normal</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
