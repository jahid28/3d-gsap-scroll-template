import { Link } from "react-router-dom";

export default function ResearchPage() {
  const researchProjects = [
    {
      id: 1,
      title: "Upcoming",
      date: "2025 - Ongoing",
      description:
        "Stay tuned for more details.",
      image: "/images/team_1.jpg",
      status: "ongoing",
      link: "/research/",
    },
    {
      id: 2,
      title: "Upcoming",
      date: "2025 - Ongoing",
      description:
        "Stay tuned for more details.",
      image: "/images/team_3.jpg",
      status: "ongoing",
      link: "/research/",
    },
  ];

  return (
    <div className="min-h-screen bg-[#181818] text-white">
      {/* Header */}
      <section className="relative w-full min-h-[60vh] flex flex-col justify-center items-center text-center px-4 sm:px-8 py-24 bg-black">
        <div className="relative z-10">
          <h1 className="text-5xl sm:text-6xl font-bold text-orange-500 mb-8">
            Research
          </h1>
          <p className="max-w-3xl text-lg sm:text-xl leading-relaxed text-white">
            Learn more about our ongoing and completed research projects that
            push the boundaries of robotics and automation.
          </p>
        </div>
      </section>

      {/* Research Cards */}
      <div className="max-w-6xl mx-auto px-4 py-16 grid gap-12 md:grid-cols-2">
        {researchProjects.map((project) => (
          <div
            key={project.id}
            className="bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-700"
          >
            {/* Image */}
            <div className="relative h-64 bg-gray-700">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              {project.status === "ongoing" && (
                <div className="absolute top-4 right-4 bg-orange-500 text-black px-3 py-1 rounded-full text-sm font-medium">
                  Upcoming
                </div>
              )}
              {project.status === "completed" && (
                <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Completed
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col space-y-4">
              <h3 className="text-2xl font-bold">{project.title}</h3>
              <span className="text-sm text-gray-400">{project.date}</span>
              <p className="text-gray-300">{project.description}</p>
              <Link
                to={project.link}
                onClick={() => {
                  setTimeout(() => {
                    window.scrollTo(0, 0);
                  }, 100);
                }}
                className="bg-[#d73a1a] hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-lg shadow transition-all duration-200 text-center"
              >
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
