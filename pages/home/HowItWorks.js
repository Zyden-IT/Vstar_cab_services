import { useState, useEffect, useRef, useCallback } from "react";

const STEPS = [
    {
        n: "01",
        title: "Choose Your Vehicle",
        desc: "Pick from Innova, Swift Dzire, or Tempo Traveller based on your group size.",
        icon: <i className="fi fi-rr-car text-[20px] h-[20px] leading-tight"></i>,
    },
    {
        n: "02",
        title: "Set Your Route",
        desc: "Enter pickup, destination, and travel date. All India routes covered.",
        icon: <i className="fi fi-rr-marker text-[20px] h-[20px] leading-tight"></i>,
    },
    {
        n: "03",
        title: "Confirm & Relax",
        desc: "Instant confirmation. Driver arrives on time — sit back and enjoy.",
        icon: <i className="fi fi-rr-check-circle text-[20px] h-[20px] leading-tight"></i>,
    },
];

const AUTO_INTERVAL = 2800;
const MANUAL_INTERVAL = 4000;

const IMAGES = [
    "/choose.webp",
    "/route.webp",
    "/relax.webp",
];

const StarIcon = () => (
    <svg className="w-3.5 h-3.5 text-amber-500" viewBox="0 0 20 20" fill="currentColor">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
);

const ArrowIcon = () => (
    <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
);

function useInView(threshold = 0.12) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const obs = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) setVisible(true); },
            { threshold }
        );
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, []);
    return [ref, visible];
}

