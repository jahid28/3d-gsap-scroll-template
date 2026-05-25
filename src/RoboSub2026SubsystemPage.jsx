import { Link } from 'react-router-dom';

const subsystemPages = {
  hydra: {
    name: 'Hydra 2026',
    overview:
      'Hydra is the compact competition vehicle, focused on serviceable packaging, reliable autonomy, and tightly integrated task mechanisms.',
    image: '/competition/images/robosub2026-bots.jpg',
    subsystems: {
      mechanical: {
        label: 'Mechanical',
        title: 'Mechanical Subsystems',
        summary:
          'Hydra keeps the compact character of Lucy while making the frame easier to build, access, and adapt for RoboSub task hardware.',
        highlights: [
          'Compact frame layout for easier transport, handling, and pool testing',
          'Modular mounting interfaces for dropper and gripper mechanisms',
          'Improved service access for inspections and mechanism swaps',
          'Packaging choices that preserve stability while adding new payloads'
        ],
        development: [
          'Refine frame geometry around the new payload envelope',
          'Validate mechanism mounting points with quick assembly checks',
          'Document maintenance access for competition pit work'
        ]
      },
      software: {
        label: 'Software',
        title: 'Software Subsystems',
        summary:
          'Hydra software development focuses on reusable mission behaviors, tighter control, and faster iteration from simulation to pool testing.',
        highlights: [
          'Reusable autonomy modules for RoboSub mission tasks',
          'Cleaner handoff between perception, planning, and control',
          'Simulation-first testing workflow before pool deployment',
          'Control tuning aimed at stable task alignment and repeatability'
        ],
        development: [
          'Build task behaviors as reusable mission blocks',
          'Test perception and control changes in simulation',
          'Validate mission flow during progressive pool trials'
        ]
      },
      electrical: {
        label: 'Electrical',
        title: 'Electrical Subsystems',
        summary:
          'Hydra electrical work centers on clean power distribution, sensor routing, and maintainable electronics inside a smaller vehicle envelope.',
        highlights: [
          'Organized signal and power paths to reduce service confusion',
          'Sensor placement planned around cameras, navigation, and task payloads',
          'Electronics access designed for faster debugging between pool runs',
          'Integration support for dropper, gripper, and vehicle feedback systems'
        ],
        development: [
          'Map electronics placement against mechanical access zones',
          'Prepare wiring routes for cameras, navigation sensors, and actuators',
          'Run bench checks before full vehicle integration'
        ]
      },
    }
  },
  kraken: {
    name: 'Kraken 2026',
    overview:
      'Kraken is the experimental platform, built to test new hull ideas, actuation systems, and autonomy behavior before they move into competition flow.',
    image: '/competition/images/robosub2026-bots.jpg',
    subsystems: {
      mechanical: {
        label: 'Mechanical',
        title: 'Mechanical Subsystems',
        summary:
          'Kraken mechanical work explores an experimental skeleton hull concept for rapid inspection, iteration, and validation.',
        highlights: [
          'Airfoil-inspired frame geometry for drag and stiffness studies',
          'Acrylic skeleton concept for direct visual inspection',
          'Simple assembly layout that supports fast mechanical changes',
          'Dedicated space for validating torpedo deployment hardware'
        ],
        development: [
          'Prototype frame sections and compare assembly approaches',
          'Evaluate hull material behavior during handling and pool testing',
          'Iterate mechanism mounting around torpedo deployment needs'
        ]
      },
      software: {
        label: 'Software',
        title: 'Software Subsystems',
        summary:
          'Kraken software is used to isolate and validate experimental perception, planning, and control ideas under RoboSub-style tasks.',
        highlights: [
          'Mission testing platform for experimental task behaviors',
          'Perception pipeline validation before competition integration',
          'Control behavior testing under repeatable pool conditions',
          'Useful sandbox for testing changes before merging into Hydra flow'
        ],
        development: [
          'Create focused test missions for each experimental feature',
          'Compare perception results across bench, simulation, and pool data',
          'Promote proven behavior into the shared RoboSub software stack'
        ]
      },
      electrical: {
        label: 'Electrical',
        title: 'Electrical Subsystems',
        summary:
          'Kraken electrical development supports actuator validation, instrumentation, and clean integration for experimental payloads.',
        highlights: [
          'Electronics layout prepared for actuator control experiments',
          'Wiring access designed around repeated bench and pool tests',
          'Power and signal planning for torpedo deployment validation',
          'Sensor integration support for experimental mission trials'
        ],
        development: [
          'Bench-test actuator control before in-water validation',
          'Keep electronics access open for fast iteration',
          'Log electrical behavior during repeated mechanism tests'
        ]
      },
    }
  }
};

