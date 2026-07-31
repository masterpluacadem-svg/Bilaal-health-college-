import React from 'react';
import Link from 'next/link';
import { Logo } from '@/components/ui/Logo';
import { Phone, Mail, MapPin, ArrowRight, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0F2E5A] text-white pt-16 pb-8 border-t-4 border-bilaal-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Column 1: Institutional Identity */}
          <div className="space-y-5">
            <Logo variant="light" showSubtitle={true} />
            <p className="text-blue-100/80 text-sm leading-relaxed">
              Bilaal Health Science College prepares competent healthcare professionals through quality education, practical laboratory training, and academic excellence in Garowe, Puntland, Somalia.
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-400 bg-white/5 py-2 px-3 rounded-lg border border-white/10 w-fit">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>Ministry of Health Accredited Institution</span>
            </div>
          </div>

          {/* Column 2: Diploma Programs */}
          <div>
            <h3 className="font-heading font-bold text-base text-white tracking-wide uppercase mb-4 border-l-2 border-bilaal-secondary pl-3">
              Diploma Programs
            </h3>
            <ul className="space-y-2.5 text-sm text-blue-100/80">
              <li>
                <Link href="/programs/pharmacy" className="hover:text-white hover:translate-x-1 inline-flex items-center gap-2 transition-all">
                  <ArrowRight className="w-3 h-3 text-bilaal-secondary" />
                  <span>Diploma in Pharmacy</span>
                </Link>
              </li>
              <li>
                <Link href="/programs/nursing" className="hover:text-white hover:translate-x-1 inline-flex items-center gap-2 transition-all">
                  <ArrowRight className="w-3 h-3 text-bilaal-secondary" />
                  <span>Diploma in Nursing</span>
                </Link>
              </li>
              <li>
                <Link href="/programs/midwifery" className="hover:text-white hover:translate-x-1 inline-flex items-center gap-2 transition-all">
                  <ArrowRight className="w-3 h-3 text-bilaal-secondary" />
                  <span>Diploma in Midwifery</span>
                </Link>
              </li>
              <li>
                <Link href="/programs/nutrition" className="hover:text-white hover:translate-x-1 inline-flex items-center gap-2 transition-all">
                  <ArrowRight className="w-3 h-3 text-bilaal-secondary" />
                  <span>Diploma in Nutrition</span>
                </Link>
              </li>
              <li>
                <Link href="/programs/public-health" className="hover:text-white hover:translate-x-1 inline-flex items-center gap-2 transition-all">
                  <ArrowRight className="w-3 h-3 text-bilaal-secondary" />
                  <span>Diploma in Public Health</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-base text-white tracking-wide uppercase mb-4 border-l-2 border-bilaal-secondary pl-3">
              Quick Navigation
            </h3>
            <ul className="space-y-2.5 text-sm text-blue-100/80">
              <li>
                <Link href="/about" className="hover:text-white hover:translate-x-1 inline-flex items-center gap-2 transition-all">
                  <ArrowRight className="w-3 h-3 text-bilaal-secondary" />
                  <span>About College History & Leadership</span>
                </Link>
              </li>
              <li>
                <Link href="/admissions" className="hover:text-white hover:translate-x-1 inline-flex items-center gap-2 transition-all">
                  <ArrowRight className="w-3 h-3 text-bilaal-secondary" />
                  <span>Admission Requirements & Criteria</span>
                </Link>
              </li>
              <li>
                <Link href="/apply" className="hover:text-white hover:translate-x-1 inline-flex items-center gap-2 transition-all">
                  <ArrowRight className="w-3 h-3 text-bilaal-secondary" />
                  <span>Online Student Application Form</span>
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-white hover:translate-x-1 inline-flex items-center gap-2 transition-all">
                  <ArrowRight className="w-3 h-3 text-bilaal-secondary" />
                  <span>Campus & Skills Lab Gallery</span>
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-white hover:translate-x-1 inline-flex items-center gap-2 transition-all">
                  <ArrowRight className="w-3 h-3 text-bilaal-secondary" />
                  <span>Latest News & Health Campaigns</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white hover:translate-x-1 inline-flex items-center gap-2 transition-all">
                  <ArrowRight className="w-3 h-3 text-bilaal-secondary" />
                  <span>Contact Information & Location</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Direct Campus Contact */}
          <div>
            <h3 className="font-heading font-bold text-base text-white tracking-wide uppercase mb-4 border-l-2 border-bilaal-secondary pl-3">
              Garowe Contact
            </h3>
            <div className="space-y-3.5 text-sm text-blue-100/90">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-bilaal-secondary shrink-0 mt-0.5" />
                <span>Bilaal Health Science College, Garowe, Puntland, Somalia</span>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-bilaal-secondary shrink-0 mt-0.5" />
                <a href="mailto:bilaalhealthsciencecollege@gmail.com" className="hover:text-white underline decoration-blue-400">
                  bilaalhealthsciencecollege@gmail.com
                </a>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-bilaal-accent shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <div className="font-medium text-white">Call Admissions Desk:</div>
                  <div>
                    <a href="tel:+252907814063" className="hover:underline hover:text-white">
                      +252 90 781 4063
                    </a>
                  </div>
                  <div>
                    <a href="tel:+252907560281" className="hover:underline hover:text-white">
                      +252 90 756 0281
                    </a>
                  </div>
                  <div>
                    <a href="tel:+252906837192" className="hover:underline hover:text-white">
                      +252 90 683 7192
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-blue-200/70 gap-4">
          <p>© {new Date().getFullYear()} Bilaal Health Science College. All rights reserved. Garowe, Puntland, Somalia.</p>
          <div className="flex space-x-6">
            <Link href="/admissions" className="hover:text-white transition-colors">
              Admissions
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Contact
            </Link>
            <Link href="/apply" className="hover:text-white transition-colors">
              Apply
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
