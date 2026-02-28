import { Routes } from '@/navigation/NavigationLib'
import { Navigate } from '@/navigation/NavigationMethods'
import React from 'react'

const FLEET = [
    {
        img: "/eeco.webp",
        name: "Eeco",
        seats: 5,
        fuel: "CNG / Petrol",
    },
    {
        img: "/swift.webp",
        name: "Swift Dzire",
        seats: 5,
        fuel: "CNG / Petrol",
    },
    {
        img: "/ertiga.webp",
        name: "Ertiga",
        seats: 7,
        fuel: "CNG / Petrol",
    },
    {
        img: "/innova.webp",
        name: "Innova Crysta",
        seats: 7,
        fuel: "Diesel",
    },
    {
        img: "/urbania.webp",
        name: "Urbania",
        seats: 17,
        fuel: "Diesel",
    },
]

const UsersIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 text-[#8A8A84]">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
)

const FuelIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 text-[#8A8A84]">
        <path d="M3 22V8a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v14" />
        <path d="M3 22h11" />
        <path d="M12 8h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-3" />
        <path d="M17 15v3a2 2 0 0 0 4 0v-6l-2-2" />
    </svg>
)

const ArrowIcon = () => (
    <svg className="w-3 h-3" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
)

const FleetCard = ({ img, tag, name, seats, fuel, onBook }) => (
    <div className="group rounded-2xl overflow-hidden border border-black/[0.07] bg-white transition-all duration-300 hover:shadow-[0_16px_48px_rgba(0,0,0,0.10)] hover:-translate-y-1">

        <div className="h-[200px] overflow-hidden relative">
            <img
                src={img}
                alt={name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                style={{ filter: 'saturate(0.9)' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>

        <div className="p-5">

            <h3 className="!text-[24px] font-semibold text-[#0E0E0D] mb-4 leading-snug">
                {name}
            </h3>

            <div className="flex items-center gap-2 mb-5 flex-wrap">
                <div className="flex items-center gap-1.5 bg-[#F5F5F3] rounded-lg px-3 py-1.5">
                    <UsersIcon />
                    <span className="text-[11px] font-medium text-[#3A3A38]">{seats} Seater</span>
                </div>
                <div className="flex items-center gap-1.5 bg-[#F5F5F3] rounded-lg px-3 py-1.5">
                    <FuelIcon />
                    <span className="text-[11px] font-medium text-[#3A3A38]">{fuel}</span>
                </div>
            </div>

            <div className="flex items-center justify-between border-t border-black/[0.06] pt-4">
                <span className="text-[11px] text-[#8A8A84] tracking-[0.06em] uppercase font-medium">
                    Available Now
                </span>
                <button
                    onClick={onBook}
                    className="flex items-center gap-1.5 bg-[#0E0E0D] hover:bg-gold text-white text-[11px] font-medium tracking-[0.1em] uppercase px-4 py-2 rounded-full transition-all duration-300"
                >
                    Book Now <ArrowIcon />
                </button>
            </div>
        </div>
    </div>
)

const FleetSection = ({ setPage }) => (
    <section className="fleet-section relative bg-[#FAFAF8] lg:py-[80px] md:py-[60px] py-[40px]">
        <div className="container">
            <div className='fleet-inner'>
                <div className="flex items-center gap-3 mb-[15px]">
                    <div className="w-8 h-px bg-gold" />
                    <span className="text-[10px] font-medium tracking-[0.18em] uppercase text-gold">
                        Our Fleet
                    </span>
                </div>
                <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
                    <h2
                        className="text-[#0E0E0D] leading-[1.05]"
                    >
                        Choose Your <span className='text-gold'>Perfect Ride</span>
                    </h2>
                    <p className="text-gray-500 max-w-[440px] leading-relaxed">
                        From compact sedans to large group carriers — we have the right vehicle for every journey.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
                    {FLEET.map((car, i) => (
                        <FleetCard
                            key={i}
                            {...car}
                            onBook={() => Navigate(Routes.contact)}
                        />
                    ))}
                </div>

            </div>
        </div>
    </section>
)

export default FleetSection