'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { galleryData, GalleryItem } from '@/data/galleryData';
import { X, ZoomIn } from 'lucide-react';

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Campus', 'Laboratories', 'Clinical Practice', 'Events'];

  const filteredItems =
    activeCategory === 'All'
      ? galleryData
      : galleryData.filter((item) => item.category === activeCategory);

  return (
    <div className="space-y-12 py-12">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Photo Gallery"
          title="Campus Life & Skills Facilities"
          subtitle="Explore images of our skills laboratory, campus architecture, clinical rotations, and student activities in Garowe."
        />

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full font-heading text-xs font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-bilaal-primary text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Masonry / Grid Gallery */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative h-72 rounded-3xl overflow-hidden shadow-soft hover:shadow-card cursor-pointer border border-gray-100 transition-all duration-300"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bilaal-navy/90 via-bilaal-navy/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white space-y-1">
                <span className="text-[10px] font-heading font-bold uppercase tracking-wider text-emerald-400">
                  {item.category}
                </span>
                <h3 className="font-heading font-bold text-lg leading-tight">{item.title}</h3>
                <p className="text-xs text-blue-100/80 line-clamp-2">{item.description}</p>
                <div className="pt-2 flex items-center gap-1.5 text-xs text-emerald-300 font-semibold">
                  <ZoomIn className="w-4 h-4" />
                  <span>Click to expand</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Preview Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative bg-white max-w-4xl w-full rounded-3xl overflow-hidden shadow-2xl space-y-0">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="relative h-96 sm:h-[500px] w-full">
              <Image
                src={selectedImage.image}
                alt={selectedImage.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 bg-white space-y-1 border-t border-gray-100">
              <span className="text-xs font-heading font-bold text-bilaal-primary uppercase tracking-wider">
                {selectedImage.category}
              </span>
              <h3 className="font-heading font-bold text-xl text-bilaal-dark">
                {selectedImage.title}
              </h3>
              <p className="text-sm text-gray-600">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
