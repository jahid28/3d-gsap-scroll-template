import React from 'react';
import { Link } from 'react-router-dom';
import { Optimized3DViewer } from './components/Optimized3DViewer';

export default function Robosub2026Page() {
  return (
    <div className="min-h-screen bg-[#181818] text-white font-sans">
      <div className="flex flex-col md:flex-row pt-32 items-center md:justify-around text-center">
        <div className="text-lg">August 2026</div>
        <h1 className="text-5xl sm:text-6xl font-bold text-orange-500 mb-8">RoboSub 2026</h1>
      </div>

      <section className="flex flex-col md:flex-row items-center justify-between pb-5 md:pb-20 px-8 md:px-20 bg-[#181818]">
        <div className="flex-1 flex items-center justify-center mt-12 md:mt-0 w-full">
          <div className="w-[24rem] h-[24rem] sm:w-[24rem] sm:h-[24rem] md:w-[32rem] md:h-[32rem] lg:w-[44rem] lg:h-[44rem] rounded-full flex items-center justify-center overflow-hidden relative bg-transparent">
            <Optimized3DViewer
              showModel={true}
              scale={[5.5, 5.5, 5.5]}
              enableTouchControls={true}
              modelType="hydra"
            />
          </div>
        </div>
      </section>

      <div className="flex flex-col gap-4 pr-5 pl-5 md:flex-row md:gap-16 justify-center pb-10">
        <Link
          to="/vehicles"
          className="bg-[#d73a1a] hover:bg-orange-600 text-white font-semibold px-8 py-2 rounded-lg shadow transition-all duration-200"
        >
          Click Here To View Hydra & Kraken
        </Link>

        <a
          href="/robosub_2025/Technical-Documentation.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#d73a1a] hover:bg-orange-600 text-white font-semibold px-8 py-2 rounded-lg shadow transition-all duration-200"
        >
          Technical Paper
        </a>

        <a
          href="https://mecatron.notion.site/Robosub-2025-Blog-20c6978f818e80aebb1ec2d603b2cc69"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#d73a1a] hover:bg-orange-600 text-white font-semibold px-8 py-2 rounded-lg shadow transition-all duration-200"
        >
          Team's Blog
        </a>
      </div>

      <div className="flex pt-20 justify-center bg-[#303030] w-full">
        <h2 className="text-4xl font-extrabold text-orange-500 mb-8">Team Video</h2>
      </div>

      <section className="flex flex-col md:flex-row items-center md:justify-center pt-10 pb-10 px-8 md:px-20 bg-[#303030]">
        <div className="w-full aspect-video max-w-4xl">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/stvEZ86dvd4"
            title="Team Mecatron RoboSub Introduction Video | RoboSub 2026"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      <section className="flex flex-col md:flex-row pt-10 pb-15 px-8 md:px-20 bg-[#181818]">
        <div className="relative flex flex-1 mt-12 md:mt-0 pb-10">
          <img
            src="/images/group.png"
            alt="team"
            className="w-full h-auto brightness-50"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <p className="text-white text-center text-lg sm:text-xl px-4 pb-6 font-bold">
              Click here to view our team members behind Mecatron
            </p>
            <Link
              to="/team"
              className="bg-[#d73a1a] hover:bg-orange-600 text-white font-semibold px-8 py-2 rounded-lg shadow transition-all duration-200"
            >
              Members Page
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
