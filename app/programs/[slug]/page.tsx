import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { programsData } from '@/data/programsData';
import { SectionHeader } from '@/components/ui/SectionHeader';
import {
  CheckCircle2,
  Clock,
  Award,
  BookOpen,
  Briefcase,
  GraduationCap,
  ArrowRight,
  ShieldCheck,
  Stethoscope
} from 'lucide-react';
import type { Metadata } from 'next';

interface ProgramDetailProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: ProgramDetailProps): Promise<Metadata> {
  const resolvedParams = await params;
  const program = programsData.find((p) => p.slug === resolvedParams.slug);
  if (!program) {
    return { title: 'Program Not Found' };
  }
  return {
    title: `${program.title} | Bilaal Health Science College`,
    description: program.shortDescription,
  };
}

export async function generateStaticParams() {
  return programsData.map((p) => ({
    slug: p.slug,
  }));
}

export default async function ProgramDetailPage({ params }: ProgramDetailProps) {
  const resolvedParams = await params;
  const program = programsData.find((p) => p.slug === resolvedParams.slug);

  if (!program) {
    notFound();
  }

  return (
    <div className="space-y-16 py-12">
      {/* Header Banner */}
      <section className="bg-bilaal-navy text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={program.image}
            alt={program.title}
            fill
            className="object-cover opacity-25 mix-blend-overlay"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex items-center gap-2 text-xs text-emerald-300 font-heading font-semibold uppercase tracking-widest">
            <Link href="/programs" className="hover:underline">
              Programs
            </Link>
            <span>/</span>
            <span>{program.title}</span>
          </div>

          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-white">
            {program.title}
          </h1>

          <p className="text-blue-100/90 text-base sm:text-xl max-w-3xl leading-relaxed">
            {program.shortDescription}
          </p>

          <div className="flex flex-wrap items-center gap-6 pt-4 text-xs font-medium text-blue-200">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-bilaal-secondary" />
              <span>Duration: {program.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-emerald-400" />
              <span>Award: {program.qualification}</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-bilaal-secondary" />
              <span>Campus: Garowe, Puntland, Somalia</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Full Details */}
          <div className="lg:col-span-8 space-y-12">
            {/* Overview */}
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-gray-100 shadow-soft space-y-4">
              <h2 className="font-heading font-bold text-2xl text-bilaal-dark border-b border-gray-100 pb-3">
                Program Overview
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {program.fullDescription}
              </p>
            </div>

            {/* Curriculum Breakdown */}
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-gray-100 shadow-soft space-y-6">
              <div className="flex items-center gap-3">
                <BookOpen className="w-6 h-6 text-bilaal-primary" />
                <h2 className="font-heading font-bold text-2xl text-bilaal-dark">
                  Program Curriculum Structure
                </h2>
              </div>

              <div className="space-y-6">
                {program.curriculum.map((yr, idx) => (
                  <div
                    key={idx}
                    className="bg-bilaal-light/60 p-6 rounded-2xl border border-bilaal-secondary/20 space-y-3"
                  >
                    <h3 className="font-heading font-bold text-base text-bilaal-primary">
                      {yr.year}
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-700">
                      {yr.modules.map((mod, mIdx) => (
                        <li key={mIdx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-bilaal-accent shrink-0" />
                          <span>{mod}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Learning Outcomes */}
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-gray-100 shadow-soft space-y-4">
              <h2 className="font-heading font-bold text-2xl text-bilaal-dark border-b border-gray-100 pb-3">
                Learning Outcomes & Key Competencies
              </h2>
              <ul className="space-y-3 text-sm text-gray-700">
                {program.learningOutcomes.map((outcome, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-bilaal-accent shrink-0 mt-0.5" />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Clinical Practice */}
            <div className="bg-emerald-50/70 p-8 rounded-3xl border border-emerald-200/80 space-y-3">
              <div className="flex items-center gap-2 text-emerald-900 font-heading font-bold text-lg">
                <Stethoscope className="w-5 h-5 text-bilaal-accent" />
                <span>Clinical & Practical Internship</span>
              </div>
              <p className="text-emerald-900 text-sm leading-relaxed">
                {program.clinicalPractice}
              </p>
            </div>
          </div>

          {/* Right Column: Entry Requirements & Quick Apply Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            {/* Entry Requirements Card */}
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-soft space-y-6">
              <h3 className="font-heading font-bold text-xl text-bilaal-dark border-b border-gray-100 pb-3">
                Entry Requirements
              </h3>
              <ul className="space-y-3 text-xs text-gray-600">
                {program.entryRequirements.map((req, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-bilaal-primary shrink-0 mt-0.5" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Career Opportunities Card */}
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-soft space-y-4">
              <div className="flex items-center gap-2 font-heading font-bold text-xl text-bilaal-dark">
                <Briefcase className="w-5 h-5 text-bilaal-secondary" />
                <span>Career Paths</span>
              </div>
              <ul className="space-y-2 text-xs text-gray-700 list-disc pl-4">
                {program.careerOpportunities.map((op, idx) => (
                  <li key={idx}>{op}</li>
                ))}
              </ul>
            </div>

            {/* CTA Box */}
            <div className="bg-gradient-to-br from-bilaal-primary to-bilaal-secondary p-8 rounded-3xl text-white space-y-4 shadow-card text-center">
              <h3 className="font-heading font-bold text-xl">Ready to Enroll?</h3>
              <p className="text-xs text-blue-100">
                Submit your application online to secure your place for the upcoming semester at Garowe Campus.
              </p>
              <Link
                href="/apply"
                className="w-full inline-flex items-center justify-center gap-2 bg-bilaal-accent hover:bg-emerald-700 text-white font-heading font-bold text-sm py-3.5 rounded-full shadow transition-all"
              >
                <GraduationCap className="w-5 h-5" />
                <span>Apply for {program.title}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
