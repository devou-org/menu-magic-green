"use client";

import { Nav, Hero } from "@/components/landing/hero-section";
import { FeatureSection, BrandPreviewVisual, CategoryVisual, QRVisual } from "@/components/landing/feature-sections";
import { Pricing } from "@/components/landing/pricing-section";
import { Footer } from "@/components/landing/footer";

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
      <Hero />
      <FeatureSection
        id="brand"
        bg="white"
        eyebrow="01 — Brand Preview"
        title="Your brand, pixel-perfect on every screen."
        desc="Send us your logo and brand image — we'll craft a digital menu that matches your identity, complete with your own subdomain like yourbrand.qdine.in. Customers see your brand, not ours."
      >
        <BrandPreviewVisual />
      </FeatureSection>
      <FeatureSection
        id="menu"
        bg="green"
        eyebrow="02 — Live Menu Control"
        title="Sold out? Flip a switch."
        desc="Organize your menu by category — starters, mains, drinks, desserts. Toggle any item's availability from your phone. No more awkward 'sorry, we're out of that' moments."
        reverse
      >
        <CategoryVisual />
      </FeatureSection>
      <FeatureSection
        id="qr"
        bg="white"
        eyebrow="03 — QR Access"
        title="One scan. Instant menu."
        desc="Every table gets a printable QR code. Customers scan with their camera — no app, no download, no friction. The menu loads in under a second on any phone."
      >
        <QRVisual />
      </FeatureSection>
      <Pricing />
      </main>
      <Footer />
    </div>
  );
}
