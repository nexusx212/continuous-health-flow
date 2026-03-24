const Footer = () => (
  <footer className="border-t border-border bg-card py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg gradient-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xs">N</span>
            </div>
            <span className="text-lg font-bold text-foreground">NexCare</span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Continuous care infrastructure connecting patients, doctors, pharmacies and insurers.
          </p>
        </div>

        {/* Company */}
        <div className="space-y-3">
          <h4 className="font-semibold text-foreground text-sm">Company</h4>
          <div className="space-y-2 text-sm text-muted-foreground">
            <div className="hover:text-foreground cursor-pointer transition-colors">About</div>
            <div className="hover:text-foreground cursor-pointer transition-colors">Careers</div>
            <div className="hover:text-foreground cursor-pointer transition-colors">Blog</div>
            <div className="hover:text-foreground cursor-pointer transition-colors">Press</div>
          </div>
        </div>

        {/* Legal */}
        <div className="space-y-3">
          <h4 className="font-semibold text-foreground text-sm">Legal</h4>
          <div className="space-y-2 text-sm text-muted-foreground">
            <div className="hover:text-foreground cursor-pointer transition-colors">Privacy Policy</div>
            <div className="hover:text-foreground cursor-pointer transition-colors">Terms of Service</div>
            <div className="hover:text-foreground cursor-pointer transition-colors">Cookie Policy</div>
          </div>
        </div>

        {/* Contact */}
        <div className="space-y-3">
          <h4 className="font-semibold text-foreground text-sm">Contact</h4>
          <div className="space-y-2 text-sm text-muted-foreground">
            <div>hello@nexcare.health</div>
            <div className="flex gap-4 pt-1">
              <span className="hover:text-foreground cursor-pointer transition-colors">Twitter</span>
              <span className="hover:text-foreground cursor-pointer transition-colors">LinkedIn</span>
              <span className="hover:text-foreground cursor-pointer transition-colors">Instagram</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-muted-foreground">
        <span>© 2026 NexCare. All rights reserved.</span>
        <span>Powered by <strong className="text-foreground">Nexus X Industries</strong></span>
      </div>
    </div>
  </footer>
);

export default Footer;
