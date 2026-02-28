import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const NAV_LINKS = [
  { link: '/', label: 'Home', num: '01' },
  { link: '/about', label: 'About', num: '02' },
  { link: '/service', label: 'Services', num: '03' },
  { link: '/contact', label: 'Contact Us', num: '04' },
];

function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);

  const openMenu = () => {
    setHasOpened(true);
    setMenuOpen(true);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <style>{`

        @keyframes panel-in  { from { transform: translateX(100%); } to { transform: translateX(0); } }
        @keyframes panel-out { from { transform: translateX(0); }    to { transform: translateX(100%); } }
        @keyframes bd-in     { from { opacity: 0; } to { opacity: 1; } }
        @keyframes item-in   { from { opacity:0; transform:translateX(28px); } to { opacity:1; transform:translateX(0); } }
        @keyframes foot-in   { from { opacity:0; transform:translateY(14px); } to { opacity:1; transform:translateY(0); } }

        .panel-open  { animation: panel-in  0.42s cubic-bezier(0.16,1,0.3,1) both; }
        .panel-close { animation: panel-out 0.32s cubic-bezier(0.4,0,1,1)    both; pointer-events:none; }
        .bd-show     { animation: bd-in 0.28s ease both; }

        .ni1 { animation: item-in 0.5s cubic-bezier(0.16,1,0.3,1) 0.12s both; }
        .ni2 { animation: item-in 0.5s cubic-bezier(0.16,1,0.3,1) 0.19s both; }
        .ni3 { animation: item-in 0.5s cubic-bezier(0.16,1,0.3,1) 0.26s both; }
        .ni4 { animation: item-in 0.5s cubic-bezier(0.16,1,0.3,1) 0.33s both; }
        .nf  { animation: foot-in 0.5s cubic-bezier(0.16,1,0.3,1) 0.42s both; opacity:0; }

        .mob-link {
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 15px 0;
          border-bottom: 1px solid #f1f1f1;
          text-decoration: none;
          transition: padding-left 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        .mob-link:last-child { border-bottom: none; }
        .mob-link:hover { padding-left: 6px; }

        .mob-link-bar {
          position: absolute;
          bottom: 0; left: 0;
          height: 1px; width: 0;
          background: linear-gradient(90deg, #C9A84C, transparent);
          transition: width 0.35s ease;
        }
        .mob-link:hover .mob-link-bar { width: 50%; }

        .ham-bar {
          display: block;
          height: 1.5px;
          border-radius: 2px;
          transition: all 0.32s cubic-bezier(0.16,1,0.3,1);
        }
      `}</style>

      {/* ── Backdrop ── */}
      {menuOpen && (
        <div
          className="bd-show fixed inset-0 z-[20] bg-black/30 backdrop-blur-[2px] md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      <div
        className={`hdr fixed top-0 right-0 bottom-0 z-[20] w-full bg-white md:hidden flex flex-col
    shadow-[-20px_0_60px_rgba(0,0,0,0.10)]
    ${!hasOpened ? 'translate-x-full' : menuOpen ? 'panel-open' : 'panel-close'}`}
      >
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-gold via-amber-300 to-transparent" />

        <div className="flex items-center justify-between px-6 pt-7 pb-5 border-b border-stone-100">
          <Link href="/" className="flex items-center duration-200">
            <Image
              src="/vstar-logo.svg"
              alt="Vstar Cab Services"
              width={110}
              height={36}
              className="object-contain"
            />
          </Link>

          <button
            onClick={() => setMenuOpen(false)}
            className="w-8 h-8 rounded-full border border-stone-200 bg-stone-50 flex items-center justify-center cursor-pointer transition-all duration-200 hover:border-amber-300 hover:bg-amber-50"
            aria-label="Close menu"
          >
            <svg viewBox="0 0 12 12" fill="none" className="w-3 h-3 text-stone-500" stroke="currentColor" strokeWidth="2">
              <path d="M1 1l10 10M11 1L1 11" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <nav className="flex-1 flex flex-col px-6 py-2">
          {NAV_LINKS.map(({ link, label, num }, i) => {
            const isActive = pathname === link;
            return (
              <Link
                key={link}
                href={link}
                onClick={() => setMenuOpen(false)}
                className={`mob-link ni${i + 1}`}
              >
                <span className="text-[10.5px] font-semibold tracking-[0.12em] text-gold w-5 shrink-0">
                  {num}
                </span>

                <span className={`text-[20px] font-medium leading-none tracking-tight transition-colors duration-200
                  ${isActive ? 'text-gold' : 'text-stone-900'}`}>
                  {label}
                </span>

                {isActive && (
                  <span className="ml-auto w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                )}

                {!isActive && (
                  <span className="ml-auto opacity-0 group-hover:opacity-100 shrink-0">
                    <svg viewBox="0 0 12 12" fill="none" className="w-3.5 h-3.5 text-stone-300" stroke="currentColor" strokeWidth="2">
                      <path d="M1 6h10M7 2l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                )}

                <div className="mob-link-bar" />
              </Link>
            );
          })}
        </nav>

        <div className="nf px-5 pb-[15px] pt-[15px] border-t border-stone-100">

          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-between w-full px-5 py-4 rounded-2xl bg-stone-900 mb-4 no-underline
              transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(0,0,0,0.15)]"
          >
            <div>
              <p className="!text-[14px] text-white/40 uppercase tracking-widest mb-0.5 font-medium">Ready to ride?</p>
              <p className="font-semibold text-white leading-none">Book a Ride</p>
            </div>
            <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center shrink-0">
              <svg viewBox="0 0 12 12" fill="none" className="w-3 h-3 text-stone-900" stroke="currentColor" strokeWidth="2.2">
                <path d="M1 6h10M7 2l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </Link>

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2.5">
              <div className="min-w-8 h-8 rounded-lg bg-amber-50 border border-gold/60 flex items-center justify-center">
                <i className="fi fi-rr-phone-call text-[16px] h-[16px] leading-tight text-gray-600"></i>
              </div>
              <a className="text-[14px] text-stone-500 font-medium" target='_blank' rel='noopener noreferrer' href="tel:+919313834439">+91 93138 34439</a>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="min-w-8 h-8 rounded-lg bg-amber-50 border border-gold/60 flex items-center justify-center">
                <i className="fi fi-rr-envelope text-[16px] h-[16px] leading-tight text-gray-600"></i>
              </div>
              <a className="text-[14px] text-stone-500 font-medium" target='_blank' rel='noopener noreferrer' href="mailto:vstarcabservice@gmail.com">vstarcabservice@gmail.com</a>
            </div>
          </div>
        </div>
      </div>

      <nav
        className={`hdr fixed top-0 left-0 right-0 z-[10]
          ${scrolled
            ? 'bg-white shadow-[0_1px_0_rgba(0,0,0,0.06),0_4px_24px_rgba(0,0,0,0.05)] border-b border-black/[0.07] py-4'
            : 'bg-transparent border-b border-white/[0.08] py-4'
          }`}
      >
        <div className="container">
          <div className="flex items-center justify-between">

            <Link href="/" className="flex items-center transition-opacity duration-200">
              <Image
                src="/vstar-logo.svg"
                alt="Vstar Cab Services"
                width={110}
                height={36}
                className="object-contain"
              />
            </Link>

            <ul className="hidden md:flex gap-9 list-none m-0 p-0">
              {NAV_LINKS.map(({ link, label }) => {
                const isActive = pathname === link;
                return (
                  <li key={link}>
                    <Link
                      href={link}
                      className={`relative text-[15px] font-medium tracking-wide no-underline pb-1 transition-colors duration-200
                      after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:bg-current
                      after:transition-all after:duration-300
                      ${isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full'}
                      ${scrolled
                          ? isActive ? 'text-gold' : 'text-gray-800 hover:text-gold'
                          : isActive ? 'text-gold' : 'text-gray-800 hover:text-gold'
                        }`}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <Link
              href="/contact"
              className="hidden md:inline-flex items-center gap-2 rounded-full text-[15px] font-medium px-5 py-[10px]
              no-underline bg-stone-900 text-white transition-all duration-300
              hover:-translate-y-px hover:shadow-[0_8px_24px_rgba(201,168,76,0.3)] hover:bg-gold group"
            >
              Book a Ride
              <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>

            <button
              className="flex md:hidden flex-col gap-[5px] bg-transparent border-none p-1.5 cursor-pointer"
              onClick={() => menuOpen ? setMenuOpen(false) : openMenu()}
              aria-label="Toggle menu"
            >
              <span className={`ham-bar w-[22px] h-[2px] ${scrolled ? 'bg-stone-800' : 'bg-stone-800'} ${menuOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
              <span className={`ham-bar w-[22px] h-[2px] ${scrolled ? 'bg-stone-800' : 'bg-stone-800'} ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
              <span className={`ham-bar w-[22px] h-[2px] ${scrolled ? 'bg-stone-800' : 'bg-stone-800'} ${menuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
            </button>

          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;