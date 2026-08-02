"use client"
import { Nav } from "@/components/landing/hero-section";
import { Footer } from "@/components/landing/footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, QrCode, Users, ShoppingBag, CheckCircle2, ChevronDown, ArrowDown } from "lucide-react";
import Link from "next/link";

export default function ModulesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main className="pt-28 pb-16">
        {/* Hero Section */}
        <section className="relative px-6 py-16 md:py-24 max-w-7xl mx-auto text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 size-[600px] rounded-full bg-primary/10 blur-[100px] -z-10" />
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground max-w-4xl mx-auto">
            Choose the Right Solution for <span className="text-primary comic-highlight">Your Restaurant</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Whether you need a digital menu, customer queue management, or complete online ordering, QDine has a solution built for your business.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg shadow-primary/20 transition-all hover:scale-105">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto font-semibold">
              Book Demo
            </Button>
          </div>
        </section>

        {/* Module Cards */}
        <section className="px-6 py-16 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Digital Menu Card */}
            <div className="group relative flex flex-col bg-card border border-border rounded-3xl p-8 shadow-sm hover:shadow-xl hover:border-primary/50 transition-all duration-300">
              <div className="size-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <QrCode className="size-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Digital Menu</h3>
              <p className="text-muted-foreground mb-6 line-clamp-3">
                Transform your dining experience with beautiful, scannable QR menus that you can update in real-time.
              </p>
              <ul className="space-y-3 mb-8 flex-1">
                {["QR Code Menu", "Beautiful Menu UI", "Categories & Variants", "Multi-language Support", "Live Menu Updates"].map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm font-medium">
                    <CheckCircle2 className="size-4 text-primary shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button asChild variant="ghost" className="w-full group-hover:bg-primary group-hover:text-primary-foreground justify-between transition-colors">
                <Link href="/digital-menu">
                  Learn More <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>

            {/* Queue Management Card */}
            <div className="group relative flex flex-col bg-card border border-border rounded-3xl p-8 shadow-sm hover:shadow-xl hover:border-primary/50 transition-all duration-300">
              <div className="size-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="size-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Queue Management</h3>
              <p className="text-muted-foreground mb-6 line-clamp-3">
                Streamline your waiting area, reduce walk-aways, and notify guests exactly when their table is ready.
              </p>
              <ul className="space-y-3 mb-8 flex-1">
                {["Token Management", "Live Queue Status", "Customer Notifications", "Priority Queue", "Analytics"].map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm font-medium">
                    <CheckCircle2 className="size-4 text-primary shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button asChild variant="ghost" className="w-full group-hover:bg-primary group-hover:text-primary-foreground justify-between transition-colors">
                <Link href="/queue-management">
                  Learn More <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>

            {/* Online Ordering Card */}
            <div className="group relative flex flex-col bg-card border border-border rounded-3xl p-8 shadow-sm hover:shadow-xl hover:border-primary/50 transition-all duration-300">
              <div className="size-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ShoppingBag className="size-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Online Ordering</h3>
              <p className="text-muted-foreground mb-6 line-clamp-3">
                Accept orders directly from your customers for dine-in, takeaway, or delivery with integrated payments.
              </p>
              <ul className="space-y-3 mb-8 flex-1">
                {["Online Food Ordering", "Cart & Checkout", "Payment Integration", "Order Tracking", "Kitchen Order Management"].map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm font-medium">
                    <CheckCircle2 className="size-4 text-primary shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button asChild variant="ghost" className="w-full group-hover:bg-primary group-hover:text-primary-foreground justify-between transition-colors">
                <Link href="/online-ordering">
                  Learn More <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose QDine (Workflow) */}
        <section className="px-6 py-20 bg-secondary/30 mt-12 relative overflow-hidden">
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent -z-10 hidden md:block" />
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">How Everything Connects</h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                QDine's modules are designed to work perfectly together, creating a seamless flow from the moment a customer arrives to when they leave completely satisfied.
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 relative">
              {/* Step 1 */}
              <div className="bg-card border border-border p-6 rounded-2xl shadow-sm text-center w-full max-w-[200px] hover:-translate-y-2 transition-transform">
                <div className="font-bold text-lg">Digital Menu</div>
                <div className="text-xs text-muted-foreground mt-1">Guests scan & browse</div>
              </div>

              <ArrowDown className="text-primary size-6 md:-rotate-90 shrink-0" />

              {/* Step 2 */}
              <div className="bg-card border border-border p-6 rounded-2xl shadow-sm text-center w-full max-w-[200px] hover:-translate-y-2 transition-transform">
                <div className="font-bold text-lg">Online Ordering</div>
                <div className="text-xs text-muted-foreground mt-1">Place order & pay</div>
              </div>

              <ArrowDown className="text-primary size-6 md:-rotate-90 shrink-0" />

              {/* Step 3 */}
              <div className="bg-card border border-border p-6 rounded-2xl shadow-sm text-center w-full max-w-[200px] hover:-translate-y-2 transition-transform">
                <div className="font-bold text-lg">Kitchen</div>
                <div className="text-xs text-muted-foreground mt-1">Receive & prepare</div>
              </div>

              <ArrowDown className="text-primary size-6 md:-rotate-90 shrink-0" />

              {/* Step 4 */}
              <div className="bg-card border border-border p-6 rounded-2xl shadow-sm text-center w-full max-w-[200px] hover:-translate-y-2 transition-transform">
                <div className="font-bold text-lg">Analytics</div>
                <div className="text-xs text-muted-foreground mt-1">Track sales & growth</div>
              </div>

              <ArrowDown className="text-primary size-6 md:-rotate-90 shrink-0 hidden lg:block" />

              {/* Step 5 */}
              <div className="bg-primary text-primary-foreground p-6 rounded-2xl shadow-lg text-center w-full max-w-[200px] hover:-translate-y-2 transition-transform mt-4 lg:mt-0">
                <div className="font-bold text-lg">Customer Satisfaction</div>
                <div className="text-xs text-primary-foreground/80 mt-1">Happy guests return</div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="px-6 py-24 text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
            Ready to Digitize Your Restaurant?
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg shadow-primary/20 h-14 px-8 text-lg">
              Schedule Demo
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-lg font-semibold">
              Contact Sales
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
