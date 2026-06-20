import React from 'react';

export default function JoinUsPage() {
  return (
    <div className="min-h-screen bg-[#181818] text-white">
      {/* Hero Section */}
      <section 
        className="relative w-full min-h-[70vh] flex flex-col justify-center items-center text-center px-4 sm:px-8 py-24 bg-cover bg-center text-white"
        style={{ backgroundImage: "url('/images/sauvc2025.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/80 z-0" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-orange-500 mb-6">
            Join Mecatron
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white mb-8">
            Be part of the future of underwater robotics
          </p>
          <p className="text-base sm:text-lg text-white mb-12 max-w-2xl mx-auto">
            We're looking for passionate students who want to push the boundaries of autonomous underwater vehicles. 
            Join our multidisciplinary team and help us compete in international robotics competitions.
          </p>
          
          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://mecatron.notion.site/ay-25-26-recruitments" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 text-lg rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105"
            >
              Apply Now
            </a>
            <a 
              href="/team" 
              className="border border-gray-400 text-gray-200 font-semibold px-8 py-4 text-lg rounded-lg shadow transition-all duration-200 hover:bg-gray-700"
            >
              Meet Our Team
            </a>
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-16 px-4 sm:px-8 md:px-20 bg-[#1a1a1a]">
        <div className="w-full max-w-screen-xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-orange-500 text-center mb-12">
            Why Join Mecatron?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-3">Hands-on Experience</h3>
              <p className="text-gray-400">
                Work on real underwater robotics projects and gain practical engineering skills.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-semibold mb-3">Competition Experience</h3>
              <p className="text-gray-400">
                Compete in international robotics competitions like SAUVC and RoboSub.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-semibold mb-3">Team Collaboration</h3>
              <p className="text-gray-400">
                Work with a diverse team of engineers, designers, and innovators.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 px-4 sm:px-8 md:px-20">
        <div className="w-full max-w-screen-xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-orange-500 mb-8">
            Ready to Join?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Click the button below to access our recruitment form and start your journey with Mecatron.
          </p>
          <a 
            href="https://mecatron.notion.site/ay-25-26-recruitments" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 text-lg rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105"
          >
            Apply for AY 25/26
          </a>
        </div>
      </section>
    </div>
  );
} 