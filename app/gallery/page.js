
"use client";

import React, { useMemo, useState } from "react";
import { ArrowLeft, Image as ImageIcon, Search } from "lucide-react";

const numberedImages = Array.from({ length: 46 }, (_, index) => {
    const imageNumber = index + 1;
    return {
        title: `Project Image ${imageNumber}`,
        category: "Projects",
        image: `/images/${imageNumber}.jpeg`,
    };
});

const featuredImages = [
    {
        title: "Road Construction",
        category: "Roadworks",
        image: "/images/RoadConstruction.jpg",
    },
    {
        title: "Road Construction Site",
        category: "Roadworks",
        image: "/images/kau.jpg",
    },
    {
        title: "Guardrails",
        category: "Roadworks",
        image: "/images/guardrails.jpg",
    },
    {
        title: "Stockpile Maintenance",
        category: "Mining",
        image: "/images/stockpile-maintenance.png",
    },
    {
        title: "Fencing",
        category: "Fencing",
        image: "/images/fencing.jpg",
    },
    {
        title: "Grass Cutting",
        category: "Landscaping",
        image: "/images/grass-cutting.jpg",
    },
    {
        title: "General Cleaning",
        category: "Maintenance",
        image: "/images/general-cleaning.jpg",
    },
    {
        title: "Cleaning Services",
        category: "Maintenance",
        image: "/images/cleainign.jpeg",
    },
];

const galleryImages = [...featuredImages, ...numberedImages];

const categories = [
    "All",
    "Projects",
    "Roadworks",
    "Mining",
    "Fencing",
    "Landscaping",
    "Maintenance",
];

function getCollageClass(index) {
    const pattern = index % 12;

    if (pattern === 0) return "sm:col-span-2 sm:row-span-2 h-80 sm:h-full";
    if (pattern === 3) return "sm:row-span-2 h-80 sm:h-full";
    if (pattern === 7) return "sm:col-span-2 h-72";
    return "h-64";
}

export default function GalleryPage() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [query, setQuery] = useState("");

    const filteredImages = useMemo(() => {
        const searchValue = query.trim().toLowerCase();

        return galleryImages.filter((item) => {
            const matchesCategory = activeCategory === "All" || item.category === activeCategory;
            const matchesSearch =
                !searchValue ||
                [item.title, item.category].join(" ").toLowerCase().includes(searchValue);

            return matchesCategory && matchesSearch;
        });
    }, [activeCategory, query]);

    return (
    <main className="min-h-screen bg-[#070b12] text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.20),transparent_35%),linear-gradient(to_bottom,#070b12,#070b12)]" />

        <div className="relative mx-auto max-w-7xl px-5 py-16 lg:px-8">
                    <a
                        href="/"
                        className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-bold text-slate-200 transition hover:bg-white/10"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back to Home
                    </a>

          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-amber-300/10 px-4 py-2 text-sm font-bold text-amber-200">
                <ImageIcon className="h-4 w-4" />
                Lekau Group Gallery
              </div>

              <h1 className="max-w-4xl text-5xl font-black tracking-tight sm:text-6xl">
                Project collage
              </h1>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                Lekau Group project images portfolio.
              </p>
            </div>

            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search gallery e.g. road, fencing, mining..."
                className="w-full rounded-2xl border border-white/10 bg-white/5 py-4 pl-12 pr-4 font-medium text-white outline-none transition placeholder:text-slate-500 focus:border-amber-300/50 focus:bg-white/10"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
        <div className="flex gap-3 overflow-x-auto pb-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`shrink-0 rounded-full px-5 py-2 text-sm font-black transition ${
                activeCategory === category
                  ? "bg-amber-400 text-slate-950"
                  : "border border-white/10 bg-white/5 text-slate-200 hover:bg-white/10"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-8 grid auto-rows-[16rem] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {filteredImages.map((item, index) => (
            <a
              key={`${item.image}-${index}`}
              href={item.image}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] shadow-xl shadow-black/10 ${getCollageClass(index)}`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${item.image}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 transition group-hover:opacity-75" />

              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-xs font-black uppercase tracking-[0.22em] text-amber-300">
                  {item.category}
                </p>
                <h2 className="mt-2 text-lg font-black text-white">{item.title}</h2>
              </div>
            </a>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.06] p-8 text-center">
            <p className="text-lg font-bold text-slate-300">No gallery images found for that search.</p>
          </div>
        )}
      </section>
    </main >
  );
}
