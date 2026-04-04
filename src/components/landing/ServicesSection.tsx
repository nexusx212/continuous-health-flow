import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Video, Apple, Microscope, HeartPulse, Stethoscope, Brain } from "lucide-react";

const services = [
  {
    icon: Video,
    title: "Telehealth",
    desc: "On-demand video and chat consultations with licensed physicians, specialists, and mental health professionals — from anywhere.",
    features: ["24/7 availability", "Specialist referrals", "Prescription delivery"],
  },
  {
    icon: Apple,
    title: "Nutrition Planning",
    desc: "Personalized meal plans and dietary guidance from certified nutritionists, tailored to your health goals and conditions.",
    features: ["Custom meal plans", "Allergy-aware", "Progress tracking"],
  },
  {
    icon: Microscope,
    title: "Diagnostics",
    desc: "At-home lab kits and integrated diagnostic tools that deliver accurate results directly to your care team.",
    features: ["Home sample collection", "Fast turnaround", "Doctor-reviewed results"],
  },
  {
    icon: HeartPulse,
    title: "Wellness Programs",
    desc: "Holistic wellness plans combining fitness, mindfulness, and preventive care — designed for long-term health outcomes.",
    features: ["Fitness coaching", "Stress management", "Sleep optimization"],
  },
  {
    icon: Stethoscope,
    title: "Chronic Care Management",
    desc: "Continuous monitoring and proactive management for diabetes, hypertension, asthma, and other chronic conditions.",
    features: ["Daily vitals tracking", "Medication reminders", "Care team alerts"],
  },
  {
    icon: Brain,
    title: "Mental Health",
    desc: "Confidential therapy sessions, cognitive behavioral tools, and AI-driven mood tracking for emotional well-being.",
    features: ["Licensed therapists", "CBT tools", "Mood analytics"],
  },
];

const ServicesSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="services" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-muted/30" />
      <div ref={ref} className="section-fade-in relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center space-y-5 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-foreground tracking-[-0.02em]">
            Comprehensive <span className="gradient-text">Care Services</span>
          </h2>
          <p className="text-muted-foreground text-lg font-light">
            From virtual consultations to at-home diagnostics — everything you need under one platform.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group bg-card rounded-2xl border border-border/50 p-8 space-y-5 hover:shadow-premium hover:-translate-y-1 hover:border-primary/15 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center group-hover:gradient-primary group-hover:shadow-lg group-hover:shadow-primary/15 transition-all duration-300">
                <s.icon size={24} className="text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-bold text-foreground tracking-tight">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              <ul className="space-y-2">
                {s.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
