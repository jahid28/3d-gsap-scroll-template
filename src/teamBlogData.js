const defaultSections = (post) => [
  {
    heading: 'Overview',
    body: `${post.title} is part of Mecatron's RoboSub 2026 development work. Use this section to introduce the subsystem, the problem it solves, and the design direction behind it.`
  },
  {
    heading: 'Development Notes',
    body: 'Add build notes, design decisions, screenshots, photos, test results, and lessons learned here. This reusable template is meant to stay flexible for mechanical, electrical, and software posts.'
  },
  {
    heading: 'Next Steps',
    body: 'Add the next tasks, open issues, integration checks, and follow-up experiments for this workstream.'
  }
];

const posts = [
  {
    slug: 'hydra-frame',
    title: 'Hydra Frame Development',
    tag: 'Mechanical',
    authors: 'Timothy',
    date: 'Sep 2025 - Apr 2026',
    image: '/competition/images/robosub2026-bots.jpg',
    description: "Design and build notes for Hydra's structural layout.",
    sections: [
      {
        heading: 'Overview',
        body: 'Hydra Frame overview text here.'
      },
      {
        heading: 'Development Notes',
        body: 'Hydra Frame development notes here.'
      },
      {
        heading: 'Next Steps',
        body: 'Hydra Frame next steps here.'
      }
    ]
  },
  {
    slug: 'kraken-frame',
    title: 'Kraken Frame Iterations',
    tag: 'Mechanical',
    authors: 'Isaac',
    date: 'Jan 2026',
    image: '/competition/images/robosub2026-bots.jpg',
    description: "Development notes for Kraken's experimental frame and structural concept.",
    sections: [
      {
        heading: 'Overview',
        body: 'Kraken Frame overview text here.'
      },
      {
        heading: 'Development Notes',
        body: 'Kraken Frame development notes here.'
      },
      {
        heading: 'Next Steps',
        body: 'Kraken Frame next steps here.'
      }
    ]
  },
  {
    slug: 'electronics-enclosure-cnc-box',
    title: 'Electronics Enclosure CNC Box',
    tag: 'Mechanical',
    authors: 'Maximus, Akil',
    date: 'Jan 2026',
    image: '/competition/images/competition_img_1.jpg',
    description: 'Internal notes on the CNC electronics enclosure design, manufacturing, and fit checks.',
    sections: [
      {
        heading: 'Overview',
        body: 'Electronics Enclosure CNC Box overview text here.'
      },
      {
        heading: 'Development Notes',
        body: 'Electronics Enclosure CNC Box development notes here.'
      },
      {
        heading: 'Next Steps',
        body: 'Electronics Enclosure CNC Box next steps here.'
      }
    ]
  },
  {
    slug: 'gripper',
    title: 'In-House CNC Aluminum Anodization Attempt',
    tag: 'Mechanical',
    authors: 'Arthur',
    date: 'Mar 2026',
    image: '/images/robosub2026/mechanical-subsystems/cnc.png',
    description: 'A diary note on our attempt to anodize Hydra electrical enclosure endplate material in-house.',
    sections: [
      {
        heading: 'Anodization Diary',
        layout: 'diaryPages',
        entries: [
          {
            date: '1 Mar 2026',
            weather: 'Cloudy',
            shortTitle: 'In-House Aluminum Anodization Attempt',
            body: 'Today we attempted to anodize our own aluminum plate, which would be used as an endplate for Hydra’s electrical enclosure. This was done by creating an acidic electrolyte solution using vinegar as the acid and aluminum foil on the cathode. Initially, the anodized layer formed very smoothly on the component surface, but after 30 minutes the surface roughness became extremely high, compromising sealing. This is likely due to vinegar being an inadequate electrolyte. After this experiment, we concluded that we will likely get an external company to handle anodization.',
            images: [
              {
                src: '/images/robosub2026/mechanical-subsystems/cnc.png',
              }
            ]
          }
        ]
      }
    ]
  },
  {
    slug: 'acoustics',
    title: 'Acoustics',
    tag: 'Electrical',
    authors: 'Arthur',
    date: 'Feb 2026 - May 2026',
    image: '/images/robosub2026/electrical-subsystems/acoustics-blog-1.jpg',
    description: 'Developed and validated the vehicle’s acoustic subsystem through hydrophone testing, underwater transmission experiments, full-system integration, and pool-based acoustic profiling.',
    sections: [
      {
        heading: 'Acoustics Development Diary',
        layout: 'diaryPages',
        entries: [
          {
            date: '19 Feb 2026',
            weather: 'Sunny',
            shortTitle: 'Setting up hydrophone and pre-amplifier circuits',
            body: 'Today I started work on hooking up a circuit to analyze the output of the hydrophones. It comprises a hydrophone, pre-amplifier and a 9-volt power supply. The amplified output signal was then sampled by our lab oscilloscope which is also able to do Fast Fourier Transform (FFT) to display the frequencies detected by the hydrophone. In this test, we used the pinger at 20-45kHz in 5kHz increments as the signal source. The hydrophone was able to pick up these frequencies easily.',
            images: [
              {
                src: '/images/robosub2026/electrical-subsystems/acoustics-blog-1.jpg',
              }
            ]
          },
          {
            date: '25 Feb 2026',
            weather: 'Cloudy',
            shortTitle: 'Testing of buzzer as acoustic transmitter',
            body: 'Today I tested the piezo-tranducer buzzers which we believe were most suitable for transmitting acoustic waves underwater. We generated an acoustic signal by generating a square wave signal with a teensy which translated to vibrations on the buzzer, generating a tone. The test was successful and we were able to detect a very strong signal from the hydrophone even without an amplifier. We did notice that upon initial submersion, air bubbles in the buzzer generated many stray frequencies and harmonics but these mostly cleared up with prolonged submersion. We tried to generate waves in the water to mimic those seen in the pool and they seem to have minimal impact on the performance of the system.',
            images: [
              {
                src: '/images/robosub2026/electrical-subsystems/acoustics-blog-2.gif',
              }
            ]
          },
          {
            date: '12 Mar 2026',
            weather: 'Rainy',
            shortTitle: 'Pool validation',
            body: 'Today we did pool test validation of the acoustic system. I have hooked up a prototype system on the receiver end including a teensy for data acquisition. Initial tests in the lab pool showed that this setup was able to detect the pinger signal very strongly. I brought the set up to the pool to see the range of the system. The test showed that the system is able to receive the pinger signal from up to 20m away.',
            images: [
              {
                src: '/images/robosub2026/electrical-subsystems/acoustics-blog-3.png',
              }
            ]
          },
          {
            date: '23 Apr 2026',
            weather: 'Sunny',
            shortTitle: 'Cylinder and Vehicle integration',
            body: 'Today I completed the final electrical setup for the acoustic system which was integrated into a cylinder. Power was provided by the main vehicle power distribution unit. I also tested serial communication with the Jetson computer in the main vehicle cylinder. Tests were all successful.',
            images: [
              {
                src: '/images/robosub2026/electrical-subsystems/acoustics-blog-4.jpg',
              }
            ]
          },
          {
            date: '2 May 2026',
            weather: 'Cloudy',
            shortTitle: 'Acoustic profiling of pool environment',
            body: 'Today I completed acoustic profiling of the pool environment with the vehicle running. The tests showed that the pool environment has a lot of acoustic noise below 5kHz and the thrusters generated a lot of noise between 20-25kHz depending on the rotation speed. Hence these channels must be avoided when I implement acoustic communication.',
            images: [
              {
                src: '/images/robosub2026/electrical-subsystems/acoustics-blog-5.jpg',
              }
            ]
          }
        ]
      }
    ]
  },
  {
    slug: 'dropper',
    title: 'Electromagnetic Dropper Iterations',
    tag: 'Mechanical',
    authors: 'Gerardo',
    date: 'Nov 2025 - Jun 2026',
    image: '/images/robosub2026/mechanical-subsystems/dropper1.png',
    description: 'Development notes for the dropper mechanism, mounting, and testing workflow.',
    sections: [
      {
        heading: 'Final Dropper Design',
        body: 'Hydra integrates an electromagnetic marker delivery system to ensure reliable actuation. For operational safety and power efficiency, the 12V electromagnet is kept in an unpowered state. Deployment is achieved by activating the circuit to electromagnetically repel the marker. The electromagnet is housed within a custom 3D-printed encasing and directly attached to the main body of Hydra. A PVC tube routes the electromagnet cables to the actuator cylinder while maintaining strain relief and waterproofing. Finally, the dropper housing is entirely filled with epoxy, providing absolute waterproofing for the electromagnet and improving longevity and reliability.',
        images: [
          {
            src: '/images/robosub2026/mechanical-subsystems/dropper2.png',
            caption: ''
          }
        ]
      },
      {
        heading: 'Final Marker Design',
        body: 'To optimize aerodynamic stability and reduce unintended pitch or roll during descent, the marker uses a torpedo shape with a low center of gravity. This is achieved through an integrated cavity and strategically placed tungsten weights, improving trajectory precision. The marker also includes 2 mm deep helical grooves and protruding wings to create axial spin, helping it travel straight during deployment. A high-strength neodymium magnet is embedded within the marker to enable secure passive magnetic coupling with the AUV’s unpowered electromagnet.',
        images: [
          {
            src: '/images/robosub2026/mechanical-subsystems/marker-red.png',
            caption: ''
          }
        ]
      },
      {
        heading: 'Overview of the 6 Dropper Iterations',
        body: 'The dropper design evolved through six iterations, moving from a dual electromagnet enclosure toward a more serviceable, waterproof, and marker-specific final system.',
        layout: 'sideImageAccordion',
        images: [
          {
            src: '/images/robosub2026/mechanical-subsystems/dropper1.png',
          }
        ],
        items: [
          {
            title: 'Iteration 1: Dual Dropper In-Wall Cable Gland System',
            details: [
              {
                label: 'Initial Task',
                body: 'Design an electromagnet enclosure with waterproofing and strain relief system.'
              },
              {
                label: 'Mechanism',
                body: 'A standard dual electromagnet housing with an in-wall cable gland system for strain relief, located at the lid of the enclosure.'
              }
            ]
          },
          {
            title: 'Iteration 2: Dual Dropper Internal Cable Gland System',
            details: [
              {
                label: 'Challenge',
                body: 'The previous design had very thin walls and was space inefficient.'
              },
              {
                label: 'Solution',
                body: 'Designed an internal cable gland system with 4 mm encasing wall thickness.'
              }
            ]
          },
          {
            title: 'Iteration 3: Individual Dropper Enclosure with Cable Gland',
            details: [
              {
                label: 'Concept',
                body: 'Designed an individual encasing to house each electromagnet for easier repairability.'
              },
              {
                label: 'Design',
                body: 'Two enclosures are printed and used for each electromagnet, then attached to a custom mount on the main body of Hydra.'
              }
            ]
          },
          {
            title: 'Iteration 4: Individual Dropper Enclosure with Full Epoxy Penetrator',
            details: [
              {
                label: 'Challenge',
                body: 'Field testing revealed that the traditional cable gland system provided unreliable waterproofing.'
              },
              {
                label: 'Solution',
                body: 'Upgraded to a fully epoxied penetrator design. The cables are sealed inside a plastic tube that routes directly into the actuator cylinder, improving ingress protection and system longevity. The enclosure is also entirely epoxied for longevity and corrosion protection.'
              }
            ]
          },
          {
            title: 'Iteration 5: Optimized Individual Dropper Enclosure with Full Epoxy Penetrator',
            details: [
              {
                label: 'Space Optimization',
                body: 'The fourth design was further trimmed to minimize horizontal space, becoming the fifth design.'
              }
            ]
          },
          {
            title: 'Iteration 6: Torpedo Marker Dropper (Final Design)',
            details: [
              {
                label: 'Design',
                body: 'The previous design was modified to hold the torpedo-shaped marker.'
              }
            ]
          }
        ]
      },
      {
        heading: 'Marker Design & Parameter Tuning',
        body: 'To ensure an accurate and consistent release, the physical properties of the marker and the magnetic distance were tested and optimized.',
        images: [
          {
            src: '/images/robosub2026/mechanical-subsystems/marker2.jpg',
            caption: ''
          }
        ],
        items: [
          {
            title: 'Weight Distribution & Stability',
            details: [
              {
                label: 'Design Concept',
                body: 'Integration of a high-density tungsten core and an inner cavity into the marker.'
              },
              {
                label: 'Objective',
                body: "Drastically lower the marker's center of gravity."
              },
              {
                label: 'Outcome',
                body: 'The lowered center of gravity improves marker stability through the fluid column or air, improving drop accuracy while making the marker more resistant to rolling or tumbling.'
              }
            ]
          },
          {
            title: 'Magnetic Distance Calibration',
            details: [
              {
                label: 'Purpose',
                body: 'Finding the exact distance between the electromagnet and marker was critical to prevent pre-release when the distance is too far, or failure to drop when the distance is too close.'
              },
              {
                label: 'Testing Range Evaluated',
                body: '0.5, 0.7, 0.8, 0.9, 1.0, 1.1, 1.2, 1.3, and 1.5 mm.'
              },
              {
                label: 'Optimal Parameter',
                body: '1.0 mm.'
              },
              {
                label: 'Rationale',
                body: 'Testing showed that a 1 mm air gap is the optimal threshold. It balances the magnetic holding strength required to secure the heavy tungsten marker during transit while ensuring immediate and reliable detachment upon actuator release.'
              }
            ]
          },
          {
            title: 'Rifling Mechanism',
            details: [
              {
                label: 'Purpose',
                body: 'To support an accurate and straight trajectory as the marker is deployed from the dropper, a hydrodynamic rifling mechanism is integrated into the marker design.'
              },
              {
                label: 'Design Concept',
                body: "Integration of 2 mm deep helical grooves and protruding wings along the marker's exterior."
              },
              {
                label: 'Objective',
                body: 'Channel the relative fluid flow during deployment, converting linear drag into torque that initiates axial rotation.'
              },
              {
                label: 'Outcome',
                body: 'The marker is forced into controlled axial rotation by fluid resistance against the grooves and wings. This spin stabilizes hydrodynamic imbalance and keeps the marker aligned with its intended trajectory.'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    slug: 'torpedo',
    title: 'Torpedo Design Progress',
    tag: 'Mechanical',
    authors: 'Akil',
    date: 'Jan 2026',
    image: '/images/robosub2026/mechanical-subsystems/torpedo1.png',
    description: 'Design progress notes for the torpedo launcher, moving from friction-based retention toward a mechanical lock.',
    sections: [
      {
        heading: 'Torpedo Design Progress',
        layout: 'versionedRows',
        versions: [
          {
            title: '2025 Version',
            subtitle: 'For RoboSub 2025',
            body: 'Used frictional fit to hold the torpedo in place and prevent it from being released when unactivated. The propeller was also placed at the front.',
            details: [
              {
                label: 'Problem',
                body: 'The torpedo launcher held the torpedo in place by pure friction. Over several uses, the plastic 3D print would deform and the friction force would decrease, potentially allowing the torpedo to launch prematurely.'
              },
              {
                label: 'Solution',
                body: 'Try a 3D printed arc spring based friction approach, so that even when the spring deforms it provides a minimum friction force.'
              }
            ],
            images: [
              {
                src: '/images/robosub2026/mechanical-subsystems/torpedo2025.png',
              }
            ]
          },
          {
            title: 'Version 1',
            subtitle: 'March 2026',
            body: 'Developed a 3D printed friction fit mechanism aimed to provide enough friction force to hold the torpedo in place when unactivated, while remaining low enough to allow the torpedo to overcome it during launch.',
            details: [
              {
                label: 'Problem',
                body: 'The 3D printed spring had flexibility issues as the print was too rigid and brittle. Not suitable for friction lock.'
              },
              {
                label: 'Solution',
                body: 'Try a mechanical lock method instead of a friction fit mechanism to hold the torpedo in place inside the launcher.'
              }
            ],
            images: [
              {
                src: '/images/robosub2026/mechanical-subsystems/torpedo-v1.png',
              }
            ]
          },
          {
            title: 'Version 2',
            subtitle: 'May 2026',
            body: 'Developed a mechanical lock using a T8 nut and T8 lead screw to securely hold the torpedo in place.',
            details: [
              {
                label: 'Mechanism',
                body: 'The propeller is placed at the back of the torpedo. The T8 nut is attached to the propeller and the T8 lead screw is attached to the launcher. When the torpedo is activated, the propeller rotates the nut and unscrews it from the screw first. Once unscrewed, the propeller drives the torpedo forward towards the target.'
              }
            ],
            images: [
              {
                src: '/images/robosub2026/mechanical-subsystems/torpedo1.png'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    slug: 'pdu-pcb',
    title: 'Electrical PCB1: PDU',
    tag: 'Electrical',
    authors: 'Scott',
    date: 'Jan 2026',
    image: '/competition/images/competition_img_1.jpg',
    description: 'Power distribution unit PCB notes, including design intent, bring-up, and testing.',
    sections: [
      {
        heading: 'Overview',
        body: 'Elec PCB1: PDU overview text here.'
      },
      {
        heading: 'Development Notes',
        body: 'Elec PCB1: PDU development notes here.'
      },
      {
        heading: 'Next Steps',
        body: 'Elec PCB1: PDU next steps here.'
      }
    ]
  },
  {
    slug: 'acoustics-pcb',
    title: 'Electrical PCB2: Acoustics',
    tag: 'Electrical',
    authors: 'Scott',
    date: 'Jan 2026',
    image: '/competition/images/competition_img_3.jpg',
    description: 'Acoustics PCB notes covering board design, signal handling, and subsystem testing.',
    sections: [
      {
        heading: 'Overview',
        body: 'Elec PCB2: Acoustics overview text here.'
      },
      {
        heading: 'Development Notes',
        body: 'Elec PCB2: Acoustics development notes here.'
      },
      {
        heading: 'Next Steps',
        body: 'Elec PCB2: Acoustics next steps here.'
      }
    ]
  },
  {
    slug: 'software-different-stack-experiment',
    title: 'Experimenting with Different Navigation Stacks',
    tag: 'Software',
    authors: 'Poh Hian',
    date: 'Jan 2026',
    image: '/images/robosub2026/software-subsystems/spatial-perception.png',
    description: 'The team evaluated three navigation stacks: Aerostack2, a custom in-house implementation, and Nav2.',
    sections: [
      {
        heading: 'Stack Comparison',
        layout: 'versionedRows',
        hideImages: true,
        versions: [
          {
            title: 'Aerostack2',
            subtitle: 'Autonomous aerial robotics stack',
            body: 'Aerostack2 provides software components for autonomous aerial robotics, including state estimation and motion control. Its native six degrees of freedom (6-DOF) align with Autonomous Underwater Vehicle (AUV) kinematics, facilitating potential application.',
            details: [
              {
                label: 'Limitation',
                body: 'The stack remains in early-stage development, features limited planners and controllers, lacks robust community support, and requires significant modification for system integration.'
              }
            ],
            images: []
          },
          {
            title: 'Custom In-House Stack',
            subtitle: 'Full system ownership',
            body: 'Developing a custom in-house stack ensures complete system compatibility.',
            details: [
              {
                label: 'Tradeoff',
                body: 'Engineering a comprehensive navigation architecture from scratch requires prohibitive resource allocation.'
              }
            ],
            images: []
          },
          {
            title: 'Nav2',
            subtitle: 'Selected navigation framework',
            body: 'Nav2 is an optimized successor to the ROS Navigation Stack designed for mobile and surface robotics. Although natively restricted to two-dimensional (2D) navigation, its operational maturity and extensive library of baseline planners and controllers present a definitive advantage.',
            details: [
              {
                label: 'Decision',
                body: 'The team selected Nav2 and is currently extending its framework to support 3D navigation via its plugin architecture.'
              }
            ],
            images: []
          }
        ]
      }
    ]
  },
  {
    slug: 'software-operator-pov',
    title: 'Pool Testing: Operator POV',
    tag: 'Software',
    authors: 'Poh Hian',
    date: 'Jan 2026',
    image: '/images/robosub2026/software-subsystems/simulation-11.png',
    description: 'Annotated operator POV screenshots showing the software interface and runtime context.',
    sections: [
      {
        heading: 'Pool Test POV',
        layout: 'centeredImageBelow',
        hideCaption: true,
        imageWidth: 'text',
        body: 'During every pool test, each vehicle is monitored by two operators. The primary operator manages main systems, including behaviour tree tuning and navigation control on Screen 1, while overseeing system health via Foxglove on Screen 2. The secondary operator acts as a second brain to the primary, assisting with tuning and handling immediate post-run rosbag review on another dedicated laptop. A rosbag is recorded after each mission run for this purpose.'
      },
    ]
  }
];

export const blogPosts = posts.map((post) => ({
  details: [
    `${post.tag} workstream`,
    'Reusable post template ready for detailed write-up'
  ],
  ...post,
  sections: post.sections ?? defaultSections(post)
}));

export const tagStyles = {
  Mechanical: 'border-orange-300/40 bg-orange-400/15 text-orange-100',
  Electrical: 'border-sky-300/40 bg-sky-400/15 text-sky-100',
  Software: 'border-emerald-300/40 bg-emerald-400/15 text-emerald-100'
};
