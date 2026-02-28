import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

function Footer() {
  const pathname = usePathname();
  const isContactPage = pathname === '/contact';

  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/service' },
    { label: 'Contact Us', href: '/contact' },
  ];

  const fleet = [
    { label: 'Innova Crysta', href: '#' },
    { label: 'Swift Dzire', href: '#' },
    { label: 'Tempo Traveller', href: '#' },
    { label: 'Toyota Fortuner', href: '#' },
  ];

  const contact = [
    {
      icon: <i className="fi fi-rr-phone-call text-[18px] h-[18px] leading-tight"></i>,
      label: '+91 93138 34439',
      href: 'tel:+919313834439',
    },
    {
      icon: <i className="fi fi-rr-envelope text-[18px] h-[18px] leading-tight"></i>,
      label: 'vstarcabservice@gmail.com',
      href: 'mailto:vstarcabservice@gmail.com',
    },
    {
      icon: <i className="fi fi-rr-marker text-[18px] h-[18px] leading-tight"></i>,
      label: 'Mansa, Gandhinagar, Gujarat',
      href: 'https://maps.google.com',
    },
  ];

  const socials = [
    // {
    //   label: 'Facebook',
    //   href: '#',
    //   icon: (
    //     <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    //       <path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 011-1h3v-4h-3a5 5 0 00-5 5v2.01h-2l-.396 3.98h2.396v8.01z" />
    //     </svg>
    //   ),
    // },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/vstar_cab_service?igsh=dHR4d2NvenU3emho',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      label: 'WhatsApp',
      href: 'https://wa.me/919313834439',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.554 4.103 1.522 5.827L.057 23.882a.5.5 0 00.601.634l6.198-1.637A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.888a9.87 9.87 0 01-5.032-1.378l-.36-.214-3.733.986 1.001-3.646-.235-.374A9.862 9.862 0 012.112 12C2.112 6.533 6.533 2.112 12 2.112S21.888 6.533 21.888 12 17.467 21.888 12 21.888z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="text-white relative bg-gray-950 overflow-hidden">
      <div className="container">
        <div className='footer-inner relative z-2'>
          {!isContactPage && (
            <div className="CTA flex justify-between items-center relative flex-wrap gap-8 lg:py-[80px] md:py-[60px] py-[40px] border-b-[1px] border-white/30">
              <div className='flex flex-col gap-[20px]'>
                <h2 className="font-display font-black text-[2.3rem] text-white leading-tight" >Plan Your Next<br />Adventure With Us</h2>
                <p className="text-white/75 mt-2 text-base">Call us or fill a quick form — we&apos;ll take care of the rest.</p>
              </div>
              <Link href='/contact' className="font-body font-semibold bg-white text-black px-10 py-4 rounded-xl text-base tracking-wide shadow-2xl shadow-white/20 flex items-center gap-[10px]">
                <span>Contact Us</span>
                <i className="fi fi-rr-arrow-right !h-[16px] !text-[16px] !leading-tight"></i>
              </Link>
            </div>
          )}
          <div className="footer-top lg:py-[80px] md:py-[60px] py-[40px] grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr] gap-12">
            <div className="flex flex-col gap-5">
              <Link href="/" className="inline-flex items-center gap-2 no-underline">
                <Image
                  src="/vstar-logo.svg"
                  alt="Vstar Cab Services"
                  width={110}
                  height={36}
                  className="object-contain brightness-0 invert"
                />
              </Link>
              <p className="text-sm leading-relaxed text-white/45 max-w-[260px]">
                Premium car rental and travel services for individuals, families, and corporate groups across Gujarat and beyond.
              </p>

              <div className="flex gap-2 mt-1">
                {socials.map(({ label, href, icon }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg border border-white/[0.08] bg-white/[0.03] flex items-center justify-center
                    text-white/35 no-underline transition-all duration-200
                    hover:border-[#C9A84C]/50 hover:text-[#C9A84C] hover:bg-[#C9A84C]/[0.06]"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h5 className="text-[18px] font-semibold tracking-[0.14em] uppercase text-[#C9A84C] mb-5">
                Quick Links
              </h5>
              <ul className="flex flex-col gap-3 list-none m-0 p-0">
                {quickLinks.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="group inline-flex items-center gap-2 text-sm text-white/45 no-underline transition-colors duration-200 hover:text-white"
                    >
                      <span className="w-0 h-px bg-[#C9A84C] transition-all duration-300 group-hover:w-3" />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h5 className="text-[18px] font-semibold tracking-[0.14em] uppercase text-[#C9A84C] mb-5">
                Get in Touch
              </h5>
              <ul className="flex flex-col gap-3 list-none m-0 p-0">
                {contact.map(({ icon, label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-sm text-white/45 no-underline transition-colors duration-200 hover:text-white group"
                    >
                      <span className="text-[#C9A84C]/60 transition-colors duration-200 group-hover:text-[#C9A84C]">
                        {icon}
                      </span>
                      {label}
                    </a>
                  </li>
                ))}
              </ul>

            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='footer-bottom relative z-2'>
          <div className="h-px bg-gradient-to-r from-transparent via-white/[0.2] to-transparent" />
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 py-2.5">
            <p className="text-white/30 tracking-wide max-md:text-center">
              © {new Date().getFullYear()} Vstar Cab Services. All rights reserved.
            </p>
            <div className="flex items-center gap-5">
              <p className='text-white/30'>
                Developed by <a href="https://www.zyden-it.com/" target='_blank' rel='noopener noreferrer' className=" no-underline transition-colors duration-200 hover:text-white/60" > Zyden IT Solutions </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 opacity-5"
        style={{ backgroundImage: "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)", backgroundSize: "30px 30px" }} />
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2" />
    </footer>
  );
}

export default Footer;