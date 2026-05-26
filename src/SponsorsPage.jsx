import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';

const sponsorProfiles = {
  fstd: {
    name: 'Future Systems & Technology Directorate',
    tier: 'Gold',
    logo: '/images/logos/fstd_logo_edited.jpg',
    logoClass: 'max-h-33 max-w-full object-contain',
    bg: '#ffffff',
    text: 'text-black',
    imageClass: 'max-w-3xl rounded-xl object-contain',
    description: [
      "FSTD spearheads the Singapore Armed Forces' long-term innovation efforts, driving game-changing military capabilities through strategic R&D planning and experimentation. As a key enabler of next-generation defense technologies, FSTD supports initiatives that shape future warfighting and autonomous systems, aligning closely with Mecatron's vision for cutting-edge innovation."
    ]
  },
  smf: {
    name: 'Singapore Maritime Foundation',
    tier: 'Gold',
    logo: '/images/logos/smf_logo_edited.jpg',
    logoClass: 'max-h-16 max-w-full object-contain',
    bg: '#ffffff',
    text: 'text-black',
    imageFirst: true,
    imageClass: 'max-w-3xl rounded-xl object-contain',
    description: [
      "As a key driver of Singapore's maritime future, SMF promotes innovation, talent development, and global collaboration to strengthen Singapore as an International Maritime Centre. Their support empowers Mecatron NTU to explore cutting-edge autonomous technologies and nurture the next generation of maritime engineering talent."
    ]
  },
  dso: {
    name: 'DSO National Laboratories',
    tier: 'Silver',
    logo: '/images/logos/dso_colour_logo.png',
    logoClass: 'max-h-24 max-w-full object-contain',
    bg: '#ffffff',
    text: 'text-black',
    imageClass: 'max-w-3xl object-contain',
    description: [
      "We are especially grateful to DSO National Laboratories, Singapore's largest defence research and development organisation, for their generous monetary sponsorship and the trust they have placed in Mecatron. Their support has provided us with valuable opportunities to innovate, strengthen our autonomous systems, and better prepare for international underwater robotics competitions."
    ]
  },
  vectornav: {
    name: 'VectorNav',
    tier: 'Silver',
    logo: '/images/logos/vectornav_black.jpg',
    logoClass: 'max-h-20 max-w-full object-contain',
    bg: '#ffffff',
    text: 'text-black',
    imageClass: 'max-w-3xl object-contain',
    description: [
      'We are deeply grateful to VectorNav for their generous equipment sponsorship to Mecatron. Their sponsorship of two VN-100 IMU units, along with lifetime technical support, has significantly strengthened our navigation and sensing capabilities. The reliability and precision of their inertial navigation technology have been invaluable in supporting the development and testing of our autonomous underwater vehicle systems.'
    ]
  },
  waterlinked: {
    name: 'WaterLinked',
    tier: 'Silver',
    logo: '/images/logos/waterlinked_colour.png',
    logoClass: 'max-h-20 max-w-full object-contain',
    bg: '#ffffff',
    text: 'text-black',
    imageFirst: true,
    imageClass: 'max-w-3xl object-contain',
    gapClass: 'gap-20',
    description: [
      "We are deeply grateful to Water Linked for their ongoing support and for championing student innovation in the marine robotics community. The Water Linked Doppler Velocity Log DVL A50 integrates seamlessly with our compact autonomous underwater vehicle design, providing reliable, low-drift positioning data that is central to our AUV's autonomous performance."
    ]
  },
  espressif: {
    name: 'Espressif Systems',
    tier: 'Bronze',
    logo: '/images/logos/espressif_black_text.png',
    logoClass: 'max-h-16 max-w-full object-contain',
    bg: '#ffffff',
    text: 'text-black',
    imageClass: 'max-w-md object-contain',
    description: [
      'We are extremely grateful to Espressif Systems for their generous sponsorship of development boards and embedded hardware modules, including the ESP32-S3-EYE V2.2, ESP32-S3-Korvo-2 V3.1, and ESP32-P4-EYE platforms. Their support gives our electronics team access to advanced embedded systems and development tools for onboard computing and system integration.'
    ]
  },
  zen4blue: {
    name: 'Zen4Blue',
    tier: 'Bronze',
    logo: '/images/logos/zen4blue_logo.webp',
    logoClass: 'max-h-32 max-w-full object-contain',
    bg: '#ffffff',
    text: 'text-black',
    imageFirst: true,
    imageClass: 'max-w-3xl rounded-xl object-contain',
    description: [
      "Zen4Blue strives to protect the oceans by supporting sustainable fisheries, creating marine career opportunities for future generations, and restoring balance to ocean ecosystems.",
      "We are grateful to Zen4Blue for supporting our team's travel from Singapore to the USA for the 2024 MATE ROV World Championship."
    ]
  },
  aquarian: {
    name: 'Aquarian Audio',
    tier: 'Bronze',
    logo: '/images/logos/aquarian_logo_colour.png',
    logoClass: 'max-h-16 max-w-full object-contain',
    bg: '#ffffff',
    text: 'text-black',
    imageClass: 'max-w-md object-contain',
    description: [
      'Our team would like to express our sincere appreciation to Aquarian Audio for their support. Their AS-1 hydrophones have greatly aided our acoustic sensing and underwater signal processing efforts, which are essential for our competition success.'
    ]
  },
  dwe: {
    name: 'DeepWater Exploration Inc.',
    tier: 'Bronze',
    logo: '/images/logos/dwe_black.jpg',
    logoClass: 'max-h-16 max-w-full object-contain',
    bg: '#ffffff',
    text: 'text-black',
    imageClass: 'max-w-md object-contain',
    description: [
      'We are especially grateful to DWE for their generous support. Their exploreHD 3.0 underwater cameras have played a key role in advancing our AUV perception capabilities, enabling our team to develop robust underwater robotic systems for competition and research applications.'
    ]
  },
  sonardyne: {
    name: 'Sonardyne',
    tier: 'Silver',
    logo: '/images/logos/sonardyne_clear.png',
    logoClass: 'max-h-14 max-w-full object-contain',
    bg: "#ffffff",
    text: 'text-black',
    imageClass: 'max-w-3xl rounded-xl object-contain',
    overlay: 'bg-black/35',
    description: [
      'We are incredibly grateful to Sonardyne for their generous support and partnership. Their loan of cutting-edge subsea equipment has been invaluable to our project, enabling us to push boundaries in underwater exploration and technology.',
      "Sonardyne's commitment to innovation and their investment in our vision play a crucial role in our success, and we are proud to have them as a key partner on our journey."
    ]
  },
  rovmaker: {
    name: 'ROV Maker',
    tier: 'Bronze',
    logo: '/images/rovmaker_logo.png',
    logoClass: 'max-h-28 max-w-full object-contain',
    bg: '#ffffff',
    text: 'text-black',
    imageClass: 'max-w-2xl rounded-xl object-contain',
    description: [
        'ROV Maker combines underwater technology with scientific research and education practice, creating a diverse community of subsea explorers, hobbyists, and professional users. We are grateful to ROV Maker for supporting our team by assisting with troubleshooting and equipment testing.',

        'ROVMAKER致力于将水下技术与科学研究和教育实践相结合，创建一个由水下探险家、爱好者和专业用户组成的多元化社区。感谢ROVMAKER对于我们团队的支持，协助我们进行故障排除和设备测试。'
      ]
  },
  jdf: {
    name: 'The James Dyson Foundation',
    logo: '/images/logos/jdf_clear.png',
    logoClass: 'max-h-20 max-w-full object-contain',
    bg: '#ffffff',
    text: 'text-black',
    imageClass: 'max-w-2xl object-contain',
    description: [
      'Mecatron is housed in the Dyson-NTU Studio. We use the lab space for team meetings and equipment such as 3D printers to build our underwater vehicles. We are grateful for the support of the James Dyson Foundation as we continue designing robust underwater vehicles with real-world applications in mind.'
    ]
  },
  coe: {
    name: 'NTU College of Engineering',
    logo: '/images/logos/ntu_coe_logo.jpg',
    logoClass: 'max-h-56 max-w-full object-contain',
    bg: '#ffffff',
    text: 'text-black',
    imageClass: 'max-w-2xl object-contain',
    description: [
      'Mecatron is supported by NTU CoE.'
    ]
  },
};

