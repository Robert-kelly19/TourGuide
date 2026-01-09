"use client";

import SearchBar from "@/app/components/SearchBar";
import { useState, useEffect } from "react";

const images = [
  "/hero1.jpg",
  "/hero.jpg",
  "/hero2.jpg",
  "/hero3.jpg",
  "/hero4.jpg",
  "/hero5.jpg",
  "/hero6.jpg",
  "/hero7.jpg",
  "/hero8.jpg",
  "/hero9.jpg",
];

export default function Home() {
  const [bg, setBg] = useState(images[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setBg(images[Math.floor(Math.random() * images.length)]);
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative min-h-screen w-full flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      
      <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/60 to-black/80" />

      <div className="relative z-10 w-full max-w-2xl px-4 sm:px-6 text-center text-white">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight mb-4">
          Plan Smarter. <br className="sm:hidden" />
          Travel Better.
        </h1>

        <p className="text-sm sm:text-base md:text-xl opacity-90 mb-6">
          Everything you need for your next adventure — in one place.
        </p>

        
        <div className="w-full max-w-md mx-auto">
          <SearchBar />
        </div>
      </div>
    </section>
  );
}
