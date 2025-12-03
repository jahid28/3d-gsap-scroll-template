import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';

export default function GamePage() {
  const [gameScale, setGameScale] = useState(0.65);
  const [containerSize, setContainerSize] = useState({ width: 1101, height: 619 });
  const [isMobile, setIsMobile] = useState(false);
  const [isPortrait, setIsPortrait] = useState(false);
  const [gameLoadError, setGameLoadError] = useState(false);
  const [gameLoaded, setGameLoaded] = useState(false);

  // Force landscape orientation on mobile
  useEffect(() => {
    if (isMobile && isPortrait) {
      // Try to force landscape orientation
      if (screen.orientation && screen.orientation.lock) {
        screen.orientation.lock('landscape').catch(() => {
          // Fallback if orientation lock fails
          console.log('Orientation lock not supported');
        });
      }
    }
  }, [isMobile, isPortrait]);

  // Timeout for game loading
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!gameLoaded && !gameLoadError) {
        console.log('Game loading timeout - assuming load error');
        setGameLoadError(true);
      }
    }, 10000); // 10 second timeout

    return () => clearTimeout(timer);
  }, [gameLoaded, gameLoadError]);

  useEffect(() => {
    const updateGameSize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const isMobileDevice = width < 768;
      const isPortraitMode = height > width;
      
      setIsMobile(isMobileDevice);
      setIsPortrait(isPortraitMode);

      if (isMobileDevice) {
        // Force horizontal mode on mobile - ensure game fits within screen bounds
        const maxHeight = Math.min(height * 0.7, 350); // 70% of screen height, max 350px
        const maxWidth = Math.min(width * 0.9, 600); // 90% of screen width, max 600px
        
        // Calculate scale based on the more restrictive dimension
        const scaleByHeight = maxHeight / 953;
        const scaleByWidth = maxWidth / 1694;
        const mobileScale = Math.min(scaleByHeight, scaleByWidth);
        
        const mobileHeight = 953 * mobileScale;
        const mobileWidth = 1694 * mobileScale;
        
        setGameScale(mobileScale);
        setContainerSize({ width: mobileWidth, height: mobileHeight });
      } else if (width < 1024) { // Tablet
        setGameScale(0.45);
        setContainerSize({ width: 762, height: 429 });
      } else { // Desktop
        setGameScale(0.65);
        setContainerSize({ width: 1101, height: 619 });
      }
    };

    updateGameSize();
    
    // Add multiple event listeners for better responsiveness
    window.addEventListener('resize', updateGameSize);
    window.addEventListener('orientationchange', updateGameSize);
    
    // Use ResizeObserver for more responsive updates
    const resizeObserver = new ResizeObserver(() => {
      updateGameSize();
    });
    
    // Observe the document body for size changes
    resizeObserver.observe(document.body);
    
    // Also update on scroll and other events for better responsiveness
    const handleScroll = () => updateGameSize();
    window.addEventListener('scroll', handleScroll);
    
    // Update more frequently for smoother scaling
    const interval = setInterval(updateGameSize, 100);
    
    return () => {
      window.removeEventListener('resize', updateGameSize);
      window.removeEventListener('orientationchange', updateGameSize);
      window.removeEventListener('scroll', handleScroll);
      resizeObserver.disconnect();
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#181818]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-8 md:px-20">
        <div className="max-w-screen-xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-orange-500 mb-6">
            Microplastics Game
          </h1>
          <p className="text-xl sm:text-2xl text-white mb-8 max-w-3xl mx-auto">
            Learn about microplastics and their impact on marine environments through this interactive educational game.
          </p>
        </div>
      </section>

      {/* Game Container */}
      <section className="px-4 sm:px-8 md:px-20 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="bg-[#232323] rounded-xl p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-white mb-4">Interactive Learning Experience</h2>
            <p className="text-gray-300 mb-6">
              This game helps educate children about microplastics, which are ubiquitous pollutants in the marine environment.
            </p>
            
            {/* GameMaker HTML5 Game - responsive container */}
            <div className={`bg-black rounded-lg relative flex items-center justify-center p-2 ${
              isMobile ? 'min-h-[300px]' : ''
            }`}>
              {/* Mobile Portrait Mode Warning */}
              {isMobile && isPortrait && (
                <div className="absolute inset-0 bg-black/90 flex items-center justify-center z-20">
                  <div className="text-center text-white p-6">
                    <div className="text-6xl mb-4">📱</div>
                    <h3 className="text-xl font-bold mb-2">Please Rotate Your Device</h3>
                    <p className="text-sm text-gray-300">
                      This game requires landscape orientation for the best experience.
                    </p>
                    <div className="mt-4 text-2xl animate-spin">🔄</div>
                  </div>
                </div>
              )}
              
              {/* Mobile Landscape Message */}
              {isMobile && !isPortrait && (
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10 bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-lg">
                  ✅ Perfect! Game is ready in landscape mode
                </div>
              )}
              
              {/* Game Loading Error */}
              {gameLoadError && (
                <div className="absolute inset-0 bg-black/90 flex items-center justify-center z-20">
                  <div className="text-center text-white p-6">
                    <div className="text-6xl mb-4">⚠️</div>
                    <h3 className="text-xl font-bold mb-2">Game Loading Error</h3>
                    <p className="text-sm text-gray-300 mb-4">
                      The game failed to load. This might be due to browser restrictions.
                    </p>
                    <button 
                      onClick={() => window.open('/game/index.html', '_blank')}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold"
                    >
                      Open Game in New Tab
                    </button>
                  </div>
                </div>
              )}
              
              {/* Game Loading Indicator */}
              {!gameLoaded && !gameLoadError && (
                <div className="absolute inset-0 bg-black/90 flex items-center justify-center z-10">
                  <div className="text-center text-white p-6">
                    <div className="animate-spin text-4xl mb-4">⚙️</div>
                    <p className="text-lg">Loading Game...</p>
                  </div>
                </div>
              )}
              
              <div className={`w-full flex items-center justify-center ${
                isMobile ? 'h-[350px]' : 'h-[400px] sm:h-[500px] md:h-[600px]'
              }`}>
                <div className="relative w-full h-full flex items-center justify-center">
                  <div 
                    className="relative"
                    style={{
                      width: `${containerSize.width}px`,
                      height: `${containerSize.height}px`,
                      maxWidth: '100%',
                      maxHeight: '100%'
                    }}
                  >
                    <iframe 
                      src="/gamefiles/index.html" 
                      className="border-0 absolute inset-0"
                      title="Microplastics Game"
                      allowFullScreen
                      scrolling="no"
                      frameBorder="0"
                      sandbox="allow-scripts allow-same-origin"
                      onLoad={(e) => {
                        console.log('Game iframe loaded successfully');
                        setGameLoaded(true);
                        // Check if game actually loaded by trying to access iframe content
                        setTimeout(() => {
                          try {
                            const iframeDoc = e.target.contentDocument || e.target.contentWindow.document;
                            const canvas = iframeDoc.querySelector('#canvas');
                            if (!canvas) {
                              setGameLoadError(true);
                              setGameLoaded(false);
                            }
                          } catch (err) {
                            // Cross-origin restrictions - this is expected in production
                            console.log('Cannot access iframe content (expected in production)');
                          }
                        }, 3000);
                      }}
                      onError={(e) => {
                        console.error('Game iframe failed to load:', e);
                        setGameLoadError(true);
                        setGameLoaded(false);
                      }}
                      style={{
                        width: '1694px',
                        height: '953px',
                        transform: `scale(${gameScale})`,
                        transformOrigin: 'top left'
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Instructions */}
            <div className="mt-6 p-4 bg-[#2a2a2a] rounded-lg">
              <h3 className="text-lg font-semibold text-white mb-2">How to Play:</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Learn about different types of microplastics</li>
                <li>• Understand their impact on marine life</li>
                <li>• Complete challenges to test your knowledge</li>
                <li>• Discover ways to reduce plastic pollution</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Content */}
      <section className="px-4 sm:px-8 md:px-20 pb-16">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#232323] rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">What are Microplastics?</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Microplastics are tiny plastic particles less than 5mm in size that can be found in oceans, 
                rivers, and even the air we breathe. They come from various sources including broken-down 
                larger plastic items, microbeads in personal care products, and synthetic fibers from clothing.
              </p>
            </div>
            
            <div className="bg-[#232323] rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Why Should We Care?</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                These tiny particles can be ingested by marine animals, potentially causing harm to their 
                health and entering the food chain. Understanding microplastics helps us make better choices 
                about plastic use and disposal.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 