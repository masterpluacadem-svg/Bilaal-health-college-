import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { programsData } from '@/data/programsData';
import { newsData } from '@/data/newsData';
import { testimonialsData } from '@/data/testimonialsData';
import {
  GraduationCap,
  Stethoscope,
  Award,
  Users,
  Building2,
  BookOpen,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Microscope,
  Pill,
  HeartPulse,
  Apple,
  Activity,
  UserCheck,
  Heart,
  Calendar,
  Sparkles,
  MapPin,
  Clock,
  Phone
} from 'lucide-react';

export default function HomePage() {
  // Icon mapping for programs
  const getProgramIcon = (iconName: string) => {
    switch (iconName) {
      case 'Pill':
        return <Pill className="w-7 h-7 text-bilaal-primary" />;
      case 'Stethoscope':
        return <Stethoscope className="w-7 h-7 text-bilaal-primary" />;
      case 'HeartPulse':
        return <HeartPulse className="w-7 h-7 text-bilaal-primary" />;
      case 'Apple':
        return <Apple className="w-7 h-7 text-bilaal-primary" />;
      case 'Activity':
        return <Activity className="w-7 h-7 text-bilaal-primary" />;
      default:
        return <Stethoscope className="w-7 h-7 text-bilaal-primary" />;
    }
  };

  const whyChooseItems = [
    {
      icon: <Users className="w-8 h-8 text-bilaal-primary" />,
      title: "Experienced Lecturers",
      description: "Learn directly from senior medical consultants, clinical specialists, and experienced health educators in Somalia."
    },
    {
      icon: <Microscope className="w-8 h-8 text-bilaal-primary" />,
      title: "Practical Skills Laboratory",
      description: "State-of-the-art simulation labs equipped with clinical models, diagnostic instruments, and pharmacy compounding units."
    },
    {
      icon: <Award className="w-8 h-8 text-bilaal-primary" />,
      title: "Affordable Education",
      description: "High-standard healthcare education made accessible with flexible payment options for Puntland students."
    },
    {
      icon: <Stethoscope className="w-8 h-8 text-bilaal-primary" />,
      title: "Clinical Training",
      description: "Direct clinical rotations in Garowe general hospitals, regional health centers, and maternity suites."
    },
    {
      icon: <UserCheck className="w-8 h-8 text-bilaal-primary" />,
      title: "Career Preparation",
      description: "Comprehensive licensing examination reviews, mentorship, and immediate hospital employment pathways."
    },
    {
      icon: <Heart className="w-8 h-8 text-bilaal-primary" />,
      title: "Community Service",
      description: "Active student participation in rural health outreach, vaccination campaigns, and public hygiene initiatives."
    }
  ];

  const campusFacilities = [
    {
      title: "Skills Laboratory",
      description: "High-fidelity patient simulation beds, clinical manikins, and emergency triage stations.",
      image: "/images/skills-lab.png"
    },
    {
      title: "Modern Classrooms",
      description: "Air-conditioned lecture rooms equipped with digital projection systems and ergonomic seating.",
      image: "/images/hero.png"
    },
    {
      title: "Library & Digital Resources",
      description: "Extensive physical collection of medical textbooks, journals, and internet research terminals.",
      image: "/images/pharmacy.png"
    },
    {
      title: "Student Learning Environment",
      description: "Calm, welcoming, and organized campus atmosphere designed for high academic focus in Garowe.",
      image: "/images/campus.png"
    }
  ];

  return (
    <div className="space-y-20 lg:space-y-28 pb-12">
      {/* ==================================================== */}
      {/* SECTION 1: HERO                                      */}
      {/* ==================================================== */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-bilaal-navy text-white pt-24 pb-16">
        {/* Background Healthcare Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.png"
            alt="Bilaal Health Science College Students in Lab"
            fill
            priority
            className="object-cover object-center opacity-30 mix-blend-overlay scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F2E5A] via-[#0F2E5A]/90 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F2E5A] via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
          <div className="max-w-3xl space-y-8">
            {/* Top Pill */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-xs sm:text-sm font-heading font-medium text-blue-100">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>Garowe, Puntland, Somalia • Official Healthcare College</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl leading-[1.15] text-white tracking-tight">
              Shape Your Future in <span className="text-bilaal-secondary underline decoration-emerald-500 underline-offset-8">Healthcare</span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-xl text-blue-100/90 leading-relaxed font-normal max-w-2xl">
              Bilaal Health Science College prepares competent healthcare professionals through quality education, practical training, and academic excellence in Garowe, Puntland, Somalia.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="/apply"
                className="inline-flex items-center justify-center gap-2 bg-bilaal-accent hover:bg-emerald-700 text-white font-heading font-bold text-base px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
              >
                <GraduationCap className="w-5 h-5" />
                <span>Apply Now</span>
              </Link>

              <Link
                href="/programs"
                className="inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 text-white border border-white/30 font-heading font-semibold text-base px-8 py-4 rounded-full backdrop-blur-md transition-all"
              >
                <span>Explore Programs</span>
                <ArrowRight className="w-5 h-5 text-bilaal-secondary" />
              </Link>
            </div>

            {/* Quick Accreditation Badge */}
            <div className="pt-6 flex items-center gap-6 text-xs text-blue-200/80 border-t border-white/10 max-w-lg">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Ministry Accredited</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>100% Practical Focus</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-bilaal-secondary" />
                <span>Garowe Campus</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================== */}
      {/* SECTION 2: QUICK STATISTICS                           */}
      {/* ==================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 sm:-mt-24 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 bg-white p-6 sm:p-10 rounded-3xl shadow-card border border-gray-100">
          <div className="text-center p-4 rounded-2xl bg-bilaal-light/50 border border-bilaal-secondary/10 space-y-1">
            <div className="font-heading font-extrabold text-3xl sm:text-4xl text-bilaal-primary">
              5
            </div>
            <div className="font-heading font-bold text-xs sm:text-sm text-bilaal-dark uppercase tracking-wider">
              Accredited Programs
            </div>
            <div className="text-xs text-gray-500">Pharmacy, Nursing, Midwifery...</div>
          </div>

          <div className="text-center p-4 rounded-2xl bg-bilaal-light/50 border border-bilaal-secondary/10 space-y-1">
            <div className="font-heading font-extrabold text-3xl sm:text-4xl text-bilaal-primary">
              100%
            </div>
            <div className="font-heading font-bold text-xs sm:text-sm text-bilaal-dark uppercase tracking-wider">
              Qualified Lecturers
            </div>
            <div className="text-xs text-gray-500">Medical specialists & doctors</div>
          </div>

          <div className="text-center p-4 rounded-2xl bg-bilaal-light/50 border border-bilaal-secondary/10 space-y-1">
            <div className="font-heading font-extrabold text-3xl sm:text-4xl text-bilaal-accent">
              100%
            </div>
            <div className="font-heading font-bold text-xs sm:text-sm text-bilaal-dark uppercase tracking-wider">
              Practical Training
            </div>
            <div className="text-xs text-gray-500">Hands-on lab & clinical work</div>
          </div>

          <div className="text-center p-4 rounded-2xl bg-bilaal-light/50 border border-bilaal-secondary/10 space-y-1">
            <div className="font-heading font-extrabold text-3xl sm:text-4xl text-bilaal-primary">
              1,200+
            </div>
            <div className="font-heading font-bold text-xs sm:text-sm text-bilaal-dark uppercase tracking-wider">
              Graduates
            </div>
            <div className="text-xs text-gray-500">Serving across Somalia</div>
          </div>
        </div>
      </section>

      {/* ==================================================== */}
      {/* SECTION 3: WHY CHOOSE BILAAL                         */}
      {/* ==================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeader
          badge="Institutional Strengths"
          title="Why Choose Bilaal Health Science College"
          subtitle="We combine academic rigour with modern clinical training to nurture confident, highly skilled health professionals for Somalia."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseItems.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl shadow-soft hover:shadow-card-hover border border-gray-100 hover:border-bilaal-secondary/30 transition-all duration-300 space-y-4 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-bilaal-light flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-bilaal-secondary/20">
                {item.icon}
              </div>
              <h3 className="font-heading font-bold text-xl text-bilaal-dark group-hover:text-bilaal-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ==================================================== */}
      {/* SECTION 4: DIPLOMA PROGRAMS                           */}
      {/* ==================================================== */}
      <section className="bg-white py-16 sm:py-24 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeader
            badge="Academic Programs"
            title="Our Offered Diploma Programs"
            subtitle="Comprehensive 3-year diploma programs tailored to modern healthcare requirements in Puntland and international standards."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programsData.map((prog) => (
              <div
                key={prog.id}
                className="bg-[#F5F9FD] rounded-3xl border border-bilaal-secondary/15 p-8 flex flex-col justify-between hover:shadow-card-hover transition-all duration-300 group"
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-sm border border-bilaal-secondary/20">
                      {getProgramIcon(prog.iconName)}
                    </div>
                    <span className="text-xs font-heading font-semibold text-bilaal-primary bg-white px-3 py-1 rounded-full border border-bilaal-secondary/20">
                      {prog.duration}
                    </span>
                  </div>

                  <h3 className="font-heading font-extrabold text-2xl text-bilaal-dark group-hover:text-bilaal-primary transition-colors">
                    {prog.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                    {prog.shortDescription}
                  </p>
                </div>

                <div className="pt-8 border-t border-gray-200/60 mt-6 flex items-center justify-between">
                  <span className="text-xs text-gray-500 font-medium">Garowe Campus</span>
                  <Link
                    href={`/programs/${prog.slug}`}
                    className="inline-flex items-center gap-1.5 text-bilaal-primary font-heading font-bold text-sm hover:text-bilaal-secondary group-hover:translate-x-1 transition-all"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <Link
              href="/programs"
              className="inline-flex items-center gap-2 bg-bilaal-primary text-white font-heading font-semibold text-sm px-8 py-3.5 rounded-full shadow hover:bg-bilaal-secondary transition-all"
            >
              <span>View All Program Curriculums</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ==================================================== */}
      {/* SECTION 5: ABOUT COLLEGE                             */}
      {/* ==================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-bilaal-navy to-[#1E5AA8] rounded-4xl p-8 sm:p-14 text-white shadow-card overflow-hidden relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-2 bg-white/10 text-emerald-300 text-xs font-heading font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-white/20">
                About Bilaal Health Science College
              </span>

              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
                Dedicated to Raising the Standard of Healthcare Education in Somalia
              </h2>

              <p className="text-blue-100/90 text-sm sm:text-base leading-relaxed">
                Established in Garowe, Puntland, Bilaal Health Science College is a leading private health institution dedicated to mitigating regional healthcare provider shortages by producing world-class nurses, pharmacists, midwives, nutritionists, and public health experts.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-white/10 p-4 rounded-2xl border border-white/10 space-y-1">
                  <h4 className="font-heading font-bold text-base text-emerald-300">Our Mission</h4>
                  <p className="text-xs text-blue-100/80 leading-relaxed">
                    To deliver exemplary health education, evidence-based clinical skills, and compassionate community service.
                  </p>
                </div>

                <div className="bg-white/10 p-4 rounded-2xl border border-white/10 space-y-1">
                  <h4 className="font-heading font-bold text-base text-emerald-300">Our Vision</h4>
                  <p className="text-xs text-blue-100/80 leading-relaxed">
                    To be the premier health science college in East Africa recognized for medical innovation and student success.
                  </p>
                </div>
              </div>

              <div className="pt-4 flex items-center gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 bg-white text-bilaal-primary font-heading font-bold text-sm px-6 py-3 rounded-full hover:bg-blue-50 transition-colors shadow"
                >
                  <span>Read Full History & Leadership</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative h-80 sm:h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20">
              <Image
                src="/images/campus.png"
                alt="Garowe Campus Building"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================== */}
      {/* SECTION 6: CAMPUS FACILITIES                         */}
      {/* ==================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeader
          badge="Learning Environment"
          title="Modern Campus & Clinical Facilities"
          subtitle="Equipped with advanced tools and quiet study areas designed for optimal practical learning."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {campusFacilities.map((facility, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-soft hover:shadow-card transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={facility.image}
                  alt={facility.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 space-y-2 flex-grow">
                <h3 className="font-heading font-bold text-lg text-bilaal-dark group-hover:text-bilaal-primary transition-colors">
                  {facility.title}
                </h3>
                <p className="text-gray-600 text-xs leading-relaxed">
                  {facility.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ==================================================== */}
      {/* SECTION 7: STUDENT TESTIMONIALS                       */}
      {/* ==================================================== */}
      <section className="bg-bilaal-light py-16 sm:py-24 border-y border-bilaal-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeader
            badge="Student Voice"
            title="What Our Students & Alumni Say"
            subtitle="Hear from graduates who are now actively contributing to healthcare systems across Puntland."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonialsData.map((item) => (
              <div
                key={item.id}
                className="bg-white p-8 rounded-3xl shadow-soft border border-gray-100 flex flex-col justify-between space-y-6"
              >
                <p className="text-gray-700 text-sm leading-relaxed italic">
                  "{item.quote}"
                </p>

                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div
                    className={`w-11 h-11 rounded-full ${item.avatarBg} text-white font-heading font-bold text-sm flex items-center justify-center shrink-0 shadow`}
                  >
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-sm text-bilaal-dark">
                      {item.name}
                    </h4>
                    <p className="text-xs text-bilaal-primary font-medium">
                      {item.role} • {item.program}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================== */}
      {/* SECTION 8: LATEST NEWS                               */}
      {/* ==================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeader
          badge="College Updates"
          title="Latest News & Campus Events"
          subtitle="Stay informed about admissions deadlines, health campaigns, and clinical workshops in Garowe."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {newsData.map((news) => (
            <div
              key={news.id}
              className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-soft hover:shadow-card transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="relative h-44 w-full overflow-hidden">
                <Image
                  src={news.image}
                  alt={news.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-bilaal-primary text-white text-[10px] font-heading font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow">
                  {news.category}
                </span>
              </div>

              <div className="p-6 space-y-3 flex-grow flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-1.5 text-[11px] text-gray-400 font-medium">
                    <Calendar className="w-3.5 h-3.5 text-bilaal-secondary" />
                    <span>{news.date}</span>
                  </div>
                  <h3 className="font-heading font-bold text-base text-bilaal-dark group-hover:text-bilaal-primary transition-colors line-clamp-2">
                    {news.title}
                  </h3>
                  <p className="text-gray-600 text-xs leading-relaxed line-clamp-3">
                    {news.summary}
                  </p>
                </div>

                <Link
                  href="/news"
                  className="inline-flex items-center gap-1 text-xs font-heading font-bold text-bilaal-primary hover:text-bilaal-secondary pt-2"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ==================================================== */}
      {/* SECTION 9: CALL TO ACTION                            */}
      {/* ==================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#1E5AA8] via-[#2E8BCB] to-[#1E5AA8] rounded-4xl p-10 sm:p-16 text-white text-center space-y-8 shadow-card relative overflow-hidden">
          <div className="max-w-3xl mx-auto space-y-4 relative z-10">
            <span className="inline-flex items-center gap-2 bg-white/10 text-emerald-300 text-xs font-heading font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border border-white/20">
              Begin Your Journey Today
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
              Ready to Begin Your Healthcare Career?
            </h2>
            <p className="text-blue-100 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Take the first step toward becoming a qualified nurse, pharmacist, midwife, nutritionist, or public health practitioner in Garowe, Puntland, Somalia.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/apply"
                className="inline-flex items-center gap-2 bg-bilaal-accent hover:bg-emerald-700 text-white font-heading font-bold text-base px-10 py-4 rounded-full shadow-lg transition-all transform hover:-translate-y-0.5"
              >
                <GraduationCap className="w-5 h-5" />
                <span>Apply Online Today</span>
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-bilaal-primary hover:bg-blue-50 font-heading font-semibold text-base px-8 py-4 rounded-full transition-all shadow"
              >
                <Phone className="w-5 h-5 text-bilaal-accent" />
                <span>Contact Admissions Office</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