const sponsorYears = {
  2026: {
    tierImage: '/images/tiered_sponsors.png',
    sponsors: ['fstd', 'smf', 'dso', 'vectornav', 'waterlinked', 'espressif', 'zen4blue', 'aquarian', 'dwe'],
    supporters: ['coe', 'jdf']
  },
  2025: {
    tierImage: '/images/tiered_sponsors.png',
    sponsors: ['fstd', 'smf', 'waterlinked', 'sonardyne', 'zen4blue', 'aquarian', 'dwe', 'rovmaker'],
    supporters: ['coe', 'jdf']
  }
};

const years = Object.keys(sponsorYears).sort((a, b) => Number(b) - Number(a));

const sponsorTierOrder = ['Gold', 'Silver', 'Bronze'];

const tierStyles = {
  Gold: {
    heading: 'text-[#CCAA35]',
    border: 'border-[#CCAA35] shadow-[#CCAA35]/25'
  },
  Silver: {
    heading: 'text-slate-200',
    border: 'border-slate-300 shadow-slate-300/20'
  },
  Bronze: {
    heading: 'text-[#905921]',
    border: 'border-[#905921] shadow-[#905921]/25'
  }
};

const defaultLogoClass = 'max-h-28 max-w-full object-contain';

const supporterWriteup = [
  'Mecatron is housed in the Dyson-NTU Studio. We fully utilize the lab space for team meetings and lab equipment (i.e. 3D printers) for building our underwater vehicle! We are grateful for the support of the James Dyson Foundation as we strive to design robust underwater vehicles with potential real-life applications in mind, such as marine sampling.'
];

