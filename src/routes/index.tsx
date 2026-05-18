import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { QrCode, Palette, LayoutGrid, Check, Utensils, Coffee, Pizza, ChefHat, ToggleRight, Globe } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MenuLeaf — Digital Menu Service for Restaurants" },
      { name: "description", content: "Beautiful QR-code digital menus for restaurants. Custom branded, category-wise menus with live availability toggles. ₹199/month." },
      { property: "og:title", content: "MenuLeaf — Digital Menus for Restaurants" },
      { property: "og:description", content: "Branded QR menus with real-time availability. ₹199/month or ₹1300/year." },
    ],
  }),
  component: Index,
});

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/60">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-bold text-primary text-lg">
          <div className="size-8 rounded-lg bg-primary grid place-items-center">
            <Utensils className="size-4 text-primary-foreground" />
          </div>
          MenuLeaf
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-foreground/80">
          <a href="#brand" className="hover:text-primary">Brand Preview</a>
          <a href="#menu" className="hover:text-primary">Menu Control</a>
          <a href="#qr" className="hover:text-primary">QR Access</a>
          <a href="#pricing" className="hover:text-primary">Pricing</a>
        </nav>
        <Button asChild size="sm"><a href="#pricing">Get Started</a></Button>
      </div>
    </header>
  );
}

