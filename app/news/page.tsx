import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { newsData } from '@/data/newsData';
import { Calendar, User, ArrowRight, Sparkles } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'News & Announcements | Bilaal Health Science College',
  description:
    'Stay updated with recent news, health campaigns, clinical workshops, and admissions announcements from Bilaal Health Science College in Garowe.',
};

export default function NewsPage() {
  return (
    <div className="space-y-16 py-12">
      {/* Header Banner */}
      <section className="bg-bilaal-navy text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.png"
            alt="News Banner"
            fill
            className="object-cover opacity-20 mix-blend-overlay"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="inline-flex items-center gap-2 bg-white/10 text-emerald-300 text-xs font-heading font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full border border-white/20">
            Institutional Bulletin
          </span>
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-white">
            News & Health Campaigns
          </h1>
          <p className="text-blue-100/90 text-base sm:text-lg max-w-2xl mx-auto">
            Latest announcements, academic achievements, workshops, and community outreach in Garowe.
          </p>
        </div>
      </section>

      {/* News Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {newsData.map((news) => (
            <article
              key={news.id}
              className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-soft hover:shadow-card transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={news.image}
                  alt={news.title}
                  fill
                  className="object-cover"
                />
                <span className="absolute top-4 left-4 bg-bilaal-primary text-white text-xs font-heading font-bold uppercase tracking-wider px-3 py-1 rounded-lg shadow">
                  {news.category}
                </span>
              </div>

              <div className="p-8 space-y-4 flex-grow flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-bilaal-secondary" />
                      <span>{news.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <User className="w-4 h-4 text-bilaal-secondary" />
                      <span>{news.author}</span>
                    </div>
                  </div>

                  <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-bilaal-dark hover:text-bilaal-primary transition-colors">
                    {news.title}
                  </h2>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {news.content}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs text-emerald-600 font-medium">Garowe Campus</span>
                  <Link
                    href="/apply"
                    className="inline-flex items-center gap-1 text-xs font-heading font-bold text-bilaal-primary hover:text-bilaal-secondary"
                  >
                    <span>Apply for Intake</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
