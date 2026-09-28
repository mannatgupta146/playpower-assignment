'use client';

import { useState } from 'react';
import { 
  X, Wind, Droplet, Droplets, Waves, WashingMachine, Shirt, BedSingle, Blinds, 
  Baby, Tv, AirVent, Fan, Cctv, ShieldAlert, Siren, Wifi, Monitor, CookingPot, Refrigerator, 
  Microwave, UtensilsCrossed, Coffee, Wine, CarFront, Bath, Dumbbell, PawPrint, 
  Key, CalendarDays, CheckCircle2, Utensils
} from 'lucide-react';

const StrokeIcon = ({ d }: { d: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="block h-6 w-6">
    <path d={d} />
  </svg>
);

const AMENITIES_LIST = [
  {
    category: 'Bathroom',
    items: [
      { name: 'Hairdryer', icon: <Wind className="block h-6 w-6" /> },
      { name: 'Cleaning products', icon: <Droplet className="block h-6 w-6" /> },
      { name: 'Shampoo', icon: <Droplets className="block h-6 w-6" /> },
      { name: 'Hot water', icon: <Waves className="block h-6 w-6" /> },
      { name: 'Shower gel', icon: <Droplets className="block h-6 w-6" /> },
    ]
  },
  {
    category: 'Bedroom and laundry',
    items: [
      { name: 'Washing machine', icon: <WashingMachine className="block h-6 w-6" /> },
      { name: 'Hangers', icon: <Shirt className="block h-6 w-6" /> },
      { name: 'Bed linen', icon: <BedSingle className="block h-6 w-6" /> },
      { name: 'Room-darkening blinds', icon: <Blinds className="block h-6 w-6" /> },
      { name: 'Iron', icon: <StrokeIcon d="M4 14v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4M4 14l4-8h8l4 8M12 14v4M10 10h4" /> },
      { name: 'Clothes storage', icon: <StrokeIcon d="M3 4h18M3 4v16h18V4M8 12h8" /> },
      { name: 'Cot', icon: <Baby className="block h-6 w-6" /> },
    ]
  },
  {
    category: 'Entertainment',
    items: [
      { name: 'TV', icon: <Tv className="block h-6 w-6" /> },
    ]
  },
  {
    category: 'Family',
    items: [
      { name: 'Cot', icon: <Baby className="block h-6 w-6" /> },
    ]
  },
  {
    category: 'Heating and cooling',
    items: [
      { name: 'Air conditioning', icon: <AirVent className="block h-6 w-6" /> },
      { name: 'Ceiling fan', icon: <Fan className="block h-6 w-6" /> },
    ]
  },
  {
    category: 'Home safety',
    items: [
      { name: 'Exterior security cameras on property', icon: <Cctv className="block h-6 w-6" /> },
      { name: 'Carbon monoxide alarm', icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="block h-6 w-6">
          <rect x="4" y="4" width="16" height="16" rx="3" ry="3" />
          <circle cx="12" cy="12" r="4" strokeDasharray="2 3" />
          <line x1="2" y1="2" x2="22" y2="22" />
        </svg>
      ) },
      { name: 'Smoke alarm', icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="block h-6 w-6">
          <circle cx="12" cy="12" r="8" />
          <circle cx="12" cy="12" r="4" strokeDasharray="2 3" />
          <line x1="2" y1="2" x2="22" y2="22" />
        </svg>
      ) },
    ]
  },
  {
    category: 'Internet and office',
    items: [
      { name: 'Wifi', icon: <Wifi className="block h-6 w-6" /> },
      { name: 'Dedicated workspace', icon: <Monitor className="block h-6 w-6" /> },
    ]
  },
  {
    category: 'Kitchen and dining',
    items: [
      { name: 'Kitchen', icon: <UtensilsCrossed className="block h-6 w-6" /> },
      { name: 'Fridge', icon: <Refrigerator className="block h-6 w-6" /> },
      { name: 'Freezer', icon: <Refrigerator className="block h-6 w-6" /> },
      { name: 'Microwave', icon: <Microwave className="block h-6 w-6" /> },
      { name: 'Cooking basics', icon: <CookingPot className="block h-6 w-6" /> },
      { name: 'Crockery and cutlery', icon: <Utensils className="block h-6 w-6" /> },
      { name: 'Kettle', icon: <Coffee className="block h-6 w-6" /> },
      { name: 'Coffee', icon: <Coffee className="block h-6 w-6" /> },
      { name: 'Wine glasses', icon: <Wine className="block h-6 w-6" /> },
      { name: 'Toaster', icon: <StrokeIcon d="M4 10h16v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8z M8 10V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4" /> },
      { name: 'Blender', icon: <StrokeIcon d="M8 4h8l-1 12H9z M6 16h12v4a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2z" /> },
      { name: 'Cooker', icon: <CookingPot className="block h-6 w-6" /> },
    ]
  },
  {
    category: 'Location features',
    items: [
      { name: 'Private entrance', icon: <Key className="block h-6 w-6" /> },
    ]
  },
  {
    category: 'Outdoor',
    items: [
      { name: 'Patio or balcony', icon: <StrokeIcon d="M4 14h16M4 14v6M20 14v6M8 10v4M16 10v4M12 8v6M6 8h12" /> },
      { name: 'Outdoor dining area', icon: <Utensils className="block h-6 w-6" /> },
    ]
  },
  {
    category: 'Parking and facilities',
    items: [
      { name: 'Free parking on premises', icon: <CarFront className="block h-6 w-6" /> },
      { name: 'Pool', icon: <Waves className="block h-6 w-6" /> },
      { name: 'Hot tub', icon: <Bath className="block h-6 w-6" /> },
      { name: 'Gym', icon: <Dumbbell className="block h-6 w-6" /> },
    ]
  },
  {
    category: 'Services',
    items: [
      { name: 'Pets allowed', icon: <PawPrint className="block h-6 w-6" /> },
      { name: 'Cleaning available during stay', icon: <CheckCircle2 className="block h-6 w-6" /> },
      { name: 'Long-term stays allowed', icon: <CalendarDays className="block h-6 w-6" /> },
      { name: 'Self check-in', icon: <Key className="block h-6 w-6" /> },
    ]
  }
];

