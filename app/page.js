"use client";

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
    ArrowRight,
    Award,
    Building2,
    CheckCircle2,
    ClipboardCheck,
    HardHat,
    Leaf,
    Mail,
    MapPin,
    Menu,
    MessageCircle,
    Phone,
    Search,
    ShieldCheck,
    Truck,
    Users,
    Wrench,
    X,
} from "lucide-react";

function Button({ children, className = "", variant = "default", ...props }) {
    const base = "inline-flex items-center justify-center transition disabled:pointer-events-none disabled:opacity-50";
    const styles =
        variant === "outline"
            ? "border border-white/15 bg-white/5 text-white hover:bg-white/10"
            : "bg-amber-400 text-slate-950 hover:bg-amber-300";

    return (
        <button className={`${base} ${styles} ${className}`} {...props}>
            {children}
        </button>
    );
}

function Card({ children, className = "" }) {
    return <div className={`border ${className}`}>{children}</div>;
}

function CardContent({ children, className = "" }) {
    return <div className={className}>{children}</div>;
}

const services = [
    {
        title: "Civil & Building Construction",
        description:
            "General building, industrial works, pavements, drainage, gabions and practical site infrastructure delivered with a safety-first approach.",
        icon: Building2,
        tags: ["Construction", "NHBRC", "CE 2"],
    },
    {
        title: "Road Maintenance",
        description:
            "Line painting, pothole repairs, guardrails, roadside furniture, drainage maintenance, gabions and road construction support.",
        icon: ClipboardCheck,
        tags: ["Roadworks", "Guardrails", "Drainage"],
    },
    {
        title: "Open Cast Mining & Rehabilitation",
        description:
            "Mining support, stockpile maintenance, rehabilitation, site cleaning and operational support for demanding project environments.",
        icon: HardHat,
        tags: ["Mining", "Rehabilitation", "Stockpiles"],
    },
    {
        title: "Plant Hire",
        description:
            "Reliable plant and operational support for construction, civil works, mining, landscaping and maintenance projects.",
        icon: Wrench,
        tags: ["Equipment", "Operations", "Site Support"],
    },
    {
        title: "Logistics & Material Handling",
        description:
            "Ore transportation, freight logistics and material movement support designed for controlled, productive site operations.",
        icon: Truck,
        tags: ["Transport", "Ore", "Handling"],
    },
    {
        title: "Landscaping, Cleaning & Fencing",
        description:
            "Grass cutting, gardening, tree felling, fencing, general cleaning and environmental maintenance for commercial and public spaces.",
        icon: Leaf,
        tags: ["Maintenance", "Cleaning", "Landscaping"],
    },
];

const projectImages = [
    {
        title: "Road Construction",
        description: "Roadworks and construction support for practical site delivery.",
        image: "/images/RoadConstruction.jpg",
    },
    {
        title: "Guardrail Construction",
        description: "Roadside safety infrastructure and guardrail work.",
        image: "/images/guardrails.jpg",
    },
    {
        title: "Stockpile Maintenance",
        description: "Mining and site support for stockpile management.",
        image: "/images/stockpile-maintenance.png",
    },
    {
        title: "Fencing",
        description: "Fencing services for sites, facilities and public spaces.",
        image: "/images/fencing.jpg",
    },
    {
        title: "Grass Cutting Services",
        description: "Grass cutting, gardening and grounds maintenance.",
        image: "/images/grass-cutting.jpg",
    },
    {
        title: "General Cleaning and Maintenance",
        description: "Cleaning and maintenance support for operational environments.",
        image: "/images/cleainign.jpeg",
    },
];

const projects = [
    "Bakwena N4 / Roadmac Surfacing - Construction of Guardrails",
    "Bapong No. 01 Section - Rorisang Pavement Road Project",
    "Sibanye Site / Bapo Freight & Logistics - Grass Cutting Services",
    "AMAVA Mining Investments - General Cleaning & Maintenance",
    "Mooinooi Police Station - Grass Cutting Services",
    "Andru Mining / Tharisa Tailings Project - Site Support",
];

const stats = [
    { label: "Projects Delivered", value: "11+", icon: Award },
    { label: "Workers Employed", value: "42+", icon: Users },
    { label: "Happy Clients", value: "11+", icon: CheckCircle2 },
    { label: "Safety Mindset", value: "Zero Harm", icon: ShieldCheck },
];

