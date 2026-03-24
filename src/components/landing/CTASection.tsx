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
    <section id="contact" className="py-20 lg:py-28">
      <div ref={ref} className="section-fade-in max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10">
        <div className="space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight">
            Join the Future of{" "}
            <span className="gradient-text">Healthcare</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Be among the first to experience continuous care. Sign up for early access or partner with us.
          </p>
        </div>

        {/* Email capture */}
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <div className="relative flex-1">
            <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button type="submit" className="gap-2">
            Get Early Access <ArrowRight size={16} />
          </Button>
        </form>

        {/* Role CTAs */}
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <Button variant="outline" size="lg">
            Become a Partner
          </Button>
          <Button variant="outline" size="lg">
            Join as a Doctor
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
