import React from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ApplicationForm } from '@/components/forms/ApplicationForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Apply Online | Student Application Form',
  description:
    'Apply online for Diploma programs in Pharmacy, Nursing, Midwifery, Nutrition, and Public Health at Bilaal Health Science College in Garowe, Puntland, Somalia.',
};

export default function ApplyPage() {
  return (
    <div className="space-y-12 py-12">
      {/* Top Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Official Enrollment"
          title="Online Student Application Form"
          subtitle="Complete the multi-step form below to apply for admission to Bilaal Health Science College in Garowe, Puntland, Somalia."
        />
      </section>

      {/* Application Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ApplicationForm />
      </section>
    </div>
  );
}
