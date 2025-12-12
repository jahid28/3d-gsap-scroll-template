import React, { useState, useEffect } from 'react';
import { backgroundIntensity } from 'three/src/nodes/TSL.js';

const GlassBox = ({ children, color = '#ffffff', blur = 7,intensity=0.15, padding='0px', ...props }) => {
  const hexToRgba = (hex, alpha) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    console.log(r,g,b);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  const glassStyle = {  
    backgroundColor: `${hexToRgba(color,intensity)}`,
    backdropFilter: `blur(${blur}px)`,
    WebkitBackdropFilter: `blur(${blur}px)`, // for safari
    boxShadow: '10px 10px 10px rgba(30, 30, 30, 0.4)',
    borderLeft: `solid 1px rgba(255,255,255)}`,
    borderTop: `solid 1px rgba(255, 255, 255)}`,
    borderRadius: '16px',
    padding: padding,
    ...props.style
  };


  return <div style={glassStyle} {...props} className='mt-8 '>{children}</div>;
};


export default function YYSSPage() {
  return (
    
    <div className="bg-gradient-to-t from-black from-10% to-red-500 text-white px-6 py-16 space-y-16 ">
      <div className="max-w-6xl mx-auto pt-12">
        <div className="flex items-start justify-between w-full">
          <p className="text-white text-lg">June 2025</p>
          <h1 className="text-5xl font-bold text-right leading-[0.9] bg-gradient-to-r from-red-400 to-white inline-block text-transparent bg-clip-text p-2">
            YYSS Marine<br />Tech Workshop
          </h1>
        </div>

        {/* Section 1 */}
        <GlassBox color="#FFFFFF" blur={10}>
          <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 p-4">
            {/* Photo */}
            <div className="flex-1 flex justify-center items-center py-8 max-w-xl w-full">
              <PolaroidPhoto
                src="/images/yyss_1.jpg"
                alt="YYSS Mass Photo"
                caption="Everyone’s proud to showcase their vehicles!"
                rotate="-rotate-6"
                photocolour='#FFFFFF'
              />
            </div>

            {/* Text */}
            <div className="flex-1 flex flex-col justify-center items-start py-8">
              <h3 className="text-2xl font-extrabold pb-8 bg-gradient-to-r from-red-400 to-white inline-block text-transparent bg-clip-text p-2">Marine Tech in Action: A 3-Day Build-and-Learn Adventure</h3>
              <GlassBox color="#FFFFFF" blur={10} intensity={0.3} padding='16px'>

              <p>As part of the Yuying Secondary School (YYSS) Upper Secondary Day Camp, students took a deep dive into the world of marine engineering in our Marine Tech in Action workshop. Over three immersive days (2-4 June 2025), they explored the powerful role marine vehicles play in addressing real-world challenges, such as ocean waste retrieval, underwater inspection, and marine sampling.</p>
              </GlassBox>
            </div>
          </div>
        </GlassBox>

        {/* Section 2 */}
          <GlassBox color="#FFFFFF" blur={10}> 
          <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 p-4">

            {/* Text */}

            <div className="flex-1 flex flex-col justify-center items-start py-8">
            <GlassBox color="#FFFFFF" blur={10} intensity={0.3} padding='16px'>

              <p>With hands-on kits developed by Mecatron, students took on the roles of engineers and assembled their own surface vehicles. The workshop culminated in a friendly poolside showdown, where teams tested their creations in a mini competition!</p>
            </GlassBox>

            </div>
  

            {/* Photo */}
            <div className="flex-1 flex justify-center items-center py-8 max-w-xl w-full">
              <PolaroidPhoto
                src="/images/yyss_3.jpg"
                alt="YYSS Photo 3"
                caption="Teamwork makes the dream work~"
                rotate="rotate-3"
                photocolour='#FFFFFF'
              />
            </div>

          </div>
          </GlassBox>

        {/* Section 3 */}
        <GlassBox color="#FFFFFF" blur={10}>
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 p-4">
          {/* Photo */}
          <div className="flex-1 flex justify-center items-center py-8 max-w-xl w-full">
            <PolaroidPhoto
              src="/images/yyss_6.jpg"
              alt="YYSS Photo 6"
              caption="Pep talk before the competition ^v^"
              rotate="-rotate-6"
              photocolour='#FFFFFF'
            />
          </div>

          {/* Text */}
          <div className="flex-1 flex flex-col justify-center items-start py-8">
            <h3 className="text-2xl font-extrabold pb-8 bg-gradient-to-r from-red-400 to-white inline-block text-transparent bg-clip-text pb-2">Engineering Meets Environmental Responsibility</h3>
            <GlassBox color="#FFFFFF" blur={10} intensity={0.3} padding='16px'>
            <p>Beyond technical skills, this workshop emphasised the real-world impact of marine engineering. Through interactive underwater simulations and design thinking exercises, students discovered how innovation in marine tech contributes to ocean sustainability and responsible design.</p>
            </GlassBox>
          </div>
        </div>
        </GlassBox>

        <GlassBox color="#FFFFFF" blur={10}>
        <div className='text-center'>
          <h2 className="text-4xl font-extrabold text-orange-500 mt-12 text- bg-gradient-to-r from-red-400 to-white inline-block text-transparent bg-clip-text pb-2">Photos & Video Montage</h2>
        </div>

        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-start justify-center sm:px-6 gap-6 py-12 overflow-x-hidden">

          {/* Left: Image Carousel */}
          <div className="w-full md:w-1/2">
          <div className="w-full aspect-video">
              <ImageCarousel images={['/images/yyss_2.jpg', '/images/yyss_4.jpg', '/images/yyss_5.jpg', '/images/yyss_7.jpg', '/images/yyss_8.jpg']} />
            </div>
          </div>

          {/* Right: Video */}
          <div className="w-full md:w-1/2">
          <div className="w-full aspect-video">
              <iframe
                src="https://www.youtube.com/embed/4Mz1h7-QVyU"
                title="Video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-xl"
              />
            </div>
          </div>

        </div>
        </GlassBox>


      </div>

    </div>

  );
}

function PolaroidPhoto({ src, alt, caption, rotate = '-rotate-3', photocolour = 'white' }) {
  return (
    <div
      className={`p-4 pb-10 shadow-lg rounded-lg w-fit text-center transform ${rotate}`}
      style={{ backgroundColor: photocolour }}
    >
      <img
        src={src}
        alt={alt}
        className="w-96 aspect-[5/3] object-cover mx-auto rounded-md"
      />
      {caption && (
        <p className="text-red-600 mt-2 text-sm italic font-bold">{caption}</p>
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
            className={`w-3 h-3 rounded-full ${i === currentIndex ? 'bg-orange-500' : 'bg-white/50'
              } border border-white`}
          />
        ))}
      </div>
    </div>
  );
}
