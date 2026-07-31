import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { programsData } from '@/data/programsData';
import { Pill, Stethoscope, HeartPulse, Apple, Activity, ArrowRight, GraduationCap, CheckCircle2 } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Diploma Programs Offered | Pharmacy, Nursing, Midwifery, Nutrition & Public Health',
  description:
    'Explore accredited diploma programs at Bilaal Health Science College in Garowe, Puntland, Somalia: Pharmacy, Nursing, Midwifery, Nutrition, and Public Health.',
};

export default function ProgramsPage() {
  const getProgramIcon = (iconName: string) => {
    switch (iconName) {
      case 'Pill':
        return <Pill className="w-8 h-8 text-bilaal-primary" />;
      case 'Stethoscope':
        return <Stethoscope className="w-8 h-8 text-bilaal-primary" />;
      case 'HeartPulse':
        return <HeartPulse className="w-8 h-8 text-bilaal-primary" />;
      case 'Apple':
        return <Apple className="w-8 h-8 text-bilaal-primary" />;
      case 'Activity':
        return <Activity className="w-8 h-8 text-bilaal-primary" />;
      default:
        return <Stethoscope className="w-8 h-8 text-bilaal-primary" />;
    }
  };

  return (
    <div className="space-y-16 py-12">
      {/* Header Banner */}
      <section className="bg-bilaal-navy text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/classroom-presentation.jpg"
            alt="Bilaal Health Science Classroom"
            fill
            className="object-cover opacity-20 mix-blend-overlay"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="inline-flex items-center gap-2 bg-white/10 text-emerald-300 text-xs font-heading font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full border border-white/20">
            Academic Programs
          </span>
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-white">
            Healthcare Diploma Programs
          </h1>
          <p className="text-blue-100/90 text-base sm:text-lg max-w-2xl mx-auto">
            Acquire practical clinical competency and professional qualifications in Garowe, Puntland, Somalia.
          </p>
        </div>
      </section>

      {/* Programs List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeader
          badge="Curriculum & Pathways"
          title="Choose Your Healthcare Specialization"
          subtitle="All programs feature 2-year (3 semesters) structured training, hands-on skills simulation, and clinical hospital rotations."
        />

        <div className="space-y-8">
          {programsData.map((prog) => (
            <div
              key={prog.id}
              className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-100 shadow-soft hover:shadow-card transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-8 space-y-5">
                <div className="flex flex-wrap items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-bilaal-light flex items-center justify-center border border-bilaal-secondary/20">
                    {getProgramIcon(prog.iconName)}
                  </div>
                  <div>
                    <h2 className="font-heading font-extrabold text-2xl text-bilaal-dark">
                      {prog.title}
                    </h2>
                    <p className="text-xs text-bilaal-primary font-medium">
                      Qualification: {prog.qualification}
                    </p>
                  </div>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {prog.fullDescription}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-gray-700 pt-2">
                  <div className="flex items-center gap-2 bg-bilaal-light/60 p-2.5 rounded-xl border border-bilaal-secondary/15">
                    <CheckCircle2 className="w-4 h-4 text-bilaal-accent shrink-0" />
                    <span>Duration: <strong>{prog.duration}</strong></span>
                  </div>
                  <div className="flex items-center gap-2 bg-bilaal-light/60 p-2.5 rounded-xl border border-bilaal-secondary/15">
                    <CheckCircle2 className="w-4 h-4 text-bilaal-accent shrink-0" />
                    <span>Intakes: <strong>{prog.intake}</strong></span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 bg-bilaal-light p-6 rounded-2xl border border-bilaal-secondary/20 space-y-4 flex flex-col justify-between h-full">
                <div className="space-y-2">
                  <h4 className="font-heading font-bold text-sm text-bilaal-primary">
                    Career Opportunities:
                  </h4>
                  <ul className="text-xs text-gray-600 space-y-1.5 list-disc pl-4">
                    {prog.careerOpportunities.slice(0, 3).map((op, i) => (
                      <li key={i}>{op}</li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2 pt-4 border-t border-bilaal-secondary/20">
                  <Link
                    href={`/programs/${prog.slug}`}
                    className="w-full inline-flex items-center justify-center gap-2 bg-bilaal-primary text-white font-heading font-semibold text-sm py-3 rounded-xl shadow hover:bg-bilaal-secondary transition-all"
                  >
                    <span>View Full Curriculum</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <Link
                    href="/apply"
                    className="w-full inline-flex items-center justify-center gap-2 bg-white text-bilaal-dark font-heading font-semibold text-xs py-2.5 rounded-xl border border-gray-200 hover:bg-gray-50 transition-all"
                  >
                    <GraduationCap className="w-4 h-4 text-bilaal-accent" />
                    <span>Apply for {prog.title}</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
