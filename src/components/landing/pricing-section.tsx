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
    yearly: "1669",      // 199 × 12 × 0.70 = 1,673.40 → rounded to 1669
    savings: "30%",
    monthlyCalculated: "139.08"
  },
  US: {
    currency: "$",
    monthly: "9.99",
    yearly: "83.99",     // 9.99 × 12 × 0.70 = 83.93 → rounded to 83.99
    savings: "30%",
    monthlyCalculated: "6.99"
  },
  GB: {
    currency: "£",
    monthly: "6.99",
    yearly: "58.99",     // 6.99 × 12 × 0.70 = 58.75 → rounded to 58.99
    savings: "30%",
    monthlyCalculated: "4.91"
  },
  AE: {
    currency: "AED ",
    monthly: "22.99",
    yearly: "192.99",    // 22.99 × 12 × 0.70 = 192.91 → rounded to 192.99
    savings: "30%",
    monthlyCalculated: "16.08"
  },
  KW: {
    currency: "KWD ",
    monthly: "1.99",
    yearly: "16.99",     // 1.99 × 12 × 0.70 = 16.73 → rounded to 16.99
    savings: "30%",
    monthlyCalculated: "1.42"
  },
  QA: {
    currency: "QAR ",
    monthly: "21.99",
    yearly: "184.99",    // 21.99 × 12 × 0.70 = 184.91 → rounded to 184.99
    savings: "30%",
    monthlyCalculated: "15.41"
  },
  BH: {
    currency: "BHD ",
    monthly: "1.99",
    yearly: "16.99",     // 1.99 × 12 × 0.70 = 16.73 → rounded to 16.99
    savings: "30%",
    monthlyCalculated: "1.42"
  },
  SA: {
    currency: "SAR ",
    monthly: "17.99",
    yearly: "151.99",    // 17.99 × 12 × 0.70 = 151.92 → rounded to 151.99
    savings: "30%",
    monthlyCalculated: "12.67"
  },
  OM: {
    currency: "OMR ",
    monthly: "1.99",
    yearly: "16.99",     // 1.99 × 12 × 0.70 = 16.73 → rounded to 16.99
    savings: "30%",
    monthlyCalculated: "1.42"
  },
  CA: {
    currency: "CAD ",
    monthly: "11.99",
    yearly: "100.99",    // 11.99 × 12 × 0.70 = 100.91 → rounded to 100.99
    savings: "30%",
    monthlyCalculated: "8.41"
  },
  DE: {
    currency: "€",
    monthly: "6.99",
    yearly: "58.99",     // 6.99 × 12 × 0.70 = 58.75 → rounded to 58.99
    savings: "30%",
    monthlyCalculated: "4.91"
  },
  DEFAULT: {
    currency: "$",
    monthly: "9.99",
    yearly: "83.99",
    savings: "30%",
    monthlyCalculated: "6.99"
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

