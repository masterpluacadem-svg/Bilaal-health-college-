'use client';

import React, { useState } from 'react';
import { submitContactForm, ContactSubmission } from '@/lib/supabase';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const [formData, setFormData] = useState<ContactSubmission>({
    full_name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.full_name || !formData.phone || !formData.message) {
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    setLoading(true);
    setErrorMessage('');

    const res = await submitContactForm(formData);
    setLoading(false);

    if (res.success) {
      setSuccess(true);
      setFormData({
        full_name: '',
        email: '',
        phone: '',
        subject: 'General Inquiry',
        message: '',
      });
    } else {
      setErrorMessage(res.error || 'Failed to send message. Please try again.');
    }
  };

  if (success) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 p-8 rounded-3xl text-center space-y-4">
        <div className="w-12 h-12 bg-emerald-100 text-bilaal-accent rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="font-heading font-bold text-xl text-emerald-900">
          Message Sent Successfully!
        </h3>
        <p className="text-sm text-emerald-800">
          Thank you for reaching out to Bilaal Health Science College. Our administrative team in Garowe will get back to you shortly.
        </p>
        <button
          onClick={() => setSuccess(false)}
          className="inline-flex items-center text-xs font-heading font-semibold text-bilaal-primary underline"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 sm:p-8 rounded-3xl shadow-card border border-gray-100 space-y-6">
      <h3 className="font-heading font-bold text-xl text-bilaal-dark">
        Send Us a Message
      </h3>

      {errorMessage && (
        <div className="flex items-center gap-2 bg-red-50 text-red-700 p-3 rounded-xl text-xs border border-red-200">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      <div className="space-y-4">
        <div className="space-y-1.5">
          <label className="block text-xs font-heading font-semibold text-gray-700 uppercase tracking-wider">
            Your Full Name *
          </label>
          <input
            type="text"
            name="full_name"
            required
            value={formData.full_name}
            onChange={handleChange}
            placeholder="e.g. Mohamud Ali Said"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-bilaal-primary focus:ring-2 focus:ring-bilaal-primary/20 outline-none text-sm"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="block text-xs font-heading font-semibold text-gray-700 uppercase tracking-wider">
              Phone Number *
            </label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="+252 90 XXX XXXX"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-bilaal-primary focus:ring-2 focus:ring-bilaal-primary/20 outline-none text-sm"
            />
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-heading font-semibold text-gray-700 uppercase tracking-wider">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="name@example.com"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-bilaal-primary focus:ring-2 focus:ring-bilaal-primary/20 outline-none text-sm"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="block text-xs font-heading font-semibold text-gray-700 uppercase tracking-wider">
            Inquiry Subject
          </label>
          <select
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-bilaal-primary focus:ring-2 focus:ring-bilaal-primary/20 outline-none text-sm bg-white"
          >
            <option value="General Inquiry">General Inquiry</option>
            <option value="Diploma Program Questions">Diploma Program Questions</option>
            <option value="Admissions & Tuition Fees">Admissions & Tuition Fees</option>
            <option value="Clinical Rotations & Partnerships">Clinical Rotations & Partnerships</option>
          </select>
        </div>

        <div className="space-y-1.5">
          <label className="block text-xs font-heading font-semibold text-gray-700 uppercase tracking-wider">
            Message Details *
          </label>
          <textarea
            name="message"
            rows={4}
            required
            value={formData.message}
            onChange={handleChange}
            placeholder="How can our administration assist you?"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-bilaal-primary focus:ring-2 focus:ring-bilaal-primary/20 outline-none text-sm resize-none"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full inline-flex items-center justify-center gap-2 bg-bilaal-primary hover:bg-bilaal-secondary text-white font-heading font-semibold py-3.5 rounded-xl shadow-md transition-all text-sm"
      >
        {loading ? (
          <span>Sending Message...</span>
        ) : (
          <>
            <Send className="w-4 h-4" />
            <span>Send Message</span>
          </>
        )}
      </button>
    </form>
  );
};
