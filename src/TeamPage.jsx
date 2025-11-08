import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import teamData from './data/teamData.js';

export default function TeamPage() {
  const [activeTab, setActiveTab] = useState('AY25/26');

  const handleTabChange = (year) => {
    setActiveTab(year);
  };

  return (
    <div className="min-h-screen bg-[#181818] text-white flex flex-col items-center justify-start overflow-x-hidden">
      {/* Background Image Section */}

      
      {/* Hero Section with Background Image */}
      <div className="hero-container w-full h-80 relative flex items-center justify-center mb-12 mt-16">
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
        <div className="relative z-20 max-w-6xl px-4 flex flex-col md:flex-row items-start justify-center gap-8">
          <div className="flex-shrink-0">
            <h1 className="text-3xl md:text-5xl font-bold text-orange-500 text-center md:text-left">Meet Our Team</h1>
          </div>
          <div className="flex-1">
            <p className="text-base md:text-lg text-white text-justify">We are a multidisciplinary team with members from NTU's School of Mechanical and Aerospace Engineering (MAE), College of Computing and Data Science (CCDS), School of Electrical and Electronic Engineering (EEE) and School of Biological Sciences (SBS). Leveraging expertise in 3D design, mechatronics, robotics programming, and marine biology, our interdisciplinary team tackles challenging engineering problems with real-life contexts.</p>
          </div>
        </div>
      </div>
      
      <div className="w-full max-w-6xl px-4">
        {/* Year Tabs - Mobile: Stack vertically, Desktop: Side by side */}
        <div className="flex flex-col md:flex-row justify-start items-start gap-4 md:gap-8">
          {/* Tab Container */}
          <div className="tab-container mb-4 md:mb-8 flex-shrink-0 w-full md:w-48">

            <input 
              className="tab tab--3" 
              id="tabAY25/26" 
              name="tab" 
              type="radio" 
              checked={activeTab === 'AY25/26'}
              onChange={() => handleTabChange('AY25/26')}
            />
            <label htmlFor="tabAY25/26" className="tab_label">AY25/26</label>

            <input 
              className="tab tab--2" 
              id="tabAY24/25" 
              name="tab" 
              type="radio" 
              checked={activeTab === 'AY24/25'}
              onChange={() => handleTabChange('AY24/25')}
            />
            <label htmlFor="tabAY24/25" className="tab_label">AY24/25</label>

            <input
              className="tab tab--1"
              id="tabAY23/24"
              name="tab"
              type="radio"
              checked={activeTab === 'AY23/24'}
              onChange={() => handleTabChange('AY23/24')}
            />
            <label htmlFor="tabAY23/24" className="tab_label">AY23/24</label>

            <div className="indicator"></div>
            <div className="scroller"></div>
          </div>

          {/* Tab Content - Full width on mobile and desktop */}
          <div className="tab-content flex-1 w-full min-w-0">
            {activeTab === 'AY23/24' && (
              <div className="text-center w-full">
                <TeamSubmenu year="AY23/24" />
              </div>
            )}
            
            {activeTab === 'AY24/25' && (
              <div className="text-center w-full">
                <TeamSubmenu year="AY24/25" />
              </div>
            )}

            {activeTab === 'AY25/26' && (
              <div className="text-center w-full">
                <TeamSubmenu year="AY25/26" />
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-container {
          background-color:rgb(98, 96, 96);
        }

        .tab-container {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          padding: 2px;
          border-radius: 9px;
          gap: 20px;
        }

        /* make the scroller fill the tab container so it visually spans all years */
        .scroller {
          content: "";
          width: 15px;
          height: calc(100% - 10px); /* span container height */
          opacity: 0.4;
          background: #888;
          position: absolute;
          top: 5px;
          left: -17px;
          border: 0.5px solid rgba(0, 0, 0, 0.04);
          border-radius: 7px;
        }

        /* Indicator uses translateY so we don't need hard-coded top values per breakpoint.
           Height is one-third of the scroller (3 tabs). If you later add more tabs, update the divisor. */
        .indicator {
          content: "";
          width: 10px;
          height: calc(100% / 3); /* adjust when number of tabs changes */
          background: #ffa500;
          position: absolute;
          top: 5px;
          left: -15px;
          z-index: 9;
          border: 0.5px solid rgba(0, 0, 0, 0.04);
          box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.12), 0px 3px 1px rgba(0, 0, 0, 0.04);
          border-radius: 7px;
          transition: transform 0.2s ease-out;
          transform: translateY(0%); /* default first tab */
        }

        /* move indicator by multiples of its own height using :checked sibling selectors */
        .tab--3:checked ~ .indicator { transform: translateY(0%); }   /* first item (AY25/26) */
        .tab--2:checked ~ .indicator { transform: translateY(100%); } /* second item (AY24/25) */
        .tab--1:checked ~ .indicator { transform: translateY(200%); } /* third item (AY23/24) */

        /* responsive overrides keep the scroller behavior consistent */
        @media (max-width: 768px) {
          .scroller {
            left: 8px;
            top: 8px;
            height: calc(100% - 16px);
          }
          .indicator {
            left: 9px;
            top: 8px;
            height: calc(100% / 3);
          }
        }

        @media (min-width: 769px) {
          .scroller {
            left: -17px;
            top: 5px;
            height: calc(100% - 10px);
          }
          .indicator {
            left: -15px;
            top: 5px;
            height: calc(100% / 3);
          }
        }

        .tab {
          width: 130px;
          height: 28px;
          position: absolute;
          z-index: 99;
          outline: none;
          opacity: 0;
          cursor: pointer;
          left: 0;
        }

        .tab_label {
          width: 200px;
          height: 50px;
          position: relative;
          z-index: 999;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          border: 0;
          font-size: 1rem;
          cursor: pointer;
          color: #888;
          transition: color 0.2s ease;
          padding-left: 20px;
        }

        .tab_label:hover {
          color: #ffa500;
        }

        .tab-content {
          min-height: 400px;
        }

        /* Submenu Styles */
        .submenu-container {
          --color-pure: #fff;
          --color-primary: #232323;
          --color-secondary: #fb923c;
          --muted: #fb923c;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
        }

        .submenu-wrap {
          --round: 10px;
          --p-x: 8px;
          --p-y: 4px;
          --w-label: calc(100% / 8);
          display: flex;
          align-items: center;
          padding: var(--p-y) var(--p-x);
          position: relative;
          background: var(--color-primary);
          border-radius: var(--round);
          width: 100%;
          overflow-x: auto;
          scrollbar-width: none;
          -webkit-overflow-scrolling: touch;
          top: 0;
          z-index: 1;
        }

        @media (max-width: 768px) {
          .submenu-wrap {
            --w-label: calc(100% / 4);
            flex-wrap: wrap;
            overflow-x: visible;
            overflow-y: visible;
            height: auto;
            padding: 2px 4px;
          }
          
          .submenu-label {
            flex: 0 0 calc(25% - 4px);
            margin: 1px;
            padding: 6px 8px;
            font-size: 0.65rem;
            min-width: auto;
            width: auto;
            text-align: center;
          }
          
          .submenu-label span {
            font-size: 0.65rem;
            line-height: 1.2;
          }
          
          .submenu-slidebar,
          .submenu-bar {
            display: none;
          }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          .submenu-wrap {
            --w-label: calc(100% / 6);
            flex-wrap: wrap;
            overflow-x: visible;
            overflow-y: visible;
            height: auto;
          }
          
          .submenu-label {
            flex: 0 0 calc(33.33% - 8px);
            margin: 2px;
            padding: 8px 10px;
            font-size: 0.75rem;
            min-width: auto;
            width: auto;
          }
          
          .submenu-slidebar,
          .submenu-bar {
            display: none;
          }
        }

        .submenu-wrap input {
          height: 0;
          width: 0;
          position: absolute;
          overflow: hidden;
          display: none;
          visibility: hidden;
        }

        .submenu-label {
          cursor: pointer;
          outline: none;
          font-size: 0.875rem;
          letter-spacing: initial;
          font-weight: 700;
          color: var(--color-secondary);
          background: transparent;
          padding: 12px 16px;
          width: var(--w-label);
          min-width: var(--w-label);
          text-decoration: none;
          -webkit-user-select: none;
          user-select: none;
          transition: color 0.25s ease;
          outline-offset: -6px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          z-index: 2;
          -webkit-tap-highlight-color: transparent;
          flex: 1;
        }

        .submenu-label span {
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
        }

        .submenu-wrap input[class*="rd-"]:checked + .submenu-label {
          color: var(--color-pure);
        }

        .submenu-bar {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          position: absolute;
          transform-origin: 0 0 0;
          height: 100%;
          width: var(--w-label);
          z-index: 0;
          transition: transform 0.5s cubic-bezier(0.33, 0.83, 0.99, 0.98);
        }

        .submenu-bar::before,
        .submenu-bar::after {
          content: "";
          position: absolute;
          height: 4px;
          width: 100%;
          background: var(--color-secondary);
        }

        .submenu-bar::before {
          top: 0;
          border-radius: 0 0 9999px 9999px;
        }

        .submenu-bar::after {
          bottom: 0;
          border-radius: 9999px 9999px 0 0;
        }

        .submenu-slidebar {
          position: absolute;
          height: calc(100% - (var(--p-y) * 4));
          width: var(--w-label);
          border-radius: calc(var(--round) - var(--p-y));
          background: var(--muted);
          transform-origin: 0 0 0;
          z-index: 0;
          transition: transform 0.5s cubic-bezier(0.33, 0.83, 0.99, 0.98);
        }

        .submenu-wrap .rd-1:checked ~ .submenu-bar,
        .submenu-wrap .rd-1:checked ~ .submenu-slidebar {
          transform: translateX(0) scaleX(1);
        }
        .submenu-wrap .rd-2:checked ~ .submenu-bar,
        .submenu-wrap .rd-2:checked ~ .submenu-slidebar {
          transform: translateX(100%) scaleX(1);
        }
        .submenu-wrap .rd-3:checked ~ .submenu-bar,
        .submenu-wrap .rd-3:checked ~ .submenu-slidebar {
          transform: translateX(200%) scaleX(1);
        }
        .submenu-wrap .rd-4:checked ~ .submenu-bar,
        .submenu-wrap .rd-4:checked ~ .submenu-slidebar {
          transform: translateX(300%) scaleX(1);
        }
        .submenu-wrap .rd-5:checked ~ .submenu-bar,
        .submenu-wrap .rd-5:checked ~ .submenu-slidebar {
          transform: translateX(400%) scaleX(1);
        }
        .submenu-wrap .rd-6:checked ~ .submenu-bar,
        .submenu-wrap .rd-6:checked ~ .submenu-slidebar {
          transform: translateX(500%) scaleX(1);
        }
        .submenu-wrap .rd-7:checked ~ .submenu-bar,
        .submenu-wrap .rd-7:checked ~ .submenu-slidebar {
          transform: translateX(600%) scaleX(1);
        }
        .submenu-wrap .rd-8:checked ~ .submenu-bar,
        .submenu-wrap .rd-8:checked ~ .submenu-slidebar {
          transform: translateX(700%) scaleX(1);
        }
      `}</style>
    </div>
  );
}

function TeamSubmenu({ year }) {
  const [activeSubmenu, setActiveSubmenu] = useState(year === 'AY23/24' ? 'Members' : 'leads');

  let teams = [];

  if (year === "AY23/24") {
    teams = [{ id: "Members", label: "Members" }];
  } else if (year === "AY24/25") {
    teams = [
      { id: "leads", label: "Leads" },
      { id: "hardware", label: "Hardware" },
      { id: "software", label: "Software" },
      { id: "electrical", label: "Electrical" },
      { id: "business", label: "Business" },
      { id: "webdev", label: "Web Dev" },
      { id: "projects", label: "S. Projects" },
      { id: "advisors", label: "Advisors" },
    ];
  } else if (year === "AY25/26") {
    teams = [
      { id: "leads", label: "Leads" },
      { id: "mechanical", label: "Mechanical" },
      { id: "software", label: "Software" },
      { id: "electrical", label: "Electrical" },
      { id: "business", label: "Business" },
      { id: "webnapp", label: "Web&App" }, 
      { id: "rnd", label: "R&D" },
      { id: "advisors", label: "Advisors" },
    ];
  }

  const handleSubmenuChange = (teamId) => {
    setActiveSubmenu(teamId);
  };

  const getTeamContent = (teamId, year) => {
    const members = teamData[year]?.[teamId] || [];
    
    if (members.length === 0) {
      return <p>Content coming soon...</p>;
    }

const teamDescriptions = {
      'AY25/26': {
      leads:
        "Steering the team’s vision, strategy, and cross-functional coordination to drive Mecatron forward.",
      mechanical:
        "Designing and building the mechanical systems that bring our autonomous vehicles to life.",
      software:
        "Developing the brains behind our AUVs — from navigation algorithms to computer vision and control systems.",
      electrical:
        "Engineering the power, circuits, and embedded systems that keep our vehicles running reliably underwater.",
      business:
        "Managing sponsorships, partnerships, outreach, and branding to sustain and grow Team Mecatron.",
      webnapp:
        "Developing Mecatron’s digital ecosystem — from web platforms to interactive apps that expand outreach and usability.",
      rnd:
        "Pioneering experimental subsystems and outreach prototypes with real-world impact.",
      advisors:
        "Providing mentorship, technical guidance, and industry insight to elevate the team’s capabilities.",
    },
      'AY24/25': {
        leads: "Steering the team’s vision, strategy, and cross-functional coordination to drive Mecatron forward.",
        hardware: "Designing and building the mechanical systems that bring our autonomous vehicles to life.",
        software: "Developing the brains behind our AUVs — from navigation algorithms to computer vision and control systems.",
        electrical: "Engineering the power, circuits, and embedded systems that keep our vehicles running reliably underwater.",
        business: "Managing sponsorships, partnerships, outreach, and branding to sustain and grow Team Mecatron.",
        webdev: "Creating and maintaining Mecatron’s digital presence — from website development to interactive e-resources.",
        projects: "Pioneering experimental subsystems and ambitious prototypes beyond the core vehicle build, with a focus on youth engagement and outreach.",
        advisors: "Providing mentorship, technical guidance, and industry insight to elevate the team’s capabilities."
      },
      'AY23/24': {
        Members: "Our small but dedicated team combines experience and passion to lead Mecatron’s 2024 innovations from concept to completion.",
      }

};

    const description = teamDescriptions[year]?.[teamId] || "Meet our team members for the year of AY23/24";

    return (
      <div>
        <p className="mb-6">{description}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {members.map((member, index) => (
            <TeamMemberCard key={`${year}-${teamId}-${index}`} member={member} />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="w-full mx-auto">
      <div className="submenu-container">
        {["AY24/25", "AY25/26"].includes(year) && (
        <div className="submenu-wrap">
          {teams.map((team, index) => (
            <React.Fragment key={team.id}>
              <input
                type="radio"
                id={`${year}-${team.id}`}
                name={`submenu-${year}`}
                className={`rd-${index + 1}`}
                checked={activeSubmenu === team.id}
                onChange={() => handleSubmenuChange(team.id)}
                hidden
              />
              <label htmlFor={`${year}-${team.id}`} className="submenu-label" style={{ '--index': index }}>
                <span>{team.label}</span>
              </label>
            </React.Fragment>
          ))}
          <div className="submenu-bar"></div>
          <div className="submenu-slidebar"></div>
        </div>
        )}
      </div>

      {/* Submenu Content */}
      {["AY24/25", "AY25/26"].includes(year) && (
        <div className="submenu-content mt-4 md:mt-8 p-3 md:p-4 lg:p-6 bg-[#232323] rounded-lg mb-8">
          <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-orange-400 mb-4">
          {teams.find(team => team.id === activeSubmenu)?.label} Team {year}
        </h3>
        <div className="text-sm md:text-base lg:text-lg text-white">
          {getTeamContent(activeSubmenu, year)}
        </div>
      </div>
      )}

      {year === 'AY23/24' && (
        <div className="submenu-content mt-4 md:mt-8 p-3 md:p-4 lg:p-6 bg-[#232323] rounded-lg mb-8">
          <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-orange-400 mb-4">
            Mecatron AY23/24
          </h3>
          <div className="text-sm md:text-base lg:text-lg text-white">
            {getTeamContent('Members', year)}
          </div>
        </div>
      )}
    </div>
  );
}

// Reusable TeamMemberCard component
function TeamMemberCard({ member }) {
  const { name, role, image, backImage, schoolYear, github, linkedin, email, department, company } = member;
  const [isFlipped, setIsFlipped] = useState(false);
  const [imgError, setImgError] = useState(false);
  
  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };
  
  return (
    <div 
      className="team-card-container"
      onClick={handleCardClick}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div className={`team-card ${isFlipped ? 'flipped' : ''}`}>
        {/* Front of card */}
        <div className="team-card-front ">
          <div className="w-full h-64 mx-auto mb-4 rounded-lg overflow-hidden bg-gray-600">
            <img 
              src={imgError ? '/api/placeholder/192/192' : image}
              alt={name} 
              className="w-full h-full object-cover"
              onError={() => setImgError(true)}
              onLoad={() => setImgError(false)}
            />
            <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm" style={{ display: 'none' }}>
              Photo
            </div>
          </div>
          <h4 className="text-lg font-bold text-white mb-2">{name}</h4>
          <p className="text-orange-400 font-semibold mb-2">{role}</p>
          
          {/* Show department or company for advisors */}
          {department && <p className="text-xs text-gray-300 mb-4">{department}</p>}
          {company && <p className="text-xs text-gray-300 mb-4">{company}</p>}          
        </div>
        
        {/* Back of card */}
        <div className="team-card-back">
          <div className="w-full h-64 mx-auto mb-4 rounded-lg overflow-hidden bg-gray-600">
            <img 
              src={backImage || image} 
              alt={`${name} back`} 
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm" style={{ display: 'none' }}>
              Photo
            </div>
          </div>
          <h4 className="text-lg font-bold text-white mb-2">{name}</h4>
          <h5 className="text-sm text-orange-400 font-semibold mb-2">{schoolYear || role}</h5>
          
          {/* Show department or company for advisors */}
          {department && <p className="text-xs text-gray-300 mb-4">{department}</p>}
          {company && <p className="text-xs text-gray-300 mb-4">{company}</p>}
          
          <div className="flex justify-center space-x-4 mt-4">
            {github && (
              <a 
                href={github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
              <FaGithub size={22} />
              </a>
            )}
            {linkedin && (
              <a 
                href={linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
              <FaLinkedin size={22} />
              </a>
            )}
            {email && (
              <a 
                href={`mailto:${email}`} 
                className="text-gray-400 hover:text-red-400 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
              <FaEnvelope size={22} />
              </a>
            )}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .team-card-container {
          perspective: 1000px;
          cursor: pointer;
          min-height: 370px;
        }
        
        .team-card {
          position: relative;
          width: 100%;
          height: 100%;
          min-height: 480px;
          transform-style: preserve-3d;
          transition: transform 0.6s;
          background: #2a2a2a;
          border-radius: 0.5rem;
          padding: 1.5rem;
          text-align: center;
        }
        
        .team-card.flipped {
          transform: rotateY(180deg);
        }
        
        .team-card-front,
        .team-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          backface-visibility: hidden;
          border-radius: 0.5rem;
          padding: 1.5rem;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        
        .team-card-back {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
}