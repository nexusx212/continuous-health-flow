import nexcareLogo from "@/assets/nexcare-logo.png";

const Footer = () => (
  <footer className="border-t border-border/50 bg-card/50 py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="space-y-4">
          <img src={nexcareLogo} alt="NexCare" className="h-8 w-auto" />
          <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
            Continuous care infrastructure connecting patients, doctors, pharmacies and insurers.
          </p>
        </div>

        {/* Company */}
        <div className="space-y-4">
          <h4 className="font-semibold text-foreground text-[13px] uppercase tracking-wider">Company</h4>
          <div className="space-y-2.5 text-sm text-muted-foreground">
            <div className="hover:text-foreground cursor-pointer transition-colors">About</div>
            <div className="hover:text-foreground cursor-pointer transition-colors">Careers</div>
            <div className="hover:text-foreground cursor-pointer transition-colors">Blog</div>
            <div className="hover:text-foreground cursor-pointer transition-colors">Press</div>
          </div>
        </div>

        {/* Legal */}
        <div className="space-y-4">
          <h4 className="font-semibold text-foreground text-[13px] uppercase tracking-wider">Legal</h4>
          <div className="space-y-2.5 text-sm text-muted-foreground">
            <div className="hover:text-foreground cursor-pointer transition-colors">Privacy Policy</div>
            <div className="hover:text-foreground cursor-pointer transition-colors">Terms of Service</div>
            <div className="hover:text-foreground cursor-pointer transition-colors">Cookie Policy</div>
          </div>
        </div>

        {/* Contact */}
        <div className="space-y-4">
          <h4 className="font-semibold text-foreground text-[13px] uppercase tracking-wider">Contact</h4>
          <div className="space-y-2.5 text-sm text-muted-foreground">
            <div>hello@nexcare.health</div>
            <div className="flex gap-5 pt-1">
              <span className="hover:text-foreground cursor-pointer transition-colors">Twitter</span>
              <span className="hover:text-foreground cursor-pointer transition-colors">LinkedIn</span>
              <span className="hover:text-foreground cursor-pointer transition-colors">Instagram</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-muted-foreground">
        <span>© 2026 NexCare. All rights reserved.</span>
        <span>Powered by <strong className="text-foreground font-semibold">Nexus X Industries</strong></span>
      </div>
    </div>
  </footer>
);

export default Footer;