function PhoneMockup() {
  const [tab, setTab] = useState("Specials");
  const items: Record<string, { name: string; price: string; desc: string; icon: any }[]> = {
    Specials: [
      { name: "Truffle Risotto", price: "₹420", desc: "Arborio, parmesan, black truffle", icon: ChefHat },
      { name: "Wood-fired Pizza", price: "₹360", desc: "San Marzano, fior di latte, basil", icon: Pizza },
    ],
    Starters: [
      { name: "Burrata Plate", price: "₹280", desc: "Heirloom tomato, balsamic", icon: Utensils },
      { name: "Crispy Calamari", price: "₹260", desc: "Lemon aioli, smoked paprika", icon: Utensils },
    ],
    Drinks: [
      { name: "Cold Brew", price: "₹140", desc: "12 hour slow brew", icon: Coffee },
      { name: "Hibiscus Cooler", price: "₹160", desc: "Citrus, mint, sparkling", icon: Coffee },
    ],
  };
  return (
    <div className="relative mx-auto w-[280px] h-[560px] rounded-[44px] bg-foreground p-3 shadow-2xl shadow-primary/30">
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-5 bg-foreground rounded-b-2xl z-10" />
      <div className="w-full h-full rounded-[34px] bg-background overflow-hidden flex flex-col">
        <div className="bg-primary text-primary-foreground p-4 pt-8">
          <div className="text-xs opacity-70">menuleaf.in/chicpicado</div>
          <div className="mt-2 flex items-center gap-2">
            <div className="size-9 rounded-lg bg-primary-foreground/15 grid place-items-center">
              <ChefHat className="size-5" />
            </div>
            <div>
              <div className="font-bold">chicpicado</div>
              <div className="text-[10px] opacity-70">Italian · Open now</div>
            </div>
          </div>
        </div>
        <div className="flex gap-2 p-3 border-b border-border overflow-x-auto">
          {Object.keys(items).map((t) => (
            <button key={t} onClick={() => setTab(t)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition ${
                tab === t ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"
              }`}>{t}</button>
          ))}
        </div>
        <div className="flex-1 overflow-y-auto p-3 space-y-2">
          {items[tab].map((it) => (
            <div key={it.name} className="rounded-xl border border-border p-3 flex gap-3 bg-card hover:border-primary/40 transition">
              <div className="size-12 rounded-lg bg-accent grid place-items-center shrink-0">
                <it.icon className="size-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-baseline gap-2">
                  <div className="font-semibold text-sm truncate">{it.name}</div>
                  <div className="text-primary font-bold text-sm">{it.price}</div>
                </div>
                <div className="text-[11px] text-muted-foreground line-clamp-2">{it.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen pt-24 pb-16 overflow-hidden bg-gradient-to-br from-background via-secondary/40 to-background">
      <div className="absolute -top-40 -right-40 size-[500px] rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 size-[500px] rounded-full bg-primary/5 blur-3xl" />
      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary">
            <span className="size-1.5 rounded-full bg-primary animate-pulse" /> Live for 200+ restaurants
          </div>
          <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-foreground">
            Your menu, <span className="text-primary">scanned not</span> printed.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-lg">
            Replace dog-eared printed menus with a beautifully branded digital experience. One QR code on every table — update prices, mark items 86'd, and refresh your menu in seconds.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button size="lg" asChild><a href="#pricing">Start free trial</a></Button>
            <Button size="lg" variant="outline" asChild><a href="#brand">See it in action</a></Button>
          </div>
          <div className="mt-10 flex items-center gap-8 text-sm text-muted-foreground">
            <div><div className="text-2xl font-bold text-foreground">2 min</div>setup time</div>
            <div><div className="text-2xl font-bold text-foreground">0₹</div>printing cost</div>
            <div><div className="text-2xl font-bold text-foreground">∞</div>updates</div>
          </div>
        </div>
        <div className="relative">
          <PhoneMockup />
          <div className="absolute -right-4 top-12 hidden md:flex items-center gap-2 bg-card rounded-xl shadow-xl border border-border p-3">
            <div className="size-8 rounded-lg bg-primary grid place-items-center"><QrCode className="size-4 text-primary-foreground" /></div>
            <div className="text-xs"><div className="font-semibold">Scan to view</div><div className="text-muted-foreground">Table 7</div></div>
          </div>
          <div className="absolute -left-4 bottom-20 hidden md:flex items-center gap-2 bg-card rounded-xl shadow-xl border border-border p-3">
            <ToggleRight className="size-5 text-primary" />
            <div className="text-xs"><div className="font-semibold">Sold out</div><div className="text-muted-foreground">Truffle Risotto</div></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureSection({
  id, eyebrow, title, desc, bg, reverse, children,
}: { id: string; eyebrow: string; title: string; desc: string; bg: "white" | "green"; reverse?: boolean; children: React.ReactNode }) {
  const bgClass = bg === "green" ? "bg-primary text-primary-foreground" : "bg-background text-foreground";
  const eyebrowClass = bg === "green" ? "text-primary-foreground/70" : "text-primary";
  const descClass = bg === "green" ? "text-primary-foreground/80" : "text-muted-foreground";
  return (
    <section id={id} className={`min-h-screen flex items-center py-24 ${bgClass}`}>
      <div className={`max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center w-full ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
        <div>
          <div className={`text-xs font-bold uppercase tracking-widest ${eyebrowClass}`}>{eyebrow}</div>
          <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">{title}</h2>
          <p className={`mt-6 text-lg max-w-lg ${descClass}`}>{desc}</p>
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
}

function BrandPreviewVisual() {
  return (
    <div className="relative">
      <div className="rounded-3xl border border-border bg-card p-6 shadow-2xl shadow-primary/10">
        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
          <Globe className="size-3.5" />
          <span className="font-mono">menuleaf.in/<span className="text-primary font-semibold">yourbrand</span></span>
        </div>
        <div className="rounded-2xl border border-border overflow-hidden">
          <div className="bg-accent/50 p-4 flex items-center gap-3">
            <div className="size-10 rounded-lg bg-primary grid place-items-center"><ChefHat className="size-5 text-primary-foreground" /></div>
            <div className="font-bold text-foreground">chicpicado</div>
          </div>
          <div className="p-4 space-y-3">
            <div className="h-2 w-32 rounded bg-primary" />
            <div className="flex gap-2">
              <div className="px-3 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-semibold">All Specials</div>
              <div className="px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground text-xs font-semibold">Starters</div>
            </div>
            <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mt-3">Layout Preview</div>
            <div className="grid grid-cols-2 gap-2">
              {[0, 1].map(i => (
                <div key={i} className="rounded-lg bg-accent/60 h-20 p-2 flex flex-col justify-end">
                  <div className="h-1.5 w-12 rounded bg-primary" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground rounded-2xl px-4 py-3 shadow-xl">
        <div className="text-xs opacity-70">Your subdomain</div>
        <div className="font-bold font-mono">yourbrand.menuleaf.in</div>
      </div>
    </div>
  );
}

function CategoryVisual() {
  const [available, setAvailable] = useState<Record<string, boolean>>({
    "Margherita Pizza": true, "Truffle Pasta": false, "Caesar Salad": true, "Tiramisu": true,
  });
  return (
    <div className="rounded-3xl bg-primary-foreground/10 backdrop-blur border border-primary-foreground/20 p-6">
      <div className="flex gap-2 mb-4 flex-wrap">
        {["Pizza", "Pasta", "Salads", "Desserts"].map((c, i) => (
          <div key={c} className={`px-3 py-1.5 rounded-full text-xs font-semibold ${i === 0 ? "bg-primary-foreground text-primary" : "bg-primary-foreground/15 text-primary-foreground"}`}>{c}</div>
        ))}
      </div>
      <div className="space-y-2">
        {Object.entries(available).map(([name, on]) => (
          <div key={name} className="flex items-center justify-between p-4 rounded-xl bg-primary-foreground/10 border border-primary-foreground/15">
            <div>
              <div className="font-semibold text-primary-foreground">{name}</div>
              <div className={`text-xs ${on ? "text-primary-foreground/60" : "text-primary-foreground/40 line-through"}`}>
                {on ? "Available now" : "Sold out today"}
              </div>
            </div>
            <button
              onClick={() => setAvailable(p => ({ ...p, [name]: !p[name] }))}
              className={`relative w-12 h-7 rounded-full transition ${on ? "bg-primary-foreground" : "bg-primary-foreground/20"}`}
            >
              <span className={`absolute top-0.5 size-6 rounded-full bg-primary transition ${on ? "left-[22px]" : "left-0.5"}`} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function QRVisual() {
  return (
    <div className="flex items-center justify-center">
      <div className="relative">
        <div className="rounded-3xl bg-card border border-border p-8 shadow-2xl shadow-primary/10 text-center">
          <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Table 07</div>
          <div className="mt-3 font-bold text-foreground">Scan to order</div>
          <div className="mt-4 size-48 mx-auto rounded-2xl bg-foreground p-3">
            <div className="size-full grid grid-cols-8 grid-rows-8 gap-px">
              {Array.from({ length: 64 }).map((_, i) => {
                const corners = [0, 7, 56].includes(i);
                const on = corners || Math.random() > 0.45;
                return <div key={i} className={on ? "bg-background rounded-sm" : ""} />;
              })}
            </div>
          </div>
          <div className="mt-4 font-mono text-xs text-muted-foreground">menuleaf.in/chicpicado</div>
        </div>
        <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground rounded-full size-16 grid place-items-center shadow-xl">
          <QrCode className="size-8" />
        </div>
      </div>
    </div>
  );
}

function Pricing() {
  const [yearly, setYearly] = useState(false);
  return (
    <section id="pricing" className="min-h-screen flex items-center py-24 bg-gradient-to-b from-background to-secondary/30">
      <div className="max-w-5xl mx-auto px-6 w-full text-center">
        <div className="text-xs font-bold uppercase tracking-widest text-primary">Pricing</div>
        <h2 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight">One simple plan.<br/>Everything included.</h2>
        <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">No per-item fees. No setup charges. Just a beautiful menu and total control.</p>
        <div className="mt-8 inline-flex items-center gap-1 rounded-full border border-border bg-card p-1">
          <button onClick={() => setYearly(false)} className={`px-4 py-2 rounded-full text-sm font-semibold transition ${!yearly ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}>Monthly</button>
          <button onClick={() => setYearly(true)} className={`px-4 py-2 rounded-full text-sm font-semibold transition ${yearly ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}>Yearly <span className="ml-1 text-[10px] opacity-80">save 45%</span></button>
        </div>
        <div className="mt-10 max-w-md mx-auto rounded-3xl bg-card border-2 border-primary p-8 shadow-2xl shadow-primary/20 text-left">
          <div className="text-sm font-semibold text-primary">MenuLeaf Pro</div>
          <div className="mt-4 flex items-baseline gap-2">
            <span className="text-6xl font-bold text-foreground">₹{yearly ? "1300" : "199"}</span>
            <span className="text-muted-foreground">/{yearly ? "year" : "month"}</span>
          </div>
          {yearly && <div className="mt-1 text-sm text-primary font-semibold">Just ₹108/month — billed yearly</div>}
          <ul className="mt-6 space-y-3 text-sm">
            {[
              "Custom-branded digital menu",
              "Your own subdomain (brand.menuleaf.in)",
              "Unlimited categories & menu items",
              "Toggle item availability in real-time",
              "QR codes for every table",
              "Photo, price & description updates anytime",
              "Mobile-optimized customer view",
              "Priority email support",
            ].map(f => (
              <li key={f} className="flex gap-2 items-start">
                <Check className="size-5 text-primary shrink-0 mt-0.5" /> <span className="text-foreground">{f}</span>
              </li>
            ))}
          </ul>
          <Button size="lg" className="w-full mt-8">Start 14-day free trial</Button>
          <div className="text-center mt-3 text-xs text-muted-foreground">No credit card required</div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 font-bold">
          <div className="size-8 rounded-lg bg-primary grid place-items-center">
            <Utensils className="size-4 text-primary-foreground" />
          </div>
          MenuLeaf
        </div>
        <div className="text-sm text-background/70">
          Made with <span className="text-primary">♥</span> by <a href="https://devou.in" target="_blank" rel="noreferrer" className="text-background font-semibold hover:text-primary transition">devou.in</a>
        </div>
        <div className="text-xs text-background/50">© {new Date().getFullYear()} MenuLeaf. All rights reserved.</div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <Hero />
      <FeatureSection
        id="brand"
        bg="white"
        eyebrow="01 — Brand Preview"
        title="Your brand, pixel-perfect on every screen."
        desc="Send us your logo and brand image — we'll craft a digital menu that matches your identity, complete with your own subdomain like yourbrand.menuleaf.in. Customers see your brand, not ours."
      >
        <BrandPreviewVisual />
      </FeatureSection>
      <FeatureSection
        id="menu"
        bg="green"
        eyebrow="02 — Live Menu Control"
        title="Sold out? Flip a switch."
        desc="Organize your menu by category — starters, mains, drinks, desserts. Toggle any item's availability in real-time from your phone. No more awkward 'sorry, we're out of that' moments."
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
      <Footer />
    </div>
  );
}
