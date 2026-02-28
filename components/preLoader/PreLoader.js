import { useEffect, useRef, useState } from "react";

// ─── Ring configs ────────────────────────────────────────────────
const RINGS = [
    { r: 72, speed: 0.9, arcLen: 1.6, width: 1.5, reverse: false, alpha: 0.9 },
    { r: 88, speed: 0.5, arcLen: 2.2, width: 1.0, reverse: true, alpha: 0.55 },
    { r: 96, speed: 0.28, arcLen: 0.9, width: 0.6, reverse: false, alpha: 0.35 },
];

const CORNER_CLASSES = {
    tl: "top-7 left-7",
    tr: "top-7 right-7 scale-x-[-1]",
    bl: "bottom-7 left-7 scale-y-[-1]",
    br: "bottom-7 right-7 scale-[-1]",
};

function CornerMark({ pos, visible }) {
    return (
        <div className={`absolute w-7 h-7 transition-opacity duration-500 ${CORNER_CLASSES[pos]} ${visible ? "opacity-100" : "opacity-0"}`}>
            <div className="absolute top-0 left-0 w-full h-px bg-[rgba(212,146,14,0.5)]" />
            <div className="absolute top-0 left-0 w-px h-full bg-[rgba(212,146,14,0.5)]" />
        </div>
    );
}

