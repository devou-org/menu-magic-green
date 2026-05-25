import { Button } from "@/components/ui/button";
import { QrCode, Palette, LayoutGrid, Check, Utensils, Coffee, Pizza, ChefHat, ToggleRight, Globe, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

export function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-primary border-b border-primary-foreground/10">
      <div className="relative max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        <a href="#top" className="flex items-center -ml-4 lg:-ml-8">
          <img src="/qdine-logo-removebg-preview.png" alt="Qdine Logo" className="h-24 w-auto object-contain 
scale-[2.5] lg:scale-[3] origin-left" />
        </a>
        <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8 text-sm font-medium 
text-primary-foreground/85">
          <a href="#brand" className="hover:text-primary-foreground">Brand Preview</a>
          <a href="#menu" className="hover:text-primary-foreground">Menu Control</a>
          <a href="#qr" className="hover:text-primary-foreground">QR Access</a>
          <a href="#pricing" className="hover:text-primary-foreground">Pricing</a>
        </nav>
      </div>
    </header>
  );
}

export function PhoneMockup() {
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
    <div className="relative mx-auto w-[280px] h-[560px] rounded-[44px] bg-foreground p-3 shadow-2xl 
shadow-primary/30">
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-5 bg-foreground rounded-b-2xl z-10" />
      <div className="w-full h-full rounded-[34px] bg-background overflow-hidden flex flex-col">
        <div className="bg-primary text-primary-foreground p-4 pt-8">
          <div className="text-xs opacity-70">your-restaurant.qdine.in</div>
          <div className="mt-2 flex items-center gap-2">
            <div className="size-9 rounded-lg bg-primary-foreground/15 grid place-items-center">
              <ChefHat className="size-5" />
            </div>
            <div>
              <div className="font-bold">Your Restaurant</div>
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
            <div key={it.name} className="rounded-xl border border-border p-3 flex gap-3 bg-card 
hover:border-primary/40 transition">
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

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen pt-28 pb-16 overflow-hidden bg-gradient-to-br from-background 
via-secondary/40 to-background">
      <div className="absolute -top-40 -right-40 size-[500px] rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 size-[500px] rounded-full bg-primary/5 blur-3xl" />
      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 
text-xs font-semibold text-primary">
            <span className="size-1.5 rounded-full bg-primary animate-pulse" /> The Future of Dining
          </div>
          <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight 
text-foreground">
            Transform your <span className="text-primary comic-highlight">guest experience.</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-lg">
            Elevate your restaurant with a seamless, contactless digital menu. Effortless to update, beautiful to look 
at, and perfectly tailored to your brand.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold 
shadow-lg shadow-primary/20 transition-all hover:scale-105" asChild>
              <a href="https://wa.me/919061555512?text=Hi%2C%20I'm%20interested%20in%20setting%20up%20a%20digital%20men
u%20for%20my%20restaurant." target="_blank" rel="noreferrer">
                <MessageCircle className="mr-2 size-5" />
                Get Your Digital Menu Now
              </a>
            </Button>
          </div>
          <div className="mt-10 flex items-center gap-8 text-sm text-muted-foreground">
            <div><div className="text-2xl font-bold text-foreground">2 min</div>setup time</div>
            <div><div className="text-2xl font-bold text-foreground">0₹</div>printing cost</div>
            <div><div className="text-2xl font-bold text-foreground">∞</div>updates</div>
          </div>
        </div>
        <div className="relative">
          <PhoneMockup />
          <div className="absolute -right-4 top-12 hidden md:flex items-center gap-2 bg-card rounded-xl shadow-xl 
border border-border p-3">
            <div className="size-8 rounded-lg bg-primary grid place-items-center"><QrCode className="size-4 
text-primary-foreground" /></div>
            <div className="text-xs"><div className="font-semibold">Scan to view</div><div 
className="text-muted-foreground">Table 7</div></div>
          </div>
          <div className="absolute -left-4 bottom-20 hidden md:flex items-center gap-2 bg-card rounded-xl shadow-xl 
border border-border p-3">
            <ToggleRight className="size-5 text-primary" />
            <div className="text-xs"><div className="font-semibold">Sold out</div><div 
className="text-muted-foreground">Truffle Risotto</div></div>
          </div>
        </div>
      </div>
    </section>
  );
}

