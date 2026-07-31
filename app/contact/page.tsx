import React from 'react';
import Image from 'next/image';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ContactForm } from '@/components/forms/ContactForm';
import { MapPin, Mail, Phone, Clock, ShieldCheck, ExternalLink } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Location, Phone Numbers & Email',
  description:
    'Contact Bilaal Health Science College in Garowe, Puntland, Somalia. Phone: +252 90 781 4063, +252 90 756 0281, +252 90 683 7192. Email: bilaalhealthsciencecollege@gmail.com.',
};

export default function ContactPage() {
  return (
    <div className="space-y-16 py-12">
      {/* Header Banner */}
      <section className="bg-bilaal-navy text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/outdoor-practice.jpg"
            alt="Campus Location"
            fill
            className="object-cover opacity-20 mix-blend-overlay"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="inline-flex items-center gap-2 bg-white/10 text-emerald-300 text-xs font-heading font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full border border-white/20">
            Direct Assistance
          </span>
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-white">
            Contact College Administration
          </h1>
          <p className="text-blue-100/90 text-base sm:text-lg max-w-2xl mx-auto">
            We are here to answer your questions regarding admissions, programs, and campus visits in Garowe.
          </p>
        </div>
      </section>

      {/* Main Grid: Contact Details & Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Official Contact Information */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-heading font-bold text-bilaal-primary uppercase tracking-wider">
                Reach Out Directly
              </span>
              <h2 className="font-heading font-extrabold text-3xl text-bilaal-dark">
                Garowe Campus Details
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Visit our admissions office or call our administrative team during working hours.
              </p>
            </div>

            {/* Information Cards */}
            <div className="space-y-4">
              {/* Location Card */}
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-soft flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-bilaal-light text-bilaal-primary flex items-center justify-center shrink-0 border border-bilaal-secondary/20">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-heading font-bold text-base text-bilaal-dark">Campus Address</h4>
                  <p className="text-xs text-gray-600">Garowe, Puntland State of Somalia</p>
                </div>
              </div>

              {/* Phone Numbers Card */}
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-soft flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-bilaal-accent flex items-center justify-center shrink-0 border border-emerald-200">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-heading font-bold text-base text-bilaal-dark">Direct Phone Numbers</h4>
                  <div className="text-xs text-gray-700 space-y-1">
                    <div>
                      <a href="tel:+252907814063" className="hover:text-bilaal-primary font-medium hover:underline">
                        +252 90 781 4063
                      </a>
                    </div>
                    <div>
                      <a href="tel:+252907560281" className="hover:text-bilaal-primary font-medium hover:underline">
                        +252 90 756 0281
                      </a>
                    </div>
                    <div>
                      <a href="tel:+252906837192" className="hover:text-bilaal-primary font-medium hover:underline">
                        +252 90 683 7192
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Email Address Card */}
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-soft flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-bilaal-light text-bilaal-primary flex items-center justify-center shrink-0 border border-bilaal-secondary/20">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-heading font-bold text-base text-bilaal-dark">Official Email</h4>
                  <a
                    href="mailto:bilaalhealthsciencecollege@gmail.com"
                    className="text-xs text-bilaal-primary font-medium hover:underline block break-all"
                  >
                    bilaalhealthsciencecollege@gmail.com
                  </a>
                </div>
              </div>

              {/* Operating Hours Card */}
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-soft flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-bilaal-light text-bilaal-primary flex items-center justify-center shrink-0 border border-bilaal-secondary/20">
                  <Clock className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-heading font-bold text-base text-bilaal-dark">Working Hours</h4>
                  <p className="text-xs text-gray-600">Saturday – Thursday: 7:30 AM – 4:30 PM</p>
                  <p className="text-[11px] text-gray-400">Friday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-card space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h3 className="font-heading font-bold text-xl text-bilaal-dark">
                Garowe Campus Location Map
              </h3>
              <p className="text-xs text-gray-500">
                Garowe, Puntland State of Somalia
              </p>
            </div>
            <a
              href="https://maps.google.com/?q=Garowe+Puntland+Somalia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-heading font-bold text-bilaal-primary hover:underline"
            >
              <span>Open Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden border border-gray-200">
            <iframe
              title="Garowe Puntland Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62863.63319089069!2d48.45524675!3d8.40539125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3d9c3e9860b2401f%3A0x6b6c2c9d6467bd54!2sGarowe%2C%20Somalia!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
