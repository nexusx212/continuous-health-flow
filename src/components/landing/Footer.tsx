import nexcareLogo from "@/assets/nexcare-logo.png";

const Footer = () => (
  <footer className="border-t border-border/50 bg-card/50 py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="space-y-4">
          <img src={nexcareLogo} alt="NexCare" className="h-12 w-auto" />
          <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
            Continuous care infrastructure connecting patients, doctors, pharmacies and insurers.
          </p>
          {/* App Store buttons */}
          <div className="flex flex-wrap gap-2 pt-2">
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border/60 bg-card/50 hover:bg-accent text-xs font-medium text-foreground transition-colors"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 1.332a1 1 0 0 1 0 1.72l-2.302 1.332-2.534-2.534 2.534-2.85zM5.864 3.45L16.8 9.783l-2.302 2.302L5.864 3.45z"/>
              </svg>
              Google Play
            </a>
            <a
              href="https://apps.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border/60 bg-card/50 hover:bg-accent text-xs font-medium text-foreground transition-colors"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              App Store
            </a>
          </div>
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
