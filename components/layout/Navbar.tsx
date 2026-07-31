'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from '@/components/ui/Logo';
import { Menu, X, Phone, GraduationCap, ChevronRight } from 'lucide-react';

interface NavbarProps {
  transparentOnTop?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ transparentOnTop = false }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Programs', href: '/programs' },
    { name: 'Admissions', href: '/admissions' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'News', href: '/news' },
    { name: 'Contact', href: '/contact' },
  ];

  // Check if current route is active
  const isActive = (path: string) => {
    if (path === '/') return pathname === '/';
    return pathname.startsWith(path);
  };

  const useTransparentStyle = transparentOnTop && !isScrolled;

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md py-3 text-gray-800'
          : useTransparentStyle
          ? 'bg-gradient-to-b from-[#0F2E5A]/90 to-transparent backdrop-blur-sm py-4 text-white'
          : 'bg-white shadow-sm py-3 text-gray-800 border-b border-gray-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* College Logo */}
        <Link href="/" className="group flex items-center">
          <Logo variant={useTransparentStyle ? 'light' : 'dark'} />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`px-3 py-2 rounded-lg font-heading font-medium text-sm transition-all duration-200 ${
                  active
                    ? useTransparentStyle
                      ? 'bg-white/20 text-white font-bold'
                      : 'bg-bilaal-light text-bilaal-primary font-bold'
                    : useTransparentStyle
                    ? 'text-white/90 hover:text-white hover:bg-white/10'
                    : 'text-gray-700 hover:text-bilaal-primary hover:bg-bilaal-light/60'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center space-x-3">
          <Link
            href="/apply"
            className="inline-flex items-center gap-2 bg-bilaal-primary hover:bg-bilaal-secondary text-white font-heading font-semibold text-sm px-5 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <GraduationCap className="w-4 h-4 text-emerald-300" />
            <span>Apply Now</span>
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="lg:hidden flex items-center space-x-2">
          <Link
            href="/apply"
            className="md:hidden bg-bilaal-primary text-white text-xs font-semibold px-3 py-1.5 rounded-full"
          >
            Apply
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-lg transition-colors ${
              useTransparentStyle
                ? 'text-white hover:bg-white/10'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-white border-b border-gray-200 shadow-2xl z-50 animate-in slide-in-from-top-2 duration-200">
          <div className="px-4 pt-3 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between px-4 py-3 rounded-xl font-heading text-base font-medium transition-colors ${
                  isActive(link.href)
                    ? 'bg-bilaal-light text-bilaal-primary font-bold border-l-4 border-bilaal-primary'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </Link>
            ))}

            <div className="pt-4 border-t border-gray-100 space-y-3">
              <Link
                href="/apply"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-bilaal-primary text-white font-heading font-semibold text-center py-3 rounded-xl shadow"
              >
                <GraduationCap className="w-5 h-5 text-emerald-300" />
                <span>Apply Online Today</span>
              </Link>

              {/* Mobile Contact Quick Links */}
              <div className="bg-bilaal-light p-3.5 rounded-xl space-y-1.5 text-xs text-gray-700">
                <div className="font-semibold text-bilaal-primary">Direct Lines Garowe:</div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-bilaal-accent" />
                  <a href="tel:+252904819705" className="hover:underline font-bold text-emerald-600">
                    +252 90 481 9705 (Main)
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-bilaal-accent" />
                  <a href="tel:+252907814063" className="hover:underline">
                    +252 90 781 4063
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-bilaal-accent" />
                  <a href="tel:+252907560281" className="hover:underline">
                    +252 90 756 0281
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
