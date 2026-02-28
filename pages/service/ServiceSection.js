import { Routes } from "@/navigation/NavigationLib";
import { Navigate } from "@/navigation/NavigationMethods";
import { useState, useRef, useEffect } from "react";

const SERVICES = [
    {
        num: "01",
        img: "/trip.webp",
        title: "Outstation Trips",
        short: "Long-distance travel, done right.",
        desc: "One-way or round-trip cabs for weekend getaways, family holidays, or any long-distance travel across India. Custom routes, flexible schedules — your journey, your way.",
        tags: ["One-way", "Round Trip", "Custom Route"],
        stat: "500+",
        statLabel: "Routes Covered",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
                <path d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        num: "02",
        img: "/airport.webp",
        title: "Airport Transfers",
        short: "Never miss a flight again.",
        desc: "Stress-free pickup and drop to any airport. We track your flight in real-time and ensure you arrive with time to spare — every single time, guaranteed.",
        tags: ["Flight Tracking", "24/7", "Meet & Greet"],
        stat: "98%",
        statLabel: "On-Time Rate",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
                <path d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        num: "03",
        img: "/office.webp",
        title: "Corporate Travel",
        short: "Executive rides for serious business.",
        desc: "Premium cab solutions for enterprises — employee transport, client pickup, event logistics, and executive travel with GST-ready invoicing and monthly plans.",
        tags: ["Monthly Plans", "GST Invoice", "Executive"],
        stat: "200+",
        statLabel: "Corporate Clients",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
                <path d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        num: "04",
        img: "/city.webp",
        title: "Local & City Tours",
        short: "Your city, your pace.",
        desc: "Hourly and full-day local cab bookings for city sightseeing, wedding transfers, shopping tours, and family events — flexible, affordable, always ready.",
        tags: ["Hourly", "Full Day", "Wedding"],
        stat: "10K+",
        statLabel: "Happy Rides",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
                <path d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
];

function Card({ s, index, revealed }) {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className={`
        relative rounded-3xl overflow-hidden h-[500px] cursor-pointer
        transition-all duration-500
        ${hovered ? "shadow-[0_32px_80px_rgba(0,0,0,0.28)] -translate-y-2" : "shadow-[0_6px_28px_rgba(0,0,0,0.10)]"}
        ${revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-9"}
      `}
            style={{ transitionDelay: `${index * 0.1}s` }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <img
                src={s.img}
                alt={s.title}
                className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out ${hovered ? "scale-110" : "scale-105"}`}
            />

            <div className={`absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/95 transition-opacity duration-500 ${hovered ? "opacity-0" : "opacity-100"}`} />

            <div className={`absolute inset-0 bg-gradient-to-br from-black/80 to-black/95 transition-opacity duration-500 ${hovered ? "opacity-100" : "opacity-0"}`} />

            <div className={`absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[radial-gradient(circle,rgba(201,163,84,0.25)_0%,transparent_70%)] transition-opacity duration-500 pointer-events-none ${hovered ? "opacity-100" : "opacity-0"}`} />

            <div className={`absolute inset-0 p-7 flex flex-col justify-end z-10 transition-all duration-300 ${hovered ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"}`}>
                <span className="absolute top-5 left-7 font-serif text-[16px] font-bold tracking-[0.18em] text-amber-300">
                    {s.num}
                </span>

                <div className="w-13 h-13 rounded-2xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-300 mb-5 w-[52px] h-[52px]">
                    {s.icon}
                </div>

                <h3 className="!text-[24px] text-white leading-tight tracking-tight mb-2">
                    {s.title}
                </h3>

                <p className="!text-[16px] text-white/50 leading-relaxed mb-4">
                    {s.short}
                </p>

                <div className="flex flex-wrap gap-1.5">
                    {s.tags.map((t) => (
                        <span key={t} className="bg-white/10 border border-white/20 text-white/70 rounded-full px-3 py-0.5 text-[10.5px] font-medium">
                            {t}
                        </span>
                    ))}
                </div>
            </div>

            <div className={`absolute inset-0 p-7 flex flex-col z-20 transition-all duration-[420ms] ${hovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
                <span className="font-serif text-[24px] font-bold text-amber-300 leading-none tracking-tight">
                    {s.stat}
                </span>
                <span className="text-[0.7rem] text-white/40 uppercase tracking-[0.1em] mt-1 mb-5">
                    {s.statLabel}
                </span>

                <div className="w-10 h-0.5 bg-gradient-to-r from-amber-600 to-amber-300 rounded-full mb-5 shrink-0" />

                <h3 className="!text-[24px] font-bold text-white leading-snug tracking-tight mb-3">
                    {s.title}
                </h3>

                <p className="!text-[16px] text-white/55 leading-[1.85] mb-4 grow">
                    {s.desc}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                    {s.tags.map((t) => (
                        <span key={t} className="bg-amber-400/10 border border-amber-400/30 text-amber-300 rounded-full px-3 py-0.5 text-[10.5px] font-semibold">
                            {t}
                        </span>
                    ))}
                </div>

                {/* <button className="self-start inline-flex items-center gap-2 px-5 py-3 rounded-xl text-[0.84rem] font-semibold text-stone-900 bg-gold shadow-[0_6px_24px_rgba(201,163,84,0.45)] hover:shadow-[0_10px_32px_rgba(201,163,84,0.55)] hover:-translate-y-0.5 transition-all duration-200 border-0 cursor-pointer"
                    onClick={() => Navigate(Routes.contact)}
                >
                    Book Now
                    <svg viewBox="0 0 14 14" fill="none" className="w-3.5 h-3.5" stroke="currentColor" strokeWidth="2.2">
                        <path d="M2 7h10M8 3l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button> */}
            </div>
        </div>
    );
}

export default function ServicesSection() {
    const [revealed, setRevealed] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const obs = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) setRevealed(true); },
            { threshold: 0.08 }
        );
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, []);

    return (
        <section ref={ref} className="service-sec lg:py-[80px] md:py-[60px] py-[40px]">
            <div className="container">
                <div className="service-inner">

                    <div className="flex items-center gap-3 mb-[15px]">
                        <div className="w-8 h-px bg-gold" />
                        <span className="text-[10px] font-medium tracking-[0.18em] uppercase text-gold">
                            Our Service
                        </span>
                    </div>

                    <div className="service-head">
                        <h2
                            className={`text-stone-900 tracking-tight transition-all duration-500 delay-75 ${revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                        >
                            Every Journey,{" "}
                            <span className="text-gold not-italic">Every Need</span>
                        </h2>
                        <p className={`text-gray-500 mt-5 ${revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                            Hover any card to reveal the full service — airport transfers to cross-state adventures.
                        </p>
                    </div>

                    {/* ── Cards grid ── */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mt-[30px]">
                        {SERVICES.map((s, i) => (
                            <Card key={s.num} s={s} index={i} revealed={revealed} />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}