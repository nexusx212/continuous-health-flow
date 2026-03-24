import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Heart, Bell, Activity, Wifi } from "lucide-react";

const WatchSection = () => {
  const ref = useScrollAnimation();

  return (
    <section className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-muted/30" />
      <div ref={ref} className="section-fade-in relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
        {/* Watch mockup */}
        <div className="flex justify-center">
          <div className="relative animate-float">
            {/* Watch body */}
            <div className="w-56 h-64 rounded-[2.5rem] bg-foreground/90 p-3 shadow-premium-lg">
              <div className="w-full h-full rounded-[2rem] bg-card flex flex-col items-center justify-center gap-3 p-4">
                <Heart size={28} className="text-destructive animate-pulse-soft" />
                <div className="text-3xl font-bold text-foreground tracking-tight">72</div>
                <div className="text-xs text-muted-foreground font-medium">bpm • Normal</div>
                <div className="w-full h-px bg-border/50 my-1" />
                <div className="flex gap-4 text-xs text-muted-foreground">
                  <div className="text-center">
                    <div className="font-bold text-foreground">98%</div>
                    <div>SpO₂</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-foreground">120/80</div>
                    <div>BP</div>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-xs text-secondary font-medium">
                  <Wifi size={10} />
                  Connected
                </div>
              </div>
            </div>
            {/* Watch band */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-10 bg-foreground/80 rounded-t-lg" />
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-16 h-10 bg-foreground/80 rounded-b-lg" />
          </div>
        </div>

        {/* Content */}
        <div className="space-y-10">
          <div className="space-y-5">
            <p className="text-xs font-semibold text-primary uppercase tracking-[0.2em]">Wearable Integration</p>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-foreground tracking-[-0.02em]">
              Your Health.{" "}
              <span className="gradient-text">Always Monitored.</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed font-light">
              NexCare-compatible wearables track your vitals around the clock, sending real-time data to your care team.
            </p>
          </div>

          <div className="space-y-5">
            {[
              { icon: Heart, title: "Continuous Heart Rate", desc: "24/7 monitoring with anomaly detection." },
              { icon: Bell, title: "Instant Doctor Alerts", desc: "Abnormal readings alert your physician immediately." },
              { icon: Activity, title: "Comprehensive Vitals", desc: "SpO₂, blood pressure, temperature, and more." },
            ].map((f) => (
              <div key={f.title} className="flex gap-4 items-start">
                <div className="w-11 h-11 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                  <f.icon size={18} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground tracking-tight">{f.title}</h4>
                  <p className="text-sm text-muted-foreground mt-0.5">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WatchSection;
