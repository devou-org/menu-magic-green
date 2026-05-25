import { Button } from "@/components/ui/button";
import { QrCode, Palette, LayoutGrid, Check, Utensils, Coffee, Pizza, ChefHat, ToggleRight, Globe, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

type RegionConfig = {
  currency: string;
  monthly: string;
  yearly: string;
  savings: string;
  monthlyCalculated: string;
};

const PRICING_REGIONS: Record<string, RegionConfig> = {
  IN: {
    currency: "₹",
    monthly: "199",
    yearly: "1549",      // 199 × 12 × 0.65 = 1,551 → rounded to 1549
    savings: "35%",
    monthlyCalculated: "129.08"  // 1549 / 12
  },
  US: {
    currency: "$",
    monthly: "6.99",
    yearly: "54.49",     // 6.99 × 12 × 0.65 = 54.55 → rounded to 54.49
    savings: "35%",
    monthlyCalculated: "4.54"  // 54.49 / 12
  },
  GB: {
    currency: "£",
    monthly: "4.99",
    yearly: "38.99",     // 4.99 × 12 × 0.65 = 38.93 → rounded to 38.99
    savings: "35%",
    monthlyCalculated: "3.25"  // 38.99 / 12
  },
  SA: {
    currency: "SAR ",
    monthly: "11.99",
    yearly: "93.49",     // 11.99 × 12 × 0.65 = 93.57 → rounded to 93.49
    savings: "35%",
    monthlyCalculated: "7.79"  // 93.49 / 12
  },
  QA: {
    currency: "QAR ",
    monthly: "16.99",
    yearly: "132.49",    // 16.99 × 12 × 0.65 = 132.57 → rounded to 132.49
    savings: "35%",
    monthlyCalculated: "11.04"  // 132.49 / 12
  },
  AE: {
    currency: "AED ",
    monthly: "12.00",
    yearly: "93.60",     // 12 × 12 × 0.65 = 93.60
    savings: "35%",
    monthlyCalculated: "7.80"  // 93.60 / 12
  },
  DEFAULT: {
    currency: "$",
    monthly: "6.99",
    yearly: "54.49",
    savings: "35%",
    monthlyCalculated: "4.54"
  },
};

export function Pricing() {
  const [yearly, setYearly] = useState(false);
  const [region, setRegion] = useState<RegionConfig>(PRICING_REGIONS.DEFAULT);

  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.country_code && PRICING_REGIONS[data.country_code]) {
          setRegion(PRICING_REGIONS[data.country_code]);
        }
      })
      .catch((err) => console.error("Error fetching location:", err));
  }, []);

  return (
    <section id="pricing" className="min-h-screen flex items-center py-24 bg-gradient-to-b from-background to-secondary/30">
      <div className="max-w-5xl mx-auto px-6 w-full text-center">
        <div className="text-xs font-bold uppercase tracking-widest text-primary comic-highlight">Pricing</div>
        <h2 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight comic-highlight">One simple plan.<br />Everything included.</h2>
        <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">No per-item fees. No setup charges. Just a beautiful menu and total control.</p>
        <div className="mt-8 inline-flex items-center gap-1 rounded-full border border-border bg-card p-1">
          <button onClick={() => setYearly(false)} className={`px-4 py-2 rounded-full text-sm font-semibold transition ${!yearly ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}>Monthly</button>
          <button onClick={() => setYearly(true)} className={`px-4 py-2 rounded-full text-sm font-semibold transition ${yearly ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}>Yearly <span className="ml-1 text-[10px] opacity-80">save {region.savings}</span></button>
        </div>
        <div className="mt-10 max-w-md mx-auto rounded-3xl bg-card border-2 border-primary p-8 shadow-2xl shadow-primary/20 text-left">
          <div className="text-sm font-semibold text-primary">Pro Plan</div>
          <div className="mt-4 flex items-baseline gap-2">
            <span className="text-6xl font-bold text-foreground">{region.currency}{yearly ? region.yearly : region.monthly}</span>
            <span className="text-muted-foreground">/{yearly ? "year" : "month"}</span>
          </div>
          {yearly && (
            <div className="mt-2 flex flex-col gap-1">
              <span className="text-2xl font-bold text-muted-foreground/60 line-through">
                {region.currency}{region.monthly.includes('.') ? (parseFloat(region.monthly) * 12).toFixed(2) : parseInt(region.monthly) * 12}
              </span>
              <span className="text-sm text-primary font-semibold">
                Just {region.currency}{region.monthlyCalculated}/month — billed yearly
              </span>
            </div>
          )}
          <ul className="mt-6 space-y-3 text-sm">
            {[
              "Custom-branded digital menu",
              "Your own subdomain (brand.qdine.in)",
              "Unlimited categories & menu items",
              "Toggle item availability",
              "QR codes for every table",
              "Photo, price & description updates anytime",
              "Mobile-optimized customer view",
            ].map(f => (
              <li key={f} className="flex gap-2 items-start">
                <Check className="size-5 text-primary shrink-0 mt-0.5" /> <span className="text-foreground">{f}</span>
              </li>
            ))}
          </ul>
          <Button size="lg" className="w-full mt-8 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg shadow-primary/20 transition-all" asChild>
            <a href="https://wa.me/919061555512?text=Hi%2C%20I'm%20interested%20in%20setting%20up%20a%20digital%20menu%20for%20my%20restaurant." target="_blank" rel="noreferrer">
              <MessageCircle className="mr-2 size-5" />
              Get Started via WhatsApp
            </a>
          </Button>
          <div className="text-center mt-3 text-xs text-muted-foreground">Setup takes less than 2 minutes</div>
        </div>
      </div>
    </section>
  );
}

