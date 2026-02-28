import CtaBand from '@/components/ctaBand/CtaBand'
import FleetCard from '@/components/fleetCard/FleetCard'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import HowItWorks from './HowItWorks'
import FleetSection from '@/components/fleetCard/FleetCard'
import WhyVstar from './WhyVstar'
import SetMetaData from '@/components/common/metaData/SetMetaData'

function Home() {

  const TESTIMONIALS = [
    { init: 'R', name: 'Rajan Mehta', loc: 'Gandhinagar → Udaipur', text: '"Booked an Innova for our family trip to Udaipur. The driver was extremely courteous and the car was spotless. Will definitely book again!"' },
    { init: 'P', name: 'Priya Shah', loc: 'Corporate Outing, Surat', text: '"Our corporate team used the Tempo Traveller for an offsite. Perfect arrangement — on time, comfortable seating, and great AC. Highly recommended!"' },
    { init: 'A', name: 'Amit Patel', loc: 'Vadodara Airport Transfer', text: '"Used Swift Dzire for airport pick-up at 3 AM. Driver was on time, polite, and the pricing was very fair. Vstar is my go-to cab service now."' },
  ]

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  const fadeUp = (delay = "0s") => ({
    opacity: loaded ? 1 : 0,
    transform: loaded ? "translateY(0)" : "translateY(20px)",
    transition: `opacity 0.7s ease ${delay}, transform 0.7s ease ${delay}`,
  });

  const stats = [
    { n: "2K+", l: "Happy Trips" },
    { n: "8+", l: "Years Service" },
    { n: "24/7", l: "Support" },
  ];

  return (
    <>
      <SetMetaData
        title="Vstar Cab Services | Reliable Cab & Tempo Traveller Rental in Gujarat"
        description="Vstar Cab Services offers affordable cab booking, tempo traveller rental, airport transfers, and outstation taxi services in Gandhinagar. Safe, comfortable & on-time travel guaranteed."
        keyword="cab service in Gandhinagar, tempo traveller in Gandhinagar, car rental Gandhinagar, airport taxi Gandhinagar, outstation cab service Gandhinagar, Vstar Cab Services"
        canonicalUrl="https://www.vstarcabservices.com/"
        ogImage="https://www.vstarcabservices.com/og-home.jpg"
      />
      <div className='home-page'>
        {/* ── HERO ── */}
        <div className="relative w-full lg:h-[760px] lg:grid lg:grid-cols-2 flex flex-col bg-[#FAFAF8] overflow-hidden">

          <div
            className="absolute inset-0 pointer-events-none opacity-40"
            style={{
              backgroundImage:
                "linear-gradient(90deg,rgba(14,14,13,0.06) 1px,transparent 1px),linear-gradient(0deg,rgba(14,14,13,0.06) 1px,transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />

          <div className="lg:max-w-[640px] w-full lg:ml-auto relative flex flex-col justify-center lg:px-20 lg:pl-5 lg:py-24 max-lg:pt-[100px] max-lg:px-5 max-lg:pb-[60px] max-md:pb-[40px]">

            <div className="flex items-center gap-3 mb-[15px]" style={fadeUp("0s")}>
              <div className="w-8 h-px bg-gold" />
              <span className="text-[10px] font-medium tracking-[0.18em] uppercase text-gold">
                Premium Travel Since 2015
              </span>
            </div>

            {/* Headline */}
            <h1
              className="text-[#0E0E0D] tracking-tight"
              style={{
                ...fadeUp("0.1s"),
              }}
            >
              Journey in Comfort
              <span className="block text-gold">&amp; Pure Style</span>
            </h1>

            {/* Description */}
            <p
              className="text-[#8A8A84] font-light max-w-[420px] mt-5 mb-[30px]"
              style={fadeUp("0.2s")}
            >
              From family holidays to pilgrimage tours — Vstar Cab Services brings
              you reliable, spacious, and affordable group travel with Innova, Swift
              Dzire &amp; Tempo Travellers.
            </p>

            {/* CTAs */}
            <div className="flex items-center gap-4 flex-wrap" style={fadeUp("0.3s")}>
              <Link
                href="/contact"
                className="bg-[#0E0E0D] text-white !text-[16px] font-medium px-5 py-[10px] hover:bg-gold transition-all duration-300 hover:-translate-y-0.5 rounded-full"
              >
                Book Your Ride
              </Link>
              <Link
                href="/service"
                className="border border-black/10 text-[#3A3A38] !text-[16px] font-medium px-5 py-[10px] hover:border-gold hover:text-gold transition-all duration-300 hover:-translate-y-0.5 bg-transparent rounded-full"
              >
                Explore Fleet
              </Link>
            </div>

            {/* Stats */}
            <div
              className="flex mt-10 pt-5 border-t border-black/[0.07]"
              style={fadeUp("0.45s")}
            >
              {stats.map((s, i) => (
                <div
                  key={i}
                  className={`flex-1 ${i !== 0 ? "pl-6" : ""} ${i !== stats.length - 1 ? "pr-6 border-r border-black/[0.07]" : ""}`}
                >
                  <div
                    className="text-[#0E0E0D] leading-none mb-1"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "2.3rem",
                      fontWeight: 600,
                    }}
                  >
                    {s.n}
                  </div>
                  <div className="text-[10px] tracking-[0.14em] uppercase text-[#8A8A84]">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="relative lg:h-[760px] overflow-hidden"
            style={{
              opacity: loaded ? 1 : 0,
              transition: "opacity 1s ease 0.15s",
            }}
          >
            <img
              src="/home-banner.webp"
              alt="Premium cab travel"
              className="w-full h-full object-cover object-[100%_85%]"
              style={{
                filter: "saturate(0.85)",
                transform: loaded ? "scale(1)" : "scale(1.06)",
                transition: "transform 1.4s cubic-bezier(0.25,0.46,0.45,0.94) 0.1s",
              }}
            />

            <div
              className="absolute inset-0 z-1"
              style={{
                background:
                  "linear-gradient(90deg, rgba(250,250,248,0.45) 0%, transparent 35%), linear-gradient(180deg, transparent 60%, rgba(14,14,13,0.22) 100%)",
              }}
            />

            <div
              className="absolute h-fit lg:bottom-10 lg:right-10 bottom-5 right-5 z-1 bg-white lg:px-6 lg:py-5 p-4 flex items-center gap-4 shadow-[0_20px_60px_rgba(0,0,0,0.12)]"
              style={fadeUp("0.5s")}
            >
              <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-4 h-4 text-amber-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <div className="text-[13px] font-medium text-[#0E0E0D] whitespace-nowrap">
                  Serving All India Routes
                </div>
                <div className="text-[10px] text-[#8A8A84] tracking-wide mt-0.5">
                  Door-to-door pickup available
                </div>
              </div>
            </div>

            {/* <div
              className="absolute bottom-10 left-10 z-20 text-[10px] tracking-[0.2em] uppercase text-gray-600"
              style={{
                writingMode: "vertical-rl",
                opacity: loaded ? 1 : 0,
                transition: "opacity 0.8s ease 0.6s",
              }}
            >
              Est. 2015 · Vstar Cab Service
            </div> */}
          </div>
        </div>

        {/* ── HOW IT WORKS ── */}
        <HowItWorks />

        {/* ── FLEET PREVIEW ── */}
        <FleetSection />

        {/* ── WHY CHOOSE US ── */}
        <WhyVstar />
      </div>
    </>
  )
}

export default Home