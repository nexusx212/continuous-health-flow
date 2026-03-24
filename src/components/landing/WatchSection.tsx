import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Heart, Bell, Activity, Wifi } from "lucide-react";

const WatchSection = () => {
  const ref = useScrollAnimation();

  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div ref={ref} className="section-fade-in max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        {/* Watch mockup */}
        <div className="flex justify-center">
          <div className="relative">
            {/* Watch body */}
            <div className="w-56 h-64 rounded-[2.5rem] bg-foreground/90 p-3 shadow-2xl">
              <div className="w-full h-full rounded-[2rem] bg-card flex flex-col items-center justify-center gap-3 p-4">
                <Heart size={28} className="text-destructive animate-pulse" />
                <div className="text-3xl font-bold text-foreground">72</div>
                <div className="text-xs text-muted-foreground">bpm • Normal</div>
                <div className="w-full h-px bg-border my-1" />
                <div className="flex gap-4 text-xs text-muted-foreground">
                  <div className="text-center">
                    <div className="font-semibold text-foreground">98%</div>
                    <div>SpO₂</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-foreground">120/80</div>
                    <div>BP</div>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-xs text-secondary">
                  <Wifi size={10} />
                  Connected
                </div>
              </div>
            </div>
            {/* Watch band top */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-10 bg-foreground/80 rounded-t-lg" />
            {/* Watch band bottom */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-16 h-10 bg-foreground/80 rounded-b-lg" />
          </div>
        </div>

        {/* Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
              Your Health.{" "}
              <span className="gradient-text">Always Monitored.</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              NexCare-compatible wearables track your vitals around the clock, sending real-time data to your care team.
            </p>
          </div>

          <div className="space-y-4">
            {[
              { icon: Heart, title: "Continuous Heart Rate", desc: "24/7 monitoring with anomaly detection." },
              { icon: Bell, title: "Instant Doctor Alerts", desc: "Abnormal readings alert your physician immediately." },
              { icon: Activity, title: "Comprehensive Vitals", desc: "SpO₂, blood pressure, temperature, and more." },
            ].map((f) => (
              <div key={f.title} className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                  <f.icon size={18} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{f.title}</h4>
                  <p className="text-sm text-muted-foreground">{f.desc}</p>
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
