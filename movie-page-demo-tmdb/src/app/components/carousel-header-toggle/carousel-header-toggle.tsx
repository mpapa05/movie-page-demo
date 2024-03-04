import React from 'react'

interface CarouselHeaderProps {
  onToggle: (value: string) => void;
  selectedToggle: string; // Currently selected toggle
  toggleTitles: string[]; // Toggle options
}

export default function CarouselHeaderToggle({
  onToggle,
  selectedToggle,
  toggleTitles,
}: CarouselHeaderProps) {

  if (!toggleTitles.includes(selectedToggle)) {
    //without that the initial value is -1
    selectedToggle = toggleTitles[0];
  }


  return (
    <div className="themeSwitcherTwo flex items-center">
      {toggleTitles.map((title) => (
        <label
          key={title}
          className="relative inline-flex cursor-pointer select-none items-center"
        >
          <input
            type="radio"
            value={title}
            checked={selectedToggle === title}
            onChange={() => onToggle(title)}
            className="sr-only"
          />
          <span className={`label flex items-center text-sm font-medium text-black ${selectedToggle === title ? 'text-denim-300' : 'text-denim-950'}`}>
            {title}
          </span>
        </label>
      ))}
      <div
        className={`slider mr-4 absolute flex h-8 w-[60px] items-center rounded-full duration-200`}
        style={{
          transform: `translateX(${toggleTitles.indexOf(selectedToggle) * (toggleTitles.length > 1 ? 50 : 0)}px)`, // Adjust the multiplier as needed
        }}
      >
        <span
          className={`dot h-6 w-6 rounded-full bg-black duration-200`}
        ></span>
      </div>
    </div>
  );
}