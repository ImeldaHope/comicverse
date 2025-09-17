"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";

export function NavbarMenu() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
     
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-3xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Characters">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/characters/avengers">Avengers</HoveredLink>
            <HoveredLink href="/characters/x-men">X-Men</HoveredLink>
            <HoveredLink href="/characters/spider">Spider-Verse</HoveredLink>
            <HoveredLink href="/characters/guardians">Guardians</HoveredLink>
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Comics">
          <div className="grid grid-cols-2 gap-10 p-4 text-sm">
            <ProductItem
              title="Infinity Gauntlet"
              href="/comics/infinity-gauntlet"
              src="https://i.annihil.us/u/prod/marvel/i/mg/6/70/537ba07b37d4e/clean.jpg"
              description="Thanos wields the Infinity Stones in this legendary saga."
            />
            <ProductItem
              title="Civil War"
              href="/comics/civil-war"
              src="https://i.annihil.us/u/prod/marvel/i/mg/c/90/4bc69f7b8a1f3/clean.jpg"
              description="Heroes divided: Captain America vs Iron Man."
            />
            <ProductItem
              title="Secret Wars"
              href="/comics/secret-wars"
              src="https://i.annihil.us/u/prod/marvel/i/mg/3/f0/537ba06b47d24/clean.jpg"
              description="Battleworld reshapes the Marvel Universe."
            />
            <ProductItem
              title="House of M"
              href="/comics/house-of-m"
              src="https://i.annihil.us/u/prod/marvel/i/mg/f/d0/537ba6a263d3d/clean.jpg"
              description="Scarlet Witch rewrites reality in this iconic storyline."
            />
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Explore">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/events">Major Events</HoveredLink>
            <HoveredLink href="/teams">Superhero Teams</HoveredLink>
            <HoveredLink href="/artifacts">Artifacts & Weapons</HoveredLink>
            <HoveredLink href="/multiverse">Marvel Multiverse</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
