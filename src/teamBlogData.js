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
    title: 'Hydra Frame',
    tag: 'Mechanical',
    authors: 'Tim',
    image: '/competition/images/robosub2026-bots.jpg',
    description: "Design and build notes for Hydra's frame, packaging, and structural layout.",
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
    title: 'Kraken Frame',
    tag: 'Mechanical',
    authors: 'Isaac',
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
    authors: 'Max, Akil',
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
    title: 'Gripper',
    tag: 'Mechanical',
    authors: 'Arthur',
    image: '/competition/images/competition_img_2.jpg',
    description: 'Design notes for the gripper mechanism and its vehicle integration.',
    sections: [
      {
        heading: 'Overview',
        body: 'Gripper overview text here.'
      },
      {
        heading: 'Development Notes',
        body: 'Gripper development notes here.'
      },
      {
        heading: 'Next Steps',
        body: 'Gripper next steps here.'
      }
    ]
  },
  {
    slug: 'acoustics',
    title: 'Acoustics',
    tag: 'Electrical',
    authors: 'Arthur',
    image: '/competition/images/competition_img_3.jpg',
    description: 'Acoustics subsystem notes covering sensing, signal flow, and integration plans.',
    sections: [
      {
        heading: 'Overview',
        body: 'Acoustics overview text here.'
      },
      {
        heading: 'Development Notes',
        body: 'Acoustics development notes here.'
      },
      {
        heading: 'Next Steps',
        body: 'Acoustics next steps here.'
      }
    ]
  },
  {
    slug: 'dropper',
    title: 'Electromagnetic Dropper Iterations',
    tag: 'Mechanical',
    authors: 'Gerardo',
    image: '/images/robosub2026/mechanical-subsystems/dropper1.png',
    description: 'Development notes for the dropper mechanism, mounting, and testing workflow.',
    sections: [
      {
        heading: 'Dropper Design Considerations',
        body: 'Hydra integrates an electromagnetic marker delivery system to ensure reliable actuation. For operational safety and power efficiency, the 12V electromagnet is kept in an unpowered state. Deployment is achieved by activating the circuit to electromagnetically repel the marker. The electromagnet is housed within a custom 3D-printed encasing and directly attached to the main body of Hydra. A PVC tube routes the electromagnet cables to the actuator cylinder while maintaining strain relief and waterproofing. Finally, the dropper housing is entirely filled with epoxy, providing absolute waterproofing for the electromagnet and improving longevity and reliability.',
        images: [
          {
            src: '/images/robosub2026/mechanical-subsystems/dropper1.png',
            caption: 'Dropper mechanism design placeholder.'
          }
        ]
      },
      {
        heading: 'Marker Design Considerations',
        body: 'To optimize aerodynamic stability and reduce unintended pitch or roll during descent, the marker uses a torpedo shape with a low center of gravity. This is achieved through an integrated cavity and strategically placed tungsten weights, improving trajectory precision. The marker also includes 2 mm deep helical grooves and protruding wings to create axial spin, helping it travel straight during deployment. A high-strength neodymium magnet is embedded within the marker to enable secure passive magnetic coupling with the AUV’s unpowered electromagnet.',
        images: [
          {
            src: '/images/robosub2026/mechanical-subsystems/dropper2.png',
            caption: 'Marker design placeholder.'
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
            caption: 'Six dropper iterations placeholder.'
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
            src: '/images/robosub2026/software-subsystems/ekf.png',
            caption: 'Marker parameter tuning placeholder.'
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
    title: 'Torpedo',
    tag: 'Mechanical',
    authors: 'Akil',
    image: '/competition/images/robosub2026-bots.jpg',
    description: 'Design and validation notes for the torpedo mechanism and deployment setup.',
    sections: [
      {
        heading: 'Overview',
        body: 'Torpedo overview text here.'
      },
      {
        heading: 'Development Notes',
        body: 'Torpedo development notes here.'
      },
      {
        heading: 'Next Steps',
        body: 'Torpedo next steps here.'
      }
    ]
  },
  {
    slug: 'pdu-pcb',
    title: 'Elec PCB1: PDU',
    tag: 'Electrical',
    authors: 'Scott',
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
    title: 'Elec PCB2: Acoustics',
    tag: 'Electrical',
    authors: 'Scott',
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
    title: 'SW Experiment With Different Stack',
    tag: 'Software',
    authors: 'Bao',
    image: '/competition/images/competition_img_2.jpg',
    description: 'Software experiment notes comparing stack choices and development tradeoffs.',
    sections: [
      {
        heading: 'Overview',
        body: 'SW Experiment With Different Stack overview text here.'
      },
      {
        heading: 'Development Notes',
        body: 'SW Experiment With Different Stack development notes here.'
      },
      {
        heading: 'Next Steps',
        body: 'SW Experiment With Different Stack next steps here.'
      }
    ]
  },
  {
    slug: 'software-operator-pov',
    title: 'SW Operator POV Screens',
    tag: 'Software',
    authors: 'PH',
    image: '/competition/images/competition_img_4.jpg',
    description: 'Annotated operator POV screenshots showing the software interface and runtime context.',
    sections: [
      {
        heading: 'Overview',
        body: 'SW Operator POV Screens overview text here.'
      },
      {
        heading: 'Development Notes',
        body: 'SW Operator POV Screens development notes here.'
      },
      {
        heading: 'Next Steps',
        body: 'SW Operator POV Screens next steps here.'
      }
    ]
  }
];

export const blogPosts = posts.map((post) => ({
  date: 'Jan 2026',
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
