import React, { useState } from 'react';

// Team data structure - easy to modify and expand
const teamData = {
  'AY23/24': {
    Members: [
      {
        name: "Luc Vu Tien",
        role: "Executive Lead",
        image: "/website_member_photos/luc-1.jpg",
        backImage: "/website_member_photos/luc-2.jpg",
        schoolYear: "Year 2 Mechanical Engineering Student",
        linkedin: "https://www.linkedin.com/in/luc-vu-tien-601138131/",
        github: "https://github.com/lucvt001", //
      },
      {
        name: "Toh Jia Hao",
        role: "Software Lead",
        image: "/website_member_photos/jiahao-2.jpg",
        backImage: "/website_member_photos/jiahao-1.jpg",
        schoolYear: "Year 4 Mechanical Engineering Student",
        linkedin: "https://www.linkedin.com/in/toh-jia-hao-65bb39229/",
        github: "https://github.com/Evintjh",
      },
      {
        name: "Arthur Lim",
        role: "Hardware Lead",
        image: "/website_member_photos/arthur-1.jpg",
        backImage: "/website_member_photos/arthur-2.jpg",
        schoolYear: "Year 2 Mechanical Engineering Student",
        linkedin: "https://www.linkedin.com/in/lim-han-zhou-arthur-94215115a/",

      },
      {
        name: "Jennifer Goh",
        role: "Business Lead",
        image: "/website_member_photos/jen-1.jpg",
        backImage: "/website_member_photos/jen-2.jpg",
        schoolYear: "Year 2 Biological Sciences Student",
        linkedin: "https://linkedin.com/in/kevinzhang",
        github: "https://github.com/jennifergoh",
      },
      {
        name: "Zach Low",
        role: "Hardware Member",
        image: "/website_member_photos/zac-1.jpg",
        backImage: "/website_member_photos/zac-2.jpg",
        schoolYear: "Year 4 Mechanical Engineering Student",
        linkedin: "https://www.linkedin.com/in/zach-low",

      },

      {
        name: "Rushdan Mikail",
        role: "Hardware Member",
        image: "/website_member_photos/rush-1.jpg",
        backImage: "/website_member_photos/rushdan-2.jpg",
        schoolYear: "Year 1 Mechanical Engineering Student",
        linkedin: "https://linkedin.com/in/kevinzhang",
        github: "https://github.com/rushdan",
      },
      {
        name: "Cheo Le Xian",
        role: "Software Member",
        image: "/website_member_photos/lexian-2.jpg",
        backImage: "/website_member_photos/lexian-1.jpg",
        schoolYear: "Year 1 Electrical and Electronic Engineering Student",
        linkedin: "https://www.linkedin.com/in/cheo-le-xian-92305b287/",
      },
      {
        name: "Abdillah Goh",
        role: "Website Developer",
        image: "/website_member_photos/abdi-2.jpeg",
        backImage: "/website_member_photos/abdi-1.jpg",
        schoolYear: "Year 2 Computer Engineering Student",
        linkedin: "https://www.linkedin.com/in/abdillah-goh-9440b2198/",
        github: "https://github.com/gohabdillah",
      },
      {
        name: "Maximus Yeo",
        role: "Hardware Member",
        image: "/website_member_photos/max-2.jpg",
        backImage: "/website_member_photos/max-1.jpg",
        schoolYear: "Year 2 Mechanical Engineering Student",
        linkedin: "https://www.linkedin.com/in/maximus-yeo-0679122bb/",

      },
      {
        name: "Fangzhou Liu",
        role: "Hardware Member",
        image: "/website_member_photos/fangzhou-2.jpg",
        backImage: "/website_member_photos/fangzhou-1.jpg",
        schoolYear: "Year 3 Mechanical Engineering Student",
        linkedin: "https://www.linkedin.com/in/fangzhou-liu-83887b28b/",
      },
      {
        name: "Chan Wai Lee",
        role: "Team Advisor",
        image: "/website_member_photos/wailee-2.jpg",
        backImage: "/website_member_photos/wailee-1.jpg",
        schoolYear: "Assistant Professor, School of Mechanical & Aerospace Engineering",
        linkedin: "https://www.linkedin.com/in/wai-lee-chan-3b853595/?originalSubdomain=sg",
      },

    ],

  },
  'AY24/25': {
    leads: [
      {
        name: "Zach Low",
        role: "CEO, Team Lead",
        image: "/website_member_photos/zac-1.jpg",
        backImage: "/website_member_photos/zac-2.jpg",
        schoolYear: "Year 4 Mechanical Engineering Student",
        linkedin: "https://www.linkedin.com/in/zach-low",
      },
      {
        name: "Luc Vu Tien",
        role: "CTO",
        image: "/website_member_photos/luc-1.jpg",
        backImage: "/website_member_photos/luc-2.jpg",
        schoolYear: "Year 3 Mechanical Engineering Student",
        linkedin: "https://www.linkedin.com/in/luc-vu-tien-601138131/",
        github: "https://github.com/lucvt001", // Add this line
      },
      {
        name: "Arthur Lim",
        role: "CFO",
        image: "/website_member_photos/arthur-1.jpg",
        backImage: "/website_member_photos/arthur-2.jpg",
        schoolYear: "Year 3 Mechanical Engineering Student",
        linkedin: "https://www.linkedin.com/in/lim-han-zhou-arthur-94215115a/",
      },
      {
        name: "Jennifer Goh",
        role: "COO CHRO",
        image: "/website_member_photos/jen-1.jpg",
        backImage: "/website_member_photos/jen-2.jpg",
        schoolYear: "Year 3 Biological Sciences Student",
        linkedin: "https://www.linkedin.com/in/jennifer-zhen-ni-goh/",
      },
      {
        name: "Ong Zheng Kai, Ethan",
        role: "Software Lead",
        image: "/website_member_photos/ethanong-2.jpg",
        backImage: "/website_member_photos/ethanong-1.JPG",
        schoolYear: "Year 4 Mechanical Engineering Student",
        linkedin: "https://www.linkedin.com/in/eozk/",
        github: "https://github.com/eozkzoe", // Add this line

      },
      {
        name: "Scott Cheng",
        role: "Electrical & Special Projects Lead",
        image: "/website_member_photos/scott-2.jpeg",
        backImage: "/website_member_photos/scott.s.jpg",
        schoolYear: "Year 2 Computer Science Student",
        linkedin: "https://www.linkedin.com/in/scott-cheng-802138154/",
        github: "https://github.com/scott-cjx", // Add this line
      },
      {
        name: "Wong Wei Ming",
        role: "Admin Lead",
        image: "/website_member_photos/weiming-2.jpeg",
        backImage: "/website_member_photos/weiming-1.webp",
        schoolYear: "Year 2 Computer Engineering Student",
        linkedin: "https://www.linkedin.com/in/wongweiming/",
        github: "https://github.com/Alvin0523", // Add this line

      },
      {
        name: "Abdillah Goh",
        role: "CWO, Webdev Lead",
        image: "/website_member_photos/abdi-2.jpeg",
        backImage: "/website_member_photos/abdi-1.jpg",
        schoolYear: "Year 2 Computer Engineering Student",
        linkedin: "https://www.linkedin.com/in/abdillah-goh-9440b2198/",
        github: "https://github.com/gohabdillah", // Add this line

      },
    ],
    hardware: [
      {
        name: "Zach Low",
        role: "CEO, Team Lead",
        image: "/website_member_photos/zac-1.jpg",
        backImage: "/website_member_photos/zac-2.jpg",
        schoolYear: "Year 4 Mechanical Student",
        linkedin: "https://www.linkedin.com/in/zach-low/",
      },
      {
        name: "Arthur Lim",
        role: "CFO",
        image: "/website_member_photos/arthur-1.jpg",
        backImage: "/website_member_photos/arthur-2.jpg",
        schoolYear: "Year 3 Mechanical Engineering Student",
        linkedin: "https://www.linkedin.com/in/lim-han-zhou-arthur-94215115a/",
      },
      {
        name: "Maximus Yeo",
        role: "Hardware Member",
        image: "/website_member_photos/max-2.jpg",
        backImage: "/website_member_photos/max-1.jpg",
        schoolYear: "Year 3 Mechanical Engineering Student",
        linkedin: "https://www.linkedin.com/in/maximus-yeo-0679122bb/",
      },
      {
        name: "Fangzhou Liu",
        role: "Hardware Member",
        image: "/website_member_photos/fangzhou-2.jpg",
        backImage: "/website_member_photos/fangzhou-1.jpg",
        schoolYear: "Year 3 Mechanical Engineering Student",
        linkedin: "https://www.linkedin.com/in/fangzhou-liu-83887b28b/",
      },
      {
        name: "Zhang Haozhe",
        role: "Hardware Member",
        image: "/website_member_photos/haozhe-2.jpg",
        backImage: "/website_member_photos/haozhe-1.jpg",
        schoolYear: "Year 3 Aerospace Engineering Student",
        linkedin: "https://www.linkedin.com/in/josezhz/",
        github: "https://github.com/josezhz", // Add this line

      },
      {
        name: "Herbian Hokky Prabowo",
        role: "Hardware Member",
        image: "/website_member_photos/herbian-2.jpg",
        backImage: "/website_member_photos/herbian-1.jpg",
        schoolYear: "Year 4 Environmental Science Student",
        linkedin: "https://www.linkedin.com/in/herbian-hokky-prabowo-95a069262/",
      },
      {
        name: "Joowan",
        role: "S. Projects & Hardware Member",
        image: "/website_member_photos/joowan-2.jpg",
        backImage: "/website_member_photos/joowan-1.jpg",
        schoolYear: "Year 4 Mechanical Engineering Student",
        linkedin: "https://www.linkedin.com/in/joowan-ryu-9a9424201/",
      },
      {
        name: "Ethan Andersson Tanra",
        role: "Hardware Member",
        image: "/website_member_photos/ethan-2.jpg",
        backImage: "/website_member_photos/ethan-1.jpg",
        schoolYear: "Year 3 Mechanical Engineering Student",
        linkedin: "https://www.linkedin.com/in/ethan-tantra/",
      },
      {
        name: "Timothy",
        role: "S. Projects & Hardware Member",
        image: "/website_member_photos/timothy-2.jpg",
        backImage: "/website_member_photos/timothy-1.jpg",
        schoolYear: "Year 1 Mechanical Engineering Student",
        linkedin: "https://www.linkedin.com/in/truongtimothy0603/",
      },
      {
        name: "S Tiyaneswaren S/O Selvaraj",
        role: "Hardware Member",
        image: "/website_member_photos/tiyanes-2.jpg",
        backImage: "/website_member_photos/tiyanes-1.jpg",
        schoolYear: "Year 3 Mechanical Engineering Student",
        linkedin: "https://www.linkedin.com/in/s-tiyaneswaren-s-o-selvaraj-44120519b/",
      },
      {
        name: "Akil",
        role: "Hardware Member",
        image: "/website_member_photos/akil-2.jpg",
        backImage: "/website_member_photos/akil-1.jpg",
        schoolYear: "Year 1 Mechanical Engineering Student",
        linkedin: "https://www.linkedin.com/in/akilrafid/",
      },
      {
        name: "Yong Han Wen",
        role: "Hardware Member",
        image: "/website_member_photos/yonghanwen-2.jpg",
        backImage: "/website_member_photos/yonghanwen-1.jpg",
        schoolYear: "Year 2 Electrical and Electronic Engineering Student",
        linkedin: "https://www.linkedin.com/in/yonghanwen/",
      },
      {
        name: "Jordon Koh",
        role: "Hardware Member",
        image: "/website_member_photos/jordon-2.jpg",
        backImage: "/website_member_photos/jordon-1.jpg",
        schoolYear: "Year 4 Mechanical Engineering Student",
      },

    ],
    software: [
      {
        name: "Ong Zheng Kai, Ethan",
        role: "Software Lead",
        image: "/website_member_photos/ethanong-2.jpg",
        backImage: "/website_member_photos/ethanong-1.JPG",
        schoolYear: "Year 4 Mechanical Engineering Student",
        linkedin: "https://www.linkedin.com/in/eozk/",
      },
      {
        name: "Luc Vu Tien",
        role: "CTO",
        image: "/website_member_photos/luc-1.jpg",
        backImage: "/website_member_photos/luc-2.jpg",
        schoolYear: "Year 3 Mechanical Engineering Student",
        linkedin: "https://www.linkedin.com/in/luc-vu-tien-601138131/",
        github: "https://github.com/lucvt001",
      },
      {
        name: "Toh Jia Hao",
        role: "Software Advisor",
        image: "/website_member_photos/jiahao-2.jpg",
        backImage: "/website_member_photos/jiahao-1.jpg",
        schoolYear: "Year 4 Mechanical Engineering Student",
        linkedin: "https://www.linkedin.com/in/toh-jia-hao-65bb39229/",
        github: "https://github.com/Evintjh",
      },
      {
        name: "Wong Wei Ming",
        role: "Admin Lead",
        image: "/website_member_photos/weiming-2.jpeg",
        backImage: "/website_member_photos/weiming-1.webp",
        schoolYear: "Year 2 Computer Engineering Student",
        linkedin: "https://www.linkedin.com/in/wongweiming/",
      },
      {
        name: "Brian Kho Kah Chun",
        role: "Software Member",
        image: "/website_member_photos/brian-2.jpeg",
        backImage: "/website_member_photos/brian-1.jpg",
        schoolYear: "Year 4 Mechanical Engineering Student",
        linkedin: "https://www.linkedin.com/in/kho-kah-chun/",
      },
      {
        name: "Pang Yann Andre",
        role: "Software Member",
        image: "/website_member_photos/andre-2.webp",
        backImage: "/website_member_photos/andre-1.jpeg",
        schoolYear: "Year 4 Mechanical Engineering Student",
        linkedin: "https://www.linkedin.com/in/apangyann/",
      },
      {
        name: "Bui Gia Bao",
        role: "Software Member",
        image: "/website_member_photos/bao-2.jpeg",
        backImage: "/website_member_photos/bao-1.jpg",
        schoolYear: "Year 2 Electrical and Electronic Engineering Student",
        linkedin: "https://www.linkedin.com/in/gia-bao-bui-562883281/",
      },
      {
        name: "Chew Chern Jin, Aegan",
        role: "Software Member",
        image: "/website_member_photos/aegan-2.jpg",
        backImage: "/website_member_photos/aegan-1.JPG",
        schoolYear: "Year 1 CEG & Business Student",
        linkedin: "https://www.linkedin.com/in/chew-chern-jin-aegan-3168402a7/",
      },
      {
        name: "Minh Nhan",
        role: "Software Member",
        image: "/website_member_photos/minNhan-2.jpg",
        backImage: "/website_member_photos/minhNhan-1.jpg",
        schoolYear: "Year 3 Aerospace Engineering & Economics Student",
        linkedin: "https://www.linkedin.com/in/minh-nhan01/",
      },
      {
        name: "Matthew Sungho",
        role: "Software Member",
        image: "/website_member_photos/matthew-2.jpg",
        backImage: "/website_member_photos/matthewsungho-1.jpg",
        schoolYear: "Year 3 Mechanical Engineering Student",
        github: "https://github.com/Mattabyte",
      },
      {
        name: "Nguyen Trung Kien",
        role: "Software Member",
        image: "/website_member_photos/trungkien-2.jpeg",
        backImage: "/website_member_photos/trungkien-1.jpg",
        schoolYear: "Year 4 Mechanical Engineering Student",
        linkedin: "https://www.linkedin.com/in/trungkien001/",
      },
      {
        name: "Chan Jin You",
        role: "Software Member",
        image: "/website_member_photos/chanjinyou-2.jpg",
        backImage: "/website_member_photos/chanjinyou-1.jpg",
        schoolYear: "Year 3 Mechanical Engineering Student",
        linkedin: "https://www.linkedin.com/in/jychan0527/",
        github: "https://github.com/bk1021",

      },
      {
        name: "Pranav Parashar",
        role: "Software Member",
        image: "/website_member_photos/pranav-2.jpg",
        backImage: "/website_member_photos/pranav-1.jpg",
        schoolYear: "Year 3 Computer Science Student",
        linkedin: "https://www.linkedin.com/in/pranav-parashar-a9b185202?",
        github: "https://github.com/Pyder3/Pyder3",

      },
      {
        name: "Wang Ke",
        role: "Software Member",
        image: "/website_member_photos/wangke-2.jpg",
        backImage: "/website_member_photos/wangke-1.jpg",
        schoolYear: "Year 2 Computer Engineering Student",
        linkedin: "https://www.linkedin.com/in/ke-wang-41a2312b3",
      },
      {
        name: "Song Xin",
        role: "Software Member",
        image: "/website_member_photos/songxin-2.jpeg",
        backImage: "/website_member_photos/songxin-1.jpg",
        schoolYear: "Year 1 Computer Science Student",
      },
      {
        name: "Ray Ying Zhan",
        role: "S. Projects & Software Member",
        image: "/website_member_photos/rayyinzhen-2.jpg",
        backImage: "/website_member_photos/rayyingzhen-1.jpg",
        schoolYear: "Year 2 Computer Engineering Student",
        linkedin: "https://www.linkedin.com/in/ray-shao/",
        github: "https://github.com/frieddeli",

      },


    ],
    electrical: [
      {
        name: "Scott Cheng",
        role: "Electrical & Special Projects Lead",
        image: "/website_member_photos/scott-2.jpeg",
        backImage: "/website_member_photos/scott.s.jpg",
        schoolYear: "Year 2 Computer Science Student",
        linkedin: "https://www.linkedin.com/in/scott-cheng-802138154/",
        github: "https://github.com/scott-cjx", // Add this line
      },
    ],
    business: [
      {
        name: "Jennifer Goh",
        role: "COO CHRO",
        image: "/website_member_photos/jen-1.jpg",
        backImage: "/website_member_photos/jen-2.jpg",
        schoolYear: "Year 3 Biological Sciences Student",
        linkedin: "https://www.linkedin.com/in/jennifer-zhen-ni-goh/",
      },
      {
        name: "Shirley Gan Bee Yun",
        role: "Business Member",
        image: "/website_member_photos/shirley-2.jpeg",
        backImage: "/website_member_photos/shirley.jpg",
        schoolYear: "Year 2 Mechanical Engineering Student",
      },
      {
        name: "Jamie Tan",
        role: "Business",
        image: "/website_member_photos/jamie-2.jpeg",
        backImage: "/website_member_photos/jamie-2.jpg",
        schoolYear: "Year 2 Mechanical Engineering Student",
      },
      {
        name: "Tang Pei Wen",
        role: "Business",
        image: "/website_member_photos/tangpeiwen-2.jpeg",
        backImage: "/website_member_photos/tangpeiwen-2.jpeg",
        schoolYear: "Year 1 Mechanical Engineering Student",
      },

    ],
    webdev: [
      {
        name: "Abdillah Goh",
        role: "CWO, Webdev Lead",
        image: "/website_member_photos/abdi-2.jpeg",
        backImage: "/website_member_photos/abdi-1.jpg",
        schoolYear: "Year 2 Computer Engineering Student",
        linkedin: "https://www.linkedin.com/in/abdillah-goh-9440b2198/",
        github: "https://github.com/gohabdillah", // Add this line

      },
      {
        name: "Rohit Kurup",
        role: "Web Dev Member",
        image: "/website_member_photos/rohit-2.jpeg",
        backImage: "/website_member_photos/rohit-1.jpg",
        schoolYear: "Year 2 Computer Science Student",
        linkedin: "https://www.linkedin.com/in/rohit-kurup-6944b8276/",
      },
      {
        name: "Zi Xuan",
        role: "Web Dev Member",
        image: "/website_member_photos/zixuan-2.jpg",
        backImage: "/website_member_photos/zixuan-1.jpeg",
        schoolYear: "Year 1 Computer Science Student",
        linkedin: "https://www.linkedin.com/in/tanzixuantzx",
      },
      {
        name: "Tiffany Sajoto",
        role: "Web Dev Member",
        image: "/website_member_photos/tiffany-2.jpeg",
        backImage: "/website_member_photos/tiffany-1.jpg",
        schoolYear: "Year 3 Computer Engineering Student",
        linkedin: "https://sg.linkedin.com/in/tiffany-sajoto-673000271",
      },
    ],
    projects: [
      {
        name: "Scott Cheng",
        role: "Electrical & Special Projects Lead",
        image: "/website_member_photos/scott-2.jpeg",
        backImage: "/website_member_photos/scott.s.jpg",
        schoolYear: "Year 2 Computer Science Student",
        linkedin: "https://www.linkedin.com/in/scott-cheng-802138154/",
        github: "https://github.com/scott-cjx", // Add this line
      },
      {
        name: "Hao Cheng Jing",
        role: "Special Projects Member",
        image: "/website_member_photos/chengjing-2.jpeg",
        backImage: "/website_member_photos/chengjing-1.s.jpg",
        schoolYear: "Year 2 Electrical & Electronic Engineering Student",
        linkedin: "https://www.linkedin.com/in/cheng-jing-hao-74715a30a/",
      },
      {
        name: "Liu Yong Zhang",
        role: "Special Projects Member",
        image: "/website_member_photos/yongzhang-2.jpeg",
        backImage: "/website_member_photos/yongzhang-1.jpg",
        schoolYear: "Year 3 Mechanical Engineering Student",
        linkedin: "https://www.linkedin.com/in/yongzhang-liu-6661ba24a/",
        github: "https://github.com/YongzhangLiu", // Add this line

      },
      {
        name: "Ray Ying Zhan",
        role: "Special Projects & Software Member",
        image: "/website_member_photos/rayyinzhen-2.jpg",
        backImage: "/website_member_photos/rayyingzhen-1.jpg",
        schoolYear: "Year 2 Computer Engineering Student",
        linkedin: "https://www.linkedin.com/in/ray-shao/",
        github: "https://github.com/frieddeli", // Add this line

      },
      {
        name: "Joowan",
        role: "Special Projects & Hardware Member ",
        image: "/website_member_photos/joowan-2.jpg",
        backImage: "/website_member_photos/joowan-1.jpg",
        schoolYear: "Year 4 Mechanical Engineering Student",
        linkedin: "https://www.linkedin.com/in/joowan-ryu-9a9424201/",
      },
      {
        name: "Timothy",
        role: "Special Projects & Hardware Member",
        image: "/website_member_photos/timothy-2.jpg",
        backImage: "/website_member_photos/timothy-1.jpg",
        schoolYear: "Year 1 Mechanical Engineering Student",
        linkedin: "https://www.linkedin.com/in/truongtimothy0603/",
      },
    ],
    advisors: [
      {
        name: "Chan Wai Lee",
        role: "Team Advisor",
        image: "/website_member_photos/wailee-2.jpg",
        backImage: "/website_member_photos/wailee-1.jpg",
        schoolYear: "Assistant Professor, School of Mechanical & Aerospace Engineering",
        linkedin: "https://www.linkedin.com/in/wai-lee-chan-3b853595/?originalSubdomain=sg",
      },
      {
        name: "Zheng Shimin, Lillian",
        role: "Team Advisor",
        image: "/website_member_photos/lilian-2.jpg",
        backImage: "/website_member_photos/lilian-1.jpg",
        schoolYear: "Manager - Student Development, College of Engineering",
      },
    ]
  },
  'AY25/26': {
      Leads : [
        // Add team members for AY25/26 here
      ],
      Hardware : [
        // Add team members for AY25/26 here
      ],
      Software : [
        // Add team members for AY25/26 here 
      ], 
      Electrical : [
        // Add team members for AY25/26 here
      ],
      Business : [
        // Add team members for AY25/26 here
      ],
      Webdev : [
        // Add team members for AY25/26 here
      ],
      Projects : [
        // Add team members for AY25/26 here
      ],
      Advisors : [
        // Add team members for AY25/26 here
      ]
  }
};

