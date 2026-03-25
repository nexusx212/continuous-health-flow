import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { ArrowRight, Mail } from "lucide-react";

const CTASection = () => {
  const ref = useScrollAnimation();
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast({ title: "Please enter a valid email", variant: "destructive" });
      return;
    }
    toast({ title: "You're on the list!", description: "We'll be in touch soon." });
    setEmail("");
  };

  return (
    <section id="contact" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />

      <div ref={ref} className="section-fade-in relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
        <div className="space-y-5">
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-[-0.03em]">
            Join the Future of{" "}
            <span className="gradient-text">Healthcare</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto font-light">
            Be among the first to experience continuous care. Sign up for early access or partner with us.
          </p>
        </div>

        {/* Email capture */}
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <div className="relative flex-1">
            <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pl-11 h-12 rounded-full border-border/50"
            />
          </div>
          <Button type="submit" className="gap-2 h-12 rounded-full px-8 shadow-lg shadow-primary/20">
            Get Early Access <ArrowRight size={16} />
          </Button>
        </form>

        {/* Role CTAs */}
        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="outline" size="lg" className="rounded-full px-8">
            Become a Partner
          </Button>
          <Button variant="outline" size="lg" className="rounded-full px-8">
            Join as a Doctor
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
