import { useState } from 'react';
import { Link } from 'react-router-dom';
import ImageCarousel from './components/ImageCarousel';

const subsystemPages = {
  hydra: {
    name: 'Hydra 2026',
    overview:
      'Hydra is the compact competition vehicle, focused on serviceable packaging, reliable autonomy, and tightly integrated task mechanisms.',
    image: '/competition/images/robosub2026-bots.jpg',
    carouselImages: [
      {
        src: '/competition/images/competition_img_2.jpg',
        caption: 'Previous simple 2D bounding box.'
      },
      {
        src: '/competition/images/competition_img_2.jpg',
        caption: 'Improved perception for this year'
      },
      {
        src: '/competition/images/competition_img_2.jpg',
        caption: 'Testing and iteration notes from the RoboSub development cycle.'
      }
    ],
    subsystems: {
      mechanical: {
        label: 'Mechanical',
        title: 'Mechanical Subsystems',
        summary:
          'Hydra 2026 is an upgraded version of Lucy 2025, with an updated thruster configuration, improved frame through topology optimization, and greater design modularity.',
        highlights: [
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
        ],
        development: [
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
    carouselImages: [
      {
        src: '/competition/images/robosub2026-bots.jpg',
        caption: 'Kraken alongside Hydra as part of the RoboSub 2026 vehicle lineup.'
      },
      {
        src: '/competition/images/competition_img_3.jpg',
        caption: 'Experimental validation work for Kraken subsystems and layout.'
      },
      {
        src: '/competition/images/competition_img_4.jpg',
        caption: 'Competition preparation and subsystem review in progress.'
      }
    ],
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
          'Hydra software development focuses on reusable mission behaviors, tighter control, and faster iteration from simulation to pool testing.',
        highlights: [
        ],
        development: [
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
  }
};

const navItems = ['mechanical', 'software', 'electrical'];

const featureCarouselImages = {
  UnitySim: [
    {
      src: '/images/robosub2026/software-subsystems/unity-sim-vid.gif',
      caption: 'Video demonstration of Unity simulation.'
    },
    {
      src: '/images/robosub2026/software-subsystems/mds-1st-perspective.png',
      caption: 'Vehicle\'s perspective.'
    },
    {
      src: '/images/robosub2026/software-subsystems/mds-3rd-perspective.png',
      caption: 'Third-person\'s perspective.'
    },
  ],
  Perception: [
    {
      src: '/images/robosub2026/software-subsystems/old-bounding-box.png',
      caption: 'Previous simple 2D bounding box.'
    },
    {
      src: '/images/robosub2026/software-subsystems/new-bounding-box.png',
      caption: 'New improved perception pipeline.'
    }
  ],
  'Mission Planning': [
    {
      src: '/images/robosub2026/software-subsystems/nav-rect-animation.gif',
      caption: 'Flow built around reusable BT actions.'
    },
    {
      src: '/images/robosub2026/software-subsystems/bt-simple.png',
      caption: 'A typical BT for a given task.'
    },
    {
      src: '/images/robosub2026/software-subsystems/spatial1.png',
      caption: 'Spatial perception and navigation.'
    },
  ],
  Localization: [
    {
      src: '/images/robosub2026/software-subsystems/corecont.png',
      caption: 'EKF localization fuses DVL and IMU data for stable odometry.'
    },
    {
      src: '/images/robosub2026/software-subsystems/ekf.png',
      caption: 'Foxglove monitoring supported real-time localization review.'
    },
  ],
  'Containerisation for Multi-Vehicle Deployment': [
    {
      src: '/images/robosub2026/software-subsystems/ros2.png',
      caption: 'ROS2'
    },
    {
      src: '/competition/images/competition_img_1.jpg',
      caption: 'Composable nodes reduce CPU overhead through zero-copy sharing.'
    },
    {
      src: '/competition/images/competition_img_2.jpg',
      caption: 'Efficient deployment keeps perception and navigation pipelines running together.'
    }
  ]
};

function getSharedSoftwareSections(subsystem) {
  return [
    {
      title: 'UnitySim',
      description: `We leveraged Unity to develop a high-fidelity digital twin of the competition environment. This allowed for extensive “dry” testing of our new algorithms and mission logic before vehicle design was finalized and parts were manufactured. ROS2 packages were individually validated within the simulation environment to assess operational suitability and isolate software bugs before integration into the full autonomy stack. Upon completion of vehicle assembly, the UnityMDS simulation setup complemented semiweekly in-person pool tests, for a final systems validation of our competition vehicle within pseudo-deployment environments.`,
      bullets: subsystem.highlights,
      imageLayout: 'comparison'
    },
    {
      title: 'Perception',
      description: `This year, our perception pipeline moves beyond basic object detection. Instead of relying on simple 2D bounding boxes with vision-based, reactive approaches, we fused depth data with semantic segmentation. By utilising 3D pose estimation of competition elements, this approach enables prior path planning and dynamic replanning, providing our vehicle with critical spatial awareness for fine-tuned manoeuvres especially required in Torpedo and Picking tasks.`,
      bullets: subsystem.highlights,
      imageLayout: 'comparison'
    },
    {
      title: 'Mission Planning',
      description: 'Similar to last year’s iterations, the Behavior Tree (BT) framework remains the core of our mission planning system. This year, we improved modularity by encapsulating complex tasks into higher-level actions, which simplifies debugging and results in a more intuitive monitoring interface.To translate these high-level mission goals into physical motion, we transitioned to the Nav2 stack. Nav2 leverages our new spatial perception data to handle dynamic path planning and obstacle avoidance, providing the vehicle with the agility required for complex, multi-objective maneuvers.',
      bullets: subsystem.development,
      imageLayout: 'comparison'
    },
    {
      title: 'Localization',
      description: 'To achieve greater navigation precision with reduced drift, we implemented an Extended Kalman Filter (EKF) to fuse data from our DVL and a new external IMU. Real-time monitoring via Foxglove Studio during pool tests confirmed that this results in a highly stable odometry stack, even during complex movements.',
      bullets: subsystem.development
    },
    {
      title: 'Containerisation to Facilitate Multi-Vehicle Deployment',
      description: '',
      subsections: [
        {
          title: 'Docker Containerisation',
          body: "To facilitate long-term development and seamless cross-platform testing, our entire software stack is containerized using Docker. This architecture abstracts dependencies away from individual host systems, ensuring a consistent environment whether code is running on a developer's laptop, a simulation machine, or the vehicle's onboard computer. Crucially, this containerized model enables simultaneous, seamless deployment across both of our physical vehicles. Because the core software stack remains completely identical, we can deploy the exact same container to either robot without modifying the underlying codebase.",
          image: {
            src: '/images/robosub2026/software-subsystems/docker-containerisation-dark.svg',
            caption: 'Docker containerisation keeps the same software environment across machines and vehicles.'
          }
        },
        {
          title: 'Process Optimization',
          body: 'To maximize onboard efficiency, we utilize ROS 2 Composable Nodes within our containers. By loading multiple nodes into a single process, we enable zero-copy memory sharing, which removes the CPU overhead of traditional message serialization. This reduction in computational load ensures our vehicles can run complex perception and navigation pipelines concurrently without hitting hardware bottlenecks.',
          image: {
            src: '/images/robosub2026/software-subsystems/ros2.png',
            caption: 'Composable nodes reduce overhead while running perception and navigation together.'
          }
        }
      ],
      imageLayout: 'subsectionComparison',
      bullets: []
    }
  ].map((section) => ({
    ...section,
    images: featureCarouselImages[section.title]
  }));
}

function getHydraMechanicalSections() {
  return [
    {
      title: '8-Thruster Configuration',
      description: 'Hydra transitioned from the previous 6-thruster layout to a vectored 8-thruster configuration. This vectored architecture completely decouples the vertical and horizontal axes, yielding a highly stable hydrodynamic platform capable of precise, 6-degree-of-freedom (6-DOF) manoeuvring.',
      bullets: [],
      imageLayout: 'comparison',
      images: [
        {
          src: '/images/robosub2026/mechanical-subsystems/thrusters6.png',
          caption: 'Previous design with 6 thrusters.'
        },
        {
          src: '/images/robosub2026/mechanical-subsystems/thrusters8.png',
          caption: 'New design with 8 vectored thrusters.'
        }
      ]
    },
    {
      title: 'Mass Optimization',
      description: 'Building upon the mechanical foundation of Lucy 2025, this second-generation vehicle prioritized a reduction in both in-air mass and required buoyancy volume. To achieve stringent mass reduction goals without compromising structural integrity, the 3D-printed frame components underwent rigorous topology optimization; by utilizing advanced computational simulations to analyze geometric load paths, material was strategically removed from low-stress regions. This generative design approach significantly reduces the overall weight of the vehicle while simultaneously optimizing the specific stiffness and structural strength of the chassis under dynamic and hydrostatic loads. The goal is to lower manufacturing barriers, accelerate rapid prototyping cycles and streamline final assembly.',
      bullets: [],
      images: [
        {
          src: '/images/robosub2026/mechanical-subsystems/mass1.jpg',
          caption: 'Mass optimization of Hydra.'
        }
      ]
    },
    {
      title: 'Modular Frame Design',
      description: 'The vehicle architecture heavily emphasizes modularity to accommodate rapid, mission-specific reconfigurations. The upper cap and leg assemblies function as interchangeable sensor bays, allowing the payload suite to be easily modified or upgraded with new attachments without altering the core chassis.',
      bullets: [],
      images: [
        {
          src: '/images/robosub2026/mechanical-subsystems/hydraframe.png',
          caption: 'Different parts of the Hydra frame labelled.'
        },
      ]
    },
    {
      title: 'Dropper',
      description: 'Hydra integrates an electromagnetic marker delivery system to ensure reliable actuation. For operational safety and power efficiency, the 12V electromagnet is kept in an unpowered state. Deployment is achieved by activating the circuit to electromagnetically repel the marker. This electromagnet is housed within a custom 3D-printed encasing and directly attached to the main body of Hydra. A PVC tube is used as a casing to route the electromagnet cables to the actuator cylinder, while maintaining a strain relief system and waterproofing solution. Finally, the dropper housing is entirely filled with epoxy, providing absolute waterproofing for the electromagnet, ensuring longevity and reliability.',
      bullets: [],
      images: [
        {
          src: '/images/robosub2026/mechanical-subsystems/dropper1.png',
          caption: 'Different iterations of dropper design.'
        },
        {
          src: '/images/robosub2026/mechanical-subsystems/dropper2.png',
          caption: 'Dropper components.'
        }
      ]
    },
    {
      title: 'Gripper',
      description: 'Hydra’s gripper uses a parallelogram mechanism to open and close. It uses a ROVMAKER servo as the actuator. The current version of the gripper is 35cm long, much smaller than the previous version which had used a ball screw to actuate the gripper. The gripper is controlled via a PWM signal. Further iterations will feature an improved silicon claw for increased grip and compliance. The design is highly compact, featuring ball bearings embedded within the struts as one single component.',
      bullets: [],
      images: [
        {
          src: '/images/robosub2026/mechanical-subsystems/gripper1.jpg',
          caption: 'Render of the gripper design.'
        },
        {
          src: '/images/robosub2026/mechanical-subsystems/gripper2.png',
          caption: 'Gripper "activated".'
        }
      ]
    }
  ];
}

function getKrakenMechanicalSections() {
  return [
    {
      title: '8-Thruster Configuration',
      description: 'Kraken transitioned from the previous 6-thruster layout to a vectored 8-thruster configuration. This vectored architecture completely decouples the vertical and horizontal axes, yielding a highly stable hydrodynamic platform capable of precise, 6-degree-of-freedom (6-DOF) manoeuvring.',
      bullets: [],
      imageLayout: 'comparison',
      images: [
        {
          src: '/images/robosub2026/mechanical-subsystems/thrusters-render.png',
          caption: 'Render of Kraken\'s 8-thrusters.'
        },
        {
          src: '/images/robosub2026/mechanical-subsystems/thrusters-config.png',
          caption: 'Kraken 8-thrusters layout.'
        }
      ]
    },
    {
      title: 'Acrylic Skeletal Frame',
      description: 'Kraken utilizes a novel, fully acrylic skeletal frame to provide primary structural integrity. Compared to previous 3D-printed load-bearing structures, this CNC machined acrylic chassis offers superior structural integrity while being easily modifiable in-house for highly cost-effective and rapid prototyping cycles. To optimize hydrodynamic performance, this skeletal frame is enveloped by a streamlined, 3D-printed shell for improved hydrodynamic movement.',
      bullets: [],
      images: [
        {
          src: '/images/robosub2026/mechanical-subsystems/aframe2.jpg',
          caption: 'Mechanical members assembling the acrylic skeletal frame.'
        },
        {
          src: '/images/robosub2026/mechanical-subsystems/aframe1.jpg',
          caption: 'Waterproof testing with the frame.'
        },
        {
          src: '/images/robosub2026/mechanical-subsystems/aframe3.jpg',
          caption: 'Acrylic frame assembled!'
        }
      ]
    },
    {
      title: 'Hydrodynamics Optimization',
      description: 'The vehicle\'s lateral wings are explicitly modeled after aircraft airfoils to delay flow separation and minimize wake. Computational fluid dynamics (CFD) analysis validates this design, demonstrating a 20% reduction in total drag when the outer skin and airfoil profiles are fully integrated. Additionally, the frame is engineered with a detachable front nose cone to facilitate rapid internal access and streamline assembly during RoboSub deployments.',
      bullets: [],
      images: [
        {
          src: '/competition/images/competition_img_4.jpg',
          caption: 'Kraken modular frame placeholder.'
        }
      ]
    },
    {
      title: 'CNC Aluminum Electronics Enclosure Box',
      description: 'The transition from a cylindrical main hull for key electrical systems to a custom machined aluminum electrical enclosure maximized space efficiency, modularity and ease of maintenance. This reduced the weight of our vehicle by reducing buoyancy from the large volumetric displacement of a traditional cylindrical hull, thereby decreasing the mass needed to maintain neutral buoyancy. This also built the foundation of a new electrical system layout that is easy to modify and maintain, by creating swappable mounting plates that can be freely removed and worked on without space constraints.',
      bullets: [],
      images: [
        {
          src: '/images/robosub2026/mechanical-subsystems/electbox1.png',
          caption: 'Isometric view of Kraken electrical enclosure.'
        },
        {
          src: '/images/robosub2026/mechanical-subsystems/electbox2.jpg',
          caption: 'Real-life image of custom machined aluminum box.'
        }
      ]
    },
    {
      title: 'Torpedo',
      description: 'The previous friction-fit design was prone to wear-and-tear, occasionally resulting in premature launching before torpedo activation. Our new design uses a positive mechanical locking mechanism by fixing a T8 nut directly onto the propeller and a T8 lead screw onto the launcher. Upon activation, the propeller’s rotation should unscrew the nut from the stationary lead screw. This mechanism ensures a secure hold during the pre-launch phase followed by a seamless transition to forward flight once the threads are fully disengaged.',
      bullets: [],
      images: [
        {
          src: '/images/robosub2026/mechanical-subsystems/torpedo1.png',
          caption: 'Kraken\'s torpedo render.'
        }
      ]
    }
  ];
}

function getSharedElectricalSections() {
  return [
    {
      title: 'Power Distribution',
      description: 'This shared electrical section is reserved for power distribution notes, wiring architecture, protection choices, and validation results.',
      bullets: [],
      images: [
        {
          src: '/competition/images/competition_img_1.jpg',
          caption: 'Shared electrical power distribution placeholder.'
        }
      ]
    },
    {
      title: 'Sensor Integration',
      description: 'This shared electrical section is reserved for camera, DVL, IMU, pressure sensor, and actuator feedback integration notes.',
      bullets: [],
      images: [
        {
          src: '/competition/images/competition_img_2.jpg',
          caption: 'Shared electrical sensor integration placeholder.'
        }
      ]
    },
    {
      title: 'Enclosure and Cable Routing',
      description: 'This shared electrical section is reserved for enclosure layout, connector planning, service access, and cable routing decisions.',
      bullets: [],
      images: [
        {
          src: '/competition/images/competition_img_3.jpg',
          caption: 'Shared electrical enclosure and routing placeholder.'
        }
      ]
    }
  ];
}

function getContentSections(vehicle, subsystem, vehicleId, subsystemId) {
  let sections;

  if (subsystemId === 'mechanical' && vehicleId === 'hydra') {
    sections = getHydraMechanicalSections();
  } else if (subsystemId === 'mechanical' && vehicleId === 'kraken') {
    sections = getKrakenMechanicalSections();
  } else if (subsystemId === 'electrical') {
    sections = getSharedElectricalSections();
  } else {
    sections = getSharedSoftwareSections(subsystem);
  }

  return sections.map((section) => ({
    ...section,
    bullets: section.bullets ?? [],
    images: section.images ?? featureCarouselImages[section.title] ?? vehicle.carouselImages
  }));
}

function isVideoMedia(media) {
  return media.type === 'video' || /\.(mp4|webm|ogg)$/i.test(media.src);
}

function MediaModal({ media, onClose }) {
  if (!media) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 px-4 py-6"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div className="relative w-full max-w-6xl" onClick={(event) => event.stopPropagation()}>
        <button
          type="button"
          onClick={onClose}
          className="absolute -top-12 right-0 rounded-lg bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/20"
        >
          Close
        </button>

        <div className="overflow-hidden rounded-xl border border-white/15 bg-black">
          <div className="flex max-h-[80vh] items-center justify-center">
            {isVideoMedia(media) ? (
              <video
                src={media.src}
                className="max-h-[80vh] w-full object-contain"
                controls
                autoPlay
              />
            ) : (
              <img
                src={media.src}
                alt={media.alt ?? media.caption ?? 'Expanded media'}
                className="max-h-[80vh] w-full object-contain"
              />
            )}
          </div>
          {media.caption && (
            <div className="bg-black/80 px-5 py-4 text-center text-sm sm:text-base text-white">
              {media.caption}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function MediaPreview({ media }) {
  if (isVideoMedia(media)) {
    return (
      <video
        src={media.src}
        className="w-full h-full object-contain"
        muted
        playsInline
      />
    );
  }

  return (
    <img
      src={media.src}
      alt={media.alt ?? media.caption}
      className="w-full h-full object-contain"
    />
  );
}

function ComparisonCaptionImages({ images, onMediaClick }) {
  const gridClass = images.length >= 3 ? 'md:grid-cols-3' : 'md:grid-cols-2';

  return (
    <div className={`mx-auto grid w-full max-w-5xl grid-cols-1 gap-5 ${gridClass}`}>
      {images.map((image) => (
        <figure key={image.src} className="overflow-hidden rounded-xl border border-white/15 bg-black/30">
          <div className="aspect-video bg-black/30">
            <button
              type="button"
              onClick={() => onMediaClick(image)}
              className="h-full w-full cursor-zoom-in"
              aria-label={`Open ${image.caption ?? 'media'}`}
            >
              <MediaPreview media={image} />
            </button>
          </div>
          {image.caption && (
            <figcaption className="bg-black/65 px-4 py-3 text-center text-sm sm:text-base text-white">
              {image.caption}
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  );
}

function SubsectionComparison({ subsections, onMediaClick }) {
  return (
    <div className="flex w-full flex-col gap-10">
      {subsections.map((subsection) => (
        <section key={subsection.title} className="grid grid-cols-1 gap-24 lg:grid-cols-[1fr_20rem] xl:grid-cols-[1fr_24rem] lg:items-center">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-orange-200 mb-4">
              {subsection.title}
            </h3>
            <p className="text-justify text-sm sm:text-base text-gray-200 leading-relaxed">
              {subsection.body}
            </p>
          </div>
          {subsection.image && (
            <figure className="w-full overflow-hidden rounded-xl border border-white/15 bg-black/30">
              <div className="aspect-video bg-black/30">
                <button
                  type="button"
                  onClick={() => onMediaClick(subsection.image)}
                  className="h-full w-full cursor-zoom-in"
                  aria-label={`Open ${subsection.image.caption ?? 'media'}`}
                >
                  <MediaPreview media={subsection.image} />
                </button>
              </div>
              {subsection.image.caption && (
                <figcaption className="bg-black/65 px-4 py-3 text-center text-sm sm:text-base text-white">
                  {subsection.image.caption}
                </figcaption>
              )}
            </figure>
          )}
        </section>
      ))}
    </div>
  );
}

export default function RoboSub2026SubsystemPage({ vehicleId, subsystemId }) {
  const vehicle = subsystemPages[vehicleId] ?? subsystemPages.hydra;
  const subsystem = vehicle.subsystems[subsystemId] ?? vehicle.subsystems.mechanical;
  const contentSections = getContentSections(vehicle, subsystem, vehicleId, subsystemId);
  const [expandedMedia, setExpandedMedia] = useState(null);

  return (
    <div className="min-h-screen bg-[#181818] text-white">
      <MediaModal media={expandedMedia} onClose={() => setExpandedMedia(null)} />

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
        <div className="max-w-7xl mx-auto space-y-10">
          {contentSections.map((section) => (
            <article
              key={section.title}
              className="rounded-lg border border-white/15 bg-white/10 p-5 sm:p-8"
            >
              {section.imageLayout === 'comparison' ? (
                <div>
                  <div className="mx-auto mb-8 max-w-4xl text-center">
                    <h2 className="text-2xl sm:text-3xl font-bold text-orange-500 mb-6">
                      {section.title}
                    </h2>
                    <p className="text-justify text-base sm:text-lg text-gray-200 leading-relaxed">
                      {section.description}
                    </p>
                    {section.bullets.length > 0 && (
                      <ul className="mt-5 inline-block space-y-2 text-left text-sm sm:text-base text-gray-200 list-disc pl-5">
                        {section.bullets.map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <ComparisonCaptionImages images={section.images} onMediaClick={setExpandedMedia} />
                </div>
              ) : section.imageLayout === 'subsectionComparison' ? (
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-orange-500 mb-8 text-center">
                    {section.title}
                  </h2>
                  <SubsectionComparison subsections={section.subsections} onMediaClick={setExpandedMedia} />
                </div>
              ) : (

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="flex justify-center">
                  <ImageCarousel images={section.images} onMediaClick={setExpandedMedia} />
                </div>

                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-orange-500 mb-6 text-center">
                    {section.title}
                  </h2>
                  {section.description && (
                    <p className="text-justify text-base sm:text-lg text-gray-200 leading-relaxed mb-5">
                      {section.description}
                    </p>
                  )}
                  {section.subsections && (
                    <div className="space-y-5">
                      {section.subsections.map((subsection) => (
                        <section key={subsection.title}>
                          <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                            {subsection.title}
                          </h3>
                          <p className="text-justify text-sm sm:text-base text-gray-200 leading-relaxed">
                            {subsection.body}
                          </p>
                        </section>
                      ))}
                    </div>
                  )}
                  {section.bullets.length > 0 && (
                    <ul className="space-y-2 text-sm sm:text-base text-gray-200 list-disc pl-5">
                      {section.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
              )}
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
