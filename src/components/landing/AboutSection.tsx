import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Heart, Globe, Users, Target, Lightbulb, ShieldCheck } from "lucide-react";

const values = [
  { icon: Heart, title: "Patient-First", desc: "Every decision we make starts with what's best for the patient — no exceptions." },
  { icon: Globe, title: "Universal Access", desc: "We believe quality healthcare shouldn't depend on geography or wealth." },
  { icon: ShieldCheck, title: "Trust & Privacy", desc: "Your data is encrypted, protected, and never shared without your consent." },
];

const stats = [
  { value: "24/7", label: "Continuous Monitoring" },
  { value: "5s", label: "Average Alert Time" },
  { value: "30%", label: "Fewer Emergency Claims" },
  { value: "10K+", label: "Patients Protected" },
];

const AboutSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="about" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-muted/30" />
      <div ref={ref} className="section-fade-in relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Main intro */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-foreground tracking-[-0.02em]">
              Redefining Healthcare for a{" "}
              <span className="gradient-text">Connected World</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed font-light">
              NexCare was born from a simple but urgent question: why does healthcare only respond after things go wrong? We're building the infrastructure for continuous, proactive care — combining real-time monitoring, AI-driven insights, and a network of doctors, pharmacies, and emergency responders.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our mission is to make preventive healthcare accessible to everyone, everywhere. By bridging the gap between patients and providers with intelligent technology, we ensure no critical moment goes unnoticed and no patient is left without support.
            </p>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="bg-card rounded-2xl border border-border/50 p-6 text-center space-y-2 hover:shadow-premium transition-all duration-300">
                  <div className="text-2xl sm:text-3xl font-extrabold gradient-text">{s.value}</div>
                  <div className="text-xs text-muted-foreground font-medium">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-card rounded-2xl border border-border/50 p-10 space-y-4 hover:shadow-premium transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl gradient-primary flex items-center justify-center shadow-lg shadow-primary/15">
              <Target size={22} className="text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold text-foreground tracking-tight">Our Mission</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              To eliminate preventable health emergencies by delivering continuous, AI-powered care that connects patients with the right providers at the right time — before it's too late.
            </p>
          </div>
          <div className="bg-card rounded-2xl border border-border/50 p-10 space-y-4 hover:shadow-premium transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl gradient-primary flex items-center justify-center shadow-lg shadow-primary/15">
              <Lightbulb size={22} className="text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold text-foreground tracking-tight">Our Vision</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A world where healthcare never pauses — where every individual has access to intelligent monitoring, instant medical support, and a safety net that works around the clock.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="space-y-10">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-[-0.02em] text-center">
            What We <span className="gradient-text">Stand For</span>
          </h3>
          <div className="grid sm:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-card rounded-2xl border border-border/50 p-8 text-center space-y-4 hover:shadow-premium hover:-translate-y-1 transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-accent mx-auto flex items-center justify-center">
                  <v.icon size={24} className="text-primary" />
                </div>
                <h4 className="font-bold text-foreground tracking-tight">{v.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
