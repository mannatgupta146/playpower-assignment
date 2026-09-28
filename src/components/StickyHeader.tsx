"use client";

import React, { useState, useEffect } from 'react';

export default function StickyHeader() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('Photos');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      if (scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      const amenitiesEl = document.getElementById('amenities');
      const reviewsEl = document.getElementById('reviews');
      const locationEl = document.getElementById('location');
      
      const offset = 200;

      if (locationEl && locationEl.getBoundingClientRect().top < offset) {
        setActiveTab('Location');
      } else if (reviewsEl && reviewsEl.getBoundingClientRect().top < offset) {
        setActiveTab('Reviews');
      } else if (amenitiesEl && amenitiesEl.getBoundingClientRect().top < offset) {
        setActiveTab('Amenities');
      } else {
        setActiveTab('Photos');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 w-full bg-white z-50 border-b border-gray-200 animate-in slide-in-from-top duration-300 hidden md:block">
      <div className="w-full max-w-[1920px] mx-auto px-[2.5vw] lg:px-[6.5vw] 2xl:px-[10.5vw]">
        <div className="flex justify-between items-center h-20">
          {/* Left Navigation */}
          <div className="flex items-center space-x-1 h-full">
            {['Photos', 'Amenities', 'Reviews', 'Location'].map((tab) => (
              <a
                key={tab}
                href={`#${tab.toLowerCase()}`}
                className="relative h-full flex items-center justify-center cursor-pointer group px-2"
              >
                <span className={`text-[14px] font-semibold py-2 px-3 rounded-lg transition-colors ${
                  activeTab === tab ? 'text-[#222222]' : 'text-[#717171] group-hover:bg-gray-100'
                }`}>
                  {tab}
                </span>
                {activeTab === tab && (
                  <div className="absolute bottom-5 left-5 right-5 h-[2.5px] bg-[#222222]" />
                )}
              </a>
            ))}
          </div>

          {/* Right Pricing and Booking */}
          <div className="flex items-center">
            <div className="flex flex-col text-right mr-5">
              <div className="flex items-baseline space-x-1 justify-end">
                <span className="font-bold text-[17px] text-[#222222]">₹28,499</span>
                <span className="text-sm text-[#222222]">for 5 nights</span>
              </div>
              <div className="flex items-center justify-end text-xs text-[#222222] font-semibold mt-0.5 space-x-1">
                <span>★ 4.95</span>
                <span>·</span>
                <span className="underline">19 reviews</span>
              </div>
            </div>
            <button 
              className="text-white font-semibold py-2.5 px-6 rounded-4xl transition hover:brightness-95"
              style={{ background: 'linear-gradient(to right, #E61E4D 0%, #E61E4D 55%, #D51B5F 70%, #CB1B5C 80%, #C3185A 90%, #BE0562 100%)' }}
            >
              Reserve
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
