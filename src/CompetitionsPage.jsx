import { Link } from 'react-router-dom';

export default function CompetitionsPage() {
  const competitions = [
    {
      id: 1,
      title: "ROBOSUB 2026",
      date: "JULY 2026",
      description: "Hydra & Kraken - Next Generation AUVs coming soon!",
      image: "/competition/images/robosub2026-bots.jpg",
      status: "upcoming",
      link:"/robosub2026"
    },
    {
      id: 2,
      title: "SAUVC 2026",
      date: "MAY 2026",
      description: "Hydra is ready for action!",
      image: "/competition/images/hydra_bot_pic.jpg",
      status: "completed",
      link:"/sauvc2026"
    },
    {
      id: 3,
      title: "ROBOSUB 2025",
      date: "AUGUST 2025",
      description: "Presenting our latest AUV: Kevin!",
      image: "/competition/images/competition_img_1.jpg",
      status: "completed",
      link:"/robosub2025"
    },
    {
      id: 4,
      title: "SAUVC 2025",
      date: "MARCH 2025",
      description: "After our third-place win in 2024, Mecatron made a strong comeback and clinched 1st Place at SAUVC 2025.",
      image: "/competition/images/competition_img_2.jpg",
      status: "completed",
      link:"/sauvc2025"
    },
    {
      id:5,
      title: "MATE ROV 2024",
      date: "MAY 2024",
      description: "Among 82 teams from 17 countries that qualified to compete in the 2024 MATE ROV World Championship, Mecatron was selected for a special award – the Guts and Glory award.",
      image: "/competition/images/competition_img_3.jpg",
      status: "completed",
      link:"/materov2024"
    },
    {
      id:6,
      title: "SAUVC 2024",
      date: "APRIL 2024",
      description: "Mecatron’s AUV had the third fastest qualification timing of 10.53 seconds among the 21 qualified teams, then we proceeded to clinch the 3rd Prize in the final round!",
      image: "/competition/images/competition_img_4.jpg",
      status: "completed",
      link:"/sauvc2024"
    }
  ];

  return (
    <div className="min-h-screen bg-[#181818] text-white">
      {/* Header */}
      <section
        className="relative w-full min-h-[70vh] flex flex-col justify-center items-center text-center px-4 sm:px-8 py-24 bg-cover bg-center text-white"
        style={{ backgroundImage: "url('/images/robosub2025-team.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60 z-0" />
        <div className="relative z-10">
          <h1 className="text-5xl sm:text-6xl font-bold text-orange-500 mb-8">Competitions</h1>
          <p className="max-w-4xl text-lg sm:text-xl leading-relaxed">
            Here's a glimpse of our journey through various competitions, showcasing our dedication, innovation, and achievements in the field of underwater robotics. We are proud of our accomplishments and excited for the future challenges ahead!
          </p>
        </div>
      </section>

      <div className="flex w-full justify-center">
        <p className="text-gray-300 text-lg sm:text-xl pt-10 pb-10">
          Stay tuned for more upcoming competitions!
        </p>
      </div>
      
      {/* Timeline Container */}
      <div className="relative max-w-6xl mx-auto px-4 pb-12">
        {/* Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-700 h-full"></div>

        {/* Competition Cards */}
        {competitions.map((competition, index) => (
          <div key={competition.id} className="relative mb-16">
            {/* Timeline Dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white rounded-full border-4 border-gray-900 z-10"></div>

            {/* Card Container */}
            <div className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
              <div className={`w-full max-w-xl ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-700">
                  {/* Date Badge */}
                  <div className="px-6 py-3 bg-gray-700">
                    <span className="text-sm font-medium text-gray-300">
                      {competition.date}
                    </span>
                  </div>

                  {/* Competition Image */}
                  <div className="relative h-auto bg-gray-700">
                    <img 
                      src={competition.image} 
                      alt={competition.title}
                      className="w-full h-full object-cover"
                    />
                    {competition.status === 'upcoming' && (
                      <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Upcoming
                      </div>
                    )}
                    {competition.status === 'completed' && (
                      <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Completed
                      </div>
                    )}
                  </div>

                  {/* Card Content */}
                  <div className="flex flex-col p-6 space-y-4">
                    <h3 className="text-2xl font-bold text-white">
                      {competition.title}
                    </h3>
                    <p className="text-gray-300 text-lg sm:text-xl leading-relaxed">
                      {competition.description}
                    </p>
                    <Link
                      to={competition.link}
                      onClick={() => {
                        setTimeout(() => {
                          window.scrollTo(0, 0);
                        }, 100);
                      }}
                      className="bg-[#d73a1a] hover:bg-orange-600 text-white font-semibold px-8 py-2 rounded-lg shadow transition-all duration-200 inline-block w-max"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}