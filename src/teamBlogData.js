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
    description: 'Design and build notes for Hydra’s frame, packaging, and structural layout.'
  },
  {
    slug: 'kraken-frame',
    title: 'Kraken Frame',
    tag: 'Mechanical',
    authors: 'Isaac',
    image: '/competition/images/robosub2026-bots.jpg',
    description: 'Development notes for Kraken’s experimental frame and structural concept.'
  },
  {
    slug: 'electronics-enclosure-cnc-box',
    title: 'Electronics Enclosure CNC Box',
    tag: 'Mechanical',
    authors: 'Max, Akil',
    image: '/competition/images/competition_img_1.jpg',
    description: 'Internal notes on the CNC electronics enclosure design, manufacturing, and fit checks.'
  },
  {
    slug: 'gripper',
    title: 'Gripper',
    tag: 'Mechanical',
    authors: 'Arthur',
    image: '/competition/images/competition_img_2.jpg',
    description: 'Design notes for the gripper mechanism and its vehicle integration.'
  },
  {
    slug: 'acoustics',
    title: 'Acoustics',
    tag: 'Electrical',
    authors: 'Arthur',
    image: '/competition/images/competition_img_3.jpg',
    description: 'Acoustics subsystem notes covering sensing, signal flow, and integration plans.'
  },
  {
    slug: 'dropper',
    title: 'Evolution of the Dropper',
    tag: 'Mechanical',
    authors: 'Gerardo',
    image: '/competition/images/competition_img_4.jpg',
    description: 'Development notes for the dropper mechanism, mounting, and testing workflow.'
  },
  {
    slug: 'torpedo',
    title: 'Torpedo',
    tag: 'Mechanical',
    authors: 'Akil',
    image: '/competition/images/robosub2026-bots.jpg',
    description: 'Design and validation notes for the torpedo mechanism and deployment setup.'
  },
  {
    slug: 'pdu-pcb',
    title: 'Elec PCB1: PDU',
    tag: 'Electrical',
    authors: 'Scott',
    image: '/competition/images/competition_img_1.jpg',
    description: 'Power distribution unit PCB notes, including design intent, bring-up, and testing.'
  },
  {
    slug: 'acoustics-pcb',
    title: 'Elec PCB2: Acoustics',
    tag: 'Electrical',
    authors: 'Scott',
    image: '/competition/images/competition_img_3.jpg',
    description: 'Acoustics PCB notes covering board design, signal handling, and subsystem testing.'
  },
  {
    slug: 'software-different-stack-experiment',
    title: 'SW Experiment With Different Stack',
    tag: 'Software',
    authors: 'Bao',
    image: '/competition/images/competition_img_2.jpg',
    description: 'Software experiment notes comparing stack choices and development tradeoffs.'
  },
  {
    slug: 'software-operator-pov',
    title: 'SW Operator POV Screens',
    tag: 'Software',
    authors: 'PH',
    image: '/competition/images/competition_img_4.jpg',
    description: 'Annotated operator POV screenshots showing the software interface and runtime context.'
  }
];

export const blogPosts = posts.map((post) => ({
  date: 'Jan 2026',
  details: [
    `${post.tag} workstream`,
    'Reusable post template ready for detailed write-up'
  ],
  sections: defaultSections(post),
  ...post
}));

export const tagStyles = {
  Mechanical: 'border-orange-300/40 bg-orange-400/15 text-orange-100',
  Electrical: 'border-sky-300/40 bg-sky-400/15 text-sky-100',
  Software: 'border-emerald-300/40 bg-emerald-400/15 text-emerald-100'
};
