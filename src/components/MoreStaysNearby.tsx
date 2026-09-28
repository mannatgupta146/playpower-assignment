'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const STAYS = [
  {
    id: 1,
    title: 'Beautiful Studio with a view to die for',
    image: '/assets/extra1.jpeg',
    price: '₹23,600',
    rating: '4.91',
    guestFavourite: true
  },
  {
    id: 2,
    title: 'NAQAB - 1bhk with private pool',
    image: '/assets/extra2.jpeg',
    price: '₹42,218',
    rating: '4.95',
    guestFavourite: true
  },
  {
    id: 3,
    title: 'Greentique Luxury Flat with plunge pool, Calangute',
    image: '/assets/extra3.jpeg',
    price: '₹44,506',
    rating: '4.94',
    guestFavourite: false
  },
  {
    id: 4,
    title: 'The Tropical Studio | 5 mins to Beach',
    image: '/assets/pool1.jpeg',
    price: '₹22,824',
    rating: '4.96',
    guestFavourite: true
  },
  {
    id: 5,
    title: 'Luxury Casa Bella 1BHK with plunge pool, Calangute',
    image: '/assets/gym1.jpeg',
    price: '₹39,942',
    rating: '4.95',
    guestFavourite: true
  },
  {
    id: 6,
    title: 'Kanso by Earthen Window | Jacuzzi | Terrace | Pool',
    image: '/assets/living12.jpeg',
    price: '₹45,648',
    rating: '5.0',
    guestFavourite: true
  },
  {
    id: 7,
    title: 'Luxury Apt | Private Pool | 6 Mins from Beach',
    image: '/assets/living24.jpeg',
    price: '₹48,786',
    rating: '4.93',
    guestFavourite: false
  },
  {
    id: 8,
    title: 'Serendipity Cottage - Calm Stay in Calangute-Baga.',
    image: '/assets/bedroom2.jpeg',
    price: '₹22,824',
    rating: '4.92',
    guestFavourite: false
  },
  {
    id: 9,
    title: 'The Haven - Quiet & Peaceful 1BHK',
    image: '/assets/living11.jpeg',
    price: '₹28,500',
    rating: '4.98',
    guestFavourite: true
  },
  {
    id: 10,
    title: 'Casa Amor - Beautiful Beachfront Villa',
    image: '/assets/living25.jpeg',
    price: '₹55,200',
    rating: '4.99',
    guestFavourite: true
  }
];

export default function MoreStaysNearby() {
  const [slide, setSlide] = useState(1);

  const nextSlide = () => setSlide(2);
  const prevSlide = () => setSlide(1);

  return (
    <div className="w-full max-w-[1920px] mx-auto px-[2.5vw] lg:px-[6.5vw] 2xl:px-[10.5vw]">
      <div className="border-t border-gray-200 py-12">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-[22px] font-semibold text-[#222222]">More stays nearby</h2>
          
          <div className="flex items-center">
            <span className="text-sm font-medium mr-4 text-[#222222] tracking-wide">{slide} / 2</span>
            <div className="flex items-center space-x-2">
              <button 
                onClick={prevSlide}
                disabled={slide === 1}
                className={`w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center transition ${slide === 1 ? 'opacity-30 cursor-not-allowed' : 'hover:border-gray-900 shadow-sm'}`}
              >
                <ChevronLeft size={16} strokeWidth={1.5} />
              </button>
              <button 
                onClick={nextSlide}
                disabled={slide === 2}
                className={`w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center transition ${slide === 2 ? 'opacity-30 cursor-not-allowed' : 'hover:border-gray-900 shadow-sm'}`}
              >
                <ChevronRight size={16} strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative overflow-hidden w-full">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${(slide - 1) * 100}%)` }}
          >
            {/* Slide 1 */}
            <div className="w-full shrink-0 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {STAYS.slice(0, 5).map((stay) => (
                <div key={stay.id} className="flex flex-col group cursor-pointer relative">
                  <div className="w-full aspect-square rounded-xl overflow-hidden mb-3 bg-gray-200 relative">
                    <img src={stay.image} alt={stay.title} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="font-semibold text-[15px] text-[#222222] leading-snug mb-1 line-clamp-2">{stay.title}</h3>
                  <div className="flex items-center text-[14px] text-gray-900 mt-auto pt-1">
                    <span className="mr-3">{stay.price}</span>
                    <span className="flex items-center"><Star size={12} className="mr-1 fill-[#222222] text-[#222222]" />{stay.rating}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Slide 2 */}
            <div className="w-full shrink-0 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 pl-4 lg:pl-0 lg:ml-0">
              {STAYS.slice(5, 10).map((stay) => (
                <div key={`s2-${stay.id}`} className="flex flex-col group cursor-pointer relative">
                  <div className="w-full aspect-square rounded-xl overflow-hidden mb-3 bg-gray-200 relative">
                    <img src={stay.image} alt={stay.title} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="font-semibold text-[15px] text-[#222222] leading-snug mb-1 line-clamp-2">{stay.title}</h3>
                  <div className="flex items-center text-[14px] text-gray-900 mt-auto pt-1">
                    <span className="mr-3">{stay.price}</span>
                    <span className="flex items-center"><Star size={12} className="mr-1 fill-[#222222] text-[#222222]" />{stay.rating}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