export default function SponsorsPage() {
  const [activeYear, setActiveYear] = useState('2026');
  const [openCard, setOpenCard] = useState(null);
  const yearData = sponsorYears[activeYear];
  const sponsorsByTier = sponsorTierOrder
    .map((tier) => ({
      tier,
      sponsorIds: yearData.sponsors.filter((id) => sponsorProfiles[id].tier === tier)
    }))
    .filter(({ sponsorIds }) => sponsorIds.length > 0);

  const toggleCard = (id) => {
    setOpenCard(openCard === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-[#181818] text-white flex flex-col items-center">
      <section
        className="relative w-full min-h-[70vh] flex flex-col justify-center items-center text-center px-4 sm:px-8 py-24 bg-cover bg-center text-white"
        style={{ backgroundImage: "url('/images/sponsors_banner.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/60 z-0" />
        <div className="relative z-10">
          <h1 className="text-5xl sm:text-6xl font-bold text-orange-500 mb-8">Sponsors and Supporters</h1>
          <p className="max-w-4xl text-justify text-lg sm:text-xl leading-relaxed">
            We extend our heartfelt gratitude to our sponsors and supporters for placing their trust in Mecatron. Their generous support has provided the resources needed to explore new frontiers, strengthen our engineering work, and bring ambitious underwater robotics projects to life.
          </p>
        </div>
      </section>

      <section className="w-full bg-[#1a1a1a] py-12">
        <div className="max-w-screen-xl mx-auto px-8 flex flex-col items-center text-center">
          <h2 className="text-4xl font-extrabold text-white text-center mb-14">
            Our Sponsors and Supporters
          </h2>

          <img
            src={yearData.tierImage}
            alt={`${activeYear} sponsors by tier`}
            className="w-full max-w-3xl object-contain bg-white/60 rounded-lg shadow-lg"
          />

          <p className="max-w-4xl text-justify text-white sm:text-xl leading-relaxed pt-14 pb-20">Interested in sponsoring our team? Mecatron provides organizations with the opportunity to inspire and support the development of future engineers and connect with NTU students. If you’re interested in sponsoring us, you may contact us within a click!</p>

        <div className="flex flex-col gap-3 px-5 md:flex-row md:gap-5 justify-center -mt-2 md:-mt-8 pb-8">
        <a
          href="/sponsorship_deck/Mecatron-Sponsorship-Deck-2026.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-2 rounded-lg shadow transition-all duration-200"

        >
          View Sponsorship Deck
        </a>

        <a
          href="/contact"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-2 rounded-lg shadow transition-all duration-200"
        >
          Contact Us
        </a>
        
      </div>
        </div>
      </section>

      <YearSection
        title={`${activeYear} Sponsors`}
        yearSelector={(
          <div className="mt-6 inline-flex rounded-lg border border-white/15 bg-white/10 p-1 backdrop-blur-md">
            {years.map((year) => (
              <button
                key={year}
                type="button"
                onClick={() => {
                  setActiveYear(year);
                  setOpenCard(null);
                }}
                className={`px-8 py-2 rounded-md text-base font-semibold transition-all duration-200 ${
                  activeYear === year
                    ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/20'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        )}
      >
        {sponsorsByTier.map(({ tier, sponsorIds }) => (
          <div key={tier} className="mb-12 last:mb-0">
            <h3 className={`mb-5 text-2xl sm:text-3xl font-extrabold ${tierStyles[tier].heading}`}>
              {tier}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {sponsorIds.map((id) => (
                <PartnerCard
                  key={id}
                  id={`sponsor-${activeYear}-${id}`}
                  partner={sponsorProfiles[id]}
                  isOpen={openCard === `sponsor-${activeYear}-${id}`}
                  onToggle={toggleCard}
                  showTier
                />
              ))}
            </div>
          </div>
        ))}
      </YearSection>

      <section className="w-full bg-[#1a1a1a] px-4 sm:px-8 py-16">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl sm:text-5xl font-bold text-orange-500">
              Supporters
            </h3>
          </div>

          <SupportersCard supporterIds={yearData.supporters} />
        </div>
      </section>
    </div>
  );
}

function YearSection({ title, yearSelector, children }) {
  return (
    <section className="w-full bg-[#222] px-4 sm:px-8 pb-20">
      <div className="w-full bg-[#222] px-4 sm:px-8 py-10 text-center">
        <h3 className="text-4xl sm:text-5xl font-bold text-orange-500">
          {title}
        </h3>
        {yearSelector}
      </div>
      <div className="max-w-screen-xl mx-auto">
        {children}
      </div>
    </section>
  );
}

function SupportersCard({ supporterIds }) {
  const supporters = supporterIds.map((id) => sponsorProfiles[id]);

  return (
    <article className="rounded-lg border-2 border-white/15 bg-white text-black shadow-xl overflow-hidden">
      <div className="p-8 sm:p-10">
        <div className="flex flex-wrap items-center justify-center gap-4">
          {supporters.map((supporter) => (
            <div key={supporter.name} className="flex min-h-[150px] w-full max-w-xs items-center justify-center sm:w-72">
              <img
                src={supporter.logo}
                alt={`${supporter.name} logo`}
                className={supporter.logoClass ?? defaultLogoClass}
              />
            </div>
          ))}
        </div>

        <div className="mt-8 border-t border-black/10 pt-6 text-center">
          {supporterWriteup.map((paragraph) => (
            <p key={paragraph} className="mx-auto max-w-4xl text-justify text-base sm:text-lg leading-relaxed text-gray-800">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </article>
  );
}

function PartnerCard({ id, partner, isOpen, onToggle, showTier = false }) {
  const tierStyle = tierStyles[partner.tier];
  const frameClass = showTier ? tierStyle.border : 'border-white/15';
  const backgroundStyle = partner.bgImage
    ? { backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('${partner.bgImage}')` }
    : { backgroundColor: partner.bg ?? '#ffffff' };

  return (
    <article
      className={`rounded-lg border-2 ${frameClass} bg-cover bg-center shadow-xl overflow-hidden ${partner.text}`}
      style={backgroundStyle}
    >
      <button
        type="button"
        onClick={() => onToggle(id)}
        className="w-full min-h-[300px] p-6 text-left flex flex-col"
        aria-expanded={isOpen}
      >
        <div className="flex items-start justify-between gap-4 mb-6">
          <FaChevronDown
            className={`ml-auto mt-1 text-sm transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
            aria-hidden="true"
          />
        </div>

        <div className="flex min-h-[120px] items-center justify-center mb-6">
          <img
            src={partner.logo}
            alt={`${partner.name} logo`}
            className={partner.logoClass ?? defaultLogoClass}
          />
        </div>

        <h3 className="text-2xl font-extrabold leading-tight">{partner.name}</h3>
      </button>

      <div className={`grid transition-all duration-300 ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <div className="overflow-hidden">
          <div className="border-t border-current/15 bg-black/15 px-6 py-5">
            {partner.description.map((paragraph) => (
              <p key={paragraph} className="text-justify text-base leading-relaxed mb-4 last:mb-0">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
