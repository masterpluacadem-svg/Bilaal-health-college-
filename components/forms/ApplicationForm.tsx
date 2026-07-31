'use client';

import React, { useState } from 'react';
import { submitApplication, ApplicationSubmission } from '@/lib/supabase';
import { CheckCircle2, AlertCircle, ArrowRight, ArrowLeft, Send, GraduationCap } from 'lucide-react';

export const ApplicationForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [successData, setSuccessData] = useState<any>(null);
  const [errorMessage, setErrorMessage] = useState('');

  const [formData, setFormData] = useState<ApplicationSubmission>({
    full_name: '',
    email: '',
    phone: '',
    gender: 'Female',
    date_of_birth: '',
    program_applied: 'Diploma in Nursing',
    high_school_name: '',
    completion_year: '2025',
    address_city: 'Garowe',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      if (!formData.full_name || !formData.phone || !formData.date_of_birth) {
        setErrorMessage('Please fill in all required personal information fields.');
        return;
      }
    }
    if (step === 2) {
      if (!formData.high_school_name || !formData.completion_year) {
        setErrorMessage('Please complete your academic background details.');
        return;
      }
    }
    setErrorMessage('');
    setStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setErrorMessage('');
    setStep((prev) => prev - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');

    const res = await submitApplication(formData);
    setLoading(false);

    if (res.success) {
      setSuccessData(res.data);
      const whatsappMessage = `Hello Bilaal Health College. I have submitted an online admission application:\n\n*Name:* ${formData.full_name}\n*Phone:* ${formData.phone}\n*Program:* ${formData.program_applied}\n*High School:* ${formData.high_school_name}\n*Completion Year:* ${formData.completion_year}\n*City:* ${formData.address_city}`;
      const whatsappUrl = `https://wa.me/252904819705?text=${encodeURIComponent(whatsappMessage)}`;
      window.open(whatsappUrl, '_blank');
    } else {
      setErrorMessage(res.error || 'Submission failed. Please check your connection and try again.');
    }
  };

  if (successData) {
    return (
      <div className="bg-white p-8 sm:p-12 rounded-3xl shadow-card border border-bilaal-light text-center space-y-6 max-w-2xl mx-auto">
        <div className="w-16 h-16 bg-emerald-100 text-bilaal-accent rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <div className="space-y-2">
          <h3 className="font-heading font-extrabold text-2xl text-bilaal-dark">
            Application Submitted Successfully!
          </h3>
          <p className="text-gray-600 text-sm">
            Thank you, <strong className="text-bilaal-primary">{formData.full_name}</strong>. Your application for the{' '}
            <strong className="text-bilaal-primary">{formData.program_applied}</strong> has been received by the Admissions Office in Garowe.
          </p>
        </div>

        <div className="bg-bilaal-light p-4 rounded-2xl text-left text-xs text-gray-700 space-y-1.5 border border-bilaal-secondary/20">
          <div><strong className="text-bilaal-primary">Application Ref Number:</strong> {successData.id}</div>
          <div><strong className="text-bilaal-primary">Applicant Phone:</strong> {formData.phone}</div>
          <div><strong className="text-bilaal-primary">Intake Location:</strong> Garowe Campus, Puntland</div>
        </div>

        <p className="text-xs text-gray-500">
          Our admissions desk will contact you via phone (+252) regarding entrance examination dates and document submission.
        </p>

        <button
          onClick={() => {
            setSuccessData(null);
            setStep(1);
          }}
          className="inline-flex items-center gap-2 bg-bilaal-primary text-white font-heading font-semibold px-6 py-2.5 rounded-full text-sm hover:bg-bilaal-secondary transition-colors"
        >
          Submit Another Application
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 sm:p-10 rounded-3xl shadow-card border border-gray-100 max-w-3xl mx-auto space-y-8">
      {/* Step Progress Indicators */}
      <div className="flex items-center justify-between border-b border-gray-100 pb-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-bilaal-light text-bilaal-primary font-heading font-bold flex items-center justify-center border border-bilaal-secondary/30">
            {step}
          </div>
          <div>
            <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
              Step {step} of 3
            </div>
            <div className="font-heading font-bold text-base text-bilaal-dark">
              {step === 1 && 'Personal Information'}
              {step === 2 && 'Academic History & Program'}
              {step === 3 && 'Confirmation & Submit'}
            </div>
          </div>
        </div>

        <div className="hidden sm:flex items-center space-x-2">
          <span className={`w-3 h-3 rounded-full ${step >= 1 ? 'bg-bilaal-primary' : 'bg-gray-200'}`} />
          <span className={`w-8 h-1 ${step >= 2 ? 'bg-bilaal-primary' : 'bg-gray-200'}`} />
          <span className={`w-3 h-3 rounded-full ${step >= 2 ? 'bg-bilaal-primary' : 'bg-gray-200'}`} />
          <span className={`w-8 h-1 ${step >= 3 ? 'bg-bilaal-primary' : 'bg-gray-200'}`} />
          <span className={`w-3 h-3 rounded-full ${step === 3 ? 'bg-bilaal-primary' : 'bg-gray-200'}`} />
        </div>
      </div>

      {errorMessage && (
        <div className="flex items-center gap-3 bg-red-50 text-red-700 p-4 rounded-xl text-sm border border-red-200">
          <AlertCircle className="w-5 h-5 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Step 1: Personal Information */}
      {step === 1 && (
        <form onSubmit={handleNext} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-xs font-heading font-bold uppercase tracking-wider text-gray-700">
                Full Name (Magaca Buuxa) *
              </label>
              <input
                type="text"
                name="full_name"
                required
                value={formData.full_name}
                onChange={handleChange}
                placeholder="e.g. Amina Mohamed Hassan"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-bilaal-primary focus:ring-2 focus:ring-bilaal-primary/20 outline-none transition-all text-sm"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-xs font-heading font-bold uppercase tracking-wider text-gray-700">
                Phone Number (Telfoonka) *
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="+252 90 XXX XXXX"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-bilaal-primary focus:ring-2 focus:ring-bilaal-primary/20 outline-none transition-all text-sm"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-xs font-heading font-bold uppercase tracking-wider text-gray-700">
                Email Address (Optional)
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="student@example.com"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-bilaal-primary focus:ring-2 focus:ring-bilaal-primary/20 outline-none transition-all text-sm"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-xs font-heading font-bold uppercase tracking-wider text-gray-700">
                Gender *
              </label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-bilaal-primary focus:ring-2 focus:ring-bilaal-primary/20 outline-none transition-all text-sm bg-white"
              >
                <option value="Female">Female</option>
                <option value="Male">Male</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-xs font-heading font-bold uppercase tracking-wider text-gray-700">
                Date of Birth *
              </label>
              <input
                type="date"
                name="date_of_birth"
                required
                value={formData.date_of_birth}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-bilaal-primary focus:ring-2 focus:ring-bilaal-primary/20 outline-none transition-all text-sm"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-xs font-heading font-bold uppercase tracking-wider text-gray-700">
                Current Resident City *
              </label>
              <input
                type="text"
                name="address_city"
                value={formData.address_city}
                onChange={handleChange}
                placeholder="e.g. Garowe, Bosaso, Qardho, Galkayo"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-bilaal-primary focus:ring-2 focus:ring-bilaal-primary/20 outline-none transition-all text-sm"
              />
            </div>
          </div>

          <div className="pt-4 flex justify-end">
            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-bilaal-primary text-white font-heading font-semibold px-8 py-3 rounded-full text-sm hover:bg-bilaal-secondary transition-all shadow-md"
            >
              <span>Continue to Next Step</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>
      )}

      {/* Step 2: Academic History & Diploma Selection */}
      {step === 2 && (
        <form onSubmit={handleNext} className="space-y-6">
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="block text-xs font-heading font-bold uppercase tracking-wider text-gray-700">
                Select Desired Diploma Program *
              </label>
              <select
                name="program_applied"
                value={formData.program_applied}
                onChange={handleChange}
                className="w-full px-4 py-3.5 rounded-xl border border-bilaal-primary focus:border-bilaal-primary focus:ring-2 focus:ring-bilaal-primary/20 outline-none transition-all text-base font-heading font-semibold text-bilaal-primary bg-bilaal-light/40"
              >
                <option value="Diploma in Pharmacy">Diploma in Pharmacy (2 Years - 3 Semesters)</option>
                <option value="Diploma in Nursing">Diploma in Nursing (2 Years - 3 Semesters)</option>
                <option value="Diploma in Midwifery">Diploma in Midwifery (2 Years - 3 Semesters)</option>
                <option value="Diploma in Nutrition">Diploma in Nutrition (2 Years - 3 Semesters)</option>
                <option value="Diploma in Public Health">Diploma in Public Health (2 Years - 3 Semesters)</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-xs font-heading font-bold uppercase tracking-wider text-gray-700">
                  Secondary High School Name *
                </label>
                <input
                  type="text"
                  name="high_school_name"
                  required
                  value={formData.high_school_name}
                  onChange={handleChange}
                  placeholder="e.g. Garowe Secondary School"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-bilaal-primary focus:ring-2 focus:ring-bilaal-primary/20 outline-none transition-all text-sm"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-heading font-bold uppercase tracking-wider text-gray-700">
                  Completion Year *
                </label>
                <select
                  name="completion_year"
                  value={formData.completion_year}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-bilaal-primary focus:ring-2 focus:ring-bilaal-primary/20 outline-none transition-all text-sm bg-white"
                >
                  <option value="2026">2026</option>
                  <option value="2025">2025</option>
                  <option value="2024">2024</option>
                  <option value="2023">2023</option>
                  <option value="2022 or earlier">2022 or earlier</option>
                </select>
              </div>
            </div>
          </div>

          <div className="pt-4 flex items-center justify-between">
            <button
              type="button"
              onClick={handleBack}
              className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 font-heading font-semibold px-6 py-3 rounded-full text-sm hover:bg-gray-200 transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </button>

            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-bilaal-primary text-white font-heading font-semibold px-8 py-3 rounded-full text-sm hover:bg-bilaal-secondary transition-all shadow-md"
            >
              <span>Review Application</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>
      )}

      {/* Step 3: Review & Submit */}
      {step === 3 && (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="bg-bilaal-light p-6 rounded-2xl border border-bilaal-secondary/20 space-y-4">
            <h4 className="font-heading font-bold text-lg text-bilaal-primary border-b border-bilaal-secondary/20 pb-2">
              Application Summary Verification
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-xs text-gray-500 block">Applicant Name:</span>
                <span className="font-bold text-gray-800">{formData.full_name}</span>
              </div>

              <div>
                <span className="text-xs text-gray-500 block">Phone Contact:</span>
                <span className="font-bold text-gray-800">{formData.phone}</span>
              </div>

              <div>
                <span className="text-xs text-gray-500 block">Target Program:</span>
                <span className="font-bold text-bilaal-primary">{formData.program_applied}</span>
              </div>

              <div>
                <span className="text-xs text-gray-500 block">High School Background:</span>
                <span className="font-bold text-gray-800">{formData.high_school_name} ({formData.completion_year})</span>
              </div>

              <div>
                <span className="text-xs text-gray-500 block">City / Campus Intake:</span>
                <span className="font-bold text-gray-800">{formData.address_city} (Garowe Campus)</span>
              </div>

              <div>
                <span className="text-xs text-gray-500 block">Gender & DOB:</span>
                <span className="font-bold text-gray-800">{formData.gender} • {formData.date_of_birth}</span>
              </div>
            </div>
          </div>

          <div className="text-xs text-gray-500 leading-relaxed bg-gray-50 p-4 rounded-xl border border-gray-200">
            By submitting this application form, I certify that all supplied academic and personal information is accurate and authentic. I agree to abide by Bilaal Health Science College guidelines.
          </div>

          <div className="pt-4 flex items-center justify-between">
            <button
              type="button"
              onClick={handleBack}
              disabled={loading}
              className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 font-heading font-semibold px-6 py-3 rounded-full text-sm hover:bg-gray-200 transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </button>

            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center gap-2 bg-bilaal-accent hover:bg-emerald-700 text-white font-heading font-bold px-10 py-3.5 rounded-full text-base transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              {loading ? (
                <span>Submitting Application...</span>
              ) : (
                <>
                  <GraduationCap className="w-5 h-5" />
                  <span>Confirm & Submit Application</span>
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
