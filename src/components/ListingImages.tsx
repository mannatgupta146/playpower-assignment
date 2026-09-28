'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { ChevronLeft, ChevronRight, Share, Heart, X } from 'lucide-react';

const GridDots = ({ size = 20, className = "" }: { size?: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <circle cx="5" cy="5" r="2" />
    <circle cx="12" cy="5" r="2" />
    <circle cx="19" cy="5" r="2" />
    <circle cx="5" cy="12" r="2" />
    <circle cx="12" cy="12" r="2" />
    <circle cx="19" cy="12" r="2" />
    <circle cx="5" cy="19" r="2" />
    <circle cx="12" cy="19" r="2" />
    <circle cx="19" cy="19" r="2" />
  </svg>
);

const BENTO_IMAGES = [
  '/assets/living24.jpeg',
  '/assets/living21.jpeg',
  '/assets/living22.jpeg',
  '/assets/bedroom1.jpeg',
  '/assets/ex5.jpeg',
];

const PHOTO_CATEGORIES = [
  {
    id: 'living-room-1',
    title: 'Living room 1',
    amenities: 'Sofa · Air conditioning · Ceiling fan · TV',
    images: ['/assets/living11.jpeg', '/assets/living12.jpeg', '/assets/living13.jpeg']
  },
  {
    id: 'living-room-2',
    title: 'Living room 2',
    amenities: 'Ceiling fan · Hot tub',
    images: ['/assets/living21.jpeg', '/assets/living22.jpeg', '/assets/living23.jpeg', '/assets/living24.jpeg', '/assets/living25.jpeg', '/assets/living26.jpeg']
  },
  {
    id: 'full-kitchen',
    title: 'Full kitchen',
    amenities: 'Freezer · Fridge · Blender · Cooker · Cooking basics · Kettle · Microwave · Toaster · Wine glasses · Coffee · Crockery and cutlery',
    images: ['/assets/extra3.jpeg', '/assets/living11.jpeg']
  },
  {
    id: 'bedroom',
    title: 'Bedroom',
    amenities: 'Double bed · Air conditioning · Bed linen · Ceiling fan · Clothes storage · Cot · Hangers · Iron · Room-darkening blinds · Cleaning available during stay · Cleaning products · Long-term stays allowed · Private entrance · Wifi',
    images: ['/assets/bedroom1.jpeg', '/assets/bedroom2.jpeg', '/assets/bedroom3.jpeg', '/assets/bedroom4.jpeg', '/assets/bedroom1.jpeg', '/assets/bedroom2.jpeg']
  },
  {
    id: 'full-bathroom',
    title: 'Full bathroom',
    amenities: 'Hairdryer · Hot water · Shampoo · Shower gel',
    images: ['/assets/bathroom.jpeg']
  },
  {
    id: 'gym',
    title: 'Gym',
    amenities: 'Air conditioning · Gym · Exercise equipment · Ceiling fan',
    images: ['/assets/gym1.jpeg', '/assets/gym2.jpeg', '/assets/gym3.jpeg', '/assets/gym4.jpeg', '/assets/gym5.jpeg']
  },
  {
    id: 'exterior',
    title: 'Exterior',
    amenities: '',
    images: ['/assets/ex1.jpeg', '/assets/ex2.jpeg', '/assets/ex3.jpeg', '/assets/ex4.jpeg', '/assets/ex5.jpeg', '/assets/ex6.jpeg']
  },
  {
    id: 'pool',
    title: 'Pool',
    amenities: '',
    images: ['/assets/pool1.jpeg', '/assets/pool1.jpeg', '/assets/pool1.jpeg']
  },
  {
    id: 'additional',
    title: 'Additional photos',
    amenities: '',
    images: ['/assets/extra1.jpeg', '/assets/extra2.jpeg', '/assets/extra3.jpeg', '/assets/living12.jpeg', '/assets/bedroom2.jpeg', '/assets/ex2.jpeg', '/assets/gym3.jpeg', '/assets/pool1.jpeg', '/assets/bathroom.jpeg', '/assets/ex4.jpeg', '/assets/extra-last.jpeg']
  }
];

export default function ListingImages() {
  const [showPhotoTour, setShowPhotoTour] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const flatPhotos = useMemo(() => {
    return PHOTO_CATEGORIES.flatMap(cat => cat.images.map(img => ({ img, catTitle: cat.title })));
  }, []);

  const nextPhoto = () => {
    if (lightboxIndex !== null && lightboxIndex < flatPhotos.length - 1) {
      setLightboxIndex((prev) => prev! + 1);
    }
  };

  const prevPhoto = () => {
    if (lightboxIndex !== null && lightboxIndex > 0) {
      setLightboxIndex((prev) => prev! - 1);
    }
  };

  // Keyboard navigation & body scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex !== null) {
        if (e.key === 'ArrowRight') nextPhoto();
        if (e.key === 'ArrowLeft') prevPhoto();
        if (e.key === 'Escape') setLightboxIndex(null);
      } else if (showPhotoTour) {
        if (e.key === 'Escape') setShowPhotoTour(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    
    if (showPhotoTour || lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [showPhotoTour, lightboxIndex, flatPhotos.length]);

  let globalImgCounter = 0;

  const openPhotoTourAt = (categoryId: string) => {
    setShowPhotoTour(true);
    setTimeout(() => {
      document.getElementById(categoryId)?.scrollIntoView({ behavior: 'smooth' });
    }, 100); // Give the modal a tiny moment to render before scrolling
  };

  return (
    <>
      {/* 1. Image Grid (Main Page) */}
      <div className="relative mb-8">
        <div className="grid grid-cols-4 grid-rows-2 gap-2 rounded-2xl overflow-hidden h-140 transition-all">
          <div 
            className="col-span-2 row-span-2 relative cursor-pointer group overflow-hidden"
            onClick={() => openPhotoTourAt('living-room-2')}
          >
            <img src={BENTO_IMAGES[0]} alt="Hero" className="w-full h-full object-cover" />
            <div className="absolute inset-0 pointer-events-none bg-black/0 group-hover:bg-black/10 transition duration-300"></div>
          </div>
          <div className="relative cursor-pointer group overflow-hidden" onClick={() => openPhotoTourAt('living-room-2')}>
            <img src={BENTO_IMAGES[1]} alt="Grid 1" className="w-full h-full object-cover" />
            <div className="absolute inset-0 pointer-events-none bg-black/0 group-hover:bg-black/10 transition duration-300"></div>
          </div>
          <div className="relative cursor-pointer group overflow-hidden" onClick={() => openPhotoTourAt('living-room-2')}>
            <img src={BENTO_IMAGES[2]} alt="Grid 2" className="w-full h-full object-cover" />
            <div className="absolute inset-0 pointer-events-none bg-black/0 group-hover:bg-black/10 transition duration-300"></div>
          </div>
          <div className="relative cursor-pointer group overflow-hidden" onClick={() => openPhotoTourAt('bedroom')}>
            <img src={BENTO_IMAGES[3]} alt="Grid 3" className="w-full h-full object-cover" />
            <div className="absolute inset-0 pointer-events-none bg-black/0 group-hover:bg-black/10 transition duration-300"></div>
          </div>
          <div className="relative cursor-pointer group overflow-hidden" onClick={() => openPhotoTourAt('exterior')}>
            <img src={BENTO_IMAGES[4]} alt="Grid 4" className="w-full h-full object-cover" />
            <div className="absolute inset-0 pointer-events-none bg-black/0 group-hover:bg-black/10 transition duration-300"></div>
          </div>
        </div>
        
        {/* Show all photos button */}
        <button 
          onClick={() => setShowPhotoTour(true)}
          className="absolute bottom-6 right-6 bg-white border border-gray-900 px-4 py-2 rounded-lg text-sm font-medium flex items-center space-x-2 hover:bg-gray-100 transition shadow-sm"
        >
          <GridDots size={16} />
          <span>Show all photos</span>
        </button>
      </div>

      {/* 2. Photo Tour Modal */}
      {showPhotoTour && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col overflow-y-auto animate-in slide-in-from-bottom-10 duration-300">
          
          {/* Header */}
          <div className="sticky top-0 bg-white px-6 pt-8 pb-4 flex justify-between items-center z-20">
            <button onClick={() => setShowPhotoTour(false)} className="p-2 hover:bg-gray-100 rounded-full transition text-[#222222]">
              <ChevronLeft size={20} />
            </button>
            <div className="font-semibold text-[17px] text-[#222222]">Photo tour</div>
            <div className="flex space-x-2 text-[#222222]">
              <button className="p-2 hover:bg-gray-100 rounded-full transition">
                <Share size={20} />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full transition">
                <Heart size={20} />
              </button>
            </div>
          </div>

          <div className="max-w-300 mx-auto w-full px-4 lg:px-12 py-8 mb-16">
            
            {/* Thumbnails Row */}
            <div className="flex flex-wrap gap-x-4 gap-y-6 mb-16">
              {PHOTO_CATEGORIES.map((cat) => (
                <div 
                  key={`thumb-${cat.id}`} 
                  className="flex flex-col cursor-pointer shrink-0 w-30 hover:scale-[1.03] transition-transform duration-300 ease-out" 
                  onClick={() => document.getElementById(cat.id)?.scrollIntoView({behavior: 'smooth'})}
                >
                  <div className="w-full h-30 rounded-xl overflow-hidden mb-2">
                    <img src={cat.images[0]} alt={cat.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="text-[15px] leading-tight font-normal text-[#717171] line-clamp-2">{cat.title}</div>
                </div>
              ))}
            </div>
            
            {/* Categories and Photos */}
            <div className="flex flex-col space-y-16">
              {PHOTO_CATEGORIES.map((cat) => (
                <div key={cat.id} id={cat.id} className="flex flex-col lg:flex-row gap-6">
                  
                  {/* Left Sticky Info (Title & Amenities) */}
                  <div className="w-full lg:w-[48%] shrink-0 pr-12">
                    <div className="lg:sticky lg:top-30">
                      <h2 className="text-[32px] font-bold text-[#222222] mb-1">{cat.title}</h2>
                      {cat.amenities && (
                        <p className="text-[16px] font-normal text-[#717171] leading-relaxed">{cat.amenities}</p>
                      )}
                    </div>
                  </div>
                  
                  {/* Right Images (Masonry-style Grid) */}
                  <div className="w-full lg:w-[55%] grid grid-cols-2 gap-4">
                    {cat.images.map((img, idx) => {
                      const currentIndex = globalImgCounter++;
                      const isFullWidth = cat.images.length === 2 ? false : (idx % 3 === 0 || (idx === cat.images.length - 1 && idx % 3 === 1));
                      return (
                        <div key={`${cat.id}-${idx}`} className={`${isFullWidth ? 'col-span-2' : 'col-span-1'} rounded-xl overflow-hidden`}>
                          <img 
                            src={img} 
                            onClick={() => setLightboxIndex(currentIndex)}
                            alt={`${cat.title} ${idx + 1}`} 
                            className={`w-full object-cover transition-transform duration-500 hover:scale-105 cursor-pointer ${isFullWidth ? 'h-auto' : 'h-full aspect-4/3'}`} 
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 3. Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 bg-white z-60 flex flex-col animate-in fade-in duration-200">
          
          {/* Header */}
          <div className="flex justify-between items-center px-6 pt-6 pb-4 bg-white z-10">
            <button onClick={() => setLightboxIndex(null)} className="p-2 hover:bg-gray-100 rounded-full transition text-[#222222]">
              <GridDots size={20} />
            </button>
            <div className="font-semibold text-[17px] text-[#222222]">
              {flatPhotos[lightboxIndex].catTitle}
            </div>
            <div className="flex items-center space-x-4 text-[#222222]">
              <span className="text-[15px] font-medium tracking-wide">
                {lightboxIndex + 1} of {flatPhotos.length}
              </span>
              <button onClick={() => { setLightboxIndex(null); setShowPhotoTour(false); }} className="p-2 hover:bg-gray-100 rounded-full transition">
                <X size={20} />
              </button>
            </div>
          </div>
          
          {/* Image Area */}
          <div className="flex-1 relative flex items-center justify-center p-4 lg:p-12 pb-24 overflow-hidden">
            <button 
              onClick={(e) => { e.stopPropagation(); prevPhoto(); }}
              disabled={lightboxIndex === 0}
              className="absolute left-4 lg:left-12 p-4 bg-white border border-gray-200 shadow-sm text-[#222222] rounded-full transition z-10 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} strokeWidth={1.5} />
            </button>
            
            <img 
              src={flatPhotos[lightboxIndex].img} 
              alt="Lightbox view" 
              className="max-w-full max-h-full object-contain"
            />
            
            <button 
              onClick={(e) => { e.stopPropagation(); nextPhoto(); }}
              disabled={lightboxIndex === flatPhotos.length - 1}
              className="absolute right-4 lg:right-12 p-4 bg-white border border-gray-200 shadow-sm text-[#222222] rounded-full transition z-10 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              aria-label="Next image"
            >
              <ChevronRight size={24} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
