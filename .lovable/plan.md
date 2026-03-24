
# NexCare Landing Page — Implementation Plan

## Brand & Design System
- **Colors**: Deep teal (#0D9488) primary, soft green (#10B981) secondary, white/light gray (#F8FAFB) background
- **Typography**: Inter font, bold headings, clean hierarchy
- **Style**: Minimal, premium, soft shadows, rounded cards, strong whitespace

## Page Sections (Top to Bottom)

### 1. Sticky Navigation
- Logo + nav links (Features, How It Works, Partners, Contact)
- "Get Started" CTA button
- Transparent → white on scroll

### 2. Hero Section
- **Headline**: "Real-Time Monitoring. Real-Life Rescue."
- **Sub**: Continuous healthcare powered by AI, doctors, and real-time patient data
- Two CTA buttons: "Get Started" + "Partner With Us"
- Illustrated dashboard/wearable mockup (CSS-built)
- Trust badges: Secure, HMO-Ready, Doctor Network
- Fade-in animations

### 3. Problem Section
- **Headline**: "Healthcare is Reactive — And That Costs Lives"
- 4-column grid with icons: reactive care, lack of visibility, late emergencies, fake drugs/delays

### 4. Solution Section
- **Headline**: "One Platform. Total Continuous Care"
- 5 step cards in a flow: Monitor → Detect → Consult → Treat → Rescue
- Connected with a visual flow line

### 5. Product Features
- 6-card grid with icons: real-time monitoring, AI triage, video consults, medication tracking, pharmacy integration, emergency alerts, nutrition planning

### 6. How It Works (Tabbed)
- Three tabs: For Patients / For Doctors / For Partners
- Each tab shows 3-4 steps with clear benefits

### 7. Smart Watch / Monitoring
- **Headline**: "Your Health. Always Monitored."
- CSS-illustrated smartwatch showing heart rate, alerts
- Split layout: visual left, features right

### 8. Social Proof
- Placeholder testimonial cards
- Partner logo placeholders
- "Coming Soon" badges where appropriate

### 9. Business Model / Partners
- **Headline**: "Built for Patients, Doctors, and Healthcare Systems"
- Three cards: Doctor income, Insurance integration, Pharmacy partnerships

### 10. CTA Section
- **Headline**: "Join the Future of Healthcare"
- Three buttons: Get Early Access, Become a Partner, Join as a Doctor
- Email capture form

### 11. Footer
- About, Contact, Socials, Privacy/Terms
- "Powered by Nexus X Industries"

## Functional Features
- Mobile-first responsive design
- Smooth scroll animations (Intersection Observer fade/slide-in)
- Sticky header with scroll effect
- Email capture form with validation
- Chatbot placeholder icon (bottom-right)
- SEO meta tags

## Technical Approach
- All sections as separate React components for maintainability
- Tailwind CSS for styling with custom teal/green color palette
- Lucide icons throughout
- CSS animations triggered on scroll
