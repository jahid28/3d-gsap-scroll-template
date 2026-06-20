import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Materov2024Page() {

  function Carousel() {
    const images = [
      '/mate_rov_2024/images/carousel/mate_rov_2024_carousel_1.webp',
      '/mate_rov_2024/images/carousel/mate_rov_2024_carousel_2.webp',
      '/mate_rov_2024/images/carousel/mate_rov_2024_carousel_3.webp',
    ];
    const [idx, setIdx] = useState(0);
    const prev = () => setIdx((idx - 1 + images.length) % images.length);
    const next = () => setIdx((idx + 1) % images.length);
    return (
      <div className="relative w-full max-w-4xl h-auto flex items-center justify-center bg-[#181818]">
        <img src={images[idx]} alt="Team" className="rounded-xl object-cover w-full h-full" />
        <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-orange-500 text-black hover:text-white rounded-full p-2 shadow transition z-10">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
        </button>
        <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-orange-500 text-black hover:text-white rounded-full p-2 shadow transition z-10">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
        </button>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`w-3 h-3 rounded-full ${i === idx ? 'bg-orange-500' : 'bg-white/60'} border border-white`}
            />
          ))}
        </div>
      </div>
    );
  }

  function Journey() {
    const slides = [
      {
        image: '/mate_rov_2024/journey/journey_1.jpg',
        title: 'step 1',
        subtitle: 'Ideation And Preparation',
        desc: 'The journey began with intensive brainstorming sessions where our team explored various concepts and ideas. We focused on defining the problem our robot would solve and outlining the key features it would need.',
        link: '/competitions',
      },
      {
        image: '/mate_rov_2024/journey/Mate-Video-Task.mp4',
        title: 'step 2',
        subtitle: 'Ideation And Preparation',
        desc: 'The tasks that were required to qualify for the Explorer Class in MATE ROV Competition was released.',
        link: '/competitions',
      },
      {
        image: '/mate_rov_2024/journey/journey_3.jpg',
        title: 'step 3',
        subtitle: 'Networking',
        desc: 'Photo of Luc (Executive Lead) and Jennifer (Business Lead) with Jill Zande, MATE Executive Director at the Marine Technology Society.',
        link: '/competitions',
      },
      {
        image: '/mate_rov_2024/journey/journey_4.jpeg',
        title: 'step 4',
        subtitle: 'Development and Testing',
        desc: 'Our team began assembling the required courses and obstacles to qualify for the Explorer class in MATE ROV and also testing, modifying our ROV to ensure it could successfully navigate and complete the tasks.',
        link: '/competitions',
      },
      {
        image: '/mate_rov_2024/journey/journey_5.png',
        title: 'step 5',
        subtitle: 'News on Advancing to the World Championships',
        desc: 'We managed to meet all the requirements for the MATE World Championships',
        link: '/competitions',
      },
      {
        image: '/mate_rov_2024/journey/journey_6.jpeg',
        title: 'step 6',
        subtitle: 'Our final iteration of turtleboi before MATE ROV',
        desc: 'In the upcoming MATE ROV Competition World Championship in June 2024, Turtleboi’s speed, control and reliability will be put through an extreme test as he navigates through a plethora of tasks such as object picking, connection mating and scaled 3D reconstruction, all in a short time span of 15 minutes.',
        link: '/competitions',
      },
    ];
    const [idx, setIdx] = useState(0);
    const prev = () => setIdx((idx - 1 + slides.length) % slides.length);
    const next = () => setIdx((idx + 1) % slides.length);

    return (
      <div className="relative w-full h-full flex flex-col items-center justify-center">
        <div className="relative w-full h-2/3 flex items-center justify-center">
          {idx !== 1 ? (
            <img src={slides[idx].image} alt={slides[idx].subtitle} className="rounded-xl object-contain w-full h-[30vh] md:h-[60vh]" />
          ) : (
            <video src={slides[idx].image} controls className="rounded-xl object-contain w-full h-[30vh] md:h-[80vh]" />
          )}

          <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-orange-500 text-black hover:text-white rounded-full p-2 shadow transition z-10">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-orange-500 text-black hover:text-white rounded-full p-2 shadow transition z-10">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>

        <div className="w-full bg-[#232323] rounded-xl mt-4 p-6 pb-10">
          <div className="text-sm font-bold text-white mb-1">{slides[idx].title}</div>
          <div className="text-2xl font-extrabold text-white mb-2">{slides[idx].subtitle}</div>
          <div className="text-base text-white mb-2">{slides[idx].desc}</div>
        </div>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`w-3 h-3 rounded-full ${i === idx ? 'bg-orange-500' : 'bg-white/60'} border border-white`}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#181818] text-white font-sans">
      <div className="flex flex-col md:flex-row pt-32 items-center md:justify-around text-center">
        <div className="text-lg">2024 May</div>
        <h1 className="text-5xl sm:text-6xl font-bold text-orange-500 mb-8">MATE ROV</h1>
      </div>

      <section className="pt-10 pb-15 px-8 md:px-20 bg-[#181818]">
        <div className="flex flex-col md:flex-row gap-8 md:pt-20 pb-10 w-full">
          <img
            src="/mate_rov_2024/images/mate-rov.jpeg"
            alt="MATE ROV"
            className="w-full md:w-1/4 h-full md:h-64 object-contain object-center flex-shrink-0"
          />
          <div className="flex flex-col flex-1">
            <p className="text-lg sm:text-xl leading-relaxed mb-10 max-w-4xl">
              MATE ROV Competition is an international underwater robotics competition organized by MATE and the Marine Technology Society.
            </p>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="space-y-6 flex-1 text-lg sm:text-xl">
                <p>
                  For the competition, teams need to build their own ROV and complete the mission tasks in their respective category, which are modelled after realistic scenarios of data collection for marine research.
                </p>
                <p>
                  In addition to building a functional ROV to complete competition tasks modelled after real-world scenarios, the MATE ROV Competition also fosters an entrepreneurial spirit in students as teams are also required to market and sell their products.
                </p>
              </div>
              <div className="space-y-6 flex-1 text-lg sm:text-xl">
                <p>
                  Leveraging on the multidisciplinary team that we have, Mecatron aims to represent Nanyang Technological University and Singapore at the 2024 MATE ROV World Championship in Kingsport, Tennessee, USA. This marks the first time a team from Singapore will participate in the Explorer Class of this prestigious international competition. Our participation underscores the growing emphasis on interdisciplinary collaborations, which is a key focus in Singapore's educational and technological advancement.
                </p>
                <p>
                  For more information about the MATE ROV competition, visit https://materovcompetition.org
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-10 pb-20 px-8 md:px-20 bg-[#181818]">
        <div className="flex flex-col items-center max-w-none">
          <p className="text-lg sm:text-xl leading-relaxed mb-6 max-w-4xl">
            Among 82 teams from 17 countries that qualified to compete in the 2024 MATE ROV World Championship, Mecatron was selected for a special award – the Guts and Glory award, presented to the "individual or team that overcame hardships with determination and resolve".
          </p>
          <p className="text-lg sm:text-xl leading-relaxed mb-8 max-w-4xl">
            This year's award includes a USD 250 Amazon gift card, a trophy sponsored by Nancy Summers from Oceaneering, and a hardcover book. As it is not just our team's first time at MATE ROV but also our team's very first overseas competition in history, this is indeed a remarkable achievement.
          </p>
          <p className="text-lg sm:text-xl leading-relaxed mb-8 max-w-4xl">
            This success is a testament to our members' resilience, determination and resourcefulness in overcoming unforeseen challenges.
          </p>
          <Carousel />
        </div>
      </section>

      <div className="flex flex-col items-center pt-10 pb-20 px-8 md:px-20 bg-[#303030] w-full">
        <h2 className="text-4xl font-extrabold text-orange-500 mb-8">The Journey Timeline</h2>
        <div className="w-full max-w-4xl">
          <Journey />
        </div>
      </div>
    </div>
  );
}