'use client';

import { useState } from 'react';

export default function ExpandableDescription() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="py-8 border-b border-gray-200">
      <div className="bg-[#F1F1F1] p-4 rounded-lg text-sm mb-6">
        Some info has been automatically translated. <span className="underline font-semibold cursor-pointer">Show original</span>
      </div>
      <div className="relative">
        <div className={`text-[#222222] text-base leading-relaxed ${isExpanded ? '' : 'max-h-19.5 overflow-hidden'}`}>
          <p>
            🌴 Plan Your Relaxing Holiday at Amor De Goa by Mirashya Homes! ✨ Stay in this cozy 1BHK in the heart of Candolim, featuring a private jacuzzi 🛁 for the perfect unwind. Enjoy high-speed WiFi 💻, Smart TV 📺, pet-friendly comfort 🐾, and stylish interiors. Just minutes from Candolim Beach ⛱️, popular cafés, restaurants, and nightlife 🍹, it's ideal for couples seeking romance, relaxation, and a touch of luxury in North Goa. ❤️🌴
          </p>
        </div>
        {!isExpanded && (
          <div className="absolute bottom-0 left-0 right-0 h-10 bg-linear-to-t from-white to-transparent pointer-events-none" />
        )}
      </div>
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="font-semibold mt-2 flex items-center hover:text-gray-600 transition text-[#222222]"
      >
        <span className="underline">{isExpanded ? 'Show less' : 'Show more'}</span> <span className="ml-1 text-lg leading-none">›</span>
      </button>
    </div>
  );
}
