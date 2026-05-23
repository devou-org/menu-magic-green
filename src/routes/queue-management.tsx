import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { QrCode, Ticket, LayoutGrid, Check, Users, Bell, Smartphone, Clock } from "lucide-react";
import { useState, useEffect } from "react";

export const Route = createFileRoute("/queue-management")({
  head: () => ({
    meta: [
      { title: "Qdine Queue Management — Smart Waitlist for Restaurants" },
      { name: "description", content: "Let diners join your queue via QR code, track their live position, and let hosts seat or cancel tickets in one tap. No app download." },
      { property: "og:title", content: "Qdine Queue Management — Smart Waitlist for Restaurants" },
      { property: "og:description", content: "QR-based queue with live ticket tracking and centralized host control." },
    ],
  }),
  component: QueuePage,
});

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-primary border-b border-primary-foreground/10">
      <div className="relative max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        <Link to="/" className="flex items-center -ml-4 lg:-ml-8">
          <img src="/qdine-logo-removebg-preview.png" alt="Qdine Logo" className="h-24 w-auto object-contain scale-[2.5] lg:scale-[3] origin-left" />
        </Link>
        <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8 text-sm font-medium text-primary-foreground/85">
          <a href="#how" className="hover:text-primary-foreground">How it works</a>
          <a href="#features" className="hover:text-primary-foreground">Features</a>
          <a href="#host" className="hover:text-primary-foreground">Host Control</a>
          <a href="#pricing" className="hover:text-primary-foreground">Pricing</a>
        </nav>
        <Link to="/" className="text-sm text-primary-foreground/85 hover:text-primary-foreground">← Menus</Link>
      </div>
    </header>
  );
}