export default function PreLoader({ onComplete }) {
    const canvasRef = useRef(null);
    const path1Ref = useRef(null);
    const path2Ref = useRef(null);
    const rafRef = useRef(null);
    const startTRef = useRef(null);
    const runRef = useRef(false);

    const [corners, setCorners] = useState(false);
    const [ringsOn, setRingsOn] = useState(false);
    const [glowOn, setGlowOn] = useState(false);
    const [rulesOn, setRulesOn] = useState(false);
    const [brandOn, setBrandOn] = useState(false);
    const [subOn, setSubOn] = useState(false);
    const [exiting, setExiting] = useState(false);
    const [done, setDone] = useState(false);

    const delay = (ms) => new Promise((r) => setTimeout(r, ms));

    // ── Canvas ring draw loop ──────────────────────────────────────
    const drawRings = (ts) => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        const W = canvas.width, H = canvas.height;
        const CX = W / 2, CY = H / 2;

        if (!startTRef.current) startTRef.current = ts;
        const t = (ts - startTRef.current) / 1000;

        ctx.clearRect(0, 0, W, H);

        RINGS.forEach((ring) => {
            const dir = ring.reverse ? -1 : 1;
            const angle = t * ring.speed * dir * Math.PI * 2;
            const headAngle = angle - Math.PI / 2;

            ctx.beginPath();
            ctx.arc(CX, CY, ring.r, 0, Math.PI * 2);
            ctx.strokeStyle = "rgba(212,146,14,0.07)";
            ctx.lineWidth = ring.width * 0.8;
            ctx.stroke();

            const STEPS = 28;
            for (let i = 0; i < STEPS; i++) {
                const ratio = i / STEPS;
                const segStart = headAngle - ring.arcLen * ratio;
                const segEnd = headAngle - ring.arcLen * (ratio + 1 / STEPS);
                const segAlpha = ring.alpha * (1 - ratio) * (1 - ratio);
                ctx.beginPath();
                ctx.arc(CX, CY, ring.r, segStart, segEnd, true);
                ctx.strokeStyle = `rgba(232,169,24,${segAlpha})`;
                ctx.lineWidth = ring.width * (1 - ratio * 0.5);
                ctx.lineCap = "round";
                ctx.stroke();
            }

            const hx = CX + Math.cos(headAngle) * ring.r;
            const hy = CY + Math.sin(headAngle) * ring.r;
            const grd = ctx.createRadialGradient(hx, hy, 0, hx, hy, ring.width * 6);
            grd.addColorStop(0, `rgba(245,200,66,${ring.alpha * 0.7})`);
            grd.addColorStop(1, "rgba(245,200,66,0)");
            ctx.beginPath();
            ctx.arc(hx, hy, ring.width * 6, 0, Math.PI * 2);
            ctx.fillStyle = grd;
            ctx.fill();

            ctx.beginPath();
            ctx.arc(hx, hy, ring.width * 1.4, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255,228,120,${ring.alpha})`;
            ctx.fill();
        });

        if (runRef.current) rafRef.current = requestAnimationFrame(drawRings);
    };

    const startRings = () => {
        runRef.current = true;
        setRingsOn(true);
        rafRef.current = requestAnimationFrame(drawRings);
    };

    const stopRings = () => {
        runRef.current = false;
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        setRingsOn(false);
    };

    const initPath = (el) => {
        if (!el) return;
        const len = el.getTotalLength();
        el.style.strokeDasharray = len;
        el.style.strokeDashoffset = len;
        el.style.fill = "none";
    };

    const animatePath = (el, duration) =>
        new Promise((res) => {
            if (!el) return res();
            el.style.transition = `stroke-dashoffset ${duration}ms cubic-bezier(0.4,0,0.15,1)`;
            el.style.strokeDashoffset = 0;
            setTimeout(res, duration);
        });

    useEffect(() => {
        initPath(path1Ref.current);
        initPath(path2Ref.current);

        const run = async () => {
            await delay(100);
            setCorners(true);

            await delay(300);
            const p1Done = animatePath(path1Ref.current, 1400);

            await delay(600);
            animatePath(path2Ref.current, 900);

            await p1Done;

            if (path1Ref.current) {
                path1Ref.current.style.transition += ", fill 700ms ease";
                path1Ref.current.style.fill = "url(#vstar-g1)";
            }
            if (path2Ref.current) {
                path2Ref.current.style.transition += ", fill 700ms ease";
                path2Ref.current.style.fill = "url(#vstar-g2)";
            }

            setGlowOn(true);
            startRings();

            await delay(160);
            setRulesOn(true);

            await delay(160);
            setBrandOn(true);

            await delay(200);
            setSubOn(true);

            await delay(2500);

            // ── EXIT: fade + gentle lift revealing website beneath ──
            stopRings();
            await delay(150);

            setExiting(true);

            // Match this to the CSS transition duration below (900ms)
            await delay(900);
            setDone(true);
            onComplete?.();
        };

        run();

        return () => {
            runRef.current = false;
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, []);

    if (done) return null;

    return (
        <div
            className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-white"
            style={{
                // Whole preloader fades out + floats up slightly, website reveals beneath
                opacity: exiting ? 0 : 1,
                transform: exiting ? "translateY(-20px) scale(0.98)" : "translateY(0px) scale(1)",
                transition: "opacity 0.9s cubic-bezier(0.4,0,0.2,1), transform 0.9s cubic-bezier(0.4,0,0.2,1)",
                pointerEvents: exiting ? "none" : "all",
            }}
        >
            {/* Corner brackets */}
            {["tl", "tr", "bl", "br"].map((pos) => (
                <CornerMark key={pos} pos={pos} visible={corners && !exiting} />
            ))}

            {/* Stage */}
            <div className="relative z-[2] flex flex-col items-center">

                {/* Logo area */}
                <div className="relative w-[200px] h-[200px] flex items-center justify-center">

                    <canvas
                        ref={canvasRef}
                        width={200}
                        height={200}
                        className="absolute inset-0 w-full h-full pointer-events-none"
                        style={{ opacity: ringsOn ? 1 : 0, transition: "opacity 0.6s ease" }}
                    />

                    <div
                        className="absolute w-[120px] h-[120px] rounded-full"
                        style={{
                            background: "radial-gradient(circle, rgba(232,169,24,0.16) 0%, transparent 70%)",
                            opacity: glowOn ? 1 : 0,
                            transition: "opacity 1s ease",
                        }}
                    />

                    <svg
                        className="relative z-[2] overflow-visible"
                        style={{ width: 110, height: "auto" }}
                        viewBox="0 0 570 471"
                        fill="none"
                    >
                        <defs>
                            <linearGradient id="vstar-g1" x1="276.609" y1="0" x2="276.609" y2="436" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#F3BF56" />
                                <stop offset="0.55" stopColor="#EEE469" />
                                <stop offset="1" stopColor="#F0AA3E" />
                            </linearGradient>
                            <linearGradient id="vstar-g2" x1="276.609" y1="0" x2="276.609" y2="436" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#F0AF42" />
                                <stop offset="1" stopColor="#F2C057" />
                            </linearGradient>
                        </defs>
                        <path
                            ref={path1Ref}
                            d="M20.0136 1C12.4095 1 7.58768 9.15089 11.2493 15.8153L236.412 425.631C239.926 432.026 246.644 436 253.941 436H300.254C307.564 436 314.291 432.012 317.8 425.6L542.012 15.7998C545.658 9.13577 540.835 1 533.239 1H490.883C487.31 1 484.009 2.90599 482.223 6L285.346 347C281.497 353.667 271.875 353.667 268.026 347L138.411 122.5L114.45 81C110.601 74.3333 115.413 66 123.111 66H222.109L299.474 200L328.63 149.5C330.417 146.406 330.417 142.594 328.63 139.5L251.554 5.99999C249.768 2.90598 246.467 1 242.894 1H20.0136Z"
                            stroke="url(#vstar-g1)"
                            strokeWidth={4}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            ref={path2Ref}
                            d="M222.109 66H123.111C115.413 66 110.601 74.3333 114.45 81L138.411 122.5H200.459C204.031 122.5 207.333 124.406 209.119 127.5L266.565 227C270.414 233.667 280.037 233.667 283.886 227L299.474 200L222.109 66Z"
                            stroke="url(#vstar-g2)"
                            strokeWidth={4}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>

                <div
                    className="flex flex-col items-center gap-[7px]"
                    style={{
                        opacity: brandOn ? 1 : 0,
                        transform: brandOn ? "translateY(0)" : "translateY(8px)",
                        transition: "opacity 0.8s ease, transform 0.8s ease",
                    }}
                >
                    <span
                        className="text-[34px] font-semibold tracking-[4px] text-[#181818] leading-none whitespace-nowrap"
                        style={{
                            clipPath: brandOn ? "inset(0 0% 0 0)" : "inset(0 100% 0 0)",
                            transition: "clip-path 1s cubic-bezier(0.16,1,0.3,1)",
                        }}
                    >
                        VSTAR
                    </span>
                    <span
                        className="text-[12px] font-light tracking-[2px] uppercase text-[#666]"
                        style={{
                            opacity: subOn ? 1 : 0,
                            transition: "opacity 0.7s ease 0.25s",
                        }}
                    >
                        Cab Services
                    </span>
                </div>

            </div>
        </div>
    );
}