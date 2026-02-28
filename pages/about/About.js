import SetMetaData from '@/components/common/metaData/SetMetaData';
import CtaBand from '@/components/ctaBand/CtaBand'
import { useInView } from 'framer-motion';
import Link from 'next/link';
import React, { useState } from 'react'

function About() {

    const MILESTONES = [
        { num: '2000+', label: 'Successful Trips' },
        { num: '500+', label: 'Happy Families' },
        { num: '15+', label: 'Vehicles in Fleet' },
        { num: '4.9★', label: 'Average Rating' },
    ]

    const VALUES = [
        { icon: '🤝', title: 'Integrity First', desc: 'Honest pricing, honest communication, and keeping every promise we make to our customers.' },
        { icon: '🌟', title: 'Excellence in Service', desc: 'From fleet maintenance to driver training — we strive for the highest standards at every touchpoint.' },
        { icon: '💚', title: 'Safety Always', desc: 'The well-being of every passenger is our top priority. Regular vehicle checks and driver safety training ensure this.' },
    ]

    const values = [
        {
            icon: <i className="fi fi-rr-land-layer-location"></i>,
            title: "Reliability",
            desc: "On-time pickups and dependable service you can trust for every local, airport, and outstation journey."
        },
        {
            icon: <i className="fi fi-rr-shield-check"></i>,
            title: "Safety",
            desc: "Well-maintained vehicles and experienced drivers ensuring a secure and comfortable travel experience."
        },
        {
            icon: <i className="fi fi-rr-heart-partner-handshake"></i>,
            title: "Customer Commitment",
            desc: "Transparent pricing, quick support, and a customer-first approach in every ride we provide."
        },
    ];

    const stats = [
        ["2000 +", "Successful Trips"],
        ["500 +", "Happy Families"],
        ["15 +", "Vehicles in Fleet"],
        ["4.9 ★", "Average Rating"],
    ];

    return (
        <>
            <SetMetaData
                title="About Vstar Cab Services | Trusted Cab & Tempo Traveller Rental in Gujarat"
                description="Vstar Cab Services is a trusted cab and tempo traveller rental provider in Gandhinagar offering safe, punctual, and affordable taxi services for local travel, airport transfers, and outstation trips."
                keyword="about Vstar Cab Services, cab service in Ahmedabad, tempo traveller rental Ahmedabad, taxi service Gandhinagar, airport taxi Ahmedabad, outstation cab Ahmedabad"
                canonicalUrl="https://www.vstarcabservices.com/about"
                ogImage="https://www.vstarcabservices.com/og-about.jpg"
            />
            <div className='about-page'>
                <div
                    className="banner relative flex items-center overflow-hidden lg:py-24 max-lg:pt-[100px] max-lg:pb-[60px] max-md:pb-[40px]"
                    style={{
                        height: '480px',
                        background: `linear-gradient(105deg, rgba(247,245,241,.95) 35%, rgba(247,245,241,.6) 100%),
        url('/inner-banner.webp') center 70%/cover no-repeat`,
                    }}
                >
                    <div className='container'>
                        <div className='banner-inner max-w-[600px]'>
                            <h1
                                className="text-[#0E0E0D]"
                            >
                                Your Trusted <span className='text-gold'>Travel Partner</span>
                            </h1>
                            <p className='text-gray-600 mt-5'>
                                We believe travel should be convenient and worry-free — and that’s exactly what we promise every customer.
                            </p>

                        </div>
                    </div>
                </div>
                <div className='section1-outer'>
                    <div className='container'>
                        <div
                            className="section2-inner lg:py-[80px] md:py-[60px] py-[40px] flex flex-col md:flex-row gap-[20px] md:gap-[30px] lg:gap-[40px] items-center"
                        >
                            <div className="flex flex-col gap-[15px] md:gap-[20px] lg:gap-[30px] w-full md:w-[50%]">
                                <div className='flex flex-col md:gap-[5px]'>
                                    <div className="flex items-center gap-3 mb-[15px]">
                                        <div className="w-8 h-px bg-gold" />
                                        <span className="text-[10px] font-medium tracking-[0.18em] uppercase text-gold">
                                            About Us
                                        </span>
                                    </div>
                                    <h2
                                        className="flex items-center gap-[10px] !text-[32px] md:!text-[40px] lg:!text-[50px]"
                                    >
                                        <span>Who We</span>
                                        <span className='text-gold'>Are</span>
                                    </h2>
                                </div>

                                <p
                                    className=""
                                >
                                    We are automotive enthusiasts turned professionals — a dedicated team delivering
                                    unmatched quality, transparency, and passion to every client who trusts us with
                                    their vehicle.
                                </p>

                                <Link
                                    href="/service"
                                    className="w-fit bg-[#0E0E0D] text-white !text-[16px] font-medium px-5 py-[10px] hover:bg-gold transition-all duration-300 hover:-translate-y-0.5 rounded-full"
                                >
                                    Our Service
                                </Link>
                            </div>
                            <div
                                className="flex-1 w-full md:w-[50%] relative"
                            >
                                <div
                                    className="absolute -top-4 -right-4 w-[90px] h-[90px] z-0 opacity-30"
                                    style={{
                                        backgroundImage: "radial-gradient(circle, #E8960F 1.5px, transparent 1.5px)",
                                        backgroundSize: "13px 13px",
                                    }}
                                />
                                <div
                                    className="absolute -bottom-3 -left-3 w-[70%] h-[60%] rounded z-0"
                                    style={{ border: "2px solid rgba(232,150,15,0.25)" }}
                                />
                                <div
                                    className="relative rounded-md overflow-hidden"
                                    style={{ boxShadow: "0 24px 60px rgba(74,72,69,0.14)" }}
                                >
                                    <div
                                        className="absolute inset-0 z-1 pointer-events-none"
                                        style={{
                                            background: "linear-gradient(170deg, rgba(232,150,15,0.08) 0%, rgba(0,0,0,0.18) 100%)",
                                        }}
                                    />

                                    <img
                                        src="about.webp"
                                        alt="Luxury car"
                                        className="w-full object-cover block"
                                    />
                                    <div
                                        className="absolute bottom-5 left-5 z-1 px-4 py-2 lg:px-5 lg:py-3 rounded-sm flex flex-col lg:gap-[5px]"
                                        style={{
                                            background: "rgba(249,246,241,0.93)",
                                            backdropFilter: "blur(12px)",
                                            borderLeft: "3px solid #E8960F",
                                        }}
                                    >
                                        <p
                                            className="font-bold leading-none"
                                            style={{ color: "#2a2825" }}
                                        >
                                            12+
                                        </p>
                                        <p
                                            className="!text-[14px] !leading-tight font-medium"
                                            style={{ color: "#8C8880" }}
                                        >
                                            Years of Trust
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='section-2-outer'>
                    <div className='cotainer'>
                        <div className='section2-inner'>
                            <div
                                className="grid grid-cols-2 md:grid-cols-4 gap-[3px] rounded"
                            >
                                {stats.map(([v, l]) => (
                                    <div
                                        key={l}
                                        className="text-center py-5 px-3 md:py-6 md:px-4 lg:py-7 lg:px-5"
                                        style={{ background: "#F9F6F1" }}
                                    >
                                        <p
                                            className="font-bold !text-[26px] !font-semibold mb-1.5"
                                            style={{ color: "#E8960F" }}
                                        >
                                            {v}
                                        </p>
                                        <p
                                            className="!text-[14px] md:!text-[16px] lg:!text-[18px] font-medium"
                                            style={{ color: "#8C8880" }}
                                        >
                                            {l}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='section-3-outer'>
                    <div className='container'>
                        <div className='section-3-inner lg:py-[80px] md:py-[60px] py-[40px] flex flex-col gap-[20px] md:gap-[30px] lg:gap-[40px]'>
                            <div className='flex flex-col md:gap-[5px]'>
                                <div className="flex items-center gap-3 mb-[15px]">
                                    <div className="w-8 h-px bg-gold" />
                                    <span className="text-[10px] font-medium tracking-[0.18em] uppercase text-gold">
                                        What We Think
                                    </span>
                                </div>

                                <h2
                                    className="flex items-center gap-[10px] !text-[32px] md:!text-[40px] lg:!text-[50px]"
                                >
                                    <span>Our</span>
                                    <span className='text-gold'>Values</span>
                                </h2>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {values.map((val, i) => (
                                    <div
                                        key={i}
                                        className="flex flex-col gap-[5px] lg:gap-[10px] group bg-white border border-[#e8e3dc] rounded p-4 md:p-6 lg:p-8 cursor-default hover:border-[#E8960F] hover:-translate-y-1 hover:shadow-[0_10px_32px_rgba(232,150,15,0.12)] transition-all duration-300 ease-out "
                                    >
                                        <span className="block text-2xl" style={{ color: "#E8960F" }}>
                                            {val.icon}
                                        </span>
                                        <h4
                                            className="text-xl font-bold"
                                            style={{ color: "#2a2825" }}
                                        >
                                            {val.title}
                                        </h4>
                                        <p className="text-sm leading-relaxed" style={{ color: "#8C8880" }}>
                                            {val.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='section-4-outer'>
                    <div className='container'>
                        <div className='section-4-inner flex flex-col gap-[20px] md:gap-[30px] lg:gap-[40px] lg:pb-[80px] md:pb-[60px] pb-[40px]'>
                            <div className="flex flex-col md:flex-row gap-[20px] md:gap-[30px] lg:gap-[40px]">
                                <div className='flex flex-col md:gap-[5px] w-full md:w-[50%]'>
                                    <div className="flex items-center gap-3 mb-[15px]">
                                        <div className="w-8 h-px bg-gold" />
                                        <span className="text-[10px] font-medium tracking-[0.18em] uppercase text-gold">
                                            Our Journey
                                        </span>
                                    </div>

                                    <h2
                                        className="flex items-center gap-[10px] !text-[32px] md:!text-[40px] lg:!text-[50px]"
                                    >
                                        <span>About Our</span>
                                        <span className='text-gold'>Story</span>
                                    </h2>
                                </div>

                                <div className="w-full md:w-[50%]">
                                    <p className="text-base leading-[1.85] mb-0" style={{ color: "#8C8880" }}>
                                        Every great brand has a founding moment — a spark of conviction that refuses to settle
                                        for ordinary. Ours started in a garage, driven by a love for machines and a belief
                                        that people deserve better.
                                    </p>
                                </div>
                            </div>
                            <div className='flex flex-col md:flex-row gap-[20px] md:gap-[30px] lg:gap-[40px]'>
                                <div
                                    className="flex-1 relative h-fit"
                                >
                                    <div
                                        className="absolute -top-4 -left-4 w-[80px] h-[80px] z-0 opacity-25"
                                        style={{
                                            backgroundImage: "radial-gradient(circle, #E8960F 1.5px, transparent 1.5px)",
                                            backgroundSize: "13px 13px",
                                        }}
                                    />
                                    <div
                                        className="absolute -bottom-3 -right-3 w-[65%] h-[55%] rounded z-0"
                                        style={{ border: "2px solid rgba(232,150,15,0.22)" }}
                                    />

                                    <div
                                        className="relative rounded-md overflow-hidden"
                                        style={{ boxShadow: "0 24px 60px rgba(74,72,69,0.13)" }}
                                    >
                                        <div
                                            className="absolute inset-0 z-1 pointer-events-none"
                                            style={{
                                                background: "linear-gradient(160deg, rgba(232,150,15,0.07) 0%, rgba(0,0,0,0.2) 100%)",
                                            }}
                                        />
                                        <img
                                            src="rental.webp"
                                            alt="Our story"
                                            className="w-full object-cover block"
                                        />


                                    </div>
                                </div>
                                <div
                                    className="flex-1 min-w-[280px] flex flex-col justify-center"
                                >
                                    <span className='text-[24px] font-semibold text-gold'>How Vstar Began</span>
                                    <p className='text-gray-600 mt-[20px]'>
                                        Vstar Cab Services was founded with a passion to solve a common problem — finding a reliable and comfortable cab service. We noticed that travelers often struggled with late pickups, unclean vehicles, or unpredictable service. We believed travel should never feel stressful.
                                    </p>
                                    <p className='text-gray-600 mt-[15px]'>
                                        With this belief, we started Vstar with a commitment to punctuality, transparency, and customer satisfaction. Every ride we provide reflects our dedication to quality and care.
                                    </p>
                                    <p className='text-gray-600 mt-[15px]'>
                                        Today, we continue to grow with the same values we started with — trust, safety, and excellence in service.
                                    </p>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div >
        </>
    )
}

export default About