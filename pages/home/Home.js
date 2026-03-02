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
        canonicalUrl="https://www.vstarcab.in/"
        ogImage="https://www.vstarcab.in/og-home.png"
      />
      <div className='home-page'>
        {/* ── HERO ── */}
        <div className="banner relative w-full lg:h-[730px] overflow-hidden">
          <div className="banner-outer h-full w-full"
            style={{
              background: `linear-gradient(105deg, rgba(247,245,241,.95) 35%, rgba(247,245,241,.6) 100%),
        url('/home-banner.webp') center 70%/cover no-repeat`,
            }}
          >
            <div className='container h-full'>

              <div className="max-w-[520px] w-full h-full relative flex flex-col justify-center lg:py-24 max-lg:pt-[100px] max-lg:px-5 max-lg:pb-[60px] max-md:pb-[40px]">

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
                  className="text-gray-600 font-light max-w-[420px] mt-5 mb-[30px]"
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
                    className="bg-white hover:bg-gold border border-black/10 text-[#3A3A38] !text-[16px] font-medium px-5 py-[10px] hover:border-gold hover:text-gray-800 transition-all duration-300 hover:-translate-y-0.5 bg-transparent rounded-full"
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
            </div>
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