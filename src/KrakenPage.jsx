import { useState, useRef, useEffect, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Scene from "./scene";
import Navbar from './Navbar';
gsap.registerPlugin(ScrollTrigger);

// Tab Navigation Component (self-contained)
function TabNavigation({ sections, onTabClick, visible, onExited, onInteraction }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (visible) {
      setShow(true);
    } else {
      setShow(false);
      const timeout = setTimeout(() => {
        if (onExited) onExited();
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [visible, onExited]);

  return (
    <div className="fixed bottom-3 left-1/2 transform -translate-x-1/2 z-50 pointer-events-none w-[90vw] max-w-md sm:w-auto sm:max-w-none px-2 sm:bottom-6 sm:px-0">
      <div
        className={`
          bg-black/90 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl w-full px-4 sm:px-8 py-3
          flex space-x-2 sm:space-x-4 flex-nowrap overflow-x-auto scrollbar-hide
          transition-all duration-500 ease-out
          ${show ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}
          pointer-events-auto
        `}
      >
        {sections.map((section, index) => (
          <button
            key={index}
            onClick={() => {
              onTabClick(section.id);
              if (onInteraction) onInteraction();
            }}
            onTouchStart={() => {
              if (onInteraction) onInteraction();
            }}
            className="px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 text-white bg-white/10 hover:bg-white/20 rounded-xl transition-all duration-300 text-xs sm:text-sm md:text-base font-medium border border-white/20 hover:border-white/40 hover:scale-105 active:scale-95 whitespace-nowrap flex-shrink-0"
          >
            {section.title}
          </button>
        ))}
      </div>
    </div>
  );
}

const krakenSpecifications = [
    {
    title: "Vehicle's Dimensions",
    bullets: ["Length: 0.61m","Width: 0.61m", "Height: 0.27m"]
  },
  {
    title: "Mass",
    bullets: ["Mass: 21kg in Air"]
  },
  {
    title: "Degrees of Freedom",
    bullets: ["6 (Surge, Sway, Heave, Roll, Pitch, Yaw)"]
  },
  {
    title: "Computer Stack",
    bullets: ["16GB RAM", "512GB M.2SATA3 SSD", "NVIDIA Jetson Orin NX Super"]
  },
  {
    title: "Acoustics System",
    bullets: ["Aquarian AS-1 Hydrophones (x3)",
        "Custom-Designed Filter Board",
        "Teensy 4.1 Microcontroller",
        "Aquarian PA-4 Pre-Amplifier", 
        "ROVMAKER 60mm Acrylic Underwater Electronic Enclosure",
        ]
  },
  {
    title: "Control System",
    bullets: ["BlueRobotics T200 Thrusters (x8)",
    "ROVMAKER 35A ESC (x8)",
    "Holybro Pixhawk 6C Controller"
]
  },
  {
    title: "Navigation Suite",
    bullets: ["Water Linked A50 DVL", "VectorNav VN-100 IMU",
    ]
  },
  {
    title: "Sensors",
    bullets: ["ROVMAKER Bar30 Pressure Sensor","DWE exploreHD Camera (forward facing)"]
  },
  {
    title: "Actuators",
    bullets: [
      "15 Kg Electromagnet (30mm x 30mm x 20mm) (x2) - Torpedo",
      "ROVMAKER 60mm Acrylic Underwater Electronic Enclosure",
    ]
  },
  {
    title: "Power System",
    bullets: [
      "4S 88.8Wh LiPo Battery (x2)",
      "Custom-Designed Power Distribution Unit (x2)",
      "ROVMAKER 90mm Acrylic Underwater Electronic Enclosure (x2)"
    ]
  },
  {
    title: "Software Architecture",
    bullets: ["Robot Operating System 2 (ROS 2)","Ubuntu 24.04 LTS"]
  },
  {
    title: "Waterproofing",
    bullets: [
      "CNC Aluminum Electronics Enclosure (300 x 150 x 150 mm)",
      "ROVMAKER M10 Cable Penetrators",
      "ROVMAKER Underwater Connectors",
      "Blue Trail Engineering Cobalt Series"
    ]
  }
];

function KrakenPage() {
  const mainRef = useRef(null)
  const sceneRef = useRef(null)
  const [progress, setProgress] = useState(0);
  const [tabsVisible, setTabsVisible] = useState(false);
  const [tabsMounted, setTabsMounted] = useState(false);
  const timeoutRef = useRef(null);

  // Landscape orientation check removed - allowing all orientations

  // Define sections for navigation
  const sections = [
    { id: 'intro', title: 'Intro' },
    { id: 'manoeuvrability', title: 'Hydrodynamically Optimized' },
    { id: 'energy', title: 'Durable' },
    { id: 'simulation', title: 'Ease of Manufacturability' },
    { id: 'mission', title: 'BT-Based Mission Planning' },
    { id: 'controller', title: 'Upgraded Perception' }
  ];

  // Function to scroll to section
  const scrollToSection = (sectionId) => {
    const sectionMap = {
      'intro': 0.05,        // Start of intro section
      'manoeuvrability': 0.33,  // Manoeuvrability section
      'energy': 0.50,       // Energy Efficiency section
      'simulation': 0.67,   // Unity Simulation section
      'mission': 0.84,      // Mission Planner section
      'controller': 0.99    // Ardusub Controller section
    };
    const targetProgress = sectionMap[sectionId];
    const storyHeight = window.innerHeight * 6;
    const targetScrollY = storyHeight * targetProgress;
    window.scrollTo({
      top: targetScrollY,
      behavior: 'smooth'
    });
  };

  // Handle mouse/touch enter/leave for bottom area
  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setTabsMounted(true);
    setTabsVisible(true);
    timeoutRef.current = setTimeout(() => {
      setTabsVisible(false);
    }, 4000);
  };

  const handleMouseLeave = () => {
    // Don't immediately hide tabs - let the 4-second timer handle it
  };

  // Handle touch events for mobile
  const handleTouchStart = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setTabsMounted(true);
    setTabsVisible(true);
    timeoutRef.current = setTimeout(() => {
      setTabsVisible(false);
    }, 4000);
  };

  // Handle tab interaction to prevent auto-hide
  const handleTabInteraction = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setTabsVisible(false);
    }, 4000);
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // When exit animation finishes, unmount the tab
  const handleTabExited = () => {
    setTabsMounted(false);
  };

  useEffect(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: mainRef.current,
        start: "top top",
        end: () => `+=${window.innerHeight * 6}`,
        scrub: 1,
        onUpdate: (self) => {
          setProgress(self.progress)
        }
      }
    })
    .to(sceneRef.current, {
        ease: "none",
        x: '0vw',
        y: '100vh',
      })
      .to(sceneRef.current, {
        ease: "none",
        x: '-25vw',
        y: '200vh',
      })
      .to(sceneRef.current, {
        ease: "none",
        x: '25vw',
        y: '300vh',
      })
      .to(sceneRef.current, {
        ease: "none",
        x: '-25vw',
        y: '400vh',
      })
      .to(sceneRef.current, {
        ease: "none",
        x: '25vw',
        y: '500vh',
      })
      .to(sceneRef.current, {
        ease: "none",
        x: '-25vw',
        y: '600vh',
      })
  }, []);

  return (
    <main ref={mainRef} className="overflow-x-hidden bg-[#232323] min-h-screen">
      <Navbar />
      {/* Clickable down arrow indicator for tab */}
      <div 
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 pointer-events-auto cursor-pointer"
        onClick={handleTouchStart}
        onTouchStart={handleTouchStart}
      >
        <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white opacity-70 animate-bounce hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      {/* Invisible hover area at bottom of screen - made larger to prevent flickering */}
      <div 
        className="fixed bottom-0 left-0 right-0 h-20 z-40"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
      />
      <Suspense
        fallback={
          <div className="fixed inset-0 grid place-items-center bg-black text-white text-sm sm:text-base">
            Loading 3D Model...
          </div>
        }
      >
        {/* Tab Navigation - appears on hover/click at bottom for 4 seconds, with smooth slide in/out */}
        {tabsMounted && (
          <TabNavigation
            sections={sections}
            onTabClick={scrollToSection}
            visible={tabsVisible}
            onExited={handleTabExited}
            onInteraction={handleTabInteraction}
          />
        )}
        {/* 3D Scene */}
        <section className="relative grid place-items-center h-[100vh]">
          <div ref={sceneRef} className="h-[100vh] w-[100vw] text-white z-0">
            <Canvas>
              <Scene progress={progress} modelType="kraken" />
            </Canvas>
          </div>
        </section>
        {/* Scroll-based overlays and sections */}
        <section className="relative flex items-center justify-center h-[100vh]">
          {/* Lucy */}
          {progress < 0.10 && (
            <>
              <div className="fixed inset-0 bg-black/50 z-10 pointer-events-none"></div>
              <p className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 mx-4 w-fit text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold text-white text-center z-20 pointer-events-none">
                Kraken
              </p>
            </>
          )}
          {/* is */}
          {progress >= 0.10 && progress < 0.15 && (
            <>
              <div className="fixed inset-0 bg-black/50 z-10 pointer-events-none"></div>
              <p className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 mx-4 w-fit text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold text-white text-center z-20 pointer-events-none">
                designed
              </p>
            </>
          )}
          {/* is */}
          {progress >= 0.15 && progress < 0.20 && (
            <>
              <div className="fixed inset-0 bg-black/50 z-10 pointer-events-none"></div>
              <p className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 mx-4 w-fit text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold text-white text-center z-20 pointer-events-none">
                by
              </p>
            </>
          )}
          {/* cute */}
          {progress >= 0.20 && progress < 0.30 && (
            <>
              <div className="fixed inset-0 bg-black/50 z-10 pointer-events-none" style={{
        backgroundColor: `rgba(0,0,0,${0.5 * (1 - (progress - 0.20) / 0.20)})`,
        transition: "background-color 0.2s linear"
      }}></div>
              <p className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 mx-4 w-fit text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold text-white text-center z-20 pointer-events-none">
                Mecatron
              </p>
            </>
          )}
        </section>
        <section className="relative flex items-center justify-evenly h-[100vh]">
          <p className="w-[50%] border-0 border-red-700"></p>
          <div className="text-white w-[50%] text-center px-2 sm:px-4">
            <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-3 md:mb-6">Hydrodynamically Optimized</h2>
            <p className="text-xs sm:text-sm md:text-lg lg:text-2xl xl:text-4xl font-semibold">
              Kraken has been optimized to be low drag featuring a outer shell which helps to guide the flow of water around the vehicle
            </p>
          </div>
        </section>
        <section className="relative flex items-center justify-evenly h-[100vh]">
          <div className="text-white order-1 w-[50%] text-center px-2 sm:px-4">
            <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-3 md:mb-6">Durable</h2>
            <p className="text-xs sm:text-sm md:text-lg lg:text-2xl xl:text-4xl font-semibold">
              Kraken is designed to be highly durable, featuring a strong acrylic skeleton which can withstand high loads
            </p>
          </div>
          <p className="w-[50%] order-2"></p>
        </section>
        <section className="relative flex items-center justify-evenly h-[100vh]">
          <p className="w-[50%] border-0 border-red-700"></p>
          <div className="text-white w-[50%] text-center px-2 sm:px-4">
            <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-3 md:mb-6">Ease of Manufacturability</h2>
            <p className="text-xs sm:text-sm md:text-lg lg:text-2xl xl:text-4xl font-semibold">
              Kraken features very minimal number components that are easy to assemble making the vehicle very easy to construct
            </p>
          </div>
        </section>
        <section className="relative flex items-center justify-evenly h-[100vh]">
          <div className="text-white order-1 w-[50%] text-center px-2 sm:px-4">
            <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-3 md:mb-6">BT-Based Mission Planning</h2>
            <p className="text-xs sm:text-sm md:text-lg lg:text-2xl xl:text-4xl font-semibold">
              Fully reusable and customisable behavior trees to make mission planning a breeze
            </p>
          </div>
          <p className="w-[50%] order-2"></p>
        </section>
        <section className="relative flex items-center justify-evenly h-[100vh]">
          <p className="w-[50%] border-0 border-red-700"></p>
          <div className="text-white w-[50%] text-center px-2 sm:px-4">
            <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-3 md:mb-6">Upgraded Perception</h2>
            <p className="text-xs sm:text-sm md:text-lg lg:text-2xl xl:text-4xl font-semibold">
              Kraken features an upgraded perception algorithm that uses depth segmentation to improve 3D pose estimation
            </p>
          </div>
        </section>
        <section className="relative z-10 min-h-screen bg-[#171717] px-4 sm:px-8 lg:px-16 py-20 sm:py-24">
          <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-orange-500 mb-4">
                Vehicle Specifications
              </h2>
              <p className="mx-auto max-w-3xl text-sm sm:text-base md:text-lg text-gray-300">
                Kraken is built as an experimental platform for validating new hull materials, actuation systems, and RoboSub-ready autonomy.
              </p>
            </div>

            <div className="rounded-lg border border-white/15 bg-white/10 backdrop-blur-md shadow-xl shadow-black/20 py-6 px-8 sm:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {krakenSpecifications.map((spec) => (
              <div key={spec.title}>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-4">
                  {spec.title}
                </h3>

                    {spec.bullets.map((bullet) => (
                      <p key={bullet} className="text-sm sm:text-base leading-relaxed text-gray-200">
                        {bullet}
                      </p>
                    ))}
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-10">
          <Link
          to="/robosub2026"
          className="bg-[#d73a1a] hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200"
          >
          View our RoboSub 2026 Development
          </Link>
          </div>
          </div>
        </section>

      </Suspense>
    </main>
  );
}

export default KrakenPage; 
