import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';
import { Optimized3DViewer } from './components/Optimized3DViewer';

const sharedSoftwareFeature = {
  title: 'Software',
  tag: 'Software',
  description: 'To manage dual-AUV complexity, we utilized cross-platform Docker containerization for streamlined development and ROS2 composition to minimize latency and CPU overhead.',
  details: [
    'UnityMDS',
    'Perception',
    'Mission Planning',
    'Localization',
    'Containerization'
  ],
  image: '/robosub_2026/software-header.png',
};

const sharedElectricalFeature = {
  title: 'Electrical',
  tag: 'Electrical',
  description: 'This year’s electrical power distribution is engineered to deliver more power, greater intelligence, and flexibility.',
  details: [
    'Battery Management System (BMS)',
    'Power Distribution Unit (PDU)',
    'Actuator Board',
    'Acoustics',
  ],
  image: '/robosub_2026/electrical-header.png',
};

const vehicleTabs = {
  hydra: {
    label: 'Hydra',
    title: 'Hydra 2026',
    modelType: 'hydra',
    linkTo: '/hydra',
    image: '/competition/images/robosub2026-bots.jpg',
    features: [
      {
        title: 'Mechanical',
        tag: 'Mechanical',
        description: 'Hydra 2026 is an upgraded version of Lucy 2025, with an updated thruster configuration, improved frame through topology optimization, and greater design modularity.',
        details: [
          '8-Thruster Configuration',
          'Mass Optimization',
          'Modular Frame Design',
          'Dropper',
          'Gripper'
        ], 
        subpage: '/hydra/mechanical',
        image: '/robosub_2026/mechanical-hydra-header.png',
      },
      {
        ...sharedElectricalFeature,
        subpage: '/hydra/electrical'
      },
      {
        ...sharedSoftwareFeature,
        subpage: '/hydra/software',
      },
    ]
  },
  kraken: {
    label: 'Kraken',
    title: 'Kraken 2026',
    modelType: 'kraken',
    linkTo: '/kraken',
    image: '/robosub_2026/mechanical-header.png',
    features: [
      {
        title: 'Mechanical',
        tag: 'Mechanical',
        description: 'Kraken is an experimental platform for Mecatron to develop more mature manufacturing processes. Featuring an acrylic skeleton and a metal electrical box, Kraken aims to be more durable and maneuverable than our previous vehicles.',
        details: [
          '8-Thruster Configuration',
          'Acrylic Skeletal Frame',
          'Hydrodynamics Optimization',
          'CNC Aluminum Electronics Enclosure Box',
          'Torpedo'
        ],
        subpage: '/kraken/mechanical',
        image: '/robosub_2026/mechanical-header.png'
      },
      {
        ...sharedElectricalFeature,
        subpage: '/kraken/electrical',
      },
      {
        ...sharedSoftwareFeature,
        subpage: '/kraken/software'
      },
    ]
  }
};

const tagStyles = {
  Electrical: 'border-sky-300/40 bg-sky-400/15 text-sky-100',
  Software: 'border-emerald-300/40 bg-emerald-400/15 text-emerald-100',
  Mechanical: 'border-orange-300/40 bg-orange-400/15 text-orange-100'
};

