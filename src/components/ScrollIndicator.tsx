
import React from 'react';

interface ScrollIndicatorProps {
  isDayMode: boolean;
}

const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({ isDayMode }) => {
  return (
    <div className={`absolute bottom-12 left-0 right-0 flex justify-center ${
      isDayMode ? 'text-gray-600' : 'text-gray-300'
    }`}>
      <a 
        href="#concept"
        aria-label="Faire défiler vers la section concept du festival"
        className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-current rounded-md p-2"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="32" 
          height="32" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
        </svg>
      </a>
    </div>
  );
};

export default ScrollIndicator;
