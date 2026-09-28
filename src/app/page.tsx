import Header from '@/components/Header';
import StickyHeader from '@/components/StickyHeader';
import ListingImages from '@/components/ListingImages';
import ExpandableDescription from '@/components/ExpandableDescription';
import AmenitiesSection from '@/components/AmenitiesSection';
import Calendar from '@/components/Calendar';
import {
  Share, Heart, Star, Award, Key, MapPin,
  Wifi, Tv, Car, Coffee, Flame, Shield, Calendar as CalendarIcon,
  ChevronRight, BedDouble, Sofa, Wind, Sun, MessageSquare, Tag, Map, CheckCircle2, SprayCan, Search, Plus, Minus, Home as HomeIcon, Check, GraduationCap, CalendarX
} from 'lucide-react';

import MoreStaysNearby from '@/components/MoreStaysNearby';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#222222] font-sans">
      <Header />
      <StickyHeader />
      <main className="w-full max-w-[1920px] mx-auto px-[2.5vw] lg:px-[6.5vw] 2xl:px-[10.5vw] py-6">
        {/* Listing Title Section */}
        <div className="mb-6 flex items-start justify-between pt-4">
          <h1 className="text-[26px] font-semibold text-[#222222]">Romantic Jacuzzi 1BHK Candolim | Mirashya UG10</h1>

          <div className="flex items-center space-x-1 text-sm font-medium pt-1">
            <button className="flex items-center space-x-2 hover:bg-gray-100 px-2 py-2 rounded-lg transition">
              <Share size={16} /> <span className="underline">Share</span>
            </button>
            <button className="flex items-center space-x-2 hover:bg-gray-100 px-2 py-2 rounded-lg transition">
              <Heart size={16} /> <span className="underline">Save</span>
            </button>
          </div>
        </div>

        {/* Image Grid */}
        <ListingImages />

        {/* Content Area */}
        <div className="flex flex-col lg:flex-row justify-between relative mt-8 gap-12 lg:gap-0">
          {/* Left Column - Details */}
          <div className="w-full lg:w-[58%] lg:pr-8">
            {/* Title & Guests */}
            <div className="pt-2">
              <h2 className="text-[28px] font-semibold mb-1 text-[#222222]">Entire serviced apartment in Candolim, India</h2>
              <p className="text-[#222222] font-normal text-[17px]">3 guests · 1 bedroom · 1 bed · 1 bathroom</p>
            </div>

            {/* Guest Favourite Badge */}
            <div className="flex items-center border border-gray-200 rounded-xl p-5 my-8">
              <div className="flex items-center shrink-0">
                <img src="/assets/images/ui/laurel-left.png" alt="laurel" className="h-10.5 w-auto object-contain mr-2" />
                <div className="text-[16px] font-bold leading-tight text-[#222222] text-center tracking-tight">Guest<br />favourite</div>
                <img src="/assets/images/ui/laurel-right.png" alt="laurel" className="h-10.5 w-auto object-contain ml-2" />
              </div>
              <div className="flex-1 px-8 text-left text-[16px] font-semibold text-[#222222] leading-snug">
                One of the most loved homes on Airbnb,<br />according to guests
              </div>
              <div className="flex items-center shrink-0">
                <div className="text-center px-5">
                  <div className="text-[22px] font-bold text-[#222222] leading-tight mb-0.5">4.95</div>
                  <div className="flex justify-center text-[10px] text-[#222222] space-x-0.5">
                    <Star size={10} className="fill-current" /> <Star size={10} className="fill-current" /> <Star size={10} className="fill-current" /> <Star size={10} className="fill-current" /> <Star size={10} className="fill-current" />
                  </div>
                </div>
                <div className="border-l border-gray-200 h-10 mx-2"></div>
                <div className="text-center px-5 pr-2">
                  <div className="text-[22px] font-bold text-[#222222] leading-tight mb-0.5">19</div>
                  <div className="text-[13px] text-[#222222] underline font-semibold cursor-pointer">Reviews</div>
                </div>
              </div>
            </div>

            {/* Host info */}
            <div className="flex items-center pb-8 border-b border-gray-200 space-x-4">
              <div className="w-12 h-12 bg-[#153F32] rounded-full overflow-hidden flex items-center justify-center text-white text-[9px] font-semibold text-center leading-tight">
                MIRASHYA
              </div>
              <div>
                <h3 className="text-[17px] font-semibold text-[#222222]">Hosted by Mirashya Homes</h3>
                <p className="text-[#717171] text-[15px]">2 years hosting</p>
              </div>
            </div>

            {/* Features */}
            <div className="py-8 border-b border-gray-200 flex flex-col space-y-6">
              <div className="flex space-x-4">
                <Sun className="mt-1 text-gray-700" size={24} />
                <div>
                  <h3 className="font-semibold text-[17px] text-[#222222]">Outdoor entertainment</h3>
                  <p className="text-gray-500 text-[15px]">The pool and alfresco dining are great for summer trips.</p>
                </div>
              </div>
              <div className="flex space-x-4">
                <Wind className="mt-1 text-gray-700" size={24} />
                <div>
                  <h3 className="font-semibold text-[17px] text-[#222222]">Designed for staying cool</h3>
                  <p className="text-gray-500 text-[15px]">Beat the heat with the A/C and ceiling fan.</p>
                </div>
              </div>
              <div className="flex space-x-4">
                <Key className="mt-1 text-gray-700" size={24} />
                <div>
                  <h3 className="font-semibold text-[17px] text-[#222222]">Self check-in</h3>
                  <p className="text-gray-500 text-[15px]">You can check in with the building staff.</p>
                </div>
              </div>
            </div>

            {/* Description */}
            <ExpandableDescription />

            {/* Where you'll sleep */}
            <div className="py-12 border-b border-gray-200">
              <h2 className="text-[22px] font-semibold mb-6">Where you'll sleep</h2>
              <div className="flex space-x-4 overflow-x-auto pb-4">
                <div className="w-[320px] shrink-0">
                  <img src="/assets/bedroom1.jpeg" alt="Bedroom" className="w-full h-52 object-cover rounded-xl mb-4" />
                  <h3 className="font-semibold text-[17px] text-[#222222]">Bedroom</h3>
                  <p className="text-[15px] text-gray-500 mt-1">1 double bed</p>
                </div>
                <div className="w-[320px] shrink-0">
                  <img src="/assets/living11.jpeg" alt="Living room" className="w-full h-52 object-cover rounded-xl mb-4" />
                  <h3 className="font-semibold text-[17px] text-[#222222]">Living room</h3>
                  <p className="text-[15px] text-gray-500 mt-1">1 sofa</p>
                </div>
              </div>
            </div>

            {/* Amenities */}
            <AmenitiesSection />

            {/* Calendar */}
            <Calendar />
          </div>

          {/* Right Column - Booking Card */}
          <div className="w-full lg:w-[33.33%] hidden md:block">
            <div className="sticky top-28 mt-6">

              {/* Promo Banner */}
              <div className="border border-gray-200 rounded-xl p-4 bg-white mb-6 flex justify-between items-start shadow-sm">
                <div className="flex space-x-3">
                  <div className="text-green-600 mt-0.5 w-7 h-7 shrink-0">
                    <img src="/assets/images/ui/discount.svg" alt="discount" className="w-full h-full object-contain" />
                  </div>
                  <div className="text-[15px]">
                    <div>Get 10% off your next stay.</div>
                    <div className="underline font-semibold cursor-pointer">Terms apply</div>
                  </div>
                </div>
                <button className="bg-[#F1F1F1] hover:bg-gray-200 text-[#222222] px-4 py-2 rounded-lg font-semibold text-[15px] transition shrink-0">
                  Claim
                </button>
              </div>

              {/* Main Booking Card */}
              <div className="border border-gray-200 rounded-xl p-6 shadow-[0_6px_16px_rgba(0,0,0,0.12)] bg-white">
                <div className="flex items-baseline space-x-2 mb-6">
                  <span className="text-[26px] font-semibold underline decoration-2 underline-offset-4">₹28,499</span>
                  <span className="text-gray-900 text-[17px] font-medium">for 5 nights</span>
                </div>

                <div className="border border-gray-400 rounded-lg mb-4">
                  <div className="flex border-b border-gray-400">
                    <div className="w-1/2 p-3 border-r border-gray-400 hover:bg-gray-100 cursor-pointer rounded-tl-lg transition">
                      <div className="text-[11px] font-bold uppercase">Check-in</div>
                      <div className="text-[15px]">10/18/2026</div>
                    </div>
                    <div className="w-1/2 p-3 hover:bg-gray-100 cursor-pointer rounded-tr-lg transition">
                      <div className="text-[11px] font-bold uppercase">Checkout</div>
                      <div className="text-[15px]">10/23/2026</div>
                    </div>
                  </div>
                  <div className="p-3 hover:bg-gray-100 cursor-pointer rounded-b-lg transition flex justify-between items-center">
                    <div>
                      <div className="text-[11px] font-bold uppercase">Guests</div>
                      <div className="text-[15px]">2 guests</div>
                    </div>
                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', fill: 'none', height: '16px', width: '16px', stroke: 'currentColor', strokeWidth: 1.5, overflow: 'visible' }}><g fill="none"><path d="m4 10 12 12 12-12"></path></g></svg>
                  </div>
                </div>

                <div className="text-[15px] text-[#717171] py-1 text-center mb-4">
                  Free cancellation before <span className="font-semibold text-[#222222]">17 October</span>
                </div>

                <button
                  className="w-full text-white py-3.5 rounded-4xl font-semibold transition text-[17px] mb-4 hover:brightness-95"
                  style={{ background: 'linear-gradient(to right, #E61E4D 0%, #E61E4D 55%, #D51B5F 70%, #CB1B5C 80%, #C3185A 90%, #BE0562 100%)' }}
                >
                  Reserve
                </button>

                <p className="text-center text-[15px] text-gray-500 mb-6">You won't be charged yet</p>
              </div>

              <div className="mt-8 text-center pt-2">
                <span className="text-gray-500 text-[15px] underline cursor-pointer flex items-center justify-center space-x-3 hover:text-gray-800">
                  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', fill: 'none', height: '16px', width: '16px', stroke: 'currentColor', strokeWidth: 2, overflow: 'visible' }}><path d="M5 2v28M5 5h20l-3 7 3 7H5"></path></svg>
                  <span>Report this listing</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Reviews Section */}
      <div id="reviews" className="w-full max-w-[1920px] mx-auto px-[2.5vw] lg:px-[6.5vw] 2xl:px-[10.5vw]">
        <div className="border-t border-gray-200 py-12">
          <div className="flex flex-col items-center mb-10 text-center">
            {/* Laurels and Score */}
            <div className="flex items-center justify-center space-x-4 mb-4">
              <img src="/assets/images/ui/laurel-left.png" alt="left laurel" className="h-24 w-auto object-contain" />
              <div className="text-[100px] font-semibold leading-none tracking-tight text-[#222222] flex items-baseline">
                4<span className="inline-block w-3.75 h-3.75 rounded-full bg-[#222222] mx-1"></span>95
              </div>
              <img src="/assets/images/ui/laurel-right.png" alt="right laurel" className="h-24 w-auto object-contain" />
            </div>

            {/* Titles */}
            <h2 className="text-[22px] font-semibold text-[#222222] mb-2">Guest favourite</h2>
            <p className="text-[#717171] text-base max-w-sm mb-4">
              This home is a guest favourite based on ratings, reviews and reliability
            </p>
            <span className="font-semibold text-base underline cursor-pointer text-[#222222]">How reviews work</span>
          </div>

          <div className="flex flex-col lg:flex-row py-8 border-t border-gray-200 mb-8 w-full gap-y-6 lg:gap-y-0 lg:px-4">
            {/* Overall rating with bars */}
            <div className="lg:w-[15%] flex flex-col lg:border-r border-gray-300 lg:pr-6 shrink-0">
              <div className="font-semibold text-[15px] mb-3 text-[#222222]">Overall rating</div>
              <div className="flex flex-col space-y-1.5 w-full text-[13px] font-medium text-[#222222]">
                <div className="flex items-center space-x-3"><span className="w-2">5</span><div className="h-1 bg-gray-200 rounded-full grow"><div className="h-full bg-[#222222] rounded-full w-[95%]"></div></div></div>
                <div className="flex items-center space-x-3"><span className="w-2">4</span><div className="h-1 bg-gray-200 rounded-full grow"><div className="h-full bg-[#222222] rounded-full w-[5%]"></div></div></div>
                <div className="flex items-center space-x-3"><span className="w-2">3</span><div className="h-1 bg-gray-200 rounded-full grow"></div></div>
                <div className="flex items-center space-x-3"><span className="w-2">2</span><div className="h-1 bg-gray-200 rounded-full grow"></div></div>
                <div className="flex items-center space-x-3"><span className="w-2">1</span><div className="h-1 bg-gray-200 rounded-full grow"></div></div>
              </div>
            </div>

            {/* The 6 stats */}
            <div className="flex flex-1 justify-between lg:pl-6 overflow-x-auto gap-x-8 lg:gap-x-0 pb-4 lg:pb-0">
              <div className="flex flex-col lg:border-r border-gray-300 flex-1 shrink-0 min-w-20">
                <div className="text-[15px] font-medium mb-1 text-[#222222]">Cleanliness</div>
                <div className="text-[19px] font-bold mb-4 text-[#222222]">5.0</div>
                <SprayCan size={32} strokeWidth={1} className="text-[#222222]" />
              </div>

              <div className="flex flex-col lg:border-r border-gray-300 flex-1 lg:pl-6 shrink-0 min-w-20">
                <div className="text-[15px] font-medium mb-1 text-[#222222]">Accuracy</div>
                <div className="text-[19px] font-bold mb-4 text-[#222222]">5.0</div>
                <CheckCircle2 size={32} strokeWidth={1} className="text-[#222222]" />
              </div>

              <div className="flex flex-col lg:border-r border-gray-300 flex-1 lg:pl-6 shrink-0 min-w-20">
                <div className="text-[15px] font-medium mb-1 text-[#222222]">Check-in</div>
                <div className="text-[19px] font-bold mb-4 text-[#222222]">5.0</div>
                <Key size={32} strokeWidth={1} className="text-[#222222]" />
              </div>

              <div className="flex flex-col lg:border-r border-gray-300 flex-1 lg:pl-6 shrink-0 min-w-20">
                <div className="text-[15px] font-medium mb-1 text-[#222222]">Communication</div>
                <div className="text-[19px] font-bold mb-4 text-[#222222]">5.0</div>
                <MessageSquare size={32} strokeWidth={1} className="text-[#222222]" />
              </div>

              <div className="flex flex-col lg:border-r border-gray-300 flex-1 lg:pl-6 shrink-0 min-w-20">
                <div className="text-[15px] font-medium mb-1 text-[#222222]">Location</div>
                <div className="text-[19px] font-bold mb-4 text-[#222222]">4.8</div>
                <Map size={32} strokeWidth={1} className="text-[#222222]" />
              </div>

              <div className="flex flex-col flex-1 lg:pl-6 shrink-0 min-w-20">
                <div className="text-[15px] font-medium mb-1 text-[#222222]">Value</div>
                <div className="text-[19px] font-bold mb-4 text-[#222222]">4.8</div>
                <Tag size={32} strokeWidth={1} className="text-[#222222]" />
              </div>
            </div>
          </div>

          {/* Scrollable Chips */}
          <div className="flex overflow-x-auto whitespace-nowrap gap-x-3 pb-4 mb-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-none">
            <div className="flex items-center space-x-2 border border-gray-300 rounded-xl px-5 py-3.5 shrink-0">
              <img src="/assets/images/chips/comfort.png" alt="Comfort" className="w-5 h-5 object-contain" />
              <span className="text-[15px] font-semibold text-[#222222]">Comfort</span>
              <span className="text-[15px] text-[#717171]">6</span>
            </div>
            <div className="flex items-center space-x-2 border border-gray-300 rounded-xl px-5 py-3.5 shrink-0">
              <img src="/assets/images/chips/accuracy.png" alt="Accuracy" className="w-5 h-5 object-contain" />
              <span className="text-[15px] font-semibold text-[#222222]">Accuracy</span>
              <span className="text-[15px] text-[#717171]">5</span>
            </div>
            <div className="flex items-center space-x-2 border border-gray-300 rounded-xl px-5 py-3.5 shrink-0">
              <img src="/assets/images/chips/hot-tub.png" alt="Hot tub" className="w-5 h-5 object-contain" />
              <span className="text-[15px] font-semibold text-[#222222]">Hot tub</span>
              <span className="text-[15px] text-[#717171]">5</span>
            </div>
            <div className="flex items-center space-x-2 border border-gray-300 rounded-xl px-5 py-3.5 shrink-0">
              <img src="/assets/images/chips/condition.png" alt="Condition" className="w-5 h-5 object-contain" />
              <span className="text-[15px] font-semibold text-[#222222]">Condition</span>
              <span className="text-[15px] text-[#717171]">4</span>
            </div>
            <div className="flex items-center space-x-2 border border-gray-300 rounded-xl px-5 py-3.5 shrink-0">
              <img src="/assets/images/chips/hospitality.png" alt="Hospitality" className="w-5 h-5 object-contain" />
              <span className="text-[15px] font-semibold text-[#222222]">Hospitality</span>
              <span className="text-[15px] text-[#717171]">8</span>
            </div>
            <div className="flex items-center space-x-2 border border-gray-300 rounded-xl px-5 py-3.5 shrink-0">
              <img src="/assets/images/chips/cleanliness.png" alt="Cleanliness" className="w-5 h-5 object-contain" />
              <span className="text-[15px] font-semibold text-[#222222]">Cleanliness</span>
              <span className="text-[15px] text-[#717171]">4</span>
            </div>
            <div className="flex items-center space-x-2 border border-gray-300 rounded-xl px-5 py-3.5 shrink-0">
              <img src="/assets/images/chips/amenities.png" alt="Amenities" className="w-5 h-5 object-contain" />
              <span className="text-[15px] font-semibold text-[#222222]">Amenities</span>
              <span className="text-[15px] text-[#717171]">2</span>
            </div>
            <div className="flex items-center space-x-2 border border-gray-300 rounded-xl px-5 py-3.5 shrink-0">
              <img src="/assets/images/chips/decor.png" alt="Decor" className="w-5 h-5 object-contain" />
              <span className="text-[15px] font-semibold text-[#222222]">Decor</span>
              <span className="text-[15px] text-[#717171]">2</span>
            </div>
            <div className="flex items-center space-x-2 border border-gray-300 rounded-xl px-5 py-3.5 shrink-0">
              <img src="/assets/images/chips/indoor-spaces.png" alt="Indoor spaces" className="w-5 h-5 object-contain" />
              <span className="text-[15px] font-semibold text-[#222222]">Indoor spaces</span>
              <span className="text-[15px] text-[#717171]">2</span>
            </div>
            <div className="flex items-center space-x-2 border border-gray-300 rounded-xl px-5 py-3.5 shrink-0">
              <img src="/assets/images/chips/location.png" alt="Location" className="w-5 h-5 object-contain" />
              <span className="text-[15px] font-semibold text-[#222222]">Location</span>
              <span className="text-[15px] text-[#717171]">2</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-24">
            {/* Review 1 */}
            <div>
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-[#F8E8DF] text-[#AD6838] font-semibold text-[18px] rounded-full flex items-center justify-center shrink-0">
                  A
                </div>
                <div>
                  <h3 className="font-semibold text-base">Amit</h3>
                  <p className="text-gray-500 text-sm">2 months on Airbnb</p>
                </div>
              </div>
              <div className="flex items-center mb-2 space-x-2">
                <div className="flex items-center space-x-0.5 text-[#222222]">
                  <Star size={10} className="fill-current" /><Star size={10} className="fill-current" /><Star size={10} className="fill-current" /><Star size={10} className="fill-current" /><Star size={10} className="fill-current" />
                </div>
                <span className="text-sm font-semibold text-[#222222]">· 1 week ago</span>
              </div>
              <p className="text-gray-900 leading-relaxed">
                Very helpful and responsive team. Safe and peaceful stay. loved everything about the property.
              </p>
            </div>
            {/* Review 2 */}
            <div>
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden shrink-0">
                  <img src="/assets/images/avatars/rev2.jpeg" alt="Aheesh" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="font-semibold text-base">Aheesh</h3>
                  <p className="text-gray-500 text-sm">3 years on Airbnb</p>
                </div>
              </div>
              <div className="flex items-center mb-2 space-x-2">
                <div className="flex items-center space-x-0.5 text-[#222222]">
                  <Star size={10} className="fill-current" /><Star size={10} className="fill-current" /><Star size={10} className="fill-current" /><Star size={10} className="fill-current" /><Star size={10} className="fill-current" />
                </div>
                <span className="text-sm font-semibold text-[#222222]">· 2 weeks ago</span>
              </div>
              <p className="text-gray-900 leading-relaxed">
                We had a wonderful stay. The apartment was clean, comfortable, and exactly as shown in the photos. The host was very responsive and helpful throughout our stay. We would definitely recommend this place and would love to stay here again.
              </p>
              <button className="font-semibold underline mt-2 flex items-center hover:text-gray-600 transition text-[#222222]">Show more</button>
            </div>
            {/* Review 3 */}
            <div>
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden shrink-0">
                  <img src="/assets/images/avatars/rev3.jpeg" alt="Samiksha" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="font-semibold text-base">Samiksha</h3>
                  <p className="text-gray-500 text-sm">8 months on Airbnb</p>
                </div>
              </div>
              <div className="flex items-center mb-2 space-x-2">
                <div className="flex items-center space-x-0.5 text-[#222222]">
                  <Star size={10} className="fill-current" /><Star size={10} className="fill-current" /><Star size={10} className="fill-current" /><Star size={10} className="fill-current" /><Star size={10} className="fill-current" />
                </div>
                <span className="text-sm font-semibold text-[#222222]">· May 2026</span>
              </div>
              <p className="text-gray-900 leading-relaxed">
                the host nitish was really great help
              </p>
            </div>
            {/* Review 4 */}
            <div>
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-[#F1E8FA] text-[#8050BA] font-semibold text-[18px] rounded-full flex items-center justify-center shrink-0">
                  V
                </div>
                <div>
                  <h3 className="font-semibold text-base">Vedant</h3>
                  <p className="text-gray-500 text-sm">4 years on Airbnb</p>
                </div>
              </div>
              <div className="flex items-center mb-2 space-x-2">
                <div className="flex items-center space-x-0.5 text-[#222222]">
                  <Star size={10} className="fill-current" /><Star size={10} className="fill-current" /><Star size={10} className="fill-current" /><Star size={10} className="fill-current" /><Star size={10} className="fill-current" />
                </div>
                <span className="text-sm font-semibold text-[#222222]">· May 2026</span>
              </div>
              <p className="text-gray-900 leading-relaxed">
                We had an amazing stay at this property in Goa! The entire home was spotless and exceptionally well-maintained, making us feel comfortable from the moment we arrived. The cleanliness standards were truly impressive, with every corner of the house looking fresh and pristine....
              </p>
              <button className="font-semibold underline mt-2 flex items-center hover:text-gray-600 transition text-[#222222]">Show more</button>
            </div>
            {/* Review 5 */}
            <div>
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden shrink-0">
                  <img src="/assets/images/avatars/rev5.jpeg" alt="Vaibhav S" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="font-semibold text-base">Vaibhav S</h3>
                  <p className="text-gray-500 text-sm">3 years on Airbnb</p>
                </div>
              </div>
              <div className="flex items-center mb-2 space-x-2">
                <div className="flex items-center space-x-0.5 text-[#222222]">
                  <Star size={10} className="fill-current" /><Star size={10} className="fill-current" /><Star size={10} className="fill-current" /><Star size={10} className="fill-current" /><Star size={10} className="fill-current" />
                </div>
                <span className="text-sm font-semibold text-[#222222]">· May 2026</span>
              </div>
              <p className="text-gray-900 leading-relaxed">
                Great great experience living out there , can't expect more , will always look for it in the future and will recommend my friends too.
              </p>
            </div>
            {/* Review 6 */}
            <div>
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden shrink-0">
                  <img src="/assets/images/avatars/rev4.jpeg" alt="Mohd" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="font-semibold text-base">Mohd</h3>
                  <p className="text-gray-500 text-sm">5 years on Airbnb</p>
                </div>
              </div>
              <div className="flex items-center mb-2 space-x-2">
                <div className="flex items-center space-x-0.5 text-[#222222]">
                  <Star size={10} className="fill-current" /><Star size={10} className="fill-current" /><Star size={10} className="fill-current" /><Star size={10} className="fill-current" /><Star size={10} className="fill-current" />
                </div>
                <span className="text-sm font-semibold text-[#222222]">· May 2026</span>
              </div>
              <p className="text-gray-900 leading-relaxed">
                Great place. Exactly as described in the listing.
              </p>
            </div>
          </div>
          <button className="mt-8 border border-gray-900 px-6 py-3 rounded-lg font-semibold text-base hover:bg-gray-100 transition">
            Show all 19 reviews
          </button>
        </div>
      </div>

      {/* Where you'll be */}
      <div id="location" className="w-full max-w-[1920px] mx-auto px-[2.5vw] lg:px-[6.5vw] 2xl:px-[10.5vw]">
        <div className="border-t border-gray-200 py-12">
          <h2 className="text-[22px] font-semibold mb-6">Where you'll be</h2>
          <p className="text-gray-900 mb-6 font-medium">Candolim, Goa, India</p>

          <div className="relative w-full h-132 rounded-xl overflow-hidden mb-8 bg-[#EDF0E2]">
            {/* Water */}
            <div className="absolute top-0 bottom-0 left-0 w-[45%]" style={{
              backgroundColor: '#A8CCE1',
              clipPath: 'polygon(0 0, 100% 0, 60% 100%, 0 100%)'
            }}></div>

            {/* Grid Overlay (Covers both land and water) */}
            <div className="absolute inset-0 pointer-events-none" style={{
              backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.06) 1px, transparent 1px)',
              backgroundSize: '96px 96px'
            }}></div>

            {/* Highlights */}
            <div className="absolute top-[45%] left-[34%] w-24 h-24 bg-[#CDE0B6] rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute top-[58%] right-[18%] w-32 h-32 bg-[#CDE0B6] rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>

            {/* Controls */}
            <button className="absolute top-5 left-5 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.15)] hover:bg-gray-50 transition">
              <Search size={18} className="text-[#222222]" />
            </button>
            <div className="absolute top-5 right-5 flex flex-col space-y-2">
              <button className="w-10 h-10 bg-white rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.15)] flex items-center justify-center hover:bg-gray-50 transition">
                <Plus size={18} className="text-[#222222]" strokeWidth={1.5} />
              </button>
              <button className="w-10 h-10 bg-white rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.15)] flex items-center justify-center hover:bg-gray-50 transition">
                <Minus size={18} className="text-[#222222]" strokeWidth={1.5} />
              </button>
            </div>

            {/* Pin */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-14 h-14 bg-[#222222] rounded-full flex items-center justify-center shadow-[0_0_0_5px_white,0_4px_12px_rgba(0,0,0,0.2)]">
                <HomeIcon size={26} className="text-white" strokeWidth={2} />
              </div>
            </div>
          </div>

          <p className="text-gray-900 text-[15px]">Exact location will be provided after booking.</p>

          <h3 className="text-[20px] text-[#222222] font-semibold mt-12 mb-2">Neighbourhood highlights</h3>
          <p className="text-gray-900 mb-4">Located in the heart of Candolim, Amor de Goa offers a peaceful stay with easy access to beaches, cafés, and popular attractions.</p>
          <button className="font-semibold flex items-center gap-x-1 hover:text-gray-600 transition">
            <span className="underline">Show more</span>
            <ChevronRight size={16} strokeWidth={2} />
          </button>
        </div>
      </div>

      {/* Meet your host */}
      <div className="w-full max-w-[1920px] mx-auto px-[2.5vw] lg:px-[6.5vw] 2xl:px-[10.5vw]">
        <div className="border-t border-gray-200 py-12">
          <h2 className="text-[22px] font-semibold mb-8">Meet your host</h2>
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-24">

            {/* Left Column */}
            <div className="w-full lg:w-87.5 shrink-0">
              {/* Card */}
              <div className="bg-white shadow-[0_6px_16px_rgba(0,0,0,0.12)] rounded-3xl p-6 flex flex-row items-center mb-8">
                {/* Left side of card */}
                <div className="flex flex-col items-center flex-1">
                  <div className="relative w-28 h-28 rounded-full mb-2">
                    <img src="/assets/images/avatars/host.jpeg" alt="Mirashya Homes" className="w-full h-full object-cover rounded-full" />
                    {/* Badge */}
                    <div className="absolute bottom-0 right-0 w-8 h-8 bg-[#E31C5F] rounded-full flex items-center justify-center border-2 border-white">
                      <Check size={16} strokeWidth={4} className="text-white" />
                    </div>
                  </div>
                  <h3 className="text-[26px] font-bold leading-tight">Mirashya</h3>
                  <h3 className="text-[26px] font-bold leading-tight mb-1">Homes</h3>
                  <p className="text-[#222222] font-semibold text-sm">Host</p>
                </div>

                {/* Right side of card */}
                <div className="flex flex-col ml-6 pl-6 border-l border-gray-200">
                  <div className="mb-4">
                    <div className="font-bold text-xl">1,463</div>
                    <div className="text-[10px] font-medium text-[#222222]">Reviews</div>
                  </div>
                  <hr className="mb-4 border-gray-200 w-full" />
                  <div className="mb-4">
                    <div className="font-bold text-xl flex items-center">4.68<Star size={14} className="ml-1 fill-[#222222]" /></div>
                    <div className="text-[10px] font-medium text-[#222222]">Rating</div>
                  </div>
                  <hr className="mb-4 border-gray-200 w-full" />
                  <div>
                    <div className="font-bold text-xl">2</div>
                    <div className="text-[10px] font-medium text-[#222222]">Years hosting</div>
                  </div>
                </div>
              </div>

              {/* Balloon & Hat */}
              <div className="space-y-4 text-base text-[#222222]">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 mr-4 shrink-0">
                    <path d="M12 16c3.314 0 6-3.134 6-7s-2.686-7-6-7-6 3.134-6 7 2.686 7 6 7z" />
                    <path d="M12 16v6" />
                    <path d="M10.5 19.5h3" />
                  </svg>
                  <span>Born in the 80s</span>
                </div>
                <div className="flex items-center">
                  <GraduationCap size={24} strokeWidth={1.5} className="mr-4 shrink-0" />
                  <span>Where I went to school: NICMAR GOA</span>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="flex-1 mt-4 lg:mt-0">
              <h3 className="text-[20px] font-semibold mb-6">Co-Hosts</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-4 mb-10">
                <div className="flex items-center space-x-3">
                  <img src="/assets/images/avatars/co1.jpg" alt="Sharath" className="w-10 h-10 rounded-full object-cover" />
                  <span className="text-sm">Sharath</span>
                </div>
                <div className="flex items-center space-x-3">
                  <img src="/assets/images/avatars/co2.jpg" alt="Aman" className="w-10 h-10 rounded-full object-cover" />
                  <span className="text-sm">Aman Dev Pahwa</span>
                </div>
                <div className="flex items-center space-x-3">
                  <img src="/assets/images/avatars/co3.jpg" alt="Maria" className="w-10 h-10 rounded-full object-cover" />
                  <span className="text-sm">Maria Karen Priyanka</span>
                </div>
                <div className="flex items-center space-x-3">
                  <img src="/assets/images/avatars/rev3.jpeg" alt="Simran" className="w-10 h-10 rounded-full object-cover" />
                  <span className="text-sm">Simran</span>
                </div>
                <div className="flex items-center space-x-3">
                  <img src="/assets/images/avatars/rev4.jpeg" alt="Pallavi" className="w-10 h-10 rounded-full object-cover" />
                  <span className="text-sm">Pallavi</span>
                </div>
                <div className="flex items-center space-x-3">
                  <img src="/assets/images/avatars/rev5.jpeg" alt="Sanyukta" className="w-10 h-10 rounded-full object-cover" />
                  <span className="text-sm">Sanyukta</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-[#F8E8DF] text-[#D84966] font-semibold flex items-center justify-center text-sm">S</div>
                  <span className="text-sm">Shruti</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-[#E5F0FF] text-[#2F6ED2] font-semibold flex items-center justify-center text-sm">A</div>
                  <span className="text-sm">Amisha</span>
                </div>
              </div>

              <h3 className="text-[20px] font-semibold mb-4">Host details</h3>
              <p className="text-[#222222] mb-1">Response rate: 100%</p>
              <p className="text-[#222222] mb-6">Responds within an hour</p>

              <button className="bg-[#F7F7F7] border border-transparent text-[#222222] font-semibold px-6 py-3 rounded-lg hover:bg-gray-200 transition mb-10">
                Message host
              </button>

              <div className="flex items-start text-xs text-[#717171]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 mr-3 shrink-0">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="M12 2v20" />
                </svg>
                <p className="leading-tight pt-1">To help protect your payment, always use Airbnb to send money and communicate with hosts.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Things to Know Section */}
      <div className="w-full max-w-[1920px] mx-auto px-[2.5vw] lg:px-[6.5vw] 2xl:px-[10.5vw]">
        <div className="border-t border-gray-200 py-8">
          <h2 className="text-[22px] font-semibold mb-6">Things to know</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-base text-[#222222]">
            <div className="flex flex-col">
              <CalendarX size={24} strokeWidth={1.5} className="mb-4" />
              <h3 className="text-[18px] text-[#222222] font-semibold mb-3">Cancellation policy</h3>
              <p className="mb-3 leading-snug">Free cancellation before 17 October. Cancel before check-in on 18 October for a partial refund.</p>
              <p className="mb-4 leading-snug">Review this host’s full policy for details.</p>
              <button className="font-semibold underline underline-offset-2 flex items-center hover:text-gray-600 transition w-fit mt-auto">
                Learn more
              </button>
            </div>
            <div className="flex flex-col">
              <Key size={24} strokeWidth={1.5} className="mb-4" />
              <h3 className="text-[18px] text-[#222222] font-semibold mb-3">House rules</h3>
              <p className="mb-3 leading-snug">Check-in after 2:00 pm</p>
              <p className="mb-3 leading-snug">Checkout before 11:00 am</p>
              <p className="mb-4 leading-snug">3 guests maximum</p>
              <button className="font-semibold underline underline-offset-2 flex items-center hover:text-gray-600 transition w-fit mt-auto">
                Learn more
              </button>
            </div>
            <div className="flex flex-col">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 mb-4 shrink-0">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M12 2v20" />
              </svg>
              <h3 className="text-[18px] text-[#222222] font-semibold mb-3">Safety & property</h3>
              <p className="mb-3 leading-snug">Carbon monoxide alarm not reported</p>
              <p className="mb-3 leading-snug">Smoke alarm not reported</p>
              <p className="mb-4 leading-snug">Exterior security cameras on property</p>
              <button className="font-semibold underline underline-offset-2 flex items-center hover:text-gray-600 transition w-fit mt-auto">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* More Stays Nearby */}
      <MoreStaysNearby />

    </div>
  );
}
