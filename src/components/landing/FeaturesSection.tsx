import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Activity, Brain, Video, Pill, ShoppingCart, Siren, Apple } from "lucide-react";

const features = [
  { icon: Activity, title: "Real-Time Monitoring", desc: "Track vitals 24/7 with wearable integration and live dashboards." },
  { icon: Brain, title: "AI-Powered Triage", desc: "Intelligent alerts and risk scoring prioritize care when it matters." },
  { icon: Video, title: "Video Consultations", desc: "Connect with doctors and specialists from anywhere, anytime." },
  { icon: Pill, title: "Medication Tracking", desc: "Automated reminders and adherence tracking for better outcomes." },
  { icon: ShoppingCart, title: "Pharmacy Integration", desc: "Seamless e-commerce and delivery for prescriptions." },
  { icon: Siren, title: "Emergency Alerts", desc: "Instant alerts to responders with location and vitals data." },
  { icon: Apple, title: "Nutrition Planning", desc: "Personalized diet plans from certified nutritionists." },
];

const FeaturesSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="features" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-muted/30" />
      <div ref={ref} className="section-fade-in relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center space-y-5 max-w-2xl mx-auto">
          <p className="text-xs font-semibold text-primary uppercase tracking-[0.2em]">Platform</p>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-foreground tracking-[-0.02em]">
            Everything You Need for{" "}
            <span className="gradient-text">Better Healthcare</span>
          </h2>
          <p className="text-muted-foreground text-lg font-light">
            A comprehensive platform built for modern healthcare delivery.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {features.map((f) => (
            <div key={f.title} className="group bg-card rounded-2xl border border-border/50 p-7 space-y-4 hover:shadow-premium hover:-translate-y-1 hover:border-primary/15 transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-accent flex items-center justify-center group-hover:gradient-primary group-hover:shadow-lg group-hover:shadow-primary/15 transition-all duration-300">
                <f.icon size={20} className="text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-bold text-foreground tracking-tight">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