function TicketMockup() {
  const [pos, setPos] = useState(3);
  useEffect(() => {
    const t = setInterval(() => setPos((p) => (p <= 1 ? 5 : p - 1)), 2200);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="relative mx-auto w-[280px] h-[560px] rounded-[44px] bg-foreground p-3 shadow-2xl shadow-primary/30">
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-5 bg-foreground rounded-b-2xl z-10" />
      <div className="w-full h-full rounded-[34px] bg-background overflow-hidden flex flex-col">
        <div className="bg-primary text-primary-foreground p-4 pt-8">
          <div className="text-xs opacity-70">queue.qdine.in/the-fork</div>
          <div className="mt-2 font-semibold">The Fork & Co.</div>
          <div className="text-xs opacity-80">Your live ticket</div>
        </div>
        <div className="flex-1 p-5 flex flex-col items-center justify-center text-center">
          <div className="text-xs uppercase tracking-widest text-muted-foreground">Ticket No.</div>
          <div className="mt-1 text-5xl font-bold text-foreground">A-{12 + pos}</div>
          <div className="mt-6 size-32 rounded-full border-8 border-primary/15 grid place-items-center">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">{pos}</div>
              <div className="text-[10px] text-muted-foreground uppercase">ahead of you</div>
            </div>
          </div>
          <div className="mt-6 inline-flex items-center gap-2 text-xs text-muted-foreground">
            <Clock className="size-3.5" /> Est. wait ~{pos * 4} min
          </div>
          <div className="mt-5 w-full rounded-xl bg-accent text-accent-foreground p-3 text-xs">
            We'll buzz you when it's your turn — keep this tab open.
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon: Icon, title, desc }: { icon: any; title: string; desc: string }) {
  return (
    <div className="rounded-2xl border bg-card p-6 shadow-sm">
      <div className="size-11 rounded-xl bg-primary/10 text-primary grid place-items-center">
        <Icon className="size-5" />
      </div>
      <h3 className="mt-4 font-semibold text-card-foreground">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
    </div>
  );
}

function HostConsole() {
  type Status = "waiting" | "seated" | "cancelled";
  const [rows, setRows] = useState<{ id: string; name: string; party: number; status: Status }[]>([
    { id: "A-13", name: "Ravi K.", party: 2, status: "waiting" },
    { id: "A-14", name: "Priya S.", party: 4, status: "waiting" },
    { id: "A-15", name: "Arjun M.", party: 3, status: "waiting" },
    { id: "A-12", name: "Neha P.", party: 2, status: "seated" },
  ]);
  const update = (id: string, status: Status) =>
    setRows((r) => r.map((x) => (x.id === id ? { ...x, status } : x)));

  const badge = (s: Status) =>
    s === "waiting"
      ? "bg-accent text-accent-foreground"
      : s === "seated"
      ? "bg-primary text-primary-foreground"
      : "bg-muted text-muted-foreground line-through";

  return (
    <div className="rounded-2xl border bg-card shadow-xl overflow-hidden">
      <div className="flex items-center justify-between px-5 py-4 border-b bg-muted/40">
        <div>
          <div className="text-sm font-semibold text-card-foreground">Host Console</div>
          <div className="text-xs text-muted-foreground">{rows.filter((r) => r.status === "waiting").length} waiting · live</div>
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span className="size-2 rounded-full bg-primary animate-pulse" /> Live
        </div>
      </div>
      <div className="divide-y">
        {rows.map((r) => (
          <div key={r.id} className="flex items-center gap-3 px-5 py-3">
            <div className="font-mono text-sm w-14 text-foreground">{r.id}</div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-card-foreground truncate">{r.name}</div>
              <div className="text-xs text-muted-foreground">Party of {r.party}</div>
            </div>
            <span className={`text-[10px] uppercase tracking-wider px-2 py-1 rounded ${badge(r.status)}`}>{r.status}</span>
            <div className="flex items-center gap-1">
              <button
                onClick={() => update(r.id, "seated")}
                aria-label={`Seat ${r.name}`}
                className="text-xs px-2.5 py-1.5 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
                disabled={r.status !== "waiting"}
              >
                Seat
              </button>
              <button
                onClick={() => update(r.id, "cancelled")}
                aria-label={`Cancel ${r.name}`}
                className="text-xs px-2.5 py-1.5 rounded-md border hover:bg-muted disabled:opacity-50"
                disabled={r.status !== "waiting"}
              >
                Cancel
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function QueuePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main className="pt-24">
        {/* Hero */}
        <section className="relative overflow-hidden bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-foreground/10 text-xs font-medium">
                <Bell className="size-3.5" /> Qdine Queue Management
              </span>
              <h1 className="mt-5 text-4xl lg:text-6xl font-bold leading-tight">
                End the crowded entrance.<br />Run a calmer waitlist.
              </h1>
              <p className="mt-5 text-lg text-primary-foreground/85 max-w-xl">
                Diners scan a QR code to join your queue — no app download. They watch their position live while your host seats or cancels tickets in a single tap.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                  Start free trial
                </Button>
                <Button size="lg" variant="outline" className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10">
                  See a live demo
                </Button>
              </div>
              <div className="mt-8 flex items-center gap-6 text-sm text-primary-foreground/80">
                <div className="flex items-center gap-2"><Check className="size-4" /> No app download</div>
                <div className="flex items-center gap-2"><Check className="size-4" /> Works on any phone</div>
              </div>
            </div>
            <div className="flex justify-center">
              <TicketMockup />
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="how" className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold">Three steps to a frictionless wait</h2>
            <p className="mt-3 text-muted-foreground">From sidewalk to seated, without the clipboard.</p>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              { icon: QrCode, title: "1. Scan or tap a link", desc: "Place a QR at the entrance. Customers scan and join the queue in seconds — no install, nothing to download." },
              { icon: Smartphone, title: "2. Track the ticket live", desc: "Each diner gets a digital ticket showing their real-time position and estimated wait time on their phone." },
              { icon: LayoutGrid, title: "3. Host seats with one tap", desc: "Your team manages the whole list from one console: notify, seat, or cancel tickets instantly." },
            ].map((s) => (
              <FeatureCard key={s.title} {...s} />
            ))}
          </div>
        </section>

        {/* Features */}
        <section id="features" className="bg-muted/40 border-y">
          <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold">Live ticket tracking that customers actually trust</h2>
              <p className="mt-4 text-muted-foreground">
                Guests can wander, shop, or sit in their car. Their position updates in real time and they get a gentle nudge when it's almost their turn — so no one feels forgotten and no one crowds your door.
              </p>
              <ul className="mt-6 space-y-3 text-sm">
                {[
                  "Real-time position updates",
                  "Estimated wait time based on your pace",
                  "Automatic notifications when it's almost their turn",
                  "Works on any modern phone browser",
                ].map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <Check className="size-4 text-primary mt-0.5" />
                    <span className="text-foreground">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center">
              <TicketMockup />
            </div>
          </div>
        </section>

        {/* Host control */}
        <section id="host" className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <HostConsole />
          </div>
          <div className="order-1 lg:order-2">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-medium">
              <Users className="size-3.5" /> Centralized Queue Control
            </span>
            <h2 className="mt-4 text-3xl lg:text-4xl font-bold">One screen. Your whole waitlist.</h2>
            <p className="mt-4 text-muted-foreground">
              Hosts manage waiting, seating, and cancellations with a single tap. No more crossed-out names or lost paper lists — the source of truth lives on every device behind the counter.
            </p>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <FeatureCard icon={Ticket} title="One-tap actions" desc="Seat or cancel tickets instantly. Changes sync to the customer's phone in real time." />
              <FeatureCard icon={Bell} title="Smart notifications" desc="Auto-buzz guests when their turn is two away — fewer no-shows, faster turn-times." />
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="bg-primary text-primary-foreground">
          <div className="max-w-3xl mx-auto px-6 py-20 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold">Simple pricing, included with Qdine</h2>
            <p className="mt-3 text-primary-foreground/85">Queue Management is bundled with every Qdine subscription.</p>
            <div className="mt-10 inline-block rounded-2xl bg-primary-foreground text-foreground p-8 text-left shadow-xl">
              <div className="text-sm uppercase tracking-widest text-muted-foreground">Qdine Complete</div>
              <div className="mt-2 text-5xl font-bold">₹199<span className="text-base font-normal text-muted-foreground">/month</span></div>
              <ul className="mt-6 space-y-2 text-sm">
                {["Digital menu with branding", "QR-based queue management", "Live ticket tracking", "Host console with one-tap controls"].map((b) => (
                  <li key={b} className="flex items-center gap-2"><Check className="size-4 text-primary" /> {b}</li>
                ))}
              </ul>
              <Button size="lg" className="mt-6 w-full">Get started</Button>
            </div>
          </div>
        </section>

        <footer className="border-t bg-background">
          <div className="max-w-7xl mx-auto px-6 py-10 flex items-center justify-between text-sm text-muted-foreground">
            <Link to="/" className="font-semibold text-foreground">Qdine</Link>
            <span>© {new Date().getFullYear()} Qdine</span>
          </div>
        </footer>
      </main>
    </div>
  );
}