export default function TeamPage() {
  const [activeTab, setActiveTab] = useState('AY24/25');

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

  const teams = year === 'AY23/24' ? [
    { id: 'Members', label: 'Members' }
  ] : [
    { id: 'leads', label: 'Leads' },
    { id: 'hardware', label: 'Hardware' },
    { id: 'software', label: 'Software' },
    { id: 'electrical', label: 'Electrical' },
    { id: 'business', label: 'Business' },
    { id: 'webdev', label: 'Web Dev' },
    { id: 'projects', label: 'S. Projects' },
    { id: 'advisors', label: 'Advisors' }
  ];

  const handleSubmenuChange = (teamId) => {
    setActiveSubmenu(teamId);
  };

  const getTeamContent = (teamId, year) => {
    const members = teamData[year]?.[teamId] || [];
    
    if (members.length === 0) {
      return <p>Content coming soon...</p>;
    }

    const teamDescriptions = {
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
        {year === 'AY24/25' && (
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
      {year === 'AY24/25' && (
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
          
          {/* Hide social icons on front of card */}
          {/* <div className="flex justify-center space-x-4 mt-4">
            {github && (
              <a 
                href={github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
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
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            )}
            {email && (
              <a 
                href={`mailto:${email}`} 
                className="text-gray-400 hover:text-red-400 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
            )}
          </div> */}
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
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
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
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            )}
            {email && (
              <a 
                href={`mailto:${email}`} 
                className="text-gray-400 hover:text-red-400 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
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