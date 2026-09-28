import { ChevronLeft, ChevronRight, Keyboard } from 'lucide-react';

export default function Calendar() {
  const renderDays = (month: 'oct' | 'nov') => {
    const isOct = month === 'oct';
    
    // Oct 2026 starts on Thursday (index 4)
    // Nov 2026 starts on Sunday (index 0)
    const emptyDays = isOct ? 4 : 0;
    const totalDays = isOct ? 31 : 30;
    
    const days = [];
    
    // Add empty slots for the first week
    for (let i = 0; i < emptyDays; i++) {
      days.push(<div key={`empty-${i}`} className="w-full h-12" />);
    }
    
    for (let i = 1; i <= totalDays; i++) {
      let isSelected = false;
      let isStart = false;
      let isEnd = false;
      let isInBetween = false;
      let isStrikethrough = false;
      let isPast = false; // in the screenshot, days before Oct 18 aren't greyed out, they are selectable.
      
      if (isOct) {
        if (i === 18) {
          isSelected = true;
          isStart = true;
        } else if (i === 23) {
          isSelected = true;
          isEnd = true;
        } else if (i > 18 && i < 23) {
          isSelected = true;
          isInBetween = true;
        }
      } else {
        // Nov 18-24 and 29-30 are strikethrough and greyed out
        if ((i >= 18 && i <= 24) || (i >= 29 && i <= 30)) {
          isStrikethrough = true;
        }
      }
      
      days.push(
        <div key={`day-${i}`} className="relative w-full h-12 flex items-center justify-center">
          {/* Background highlighting for selected range */}
          {isInBetween && (
            <div className="absolute inset-0 bg-[#f7f7f7]" />
          )}
          {isStart && (
            <div className="absolute inset-y-0 right-0 w-1/2 bg-[#f7f7f7]" />
          )}
          {isEnd && (
            <div className="absolute inset-y-0 left-0 w-1/2 bg-[#f7f7f7]" />
          )}
          
          {/* The day number circle */}
          <div className={`
            relative z-10 flex items-center justify-center w-12 h-12 rounded-full text-sm font-semibold
            ${(isStart || isEnd) ? 'bg-[#222222] text-white' : ''}
            ${(!isStart && !isEnd && !isStrikethrough) ? 'text-[#222222]' : ''}
            ${(!isSelected && !isStrikethrough) ? 'hover:border hover:border-black cursor-pointer' : ''}
            ${isStrikethrough ? 'text-[#b0b0b0] line-through' : ''}
          `}>
            {i}
          </div>
        </div>
      );
    }
    
    return days;
  };

  return (
    <div className="pt-8 pb-4 w-full">
      <div className="flex flex-col mb-6">
        <h2 className="text-[22px] font-semibold mb-1 text-[#222222]">5 nights in Candolim</h2>
        <p className="text-[#717171] text-sm">18 Oct 2026 - 23 Oct 2026</p>
      </div>
      
      <div className="relative">
        {/* Navigation Arrows */}
        <div className="absolute top-0 left-0 right-0 flex justify-between z-10 px-4 mt-1">
          <button className="p-2 rounded-full hover:bg-gray-100 transition">
            <ChevronLeft size={20} className="text-[#222222]" />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100 transition">
            <ChevronRight size={20} className="text-[#222222]" />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-x-12 mb-4">
          {/* October Calendar */}
          <div>
            <h3 className="text-center font-semibold text-[#222222] mb-6">October 2026</h3>
            <div className="grid grid-cols-7 mb-2 text-center text-xs font-semibold text-[#717171]">
              <div>S</div><div>M</div><div>T</div><div>W</div><div>T</div><div>F</div><div>S</div>
            </div>
            <div className="grid grid-cols-7 row-gap-0">
              {renderDays('oct')}
            </div>
          </div>

          {/* November Calendar */}
          <div>
            <h3 className="text-center font-semibold text-[#222222] mb-6">November 2026</h3>
            <div className="grid grid-cols-7 mb-2 text-center text-xs font-semibold text-[#717171]">
              <div>S</div><div>M</div><div>T</div><div>W</div><div>T</div><div>F</div><div>S</div>
            </div>
            <div className="grid grid-cols-7 row-gap-0">
              {renderDays('nov')}
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mt-2">
        <button className="p-2 hover:bg-gray-100 rounded-full transition">
          <Keyboard size={24} className="text-[#222222]" />
        </button>
        <button className="underline font-semibold text-[15px] text-[#222222] hover:bg-gray-100 rounded-lg px-3 py-2 transition -mr-3">
          Clear dates
        </button>
      </div>
    </div>
  );
}
