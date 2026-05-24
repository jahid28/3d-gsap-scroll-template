import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Optimized3DViewer } from './components/Optimized3DViewer';

const vehicleTabs = {
  hydra: {
    label: 'Hydra',
    title: 'Hydra 2026',
    modelType: 'hydra',
    linkTo: '/hydra',
    image: '/competition/images/robosub2026-bots.jpg',
    features: [
      {
        title: 'Compact Modular Frame',
        tag: 'Mechanical',
        description: 'A smaller, serviceable frame layout designed to support rapid mechanism swaps while preserving competition-ready rigidity.',
        details: [
          'Modular interfaces for dropper and gripper mechanisms',
          'Improved access for assembly, inspection, and repairs',
          'Packaging focused on keeping the vehicle compact'
        ]
      },
      {
        title: 'Autonomy Stack Refresh',
        tag: 'Software',
        description: 'Improved mission architecture for reusable task behaviors, tighter control loops, and faster simulation-to-pool iteration.',
        details: [
          'Reusable behavior modules for common mission tasks',
          'Cleaner handoff between perception, planning, and control',
          'Simulation workflow for testing before pool sessions'
        ]
      },
      {
        title: 'Sensor Integration Layout',
        tag: 'Elect',
        description: 'Cleaner electronics and sensor routing for cameras, navigation feedback, and task payloads inside a compact AUV package.',
        details: [
          'Dedicated routing paths for signal and power wiring',
          'Sensor placement designed around autonomy requirements',
          'More maintainable electronics access during testing'
        ]
      }
    ]
  },
  kraken: {
    label: 'Kraken',
    title: 'Kraken 2026',
    modelType: 'kraken',
    linkTo: '/kraken',
    image: '/competition/images/robosub2026-bots.jpg',
    features: [
      {
        title: 'Experimental Skeleton Hull',
        tag: 'Mechanical',
        description: 'An airfoil-inspired frame concept used to validate new hull geometry, materials, and assembly approaches.',
        details: [
          'Acrylic skeleton concept for rapid visual inspection',
          'Frame geometry used to study drag and stiffness tradeoffs',
          'Mechanically simple structure for iteration and testing'
        ]
      },
      {
        title: 'Torpedo Actuation Testbed',
        tag: 'Elect',
        description: 'Dedicated space for validating a torpedo deployment system with clean integration into the vehicle electronics stack.',
        details: [
          'Electronics layout prepared for actuator control',
          'Mechanism space reserved for torpedo deployment hardware',
          'Designed to support repeatable bench and pool validation'
        ]
      },
      {
        title: 'Mission Testing Platform',
        tag: 'Software',
        description: 'A focused platform for testing perception, autonomy, and control behavior under RoboSub-style task conditions.',
        details: [
          'Useful for isolating experimental mission behaviors',
          'Supports repeatable validation of perception pipelines',
          'Built to test task logic before merging into competition flow'
        ]
      }
    ]
  }
};

const tagStyles = {
  Elect: 'border-sky-300/40 bg-sky-400/15 text-sky-100',
  Software: 'border-emerald-300/40 bg-emerald-400/15 text-emerald-100',
  Mechanical: 'border-orange-300/40 bg-orange-400/15 text-orange-100'
};