export default function AmenitiesSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div id="amenities" className="py-8 border-b border-gray-200">
        <h2 className="text-[22px] font-semibold mb-6">What this place offers</h2>
        <div className="grid grid-cols-2 gap-y-4 gap-x-8">
          {[
            { name: 'Kitchen', icon: AMENITIES_LIST[7].items[0].icon },
            { name: 'Wifi', icon: AMENITIES_LIST[6].items[0].icon },
            { name: 'Dedicated workspace', icon: AMENITIES_LIST[6].items[1].icon },
            { name: 'Free parking on premises', icon: AMENITIES_LIST[10].items[0].icon },
            { name: 'Pool', icon: AMENITIES_LIST[10].items[1].icon },
            { name: 'Hot tub', icon: AMENITIES_LIST[10].items[2].icon },
            { name: 'Pets allowed', icon: AMENITIES_LIST[11].items[0].icon },
            { name: 'Exterior security cameras on property', icon: AMENITIES_LIST[5].items[0].icon },
            { name: 'Carbon monoxide alarm', crossedOut: true, icon: AMENITIES_LIST[5].items[1].icon },
            { name: 'Smoke alarm', crossedOut: true, icon: AMENITIES_LIST[5].items[2].icon }
          ].map((amenity, index) => (
            <div key={index} className={`flex items-center space-x-4 ${amenity.crossedOut ? 'text-gray-500' : 'text-[#222222]'}`}>
              <div className={amenity.crossedOut ? 'text-gray-500' : 'text-[#222222]'}>
                {amenity.icon}
              </div>
              <span className={`text-base ${amenity.crossedOut ? 'line-through' : ''}`}>{amenity.name}</span>
            </div>
          ))}
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="mt-8 border border-gray-900 px-6 py-3 rounded-lg font-semibold text-base hover:bg-gray-100 transition"
        >
          Show all 50 amenities
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 sm:p-10">
          <div className="bg-white w-full max-w-195 max-h-full rounded-2xl flex flex-col shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
            {/* Modal Header */}
            <div className="flex items-center p-6 pb-4">
              <button 
                onClick={() => setIsModalOpen(false)}
                className="p-2 -ml-2 rounded-full hover:bg-gray-100 transition"
              >
                <X size={20} className="text-[#222222]" />
              </button>
            </div>
            
            {/* Modal Body */}
            <div className="px-6 pb-6 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 120px)' }}>
              <h2 className="text-[26px] font-semibold mb-8 text-[#222222]">What this place offers</h2>
              
              {AMENITIES_LIST.map((category, idx) => (
                <div key={idx} className="mb-8">
                  <h3 className="text-lg font-semibold mb-4 text-[#222222]">{category.category}</h3>
                  <div className="flex flex-col">
                    {category.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex items-center py-5 border-b border-gray-200 last:border-b-0">
                        <div className="mr-4 text-[#222222]">
                          {item.icon}
                        </div>
                        <span className="text-[15px] text-[#222222] font-light">{item.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
