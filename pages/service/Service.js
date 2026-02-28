import CtaBand from '@/components/ctaBand/CtaBand'
import FleetSection from '@/components/fleetCard/FleetCard'
import FleetCard from '@/components/fleetCard/FleetCard'
import React from 'react'
import ServicesSection from './ServiceSection'
import SetMetaData from '@/components/common/metaData/SetMetaData'
import Link from 'next/link'

function Service() {

    return (
        <>
            <SetMetaData
                title="Our Services | Cab Booking & Tempo Traveller Rental in Gujarat"
                description="Explore our services including local cab booking, airport pickup & drop, outstation taxi service, and tempo traveller rental in Ahmedabad for family trips and group tours."
                keyword="cab booking Gandhinagar, airport transfer Gandhinagar, outstation taxi Gandhinagar, tempo traveller for tour Gandhinagar, car rental services Ahmedabad"
                canonicalUrl="https://www.vstarcabservices.com/services"
                ogImage="https://www.vstarcabservices.com/og-services.jpg"
            />
            <div className='service-page'>
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
                                Reliable Travel <span className='text-gold'>Solutions for Every Journey.</span>
                            </h1>
                            <p className='text-gray-600 mt-5 mb-[30px]'>
                                From local city rides to airport transfers and outstation tours,
                                Vstar Cab Services provides safe, well-maintained vehicles with professional drivers
                                to make every journey smooth and stress-free.
                            </p>
                            <Link
                                href="/contact"
                                className="bg-[#0E0E0D] text-white !text-[16px] font-medium px-5 py-[10px] hover:bg-gold transition-all duration-300 hover:-translate-y-0.5 rounded-full"
                            >
                                Book Your Ride
                            </Link>
                        </div>
                    </div>
                </div>

                <FleetSection />

                <ServicesSection />

            </div>
        </>
    )
}

export default Service