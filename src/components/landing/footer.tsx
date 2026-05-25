import { Button } from "@/components/ui/button";
import { QrCode, Palette, LayoutGrid, Check, Utensils, Coffee, Pizza, ChefHat, ToggleRight, Globe, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <a href="#top" className="flex items-center -ml-4 lg:-ml-8">
          <img src="/qdine-logo-removebg-preview.png" alt="Qdine Logo" className="h-20 w-auto object-contain scale-[2] 
lg:scale-[2.25] origin-center md:origin-left" />
        </a>
        <div className="text-sm text-background/70">
          Made with <span className="text-primary">♥</span> by <a href="https://devou.in" target="_blank" 
rel="noreferrer" className="text-background font-semibold hover:text-primary transition">devou.in</a>
        </div>
        <div className="text-xs text-background/50">© {new Date().getFullYear()} Qdine. All rights reserved.</div>
      </div>
    </footer>
  );
}

