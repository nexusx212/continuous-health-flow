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
    <section id="features" className="py-20 lg:py-28 bg-muted/30">
      <div ref={ref} className="section-fade-in max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            Everything You Need for{" "}
            <span className="gradient-text">Better Healthcare</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A comprehensive platform built for modern healthcare delivery.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {features.map((f) => (
            <div
              key={f.title}
              className="group bg-card rounded-2xl border border-border p-6 space-y-3 hover:shadow-lg hover:border-primary/20 transition-all"
            >
              <div className="w-11 h-11 rounded-xl bg-accent flex items-center justify-center group-hover:gradient-primary transition-all">
                <f.icon size={20} className="text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-semibold text-foreground">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
