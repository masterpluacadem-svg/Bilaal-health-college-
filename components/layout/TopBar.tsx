import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export const TopBar: React.FC = () => {
  return (
    <div className="bg-[#0F2E5A] text-white/90 text-xs py-2 px-4 sm:px-6 lg:px-8 border-b border-white/10 hidden md:block">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
        {/* Left Side: Contact Info & Location */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center gap-1.5 hover:text-white transition-colors">
            <MapPin className="w-3.5 h-3.5 text-[#2E8BCB]" />
            <span>Garowe, Puntland, Somalia</span>
          </div>

          <div className="flex items-center gap-1.5 hover:text-white transition-colors">
            <Mail className="w-3.5 h-3.5 text-[#2E8BCB]" />
            <a href="mailto:bilaalhealthsciencecollege@gmail.com">
              bilaalhealthsciencecollege@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-1.5 hover:text-white transition-colors">
            <Clock className="w-3.5 h-3.5 text-[#16A34A]" />
            <span>Sat - Thu: 7:30 AM - 4:30 PM</span>
          </div>
        </div>

        {/* Right Side: Phone Numbers */}
        <div className="flex items-center space-x-4 font-medium">
          <div className="flex items-center gap-1.5 text-blue-200">
            <Phone className="w-3.5 h-3.5 text-[#16A34A]" />
            <span>Call Us:</span>
          </div>
          <a
            href="tel:+252904819705"
            className="hover:text-white hover:underline transition-all font-bold text-emerald-300"
          >
            +252 90 481 9705
          </a>
          <span className="text-white/30">•</span>
          <a
            href="tel:+252907814063"
            className="hover:text-white hover:underline transition-all"
          >
            +252 90 781 4063
          </a>
          <span className="text-white/30">•</span>
          <a
            href="tel:+252907560281"
            className="hover:text-white hover:underline transition-all"
          >
            +252 90 756 0281
          </a>
        </div>
      </div>
    </div>
  );
};
