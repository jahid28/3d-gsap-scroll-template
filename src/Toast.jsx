import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Toast() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show toast after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 animate-slide-up">
      <div className="bg-orange-500 text-white px-4 py-3 rounded-lg shadow-lg max-w-xs border-l-4 border-orange-600">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="font-semibold text-sm mb-1">Mecatron is Hiring For 2026!</div>
            <div className="text-xs opacity-90 mb-2">
              Join our team and help build the future of underwater robotics
            </div>
            <a 
              href="https://mecatron.notion.site/ay-25-26-recruitments" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-white text-orange-500 text-xs font-semibold px-3 py-1 rounded hover:bg-gray-100 transition-colors"
            >
              Apply Now
            </a>
          </div>
          <button 
            onClick={handleClose}
            className="ml-3 text-white hover:text-gray-200 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
} 