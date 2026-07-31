import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { CheckCircle2, FileText, Calendar, HelpCircle, GraduationCap, ArrowRight, ShieldCheck } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admissions Requirements & Application Process',
  description:
    'Complete guide to enrolling at Bilaal Health Science College in Garowe, Puntland, Somalia. View entry requirements, required documents, application steps, and FAQs.',
};

export default function AdmissionsPage() {
  const steps = [
    {
      num: '01',
      title: 'Submit Online Application',
      description: 'Fill out the online application form with your personal details, choice of diploma program, and high school academic background.',
    },
    {
      num: '02',
      title: 'Submit Required Documents',
      description: 'Bring or upload copies of your Secondary School Certificate (Form 4), Somali National ID or Birth Certificate, and 4 passport photographs.',
    },
    {
      num: '03',
      title: 'Take Entrance Assessment',
      description: 'Sit for the college entrance assessment covering basic science concepts (Biology/Chemistry) and general English proficiency.',
    },
    {
      num: '04',
      title: 'Official Enrollment & Registration',
      description: 'Upon selection, receive your admission offer letter, complete registration fee payment, and attend new student orientation in Garowe.',
    },
  ];

  const requiredDocuments = [
    'Original Secondary School Leaving Certificate (Form 4) & Official Transcripts',
    'Passing Grades in Science Subjects (Biology, Chemistry & English)',
    'Valid Somali National ID Card or Birth Certificate Copy',
    'Four (4) Passport-sized Photographs with white background',
    'Medical Fitness Certificate from a recognized regional hospital',
    'Duly Completed Admission Application Form',
  ];

  const faqs = [
    {
      q: 'What programs are offered at Bilaal Health Science College?',
      a: 'We offer five accredited 3-year Diploma programs: Diploma in Pharmacy, Diploma in Nursing, Diploma in Midwifery, Diploma in Nutrition, and Diploma in Public Health.',
    },
    {
      q: 'Where is the college located?',
      a: 'Bilaal Health Science College is located in Garowe, Puntland State of Somalia.',
    },
    {
      q: 'When do academic intakes start?',
      a: 'We operate two primary academic intakes per year: the Fall Intake (September) and the Spring Intake (March).',
    },
    {
      q: 'Are clinical rotations guaranteed?',
      a: 'Yes, 100% of enrolled students undergo mandatory supervised clinical rotations in Garowe general hospitals, regional health centers, and pharmacy compounding units.',
    },
    {
      q: 'How can I contact the Admissions Desk directly?',
      a: 'You can call us directly on +252 90 781 4063, +252 90 756 0281, or +252 90 683 7192, or email bilaalhealthsciencecollege@gmail.com.',
    },
  ];

  return (
    <div className="space-y-16 py-12">
      {/* Header Banner */}
      <section className="bg-bilaal-navy text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.png"
            alt="Admissions"
            fill
            className="object-cover opacity-20 mix-blend-overlay"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="inline-flex items-center gap-2 bg-white/10 text-emerald-300 text-xs font-heading font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full border border-white/20">
            Enrollment Guide
          </span>
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-white">
            Admissions at Bilaal Health
          </h1>
          <p className="text-blue-100/90 text-base sm:text-lg max-w-2xl mx-auto">
            Clear, accessible admission requirements for high school graduates in Garowe, Puntland, Somalia.
          </p>
        </div>
      </section>

      {/* Application Process Steps */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeader
          badge="Four Simple Steps"
          title="The Application Process"
          subtitle="Follow these simple steps to complete your enrollment at Bilaal Health Science College."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((st, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-3xl border border-gray-100 shadow-soft space-y-4 relative flex flex-col justify-between"
            >
              <div className="space-y-4">
                <span className="font-heading font-extrabold text-4xl text-bilaal-secondary/40 block">
                  {st.num}
                </span>
                <h3 className="font-heading font-bold text-xl text-bilaal-dark">
                  {st.title}
                </h3>
                <p className="text-gray-600 text-xs leading-relaxed">
                  {st.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Document Checklist & Criteria */}
      <section className="bg-white py-16 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <SectionHeader
                badge="Document Verification"
                title="Required Admission Documents"
                centered={false}
              />
              <p className="text-gray-600 text-sm leading-relaxed">
                Applicants must present official documentation to verify identity and academic eligibility prior to final registration.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {requiredDocuments.map((doc, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 bg-[#F5F9FD] p-4 rounded-2xl border border-bilaal-secondary/15 text-xs font-medium text-gray-700"
                  >
                    <CheckCircle2 className="w-4 h-4 text-bilaal-accent shrink-0 mt-0.5" />
                    <span>{doc}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 bg-gradient-to-br from-bilaal-primary to-bilaal-secondary text-white p-8 sm:p-10 rounded-3xl shadow-card space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center border border-white/20">
                <GraduationCap className="w-7 h-7 text-emerald-300" />
              </div>
              <h3 className="font-heading font-extrabold text-2xl">Start Your Online Application Now</h3>
              <p className="text-xs text-blue-100 leading-relaxed">
                Our online application takes less than 5 minutes to complete. Begin your journey toward a rewarding career in healthcare.
              </p>
              <Link
                href="/apply"
                className="w-full inline-flex items-center justify-center gap-2 bg-bilaal-accent hover:bg-emerald-700 text-white font-heading font-bold text-sm py-3.5 rounded-full shadow transition-all"
              >
                <span>Go to Online Application Form</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <SectionHeader
          badge="Got Questions?"
          title="Frequently Asked Questions"
          subtitle="Find answers to common inquiries about tuition, enrollment criteria, and campus life in Garowe."
        />

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl border border-gray-100 shadow-soft space-y-2"
            >
              <h3 className="font-heading font-bold text-base text-bilaal-dark flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-bilaal-primary shrink-0" />
                <span>{faq.q}</span>
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed pl-6">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
