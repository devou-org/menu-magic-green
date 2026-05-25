import { Button } from "@/components/ui/button";
import { QrCode, Palette, LayoutGrid, Check, Utensils, Coffee, Pizza, ChefHat, ToggleRight, Globe, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

export function FeatureSection({
  id, eyebrow, title, desc, bg, reverse, children,
}: { id: string; eyebrow: string; title: string; desc: string; bg: "white" | "green"; reverse?: boolean; children: 
React.ReactNode }) {
  const bgClass = bg === "green" ? "bg-primary text-primary-foreground" : "bg-background text-foreground";
  const eyebrowClass = bg === "green" ? "text-primary-foreground/70" : "text-primary";
  const descClass = bg === "green" ? "text-primary-foreground/80" : "text-muted-foreground";
  return (
    <section id={id} className={`min-h-screen flex items-center py-24 ${bgClass}`}>
      <div className={`max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center w-full ${reverse ? 
"lg:[&>*:first-child]:order-2" : ""}`}>
        <div>
          <div className={`text-xs font-bold uppercase tracking-widest comic-highlight 
${eyebrowClass}`}>{eyebrow}</div>
          <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight 
comic-highlight">{title}</h2>
          <p className={`mt-6 text-lg max-w-lg ${descClass}`}>{desc}</p>
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
}

export function BrandPreviewVisual() {
  return (
    <div className="relative">
      <div className="rounded-3xl border border-border bg-card p-6 shadow-2xl shadow-primary/10">
        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
          <Globe className="size-3.5" />
          <span className="font-mono"><span className="text-primary font-semibold">yourbrand</span>.qdine.in</span>
        </div>
        <div className="rounded-2xl border border-border overflow-hidden">
          <div className="bg-accent/50 p-4 flex items-center gap-3">
            <div className="size-10 rounded-lg bg-primary grid place-items-center"><ChefHat className="size-5 
text-primary-foreground" /></div>
            <div className="font-bold text-foreground">Your Restaurant</div>
          </div>
          <div className="p-4 space-y-3">
            <div className="h-2 w-32 rounded bg-primary" />
            <div className="flex gap-2">
              <div className="px-3 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-semibold">All 
Specials</div>
              <div className="px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground text-xs 
font-semibold">Starters</div>
            </div>
            <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mt-3">Layout 
Preview</div>
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
        <div className="font-bold font-mono">yourbrand.qdine.in</div>
      </div>
    </div>
  );
}

export function CategoryVisual() {
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
              <div className={`text-xs ${on ? "text-primary-foreground/80" : "text-primary-foreground/70 line-through"}`}>
                {on ? "Available now" : "Sold out today"}
              </div>
            </div>
            <button
              onClick={() => setAvailable(p => ({ ...p, [name]: !p[name] }))}
              aria-label={`Toggle availability for ${name} (currently ${on ? "available" : "sold out"})`}
              aria-pressed={on}
              className={`relative w-12 h-7 rounded-full transition ${on ? "bg-primary-foreground" : 
"bg-primary-foreground/20"}`}
            >
              <span className={`absolute top-0.5 size-6 rounded-full bg-primary transition ${on ? "left-[22px]" : 
"left-0.5"}`} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export function QRVisual() {
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
          <div className="mt-4 font-mono text-xs text-muted-foreground">your-restaurant.qdine.in</div>
        </div>
        <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground rounded-full size-16 grid 
place-items-center shadow-xl">
          <QrCode className="size-8" />
        </div>
      </div>
    </div>
  );
}

