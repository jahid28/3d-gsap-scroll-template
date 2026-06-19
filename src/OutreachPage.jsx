import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function OutreachPage() {
  const sectionRefs = {
    home: useRef(null),
    services: useRef(null),
    about: useRef(null),
    portfolio: useRef(null),
    contact: useRef(null),
    competitions: useRef(null),
  };

  return (
    <div className="min-h-screen bg-[#181818] text-white flex flex-col items-center pt-8 sm:pt-0">
      {/* Outreach Hero Banner */}
      <section
        className="relative w-full min-h-[70vh] flex flex-col justify-center items-center text-center px-4 sm:px-8 py-24 bg-cover bg-center text-white"
        style={{ backgroundImage: "url('/images/outreach_banner.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60 z-0" />
        <div className="relative z-10">
          <h1 className="text-5xl sm:text-6xl font-bold text-orange-500 mb-8">Outreach</h1>
          <p className="max-w-4xl text-lg sm:text-xl leading-relaxed">
            Members are eager to share our work and our knowledge with the
            community through outreach workshops, to inspire a spirit of
            innovation in students. Through these workshops, we hope to spark
            students’ interest in Marine Science & Tech; to evoke curiosity and
            inspire students to innovate new solutions as they explore the world
            beyond the school curriculum.
          </p>
        </div>
      </section>

      {/* Workshops Section */}
      <section className="w-full bg-[#1a1a1a] py-16">
        <div className="max-w-screen-xl mx-auto px-8">
          <h2 className="text-4xl font-extrabold text-orange-500 mb-8 text-center">Workshops</h2>
          <p className="text-lg text-white mb-12 text-center max-w-3xl mx-auto">
            We promote knowledge sharing by organizing a series of workshops tailored for both NTU students and visiting students from China, Vietnam, and Taiwan, offering both 3D Printing and Programming Workshops with content customizable to align with students’ interests.
          </p>
          <div className="flex justify-center">
            <WorkshopsCarousel />
          </div>
        </div>
      </section>

      {/* Volunteering Section */}
      <section ref={sectionRefs.services}
      className="min-h-[500px] w-full bg-[#2a2626] flex flex-col md:flex-row items-center justify-center py-12">
    <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-center px-8 gap-8">
    
      {/* Left: Workshops Text */}
      <div className="flex-1 flex flex-col justify-center items-start py-8">
        <h2 className="text-4xl font-extrabold text-orange-500 mb-8">Volunteering</h2>
        <p className="text-lg text-white mb-6">
            We collaborate with student care centres to organize Introductory Workshops for Marine Science & Technology for primary school students.
        </p>
      </div>

      {/* Right: Carousel */}
      <div className="flex-1 flex justify-center items-center py-8">
        <VolunteerCarousel />
      </div>
      </div>  
    </section>

      {/* E-Resources Section */}
      <section className="w-full bg-[#1a1a1a] py-16">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-center px-8 gap-8">
          {/* Left: Text */}
          <div className="flex-1 flex flex-col justify-center items-start py-8">
            <h2 className="text-4xl font-extrabold text-orange-500 mb-6">E-Resources Initiatives</h2>
            <p className="text-lg text-white mb-6">
              We have also created an interactive e-resource! It is a great conversation starter to educate children about microplastics, which are ubiquitous pollutants in the marine environment.
            </p>
            <a 
              href="/game" 
              target="_blank" 
              rel="noopener noreferrer"
              className="border border-gray-400 text-gray-200 font-semibold px-8 py-2 rounded-lg shadow transition hover:bg-orange-500 hover:text-white inline-block text-center cursor-pointer"
            >
              Click to try!
            </a>
          </div>

          {/* Right: Video */}
          <div className="flex-1 flex justify-center items-center py-8 max-w-xl w-full">
            <video
              src="/images/eresource_video.mp4"
              controls
              className="rounded-xl w-full h-auto max-h-[600px] object-cover"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>
    </div>
  );
}

function WorkshopsCarousel() {
  const slides = [ {
      image: '/images/yyss_1.jpg',
      title: 'June 2025',
      subtitle: 'YYSS Marine Tech Workshop',
      desc: 'Students from YYSS got hands-on with marine tech in this 3-day workshop! From exploring real-world applications of marine vehicles to building and testing their own surface vehicles in a poolside challenge, this workshop combined engineering, innovation, and environmental responsibility in one exciting experience.',
      link: '/yyss',
    },
    {
      image: '/images/3dpen_1.jpg',
      title: 'June 2025',
      subtitle: '3D Pen Series Workshop',
      desc: 'On 5 June, Mecatron hosted another session of our 3D Pen Series Workshop, welcoming 38 enthusiastic participants from Vietnam! Armed with 3D pens and a splash of creativity, participants brought their ideas to life, from freehand designs to intricate stencil-based creations. This workshop is part of our ongoing 3D Pen Series, where we aim to make creative tech fun and accessible.',
      link: '/3dpen',
    },
    {
      image: '/images/marinevehicle_1.jpg',
      title: 'April 2025',
      subtitle: 'Marine Vehicle Workshop',
      desc: 'Held in the iconic Sands Expo & Convention Center, the heart of Singapore’s celebration of skills, creativity, and innovation, Mecatron was proud to host a hands-on Marine Engineering Workshop aimed to introduce students to the exciting world of marine engineering, highlighting its real-world relevance in fields such as Ocean waste retrieval, Underwater inspection and repair, and Marine biodiversity sampling.',
      link: '/marinevehicle',
    },
    {
      image: '/images/blender3d_1.jpg',
      title: 'October 2024',
      subtitle: 'Blender 3D Workshop',
      desc: 'Mecatron organized a 2 day Blender 3D workshop, providing NTU students with hands-on training in Blender basics, product design fundamentals, Materials and Texturing, Rendering etc. Whether it is for marketing, game asset creation, or simply converting an image from your head to something others can see, creating 3D content is an extremely valuable skill.',
      link: '/blender3d',
    },
    {
      image: '/images/computervision_1.jpeg',
      title: 'September 2024',
      subtitle: 'Computer Vision Workshop',
      desc: 'Mecatron organised and held a computer vision workshop for NTU students, delivering engaging sessions on image processing, neural networks, and real-world AI applications. This workshop introduced Roboflow, guiding attendees through data collection, labeling, and training a YOLO (You Only Look Once) model for object detection.',
      link: '/computervision',
    }, ];

    const [idx, setIdx] = useState(0);

  // Autoplay every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIdx((prev) => (prev + 1) % slides.length);
    }, 5000); // 5 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative w-full max-w-5xl h-full flex flex-col items-center justify-center">
      {/* Slide content */}
      <div className="flex flex-col md:flex-row bg-[#232323] rounded-xl overflow-hidden shadow-lg">
        {/* Left: Image */}
        <img
          src={slides[idx].image}
          alt={slides[idx].subtitle}
          className="w-full md:w-1/2 h-80 md:h-auto object-cover"
        />

        {/* Right: Text */}
        <div className="p-6 flex flex-col justify-center md:w-1/2">
          <div className="text-sm font-bold text-white mb-1">{slides[idx].title}</div>
          <div className="text-2xl font-extrabold text-white mb-2">{slides[idx].subtitle}</div>
          <div className="text-base text-white mb-4">{slides[idx].desc}</div>
          <Link
            to={slides[idx].link}
            className="text-base font-semibold text-white hover:text-orange-500 transition flex items-center group"
          >
            Read More Here
            <span className="ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
          </Link>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex space-x-2 mt-4">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className={`w-3 h-3 rounded-full ${
              i === idx ? 'bg-orange-500' : 'bg-white/60'
            } border border-white transition`}
          />
        ))}
      </div>
    </div>
  );
}

function VolunteerCarousel() {
  const images = [
    '/images/volunteer_1.jpg',
    '/images/volunteer_2.jpeg',
    '/images/volunteer_3.jpeg',
    '/images/volunteer_4.jpeg',
    '/images/volunteer_5.jpeg',
    '/images/volunteer_6.jpeg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full max-w-xl h-[400px] rounded-xl overflow-hidden mx-auto">
      <img
        src={images[currentIndex]}
        alt=""
        className="object-cover w-full h-full transition-opacity duration-500 ease-in-out"
      />

      {/* For image dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-3 h-3 rounded-full ${i === currentIndex ? 'bg-orange-500' : 'bg-white/50'} border border-white`}
          />
        ))}
      </div>
    </div>
  );
}