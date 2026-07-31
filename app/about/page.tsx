import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ShieldCheck, Target, Eye, Heart, Award, CheckCircle2, GraduationCap, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About College | History, Mission & Leadership',
  description:
    'Learn about Bilaal Health Science College (كلية بلال للعلوم الصحية) in Garowe, Puntland, Somalia. Discover our history, mission, vision, core values, and official accreditation.',
};

export default function AboutPage() {
  const coreValues = [
    {
      title: 'Academic Excellence',
      description: 'Maintaining rigorous medical education standards through continuous practical assessment and updated health curriculums.',
      icon: <Award className="w-6 h-6 text-bilaal-primary" />,
    },
    {
      title: 'Clinical Integrity',
      description: 'Fostering strict medical ethics, patient confidentiality, and professional accountability across all health disciplines.',
      icon: <ShieldCheck className="w-6 h-6 text-bilaal-primary" />,
    },
    {
      title: 'Compassion & Respect',
      description: 'Promoting human-centered care, dignity, and empathy for patients in hospital wards and rural health centers.',
      icon: <Heart className="w-6 h-6 text-bilaal-primary" />,
    },
    {
      title: 'Community Commitment',
      description: 'Actively responding to health challenges in Garowe and Puntland through vaccination drives and community health education.',
      icon: <CheckCircle2 className="w-6 h-6 text-bilaal-primary" />,
    },
  ];

  return (
    <div className="space-y-16 sm:space-y-24 py-12">
      {/* Header Banner */}
      <section className="bg-bilaal-navy text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/students-welcome-sign.png"
            alt="Campus"
            fill
            className="object-cover opacity-20 mix-blend-overlay"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="w-24 h-24 mx-auto relative rounded-full bg-white p-1 shadow-xl ring-4 ring-white/30 mb-4">
            <Image
              src="/images/logo.png"
              alt="Bilaal Health Science College Official Emblem"
              fill
              className="object-contain p-1 rounded-full"
            />
          </div>
          <span className="inline-flex items-center gap-2 bg-white/10 text-emerald-300 text-xs font-heading font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full border border-white/20">
            About Institution
          </span>
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-white">
            Bilaal Health Science College
          </h1>
          <p className="text-emerald-300 font-heading font-semibold text-lg">
            كلية بلال للعلوم الصحية
          </p>
          <p className="text-blue-100/90 text-base max-w-2xl mx-auto">
            Garowe • Puntland • Somalia
          </p>
        </div>
      </section>

      {/* History & Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <SectionHeader
              badge="Our History"
              title="Building a Healthy Nation Through Competent Care"
              centered={false}
            />

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Bilaal Health Science College (كلية بلال للعلوم الصحية) was established in Garowe, the administrative capital of Puntland State of Somalia, with a clear mandate: to bridge the gap in qualified healthcare personnel through world-class practical training and academic excellence.
            </p>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Recognizing that resilient health systems depend on well-trained nurses, pharmacists, midwives, nutrition specialists, and public health officers, our college has built modern skills simulation laboratories and established clinical training partnerships with major regional hospitals.
            </p>

            <div className="bg-bilaal-light p-6 rounded-2xl border border-bilaal-secondary/20 space-y-3 flex items-start gap-4">
              <div className="w-16 h-16 relative shrink-0 rounded-full bg-white p-1 shadow">
                <Image
                  src="/images/logo.png"
                  alt="Official Seal"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="space-y-1">
                <h4 className="font-heading font-bold text-base text-bilaal-primary">
                  Official Institutional Accreditation
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Bilaal Health Science College operates under full accreditation guidelines, delivering standardized curriculums aligned with national health policies and WHO recommendations.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative h-96 sm:h-[450px] rounded-3xl overflow-hidden shadow-card border-4 border-white">
            <Image
              src="/images/group-outdoors.jpg"
              alt="Bilaal Health Science Students"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision Cards */}
      <section className="bg-white py-16 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#F5F9FD] p-8 sm:p-10 rounded-3xl border border-bilaal-secondary/20 space-y-4 shadow-soft">
              <div className="w-12 h-12 rounded-2xl bg-bilaal-primary text-white flex items-center justify-center shadow">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-2xl text-bilaal-dark">Our Mission</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                To educate and mentor competent, ethical, and compassionate health science graduates through innovative teaching methods, practical clinical skill mastery, and community health engagement in Garowe and beyond.
              </p>
            </div>

            <div className="bg-[#F5F9FD] p-8 sm:p-10 rounded-3xl border border-bilaal-secondary/20 space-y-4 shadow-soft">
              <div className="w-12 h-12 rounded-2xl bg-bilaal-secondary text-white flex items-center justify-center shadow">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-2xl text-bilaal-dark">Our Vision</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                To be the leading center of academic excellence and clinical skill training in health sciences across East Africa, producing transformative healthcare leaders who elevate population health standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeader
          badge="Guiding Principles"
          title="Our Core Values"
          subtitle="The foundational values that shape our campus culture, teaching philosophy, and student conduct."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreValues.map((value, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-3xl border border-gray-100 shadow-soft space-y-3"
            >
              <div className="w-12 h-12 rounded-xl bg-bilaal-light flex items-center justify-center border border-bilaal-secondary/20">
                {value.icon}
              </div>
              <h4 className="font-heading font-bold text-lg text-bilaal-dark">{value.title}</h4>
              <p className="text-gray-600 text-xs leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Principal / Dean Message */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-bilaal-navy text-white rounded-3xl p-8 sm:p-12 shadow-card grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-4 relative h-64 sm:h-80 rounded-2xl overflow-hidden border-2 border-white/20">
            <Image
              src="/images/instructor-presentation.jpg"
              alt="Lecturer at Bilaal Health Science College"
              fill
              className="object-cover"
            />
          </div>
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs font-heading font-bold uppercase tracking-widest text-emerald-400">
              Message From College Principal
            </span>
            <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white">
              "Healthcare is a calling rooted in skill, knowledge, and compassion."
            </h3>
            <p className="text-blue-100/90 text-sm leading-relaxed">
              At Bilaal Health Science College, we take immense pride in preparing the next generation of healthcare leaders. Our commitment is to ensure that every student who walks through our doors leaves with solid clinical skills, strong moral character, and a heart ready to serve. We invite you to join our academic family in Garowe.
            </p>
            <div className="pt-2 border-t border-white/10 text-xs text-blue-200">
              <strong className="text-white block text-sm font-heading">Office of Academic Leadership</strong>
              Bilaal Health Science College • Garowe, Puntland, Somalia
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h3 className="font-heading font-bold text-2xl text-bilaal-dark">
          Explore Our Diploma Offerings Today
        </h3>
        <Link
          href="/programs"
          className="inline-flex items-center gap-2 bg-bilaal-primary text-white font-heading font-semibold px-8 py-3.5 rounded-full shadow hover:bg-bilaal-secondary transition-all"
        >
          <span>View Diploma Programs</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}