const journeyTimeline = [
  {
    phase: 'Phase 1',
    title: 'Exploration & Experimentation',
    period: 'Nov 2025 - Jan 2026',
    details: [
      'Acoustics & Hardware Evaluation:',
      'Vehicle Frame Optimization:',
      'Software Prototyping:'
    ],
    subpoints: [
      'Conducted baseline hydrophone and speaker testing. This year, we are determined to develop and deploy in-house acoustic capabilities.',
      'Designed initial hull and frame iterations for two underwater vehicles, with a focus on modularity, improved hydrodynamics, and a reconfigured thruster layout for enhanced maneuverability.',
      'Explored and benchmarked various spatial navigation and perception packages to establish a robust foundation for an improved software stack.'
    ]
  },
  {
    phase: 'Phase 2',
    title: 'Systems Integration & Baseline Validation',
    period: 'Feb 2026 - Apr 2026',
    details: [
      'Electrical Integration: Gradual integration of the Power Distribution Unit (PDU), incorporating CAN-bus communications, voltage/current sensing, and upgraded compute capabilities.',
      'Software Fusion: Integrated navigation and perception modules to establish a functional operational baseline.',
      'Regression Testing: Performed the previous year’s Gate task to validate that the new software stack meets or exceeds prior performance benchmarks.'
    ]
  },
  {
    phase: 'Phase 3',
    title: 'Mission-Specific Testing & Reliability',
    period: 'May 2026 - Jul 2026',
    details: [
      'Full System Pool Tests: Transitioned to intensive pool testing with fully assembled vehicles and the validated software stack.',
      'Task-Specific Optimization: Conducted individual testing for both vehicles on their assigned competition tasks to bridge the sim-to-real domain gap.',
      'Operational Validation: Focused on ensuring the reliability, repeatability, and robustness of autonomous behaviors in a physical environment in preparation for RoboSub 2026.'
    ]
  }
];

function TimelineDetail({ detail }) {
  const colonIndex = detail.indexOf(':');

  if (colonIndex === -1) {
    return <>{detail}</>;
  }

  return (
    <>
      <strong>{detail.slice(0, colonIndex + 1)}</strong>
      {detail.slice(colonIndex + 1)}
    </>
  );
}

