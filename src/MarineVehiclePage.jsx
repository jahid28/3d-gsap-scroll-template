import React, { useState, useEffect } from 'react';


export default function MarineVehiclePage() {
  return (
    <div className="bg-[#1a1a1a] text-white">
      <div className="max-w-6xl mx-auto pt-28 px-6">
      <div className="flex items-start justify-between w-full">
      <p className="text-white text-lg">April 2025</p>
          <h1 className="text-5xl text-orange-600 font-bold text-right leading-[0.9]">Marine Vehicle<br />Workshop for WSS</h1>
        </div>

        { /*Title description*/}
        <div className="flex-1 flex flex-col justify-center items-start py-16">
            <h3 className="text-2xl font-extrabold pb-8">Mecatron’s Marine Engineering Workshop for WorldSkills Singapore</h3>
            <p>Held in the iconic Sands Expo & Convention Center, the heart of Singapore’s celebration of skills, creativity, and innovation, Mecatron was proud to host a hands-on Marine Engineering Workshop on 5th April 2025, in collaboration with Nanyang Technological University, to Secondary school students and STEM enthusiasts</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center pt-10 pb-16">
            <PolaroidPhoto
              src="/images/marinevehicle_4.jpg"
              alt="Photo"
              caption="Time for a short hands-on workshop!"
              rotate="-rotate-3"
            />
            <PolaroidPhoto
              src="/images/marinevehicle_1.jpg"
              alt="Photo"
              caption="Thank you for the strong support, WSS!"
              rotate="rotate-2"
            />
            <PolaroidPhoto
              src="/images/marinevehicle_2.jpg"
              alt="Photo"
              caption="Everyone's giving their best effort!"
              rotate="-rotate-6"
            />
</div>

        {/* Section 1 */}
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8">
          {/* Photo */}
          <div className="flex-1 flex justify-center items-center py-8 max-w-xl w-full">
            <PolaroidPhoto
              src="/images/marinevehicle_7.jpg"
              alt="Photo"
              caption="LUCY steals the spotlight!"
              rotate="-rotate-6"
            />
          </div>

          {/* Text */}
          <div className="flex-1 flex flex-col justify-center items-start py-8">
            <h3 className="text-2xl font-extrabold pb-8">Bridging Classroom Concepts with Ocean Innovation</h3>
            <p>The workshop aimed to introduce students to the exciting world of marine engineering, highlighting its real-world relevance in fields such as:</p>
            <br/>
              <li>Ocean waste retrieval</li>
              <li>Underwater inspection and repair</li>
              <li>Marine biodiversity sampling</li>
            <br/>
          </div>

        </div>

        {/* Section 2 */}
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8">

          {/* Text */}
          <div className="flex-1 flex flex-col justify-center items-start py-8">
            <p>Participants had a rare opportunity to explore our operational vehicles up close—including two underwater robots, a torpedo prototype, and a data collection float. These exhibits weren’t just for display; each showcased the behind-the-scenes engineering iterations, giving students a peek into the design thinking and prototyping processes that power real-world solutions.</p>
          </div>
          

          {/* Photo */}
          <div className="flex-1 flex justify-center items-center py-8 max-w-xl w-full">
            <PolaroidPhoto
              src="/images/marinevehicle_5.jpg"
              alt="Photo"
              caption="Mecatron's AUV (LUCY) being showcased"
              rotate="rotate-3"
            />
          </div>

        </div>

</div>

      <section className="w-full bg-[#2a2626]">
        <div className="max-w-screen-xl mx-auto px-8">
          <h2 className="text-4xl font-extrabold text-orange-500 pt-12 text-center">An Immersive Dive into Simulation</h2>

          <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8">

          <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-center sm:px-8 gap-8 py-12">
  {/* Left: Image Carousel */}
  <div className="flex-1 flex justify-center">
    <div className="w-full max-w-full md:max-w-xl aspect-video">
                <ImageCarousel images={['/images/marinevehicle_6.jpg','/images/marinevehicle_7.jpg','/images/marinevehicle_8.jpg','/images/marinevehicle_3.jpg','/images/marinevehicle_9.jpg','/images/marinevehicle_10.jpg',]} />
                      </div>
                    </div>
                </div>

                {/* Text */}
                <div className="flex-1 flex flex-col justify-center items-start py-8">
                  <p>The highlight of the workshop was our <b>interactive underwater vehicle simulation</b>, modeled after real-life marine scenarios. Students got hands-on experience navigating complex aquatic environments, simulating tasks such as environmental sampling and seabed exploration.</p>
                  <br/>
                  <p>This immersive experience not only showcased the practical applications of marine tech but also helped students understand the interdisciplinary nature of marine engineering—from mechanics to software to environmental science.</p>
                </div>        
          </div>

        </div>
        
      </section>


      <section className="w-full bg-[#1a1a1a] py-16">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-4xl font-extrabold text-orange-500 mb-8 text-center">Igniting Curiosity and Future Innovation</h2>

          <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-center px-8 gap-8">
          
                {/* Photo */}
                <div className="flex-1 flex justify-center items-center py-8 max-w-xl w-full">
                  <PolaroidPhoto
                    src="/images/marinevehicle_8.jpg"
                    alt="Photo"
                    caption="All eyes on the screen!"
                    rotate="-rotate-3"
                  />
                </div>

                {/* Text */}
                <div className="flex-1 flex flex-col justify-center items-start py-8">
                    <h3 className="text-4xl text-orange-500 mb-8 italic ">“I had no knowledge about marine tech before. It was such an eye-opening event.”</h3>

                  <p> — A student participant</p>
                  <br/>
                  <p>We believe that by nurturing curiosity, we can plant the seeds for the next generation of marine innovators.</p>
                </div>
        
          </div>
          <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-center px-8 gap-8">
                {/* Text */}
                <div className="flex-1 flex flex-col justify-center items-start py-8">
                  <p>We hope this workshop was not only informative but also sparked ideas for the future. Whether it’s innovating new solutions for ocean health or pursuing a career in engineering, we look forward to seeing these bright minds dive deeper into their passions.</p>
                </div>

                {/* Photo */}
                <div className="flex-1 flex justify-center items-center py-8 max-w-xl w-full">
                  <PolaroidPhoto
                    src="/images/marinevehicle_9.jpg"
                    alt="Photo"
                    caption="Another team candid!"
                    rotate="rotate-6"
                  />
                </div>
        
          </div>
        </div>
        
      </section>

    </div>

    
  );
}

function PolaroidPhoto({ src, alt, caption, rotate = '-rotate-3' }) {
  return (
    <div
      className={`bg-white p-4 pb-10 shadow-lg rounded-lg w-full max-w-[400px] text-center transform ${rotate}`}
    >
      <img
        src={src}
        alt={alt}
        className="w-full aspect-[5/3] object-cover mx-auto rounded-md"
      />
      {caption && (
        <p className="text-black mt-2 text-sm italic font-bold">{caption}</p>
      )}
    </div>
  );
}



function ImageCarousel({ images = [] }) {
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

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-3 h-3 rounded-full ${
              i === currentIndex ? 'bg-orange-500' : 'bg-white/50'
            } border border-white`}
          />
        ))}
      </div>
    </div>
  );
}