export default function Robosub2026Page() {
  const [activeVehicle, setActiveVehicle] = useState('hydra');
  const [openFeature, setOpenFeature] = useState(null);
  const vehicle = vehicleTabs[activeVehicle];
  const tabs = useMemo(() => Object.entries(vehicleTabs), []);

  const handleVehicleChange = (id) => {
    setActiveVehicle(id);
    setOpenFeature(null);
  };

  return (
    <div className="min-h-screen bg-[#181818] text-white font-sans">
      <div className="flex flex-col pt-32 items-center text-center px-4">
        <div className="text-lg text-gray-300">August 2026</div>
        <h1 className="text-5xl sm:text-6xl font-bold text-orange-500 mb-8">RoboSub 2026</h1>

        <div className="inline-flex rounded-lg border border-white/15 bg-white/10 p-1 backdrop-blur-md">
          {tabs.map(([id, tab]) => (
            <button
              key={id}
              type="button"
              onClick={() => handleVehicleChange(id)}
              className={`px-6 py-2 rounded-md text-sm sm:text-base font-semibold transition-all duration-200 ${
                activeVehicle === id
                  ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/20'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <section className="flex flex-col md:flex-row items-center justify-between gap-8 pb-5 md:pb-20 px-8 md:px-20 bg-[#181818]">
        <div className="flex-1 flex items-center justify-center mt-12 md:mt-0 w-full">
          <div className="w-[24rem] h-[24rem] sm:w-[24rem] sm:h-[24rem] md:w-[32rem] md:h-[32rem] lg:w-[44rem] lg:h-[44rem] rounded-full flex items-center justify-center overflow-hidden relative bg-transparent">
            <Optimized3DViewer
              showModel={true}
              scale={[5.5, 5.5, 5.5]}
              enableTouchControls={true}
              modelType={vehicle.modelType}
            />
          </div>
        </div>

        <div className="flex-1 text-center md:text-left">
          <h2 className="text-4xl sm:text-5xl font-bold text-orange-500 mb-4">
            {vehicle.title}
          </h2>
          <p className="text-base sm:text-lg text-gray-300 mb-8 max-w-xl mx-auto md:mx-0">
            Select a vehicle to preview its RoboSub 2026 improvements across mechanical, electrical, and software development.
          </p>
          <Link
            to={vehicle.linkTo}
            className="inline-block bg-[#d73a1a] hover:bg-orange-600 text-white font-semibold px-8 py-2 rounded-lg shadow transition-all duration-200"
          >
            View {vehicle.label}
          </Link>
        </div>
      </section>

      <div className="flex flex-col gap-4 pr-5 pl-5 md:flex-row md:gap-16 justify-center pb-10">
        <Link
          to="/vehicles"
          className="bg-[#d73a1a] hover:bg-orange-600 text-white font-semibold px-8 py-2 rounded-lg shadow transition-all duration-200"
        >
          Click Here To View Hydra & Kraken
        </Link>

        <a
          href="/robosub_2025/Technical-Documentation.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#d73a1a] hover:bg-orange-600 text-white font-semibold px-8 py-2 rounded-lg shadow transition-all duration-200"
        >
          Technical Paper
        </a>

        <a
          href="https://mecatron.notion.site/Robosub-2025-Blog-20c6978f818e80aebb1ec2d603b2cc69"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#d73a1a] hover:bg-orange-600 text-white font-semibold px-8 py-2 rounded-lg shadow transition-all duration-200"
        >
          Team's Blog
        </a>
      </div>

      <section className="bg-[#202020] px-4 sm:px-8 md:px-20 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-orange-500 mb-4">
              Improved Features
            </h2>
            <p className="text-base sm:text-lg text-gray-300">
              {vehicle.title} development focus areas for RoboSub 2026.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {vehicle.features.map((feature, index) => {
              const isOpen = openFeature === index;

              return (
              <article
                key={feature.title}
                className="rounded-lg border border-white/15 bg-white/10 backdrop-blur-md shadow-xl shadow-black/20 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenFeature(isOpen ? null : index)}
                  className="w-full text-left"
                  aria-expanded={isOpen}
                >
                  <div className="aspect-video bg-zinc-900">
                    <img
                      src={vehicle.image}
                      alt={`${feature.title} placeholder`}
                      className="w-full h-full object-cover opacity-80"
                    />
                  </div>
                  <div className="p-5 sm:p-6">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <h3 className="text-xl sm:text-2xl font-bold text-white">
                        {feature.title}
                      </h3>
                      <div className="flex items-center gap-3">
                        <span className={`shrink-0 rounded-full border px-3 py-1 text-xs font-semibold ${tagStyles[feature.tag]}`}>
                          {feature.tag}
                        </span>
                        <span className={`text-2xl leading-none text-gray-300 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                          ^
                        </span>
                      </div>
                    </div>
                    <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </button>
                <div className={`grid transition-all duration-300 ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                  <div className="overflow-hidden">
                    <div className="border-t border-white/10 px-5 sm:px-6 py-5 bg-black/20">
                      <ul className="space-y-2 text-sm sm:text-base text-gray-200 list-disc pl-5">
                        {feature.details.map((detail) => (
                          <li key={detail}>{detail}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
              );
            })}
          </div>
        </div>
      </section>

      <div className="flex pt-20 justify-center bg-[#303030] w-full">
        <h2 className="text-4xl font-extrabold text-orange-500 mb-8">Team Video</h2>
      </div>

      <section className="flex flex-col md:flex-row items-center md:justify-center pt-10 pb-10 px-8 md:px-20 bg-[#303030]">
        <div className="w-full aspect-video max-w-4xl">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/stvEZ86dvd4"
            title="Team Mecatron RoboSub Introduction Video | RoboSub 2026"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      <section className="flex flex-col md:flex-row pt-10 pb-15 px-8 md:px-20 bg-[#181818]">
        <div className="relative flex flex-1 mt-12 md:mt-0 pb-10">
          <img
            src="/images/group.png"
            alt="team"
            className="w-full h-auto brightness-50"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <p className="text-white text-center text-lg sm:text-xl px-4 pb-6 font-bold">
              Click here to view our team members behind Mecatron
            </p>
            <Link
              to="/team"
              className="bg-[#d73a1a] hover:bg-orange-600 text-white font-semibold px-8 py-2 rounded-lg shadow transition-all duration-200"
            >
              Members Page
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