const navItems = ['mechanical', 'software', 'electrical'];

export default function RoboSub2026SubsystemPage({ vehicleId, subsystemId }) {
  const vehicle = subsystemPages[vehicleId] ?? subsystemPages.hydra;
  const subsystem = vehicle.subsystems[subsystemId] ?? vehicle.subsystems.mechanical;

  return (
    <div className="min-h-screen bg-[#181818] text-white">
      <section className="px-4 sm:px-8 lg:px-20 pt-32 pb-16 bg-[#181818]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_0.85fr] gap-10 items-center">
          <div>
            <Link
              to="/robosub2026"
              className="inline-flex text-sm font-semibold text-orange-300 hover:text-orange-200 transition-colors mb-8"
            >
              Back to RoboSub 2026
            </Link>
            <p className="text-lg text-gray-300 mb-3">{vehicle.name}</p>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-orange-500 mb-6">
              {subsystem.title}
            </h1>
            <p className="text-base sm:text-lg text-gray-200 leading-relaxed max-w-3xl">
              {subsystem.summary}
            </p>
          </div>

          <div className="rounded-lg overflow-hidden border border-white/15 bg-white/10 shadow-xl shadow-black/20">
            <img
              src={vehicle.image}
              alt={`${vehicle.name} ${subsystem.label} development`}
              className="w-full aspect-video object-cover"
            />
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-8 lg:px-20 py-8 bg-[#202020]">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-3 justify-center">
          {navItems.map((item) => (
            <Link
              key={item}
              to={`/${vehicleId}/${item}`}
              className={`px-5 py-2 rounded-lg border text-sm sm:text-base font-semibold transition-all duration-200 ${
                item === subsystemId
                  ? 'bg-orange-500 border-orange-400 text-white'
                  : 'border-white/15 bg-white/10 text-gray-200 hover:bg-white/15 hover:text-white'
              }`}
            >
              {vehicle.subsystems[item].label}
            </Link>
          ))}
        </div>
      </section>

      <section className="px-4 sm:px-8 lg:px-20 py-16 bg-[#181818]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-8">
          <article className="rounded-lg border border-white/15 bg-white/10 p-6 sm:p-8 shadow-xl shadow-black/20">
            <h2 className="text-2xl sm:text-3xl font-bold text-orange-500 mb-6">
              Development Focus
            </h2>
            <p className="text-gray-200 leading-relaxed">{vehicle.overview}</p>
            <div className="mt-8">
              <Link
                to={vehicleId === 'hydra' ? '/kraken/mechanical' : '/hydra/mechanical'}
                className="inline-block bg-[#d73a1a] hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-lg transition-all duration-200"
              >
                View {vehicleId === 'hydra' ? 'Kraken' : 'Hydra'} Development
              </Link>
            </div>
          </article>

          <article className="rounded-lg border border-white/15 bg-white/10 p-6 sm:p-8 shadow-xl shadow-black/20">
            <h2 className="text-2xl sm:text-3xl font-bold text-orange-500 mb-6">
              Key Workstreams
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {subsystem.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="rounded-lg border border-white/10 bg-black/20 p-4 text-gray-100"
                >
                  {highlight}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="px-4 sm:px-8 lg:px-20 py-16 bg-[#202020]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-orange-500 mb-8 text-center">
            Next Development Steps
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {subsystem.development.map((step, index) => (
              <article
                key={step}
                className="rounded-lg border border-white/15 bg-white/10 p-6 shadow-xl shadow-black/20"
              >
                <p className="text-sm font-bold text-orange-300 mb-3">
                  Step {index + 1}
                </p>
                <p className="text-gray-100">{step}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