export default function HowItWorks({ setPage }) {
    const [secRef, secVisible] = useInView();
    const [activeStep, setActiveStep] = useState(0);
    const [progressKey, setProgressKey] = useState(0);
    const [intervalDuration, setIntervalDuration] = useState(AUTO_INTERVAL);
    const intervalRef = useRef(null);

    const startTimer = useCallback((duration = AUTO_INTERVAL) => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setIntervalDuration(duration);
        intervalRef.current = setInterval(() => {
            setActiveStep(p => (p + 1) % STEPS.length);
            setProgressKey(k => k + 1);
            if (duration !== AUTO_INTERVAL) startTimer(AUTO_INTERVAL);
        }, duration);
    }, []);

    useEffect(() => {
        if (!secVisible) return;
        startTimer(AUTO_INTERVAL);
        return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
    }, [secVisible, startTimer]);

    const handleStepClick = (i) => {
        setActiveStep(i);
        setProgressKey(k => k + 1);
        startTimer(MANUAL_INTERVAL);
    };

    const fadeStyle = (delayMs = 0) => ({
        opacity: secVisible ? 1 : 0,
        transform: secVisible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.7s ease ${delayMs}ms, transform 0.7s ease ${delayMs}ms`,
    });

    return (
        <>
            <style>{`

        .step-card-fill {
          position: relative;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.35s ease;
        }
        .step-card-fill::before {
          content: '';
          position: absolute;
          inset: 0;
          background: #0E0E0D;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.45s cubic-bezier(0.76,0,0.24,1);
          z-index: 0;
          border-radius: inherit;
        }
        .step-card-fill.is-active::before { transform: scaleX(1); }
        .step-card-fill > * { position: relative; z-index: 1; }

        .progress-run {
            height: 100%;
            background: #C8922A;
            animation: progrun var(--prog-duration, 2.8s) linear;
            transform-origin: left;
        }
        @keyframes progrun {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }

        .img-panel {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: saturate(0.85);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .img-panel.on  { opacity: 1; transform: scale(1); }
        .img-panel.off { opacity: 0; transform: scale(1.04); }

        .dot-btn {
          border-radius: 9999px;
          transition: all 0.3s ease;
          background: white;
        }
        .dot-btn.on  { width: 24px; height: 8px; opacity: 1; }
        .dot-btn.off { width: 8px;  height: 8px; opacity: 0.4; }
      `}</style>

            <section ref={secRef} className="how-it-works relative overflow-hidden lg:py-[80px] md:py-[60px] py-[40px]">
                <div className="container">
                    <div className="hiw-inner">

                        <div className="flex items-center gap-3 mb-[15px]" style={fadeStyle(0)}>
                            <div className="w-8 h-px bg-gold" />
                            <span className="text-[10px] font-medium tracking-[0.18em] uppercase text-gold">
                                How It Works
                            </span>
                        </div>

                        <div className="relative mb-[30px] overflow-visible" style={fadeStyle(80)}>
                            <h2
                                className="relative z-10"
                            >
                                Get on the Road
                                <br />
                                <span className="text-gold">
                                    in Easy Minutes
                                </span>
                            </h2>
                            <p
                                className="mt-5 max-w-[640px]"
                            >
                                Reserve your vehicle in just a few steps. We handle the rest — from pickup to drop, your journey is our responsibility.
                            </p>
                        </div>

                        {/* ── BENTO GRID ── */}
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-3 items-stretch">

                            <div className="step-card flex flex-col gap-3" style={{ ...fadeStyle(160) }}>
                                {STEPS.map((s, i) => (
                                    <div
                                        key={i}
                                        className={`step-card-fill flex-1 flex flex-col gap-4 border border-black/[0.07] p-6 rounded-2xl bg-white ${activeStep === i ? "is-active" : ""}`}
                                        onClick={() => handleStepClick(i)}
                                    >
                                        {/* Icon + number row */}
                                        <div className="flex items-center justify-between">
                                            <div
                                                className="w-10 h-10 rounded-lg border flex items-center justify-center transition-all duration-300"
                                                style={{
                                                    borderColor: activeStep === i ? "rgba(200,146,42,0.3)" : "rgba(14,14,13,0.08)",
                                                    background: activeStep === i ? "rgba(200,146,42,0.1)" : "transparent",
                                                    color: activeStep === i ? "#C8922A" : "#3A3A38",
                                                }}
                                            >
                                                {s.icon}
                                            </div>
                                            <div className="flex items-center gap-1.5">
                                                <span
                                                    className="text-[12px] font-semibold tracking-[0.12em] transition-colors duration-300"
                                                    style={{
                                                        color: activeStep === i ? "#C8922A" : "#8A8A84",
                                                    }}
                                                >
                                                    {s.n}
                                                </span>
                                                <span
                                                    className="transition-all duration-300"
                                                    style={{
                                                        color: "#C8922A",
                                                        opacity: activeStep === i ? 1 : 0,
                                                        transform: activeStep === i ? "translateX(0)" : "translateX(-6px)",
                                                    }}
                                                >
                                                    <ArrowIcon />
                                                </span>
                                            </div>
                                        </div>

                                        {/* Text */}
                                        <div>
                                            <h4
                                                className="text-[18px] font-semibold mb-1.5 transition-colors duration-300"
                                                style={{
                                                    color: activeStep === i ? "white" : "#0E0E0D",
                                                }}
                                            >
                                                {s.title}
                                            </h4>
                                            <p
                                                className="!text-[16px] font-light transition-colors duration-300"
                                                style={{
                                                    color: activeStep === i ? "rgba(255,255,255,0.5)" : "#8A8A84",
                                                }}
                                            >
                                                {s.desc}
                                            </p>
                                        </div>

                                        {/* Progress bar */}
                                        {activeStep === i && (
                                            <div className="h-px bg-white/10 rounded-full overflow-hidden">
                                                <div className="progress-run rounded-full" key={progressKey} style={{ "--prog-duration": `${intervalDuration}ms` }} />
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                            <div className="step-info flex flex-col lg:col-span-2 gap-3">
                                <div
                                    className="step-img relative rounded-2xl overflow-hidden flex-1 min-h-[280px]"
                                    style={{ ...fadeStyle(220) }}
                                >
                                    {IMAGES.map((src, i) => (
                                        <img key={i} src={src} alt="" className={`img-panel ${activeStep === i ? "on" : "off"}`} />
                                    ))}

                                    <div
                                        className="absolute inset-0 z-10"
                                        style={{ background: "linear-gradient(180deg, transparent 40%, rgba(14,14,13,0.5) 100%)" }}
                                    />

                                    <div className="absolute top-5 left-5 z-20 flex items-center gap-2">
                                        {STEPS.map((_, i) => (
                                            <button key={i} onClick={() => handleStepClick(i)} className={`dot-btn border-0 p-0 ${activeStep === i ? "on" : "off"}`} />
                                        ))}
                                    </div>

                                    <div className="absolute bottom-5 left-5 right-5 z-20 flex items-end justify-between">
                                        <div>
                                            <p
                                                className="text-[10px] tracking-[0.12em] uppercase mb-1"
                                            >
                                                Step {STEPS[activeStep].n}
                                            </p>
                                            <p
                                                className="text-white text-base font-medium"
                                            >
                                                {STEPS[activeStep].title}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="step-stat flex md:grid-cols-2 gap-3">
                                    <div
                                        className="rounded-2xl border border-black/[0.07] bg-white p-6 flex flex-col justify-between md:w-1/2 w-full"
                                        style={{ ...fadeStyle(300) }}
                                    >
                                        <div className="text-[28px] font-semibold"
                                        >
                                            4.9
                                        </div>
                                        <div>
                                            <div className="flex gap-0.5 mb-2">
                                                {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
                                            </div>
                                            <p
                                                className="!text-[14px] text-[#8A8A84]"
                                            >
                                                2,000+ Reviews
                                            </p>
                                        </div>
                                    </div>

                                    <div
                                        className="rounded-2xl bg-[#0E0E0D] p-6 flex flex-col justify-between md:w-1/2 w-full"
                                        style={{ ...fadeStyle(360) }}
                                    >
                                        <div>
                                            <div
                                                className="text-[28px] font-semibold text-white mb-1"
                                            >
                                                24/7
                                            </div>
                                            <p
                                                className="!text-[14px] text-white/40"
                                            >
                                                Always Available
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>



                        </div>
                    </div>
                </div>

                {/* ── MAIN ── */}
            </section>
        </>
    );
}