const navItems = ["Home", "Services", "Projects", "SHEQ", "Gallery", "Contact"];

export default function LekauGroupModernWebsite() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [query, setQuery] = useState("");

    const filteredServices = useMemo(() => {
        const value = query.trim().toLowerCase();
        if (!value) return services;

        return services.filter((service) =>
            [service.title, service.description, ...service.tags]
                .join(" ")
                .toLowerCase()
                .includes(value)
        );
    }, [query]);

    return (
        <div className="min-h-screen bg-[#070b12] text-white">
            <div className="pointer-events-none fixed inset-0 overflow-hidden">
                <div className="absolute -top-28 right-0 h-96 w-96 rounded-full bg-amber-500/20 blur-3xl" />
                <div className="absolute top-1/3 -left-32 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />
                <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
            </div>

            <header className="sticky top-0 z-50 border-b border-white/10 bg-[#070b12]/80 backdrop-blur-xl">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
                    <a href="#home" className="flex items-center gap-4">
                        <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl bg-white p-2 shadow-xl shadow-amber-500/20 ring-1 ring-white/10">
                            <img
                                src="/images/lekau-group-logo.png"
                                alt="Lekau Group logo"
                                className="h-full w-full object-contain"
                            />
                        </div>

                        <div>
                            <p className="text-xl font-black tracking-tight">LEKAU GROUP</p>
                            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-300">
                                Stuck on success
                            </p>
                        </div>
                    </a>

                    <nav className="hidden items-center gap-8 lg:flex">
                        {navItems.map((item) => (
                            <a
                                key={item}
                                href={item === "Gallery" ? "/gallery" : `#${item.toLowerCase()}`}
                                className="text-sm font-semibold text-slate-300 transition hover:text-amber-300"
                            >
                                {item}
                            </a>
                        ))}
                    </nav>

                <div className="hidden items-center gap-3 lg:flex">
                    <a
                        href="tel:+27825153849"
                        className="rounded-2xl border border-white/10 px-4 py-2 text-sm font-semibold text-slate-200 hover:border-amber-300/40 hover:text-amber-300"
                    >
                        082 515 3849
                    </a>
                    <Button className="rounded-2xl px-5 py-2.5 font-black">
                        Request Quote <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </div>

                <button
                    className="rounded-xl border border-white/10 p-2 lg:hidden"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <X /> : <Menu />}
                </button>
        </div>

        {
        menuOpen && (
            <div className="border-t border-white/10 bg-[#070b12] px-5 py-4 lg:hidden">
                <div className="grid gap-3">
                                {navItems.map((item) => (
                                    <a
                                        key={item}
                                        href={item === "Gallery" ? "/gallery" : `#${item.toLowerCase()}`}
                                        onClick={() => setMenuOpen(false)}
                                        className="rounded-xl px-3 py-2 font-semibold text-slate-200 hover:bg-white/10"
                                    >
                                        {item}
                                    </a>
                                ))}
                    <Button className="mt-2 rounded-2xl px-5 py-3 font-black">Request Quote</Button>
                </div>
            </div>
        )
    }
      </header >

      <main className="relative">
        <section id="home" className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(7,11,18,0.25),#070b12),radial-gradient(circle_at_25%_20%,rgba(251,191,36,0.18),transparent_35%)]" />

          <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-28">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65 }}
              className="flex flex-col justify-center"
            >
              <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-amber-300/30 bg-amber-300/10 px-4 py-2 text-sm font-bold text-amber-200">
                <ShieldCheck className="h-4 w-4" /> Safety-first construction, mining & maintenance partner
              </div>

              <h1 className="max-w-4xl text-5xl font-black leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
                Built for reliable delivery on demanding sites.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Lekau Group provides civil construction, road maintenance, mining rehabilitation,
                plant hire, logistics, landscaping and general maintenance services across South Africa.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button className="rounded-2xl px-7 py-4 text-base font-black">
                  Get a Project Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  className="rounded-2xl px-7 py-4 text-base font-black"
                >
                  Explore Services
                </Button>
              </div>

              <div className="mt-9 flex flex-wrap gap-3 text-sm text-slate-300">
                {["NHBRC Registered", "SHEQ Driven", "Community Focused", "Zero Harm Mindset"].map((item) => (
                  <span key={item} className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.96 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                            className="relative"
                        >
                            <div
                                className="relative min-h-[520px] overflow-hidden rounded-[2rem] border border-white/10 bg-cover bg-center shadow-2xl shadow-black/40"
                                style={{
                                    backgroundImage: "url('/images/20190402_1558361-e1555435208536.jpeg')",
                                }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10" />

                                <div className="absolute left-0 right-0 top-0 flex justify-between p-5">
                                    <span className="rounded-full bg-amber-400 px-4 py-2 text-sm font-black text-slate-950">
                                        Lekau Group
                                    </span>

                                    <span className="rounded-full border border-white/20 bg-black/30 px-4 py-2 text-sm font-bold text-white backdrop-blur">
                                        Site Delivery
                                    </span>
                                </div>

                                <div className="absolute bottom-0 left-0 right-0 p-6">
                                    <p className="text-sm font-black uppercase tracking-[0.22em] text-amber-300">
                                        Real Project Work
                                    </p>

                                    <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">
                                        Construction, roadworks, maintenance and mining support delivered on site.
                                    </h2>

                                    <p className="mt-4 max-w-xl leading-7 text-slate-200">
                                        A stronger visual identity using Lekau Group project photos makes the website feel more credible and ready for client enquiries.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.28em] text-amber-300">What we do</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
                Integrated site services for construction, roads and mining.
              </h2>
            </div>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search services e.g. road, mining, cleaning..."
                className="w-full rounded-2xl border border-white/10 bg-white/5 py-4 pl-12 pr-4 font-medium text-white outline-none transition placeholder:text-slate-500 focus:border-amber-300/50 focus:bg-white/10"
              />
            </div>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {filteredServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.04 }}
                >
                  <Card className="h-full rounded-3xl border-white/10 bg-white/[0.06] text-white shadow-xl shadow-black/10 transition hover:-translate-y-1 hover:bg-white/[0.09]">
                    <CardContent className="p-6">
                      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-400 text-slate-950">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-black">{service.title}</h3>
                      <p className="mt-3 leading-7 text-slate-300">{service.description}</p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {service.tags.map((tag) => (
                          <span key={tag} className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-slate-200">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section id="projects" className="border-y border-white/10 bg-white/[0.03]">
          <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.28em] text-amber-300">Selected work</p>
                <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
                  Projects that prove practical field capability.
                </h2>
                <p className="mt-5 leading-8 text-slate-300">
                
                </p>
              </div>
              <div className="grid gap-4">
                {projects.map((project, index) => (
                  <motion.div
                    key={project}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: index * 0.05 }}
                    className="flex gap-4 rounded-3xl border border-white/10 bg-[#070b12]/70 p-5"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-amber-400 text-sm font-black text-slate-950">
                      {index + 1}
                    </div>
                    <p className="font-semibold leading-7 text-slate-100">{project}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="sheq" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-amber-400 to-orange-500 p-1">
            <div className="rounded-[1.85rem] bg-[#070b12] p-8 lg:p-12">
              <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.28em] text-amber-300">
                    Safety, Health, Environment & Quality
                  </p>
                  <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
                    A safer way to build, maintain and operate.
                  </h2>
                  <p className="mt-5 leading-8 text-slate-300">
                    Protecting people, client assets,
                    communities and the environment.
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    "Safe working environment",
                    "Environmental protection",
                    "Health and wellness focus",
                    "Quality service delivery",
                    "Fatigue management",
                    "Risk identification",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/5 p-4">
                      <CheckCircle2 className="h-5 w-5 text-emerald-300" />
                      <span className="font-semibold text-slate-100">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

                <section id="gallery" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
                    <div className="mb-10 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
                        <div>
                            <p className="text-sm font-black uppercase tracking-[0.28em] text-amber-300">
                                Project Gallery
                            </p>

                            <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
                                Real work. Real sites. Real delivery.
                            </h2>
                        </div>

                        <p className="leading-8 text-slate-300">
                            Showcasing Lekau Group project work across road construction, fencing, grass cutting, stockpile maintenance and general site services.
                        </p>
                    </div>

                    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                        {projectImages.map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.45, delay: index * 0.04 }}
                                className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] shadow-xl shadow-black/10"
                            >
                                <div
                                    className="h-64 bg-cover bg-center transition duration-500 group-hover:scale-105"
                                    style={{
                                        backgroundImage: `url('${item.image}')`,
                                    }}
                                />

                                <div className="p-6">
                                    <p className="text-xs font-black uppercase tracking-[0.22em] text-amber-300">
                                        Project {index + 1}
                                    </p>

                                    <h3 className="mt-3 text-xl font-black text-white">
                                        {item.title}
                                    </h3>

                                    <p className="mt-3 leading-7 text-slate-300">
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

        <section id="contact" className="mx-auto max-w-7xl px-5 pb-20 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <Card className="rounded-3xl border-white/10 bg-white/[0.06] text-white">
              <CardContent className="p-8">
                <p className="text-sm font-black uppercase tracking-[0.28em] text-amber-300">Contact</p>
                <h2 className="mt-3 text-4xl font-black tracking-tight">Ready to quote your next project?</h2>
                <p className="mt-4 leading-8 text-slate-300">
              
                </p>
                <div className="mt-8 grid gap-4">
                  <a href="tel:+27825153849" className="flex items-center gap-4 rounded-2xl bg-white/5 p-4 hover:bg-white/10">
                    <Phone className="h-5 w-5 text-amber-300" />
                    <span>+27 82 515 3849 / +27 82 232 2651 / 012 882 0847</span>
                  </a>
                  <a href="mailto:info@lekaugroup.co.za" className="flex items-center gap-4 rounded-2xl bg-white/5 p-4 hover:bg-white/10">
                    <Mail className="h-5 w-5 text-amber-300" />
                    <span>info@lekaugroup.co.za / itu@lekaugroup.co.za</span>
                  </a>
                  <div className="flex items-center gap-4 rounded-2xl bg-white/5 p-4">
                    <MapPin className="h-5 w-5 text-amber-300" />
                    <span>KL 012, Sgandaf Section, Majakaneng, Brits, North West, South Africa</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border-white/10 bg-amber-400 text-slate-950">
              <CardContent className="p-8">
                <h3 className="text-3xl font-black">Quick enquiry</h3>
                <p className="mt-2 font-semibold text-slate-800">Tell us what you need and the team can respond with the right service support.</p>
                <div className="mt-6 grid gap-4">
                  <input className="rounded-2xl border-0 bg-white/85 px-4 py-4 font-semibold outline-none placeholder:text-slate-500" placeholder="Your name" />
                  <input className="rounded-2xl border-0 bg-white/85 px-4 py-4 font-semibold outline-none placeholder:text-slate-500" placeholder="Phone or email" />
                  <select className="rounded-2xl border-0 bg-white/85 px-4 py-4 font-semibold outline-none">
                    <option>Select service</option>
                    <option>Road Maintenance</option>
                    <option>Civil Construction</option>
                    <option>Mining & Rehabilitation</option>
                    <option>Plant Hire</option>
                    <option>Landscaping & Maintenance</option>
                  </select>
                  <textarea className="min-h-32 rounded-2xl border-0 bg-white/85 px-4 py-4 font-semibold outline-none placeholder:text-slate-500" placeholder="Tell us about your project" />
                  <Button className="rounded-2xl bg-slate-950 px-7 py-4 text-base font-black text-white hover:bg-slate-800">
                    Submit Enquiry <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

            <a
                href="https://wa.me/27822322651?text=Hello%20Lekau%20Group%2C%20I%20would%20like%20to%20request%20a%20quote."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with Lekau Group on WhatsApp"
                className="fixed bottom-5 right-5 z-[60] flex items-center gap-3 rounded-full bg-green-500 px-5 py-4 font-black text-white shadow-2xl shadow-green-500/30 transition hover:-translate-y-1 hover:bg-green-400"
            >
                <MessageCircle className="h-6 w-6" />
                <span className="hidden sm:inline">WhatsApp</span>
            </a>


      <footer className="relative border-t border-white/10 px-5 py-8 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Lekau Group</p>
          <div className="flex gap-5">
            <a href="#services" className="hover:text-amber-300">Services</a>
            <a href="#projects" className="hover:text-amber-300">Projects</a>
            <a href="#contact" className="hover:text-amber-300">Contact</a>
          </div>
        </div>
      </footer>
    </div >
  );
}