export default function Robosub2026Page() {
  const [activeVehicle, setActiveVehicle] = useState('hydra');
  const [openTimelinePhase, setOpenTimelinePhase] = useState(null);
  const vehicle = vehicleTabs[activeVehicle];
  const tabs = useMemo(() => Object.entries(vehicleTabs), []);

  const handleVehicleChange = (id) => {
    setActiveVehicle(id);
  };

  return (
    <div className="min-h-screen bg-[#181818] text-white font-sans">
      <div className="flex flex-col pt-32 items-center text-center px-4">
        <div className="text-lg text-gray-300">July 2026</div>
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

      <section className="flex flex-col md:flex-row items-center justify-between gap-4 pb-0 px-8 md:px-20 bg-[#181818]">
        <div className="flex-1 flex items-center justify-center mt-6 md:mt-0 w-full">
          <div className="w-[20rem] h-[20rem] sm:w-[23rem] sm:h-[23rem] md:w-[30rem] md:h-[30rem] lg:w-[36rem] lg:h-[22rem] rounded-full flex items-center justify-center overflow-hidden relative bg-transparent">
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
          <p className="text-base sm:text-lg text-gray-300 mb-5 max-w-xl mx-auto md:mx-0">
            Interact with the 3D model on the left to explore a 360° view of the vehicle!
          </p>
        </div>

      </section>

      <div className="flex flex-col gap-3 px-5 md:flex-row md:gap-5 justify-center -mt-2 md:-mt-8 pb-10">
        <Link
            to={vehicle.linkTo}
            className="inline-block bg-orange-600 hover:bg-[#d73a1a] text-white font-semibold px-8 py-2 rounded-lg shadow"
          >
            View {vehicle.label}
          </Link>
        <a
          href="/robosub_2026/Mecatron-Technical-Design-Report-2026.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-orange-600 hover:bg-[#d73a1a] text-white font-semibold px-8 py-2 rounded-lg shadow transition-all duration-200"
        >
          Technical Paper 2026
        </a>

        <Link
          to="/blog"
          className="inline-block bg-orange-600 hover:bg-[#d73a1a] text-white font-semibold px-8 py-2 rounded-lg shadow transition-all duration-200"
        >
          Team Blog
        </Link>
      </div>
        

      <section className="bg-[#202020] px-4 sm:px-8 md:px-20 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-orange-500 mb-4">
              Improved Features
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {vehicle.features.map((feature) => (
              <article
                key={feature.title}
                className="flex h-full flex-col rounded-lg border border-white/15 bg-white/10 backdrop-blur-md shadow-xl shadow-black/20 overflow-hidden"
              >
                <div className="aspect-video bg-zinc-900">
                  <img
                    src={feature.image}
                    alt={`${feature.title} placeholder`}
                    className="w-full h-full object-cover opacity-80"
                  />
                </div>

                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {feature.title}
                    </h3>

                    <span
                      className={`shrink-0 rounded-full border px-3 py-1 text-xs font-semibold ${tagStyles[feature.tag]}`}
                    >
                      {feature.tag}
                    </span>
                  </div>

                  <p className="text-sm sm:text-base text-gray-200 leading-relaxed mb-4">
                    {feature.description}
                  </p>

                  <ul className="space-y-2 text-sm sm:text-base text-gray-200 list-disc pl-5">
                    {feature.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>

                  <div className="mt-auto flex justify-center pt-6">
                    <Link
                      to={feature.subpage}
                      className="bg-[#d73a1a] hover:bg-orange-600 text-white font-semibold px-8 py-2 rounded-lg shadow transition-all duration-200"
                    >
                      View More
                    </Link>
                  </div>
                </div>

              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-8 md:px-20 py-16 bg-[#1a1a1a]">
        <div className="flex flex-col items-center">
          <h2 className="text-4xl font-extrabold text-orange-500 mb-10">RoboSub 2026 Team Video</h2>
          <div className="w-full aspect-video max-w-4xl">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/mK8vjsBc7f4"
              title="Team Mecatron RoboSub Introduction Video | RoboSub 2026"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-4 sm:px-8 md:px-20 py-20">
        <div
          className="absolute inset-0 scale-110 bg-cover bg-center blur-sm"
          style={{ backgroundImage: "url('/images/robosub2026-team-photo.jpg')" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/80" aria-hidden="true" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-extrabold text-orange-500 mb-8">RoboSub 2026 Developmental Timeline</h2>
            <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto">
              From early task planning to pool validation, Hydra and Kraken move through one shared development path.
            </p>
            <div className="mt-6">
              <Link
                to="/blog"
                className="inline-block bg-orange-600 hover:bg-[#d73a1a] text-white font-semibold px-8 py-2 rounded-lg shadow transition-all duration-200"
              >
                View RoboSub 2026 Blog
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {journeyTimeline.map((item, index) => (
                <article
                  key={item.phase}
                  className="rounded-lg border border-white/15 bg-white/10 shadow-xl shadow-black/20 overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setOpenTimelinePhase(openTimelinePhase === index ? null : index)}
                    className="w-full p-6 text-left"
                    aria-expanded={openTimelinePhase === index}
                  >
                    <div className="mb-5 flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-orange-400 bg-orange-500 text-sm font-bold text-white">
                          {index + 1}
                        </div>
                        <p className="text-sm font-bold uppercase tracking-normal text-orange-200">
                          {item.phase}
                        </p>
                      </div>
                      <FaChevronDown
                        className={`text-sm text-orange-200 transition-transform duration-200 ${openTimelinePhase === index ? 'rotate-180' : ''}`}
                        aria-hidden="true"
                      />
                    </div>
                    <p className="text-sm sm:text-base text-gray-300">
                      {item.period}
                    </p>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {item.title}
                    </h3>
                  </button>

                  <div className={`grid transition-all duration-300 ease-out ${openTimelinePhase === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                    <div className="overflow-hidden">
                      <div className="border-t border-white/10 bg-black/20 px-6 py-5">
                        <ul className="space-y-2 text-sm sm:text-base text-gray-200 list-disc pl-5">
                          {item.details.map((detail, detailIndex) => {
                            const detailText = item.subpoints?.[detailIndex]
                              ? `${detail} ${item.subpoints[detailIndex]}`
                              : detail;

                            return (
                              <li key={detail}>
                                <TimelineDetail detail={detailText} />
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
