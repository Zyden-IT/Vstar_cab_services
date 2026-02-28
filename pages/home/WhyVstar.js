import React, { useEffect, useRef } from 'react'

const FEATURES = [
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.5">
                <path d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.955 11.955 0 003 10c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.249-8.25-3.286z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        title: 'Safe & Verified Drivers',
        desc: 'Background-checked, trained, and experienced drivers for every trip.',
        stat: '100%',
        statLabel: 'Verified',
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        title: 'Always On Time',
        desc: 'Punctuality is our promise. We plan ahead and track traffic for you.',
        stat: '98%',
        statLabel: 'On-Time Rate',
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.5">
                <path d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        title: 'Transparent Pricing',
        desc: 'No hidden charges. What you see is exactly what you pay.',
        stat: '$0',
        statLabel: 'Hidden Fees',
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.5">
                <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        title: '24/7 Support',
        desc: 'Available round the clock to assist you wherever you are.',
        stat: '24/7',
        statLabel: 'Available',
    },
]

function WhyVstar() {
    const sectionRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.querySelectorAll('[data-animate]').forEach((el, i) => {
                            setTimeout(() => {
                                el.style.opacity = '1'
                                el.style.transform = 'translateY(0)'
                            }, i * 100)
                        })
                    }
                })
            },
            { threshold: 0.1 }
        )
        if (sectionRef.current) observer.observe(sectionRef.current)
        return () => observer.disconnect()
    }, [])

    return (
        <>
            <style>{`

        [data-animate] {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1), transform 0.65s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .feat-card-new {
          position: relative;
          background: #ffffff;
          border: 1px solid #f0ece4;
          border-radius: 20px;
          padding: 28px 24px;
          transition: box-shadow 0.3s ease, transform 0.3s ease, border-color 0.3s ease;
          overflow: hidden;
        }
        .feat-card-new::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(201,163,84,0.06) 0%, transparent 60%);
          opacity: 0;
          transition: opacity 0.3s ease;
          border-radius: 20px;
        }
        .feat-card-new:hover {
          box-shadow: 0 12px 48px rgba(0,0,0,0.09);
          transform: translateY(-4px);
          border-color: rgba(201,163,84,0.35);
        }
        .feat-card-new:hover::before {
          opacity: 1;
        }

        .gold-line {
          display: block;
          width: 36px;
          height: 2px;
          background: linear-gradient(90deg, #C9A354, #E8C87A);
          border-radius: 2px;
        }

        .icon-wrap {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #fdf6e8 0%, #fef9f0 100%);
          color: var(--color-gold);
          border: 1px solid rgba(201,163,84,0.2);
          flex-shrink: 0;
        }

        .stat-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: linear-gradient(135deg, #fdf6e8, #fef9f0);
          border: 1px solid rgba(201,163,84,0.2);
          border-radius: 999px;
          padding: 4px 12px;
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--color-gold);
          letter-spacing: 0.02em;
        }

        .img-wrapper {
          position: relative;
          border-radius: 15px;
          overflow: hidden;
        }
        .img-wrapper::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom right,
            rgba(201,163,84,0.15) 0%,
            transparent 50%,
            rgba(0,0,0,0.2) 100%
          );
          pointer-events: none;
        }

        .floating-badge {
          position: absolute;
          bottom: 28px;
          left: 28px;
          background: rgba(255,255,255,0.95);
          backdrop-filter: blur(12px);
          border-radius: 16px;
          padding: 16px 20px;
          display: flex;
          align-items: center;
          gap: 14px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.12);
          z-index: 10;
          border: 1px solid rgba(201,163,84,0.15);
        }

        .badge-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #22c55e;
          box-shadow: 0 0 0 3px rgba(34,197,94,0.2);
          animation: pulse-dot 2s infinite;
          flex-shrink: 0;
        }
        @keyframes pulse-dot {
          0%, 100% { box-shadow: 0 0 0 3px rgba(34,197,94,0.2); }
          50% { box-shadow: 0 0 0 6px rgba(34,197,94,0.1); }
        }

        .deco-circle {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
        }

        .corner-accent {
          position: absolute;
          top: -1px;
          right: -1px;
          width: 80px;
          height: 80px;
          overflow: hidden;
          border-radius: 0 20px 0 0;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .feat-card-new:hover .corner-accent {
          opacity: 1;
        }
        .corner-accent::before {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 0;
          height: 0;
          border-style: solid;
          border-width: 0 80px 80px 0;
          border-color: transparent rgba(201,163,84,0.08) transparent transparent;
        }
      `}</style>

            <section ref={sectionRef} className="vstar-section relative bg-white overflow-hidden lg:py-24 md:py-16 py-12">
                <div className="deco-circle" style={{ width: 520, height: 520, top: -160, right: -160, background: 'radial-gradient(circle, rgba(201,163,84,0.06) 0%, transparent 70%)' }} />
                <div className="deco-circle" style={{ width: 300, height: 300, bottom: -100, left: -80, background: 'radial-gradient(circle, rgba(201,163,84,0.05) 0%, transparent 70%)' }} />
                <div className='container'>
                    <div className="vstar-inner">

                        <div className="flex items-center gap-3 mb-[15px]">
                            <div className="w-8 h-px bg-gold" />
                            <span className="text-[10px] font-medium tracking-[0.18em] uppercase text-gold">
                                Why Vstar
                            </span>
                        </div>

                        {/* Section heading row */}
                        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-[30px]">
                            <h2 className="vstar-display text-4xl lg:text-5xl xl:text-[54px] font-bold leading-[1.1] text-gray-950 max-w-lg" data-animate>
                                Your Trust is Our{' '}
                                <span className="text-gold">Best Route</span>
                            </h2>
                            <p className="text-gray-500 text-[0.95rem] leading-[1.85] max-w-sm lg:text-right" data-animate style={{ transitionDelay: '0.1s' }}>
                                We don&apos;t just drive — we care about your entire journey.
                                Here&apos;s what sets us apart from the rest.
                            </p>
                        </div>

                        {/* Main grid */}
                        <div className="grid lg:grid-cols-2 lg:gap-10 md:gap-[30px] gap-5 items-start">

                            {/* LEFT — Image */}
                            <div data-animate>
                                <div className="img-wrapper shadow-2xl">
                                    <img
                                        src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=900&q=85"
                                        alt="Luxury travel"
                                        className="w-full h-full object-cover"
                                    />

                                    <div className=" absolute md:top-6 top-2.5 md:right-6 right-2.5 z-10 bg-white/90 backdrop-blur-xl rounded-xl px-5 py-3 border border-[#C9A354]/20 shadow-[0_4px_20px_rgba(0,0,0,0.1)] text-center">
                                        <p className="vstar-display !text-[20px] font-bold text-gold leading-none">
                                            4.9 ★
                                        </p>
                                        <p className="!text-[14px] text-gray-400 mt-1 leading-none">
                                            Avg Rating
                                        </p>
                                    </div>
                                </div>

                            </div>

                            {/* RIGHT — Feature cards */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {FEATURES.map((f, i) => (
                                    <div
                                        key={f.title}
                                        className="feat-card-new"
                                        data-animate
                                        style={{ transitionDelay: `${0.1 + i * 0.08}s` }}
                                    >

                                        {/* stat pill */}
                                        <div className="flex items-center justify-between mb-5">
                                            <div className="icon-wrap">{f.icon}</div>
                                            <span className="stat-pill">
                                                {f.stat}
                                                <span className="font-normal text-gold">{f.statLabel}</span>
                                            </span>
                                        </div>

                                        <h4 className="text-[0.95rem] font-semibold text-gray-900 mb-2 leading-snug">{f.title}</h4>
                                        <p className="text-gray-400 !text-[14px] !leading-[1.3]">{f.desc}</p>
                                    </div>
                                ))}

                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default WhyVstar